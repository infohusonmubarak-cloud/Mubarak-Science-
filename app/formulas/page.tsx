'use client';

import { useMemo, useState } from 'react';
import { getAllFormulas } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchInput } from '@/components/ui/SearchInput';
import { FormulaCard } from '@/components/content/FormulaCard';

export default function FormulasPage() {
  const [query, setQuery] = useState('');
  const allFormulas = useMemo(() => getAllFormulas(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allFormulas;
    return allFormulas.filter(
      ({ formula }) =>
        formula.name.toLowerCase().includes(q) ||
        formula.expression.toLowerCase().includes(q) ||
        formula.meaning.toLowerCase().includes(q)
    );
  }, [allFormulas, query]);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Formula Library' }]} />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Formula Library</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Every formula from the chapters written so far — searchable, and bookmarkable for quick revision.
        </p>
      </div>
      <SearchInput value={query} onChange={setQuery} placeholder="Search formulas — e.g. distance, slope…" />
      {filtered.length === 0 ? (
        <p className="text-sm text-foreground-muted">No formulas match &ldquo;{query}&rdquo; yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map(({ formula, chapterSlug }) => (
            <FormulaCard key={formula.slug} formula={formula} chapterSlug={chapterSlug} />
          ))}
        </div>
      )}
    </div>
  );
}
