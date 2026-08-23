'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, SECONDARY_NAV_ITEMS, type NavItem } from './nav-items';
import { cn } from '@/lib/utils/cn';

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        active ? 'bg-brand-soft text-brand-strong' : 'text-foreground-muted hover:bg-surface-muted hover:text-foreground'
      )}
    >
      <span aria-hidden="true">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <aside className="hidden w-56 shrink-0 border-r border-border py-6 pr-4 md:block">
      <nav aria-label="Main" className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}
      </nav>
      <hr className="my-4 border-border" />
      <nav aria-label="More" className="space-y-1">
        {SECONDARY_NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}
      </nav>
    </aside>
  );
}
