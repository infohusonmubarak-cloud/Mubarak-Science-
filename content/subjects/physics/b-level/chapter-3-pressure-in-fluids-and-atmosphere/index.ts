import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3PressureTopics } from './topics';
import { chapter3PressureQuickRevision } from './quickRevision';
import { chapter3PressureAssessment } from './assessment';

export { chapter3PressureConcepts } from './concepts';
export { chapter3PressureFormulas } from './formulas';
export { chapter3PressureQuickRevision } from './quickRevision';
export { chapter3PressureTopics } from './topics';
export { chapter3PressureAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/pressure-in-fluids-and-atmosphere';

const chapter3PressureConceptMap: ConceptMapNode = {
  label: 'Pressure',
  children: [
    {
      label: 'Atmospheric Pressure and Barometer',
      children: [
        { label: 'Atmospheric Pressure', href: `${BASE}/atmospheric-pressure-explained` },
        { label: 'The Barometer', href: `${BASE}/the-mercury-barometer` },
      ],
    },
    {
      label: 'Pressure in a Liquid and Manometer',
      children: [
        { label: 'Pressure in a Liquid', href: `${BASE}/pressure-in-a-liquid-b-level` },
        { label: 'The Manometer', href: `${BASE}/the-manometer` },
      ],
    },
    {
      label: "Archimedes' Principle and Pascal's Law",
      children: [
        { label: "Archimedes' Principle", href: `${BASE}/archimedes-principle` },
        { label: "Pascal's Law", href: `${BASE}/pascals-law` },
      ],
    },
  ],
};

export const chapter3Pressure: Chapter = {
  slug: 'pressure-in-fluids-and-atmosphere',
  number: 3,
  title: 'Pressure',
  blurb: 'Atmospheric pressure and the barometer, pressure in a liquid, the manometer, and the principles of Archimedes and Pascal.',
  status: 'available',
  topics: chapter3PressureTopics,
  quickRevision: chapter3PressureQuickRevision,
  assessment: chapter3PressureAssessment,
  conceptMap: chapter3PressureConceptMap,
};
