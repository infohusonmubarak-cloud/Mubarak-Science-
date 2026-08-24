import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4PowerTopics } from './topics';
import { chapter4PowerQuickRevision } from './quickRevision';
import { chapter4PowerAssessment } from './assessment';

export { chapter4PowerConcepts } from './concepts';
export { chapter4PowerFormulas } from './formulas';
export { chapter4PowerQuickRevision } from './quickRevision';
export { chapter4PowerTopics } from './topics';
export { chapter4PowerAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/power-and-efficiency';

const chapter4PowerConceptMap: ConceptMapNode = {
  label: 'Power and Efficiency',
  children: [
    {
      label: 'Power and Its Units',
      children: [{ label: 'Power and Its Units', href: `${BASE}/power-and-its-units` }],
    },
    {
      label: 'Efficiency',
      children: [{ label: 'Efficiency', href: `${BASE}/efficiency-of-machines` }],
    },
    {
      label: 'The Stretching of Coiled Spring',
      children: [
        { label: "Hooke's Law and Spring Constant", href: `${BASE}/hookes-law-and-spring-constant` },
        { label: 'Elastic Potential Energy', href: `${BASE}/elastic-potential-energy-in-a-spring` },
      ],
    },
    {
      label: 'Sources of Energy',
      children: [{ label: 'Sources of Energy', href: `${BASE}/sources-of-energy-b-level` }],
    },
  ],
};

export const chapter4Power: Chapter = {
  slug: 'power-and-efficiency',
  number: 4,
  title: 'Power and Efficiency',
  blurb: 'Power and its units, mechanical and energy efficiency, the stretching of a coiled spring, and sources of energy.',
  status: 'available',
  topics: chapter4PowerTopics,
  quickRevision: chapter4PowerQuickRevision,
  assessment: chapter4PowerAssessment,
  conceptMap: chapter4PowerConceptMap,
};
