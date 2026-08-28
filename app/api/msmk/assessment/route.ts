import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Not logged in.' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const moduleId = typeof body?.moduleId === 'string' ? body.moduleId : '';
  const score = typeof body?.score === 'number' ? body.score : NaN;
  const total = typeof body?.total === 'number' ? body.total : NaN;

  if (!moduleId || !Number.isFinite(score) || !Number.isFinite(total) || total <= 0) {
    return NextResponse.json({ ok: false, error: 'Invalid submission.' }, { status: 400 });
  }

  const client = getSupabaseServiceClient();
  if (!client) {
    return NextResponse.json({ ok: false, error: 'Not connected.' }, { status: 503 });
  }

  const { data: existing } = await client
    .from('msmk_assessment_attempts')
    .select('attempt_count')
    .eq('access_code', session.accessCode)
    .eq('module_id', moduleId)
    .maybeSingle();

  const { error } = await client.from('msmk_assessment_attempts').upsert(
    {
      access_code: session.accessCode,
      module_id: moduleId,
      score,
      total,
      percent: Math.round((score / total) * 100),
      attempt_count: (existing?.attempt_count ?? 0) + 1,
      last_attempt_at: new Date().toISOString(),
    },
    { onConflict: 'access_code,module_id' }
  );

  if (error) {
    return NextResponse.json({ ok: false, error: 'Could not save your score.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
