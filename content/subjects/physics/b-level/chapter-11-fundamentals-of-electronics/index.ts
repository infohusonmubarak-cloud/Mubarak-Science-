import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter11ElectronicsTopics } from './topics';
import { chapter11ElectronicsQuickRevision } from './quickRevision';
import { chapter11ElectronicsAssessment } from './assessment';

export { chapter11ElectronicsConcepts } from './concepts';
export { chapter11ElectronicsFormulas } from './formulas';
export { chapter11ElectronicsQuickRevision } from './quickRevision';
export { chapter11ElectronicsTopics } from './topics';
export { chapter11ElectronicsAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/fundamentals-of-electronics';

const chapter11ElectronicsConceptMap: ConceptMapNode = {
  label: 'Fundamentals of Electronics',
  children: [
    {
      label: 'Semiconductors',
      children: [{ label: 'Semiconductors', href: `${BASE}/semiconductors` }],
    },
    {
      label: 'Transistor',
      children: [{ label: 'Transistor', href: `${BASE}/the-transistor` }],
    },
    {
      label: 'Integrated Circuit',
      children: [{ label: 'Integrated Circuit', href: `${BASE}/the-integrated-circuit` }],
    },
    {
      label: 'Logic Gate',
      children: [{ label: 'Logic Gate', href: `${BASE}/logic-gates-b-level` }],
    },
  ],
};

export const chapter11Electronics: Chapter = {
  slug: 'fundamentals-of-electronics',
  number: 11,
  title: 'Fundamentals of Electronics',
  blurb: 'Semiconductors, the transistor, integrated circuits, and logic gates.',
  status: 'available',
  topics: chapter11ElectronicsTopics,
  quickRevision: chapter11ElectronicsQuickRevision,
  assessment: chapter11ElectronicsAssessment,
  conceptMap: chapter11ElectronicsConceptMap,
};
