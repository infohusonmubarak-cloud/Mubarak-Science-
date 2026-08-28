import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { createSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const code = typeof body?.code === 'string' ? body.code.trim().toUpperCase() : '';
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!code || !email) {
    return NextResponse.json({ ok: false, error: 'Enter your access code and email.' }, { status: 400 });
  }

  const client = getSupabaseServiceClient();
  if (!client) {
    return NextResponse.json({ ok: false, error: 'Login is not connected yet. Please try again later.' }, { status: 503 });
  }

  const { data, error } = await client
    .from('msmk_access_codes')
    .select('code, email, full_name, active')
    .eq('code', code)
    .maybeSingle();

  if (error || !data || !data.active || String(data.email).toLowerCase() !== email) {
    return NextResponse.json(
      { ok: false, error: 'We could not find that access code and email together. Check both and try again.' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true, fullName: data.full_name });
  response.cookies.set(MSMK_SESSION_COOKIE, createSessionCookieValue(data.code, data.email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 90,
  });
  return response;
}
