import type { Chapter, Concept, Formula, Level, Subject, SubjectSlug } from '@/types/content';
import { subjects, subjectsBySlug } from '@/content';
import {
  chapter1Concepts,
  chapter1Formulas,
} from '@/content/subjects/mathematics/a-level/chapter-1-coordinate-geometry';
import {
  chapter2BioConcepts,
  chapter2BioFormulas,
} from '@/content/subjects/biology/a-level/chapter-2-cell-structure-and-organization';
import {
  chapter4ChemConcepts,
  chapter4ChemFormulas,
} from '@/content/subjects/chemistry/a-level/chapter-4-quantities-of-substances';
import {
  chapter2PhysicsConcepts,
  chapter2PhysicsFormulas,
} from '@/content/subjects/physics/a-level/chapter-2-motion';
import {
  chapter2CForcesConcepts,
  chapter2CForcesFormulas,
} from '@/content/subjects/physics/c-level/chapter-2-forces-in-circular-motion';
import {
  chapter1BondingConcepts,
  chapter1BondingFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-1-chemical-bonding-and-intermolecular-forces';
import {
  chapter2EnergyConcepts,
  chapter2EnergyFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-2-energy-changes-in-chemical-reactions';
import {
  chapter3KineticsConcepts,
  chapter3KineticsFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-3-chemical-kinetics-rates-of-reaction';
import {
  chapter4EquilibriumConcepts,
  chapter4EquilibriumFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-4-chemical-equilibrium';

/**
 * Full concept/formula bodies only exist for chapters that have been fully
 * authored. This registry maps `level/chapter` to that chapter's full
 * content pack, so getters can look bodies up without every stub chapter
 * needing empty placeholder files. The key omits `subjectSlug` — safe only
 * because chapter slugs are a documented globally-unique invariant (see
 * CLAUDE.md), verified again each time a subject is added.
 */
const CONTENT_PACKS: Record<string, { concepts: Record<string, Concept>; formulas: Record<string, Formula> }> = {
  'a-level/coordinate-geometry': { concepts: chapter1Concepts, formulas: chapter1Formulas },
  'a-level/cell-structure-and-organization': { concepts: chapter2BioConcepts, formulas: chapter2BioFormulas },
  'a-level/quantities-of-substances': { concepts: chapter4ChemConcepts, formulas: chapter4ChemFormulas },
  'a-level/motion': { concepts: chapter2PhysicsConcepts, formulas: chapter2PhysicsFormulas },
  'c-level/forces-in-circular-motion': { concepts: chapter2CForcesConcepts, formulas: chapter2CForcesFormulas },
  'c-level/chemical-bonding-and-intermolecular-forces': { concepts: chapter1BondingConcepts, formulas: chapter1BondingFormulas },
  'c-level/energy-changes-in-chemical-reactions': { concepts: chapter2EnergyConcepts, formulas: chapter2EnergyFormulas },
  'c-level/chemical-kinetics-rates-of-reaction': { concepts: chapter3KineticsConcepts, formulas: chapter3KineticsFormulas },
  'c-level/chemical-equilibrium': { concepts: chapter4EquilibriumConcepts, formulas: chapter4EquilibriumFormulas },
};

function packKey(levelSlug: string, chapterSlug: string) {
  return `${levelSlug}/${chapterSlug}`;
}

export function getAllSubjects(): Subject[] {
  return subjects;
}

export function getSubject(subjectSlug: string): Subject | undefined {
  return subjectsBySlug[subjectSlug as SubjectSlug];
}

export function getLevel(subjectSlug: string, levelSlug: string): Level | undefined {
  return getSubject(subjectSlug)?.levels.find((level) => level.slug === levelSlug);
}

export function getChapter(subjectSlug: string, levelSlug: string, chapterSlug: string): Chapter | undefined {
  return getLevel(subjectSlug, levelSlug)?.chapters.find((chapter) => chapter.slug === chapterSlug);
}

/**
 * Reverse lookup from a bare chapter slug (as stored in a localStorage
 * bookmark/progress entry) back to its subject/level, relying on chapter
 * slugs being globally unique across the whole content tree.
 */
export function findChapterLocation(
  chapterSlug: string
): { subjectSlug: string; levelSlug: string; chapter: Chapter } | undefined {
  for (const subject of subjects) {
    for (const level of subject.levels) {
      const chapter = level.chapters.find((c) => c.slug === chapterSlug);
      if (chapter) return { subjectSlug: subject.slug, levelSlug: level.slug, chapter };
    }
  }
  return undefined;
}

export function getChapterFormulas(levelSlug: string, chapterSlug: string): Formula[] {
  const pack = CONTENT_PACKS[packKey(levelSlug, chapterSlug)];
  return pack ? Object.values(pack.formulas) : [];
}

export function getConceptDetail(
  subjectSlug: string,
  levelSlug: string,
  chapterSlug: string,
  conceptSlug: string
): Concept | undefined {
  const pack = CONTENT_PACKS[packKey(levelSlug, chapterSlug)];
  if (!pack) return undefined;
  // Guard against a stray URL for a subject/chapter combination that
  // doesn't actually own this content pack.
  if (!getChapter(subjectSlug, levelSlug, chapterSlug)) return undefined;
  return pack.concepts[conceptSlug];
}

export function getFormula(levelSlug: string, chapterSlug: string, formulaSlug: string): Formula | undefined {
  const pack = CONTENT_PACKS[packKey(levelSlug, chapterSlug)];
  return pack?.formulas[formulaSlug];
}

/** Every formula across every fully-authored chapter, for the Formula Library. */
export function getAllFormulas(): { formula: Formula; subjectSlug: string; levelSlug: string; chapterSlug: string }[] {
  const results: { formula: Formula; subjectSlug: string; levelSlug: string; chapterSlug: string }[] = [];
  for (const subject of subjects) {
    for (const level of subject.levels) {
      for (const chapter of level.chapters) {
        const pack = CONTENT_PACKS[packKey(level.slug, chapter.slug)];
        if (!pack) continue;
        for (const formula of Object.values(pack.formulas)) {
          results.push({ formula, subjectSlug: subject.slug, levelSlug: level.slug, chapterSlug: chapter.slug });
        }
      }
    }
  }
  return results;
}

/** Locate which subject/level/chapter a given formula slug belongs to. */
export function findFormula(
  formulaSlug: string
): { formula: Formula; subjectSlug: string; levelSlug: string; chapterSlug: string } | undefined {
  return getAllFormulas().find((entry) => entry.formula.slug === formulaSlug);
}

export function getAllSubjectParams(): { subjectSlug: string }[] {
  return subjects.map((subject) => ({ subjectSlug: subject.slug }));
}

export function getAllLevelParams(): { subjectSlug: string; levelSlug: string }[] {
  return subjects.flatMap((subject) =>
    subject.levels.map((level) => ({ subjectSlug: subject.slug, levelSlug: level.slug }))
  );
}

export function getAllChapterParams(): { subjectSlug: string; levelSlug: string; chapterSlug: string }[] {
  return subjects.flatMap((subject) =>
    subject.levels.flatMap((level) =>
      level.chapters.map((chapter) => ({ subjectSlug: subject.slug, levelSlug: level.slug, chapterSlug: chapter.slug }))
    )
  );
}

export function getAllConceptParams(): { subjectSlug: string; levelSlug: string; chapterSlug: string; conceptSlug: string }[] {
  const results: { subjectSlug: string; levelSlug: string; chapterSlug: string; conceptSlug: string }[] = [];
  for (const subject of subjects) {
    for (const level of subject.levels) {
      for (const chapter of level.chapters) {
        const pack = CONTENT_PACKS[packKey(level.slug, chapter.slug)];
        if (!pack) continue;
        for (const conceptSlug of Object.keys(pack.concepts)) {
          results.push({ subjectSlug: subject.slug, levelSlug: level.slug, chapterSlug: chapter.slug, conceptSlug });
        }
      }
    }
  }
  return results;
}

/** Total concept count for a chapter, used for progress bars (works for stubs too — returns 0). */
export function getChapterConceptCount(chapter: Chapter): number {
  return chapter.topics.reduce((sum, topic) => sum + topic.concepts.length, 0);
}
