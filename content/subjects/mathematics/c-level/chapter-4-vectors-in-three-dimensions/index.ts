import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4CTopics } from './topics';
import { chapter4CQuickRevision } from './quickRevision';
import { chapter4CAssessment } from './assessment';

export { chapter4CConcepts } from './concepts';
export { chapter4CFormulas } from './formulas';
export { chapter4CQuickRevision } from './quickRevision';
export { chapter4CTopics } from './topics';
export { chapter4CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/vectors-in-three-dimensions';

const chapter4CConceptMap: ConceptMapNode = {
  label: 'Vectors in Three Dimensions',
  children: [
    {
      label: '4.1 Vectors in 3D and Their Components',
      children: [{ label: 'Vectors in 3D and Their Magnitude', href: `${BASE}/vectors-in-three-dimensions-and-their-magnitude` }],
    },
    {
      label: '4.2 The Scalar (Dot) Product',
      children: [
        { label: 'The Dot Product', href: `${BASE}/the-dot-product-of-two-vectors` },
        { label: 'The Angle Between Two Vectors', href: `${BASE}/the-angle-between-two-vectors` },
      ],
    },
    {
      label: '4.3 The Vector (Cross) Product',
      children: [
        { label: 'The Cross Product', href: `${BASE}/the-cross-product-of-two-vectors` },
        { label: 'Cross Product and Area', href: `${BASE}/the-cross-product-and-area-of-a-parallelogram` },
      ],
    },
    {
      label: '4.4 Lines in 3D Using Vectors',
      children: [{ label: 'The Vector Equation of a Line', href: `${BASE}/the-vector-equation-of-a-line-in-space` }],
    },
    {
      label: '4.5 Planes in 3D Using Vectors',
      children: [
        { label: 'The Vector Equation of a Plane', href: `${BASE}/the-vector-equation-of-a-plane-in-space` },
        { label: 'The Scalar Triple Product and Volume', href: `${BASE}/the-scalar-triple-product-and-volume` },
      ],
    },
  ],
};

export const chapter4C: Chapter = {
  slug: 'vectors-in-three-dimensions',
  number: 4,
  title: 'Vectors in Three Dimensions',
  blurb: 'The scalar (dot) product, the vector (cross) product, and lines and planes in 3D expressed with vectors.',
  status: 'available',
  topics: chapter4CTopics,
  quickRevision: chapter4CQuickRevision,
  assessment: chapter4CAssessment,
  conceptMap: chapter4CConceptMap,
};
