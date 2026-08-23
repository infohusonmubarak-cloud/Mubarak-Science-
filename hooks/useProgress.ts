'use client';

import { useSyncExternalStore } from 'react';
import {
  deriveChapterProgress,
  getProgress,
  getProgressServerSnapshot,
  markConceptComplete,
  subscribeProgress,
  unmarkConceptComplete,
} from '@/lib/storage/api';
import type { ChapterProgress, ProgressState } from '@/types/storage';

export function useProgress() {
  const progress = useSyncExternalStore(subscribeProgress, getProgress, getProgressServerSnapshot);

  return {
    progress,
    isConceptComplete: (conceptSlug: string) => conceptSlug in progress.completedConcepts,
    markComplete: (chapterSlug: string, conceptSlug: string) => markConceptComplete(chapterSlug, conceptSlug),
    unmarkComplete: (conceptSlug: string) => unmarkConceptComplete(conceptSlug),
    completedConcepts: progress.completedConcepts,
  };
}

export function useChapterProgress(chapterSlug: string, totalConcepts: number): ChapterProgress {
  const progress: ProgressState = useSyncExternalStore(subscribeProgress, getProgress, getProgressServerSnapshot);
  return deriveChapterProgress(progress, chapterSlug, totalConcepts);
}
