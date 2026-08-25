import type { Chapter, Concept, Formula, Level, Subject, SubjectSlug } from '@/types/content';
import { subjects, subjectsBySlug } from '@/content';
import {
  chapter1Concepts,
  chapter1Formulas,
} from '@/content/subjects/mathematics/a-level/chapter-1-coordinate-geometry';
import {
  chapter2Concepts as chapter2MathConcepts,
  chapter2Formulas as chapter2MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-2-exponents-and-radicals';
import {
  chapter3Concepts as chapter3MathConcepts,
  chapter3Formulas as chapter3MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-3-logarithms';
import {
  chapter4Concepts as chapter4MathConcepts,
  chapter4Formulas as chapter4MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-4-functions';
import {
  chapter5Concepts as chapter5MathConcepts,
  chapter5Formulas as chapter5MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-5-quadratic-functions';
import {
  chapter6Concepts as chapter6MathConcepts,
  chapter6Formulas as chapter6MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-6-absolute-value-functions';
import {
  chapter7Concepts as chapter7MathConcepts,
  chapter7Formulas as chapter7MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-7-probability';
import {
  chapter8Concepts as chapter8MathConcepts,
  chapter8Formulas as chapter8MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-8-similarity';
import {
  chapter9Concepts as chapter9MathConcepts,
  chapter9Formulas as chapter9MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-9-circles';
import {
  chapter10Concepts as chapter10MathConcepts,
  chapter10Formulas as chapter10MathFormulas,
} from '@/content/subjects/mathematics/a-level/chapter-10-trigonometry';
import {
  chapter1BConcepts as chapter1BMathConcepts,
  chapter1BFormulas as chapter1BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-1-remainder-and-factor-theorem';
import {
  chapter2BConcepts as chapter2BMathConcepts,
  chapter2BFormulas as chapter2BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-2-binomial-theorem';
import {
  chapter3BConcepts as chapter3BMathConcepts,
  chapter3BFormulas as chapter3BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-3-elementary-functions-and-transformations';
import {
  chapter4BConcepts as chapter4BMathConcepts,
  chapter4BFormulas as chapter4BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-4-sequences-and-series';
import {
  chapter5BConcepts as chapter5BMathConcepts,
  chapter5BFormulas as chapter5BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-5-matrices';
import {
  chapter6BConcepts as chapter6BMathConcepts,
  chapter6BFormulas as chapter6BMathFormulas,
} from '@/content/subjects/mathematics/b-level/chapter-6-statistics';
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
  chapter3PressureConcepts,
  chapter3PressureFormulas,
} from '@/content/subjects/physics/b-level/chapter-3-pressure-in-fluids-and-atmosphere';
import {
  chapter4PowerConcepts,
  chapter4PowerFormulas,
} from '@/content/subjects/physics/b-level/chapter-4-power-and-efficiency';
import {
  chapter5HeatConcepts,
  chapter5HeatFormulas,
} from '@/content/subjects/physics/b-level/chapter-5-heat-and-thermal-phenomena';
import {
  chapter6VibrationConcepts,
  chapter6VibrationFormulas,
} from '@/content/subjects/physics/b-level/chapter-6-vibration-of-strings-and-resonance';
import {
  chapter7RefractionConcepts,
  chapter7RefractionFormulas,
} from '@/content/subjects/physics/b-level/chapter-7-refraction-of-light-b-level';
import {
  chapter8LensesConcepts,
  chapter8LensesFormulas,
} from '@/content/subjects/physics/b-level/chapter-8-lenses';
import {
  chapter9ElectricFieldConcepts,
  chapter9ElectricFieldFormulas,
} from '@/content/subjects/physics/b-level/chapter-9-electric-field';
import {
  chapter10CurrentConcepts,
  chapter10CurrentFormulas,
} from '@/content/subjects/physics/b-level/chapter-10-electric-current-and-magnetic-effect';
import {
  chapter11ElectronicsConcepts,
  chapter11ElectronicsFormulas,
} from '@/content/subjects/physics/b-level/chapter-11-fundamentals-of-electronics';
import {
  chapter12ModernConcepts,
  chapter12ModernFormulas,
} from '@/content/subjects/physics/b-level/chapter-12-atomic-and-modern-physics';
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
  'a-level/exponents-and-radicals': { concepts: chapter2MathConcepts, formulas: chapter2MathFormulas },
  'a-level/logarithms': { concepts: chapter3MathConcepts, formulas: chapter3MathFormulas },
  'a-level/functions': { concepts: chapter4MathConcepts, formulas: chapter4MathFormulas },
  'a-level/quadratic-functions': { concepts: chapter5MathConcepts, formulas: chapter5MathFormulas },
  'a-level/absolute-value-functions': { concepts: chapter6MathConcepts, formulas: chapter6MathFormulas },
  'a-level/probability': { concepts: chapter7MathConcepts, formulas: chapter7MathFormulas },
  'a-level/similarity': { concepts: chapter8MathConcepts, formulas: chapter8MathFormulas },
  'a-level/circles': { concepts: chapter9MathConcepts, formulas: chapter9MathFormulas },
  'a-level/trigonometry': { concepts: chapter10MathConcepts, formulas: chapter10MathFormulas },
  'b-level/remainder-and-factor-theorem': { concepts: chapter1BMathConcepts, formulas: chapter1BMathFormulas },
  'b-level/binomial-theorem': { concepts: chapter2BMathConcepts, formulas: chapter2BMathFormulas },
  'b-level/elementary-functions-and-transformations': { concepts: chapter3BMathConcepts, formulas: chapter3BMathFormulas },
  'b-level/sequences-and-series': { concepts: chapter4BMathConcepts, formulas: chapter4BMathFormulas },
  'b-level/matrices': { concepts: chapter5BMathConcepts, formulas: chapter5BMathFormulas },
  'b-level/statistics': { concepts: chapter6BMathConcepts, formulas: chapter6BMathFormulas },
  'a-level/cell-structure-and-organization': { concepts: chapter2BioConcepts, formulas: chapter2BioFormulas },
  'a-level/quantities-of-substances': { concepts: chapter4ChemConcepts, formulas: chapter4ChemFormulas },
  'a-level/motion': { concepts: chapter2PhysicsConcepts, formulas: chapter2PhysicsFormulas },
  'b-level/motion-in-a-plane': { concepts: chapter1MotionInAPlaneConcepts, formulas: chapter1MotionInAPlaneFormulas },
  'b-level/rotational-dynamics': { concepts: chapter2RotationalDynamicsConcepts, formulas: chapter2RotationalDynamicsFormulas },
  'b-level/pressure-in-fluids-and-atmosphere': { concepts: chapter3PressureConcepts, formulas: chapter3PressureFormulas },
  'b-level/power-and-efficiency': { concepts: chapter4PowerConcepts, formulas: chapter4PowerFormulas },
  'b-level/heat-and-thermal-phenomena': { concepts: chapter5HeatConcepts, formulas: chapter5HeatFormulas },
  'b-level/vibration-of-strings-and-resonance': { concepts: chapter6VibrationConcepts, formulas: chapter6VibrationFormulas },
  'b-level/refraction-of-light-b-level': { concepts: chapter7RefractionConcepts, formulas: chapter7RefractionFormulas },
  'b-level/lenses': { concepts: chapter8LensesConcepts, formulas: chapter8LensesFormulas },
  'b-level/electric-field': { concepts: chapter9ElectricFieldConcepts, formulas: chapter9ElectricFieldFormulas },
  'b-level/electric-current-and-magnetic-effect': { concepts: chapter10CurrentConcepts, formulas: chapter10CurrentFormulas },
  'b-level/fundamentals-of-electronics': { concepts: chapter11ElectronicsConcepts, formulas: chapter11ElectronicsFormulas },
  'b-level/atomic-and-modern-physics': { concepts: chapter12ModernConcepts, formulas: chapter12ModernFormulas },
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
