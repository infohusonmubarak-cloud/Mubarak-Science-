import { BRAND } from '@/lib/strings/copy';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getAllSubjects } from '@/lib/content/getters';

const SUBJECT_ICONS: Record<string, string> = {
  mathematics: '📐',
  physics: '⚛️',
  chemistry: '🧪',
  biology: '🧬',
};

const LEARNING_FLOW = [
  { title: 'Learn the idea', body: 'A simple explanation in plain English — no jargon first.' },
  { title: 'See it', body: 'A diagram, graph, or interactive figure you can play with.' },
  { title: 'Understand the formula', body: 'What it means, what each symbol is, and when to use it.' },
  { title: 'Solve an example', body: 'A worked problem, step by step, revealed at your pace.' },
  { title: 'Connect to real life', body: 'Where this idea actually shows up outside the textbook.' },
  { title: 'Try it yourself', body: 'A practice question with hints — never just the answer.' },
  { title: 'Review', body: 'A short summary and the key formulas, for later revision.' },
];

export default function HomePage() {
  const subjects = getAllSubjects();

  return (
    <div className="space-y-16">
      <section className="space-y-5 py-6 text-center sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{BRAND.name}</p>
        <h1 className="mx-auto max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">{BRAND.tagline}</h1>
        <p className="mx-auto max-w-xl text-base text-foreground-muted">{BRAND.description}</p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button href="/subjects/mathematics/level-a/coordinate-geometry">Start Learning</Button>
          <Button href="/subjects/mathematics" variant="secondary">Explore Mathematics</Button>
          <Button href="/teacher-guide" variant="secondary">Teacher Guide</Button>
          <Button href="/revision" variant="ghost">Quick Revision</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Subjects</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <Card key={subject.slug} href={`/subjects/${subject.slug}`} className="p-5">
              <div className="flex items-start justify-between gap-2">
                <span aria-hidden="true" className="text-2xl">{SUBJECT_ICONS[subject.iconKey] ?? '📘'}</span>
                {subject.status === 'coming-soon' ? <Badge tone="brand">Coming soon</Badge> : null}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{subject.name}</h3>
              <p className="mt-1 text-xs text-foreground-muted">{subject.shortDescription}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold text-foreground">How every lesson works</h2>
        <p className="mb-4 text-sm text-foreground-muted">
          Concept → Visual explanation → Formula → Worked problem → Practical example → Practice → Review.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_FLOW.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-border bg-surface p-4">
              <span className="text-xs font-semibold text-brand">{index + 1}</span>
              <h3 className="mt-1 text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
