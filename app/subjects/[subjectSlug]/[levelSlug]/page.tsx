import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLevelParams, getChapterConceptCount, getLevel, getSubject } from '@/lib/content/getters';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLevelParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectSlug: string; levelSlug: string }>;
}): Promise<Metadata> {
  const { subjectSlug, levelSlug } = await params;
  const level = getLevel(subjectSlug, levelSlug);
  return { title: level?.name ?? 'Level' };
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ subjectSlug: string; levelSlug: string }>;
}) {
  const { subjectSlug, levelSlug } = await params;
  const subject = getSubject(subjectSlug);
  const level = getLevel(subjectSlug, levelSlug);
  if (!subject || !level) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Subjects', href: '/subjects' },
          { label: subject.name, href: `/subjects/${subject.slug}` },
          { label: level.name },
        ]}
      />
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          {subject.name} — {level.name}
        </h1>
        <p className="mt-1 text-sm text-foreground-muted">{level.description}</p>
      </div>
      {level.status === 'coming-soon' ? (
        <ComingSoonPanel
          title={`${level.name} — Coming Soon`}
          blurb={`${level.name} chapters for ${subject.name} haven't been written yet.`}
        />
      ) : (
        <div className="grid gap-3">
          {level.chapters.map((chapter) => (
            <Card key={chapter.slug} href={`/subjects/${subject.slug}/${level.slug}/${chapter.slug}`} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">Chapter {chapter.number}</p>
                  <h2 className="mt-0.5 text-base font-semibold text-foreground">{chapter.title}</h2>
                  <p className="mt-1 text-sm text-foreground-muted">{chapter.blurb}</p>
                </div>
                {chapter.status === 'coming-soon' ? (
                  <Badge tone="brand" className="shrink-0">Coming soon</Badge>
                ) : (
                  <Badge tone="success" className="shrink-0">{getChapterConceptCount(chapter)} concepts</Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
