import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllChapterParams, getChapter, getLevel, getSubject } from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';
import { AssessmentRunner } from '@/components/assessment/AssessmentRunner';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllChapterParams();
}

type Params = { subjectSlug: string; levelSlug: string; chapterSlug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subjectSlug, levelSlug, chapterSlug } = await params;
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  return { title: chapter ? `Assessment: ${chapter.title}` : 'Assessment' };
}

export default async function ChapterAssessmentPage({ params }: { params: Promise<Params> }) {
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
          { label: 'Assessment' },
        ]}
      />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Assessment: {chapter.title}</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Answer every question, then submit to see your score and which topics to review.
        </p>
      </div>

      {chapter.assessment ? (
        <AssessmentRunner assessment={chapter.assessment} chapterSlug={chapter.slug} conceptHrefBase={chapterHref} />
      ) : (
        <ComingSoonPanel title="Assessment not written yet" blurb="This chapter's assessment hasn't been written yet." />
      )}
    </div>
  );
}
