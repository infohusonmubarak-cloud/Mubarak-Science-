import type { Topic } from '@/types/content';
import { Badge } from '@/components/ui/Badge';

interface ComingSoonPanelProps {
  title: string;
  blurb?: string;
  topics?: Topic[];
}

export function ComingSoonPanel({ title, blurb, topics }: ComingSoonPanelProps) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface p-6">
      <Badge tone="brand">Coming soon</Badge>
      <h2 className="mt-3 text-lg font-semibold text-foreground">{title}</h2>
      {blurb ? <p className="mt-2 text-sm text-foreground-muted">{blurb}</p> : null}

      {topics && topics.length > 0 ? (
        <div className="mt-5 space-y-4">
          {topics.map((topic) => (
            <div key={topic.slug}>
              <h3 className="text-sm font-semibold text-foreground-muted">{topic.title}</h3>
              <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
                {topic.concepts.map((concept) => (
                  <li key={concept.slug} className="text-sm text-foreground-muted">
                    {concept.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
