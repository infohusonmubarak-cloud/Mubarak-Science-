import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5CTopics } from './topics';
import { chapter5CQuickRevision } from './quickRevision';
import { chapter5CAssessment } from './assessment';

export { chapter5CConcepts } from './concepts';
export { chapter5CFormulas } from './formulas';
export { chapter5CQuickRevision } from './quickRevision';
export { chapter5CTopics } from './topics';
export { chapter5CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/permutation-and-combination';

const chapter5CConceptMap: ConceptMapNode = {
  label: 'Permutation and Combination',
  children: [
    {
      label: '5.1 The Fundamental Counting Principle',
      children: [
        { label: 'The Fundamental Counting Principle', href: `${BASE}/the-fundamental-counting-principle` },
        { label: 'Factorial Notation', href: `${BASE}/factorial-notation` },
      ],
    },
    {
      label: '5.2 Permutations',
      children: [
        { label: 'Permutations of n Distinct Objects', href: `${BASE}/permutations-of-n-distinct-objects` },
        { label: 'Permutations of r Objects from n', href: `${BASE}/permutations-of-r-objects-from-n` },
      ],
    },
    {
      label: '5.3 Repetition and Circular Permutations',
      children: [
        { label: 'Permutations with Repeated Objects', href: `${BASE}/permutations-with-repeated-objects` },
        { label: 'Circular Permutations', href: `${BASE}/circular-permutations` },
      ],
    },
    {
      label: '5.4 Combinations',
      children: [
        { label: 'Combinations of r Objects from n', href: `${BASE}/combinations-of-r-objects-from-n` },
        { label: 'Relationship to Permutations', href: `${BASE}/the-relationship-between-permutations-and-combinations` },
      ],
    },
    {
      label: '5.5 Applications',
      children: [{ label: 'Applications to Probability and Statistics', href: `${BASE}/applications-to-probability-and-statistics` }],
    },
  ],
};

export const chapter5C: Chapter = {
  slug: 'permutation-and-combination',
  number: 5,
  title: 'Permutation and Combination',
  blurb: 'Counting techniques — permutations and combinations — and their applications across mathematics, statistics, science, and engineering.',
  status: 'available',
  topics: chapter5CTopics,
  quickRevision: chapter5CQuickRevision,
  assessment: chapter5CAssessment,
  conceptMap: chapter5CConceptMap,
};
