import Link from 'next/link';
import { BRAND } from '@/lib/strings/copy';
import { GlobalSearchBar } from '@/components/search/GlobalSearchBar';
import { ThemeToggle } from './ThemeToggle';
import { NavDrawer } from './NavDrawer';

const PRIMARY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/subjects', label: 'Subjects' },
  { href: '/about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-subject-mathematics via-subject-physics to-subject-biology text-lg shadow-sm"
          >
            🔬
          </span>
          <span className="hidden font-[family-name:var(--font-display)] text-lg font-bold text-foreground sm:inline">
            {BRAND.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 justify-end sm:flex md:max-w-xs">
          <GlobalSearchBar />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <Link
            href="/search"
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-foreground-muted hover:bg-surface-muted sm:hidden"
            aria-label="Search"
          >
            <span aria-hidden="true">🔎</span>
          </Link>
          <NavDrawer />
        </div>
      </div>
    </header>
  );
}
