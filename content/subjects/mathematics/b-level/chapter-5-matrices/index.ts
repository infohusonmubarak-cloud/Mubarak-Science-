import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5BTopics } from './topics';
import { chapter5BQuickRevision } from './quickRevision';
import { chapter5BAssessment } from './assessment';

export { chapter5BConcepts } from './concepts';
export { chapter5BFormulas } from './formulas';
export { chapter5BQuickRevision } from './quickRevision';
export { chapter5BTopics } from './topics';
export { chapter5BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/matrices';

const chapter5BConceptMap: ConceptMapNode = {
  label: 'Matrices',
  children: [
    { label: '5.1 Matrix Notation and Definitions', children: [{ label: 'Matrix Notation and Definitions', href: `${BASE}/matrix-notation-and-definitions` }] },
    {
      label: '5.2 Matrix Operations',
      children: [
        { label: 'Addition and Subtraction', href: `${BASE}/matrix-addition-and-subtraction` },
        { label: 'Scalar Multiplication', href: `${BASE}/scalar-multiplication-of-a-matrix` },
      ],
    },
    { label: '5.3 Matrix Multiplication', children: [{ label: 'Matrix Multiplication', href: `${BASE}/matrix-multiplication` }] },
    {
      label: '5.4 The Inverse of a Square Matrix of Order 2',
      children: [
        { label: 'The Determinant', href: `${BASE}/the-determinant-of-a-2x2-matrix` },
        { label: 'The Inverse', href: `${BASE}/the-inverse-of-a-2x2-matrix` },
        { label: 'Solving Simultaneous Equations', href: `${BASE}/solving-simultaneous-equations-using-matrices` },
      ],
    },
  ],
};

export const chapter5B: Chapter = {
  slug: 'matrices',
  number: 5,
  title: 'Matrices',
  blurb:
    'Matrix notation, addition, subtraction, scalar and matrix multiplication, determinants, and ' +
    'the inverse of a 2×2 matrix for solving simultaneous equations.',
  status: 'available',
  topics: chapter5BTopics,
  quickRevision: chapter5BQuickRevision,
  assessment: chapter5BAssessment,
  conceptMap: chapter5BConceptMap,
};
