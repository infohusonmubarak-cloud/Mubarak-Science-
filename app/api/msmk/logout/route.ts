import { NextResponse } from 'next/server';
import { MSMK_SESSION_COOKIE } from '@/lib/msmk/session';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(MSMK_SESSION_COOKIE);
  return response;
}
