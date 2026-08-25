import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1BTopics } from './topics';
import { chapter1BQuickRevision } from './quickRevision';
import { chapter1BAssessment } from './assessment';

export { chapter1BConcepts } from './concepts';
export { chapter1BFormulas } from './formulas';
export { chapter1BQuickRevision } from './quickRevision';
export { chapter1BTopics } from './topics';
export { chapter1BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/remainder-and-factor-theorem';

const chapter1BConceptMap: ConceptMapNode = {
  label: 'The Remainder Theorem and the Factor Theorem',
  children: [
    { label: '1.1 Dividing Polynomials', children: [{ label: 'Dividing Polynomials by Long Division', href: `${BASE}/dividing-polynomials` }] },
    { label: '1.2 Synthetic Division', children: [{ label: 'Synthetic Division', href: `${BASE}/synthetic-division` }] },
    { label: '1.3 The Remainder Theorem', children: [{ label: 'The Remainder Theorem', href: `${BASE}/the-remainder-theorem` }] },
    {
      label: '1.4 The Factor Theorem',
      children: [
        { label: 'The Factor Theorem', href: `${BASE}/the-factor-theorem` },
        { label: 'Factoring Polynomials Using the Factor Theorem', href: `${BASE}/factoring-polynomials-using-the-factor-theorem` },
      ],
    },
  ],
};

export const chapter1B: Chapter = {
  slug: 'remainder-and-factor-theorem',
  number: 1,
  title: 'The Remainder Theorem and the Factor Theorem',
  blurb:
    'Dividing polynomials by long division and synthetic division, and using the remainder and ' +
    'factor theorems to find and confirm roots without full division.',
  status: 'available',
  topics: chapter1BTopics,
  quickRevision: chapter1BQuickRevision,
  assessment: chapter1BAssessment,
  conceptMap: chapter1BConceptMap,
};
