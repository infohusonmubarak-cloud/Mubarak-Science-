'use client';

import type { Topic } from '@/types/content';
import { useProgress } from '@/hooks/useProgress';
import { ConceptCard } from './ConceptCard';

interface ChapterOutlineProps {
  subjectSlug: string;
  levelSlug: string;
  chapterSlug: string;
  topics: Topic[];
  linkable: boolean;
}

export function ChapterOutline({ subjectSlug, levelSlug, chapterSlug, topics, linkable }: ChapterOutlineProps) {
  const { isConceptComplete } = useProgress();

  return (
    <div className="space-y-6">
      {topics.map((topic) => (
        <div key={topic.slug}>
          <h3 className="mb-2 text-sm font-semibold text-foreground-muted">{topic.title}</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {topic.concepts.map((concept) => (
              <ConceptCard
                key={concept.slug}
                concept={concept}
                complete={isConceptComplete(concept.slug)}
                href={linkable ? `/subjects/${subjectSlug}/${levelSlug}/${chapterSlug}/${concept.slug}` : undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
