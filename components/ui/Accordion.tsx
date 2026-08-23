import type { ReactNode } from 'react';

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * A single collapsible section, built on native `<details>`/`<summary>` —
 * keyboard support, screen-reader semantics, and open/close state all come
 * from the browser for free, no client JS required.
 */
export function Accordion({ title, children, defaultOpen, className }: AccordionProps) {
  return (
    <details
      open={defaultOpen}
      className={`group rounded-lg border border-border bg-surface open:pb-4 ${className ?? ''}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-medium marker:content-none">
        {title}
        <span aria-hidden="true" className="text-foreground-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="px-4">{children}</div>
    </details>
  );
}
