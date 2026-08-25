import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2BTopics } from './topics';
import { chapter2BQuickRevision } from './quickRevision';
import { chapter2BAssessment } from './assessment';

export { chapter2BConcepts } from './concepts';
export { chapter2BFormulas } from './formulas';
export { chapter2BQuickRevision } from './quickRevision';
export { chapter2BTopics } from './topics';
export { chapter2BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/binomial-theorem';

const chapter2BConceptMap: ConceptMapNode = {
  label: 'The Binomial Theorem',
  children: [
    {
      label: '2.1 Binomial Expansion',
      children: [
        { label: 'Meaning of Binomial Coefficients', href: `${BASE}/meaning-of-binomial-coefficients` },
        { label: 'Expanding Small Binomial Powers', href: `${BASE}/expanding-small-binomial-powers` },
      ],
    },
    {
      label: '2.2 The Binomial Theorem',
      children: [
        { label: 'The Binomial Theorem', href: `${BASE}/the-binomial-theorem` },
        { label: 'The General Term', href: `${BASE}/the-general-term-of-a-binomial-expansion` },
        { label: 'Finding a Specific Coefficient', href: `${BASE}/finding-the-coefficient-of-a-specific-term` },
      ],
    },
  ],
};

export const chapter2B: Chapter = {
  slug: 'binomial-theorem',
  number: 2,
  title: 'The Binomial Theorem',
  blurb:
    "Pascal's triangle and binomial coefficients, expanding small binomial powers, and the general " +
    'binomial theorem for finding any term or coefficient directly.',
  status: 'available',
  topics: chapter2BTopics,
  quickRevision: chapter2BQuickRevision,
  assessment: chapter2BAssessment,
  conceptMap: chapter2BConceptMap,
};
