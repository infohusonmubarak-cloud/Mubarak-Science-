import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5Topics } from './topics';
import { chapter5QuickRevision } from './quickRevision';
import { chapter5Assessment } from './assessment';

export { chapter5Concepts } from './concepts';
export { chapter5Formulas } from './formulas';
export { chapter5QuickRevision } from './quickRevision';
export { chapter5Topics } from './topics';
export { chapter5Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/quadratic-functions';

const chapter5ConceptMap: ConceptMapNode = {
  label: 'Quadratic Functions',
  children: [
    { label: '5.1 Graph of y = x² + bx + c', children: [{ label: 'Graphing y = x² + bx + c', href: `${BASE}/graphing-y-x-squared-plus-bx-plus-c` }] },
    { label: '5.2 Graph of y = −x² + bx + c', children: [{ label: 'Graphing y = −x² + bx + c', href: `${BASE}/graphing-y-negative-x-squared-plus-bx-plus-c` }] },
    { label: '5.3 Graph of y = ax²', children: [{ label: 'The Effect of a', href: `${BASE}/effect-of-a-on-the-parabola` }] },
    { label: '5.4 Graph of y = ax² + bx + c', children: [{ label: 'The Vertex Formula', href: `${BASE}/the-vertex-formula-and-general-quadratic-graphs` }] },
    { label: '5.5 Discriminant', children: [{ label: 'The Discriminant', href: `${BASE}/the-discriminant` }] },
    { label: '5.6 Quadratic Formula', children: [{ label: 'The Quadratic Formula', href: `${BASE}/the-quadratic-formula` }] },
    { label: '5.8 Quadratic Inequality', children: [{ label: 'Solving Quadratic Inequalities', href: `${BASE}/solving-quadratic-inequalities` }] },
  ],
};

export const chapter5: Chapter = {
  slug: 'quadratic-functions',
  number: 5,
  title: 'Quadratic Functions',
  blurb:
    'Graphing parabolas — upward, downward, narrow, and wide — the vertex formula, the ' +
    'discriminant, the quadratic formula, and solving quadratic inequalities.',
  status: 'available',
  topics: chapter5Topics,
  quickRevision: chapter5QuickRevision,
  assessment: chapter5Assessment,
  conceptMap: chapter5ConceptMap,
};
