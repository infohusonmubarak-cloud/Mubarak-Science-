'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { submitRegistration } from './actions';

const BKASH_NUMBER = '01861055615';

const PAYMENT_STEPS = [
  { icon: '📱', text: 'Open your bKash app.' },
  { icon: '➡️', text: 'Tap "Send Money".' },
  { icon: '🔢', text: <>Enter this number: <strong className="font-mono">{BKASH_NUMBER}</strong></> },
  { icon: '💵', text: 'Enter the amount: 500 taka.' },
  { icon: '✅', text: 'Send the payment.' },
  { icon: '📋', text: 'Copy the Transaction ID (TrxID) from your bKash confirmation message.' },
  { icon: '✍️', text: 'Paste the Transaction ID into the form below.' },
] as const;

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bkashTransactionId: string;
  honeypot: string;
}

const EMPTY_FORM: FormState = { fullName: '', email: '', phone: '', location: '', bkashTransactionId: '', honeypot: '' };

export default function MSMKRegisterPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm((prev) => ({ ...prev, [key]: e.target.value })),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await submitRegistration(form);
      if (!result.ok) {
        setError(result.error ?? 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    });
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-success bg-success-soft p-8 text-center">
        <p className="text-4xl">✅</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
          Registration received!
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          We will check your payment by hand. You will get your access code by email, usually within 1–2 days.
          Once you have it, come back and log in on{' '}
          <a href="/msmk/dashboard" className="font-medium text-brand underline">
            My Dashboard
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-8">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">Register for MSMK</h1>
        <p className="mt-2 text-sm text-foreground-muted">Course fee: 500 BDT, paid by bKash.</p>
      </div>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
          Step 1 — Pay with bKash
        </h2>
        <ol className="mt-4 space-y-3">
          {PAYMENT_STEPS.map((step, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-msmk-firstaid-soft text-lg"
              >
                {step.icon}
              </span>
              <span className="text-sm leading-snug text-foreground">{step.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
          Step 2 — Tell us about you
        </h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          {/* Honeypot — hidden from real visitors, catches simple bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
            {...field('honeypot')}
          />

          <label className="block">
            <span className="text-sm font-medium text-foreground">Full name</span>
            <input
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
              {...field('fullName')}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">Email (Gmail)</span>
            <input
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
              {...field('email')}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">Phone number</span>
            <input
              type="tel"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
              {...field('phone')}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">Location (camp / block / area)</span>
            <input
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
              {...field('location')}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">bKash Transaction ID (TrxID)</span>
            <input
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 font-mono text-base text-foreground"
              {...field('bkashTransactionId')}
            />
          </label>

          {error && <p className="text-sm font-medium text-danger">{error}</p>}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Submitting…' : 'Submit Registration'}
          </Button>
        </form>
      </section>
    </div>
  );
}
