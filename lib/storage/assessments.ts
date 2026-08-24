import type { AssessmentAttempt, AssessmentState } from '@/types/storage';
import { STORAGE_KEYS } from './keys';
import { readJSON, subscribe, writeJSON } from './client';

const DEFAULT_STATE: AssessmentState = { schemaVersion: 1, attempts: {} };

export function getAssessmentState(): AssessmentState {
  return readJSON(STORAGE_KEYS.assessments, DEFAULT_STATE);
}

/** See `getProgressServerSnapshot` for why this must always return the fixed default. */
export function getAssessmentStateServerSnapshot(): AssessmentState {
  return DEFAULT_STATE;
}

export function getAssessmentAttempt(chapterSlug: string): AssessmentAttempt | undefined {
  return getAssessmentState().attempts[chapterSlug];
}

export function recordAssessmentAttempt(
  chapterSlug: string,
  result: { score: number; total: number; weakConceptSlugs: string[] }
): void {
  const state = getAssessmentState();
  const previousAttemptCount = state.attempts[chapterSlug]?.attemptCount ?? 0;
  const attempt: AssessmentAttempt = {
    chapterSlug,
    score: result.score,
    total: result.total,
    percent: result.total === 0 ? 0 : Math.round((result.score / result.total) * 100),
    weakConceptSlugs: result.weakConceptSlugs,
    attemptCount: previousAttemptCount + 1,
    lastAttemptAt: new Date().toISOString(),
  };
  writeJSON(STORAGE_KEYS.assessments, {
    ...state,
    attempts: { ...state.attempts, [chapterSlug]: attempt },
  });
}

export function subscribeAssessments(listener: () => void): () => void {
  return subscribe(STORAGE_KEYS.assessments, listener);
}
