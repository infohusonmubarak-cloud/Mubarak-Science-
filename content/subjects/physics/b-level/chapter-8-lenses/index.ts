import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8LensesTopics } from './topics';
import { chapter8LensesQuickRevision } from './quickRevision';
import { chapter8LensesAssessment } from './assessment';

export { chapter8LensesConcepts } from './concepts';
export { chapter8LensesFormulas } from './formulas';
export { chapter8LensesQuickRevision } from './quickRevision';
export { chapter8LensesTopics } from './topics';
export { chapter8LensesAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/lenses';

const chapter8LensesConceptMap: ConceptMapNode = {
  label: 'Lenses',
  children: [
    {
      label: 'Refraction at a Curved Surface',
      children: [{ label: 'Refraction at a Curved Surface', href: `${BASE}/refraction-at-a-curved-surface` }],
    },
    {
      label: 'The Lens Equation',
      children: [{ label: 'The Lens Equation', href: `${BASE}/the-lens-equation` }],
    },
    {
      label: 'Refraction Through Lenses',
      children: [{ label: 'Refraction Through Lenses', href: `${BASE}/refraction-through-lenses` }],
    },
    {
      label: 'Power of a Lens',
      children: [{ label: 'Power of a Lens', href: `${BASE}/power-of-a-lens` }],
    },
  ],
};

export const chapter8Lenses: Chapter = {
  slug: 'lenses',
  number: 8,
  title: 'Lenses',
  blurb: 'Refraction at a curved surface, the lens equation, image formation through lenses, and the power of a lens.',
  status: 'available',
  topics: chapter8LensesTopics,
  quickRevision: chapter8LensesQuickRevision,
  assessment: chapter8LensesAssessment,
  conceptMap: chapter8LensesConceptMap,
};
