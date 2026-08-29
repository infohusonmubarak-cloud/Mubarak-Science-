'use client';

// Shared gate for both /admin and /msmk/admin: signed in via Supabase Auth
// AND listed in the `admins` table (supabase-schema-admin-access.sql). A
// Supabase Auth account alone is not enough — see the comment in
// supabase-schema-admin-access.sql for why that used to be the case and
// was a real gap.

import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';

export type AdminSessionStatus = 'loading' | 'signed-out' | 'checking-admin' | 'not-admin' | 'admin';

export function useAdminSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);
  // Keyed by access_token so a stale result from a previous session can
  // never be mistaken for the current one — read as "checking" whenever it
  // doesn't match the live session, rather than clearing it with a
  // synchronous setState in the effect below (that would fire on every
  // session change and cascade a render).
  const [adminResult, setAdminResult] = useState<{ token: string; isAdmin: boolean } | null>(null);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    client.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });
    const { data: subscription } = client.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client || !session) return;
    const token = session.access_token;
    client.rpc('is_current_user_admin').then(({ data, error }) => {
      setAdminResult({ token, isAdmin: !error && data === true });
    });
  }, [session]);

  const isAdmin = session && adminResult?.token === session.access_token ? adminResult.isAdmin : null;

  const status: AdminSessionStatus = !checked
    ? 'loading'
    : !session
      ? 'signed-out'
      : isAdmin === null
        ? 'checking-admin'
        : isAdmin
          ? 'admin'
          : 'not-admin';

  function signOut() {
    getSupabaseBrowserClient()?.auth.signOut();
  }

  return { status, session, signOut };
}
