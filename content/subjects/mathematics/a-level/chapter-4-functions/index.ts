import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4Topics } from './topics';
import { chapter4QuickRevision } from './quickRevision';
import { chapter4Assessment } from './assessment';

export { chapter4Concepts } from './concepts';
export { chapter4Formulas } from './formulas';
export { chapter4QuickRevision } from './quickRevision';
export { chapter4Topics } from './topics';
export { chapter4Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/functions';

const chapter4ConceptMap: ConceptMapNode = {
  label: 'Functions',
  children: [
    {
      label: '4.1 Product Sets',
      children: [
        { label: 'Meaning of a Product Set', href: `${BASE}/meaning-of-a-product-set` },
        { label: 'Cardinality of a Product Set', href: `${BASE}/cardinality-of-a-product-set` },
      ],
    },
    {
      label: '4.2 Relations',
      children: [
        { label: 'Meaning of a Relation', href: `${BASE}/meaning-of-a-relation` },
        { label: 'Representing a Relation', href: `${BASE}/representing-a-relation` },
      ],
    },
    {
      label: '4.3 Functions',
      children: [
        { label: 'Meaning of a Function', href: `${BASE}/meaning-of-a-function` },
        { label: 'The Vertical Line Test', href: `${BASE}/the-vertical-line-test` },
        { label: 'Domain and Range of a Function', href: `${BASE}/domain-and-range-of-a-function` },
        { label: 'Function Notation and Evaluating Functions', href: `${BASE}/function-notation-and-evaluating-functions` },
      ],
    },
  ],
};

export const chapter4: Chapter = {
  slug: 'functions',
  number: 4,
  title: 'Functions',
  blurb:
    'Product sets and their cardinality, relations and how to represent them, and what makes a ' +
    'relation a function — domain, range, the vertical line test, and function notation.',
  status: 'available',
  topics: chapter4Topics,
  quickRevision: chapter4QuickRevision,
  assessment: chapter4Assessment,
  conceptMap: chapter4ConceptMap,
};
