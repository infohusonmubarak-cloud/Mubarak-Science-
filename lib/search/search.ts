import type { SearchEntry } from './types';

/** Simple, dependency-free ranked substring search: title matches outrank description/keyword matches. */
export function searchEntries(entries: SearchEntry[], query: string, limit = 20): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = entries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${entry.description} ${entry.keywords}`.toLowerCase();
      let score = 0;
      if (title === q) score = 100;
      else if (title.startsWith(q)) score = 80;
      else if (title.includes(q)) score = 60;
      else if (haystack.includes(q)) score = 20;
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ entry }) => entry);
}
