import type { Metadata } from 'next';
import { BRAND } from '@/lib/strings/copy';
import { getAllSubjects } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { getSubjectTheme } from '@/lib/theme/subjectTheme';
import { cn } from '@/lib/utils/cn';

export const metadata: Metadata = { title: 'About' };

const VALUES = [
  {
    title: 'Understand, don’t memorize',
    body: 'Every idea starts in plain English before it ever meets a formula — so the formula makes sense instead of just being something to recall.',
  },
  {
    title: 'See it, don’t just read it',
    body: 'Interactive diagrams and graphs turn abstract ideas — a slope, a wave, a cell — into something you can drag, watch, and explore.',
  },
  {
    title: 'Worked examples, one step at a time',
    body: 'Every formula comes with a fully worked problem, revealed step by step at your own pace — never just the final answer.',
  },
  {
    title: 'Built for real revision',
    body: 'Quick Review summaries, graded assessments, and a formula library make it easy to come back and check what still needs work.',
  },
];

export default function AboutPage() {
  const subjects = getAllSubjects();
  const totalChapters = subjects.reduce(
    (sum, subject) => sum + subject.levels.reduce((levelSum, level) => levelSum + level.chapters.length, 0),
    0
  );
  const availableChapters = subjects.reduce(
    (sum, subject) =>
      sum + subject.levels.reduce((levelSum, level) => levelSum + level.chapters.filter((c) => c.status === 'available').length, 0),
    0
  );

  return (
    <div className="space-y-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <section className="gradient-wash -mx-4 rounded-3xl px-4 py-10 text-center sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">About {BRAND.name}</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
          {BRAND.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">{BRAND.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/subjects">Explore Subjects</Button>
          <Button href="/" variant="secondary">Back Home</Button>
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Why {BRAND.name}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">What&apos;s covered</h2>
        <p className="mt-1 text-sm text-foreground-muted">
          {availableChapters} of {totalChapters} chapters are fully written today, across every subject — the rest already have
          their full outline in place and are on the way.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => {
            const theme = getSubjectTheme(subject.slug);
            const chapters = subject.levels.reduce((sum, level) => sum + level.chapters.length, 0);
            const available = subject.levels.reduce(
              (sum, level) => sum + level.chapters.filter((c) => c.status === 'available').length,
              0
            );
            return (
              <div key={subject.slug} className={cn('rounded-2xl border p-4', theme.border + '/30', theme.soft)}>
                <span aria-hidden="true" className="text-2xl">{theme.icon}</span>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{subject.name}</h3>
                <p className={cn('mt-1 text-xs font-medium', theme.softText)}>
                  {available}/{chapters} chapters available
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">Free to use, built for students</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-foreground-muted">
          No account, no paywall — progress, bookmarks, and notes are saved right on your device. Jump in wherever you are in
          your syllabus.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/subjects">Start Learning</Button>
          <Button href="/teacher-guide" variant="secondary">For Teachers</Button>
        </div>
      </section>
    </div>
  );
}
