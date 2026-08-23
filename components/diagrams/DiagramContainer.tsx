import type { Diagram } from '@/types/content';
import { diagramRegistry } from './registry';
import { Badge } from '@/components/ui/Badge';

interface DiagramContainerProps {
  diagram: Diagram;
}

export function DiagramContainer({ diagram }: DiagramContainerProps) {
  const Component = diagramRegistry[diagram.component];

  return (
    <figure
      aria-describedby={`diagram-desc-${diagram.id}`}
      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-4 sm:p-6"
    >
      <div className="flex w-full items-center justify-between gap-2">
        <figcaption className="text-sm font-semibold text-foreground">{diagram.title}</figcaption>
        {diagram.interactive ? <Badge tone="accent">Try it — drag the points</Badge> : null}
      </div>
      {/* `interactive` is applied after the spread so `diagram.interactive` (the single
          source of truth, also driving the badge above) always wins over anything in
          `diagram.props` — content data doesn't need to repeat the flag in both places. */}
      <Component {...diagram.props} interactive={diagram.interactive} />
      <p id={`diagram-desc-${diagram.id}`} className="sr-only">
        {diagram.altText}
      </p>
    </figure>
  );
}
