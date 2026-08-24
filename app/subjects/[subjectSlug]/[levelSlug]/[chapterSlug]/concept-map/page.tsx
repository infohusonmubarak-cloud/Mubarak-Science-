import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllChapterParams, getChapter, getLevel, getSubject } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';
import { ConceptMapView } from '@/components/content/ConceptMapView';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllChapterParams();
}

type Params = { subjectSlug: string; levelSlug: string; chapterSlug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  return { title: chapter ? `Concept Map: ${chapter.title}` : 'Concept Map' };
}

export default async function ChapterConceptMapPage({ params }: { params: Promise<Params> }) {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const subject = getSubject(subjectSlug);
  const level = getLevel(subjectSlug, levelSlug);
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  if (!subject || !level || !chapter) notFound();

  const chapterHref = `/subjects/${subject.slug}/${level.slug}/${chapter.slug}`;

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Subjects', href: '/subjects' },
          { label: subject.name, href: `/subjects/${subject.slug}` },
          { label: level.name, href: `/subjects/${subject.slug}/${level.slug}` },
          { label: chapter.title, href: chapterHref },
          { label: 'Concept Map' },
        ]}
      />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Concept Map: {chapter.title}</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          How this chapter&apos;s ideas fit together, at a glance.
        </p>
      </div>

      {chapter.conceptMap ? (
        <ConceptMapView root={chapter.conceptMap} />
      ) : (
        <ComingSoonPanel title="Concept map not written yet" blurb="This chapter's concept map hasn't been written yet." />
      )}
    </div>
  );
}
