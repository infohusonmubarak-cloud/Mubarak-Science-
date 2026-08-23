import Link from 'next/link';
import { BRAND } from '@/lib/strings/copy';
import { GlobalSearchBar } from '@/components/search/GlobalSearchBar';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-foreground">
          <span aria-hidden="true" className="text-lg">🔬</span>
          <span className="hidden sm:inline">{BRAND.name}</span>
        </Link>
        <div className="hidden flex-1 justify-end sm:flex">
          <GlobalSearchBar />
        </div>
        <Link
          href="/search"
          className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-foreground-muted hover:bg-surface-muted sm:hidden"
        >
          <span aria-hidden="true">🔎</span>
        </Link>
      </div>
    </header>
  );
}
