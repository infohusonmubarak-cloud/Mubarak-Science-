import type { Bookmark, BookmarksState, BookmarkType } from '@/types/storage';
import { STORAGE_KEYS } from './keys';
import { readJSON, subscribe, writeJSON } from './client';

const DEFAULT_STATE: BookmarksState = { schemaVersion: 1, bookmarks: [] };

export function getBookmarks(): Bookmark[] {
  return readJSON(STORAGE_KEYS.bookmarks, DEFAULT_STATE).bookmarks;
}

/** Always the fixed empty default — see `getProgressServerSnapshot` for why. */
export function getBookmarksServerSnapshot(): Bookmark[] {
  return DEFAULT_STATE.bookmarks;
}

export function isBookmarked(type: BookmarkType, slug: string): boolean {
  return getBookmarks().some((bookmark) => bookmark.type === type && bookmark.slug === slug);
}

export function toggleBookmark(type: BookmarkType, slug: string, chapterSlug?: string): void {
  const state = readJSON(STORAGE_KEYS.bookmarks, DEFAULT_STATE);
  const exists = state.bookmarks.some((bookmark) => bookmark.type === type && bookmark.slug === slug);
  const bookmarks = exists
    ? state.bookmarks.filter((bookmark) => !(bookmark.type === type && bookmark.slug === slug))
    : [...state.bookmarks, { type, slug, chapterSlug, addedAt: new Date().toISOString() }];
  writeJSON(STORAGE_KEYS.bookmarks, { ...state, bookmarks });
}

export function subscribeBookmarks(listener: () => void): () => void {
  return subscribe(STORAGE_KEYS.bookmarks, listener);
}
