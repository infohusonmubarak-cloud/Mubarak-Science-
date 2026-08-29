'use client';

import { supabasePublicConfigured } from '@/lib/supabase/env';
import { useAdminSession } from '@/lib/admin/useAdminSession';
import { NotAuthorized } from '@/components/admin/NotAuthorized';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export default function MSMKAdminPage() {
  const { status, signOut } = useAdminSession();

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }

  if (status === 'loading') {
    return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  }

  if (status === 'signed-out') {
    return <AdminLogin />;
  }

  if (status === 'checking-admin') {
    return <p className="text-center text-sm text-foreground-muted">Checking access…</p>;
  }

  if (status === 'not-admin') {
    return <NotAuthorized onSignOut={signOut} />;
  }

  return <AdminDashboard onSignOut={signOut} />;
}
