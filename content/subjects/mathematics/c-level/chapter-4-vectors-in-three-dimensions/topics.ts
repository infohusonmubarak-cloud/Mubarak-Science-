import type { Topic } from '@/types/content';

// Navigation outline for Chapter 4, built from the textbook preface's
// description: scalar product, vector product, lines and planes in
// three-dimensional space.
export const chapter4CTopics: Topic[] = [
  {
    slug: 'vectors-in-3d-and-components-topic',
    title: '4.1 Vectors in 3D and Their Components',
    concepts: [{ slug: 'vectors-in-three-dimensions-and-their-magnitude', title: 'Vectors in Three Dimensions and Their Magnitude', difficulty: 'easy' }],
  },
  {
    slug: 'the-scalar-dot-product-topic',
    title: '4.2 The Scalar (Dot) Product',
    concepts: [
      { slug: 'the-dot-product-of-two-vectors', title: 'The Dot Product of Two Vectors', difficulty: 'medium' },
      { slug: 'the-angle-between-two-vectors', title: 'The Angle Between Two Vectors', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-vector-cross-product-topic',
    title: '4.3 The Vector (Cross) Product',
    concepts: [
      { slug: 'the-cross-product-of-two-vectors', title: 'The Cross Product of Two Vectors', difficulty: 'hard' },
      { slug: 'the-cross-product-and-area-of-a-parallelogram', title: 'The Cross Product and Area of a Parallelogram', difficulty: 'medium' },
    ],
  },
  {
    slug: 'lines-in-3d-using-vectors-topic',
    title: '4.4 Lines in 3D Using Vectors',
    concepts: [{ slug: 'the-vector-equation-of-a-line-in-space', title: 'The Vector Equation of a Line in Space', difficulty: 'medium' }],
  },
  {
    slug: 'planes-in-3d-using-vectors-topic',
    title: '4.5 Planes in 3D Using Vectors',
    concepts: [
      { slug: 'the-vector-equation-of-a-plane-in-space', title: 'The Vector Equation of a Plane in Space', difficulty: 'medium' },
      { slug: 'the-scalar-triple-product-and-volume', title: 'The Scalar Triple Product and Volume', difficulty: 'hard' },
    ],
  },
];
