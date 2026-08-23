'use client';

import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils/cn';

interface MarkCompleteButtonProps {
  chapterSlug: string;
  conceptSlug: string;
  className?: string;
}

export function MarkCompleteButton({ chapterSlug, conceptSlug, className }: MarkCompleteButtonProps) {
  const { isConceptComplete, markComplete, unmarkComplete } = useProgress();
  const complete = isConceptComplete(conceptSlug);

  return (
    <button
      type="button"
      onClick={() => (complete ? unmarkComplete(conceptSlug) : markComplete(chapterSlug, conceptSlug))}
      aria-pressed={complete}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
        complete ? 'bg-success-soft text-success' : 'border border-border text-foreground-muted hover:bg-surface-muted',
        className
      )}
    >
      <span aria-hidden="true">{complete ? '✓' : ''}</span>
      {complete ? 'Completed' : 'Mark as complete'}
    </button>
  );
}
