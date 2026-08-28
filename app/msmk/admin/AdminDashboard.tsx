'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import { cn } from '@/lib/utils/cn';

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  bkash_transaction_id: string;
  status: 'pending' | 'verified' | 'rejected';
  submitted_at: string;
}

interface LearnerSummaryRow {
  access_code: string;
  full_name: string;
  email: string;
  modules_attempted: number;
  average_percent: number;
  certificate_unlocked: boolean;
}

type StatusFilter = 'pending' | 'verified' | 'rejected' | 'all';

function IssueCodeForm({ registration, onIssued }: { registration: Registration; onIssued: () => void }) {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function issue() {
    const client = getSupabaseBrowserClient();
    if (!client || !code.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('msmk_access_codes').insert({
      code: code.trim().toUpperCase(),
      email: registration.email,
      full_name: registration.full_name,
      registration_id: registration.id,
    });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That code is already in use.' : 'Could not issue the code.');
      return;
    }
    onIssued();
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <input
        type="text"
        placeholder="MSMK01"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-32 rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-sm uppercase text-foreground"
      />
      <Button size="sm" onClick={issue} disabled={busy || !code.trim()}>
        {busy ? 'Issuing…' : 'Issue Access Code'}
      </Button>
      {error && <span className="text-xs font-medium text-danger">{error}</span>}
    </div>
  );
}

function StandaloneCodeForm({ onIssued }: { onIssued: () => void }) {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function issue() {
    const client = getSupabaseBrowserClient();
    if (!client || !code.trim() || !email.trim() || !name.trim()) return;
    setBusy(true);
    setError(null);
    setSuccess(false);
    const { error: insertError } = await client.from('msmk_access_codes').insert({
      code: code.trim().toUpperCase(),
      email: email.trim(),
      full_name: name.trim(),
      registration_id: null,
    });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That code is already in use.' : 'Could not issue the code.');
      return;
    }
    setCode('');
    setEmail('');
    setName('');
    setSuccess(true);
    onIssued();
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="text-sm text-foreground-muted">
        Issue a code with no registration or payment behind it — for a reviewer (e.g. the MBBS doctor
        checking medical content), a test account, or a free code. It unlocks every module and{' '}
        <a href="/msmk/review" className="font-medium text-brand underline">
          the one-page review view
        </a>
        , the same as a paid access code.
      </p>
      <div className="mt-3 flex flex-wrap items-end gap-2">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-foreground-muted">Code</span>
          <input
            type="text"
            placeholder="MSMKREV01"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-36 rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-sm uppercase text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-foreground-muted">Email</span>
          <input
            type="email"
            placeholder="doctor@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-52 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-foreground"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-foreground-muted">Name</span>
          <input
            type="text"
            placeholder="Dr. Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-40 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-foreground"
          />
        </label>
        <Button size="sm" onClick={issue} disabled={busy || !code.trim() || !email.trim() || !name.trim()}>
          {busy ? 'Issuing…' : 'Issue Code'}
        </Button>
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
      {success && <p className="mt-2 text-xs font-medium text-success">Code issued — share it with them along with the email you entered.</p>}
    </div>
  );
}

function RegistrationRow({ registration, onChanged }: { registration: Registration; onChanged: () => void }) {
  const [busy, setBusy] = useState(false);

  async function setStatus(status: 'verified' | 'rejected') {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    setBusy(true);
    await client.from('msmk_registrations').update({ status, reviewed_at: new Date().toISOString() }).eq('id', registration.id);
    setBusy(false);
    onChanged();
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-foreground">{registration.full_name}</p>
          <p className="text-sm text-foreground-muted">{registration.email} • {registration.phone}</p>
          <p className="text-sm text-foreground-muted">{registration.location}</p>
          <p className="mt-1 font-mono text-xs text-foreground-muted">TrxID: {registration.bkash_transaction_id}</p>
          <p className="text-xs text-foreground-muted">Submitted {new Date(registration.submitted_at).toLocaleString()}</p>
        </div>
        <Badge tone={registration.status === 'verified' ? 'success' : registration.status === 'rejected' ? 'danger' : 'warning'}>
          {registration.status}
        </Badge>
      </div>

      {registration.status === 'pending' && (
        <div className="mt-3 flex gap-2">
          <Button size="sm" onClick={() => setStatus('verified')} disabled={busy}>
            Mark Verified
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setStatus('rejected')} disabled={busy}>
            Reject
          </Button>
        </div>
      )}

      {registration.status === 'verified' && <IssueCodeForm registration={registration} onIssued={onChanged} />}
    </div>
  );
}

