import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  ariaLabel?: string;
}

const BASE = 'block rounded-xl border border-border bg-surface p-5 shadow-sm';

export function Card({ children, href, className, ariaLabel }: CardProps) {
  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(BASE, 'transition-colors hover:border-brand hover:bg-brand-soft', className)}
      >
        {children}
      </Link>
    );
  }
  return <div className={cn(BASE, className)}>{children}</div>;
}
