import type { Metadata } from 'next';
import { getAllSubjects } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = { title: 'Quick Revision' };

export default function RevisionIndexPage() {
  const subjects = getAllSubjects();

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Quick Revision' }]} />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Quick Revision</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          A fast recap of every chapter&rsquo;s key concepts and formulas — pick a 5-minute or 15-minute pass.
        </p>
      </div>

      {subjects
        .filter((subject) => subject.levels.length > 0)
        .map((subject) => (
          <div key={subject.slug} className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">{subject.name}</h2>
            {subject.levels.map((level) => (
              <div key={level.slug}>
                <h3 className="mb-2 text-sm font-semibold text-foreground-muted">{level.name}</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {level.chapters.map((chapter) => (
                    <Card
                      key={chapter.slug}
                      href={`/revision/${subject.slug}/${level.slug}/${chapter.slug}`}
                      className="flex items-center justify-between gap-3 p-3.5"
                    >
                      <span className="text-sm font-medium text-foreground">{chapter.title}</span>
                      {chapter.quickRevision ? (
                        <Badge tone="success">Ready</Badge>
                      ) : (
                        <Badge tone="neutral">Coming soon</Badge>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
