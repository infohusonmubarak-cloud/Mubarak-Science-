// Barrel module — the single seam a future real backend swaps in behind.
// UI components and hooks import from here, never from the individual
// storage files or `client.ts` directly.
export {
  getProgress,
  getProgressServerSnapshot,
  getChapterProgress,
  deriveChapterProgress,
  markConceptComplete,
  unmarkConceptComplete,
  isConceptComplete,
  subscribeProgress,
} from './progress';

export {
  getBookmarks,
  getBookmarksServerSnapshot,
  isBookmarked,
  toggleBookmark,
  subscribeBookmarks,
} from './bookmarks';

export {
  getNotes,
  getAllNotes,
  getAllNotesServerSnapshot,
  addNote,
  updateNote,
  deleteNote,
  subscribeNotes,
} from './notes';

export {
  getAssessmentState,
  getAssessmentStateServerSnapshot,
  getAssessmentAttempt,
  recordAssessmentAttempt,
  subscribeAssessments,
} from './assessments';

export {
  getQuestionHistory,
  getQuestionHistoryServerSnapshot,
  addQuestionToHistory,
  clearQuestionHistory,
  subscribeQuestionHistory,
} from './questions';
