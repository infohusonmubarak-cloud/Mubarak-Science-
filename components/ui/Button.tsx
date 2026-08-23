import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'sm';

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-strong',
  secondary: 'bg-surface text-foreground border border-border hover:bg-surface-muted',
  ghost: 'text-foreground hover:bg-surface-muted',
};

const SIZE_CLASSES: Record<Size, string> = {
  md: 'px-4 py-2.5 text-sm',
  sm: 'px-3 py-1.5 text-sm',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ' +
  'disabled:opacity-50 disabled:pointer-events-none cursor-pointer disabled:cursor-not-allowed';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders as a link when set, a native button otherwise. */
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
