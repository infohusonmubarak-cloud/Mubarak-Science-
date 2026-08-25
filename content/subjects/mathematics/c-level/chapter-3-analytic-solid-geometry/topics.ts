import type { Topic } from '@/types/content';

// Navigation outline for Chapter 3, built from the textbook preface's
// description: line, plane, and sphere (analytic solid geometry).
export const chapter3CTopics: Topic[] = [
  {
    slug: 'coordinates-in-space-topic',
    title: '3.1 Coordinates in Space',
    concepts: [{ slug: 'the-three-dimensional-coordinate-system', title: 'The Three-Dimensional Coordinate System', difficulty: 'easy' }],
  },
  {
    slug: 'distance-and-midpoint-in-3d-topic',
    title: '3.2 Distance and Midpoint in Three Dimensions',
    concepts: [{ slug: 'the-distance-and-midpoint-formulas-in-3d', title: 'The Distance and Midpoint Formulas in 3D', difficulty: 'medium' }],
  },
  {
    slug: 'the-line-in-space-topic',
    title: '3.3 The Line in Space',
    concepts: [
      { slug: 'direction-numbers-of-a-line', title: 'Direction Numbers of a Line', difficulty: 'medium' },
      { slug: 'symmetric-and-parametric-equations-of-a-line', title: 'Symmetric and Parametric Equations of a Line', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-plane-in-space-topic',
    title: '3.4 The Plane in Space',
    concepts: [
      { slug: 'the-normal-vector-and-equation-of-a-plane', title: 'The Normal Vector and Equation of a Plane', difficulty: 'medium' },
      { slug: 'the-distance-from-a-point-to-a-plane', title: 'The Distance from a Point to a Plane', difficulty: 'hard' },
    ],
  },
  {
    slug: 'the-sphere-topic',
    title: '3.5 The Sphere',
    concepts: [
      { slug: 'the-standard-equation-of-a-sphere', title: 'The Standard Equation of a Sphere', difficulty: 'medium' },
      { slug: 'finding-the-center-and-radius-by-completing-the-square', title: 'Finding the Center and Radius by Completing the Square', difficulty: 'hard' },
    ],
  },
];
