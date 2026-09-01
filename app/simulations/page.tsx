import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllSubjects, findChapterLocation } from '@/lib/content/getters';
import { getAllSimulations } from '@/content/simulations';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = { title: 'Simulations' };

export default function SimulationsPage() {
  const subjects = getAllSubjects();
  const simulations = getAllSimulations();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Interactive Simulations</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Free interactive simulations from{' '}
          <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" className="text-brand underline">
            PhET Interactive Simulations
          </a>
          , University of Colorado Boulder. Click any sim below to jump to it inside the matching chapter, or load it
          right here.
        </p>
      </div>

      {subjects.map((subject) => {
        const subjectSims = simulations.filter((s) => s.subjectSlug === subject.slug);
        if (subjectSims.length === 0) return null;
        return (
          <section key={subject.slug}>
            <h2 className="text-lg font-bold text-foreground">{subject.name}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {subjectSims.map((sim) => {
                const location = sim.chapterSlugs
                  .map((slug) => findChapterLocation(slug))
                  .find((loc) => loc !== undefined);
                return (
                  <div key={sim.id} className="rounded-xl border border-border bg-surface p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-foreground">{sim.title}</h3>
                      {sim.desktopRecommended && <Badge tone="warning">Best on larger screen</Badge>}
                    </div>
                    <p className="mt-1 text-sm text-foreground-muted">{sim.description}</p>
                    {location && (
                      <Link
                        href={`/subjects/${location.subjectSlug}/${location.levelSlug}/${location.chapter.slug}`}
                        className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                      >
                        Open in {location.chapter.title} →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      <p className="text-xs text-foreground-muted">
        All simulations are the work of{' '}
        <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" className="underline">
          PhET Interactive Simulations
        </a>
        , University of Colorado Boulder, licensed CC BY-NC.
      </p>
    </div>
  );
}
