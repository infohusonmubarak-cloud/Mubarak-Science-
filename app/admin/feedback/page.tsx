'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { supabasePublicConfigured } from '@/lib/supabase/env';
import { useAdminSession } from '@/lib/admin/useAdminSession';
import { NotAuthorized } from '@/components/admin/NotAuthorized';
import { StaffLoginForm } from '@/components/admin/StaffLoginForm';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import type { Database } from '@/types/supabase';

type FeedbackRow = Database['public']['Tables']['feedback']['Row'];

function FeedbackCard({ item, onChanged }: { item: FeedbackRow; onChanged: () => void }) {
  async function resolve() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    await client.from('feedback').update({ status: 'resolved', resolved_at: new Date().toISOString() }).eq('id', item.id);
    onChanged();
  }

  async function reopen() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    await client.from('feedback').update({ status: 'open', resolved_at: null }).eq('id', item.id);
    onChanged();
  }

  async function remove() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    if (!confirm('Delete this feedback permanently?')) return;
    await client.from('feedback').delete().eq('id', item.id);
    onChanged();
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm text-foreground-muted">
            {item.name || 'Anonymous'} {item.email ? `• ${item.email}` : ''}
          </p>
          <p className="text-xs text-foreground-muted">{new Date(item.created_at).toLocaleString()}</p>
        </div>
        <Badge tone={item.status === 'open' ? 'warning' : 'success'}>{item.status}</Badge>
      </div>
      <p className="mt-2 whitespace-pre-wrap text-sm text-foreground">{item.message}</p>
      <div className="mt-3 flex gap-2">
        {item.status === 'open' ? (
          <Button size="sm" onClick={resolve}>
            Mark Resolved
          </Button>
        ) : (
          <Button size="sm" variant="secondary" onClick={reopen}>
            Reopen
          </Button>
        )}
        <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
          Delete
        </button>
      </div>
    </div>
  );
}

function FeedbackInbox() {
  const [items, setItems] = useState<FeedbackRow[]>([]);
  const [filter, setFilter] = useState<'open' | 'resolved' | 'all'>('open');
  const [loading, setLoading] = useState(true);
  const [reloadToken, setReloadToken] = useState(0);
  const refresh = useCallback(() => setReloadToken((t) => t + 1), []);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    client
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setItems((data ?? []) as FeedbackRow[]);
        setLoading(false);
      });
  }, [reloadToken]);

  const filtered = items.filter((i) => filter === 'all' || i.status === filter);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['open', 'resolved', 'all'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium ${filter === f ? 'border-brand bg-brand-soft text-brand-strong' : 'border-border text-foreground-muted hover:bg-surface-muted'}`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {loading && <p className="text-sm text-foreground-muted">Loading…</p>}
      {!loading && filtered.length === 0 && <p className="text-sm text-foreground-muted">Nothing here.</p>}
      <div className="space-y-3">
        {filtered.map((i) => (
          <FeedbackCard key={i.id} item={i} onChanged={refresh} />
        ))}
      </div>
    </div>
  );
}

export default function AdminFeedbackPage() {
  const { status, signOut } = useAdminSession();

  if (!supabasePublicConfigured) {
    return <p className="text-center text-sm text-foreground-muted">Not connected yet. Check the Supabase configuration.</p>;
  }
  if (status === 'loading') return <p className="text-center text-sm text-foreground-muted">Loading…</p>;
  if (status === 'signed-out') return <StaffLoginForm heading="Staff Login" subheading="Sign in to review feedback." />;
  if (status === 'checking-admin') return <p className="text-center text-sm text-foreground-muted">Checking access…</p>;
  if (status === 'not-admin') return <NotAuthorized onSignOut={signOut} />;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin" className="text-sm text-brand underline">
          ← Back to Admin
        </Link>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Feedback &amp; Corrections</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Error reports submitted against content. The submission form isn&apos;t wired into chapter/section pages yet — this
          inbox is ready for when it is.
        </p>
      </div>
      <FeedbackInbox />
    </div>
  );
}
