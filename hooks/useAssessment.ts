'use client';

import { useSyncExternalStore } from 'react';
import {
  getAssessmentState,
  getAssessmentStateServerSnapshot,
  recordAssessmentAttempt,
  subscribeAssessments,
} from '@/lib/storage/api';

export function useAssessmentAttempt(chapterSlug: string) {
  const state = useSyncExternalStore(subscribeAssessments, getAssessmentState, getAssessmentStateServerSnapshot);
  const attempt = state.attempts[chapterSlug];

  return {
    attempt,
    submitAttempt: (result: { score: number; total: number; weakConceptSlugs: string[] }) =>
      recordAssessmentAttempt(chapterSlug, result),
  };
}
