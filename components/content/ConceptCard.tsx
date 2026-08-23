import type { ConceptSummary } from '@/types/content';
import { Card } from '@/components/ui/Card';
import { DifficultyBadge } from '@/components/ui/Badge';

interface ConceptCardProps {
  concept: ConceptSummary;
  href?: string;
  complete?: boolean;
}

export function ConceptCard({ concept, href, complete }: ConceptCardProps) {
  const body = (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
        {complete ? (
          <span aria-label="Completed" className="text-success">✓</span>
        ) : null}
        {concept.title}
      </span>
      {concept.difficulty ? <DifficultyBadge difficulty={concept.difficulty} /> : null}
    </div>
  );

  if (href) {
    return (
      <Card href={href} className="p-3.5" ariaLabel={concept.title}>
        {body}
      </Card>
    );
  }

  return <div className="rounded-lg border border-dashed border-border p-3.5 opacity-70">{body}</div>;
}
