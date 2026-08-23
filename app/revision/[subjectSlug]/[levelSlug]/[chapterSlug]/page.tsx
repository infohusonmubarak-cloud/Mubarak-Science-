import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllChapterParams,
  getChapter,
  getConceptDetail,
  getLevel,
  getSubject,
} from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Tabs } from '@/components/ui/Tabs';
import { RevisionItemCard } from '@/components/content/RevisionItemCard';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';
import type { RevisionItem } from '@/types/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllChapterParams();
}

type Params = { subjectSlug: string; levelSlug: string; chapterSlug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  return { title: chapter ? `Revise: ${chapter.title}` : 'Revision' };
}

export default async function ChapterRevisionPage({ params }: { params: Promise<Params> }) {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const subject = getSubject(subjectSlug);
  const level = getLevel(subjectSlug, levelSlug);
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  if (!subject || !level || !chapter) notFound();

  const chapterHref = `/subjects/${subject.slug}/${level.slug}/${chapter.slug}`;

  const renderItems = (items: RevisionItem[]) => (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const concept = getConceptDetail(subject.slug, level.slug, chapter.slug, item.conceptSlug);
        return (
          <RevisionItemCard
            key={item.conceptSlug}
            item={item}
            conceptTitle={concept?.title}
            conceptHref={concept ? `${chapterHref}/${concept.slug}` : undefined}
          />
        );
      })}
    </div>
  );

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Quick Revision', href: '/revision' },
          { label: chapter.title },
        ]}
      />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Revise: {chapter.title}</h1>
        <p className="mt-1 text-sm text-foreground-muted">{chapter.blurb}</p>
      </div>

      {chapter.quickRevision ? (
        <Tabs
          tabs={[
            { id: 'five', label: '5-Minute Review', content: renderItems(chapter.quickRevision.fiveMinute) },
            { id: 'fifteen', label: '15-Minute Review', content: renderItems(chapter.quickRevision.fifteenMinute) },
          ]}
        />
      ) : (
        <ComingSoonPanel title="Revision not written yet" blurb="This chapter's quick-revision summary hasn't been written yet." />
      )}
    </div>
  );
}