export function AdminDashboard({ onSignOut }: { onSignOut: () => void }) {
  const [filter, setFilter] = useState<StatusFilter>('pending');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [learners, setLearners] = useState<LearnerSummaryRow[]>([]);
  const [loading, setLoading] = useState(true);
  // Bumped to trigger a refetch — the fetch itself lives inline in the
  // effect below (a `.then()` callback, not a named function called
  // synchronously) so every setState it makes is inside a genuine async
  // callback, not reachable synchronously from the effect body.
  const [reloadToken, setReloadToken] = useState(0);
  const refresh = useCallback(() => setReloadToken((t) => t + 1), []);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    Promise.all([
      client.from('msmk_registrations').select('*').order('submitted_at', { ascending: false }),
      client.from('msmk_learner_summary').select('*').order('access_code', { ascending: true }),
    ]).then(([{ data: regs }, { data: summary }]) => {
      setRegistrations((regs ?? []) as Registration[]);
      setLearners((summary ?? []) as LearnerSummaryRow[]);
      setLoading(false);
    });
  }, [reloadToken]);

  const filtered = registrations.filter((r) => filter === 'all' || r.status === filter);
  const counts = {
    pending: registrations.filter((r) => r.status === 'pending').length,
    verified: registrations.filter((r) => r.status === 'verified').length,
    rejected: registrations.filter((r) => r.status === 'rejected').length,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">MSMK Staff Admin</h1>
        <Button variant="secondary" size="sm" onClick={onSignOut}>
          Sign out
        </Button>
      </div>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Registrations</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {(['pending', 'verified', 'rejected', 'all'] as StatusFilter[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                filter === s ? 'border-brand bg-brand-soft text-brand-strong' : 'border-border text-foreground-muted hover:bg-surface-muted'
              )}
            >
              {s[0].toUpperCase() + s.slice(1)}
              {s !== 'all' ? ` (${counts[s]})` : ''}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-foreground-muted">Loading…</p>}
          {!loading && filtered.length === 0 && <p className="text-sm text-foreground-muted">No registrations here.</p>}
          {filtered.map((r) => (
            <RegistrationRow key={r.id} registration={r} onChanged={refresh} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Special Access Codes</h2>
        <div className="mt-3">
          <StandaloneCodeForm onIssued={refresh} />
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">Learners</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-surface-muted text-foreground-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Code</th>
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Modules attempted</th>
                <th className="px-3 py-2 font-medium">Avg %</th>
                <th className="px-3 py-2 font-medium">Certificate</th>
              </tr>
            </thead>
            <tbody>
              {learners.map((l) => (
                <tr key={l.access_code} className="border-t border-border">
                  <td className="px-3 py-2 font-mono">{l.access_code}</td>
                  <td className="px-3 py-2">{l.full_name}</td>
                  <td className="px-3 py-2">{l.modules_attempted}</td>
                  <td className="px-3 py-2">{l.average_percent}%</td>
                  <td className="px-3 py-2">{l.certificate_unlocked ? '🏆 Unlocked' : '—'}</td>
                </tr>
              ))}
              {learners.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-4 text-center text-foreground-muted">
                    No learners yet.
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
