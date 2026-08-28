import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { LoginForm } from './LoginForm';
import { DashboardView, type AttemptRow } from './DashboardView';

export const metadata: Metadata = { title: 'My Dashboard — MSMK' };

export default async function MSMKDashboardPage() {
  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);

  if (!session) {
    return <LoginForm />;
  }

  const client = getSupabaseServiceClient();
  if (!client) {
    return <LoginForm notice="Dashboard is not connected yet. Please try again later." />;
  }

  const { data: access } = await client
    .from('msmk_access_codes')
    .select('code, email, full_name, active')
    .eq('code', session.accessCode)
    .maybeSingle();

  if (!access || !access.active || String(access.email).toLowerCase() !== session.email) {
    return <LoginForm notice="Your session expired or your access code was deactivated. Please log in again." />;
  }

  const { data: attempts } = await client
    .from('msmk_assessment_attempts')
    .select('module_id, score, total, percent, last_attempt_at')
    .eq('access_code', session.accessCode);

  return <DashboardView fullName={String(access.full_name)} attempts={(attempts ?? []) as AttemptRow[]} />;
}
