// Signed session cookie for the MSMK learner dashboard. Not a JWT library
// — just enough to (a) avoid hitting Supabase on every request with a raw,
// forgeable value, and (b) still re-verify against the DB on each
// dashboard load (see app/msmk/dashboard/page.tsx) so a revoked access
// code stops working immediately rather than only after the cookie
// expires.

import { createHmac, timingSafeEqual } from 'crypto';

export const MSMK_SESSION_COOKIE = 'msmk_session';

const SECRET = process.env.MSMK_SESSION_SECRET ?? '';

function sign(payload: string): string {
  return createHmac('sha256', SECRET).update(payload).digest('hex');
}

export interface MSMKSession {
  accessCode: string;
  email: string;
}

export function createSessionCookieValue(accessCode: string, email: string): string {
  const payload = `${accessCode}|${email.toLowerCase()}`;
  const encoded = Buffer.from(payload, 'utf8').toString('base64url');
  return `${encoded}.${sign(payload)}`;
}

export function parseSessionCookieValue(value: string | undefined): MSMKSession | null {
  if (!value || !SECRET) return null;

  const dot = value.lastIndexOf('.');
  if (dot === -1) return null;
  const encoded = value.slice(0, dot);
  const signature = value.slice(dot + 1);

  let payload: string;
  try {
    payload = Buffer.from(encoded, 'base64url').toString('utf8');
  } catch {
    return null;
  }

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const sep = payload.indexOf('|');
  if (sep === -1) return null;
  const accessCode = payload.slice(0, sep);
  const email = payload.slice(sep + 1);
  if (!accessCode || !email) return null;

  return { accessCode, email };
}
