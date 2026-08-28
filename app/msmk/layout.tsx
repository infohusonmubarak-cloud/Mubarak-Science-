import type { ReactNode } from 'react';
import { Noto_Sans_Hanifi_Rohingya } from 'next/font/google';
import Link from 'next/link';
import { LanguageToggle } from '@/components/msmk/LanguageToggle';
import { TranslationNotice } from '@/components/msmk/TranslationNotice';

// Scoped to this layout (not the root) so the rest of the site — the
// Science courses — never pays for a script it doesn't use. The variable
// this produces is consumed by the `[lang="rhg"]` rule in globals.css, so
// any Rohingya text rendered anywhere under /msmk picks it up automatically
// without each call site needing its own font class.
const rohingyaFont = Noto_Sans_Hanifi_Rohingya({
  variable: '--font-rohingya',
  subsets: ['hanifi-rohingya'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const MSMK_NAV = [
  { href: '/msmk', label: 'Course Home' },
  { href: '/msmk/register', label: 'Register' },
  { href: '/msmk/dashboard', label: 'My Dashboard' },
] as const;

export default function MSMKLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${rohingyaFont.variable} flex flex-col gap-6`}>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/msmk" className="flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-foreground">
            <span aria-hidden="true" className="text-xl">🩺</span>
            MSMK
          </Link>
          <nav aria-label="MSMK" className="flex flex-wrap items-center gap-1">
            {MSMK_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageToggle />
      </div>

      <TranslationNotice />

      {children}
    </div>
  );
}
