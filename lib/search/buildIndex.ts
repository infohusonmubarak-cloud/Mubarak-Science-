import { getAllConceptParams, getAllFormulas, getAllSubjects, getConceptDetail } from '@/lib/content/getters';
import type { SearchEntry } from './types';

/** Builds the full search index from the static content tree — subjects, chapters, concepts, and formulas. */
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const subject of getAllSubjects()) {
    entries.push({
      id: `subject-${subject.slug}`,
      type: 'subject',
      title: subject.name,
      description: subject.shortDescription,
      href: `/subjects/${subject.slug}`,
      keywords: '',
    });

    for (const level of subject.levels) {
      for (const chapter of level.chapters) {
        entries.push({
          id: `chapter-${subject.slug}-${level.slug}-${chapter.slug}`,
          type: 'chapter',
          title: chapter.title,
          description: chapter.blurb,
          href: `/subjects/${subject.slug}/${level.slug}/${chapter.slug}`,
          keywords: `${subject.name} ${level.name}`,
        });
      }
    }
  }

  for (const { subjectSlug, levelSlug, chapterSlug, conceptSlug } of getAllConceptParams()) {
    const concept = getConceptDetail(subjectSlug, levelSlug, chapterSlug, conceptSlug);
    if (!concept) continue;
    entries.push({
      id: `concept-${subjectSlug}-${levelSlug}-${chapterSlug}-${conceptSlug}`,
      type: 'concept',
      title: concept.title,
      description: concept.simpleExplanation,
      href: `/subjects/${subjectSlug}/${levelSlug}/${chapterSlug}/${conceptSlug}`,
      keywords: concept.quickReview.join(' '),
    });
  }

  for (const { formula, subjectSlug, levelSlug, chapterSlug } of getAllFormulas()) {
    entries.push({
      id: `formula-${formula.slug}`,
      type: 'formula',
      title: formula.name,
      description: `${formula.expression} — ${formula.meaning}`,
      href: `/formulas/${formula.slug}`,
      keywords: `${subjectSlug} ${levelSlug} ${chapterSlug}`,
    });
  }

  return entries;
}
