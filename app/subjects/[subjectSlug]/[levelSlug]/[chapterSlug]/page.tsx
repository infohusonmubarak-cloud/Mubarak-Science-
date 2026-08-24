import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllChapterParams,
  getChapter,
  getChapterConceptCount,
  getLevel,
  getSubject,
} from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ChapterOutline } from '@/components/content/ChapterOutline';
import { ChapterProgressBar } from '@/components/content/ChapterProgressBar';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';
import { Button } from '@/components/ui/Button';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllChapterParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectSlug: string; levelSlug: string; chapterSlug: string }>;
}): Promise<Metadata> {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  return { title: chapter?.title ?? 'Chapter' };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ subjectSlug: string; levelSlug: string; chapterSlug: string }>;
}) {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const subject = getSubject(subjectSlug);
  const level = getLevel(subjectSlug, levelSlug);
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  if (!subject || !level || !chapter) notFound();

  const totalConcepts = getChapterConceptCount(chapter);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Subjects', href: '/subjects' },
          { label: subject.name, href: `/subjects/${subject.slug}` },
          { label: level.name, href: `/subjects/${subject.slug}/${level.slug}` },
          { label: chapter.title },
        ]}
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">Chapter {chapter.number}</p>
        <h1 className="mt-0.5 text-2xl font-bold text-foreground">{chapter.title}</h1>
        <p className="mt-1 text-sm text-foreground-muted">{chapter.blurb}</p>
      </div>

      {chapter.status === 'coming-soon' ? (
        <ComingSoonPanel title={chapter.title} blurb="This chapter's full lessons haven't been written yet — here's what it will cover." topics={chapter.topics} />
      ) : (
        <>
          <ChapterProgressBar chapterSlug={chapter.slug} totalConcepts={totalConcepts} />
          <div className="flex flex-wrap gap-2">
            {chapter.quickRevision ? (
              <Button href={`/revision/${subject.slug}/${level.slug}/${chapter.slug}`} variant="secondary" size="sm">
                Quick Revision for this chapter →
              </Button>
            ) : null}
            {chapter.assessment ? (
              <Button href={`/subjects/${subject.slug}/${level.slug}/${chapter.slug}/assessment`} variant="secondary" size="sm">
                Chapter Assessment →
              </Button>
            ) : null}
            {chapter.conceptMap ? (
              <Button href={`/subjects/${subject.slug}/${level.slug}/${chapter.slug}/concept-map`} variant="secondary" size="sm">
                Concept Map →
              </Button>
            ) : null}
          </div>
          <ChapterOutline
            subjectSlug={subject.slug}
            levelSlug={level.slug}
            chapterSlug={chapter.slug}
            topics={chapter.topics}
            linkable
          />
        </>
      )}

      <p className="text-sm">
        <Link href={`/subjects/${subject.slug}/${level.slug}`} className="text-brand hover:underline">
          ← Back to {level.name}
        </Link>
      </p>
    </div>
  );
}
