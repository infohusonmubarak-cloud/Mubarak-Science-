'use client';

import { useState } from 'react';
import type { WorkedExample } from '@/types/content';
import { Button } from '@/components/ui/Button';

interface WorkedExampleRevealerProps {
  example: WorkedExample;
}

export function WorkedExampleRevealer({ example }: WorkedExampleRevealerProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const allRevealed = revealedCount >= example.steps.length;

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h3 className="text-sm font-semibold text-foreground-muted">{example.title}</h3>
      <p className="mt-2 text-sm text-foreground">{example.problemStatement}</p>

      <ol className="mt-4 space-y-3">
        {example.steps.slice(0, revealedCount).map((step) => (
          <li key={step.step} className="rounded-lg bg-surface-muted p-3">
            <p className="text-sm font-medium text-foreground">
              Step {step.step}: {step.instruction}
            </p>
            {step.math ? <p className="mt-1 font-mono text-brand-strong">{step.math}</p> : null}
            <p className="mt-1 text-sm text-foreground-muted">{step.explanation}</p>
          </li>
        ))}
      </ol>

      {allRevealed ? (
        <div className="mt-4 rounded-lg bg-success-soft p-3">
          <p className="text-sm font-semibold text-success">Answer: {example.finalAnswer}</p>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {!allRevealed ? (
          <Button size="sm" variant="secondary" onClick={() => setRevealedCount((n) => n + 1)}>
            Show Step {revealedCount + 1}
          </Button>
        ) : null}
        {!allRevealed && example.steps.length > 1 ? (
          <Button size="sm" variant="ghost" onClick={() => setRevealedCount(example.steps.length)}>
            Reveal All
          </Button>
        ) : null}
        {revealedCount > 0 ? (
          <Button size="sm" variant="ghost" onClick={() => setRevealedCount(0)}>
            Reset
          </Button>
        ) : null}
      </div>
    </div>
  );
}
