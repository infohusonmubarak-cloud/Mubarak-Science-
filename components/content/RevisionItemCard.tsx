import Link from 'next/link';
import type { RevisionItem } from '@/types/content';

interface RevisionItemCardProps {
  item: RevisionItem;
  conceptTitle?: string;
  conceptHref?: string;
}

export function RevisionItemCard({ item, conceptTitle, conceptHref }: RevisionItemCardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      {conceptTitle ? (
        conceptHref ? (
          <Link href={conceptHref} className="text-sm font-semibold text-brand hover:underline">
            {conceptTitle}
          </Link>
        ) : (
          <p className="text-sm font-semibold text-foreground">{conceptTitle}</p>
        )
      ) : null}
      <p className="mt-1 text-sm text-foreground">{item.keyPoint}</p>
      <p className="mt-1 font-mono text-xs text-foreground-muted">{item.miniExample}</p>
    </div>
  );
}
