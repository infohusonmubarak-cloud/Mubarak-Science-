'use client';

import { useBookmarks } from '@/hooks/useBookmarks';
import type { BookmarkType } from '@/types/storage';
import { cn } from '@/lib/utils/cn';

interface BookmarkButtonProps {
  type: BookmarkType;
  slug: string;
  chapterSlug?: string;
  className?: string;
}

export function BookmarkButton({ type, slug, chapterSlug, className }: BookmarkButtonProps) {
  const { isBookmarked, toggle } = useBookmarks();
  const bookmarked = isBookmarked(type, slug);

  return (
    <button
      type="button"
      onClick={() => toggle(type, slug, chapterSlug)}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition-colors',
        bookmarked ? 'border-brand bg-brand-soft text-brand-strong' : 'text-foreground-muted hover:bg-surface-muted',
        className
      )}
    >
      <span aria-hidden="true">{bookmarked ? '★' : '☆'}</span>
      {bookmarked ? 'Saved' : 'Save'}
    </button>
  );
}
