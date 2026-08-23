import type { Formula } from '@/types/content';
import { BookmarkButton } from './BookmarkButton';

interface FormulaCardProps {
  formula: Formula;
  chapterSlug?: string;
  showBookmark?: boolean;
}

export function FormulaCard({ formula, chapterSlug, showBookmark = true }: FormulaCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground-muted">{formula.name}</h3>
        {showBookmark ? <BookmarkButton type="formula" slug={formula.slug} chapterSlug={chapterSlug} /> : null}
      </div>
      <p className="mt-2 rounded-lg bg-surface-muted px-4 py-3 font-mono text-lg text-brand-strong">
        {formula.expression}
      </p>
      <p className="mt-3 text-sm text-foreground">{formula.meaning}</p>
      <dl className="mt-3 space-y-1 text-sm">
        {formula.variables.map((variable) => (
          <div key={variable.symbol} className="flex gap-2">
            <dt className="font-mono font-medium text-foreground">{variable.symbol}</dt>
            <dd className="text-foreground-muted">— {variable.meaning}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm text-foreground-muted">
        <span className="font-medium text-foreground">When to use it: </span>
        {formula.whenToUse}
      </p>
    </div>
  );
}
