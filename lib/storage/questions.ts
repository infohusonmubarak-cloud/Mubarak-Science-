import type { QuestionHistoryEntry, QuestionsState } from '@/types/storage';
import { STORAGE_KEYS } from './keys';
import { readJSON, subscribe, writeJSON } from './client';

const DEFAULT_STATE: QuestionsState = { schemaVersion: 1, questions: [] };

// Keeps the client-side history from growing without bound — this is a
// convenience list for the learner, not a record of truth (that's the
// server-side rate limit counter, which is independent of this).
const MAX_QUESTION_HISTORY = 50;

export function getQuestionHistory(): QuestionHistoryEntry[] {
  return readJSON(STORAGE_KEYS.questions, DEFAULT_STATE).questions;
}

/** Always the fixed empty default — see getProgressServerSnapshot for why. */
export function getQuestionHistoryServerSnapshot(): QuestionHistoryEntry[] {
  return DEFAULT_STATE.questions;
}

export function addQuestionToHistory(entry: QuestionHistoryEntry): void {
  const state = readJSON(STORAGE_KEYS.questions, DEFAULT_STATE);
  const questions = [entry, ...state.questions].slice(0, MAX_QUESTION_HISTORY);
  writeJSON(STORAGE_KEYS.questions, { ...state, questions });
}

export function clearQuestionHistory(): void {
  writeJSON(STORAGE_KEYS.questions, DEFAULT_STATE);
}

export function subscribeQuestionHistory(listener: () => void): () => void {
  return subscribe(STORAGE_KEYS.questions, listener);
}
