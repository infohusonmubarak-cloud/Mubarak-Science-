export type SearchEntryType = 'subject' | 'chapter' | 'concept' | 'formula';

export interface SearchEntry {
  id: string;
  type: SearchEntryType;
  title: string;
  description: string;
  href: string;
  /** Extra terms to match against (chapter title, related keywords) that don't belong in the visible description. */
  keywords: string;
}
