'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabasePublicConfigured } from '@/lib/supabase/env';
import { useAdminSession } from '@/lib/admin/useAdminSession';
import { NotAuthorized } from '@/components/admin/NotAuthorized';
import { StaffLoginForm } from '@/components/admin/StaffLoginForm';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import type { Database } from '@/types/supabase';

type Learner = Database['public']['Tables']['learners']['Row'];
type ChapterStat = Database['public']['Views']['chapter_completion_stats']['Row'];
type QuestionStat = Database['public']['Views']['question_wrong_answer_stats']['Row'];

function LearnersAndAnalytics() {
  const [learners, setLearners] = useState<Learner[]>([]);
  const [chapterStats, setChapterStats] = useState<ChapterStat[]>([]);
  const [questionStats, setQuestionStats] = useState<QuestionStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    Promise.all([
      client.from('learners').select('*').order('created_at', { ascending: false }),
      client.from('chapter_completion_stats').select('*').order('sections_completed', { ascending: false }),
      client.from('question_wrong_answer_stats').select('*').order('wrong_count', { ascending: false }),
    ]).then(([{ data: l }, { data: c }, { data: q }]) => {
      setLearners((l ?? []) as Learner[]);
      setChapterStats((c ?? []) as ChapterStat[]);
      setQuestionStats(((q ?? []) as QuestionStat[]).slice(0, 20));
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-sm text-foreground-muted">Loading…</p>;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Learners</h2>
        <p className="mt-1 text-sm text-foreground-muted">
          {learners.length === 0
            ? 'No accounts yet — the site doesn’t have a public sign-up/login flow wired up yet, so this stays empty until that ships.'
            : `${learners.length} registered.`}
        </p>
        {learners.length > 0 && (
          <div className="mt-3 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="bg-surface-muted text-foreground-muted">
                <tr>
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Email</th>
                  <th className="px-3 py-2 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {learners.map((l) => (
                  <tr key={l.id} className="border-t border-border">
                    <td className="px-3 py-2">{l.full_name || '—'}</td>
                    <td className="px-3 py-2">{l.email}</td>
                    <td className="px-3 py-2">{new Date(l.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Most-completed Chapters</h2>
        <p className="mt-1 text-sm text-foreground-muted">Only counts chapters created through the new Content Manager — the site&apos;s existing static chapters aren&apos;t tracked here yet.</p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-surface-muted text-foreground-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Chapter</th>
                <th className="px-3 py-2 font-medium">Learners with progress</th>
                <th className="px-3 py-2 font-medium">Sections completed</th>
              </tr>
            </thead>
            <tbody>
              {chapterStats.map((c) => (
                <tr key={c.chapter_id} className="border-t border-border">
                  <td className="px-3 py-2">{c.chapter_title}</td>
                  <td className="px-3 py-2">{c.learners_with_progress}</td>
                  <td className="px-3 py-2">{c.sections_completed}</td>
                </tr>
              ))}
              {chapterStats.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-3 py-4 text-center text-foreground-muted">
                    No data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Hardest Quiz Questions</h2>
        <p className="mt-1 text-sm text-foreground-muted">Ranked by how often learners get them wrong. Top 20 shown.</p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-surface-muted text-foreground-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Question ID</th>
                <th className="px-3 py-2 font-medium">Wrong</th>
                <th className="px-3 py-2 font-medium">Total attempts</th>
              </tr>
            </thead>
            <tbody>
              {questionStats.map((q, i) => (
                <tr key={`${q.chapter_id}-${q.question_id}-${i}`} className="border-t border-border">
                  <td className="px-3 py-2 font-mono text-xs">{q.question_id ?? '—'}</td>
                  <td className="px-3 py-2">{q.wrong_count}</td>
                  <td className="px-3 py-2">{q.total_attempts}</td>
                </tr>
              ))}
              {questionStats.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-3 py-4 text-center text-foreground-muted">
                    No quiz attempts recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default function AdminLearnersPage() {
  const { status, signOut } = useAdminSession();

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }
  if (status === 'loading') return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  if (status === 'signed-out') return <StaffLoginForm heading="Staff Login" subheading="Sign in to view learners and analytics." />;
  if (status === 'checking-admin') return <p className="text-center text-sm text-foreground-muted">Checking access…</p>;
  if (status === 'not-admin') return <NotAuthorized onSignOut={signOut} />;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin" className="text-sm text-brand underline">
          ← Back to Admin
        </Link>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Learners &amp; Analytics</h1>
      </div>
      <LearnersAndAnalytics />
    </div>
  );
}
