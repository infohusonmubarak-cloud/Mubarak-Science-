'use client';

import { useSyncExternalStore } from 'react';
import { getTheme, getThemeServerSnapshot, setTheme, subscribeTheme } from '@/lib/theme/themeStore';

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getThemeServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
      className={
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border ' +
        'bg-surface text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground ' +
        (className ?? '')
      }
    >
      <span aria-hidden="true" className="text-base leading-none">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
