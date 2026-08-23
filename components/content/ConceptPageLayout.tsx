import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Concept, Formula } from '@/types/content';
import { DiagramContainer } from '@/components/diagrams/DiagramContainer';
import { FormulaCard } from './FormulaCard';
import { WorkedExampleRevealer } from './WorkedExampleRevealer';
import { PracticeQuestion } from './PracticeQuestion';
import { QuickReviewList } from './QuickReviewList';
import { CommonMistakeCallout } from './CommonMistakeCallout';
import { BookmarkButton } from './BookmarkButton';
import { MarkCompleteButton } from './MarkCompleteButton';
import { DifficultyBadge } from '@/components/ui/Badge';

interface ConceptPageLayoutProps {
  concept: Concept;
  formula?: Formula;
  chapterSlug: string;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function ConceptPageLayout({ concept, formula, chapterSlug }: ConceptPageLayoutProps) {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {concept.difficulty ? <DifficultyBadge difficulty={concept.difficulty} /> : null}
        </div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{concept.title}</h1>
        <div className="flex flex-wrap gap-2">
          <MarkCompleteButton chapterSlug={chapterSlug} conceptSlug={concept.slug} />
          <BookmarkButton type="concept" slug={concept.slug} chapterSlug={chapterSlug} />
        </div>
      </header>

      <Section title="Simple Explanation">
        <p className="text-base leading-relaxed text-foreground">{concept.simpleExplanation}</p>
      </Section>

      <Section title="Why Do We Need It?">
        <p className="text-base leading-relaxed text-foreground">{concept.whyItMatters}</p>
      </Section>

      {concept.diagram ? (
        <Section title="See It">
          <DiagramContainer diagram={concept.diagram} />
        </Section>
      ) : null}

      {formula ? (
        <Section title="Formula">
          <FormulaCard formula={formula} chapterSlug={chapterSlug} />
        </Section>
      ) : null}

      {concept.workedExample ? (
        <Section title="Worked Example">
          <WorkedExampleRevealer example={concept.workedExample} />
        </Section>
      ) : null}

      <Section title="Why Does This Work?">
        <p className="text-base leading-relaxed text-foreground">{concept.whyItWorks}</p>
      </Section>

      <Section title="Real-Life Example">
        <div className="rounded-xl border border-accent/30 bg-accent-soft p-5">
          <h3 className="text-sm font-semibold text-accent">{concept.realLifeExample.title}</h3>
          <p className="mt-2 text-sm text-foreground">{concept.realLifeExample.scenario}</p>
          <p className="mt-2 text-sm text-foreground-muted">{concept.realLifeExample.explanation}</p>
        </div>
      </Section>

      {concept.practiceQuestions.length > 0 ? (
        <Section title="Practice">
          <div className="space-y-4">
            {concept.practiceQuestions.map((question) => (
              <PracticeQuestion key={question.id} question={question} />
            ))}
          </div>
        </Section>
      ) : null}

      <CommonMistakeCallout mistake={concept.commonMistake} />

      <Section title="Quick Review">
        <QuickReviewList points={concept.quickReview} />
      </Section>

      {concept.relatedConcepts && concept.relatedConcepts.length > 0 ? (
        <Section title="Related Concepts">
          <ul className="flex flex-wrap gap-2">
            {concept.relatedConcepts.map((related) => (
              <li key={related.href}>
                <Link
                  href={related.href}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent/50 hover:bg-accent-soft"
                >
                  {related.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </article>
  );
}
