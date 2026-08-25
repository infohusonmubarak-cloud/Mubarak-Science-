import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6Topics } from './topics';
import { chapter6QuickRevision } from './quickRevision';
import { chapter6Assessment } from './assessment';

export { chapter6Concepts } from './concepts';
export { chapter6Formulas } from './formulas';
export { chapter6QuickRevision } from './quickRevision';
export { chapter6Topics } from './topics';
export { chapter6Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/absolute-value-functions';

const chapter6ConceptMap: ConceptMapNode = {
  label: 'Absolute Value Functions',
  children: [
    { label: '6.1 Graph of y = |x − h| + k', children: [{ label: 'Graphing y = |x − h| + k', href: `${BASE}/graphing-y-equals-abs-x-minus-h-plus-k` }] },
    { label: '6.2 Graph of y = −|x − h| + k', children: [{ label: 'Graphing y = −|x − h| + k', href: `${BASE}/graphing-y-equals-negative-abs-x-minus-h-plus-k` }] },
    { label: '6.3 Graph of y = a|x|', children: [{ label: 'The Effect of a', href: `${BASE}/effect-of-a-on-the-absolute-value-graph` }] },
    { label: '6.4 Graph of y = a|x − h| + k', children: [{ label: 'The General Absolute Value Graph', href: `${BASE}/graphing-y-equals-a-abs-x-minus-h-plus-k` }] },
    { label: '6.5 Equation |x − p| = q', children: [{ label: 'Solving |x − p| = q', href: `${BASE}/solving-absolute-value-equations` }] },
    { label: '6.6 Inequalities Involving |x − p|', children: [{ label: 'Solving Absolute Value Inequalities', href: `${BASE}/solving-absolute-value-inequalities` }] },
  ],
};

export const chapter6: Chapter = {
  slug: 'absolute-value-functions',
  number: 6,
  title: 'Absolute Value Functions',
  blurb:
    'Graphing V-shaped functions — upward, downward, narrow, and wide — the general vertex form, ' +
    'and solving absolute value equations and inequalities.',
  status: 'available',
  topics: chapter6Topics,
  quickRevision: chapter6QuickRevision,
  assessment: chapter6Assessment,
  conceptMap: chapter6ConceptMap,
};
