import type { ChapterProgress, ProgressState } from '@/types/storage';
import { STORAGE_KEYS } from './keys';
import { readJSON, subscribe, writeJSON } from './client';

const DEFAULT_STATE: ProgressState = { schemaVersion: 1, completedConcepts: {} };

export function getProgress(): ProgressState {
  return readJSON(STORAGE_KEYS.progress, DEFAULT_STATE);
}

/**
 * Always the fixed default, never touching localStorage — the required
 * `getServerSnapshot` for `useSyncExternalStore`. The static HTML built by
 * `next build` runs in Node (no `window`), so it always renders the default
 * state; if the hydration-time snapshot read real localStorage instead, a
 * learner with existing progress would hit a hydration mismatch the moment
 * they revisit a page. Real data is picked up in the render right after
 * hydration, via `getProgress` (the regular client snapshot).
 */
export function getProgressServerSnapshot(): ProgressState {
  return DEFAULT_STATE;
}

export function markConceptComplete(chapterSlug: string, conceptSlug: string): void {
  const state = getProgress();
  writeJSON(STORAGE_KEYS.progress, {
    ...state,
    completedConcepts: {
      ...state.completedConcepts,
      [conceptSlug]: { chapterSlug, completedAt: new Date().toISOString() },
    },
  });
}

export function unmarkConceptComplete(conceptSlug: string): void {
  const state = getProgress();
  const completedConcepts = { ...state.completedConcepts };
  delete completedConcepts[conceptSlug];
  writeJSON(STORAGE_KEYS.progress, { ...state, completedConcepts });
}

export function isConceptComplete(conceptSlug: string): boolean {
  return conceptSlug in getProgress().completedConcepts;
}

/**
 * Pure — derives a chapter's progress from an already-fetched `ProgressState`
 * rather than reading storage itself. Components that already hold a
 * hydration-safe snapshot (from `useSyncExternalStore`) must use this
 * instead of `getChapterProgress`, which reads live storage unconditionally
 * and would reintroduce the exact hydration mismatch `getProgressServerSnapshot`
 * exists to avoid.
 */
export function deriveChapterProgress(state: ProgressState, chapterSlug: string, totalConcepts: number): ChapterProgress {
  if (totalConcepts === 0) return { done: 0, total: 0, percent: 0 };
  const done = Object.values(state.completedConcepts).filter((entry) => entry.chapterSlug === chapterSlug).length;
  return { done, total: totalConcepts, percent: Math.round((done / totalConcepts) * 100) };
}

export function getChapterProgress(chapterSlug: string, totalConcepts: number): ChapterProgress {
  return deriveChapterProgress(getProgress(), chapterSlug, totalConcepts);
}

export function subscribeProgress(listener: () => void): () => void {
  return subscribe(STORAGE_KEYS.progress, listener);
}
