import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9BTopics } from './topics';
import { chapter9BQuickRevision } from './quickRevision';
import { chapter9BAssessment } from './assessment';

export { chapter9BConcepts } from './concepts';
export { chapter9BFormulas } from './formulas';
export { chapter9BQuickRevision } from './quickRevision';
export { chapter9BTopics } from './topics';
export { chapter9BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/introduction-to-vectors';

const chapter9BConceptMap: ConceptMapNode = {
  label: 'Introduction to Vectors',
  children: [
    {
      label: '9.1 Geometric Vectors',
      children: [
        { label: 'Scalar and Vector Quantities', href: `${BASE}/scalar-and-vector-quantities` },
        { label: 'Representing and Naming Vectors', href: `${BASE}/representing-and-naming-vectors` },
        { label: 'Adding and Subtracting Vectors Geometrically', href: `${BASE}/adding-and-subtracting-vectors-geometrically` },
      ],
    },
    {
      label: '9.2 Applications to Elementary Geometry',
      children: [
        { label: 'Using Vectors to Prove Geometric Results', href: `${BASE}/using-vectors-to-prove-geometric-results` },
        { label: 'Ratio and Division of a Line Segment', href: `${BASE}/ratio-and-division-of-a-line-segment-using-vectors` },
      ],
    },
    {
      label: '9.3 Position Vectors',
      children: [
        { label: 'Position Vectors and the Origin', href: `${BASE}/position-vectors-and-the-origin` },
        { label: 'Finding a Vector Between Two Points', href: `${BASE}/finding-a-vector-between-two-points` },
      ],
    },
    {
      label: '9.4 Two-Dimensional Vectors',
      children: [
        { label: 'Column Vector Notation and Components', href: `${BASE}/column-vector-notation-and-components` },
        { label: 'Magnitude of a Two-Dimensional Vector', href: `${BASE}/magnitude-of-a-two-dimensional-vector` },
      ],
    },
  ],
};

export const chapter9B: Chapter = {
  slug: 'introduction-to-vectors',
  number: 9,
  title: 'Introduction to Vectors',
  blurb:
    'Geometric vectors and the Triangle Law, using vectors to prove classic geometry results, ' +
    'position vectors, and two-dimensional (column) vector notation.',
  status: 'available',
  topics: chapter9BTopics,
  quickRevision: chapter9BQuickRevision,
  assessment: chapter9BAssessment,
  conceptMap: chapter9BConceptMap,
};
