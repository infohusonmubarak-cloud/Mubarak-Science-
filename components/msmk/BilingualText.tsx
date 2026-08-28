'use client';

import { useSyncExternalStore } from 'react';
import type { ElementType } from 'react';
import { getLanguage, getLanguageServerSnapshot, subscribeLanguage } from '@/lib/msmk/languageStore';
import { cn } from '@/lib/utils/cn';
import type { Bilingual } from '@/types/msmk';

interface BilingualTextProps {
  text: Bilingual;
  /** Tag for the English line (and, in 'both' mode, the Rohingya line too — headings stay headings in both languages). */
  as?: ElementType;
  className?: string;
  /** Extra classes for the Rohingya line only, e.g. to de-emphasize it under a heading. */
  rhgClassName?: string;
}

/**
 * Renders one piece of learner-facing text in whichever of English /
 * Rohingya / Both the learner has chosen. In 'both' mode this renders two
 * separate block elements (never one wrapped around the other) so an `as`
 * of 'h1'/'h2'/etc never ends up nested inside another element — the
 * Rohingya line is dir="rtl" lang="rhg" and picks up the Hanifi Rohingya
 * font purely from `lang` + the font stack in globals.css, no extra class
 * required at the call site.
 */
export function BilingualText({ text, as, className, rhgClassName }: BilingualTextProps) {
  const language = useSyncExternalStore(subscribeLanguage, getLanguage, getLanguageServerSnapshot);
  const Tag = as ?? 'span';

  if (language === 'en') {
    return <Tag className={className}>{text.en}</Tag>;
  }

  if (language === 'rhg') {
    return (
      <Tag dir="rtl" lang="rhg" className={cn(className, rhgClassName)}>
        {text.rhg}
      </Tag>
    );
  }

  return (
    <>
      <Tag className={className}>{text.en}</Tag>
      <Tag dir="rtl" lang="rhg" className={cn(className, 'mt-1 text-foreground-muted', rhgClassName)}>
        {text.rhg}
      </Tag>
    </>
  );
}
