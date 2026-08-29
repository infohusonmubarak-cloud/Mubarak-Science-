'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';

export function StaffLoginForm({ heading, subheading }: { heading: string; subheading: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const client = getSupabaseBrowserClient();
    if (!client) {
      setError('Not connected yet. Check the Supabase configuration.');
      return;
    }
    setIsPending(true);
    const { error: signInError } = await client.auth.signInWithPassword({ email, password });
    setIsPending(false);
    if (signInError) {
      setError('Could not sign in. Check your email and password.');
    }
    // On success, the caller's onAuthStateChange listener picks up the new
    // session and swaps to the dashboard — nothing else to do here.
  }

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">{heading}</h1>
        <p className="mt-2 text-sm text-foreground-muted">{subheading}</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-5">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Email</span>
          <input
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground">Password</span>
          <input
            type="password"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="text-sm font-medium text-danger">{error}</p>}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Signing in…' : 'Sign In'}
        </Button>
      </form>
      <p className="text-center text-xs text-foreground-muted">
        Staff accounts are created in Supabase → Authentication → Users, then added to the{' '}
        <code className="font-mono">admins</code> table.
      </p>
    </div>
  );
}
