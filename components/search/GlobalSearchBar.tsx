'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildSearchIndex } from '@/lib/search/buildIndex';
import { searchEntries } from '@/lib/search/search';
import { SearchInput } from '@/components/ui/SearchInput';
import { SearchResults } from './SearchResults';

export function GlobalSearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchEntries(index, query, 6), [index, query]);

  return (
    <div className="relative w-full max-w-sm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }}
      >
        <SearchInput
          value={query}
          onChange={(value) => {
            setQuery(value);
            setOpen(true);
          }}
          placeholder="Search Mubarek Science…"
        />
      </form>
      {open && query.trim() ? (
        <div className="absolute z-40 mt-1 w-full rounded-lg border border-border bg-surface p-1 shadow-lg">
          {results.length > 0 ? (
            <SearchResults results={results} onNavigate={() => setOpen(false)} />
          ) : (
            <p className="px-2 py-3 text-sm text-foreground-muted">No matches yet.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
