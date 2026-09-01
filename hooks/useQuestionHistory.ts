'use client';

import { useSyncExternalStore } from 'react';
import {
  getQuestionHistory,
  getQuestionHistoryServerSnapshot,
  addQuestionToHistory,
  clearQuestionHistory,
  subscribeQuestionHistory,
} from '@/lib/storage/api';

export function useQuestionHistory() {
  const questions = useSyncExternalStore(subscribeQuestionHistory, getQuestionHistory, getQuestionHistoryServerSnapshot);

  return { questions, addQuestion: addQuestionToHistory, clear: clearQuestionHistory };
}
