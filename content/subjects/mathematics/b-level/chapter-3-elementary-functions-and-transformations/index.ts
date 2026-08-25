import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3BTopics } from './topics';
import { chapter3BQuickRevision } from './quickRevision';
import { chapter3BAssessment } from './assessment';

export { chapter3BConcepts } from './concepts';
export { chapter3BFormulas } from './formulas';
export { chapter3BQuickRevision } from './quickRevision';
export { chapter3BTopics } from './topics';
export { chapter3BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/elementary-functions-and-transformations';

const chapter3BConceptMap: ConceptMapNode = {
  label: 'Elementary Functions and Transformations',
  children: [
    {
      label: '3.1 Elementary Functions',
      children: [
        { label: 'The Elementary Function Family', href: `${BASE}/the-elementary-function-family` },
        { label: 'The Cubic Function', href: `${BASE}/the-cubic-function` },
        { label: 'The Reciprocal Function', href: `${BASE}/the-reciprocal-function` },
        { label: 'The Square Root Function', href: `${BASE}/the-square-root-function` },
        { label: 'The Exponential Function', href: `${BASE}/the-exponential-function` },
      ],
    },
    {
      label: '3.2 Transformations',
      children: [
        { label: 'Translations', href: `${BASE}/translations-of-functions` },
        { label: 'Reflections', href: `${BASE}/reflections-of-functions` },
        { label: 'Stretches and Compressions', href: `${BASE}/stretches-and-compressions-of-functions` },
        { label: 'Combining Transformations', href: `${BASE}/combining-transformations` },
      ],
    },
  ],
};

export const chapter3B: Chapter = {
  slug: 'elementary-functions-and-transformations',
  number: 3,
  title: 'Elementary Functions and Transformations',
  blurb:
    'The core family of functions — linear, cubic, reciprocal, square-root and exponential — and ' +
    'how they translate, reflect, stretch and compress.',
  status: 'available',
  topics: chapter3BTopics,
  quickRevision: chapter3BQuickRevision,
  assessment: chapter3BAssessment,
  conceptMap: chapter3BConceptMap,
};
