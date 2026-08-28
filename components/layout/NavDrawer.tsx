'use client';

import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from './nav-items';
import { ThemeToggle } from './ThemeToggle';
import { GlobalSearchBar } from '@/components/search/GlobalSearchBar';
import { cn } from '@/lib/utils/cn';

const PRIMARY_LINKS = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/subjects', label: 'Subjects', icon: '📚' },
  { href: '/about', label: 'About', icon: 'ℹ️' },
];

export function NavDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const titleId = useId();

  // Close on route change — compared during render (not an effect) per
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-state-based-on-a-prop-change,
  // so navigating never leaves the drawer open a frame longer than needed.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while open, and support Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // Portalled straight onto <body> — rendering it as a child of the
  // sticky, backdrop-blurred Header would make Header the containing
  // block for these `fixed` elements (a `filter`/`backdrop-filter`
  // ancestor does that to fixed descendants), clipping the drawer to the
  // header's own height instead of the full viewport.
  const drawer = (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-200 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-xs flex-col gap-6 overflow-y-auto',
          'bg-surface p-5 shadow-2xl transition-transform duration-200 ease-out md:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <h2 id={titleId} className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
            Menu
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted hover:bg-surface-muted"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <GlobalSearchBar />

        <nav aria-label="Primary" className="space-y-1">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive(item.href) ? 'bg-brand-soft text-brand-strong' : 'text-foreground hover:bg-surface-muted'
              )}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <hr className="border-border" />

        <nav aria-label="More" className="space-y-1">
          {[...NAV_ITEMS.filter((item) => item.href !== '/' && item.href !== '/subjects'), ...SECONDARY_NAV_ITEMS].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive(item.href) ? 'bg-brand-soft text-brand-strong' : 'text-foreground hover:bg-surface-muted'
              )}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm text-foreground-muted">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden"
      >
        <span aria-hidden="true" className="text-lg leading-none">☰</span>
      </button>
      {typeof document !== 'undefined' ? createPortal(drawer, document.body) : null}
    </>
  );
}
