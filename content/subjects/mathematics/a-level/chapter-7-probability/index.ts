import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7Topics } from './topics';
import { chapter7QuickRevision } from './quickRevision';
import { chapter7Assessment } from './assessment';

export { chapter7Concepts } from './concepts';
export { chapter7Formulas } from './formulas';
export { chapter7QuickRevision } from './quickRevision';
export { chapter7Topics } from './topics';
export { chapter7Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/probability';

const chapter7ConceptMap: ConceptMapNode = {
  label: 'Probability',
  children: [
    {
      label: '7.1 Calculating Probability',
      children: [
        { label: 'Meaning of Probability and Sample Space', href: `${BASE}/meaning-of-probability-and-sample-space` },
        { label: 'The Complement Rule', href: `${BASE}/the-complement-rule` },
      ],
    },
    {
      label: '7.2 Probabilities of Combined Events',
      children: [
        { label: 'The Addition Rule', href: `${BASE}/the-addition-rule-for-combined-events` },
        { label: 'Independent Events and the Multiplication Rule', href: `${BASE}/independent-events-and-the-multiplication-rule` },
        { label: 'Conditional Probability', href: `${BASE}/conditional-probability` },
      ],
    },
    {
      label: '7.3 Calculation of Expected Frequency',
      children: [{ label: 'Expected Frequency', href: `${BASE}/expected-frequency` }],
    },
  ],
};

export const chapter7: Chapter = {
  slug: 'probability',
  number: 7,
  title: 'Probability',
  blurb:
    'Sample spaces and the probability formula, the complement rule, the addition and ' +
    'multiplication rules for combined events, conditional probability, and expected frequency.',
  status: 'available',
  topics: chapter7Topics,
  quickRevision: chapter7QuickRevision,
  assessment: chapter7Assessment,
  conceptMap: chapter7ConceptMap,
};
