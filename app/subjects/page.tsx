import type { Metadata } from 'next';
import { getAllSubjects } from '@/lib/content/getters';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = { title: 'Subjects' };

const SUBJECT_ICONS: Record<string, string> = {
  mathematics: '📐',
  physics: '⚛️',
  chemistry: '🧪',
  biology: '🧬',
};

export default function SubjectsPage() {
  const subjects = getAllSubjects();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Subjects' }]} />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Subjects</h1>
        <p className="mt-1 text-sm text-foreground-muted">Mathematics is available now — Physics, Chemistry and Biology are coming soon.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((subject) => (
          <Card key={subject.slug} href={`/subjects/${subject.slug}`} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <span aria-hidden="true" className="text-3xl">{SUBJECT_ICONS[subject.iconKey] ?? '📘'}</span>
              {subject.status === 'coming-soon' ? <Badge tone="brand">Coming soon</Badge> : null}
            </div>
            <h2 className="mt-3 text-lg font-semibold text-foreground">{subject.name}</h2>
            <p className="mt-1 text-sm text-foreground-muted">{subject.shortDescription}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
