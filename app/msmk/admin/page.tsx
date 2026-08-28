'use client';

import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import { supabasePublicConfigured } from '@/lib/supabase/env';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export default function MSMKAdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  // Starts true so "not configured" can be read straight from the
  // (unchanging) supabasePublicConfigured constant below, rather than
  // needing a synchronous setState in the effect for that branch — the
  // effect below only ever sets state from genuinely async callbacks
  // (the initial getSession() resolution and the auth-change
  // subscription), never synchronously in its own body.
  const [checked, setChecked] = useState(false);

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

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }

  if (!checked) {
    return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  }

  if (!session) {
    return <AdminLogin />;
  }

  return (
    <AdminDashboard
      onSignOut={() => {
        getSupabaseBrowserClient()?.auth.signOut();
      }}
    />
  );
}
