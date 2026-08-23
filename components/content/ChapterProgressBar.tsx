'use client';

import { useChapterProgress } from '@/hooks/useProgress';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface ChapterProgressBarProps {
  chapterSlug: string;
  totalConcepts: number;
}

export function ChapterProgressBar({ chapterSlug, totalConcepts }: ChapterProgressBarProps) {
  const progress = useChapterProgress(chapterSlug, totalConcepts);
  if (totalConcepts === 0) return null;
  return <ProgressBar percent={progress.percent} label={`Chapter progress — ${progress.done}/${progress.total} concepts`} />;
}
