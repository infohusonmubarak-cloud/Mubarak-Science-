'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildSearchIndex } from '@/lib/search/buildIndex';
import { searchEntries } from '@/lib/search/search';
import { SearchInput } from '@/components/ui/SearchInput';
import { SearchResults } from './SearchResults';

export function SearchPageClient({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchEntries(index, query, 50), [index, query]);

  useEffect(() => {
    const url = query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search';
    router.replace(url, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-run when the query itself changes, not on every router identity change
  }, [query]);

  return (
    <div className="space-y-4">
      <SearchInput value={query} onChange={setQuery} placeholder="Search Mubarek Science…" autoFocus />
      {query.trim() === '' ? (
        <p className="text-sm text-foreground-muted">
          Search across subjects, chapters, concepts and formulas — try &ldquo;slope&rdquo; or &ldquo;distance&rdquo;.
        </p>
      ) : results.length === 0 ? (
        <p className="text-sm text-foreground-muted">No results for &ldquo;{query}&rdquo;.</p>
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}
