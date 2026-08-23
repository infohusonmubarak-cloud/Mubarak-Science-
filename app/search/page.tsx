import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchPageClient } from '@/components/search/SearchPageClient';

export const metadata: Metadata = { title: 'Search' };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
      <h1 className="text-2xl font-bold text-foreground">Search</h1>
      <SearchPageClient initialQuery={q ?? ''} />
    </div>
  );
}
