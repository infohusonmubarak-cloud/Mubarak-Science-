import { BilingualText } from '@/components/msmk/BilingualText';
import { VideoEmbed } from '@/components/msmk/VideoEmbed';
import { MSMK_DIAGRAM_REGISTRY } from '@/components/msmk/diagrams/registry';
import { Accordion } from '@/components/ui/Accordion';
import { getModuleTheme } from '@/lib/msmk/moduleTheme';
import type { InformationSection, JobSheetTask, KeyPoint, AnswerItem, SelfCheckItem, SpecificationStep } from '@/types/msmk';
import { cn } from '@/lib/utils/cn';

export function InformationSectionCard({ section, accentKey }: { section: InformationSection; accentKey: string }) {
  const theme = getModuleTheme(accentKey);
  const Diagram = section.diagramKey ? MSMK_DIAGRAM_REGISTRY[section.diagramKey] : null;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5">
      <BilingualText text={section.title} as="h3" className="font-[family-name:var(--font-display)] text-base font-bold text-foreground" />

      {Diagram && (
        <div className="my-4 flex justify-center rounded-xl bg-background p-4">
          <Diagram />
        </div>
      )}

      <ul className="mt-3 space-y-2.5">
        {section.keyPoints.map((point, i) => (
          <li key={i} className={cn('flex items-start gap-2.5 rounded-lg p-2.5', theme.soft)}>
            <span aria-hidden="true" className={cn('mt-0.5 text-sm', theme.text)}>
              ●
            </span>
            <BilingualText text={point.text} as="p" className="text-sm leading-relaxed text-foreground" />
          </li>
        ))}
      </ul>

      {section.doDont && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {section.doDont.map((pair, i) => (
            <div key={i} className="contents">
              <div className="rounded-lg border border-success bg-success-soft p-3 text-sm text-foreground">
                <p className="font-semibold text-success">✓ Do</p>
                <BilingualText text={pair.do} as="p" className="mt-1" />
              </div>
              <div className="rounded-lg border border-danger bg-danger-soft p-3 text-sm text-foreground">
                <p className="font-semibold text-danger">✗ Don&apos;t</p>
                <BilingualText text={pair.dont} as="p" className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      )}

      {section.video && <VideoEmbed video={section.video} />}

      {section.guidelineCitation && (
        <p className="mt-4 text-xs italic text-foreground-muted">📖 {section.guidelineCitation.en}</p>
      )}
    </section>
  );
}

export function QuickReviewAccordion({ points }: { points: KeyPoint[] }) {
  return (
    <Accordion title={<span className="font-semibold text-foreground">📌 Quick Review</span>}>
      <ul className="space-y-2 pb-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <span aria-hidden="true">•</span>
            <BilingualText text={point.text} as="span" />
          </li>
        ))}
      </ul>
    </Accordion>
  );
}

export function SelfCheckAccordion({ questions, answers }: { questions: SelfCheckItem[]; answers: AnswerItem[] }) {
  const answerMap = new Map(answers.map((a) => [a.id, a.answer]));
  return (
    <Accordion title={<span className="font-semibold text-foreground">🤔 Self-Check</span>}>
      <ol className="space-y-4 pb-3">
        {questions.map((q, i) => (
          <li key={q.id}>
            <p className="text-sm font-medium text-foreground">
              {i + 1}. {q.question.en}
            </p>
            {answerMap.get(q.id) && (
              <p className="mt-1 text-sm text-foreground-muted">Answer: {answerMap.get(q.id)!.en}</p>
            )}
          </li>
        ))}
      </ol>
    </Accordion>
  );
}

export function JobSheetCard({ jobSheet }: { jobSheet: JobSheetTask }) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5">
      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">🛠️ Job Sheet</h3>
      <BilingualText text={jobSheet.title} as="p" className="mt-2 text-sm font-semibold text-foreground" />
      <BilingualText text={jobSheet.description} as="p" className="mt-1 text-sm leading-relaxed text-foreground-muted" />
      {jobSheet.materials && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {jobSheet.materials.map((m, i) => (
            <li key={i} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground">
              {m.en}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function SpecificationList({ steps }: { steps: SpecificationStep[] }) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5">
      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">📋 Specification Sheet</h3>
      <ol className="mt-3 space-y-3">
        {steps.map((step) => (
          <li key={step.step} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-msmk-firstaid-soft text-xs font-bold text-msmk-firstaid">
              {step.step}
            </span>
            <div>
              <BilingualText text={step.instruction} as="p" className="text-sm text-foreground" />
              {step.note && <p className="mt-0.5 text-xs text-warning">⚠️ {step.note.en}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
