'use client';

import { useSyncExternalStore } from 'react';
import { getLanguage, getLanguageServerSnapshot, setLanguage, subscribeLanguage, type MSMKLanguage } from '@/lib/msmk/languageStore';
import { cn } from '@/lib/utils/cn';

// The Rohingya label reuses exactly the script string supplied by the
// project owner (verified by them) rather than a fresh transliteration —
// see the note in lib/msmk/translationStatus.ts about not inventing new
// Hanifi Rohingya text without native-speaker review.
const ROHINGYA_LABEL = '𐴀𐴞𐴕𐴠𐴑 𐴃𐴡𐴓𐴡𐴌';

const OPTIONS: { value: MSMKLanguage; label: string; srLabel: string }[] = [
  { value: 'en', label: 'EN', srLabel: 'English only' },
  { value: 'both', label: `EN + ${ROHINGYA_LABEL}`, srLabel: 'English and Rohingya' },
  { value: 'rhg', label: ROHINGYA_LABEL, srLabel: 'Rohingya only' },
];

export function LanguageToggle({ className }: { className?: string }) {
  const language = useSyncExternalStore(subscribeLanguage, getLanguage, getLanguageServerSnapshot);

  return (
    <div
      role="radiogroup"
      aria-label="Language / 𐴟𐴉𐴝 𐴓𐴠𐴑𐴝"
      className={cn('inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5', className)}
    >
      {OPTIONS.map((option) => {
        const active = language === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.srLabel}
            onClick={() => setLanguage(option.value)}
            className={cn(
              'rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors',
              active ? 'bg-brand text-white' : 'text-foreground-muted hover:bg-surface-muted hover:text-foreground'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
