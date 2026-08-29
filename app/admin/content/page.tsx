'use client';

import Link from 'next/link';
import { supabasePublicConfigured } from '@/lib/supabase/env';
import { useAdminSession } from '@/lib/admin/useAdminSession';
import { NotAuthorized } from '@/components/admin/NotAuthorized';
import { StaffLoginForm } from '@/components/admin/StaffLoginForm';
import { ContentManager } from '@/components/admin/ContentManager';

export default function AdminContentPage() {
  const { status, signOut } = useAdminSession();

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }
  if (status === 'loading') return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  if (status === 'signed-out') return <StaffLoginForm heading="Staff Login" subheading="Sign in to manage site content." />;
  if (status === 'checking-admin') return <p className="text-center text-sm text-foreground-muted">Checking access…</p>;
  if (status === 'not-admin') return <NotAuthorized onSignOut={signOut} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin" className="text-sm text-brand underline">
            ← Back to Admin
          </Link>
          <h1 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Content Manager</h1>
          <p className="mt-1 text-sm text-foreground-muted">
            This adds content through a new database-backed system. The site&apos;s existing chapters (Math/Physics/Chemistry/Biology)
            still come from code and are not affected here yet — anything you publish below appears alongside them once the
            reading pages are wired to read from the database too.
          </p>
        </div>
      </div>
      <ContentManager />
    </div>
  );
}
