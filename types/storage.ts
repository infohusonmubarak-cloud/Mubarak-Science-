// Shape of everything Mubarek Science persists client-side in localStorage
// for this local-only pass. `lib/storage/client.ts` is the only module that
// touches `window.localStorage` directly — everything else goes through
// `lib/storage/api.ts`, which is the seam a future real backend swaps in
// behind without touching any UI component.

export interface ProgressState {
  schemaVersion: 1;
  completedConcepts: Record<string, { chapterSlug: string; completedAt: string }>;
}

export type BookmarkType = 'concept' | 'formula';

export interface Bookmark {
  type: BookmarkType;
  slug: string;
  chapterSlug?: string;
  addedAt: string;
}

export interface BookmarksState {
  schemaVersion: 1;
  bookmarks: Bookmark[];
}

export interface Note {
  id: string;
  conceptSlug: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotesState {
  schemaVersion: 1;
  notes: Note[];
}

export interface ChapterProgress {
  done: number;
  total: number;
  percent: number;
}
