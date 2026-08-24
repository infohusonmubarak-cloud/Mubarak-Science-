import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7RefractionTopics } from './topics';
import { chapter7RefractionQuickRevision } from './quickRevision';
import { chapter7RefractionAssessment } from './assessment';

export { chapter7RefractionConcepts } from './concepts';
export { chapter7RefractionFormulas } from './formulas';
export { chapter7RefractionQuickRevision } from './quickRevision';
export { chapter7RefractionTopics } from './topics';
export { chapter7RefractionAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/refraction-of-light-b-level';

const chapter7RefractionConceptMap: ConceptMapNode = {
  label: 'Refraction of Light',
  children: [
    {
      label: 'The Nature and Velocity of Light',
      children: [
        { label: 'The Nature of Light', href: `${BASE}/the-nature-of-light` },
        { label: 'Velocity of Light', href: `${BASE}/velocity-of-light` },
      ],
    },
    {
      label: 'Refraction and Laws of Refraction',
      children: [
        { label: 'Refraction of Light', href: `${BASE}/refraction-at-a-boundary` },
        { label: 'Laws of Refraction', href: `${BASE}/laws-of-refraction` },
      ],
    },
    {
      label: 'Refractive Index',
      children: [{ label: 'Refractive Index', href: `${BASE}/refractive-index-b-level` }],
    },
    {
      label: 'Critical Angle and Total Internal Reflection',
      children: [{ label: 'Critical Angle and TIR', href: `${BASE}/critical-angle-and-total-internal-reflection` }],
    },
  ],
};

export const chapter7Refraction: Chapter = {
  slug: 'refraction-of-light-b-level',
  number: 7,
  title: 'Refraction of Light',
  blurb: 'The nature and velocity of light, the laws of refraction, refractive index, critical angle and total internal reflection.',
  status: 'available',
  topics: chapter7RefractionTopics,
  quickRevision: chapter7RefractionQuickRevision,
  assessment: chapter7RefractionAssessment,
  conceptMap: chapter7RefractionConceptMap,
};
