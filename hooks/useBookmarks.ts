'use client';

import { useSyncExternalStore } from 'react';
import { getBookmarks, getBookmarksServerSnapshot, subscribeBookmarks, toggleBookmark } from '@/lib/storage/api';
import type { BookmarkType } from '@/types/storage';

export function useBookmarks() {
  const bookmarks = useSyncExternalStore(subscribeBookmarks, getBookmarks, getBookmarksServerSnapshot);

  return {
    bookmarks,
    isBookmarked: (type: BookmarkType, slug: string) =>
      bookmarks.some((bookmark) => bookmark.type === type && bookmark.slug === slug),
    toggle: (type: BookmarkType, slug: string, chapterSlug?: string) => toggleBookmark(type, slug, chapterSlug),
  };
}
