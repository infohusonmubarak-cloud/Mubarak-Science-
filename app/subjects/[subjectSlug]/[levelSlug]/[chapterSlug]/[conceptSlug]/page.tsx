import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllConceptParams,
  getChapter,
  getConceptDetail,
  getFormula,
  getLevel,
  getSubject,
} from '@/lib/content/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ConceptPageLayout } from '@/components/content/ConceptPageLayout';
import { Button } from '@/components/ui/Button';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllConceptParams();
}

type Params = { subjectSlug: string; levelSlug: string; chapterSlug: string; conceptSlug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subjectSlug, levelSlug, chapterSlug, conceptSlug } = await params;
  const concept = getConceptDetail(subjectSlug, levelSlug, chapterSlug, conceptSlug);
  return { title: concept?.title ?? 'Concept' };
}

export default async function ConceptPage({ params }: { params: Promise<Params> }) {
  const { subjectSlug, levelSlug, chapterSlug, conceptSlug } = await params;
  const subject = getSubject(subjectSlug);
  const level = getLevel(subjectSlug, levelSlug);
  const chapter = getChapter(subjectSlug, levelSlug, chapterSlug);
  const concept = getConceptDetail(subjectSlug, levelSlug, chapterSlug, conceptSlug);
  if (!subject || !level || !chapter || !concept) notFound();

  const formula = concept.formulaSlug ? getFormula(levelSlug, chapterSlug, concept.formulaSlug) : undefined;

  const flatConcepts = chapter.topics.flatMap((topic) => topic.concepts);
  const currentIndex = flatConcepts.findIndex((c) => c.slug === conceptSlug);
  const nextConcept = currentIndex >= 0 ? flatConcepts[currentIndex + 1] : undefined;
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
          { label: concept.title },
        ]}
      />

      <ConceptPageLayout concept={concept} formula={formula} chapterSlug={chapter.slug} />

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Button href={chapterHref} variant="secondary" size="sm">
          ← Back to {chapter.title}
        </Button>
        {nextConcept ? (
          <Button href={`${chapterHref}/${nextConcept.slug}`} size="sm">
            Next: {nextConcept.title} →
          </Button>
        ) : null}
      </div>
    </div>
  );
}
