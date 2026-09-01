'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import type { Simulation } from '@/types/simulation';

// Click-to-load rather than an eager iframe: a PhET sim is a full app
// bundle (often several MB), so mounting it only after the visitor asks
// for it keeps the chapter page itself fast — the "lazy-loaded" part of
// the brief. `loading="lazy"` alone wouldn't help here since the iframe
// starts below the fold on most chapters anyway; not creating the iframe
// element at all until clicked is the stronger guarantee.
export function PhetEmbed({ simulation }: { simulation: Simulation }) {
  const [loaded, setLoaded] = useState(false);
  const width = simulation.width ?? 834;
  const height = simulation.height ?? 504;
  const phetPageUrl = `https://phet.colorado.edu/en/simulations/${simulation.phetSlug}`;
  const embedUrl = `https://phet.colorado.edu/sims/html/${simulation.phetSlug}/latest/${simulation.phetSlug}_en.html`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-wrap items-start justify-between gap-2 p-4 pb-0">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-foreground">🔬 {simulation.title}</h3>
            {simulation.desktopRecommended && <Badge tone="warning">Best on a larger screen</Badge>}
          </div>
          <p className="mt-1 text-sm text-foreground-muted">{simulation.description}</p>
        </div>
      </div>

      <div className="mx-4 mt-3 rounded-lg bg-surface-muted p-3 text-sm">
        <p>
          <span className="font-medium text-foreground">Try this: </span>
          <span className="text-foreground-muted">{simulation.instructions.whatToChange}</span>
        </p>
        <p className="mt-1">
          <span className="font-medium text-foreground">Look for: </span>
          <span className="text-foreground-muted">{simulation.instructions.whatToLookFor}</span>
        </p>
      </div>

      <div className="m-4 overflow-hidden rounded-lg border border-border bg-background">
        {loaded ? (
          <div className="w-full" style={{ aspectRatio: `${width} / ${height}` }}>
            <iframe
              src={embedUrl}
              title={simulation.title}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="flex w-full flex-col items-center justify-center gap-2 py-16 text-center transition-colors hover:bg-surface-muted"
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            <span aria-hidden="true" className="text-3xl">▶️</span>
            <span className="font-medium text-foreground">Load simulation</span>
            <span className="max-w-xs text-xs text-foreground-muted">
              Loads the interactive simulation from phet.colorado.edu — uses some mobile data.
            </span>
          </button>
        )}
      </div>

      <p className="border-t border-border px-4 py-3 text-xs text-foreground-muted">
        Simulation by{' '}
        <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
          PhET Interactive Simulations
        </a>
        , University of Colorado Boulder — licensed CC BY-NC.{' '}
        <a href={phetPageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
          View on phet.colorado.edu ↗
        </a>
      </p>
    </div>
  );
}
