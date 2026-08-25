import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3CTopics } from './topics';
import { chapter3CQuickRevision } from './quickRevision';
import { chapter3CAssessment } from './assessment';

export { chapter3CConcepts } from './concepts';
export { chapter3CFormulas } from './formulas';
export { chapter3CQuickRevision } from './quickRevision';
export { chapter3CTopics } from './topics';
export { chapter3CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/analytic-solid-geometry';

const chapter3CConceptMap: ConceptMapNode = {
  label: 'Analytic Solid Geometry',
  children: [
    {
      label: '3.1 Coordinates in Space',
      children: [{ label: 'The Three-Dimensional Coordinate System', href: `${BASE}/the-three-dimensional-coordinate-system` }],
    },
    {
      label: '3.2 Distance and Midpoint in 3D',
      children: [{ label: 'The Distance and Midpoint Formulas', href: `${BASE}/the-distance-and-midpoint-formulas-in-3d` }],
    },
    {
      label: '3.3 The Line in Space',
      children: [
        { label: 'Direction Numbers of a Line', href: `${BASE}/direction-numbers-of-a-line` },
        { label: 'Symmetric and Parametric Equations', href: `${BASE}/symmetric-and-parametric-equations-of-a-line` },
      ],
    },
    {
      label: '3.4 The Plane in Space',
      children: [
        { label: 'The Normal Vector and Equation of a Plane', href: `${BASE}/the-normal-vector-and-equation-of-a-plane` },
        { label: 'The Distance from a Point to a Plane', href: `${BASE}/the-distance-from-a-point-to-a-plane` },
      ],
    },
    {
      label: '3.5 The Sphere',
      children: [
        { label: 'The Standard Equation of a Sphere', href: `${BASE}/the-standard-equation-of-a-sphere` },
        { label: 'Finding the Center and Radius by Completing the Square', href: `${BASE}/finding-the-center-and-radius-by-completing-the-square` },
      ],
    },
  ],
};

export const chapter3C: Chapter = {
  slug: 'analytic-solid-geometry',
  number: 3,
  title: 'Analytic Solid Geometry',
  blurb: 'The line, the plane, and the sphere in three-dimensional coordinate space.',
  status: 'available',
  topics: chapter3CTopics,
  quickRevision: chapter3CQuickRevision,
  assessment: chapter3CAssessment,
  conceptMap: chapter3CConceptMap,
};
