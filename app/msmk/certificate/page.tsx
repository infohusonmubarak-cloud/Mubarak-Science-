import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'crypto';
import type { Metadata } from 'next';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { getModuleSummaries } from '@/lib/msmk/getters';
import { CertificateView } from './CertificateView';

export const metadata: Metadata = { title: 'My Certificate — MSMK' };

const PASS_PERCENT = 80;

export default async function MSMKCertificatePage() {
  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);
  if (!session) redirect('/msmk/dashboard');

  const client = getSupabaseServiceClient();
  if (!client) redirect('/msmk/dashboard');

  const { data: access } = await client
    .from('msmk_access_codes')
    .select('code, email, full_name, active')
    .eq('code', session.accessCode)
    .maybeSingle();

  if (!access || !access.active || String(access.email).toLowerCase() !== session.email) {
    redirect('/msmk/dashboard');
  }

  const { data: attempts } = await client
    .from('msmk_assessment_attempts')
    .select('module_id, percent')
    .eq('access_code', session.accessCode);

  const modules = getModuleSummaries();
  const passedCount = (attempts ?? []).filter((a) => a.percent >= PASS_PERCENT).length;
  const unlocked = passedCount === modules.length && modules.length > 0;

  if (!unlocked) redirect('/msmk/dashboard');

  const completionDate = new Date().toISOString().slice(0, 10);
  const verificationId = createHash('sha256')
    .update(`${access.code}|${completionDate}|${process.env.MSMK_SESSION_SECRET ?? 'msmk'}`)
    .digest('hex')
    .slice(0, 10)
    .toUpperCase();

  return (
    <CertificateView
      fullName={String(access.full_name)}
      accessCode={access.code}
      completionDate={completionDate}
      verificationId={`MSMK-${verificationId}`}
    />
  );
}
