import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8Topics } from './topics';
import { chapter8QuickRevision } from './quickRevision';
import { chapter8Assessment } from './assessment';

export { chapter8Concepts } from './concepts';
export { chapter8Formulas } from './formulas';
export { chapter8QuickRevision } from './quickRevision';
export { chapter8Topics } from './topics';
export { chapter8Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/similarity';

const chapter8ConceptMap: ConceptMapNode = {
  label: 'Similarity',
  children: [
    { label: '8.1 Ideas of Similarities and Similar Triangles', children: [{ label: 'Meaning of Similar Figures', href: `${BASE}/meaning-of-similar-figures-and-similar-triangles` }] },
    { label: '8.2 The Basic Proportionality Theorem', children: [{ label: 'The Basic Proportionality Theorem', href: `${BASE}/the-basic-proportionality-theorem` }] },
    { label: '8.3 Basic Theorems on Similar Triangles', children: [{ label: 'Similarity Tests (AA, SAS, SSS)', href: `${BASE}/similarity-tests-for-triangles` }] },
    { label: '8.4 The Angle Bisector Theorem', children: [{ label: 'The Angle Bisector Theorem', href: `${BASE}/the-angle-bisector-theorem` }] },
    { label: '8.5 The Pythagoras Theorem', children: [{ label: 'The Pythagoras Theorem', href: `${BASE}/the-pythagoras-theorem` }] },
    { label: '8.6 Special Right Triangles', children: [{ label: 'Special Right Triangles', href: `${BASE}/special-right-triangles` }] },
  ],
};

export const chapter8: Chapter = {
  slug: 'similarity',
  number: 8,
  title: 'Similarity',
  blurb:
    'Similar figures and triangles, the basic proportionality theorem, tests for similar ' +
    'triangles, the angle bisector theorem, the Pythagoras theorem, and special right triangles.',
  status: 'available',
  topics: chapter8Topics,
  quickRevision: chapter8QuickRevision,
  assessment: chapter8Assessment,
  conceptMap: chapter8ConceptMap,
};
