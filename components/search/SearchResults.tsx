import Link from 'next/link';
import type { SearchEntry, SearchEntryType } from '@/lib/search/types';
import { Badge } from '@/components/ui/Badge';

const TYPE_LABEL: Record<SearchEntryType, string> = {
  subject: 'Subject',
  chapter: 'Chapter',
  concept: 'Concept',
  formula: 'Formula',
};

interface SearchResultsProps {
  results: SearchEntry[];
  onNavigate?: () => void;
}

export function SearchResults({ results, onNavigate }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <ul className="divide-y divide-border">
      {results.map((result) => (
        <li key={result.id}>
          <Link
            href={result.href}
            onClick={onNavigate}
            className="flex items-start justify-between gap-3 px-1 py-2.5 hover:bg-surface-muted"
          >
            <span>
              <span className="block text-sm font-medium text-foreground">{result.title}</span>
              <span className="block text-xs text-foreground-muted">{result.description}</span>
            </span>
            <Badge tone="neutral" className="shrink-0">{TYPE_LABEL[result.type]}</Badge>
          </Link>
        </li>
      ))}
    </ul>
  );
}
