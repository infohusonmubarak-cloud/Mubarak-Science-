'use client';

import Link from 'next/link';
import { supabasePublicConfigured } from '@/lib/supabase/env';
import { useAdminSession } from '@/lib/admin/useAdminSession';
import { NotAuthorized } from '@/components/admin/NotAuthorized';
import { StaffLoginForm } from '@/components/admin/StaffLoginForm';
import { Button } from '@/components/ui/Button';

const SECTIONS = [
  {
    title: 'MSMK — Medical Knowledge Course',
    description: 'Registrations, access codes, learners, and the doctor review page. Fully live today.',
    href: '/msmk/admin',
    cta: 'Open MSMK Admin',
    status: 'live' as const,
  },
  {
    title: 'Content — Subjects, Chapters, Sections',
    description: 'Add, edit, reorder, and publish/unpublish content in the new database-backed system.',
    href: '/admin/content',
    cta: 'Open Content Manager',
    status: 'live' as const,
  },
  {
    title: 'Learners & Analytics',
    description: 'Who has signed up, chapter completion, and which quiz questions people get wrong most.',
    href: '/admin/learners',
    cta: 'Open Learners & Analytics',
    status: 'live' as const,
  },
  {
    title: 'Feedback & Corrections',
    description: 'Read and resolve error reports submitted from any chapter or section.',
    href: '/admin/feedback',
    cta: 'Open Feedback Inbox',
    status: 'live' as const,
  },
];

function AdminHome({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-foreground-muted">Staff dashboard</p>
          <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Mubarak Science Admin</h1>
        </div>
        <Button variant="secondary" size="sm" onClick={onSignOut}>
          Sign out
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <div key={s.title} className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">{s.title}</h2>
              <p className="mt-1.5 text-sm text-foreground-muted">{s.description}</p>
            </div>
            {s.href ? (
              <Link
                href={s.href}
                className="mt-4 inline-flex w-fit items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-strong"
              >
                {s.cta}
              </Link>
            ) : (
              <span className="mt-4 inline-flex w-fit items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground-muted">
                {s.cta}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { status, signOut } = useAdminSession();

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }

  if (status === 'loading') {
    return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  }

  if (status === 'signed-out') {
    return <StaffLoginForm heading="Staff Login" subheading="Sign in to manage site content, learners, and feedback." />;
  }

  if (status === 'checking-admin') {
    return <p className="text-center text-sm text-foreground-muted">Checking access…</p>;
  }

  if (status === 'not-admin') {
    return <NotAuthorized onSignOut={signOut} />;
  }

  return <AdminHome onSignOut={signOut} />;
}
