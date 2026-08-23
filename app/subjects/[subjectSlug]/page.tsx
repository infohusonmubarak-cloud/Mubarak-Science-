import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSubjectParams, getSubject } from '@/lib/content/getters';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSubjectParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectSlug: string }>;
}): Promise<Metadata> {
  const { subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  return { title: subject?.name ?? 'Subject' };
}

export default async function SubjectPage({ params }: { params: Promise<{ subjectSlug: string }> }) {
  const { subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Subjects', href: '/subjects' }, { label: subject.name }]} />
      <div>
        <h1 className="text-2xl font-bold text-foreground">{subject.name}</h1>
        <p className="mt-1 text-sm text-foreground-muted">{subject.shortDescription}</p>
      </div>

      {subject.status === 'coming-soon' ? (
        <ComingSoonPanel title={subject.name} blurb={`${subject.name} content is on the way — Mathematics is available now.`} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {subject.levels.map((level) => (
            <Card key={level.slug} href={`/subjects/${subject.slug}/${level.slug}`} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-foreground">{level.name}</h2>
                {level.status === 'coming-soon' ? <Badge tone="brand">Coming soon</Badge> : null}
              </div>
              <p className="mt-1 text-sm text-foreground-muted">{level.description}</p>
              {level.status === 'available' ? (
                <p className="mt-3 text-sm font-medium text-brand">{level.chapters.length} chapters</p>
              ) : null}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
