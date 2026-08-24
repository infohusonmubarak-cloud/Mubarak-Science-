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
  chapter1MotionInAPlaneConcepts,
  chapter1MotionInAPlaneFormulas,
} from '@/content/subjects/physics/b-level/chapter-1-motion-in-a-plane';
import {
  chapter2RotationalDynamicsConcepts,
  chapter2RotationalDynamicsFormulas,
} from '@/content/subjects/physics/b-level/chapter-2-rotational-dynamics';
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
import {
  chapter5AcidBaseConcepts,
  chapter5AcidBaseFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-5-acid-base-reactions';
import {
  chapter6TransitionConcepts,
  chapter6TransitionFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-6-transition-elements';
import {
  chapter7EnvironmentConcepts,
  chapter7EnvironmentFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-7-chemistry-and-green-environment';
import {
  chapter8OrganicConcepts,
  chapter8OrganicFormulas,
} from '@/content/subjects/chemistry/c-level/chapter-8-organic-compounds-and-macromolecules';
import {
  chapter1ThemesConcepts,
  chapter1ThemesFormulas,
} from '@/content/subjects/biology/c-level/chapter-1-themes-and-importance-of-biology';
import {
  chapter2MolecularConcepts,
  chapter2MolecularFormulas,
} from '@/content/subjects/biology/c-level/chapter-2-molecular-biology';
import {
  chapter3TransportConcepts,
  chapter3TransportFormulas,
} from '@/content/subjects/biology/c-level/chapter-3-transport-system-in-organisms';
import {
  chapter4DiseasesConcepts,
  chapter4DiseasesFormulas,
} from '@/content/subjects/biology/c-level/chapter-4-diseases-in-plants-and-animals';
import {
  chapter5CoordinationConcepts,
  chapter5CoordinationFormulas,
} from '@/content/subjects/biology/c-level/chapter-5-coordination-and-response';
import {
  chapter6BiodiversityConcepts,
  chapter6BiodiversityFormulas,
} from '@/content/subjects/biology/c-level/chapter-6-biodiversity-and-conservation';

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
  'b-level/motion-in-a-plane': { concepts: chapter1MotionInAPlaneConcepts, formulas: chapter1MotionInAPlaneFormulas },
  'b-level/rotational-dynamics': { concepts: chapter2RotationalDynamicsConcepts, formulas: chapter2RotationalDynamicsFormulas },
  'c-level/forces-in-circular-motion': { concepts: chapter2CForcesConcepts, formulas: chapter2CForcesFormulas },
  'c-level/chemical-bonding-and-intermolecular-forces': { concepts: chapter1BondingConcepts, formulas: chapter1BondingFormulas },
  'c-level/energy-changes-in-chemical-reactions': { concepts: chapter2EnergyConcepts, formulas: chapter2EnergyFormulas },
  'c-level/chemical-kinetics-rates-of-reaction': { concepts: chapter3KineticsConcepts, formulas: chapter3KineticsFormulas },
  'c-level/chemical-equilibrium': { concepts: chapter4EquilibriumConcepts, formulas: chapter4EquilibriumFormulas },
  'c-level/acid-base-reactions': { concepts: chapter5AcidBaseConcepts, formulas: chapter5AcidBaseFormulas },
  'c-level/transition-elements': { concepts: chapter6TransitionConcepts, formulas: chapter6TransitionFormulas },
  'c-level/chemistry-and-green-environment': { concepts: chapter7EnvironmentConcepts, formulas: chapter7EnvironmentFormulas },
  'c-level/organic-compounds-and-macromolecules': { concepts: chapter8OrganicConcepts, formulas: chapter8OrganicFormulas },
  'c-level/themes-and-importance-of-biology': { concepts: chapter1ThemesConcepts, formulas: chapter1ThemesFormulas },
  'c-level/molecular-biology': { concepts: chapter2MolecularConcepts, formulas: chapter2MolecularFormulas },
  'c-level/transport-system-in-organisms': { concepts: chapter3TransportConcepts, formulas: chapter3TransportFormulas },
  'c-level/diseases-in-plants-and-animals': { concepts: chapter4DiseasesConcepts, formulas: chapter4DiseasesFormulas },
  'c-level/coordination-and-response': { concepts: chapter5CoordinationConcepts, formulas: chapter5CoordinationFormulas },
  'c-level/biodiversity-and-conservation': { concepts: chapter6BiodiversityConcepts, formulas: chapter6BiodiversityFormulas },
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
