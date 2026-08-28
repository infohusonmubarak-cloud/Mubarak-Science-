'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav-items';
import { cn } from '@/lib/utils/cn';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 shadow-[0_-4px_16px_-8px_rgb(15_23_42_/_0.15)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
                active ? 'text-brand' : 'text-foreground-muted hover:text-foreground'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-6 w-9 items-center justify-center rounded-full text-base leading-none transition-colors',
                  active && 'bg-brand-soft'
                )}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
