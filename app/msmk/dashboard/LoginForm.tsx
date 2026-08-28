'use client';

import { useState, useTransition, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function LoginForm({ notice }: { notice?: string }) {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await fetch('/api/msmk/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, email }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Login failed. Please try again.');
        return;
      }
      router.refresh();
    });
  }

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">My Dashboard</h1>
        <p className="mt-2 text-sm text-foreground-muted">Log in with your access code and email.</p>
      </div>

      {notice && (
        <p className="rounded-lg border border-warning bg-warning-soft px-3 py-2 text-sm text-foreground">{notice}</p>
      )}

      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-5">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Access code</span>
          <input
            type="text"
            required
            placeholder="MSMK01"
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 font-mono text-base uppercase text-foreground"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
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
        {error && <p className="text-sm font-medium text-danger">{error}</p>}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Logging in…' : 'Log In'}
        </Button>
      </form>

      <p className="text-center text-sm text-foreground-muted">
        Don&apos;t have a code yet?{' '}
        <a href="/msmk/register" className="font-medium text-brand underline">
          Register here
        </a>
        .
      </p>
    </div>
  );
}
