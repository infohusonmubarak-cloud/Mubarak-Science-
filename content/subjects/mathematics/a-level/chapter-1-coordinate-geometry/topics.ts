import type { Topic } from '@/types/content';

// The navigation outline for Chapter 1. This is always fully populated
// (unlike `concepts.ts`, which holds the full body only for concepts that
// have been written) so the chapter page can render a complete, accurate
// table of contents regardless of how much content exists yet.
export const chapter1Topics: Topic[] = [
  {
    slug: 'coordinate-plane-basics',
    title: 'The Coordinate Plane',
    concepts: [
      { slug: 'cartesian-coordinate-system', title: 'The Cartesian Coordinate System', difficulty: 'easy' },
      { slug: 'ordered-pairs-and-quadrants', title: 'Ordered Pairs and Quadrants', difficulty: 'easy' },
      { slug: 'plotting-points', title: 'Plotting Points', difficulty: 'easy' },
    ],
  },
  {
    slug: 'distance-and-midpoint',
    title: 'Distance and Midpoint',
    concepts: [
      { slug: 'distance-between-two-points', title: 'Distance Between Two Points', difficulty: 'medium' },
      { slug: 'midpoint-of-a-segment', title: 'Midpoint of a Segment', difficulty: 'medium' },
      { slug: 'dividing-a-segment-in-a-ratio', title: 'Dividing a Segment in a Ratio', difficulty: 'hard' },
    ],
  },
  {
    slug: 'lines-on-the-plane',
    title: 'Lines on the Coordinate Plane',
    concepts: [
      { slug: 'slope-of-a-line', title: 'Slope of a Line', difficulty: 'medium' },
      { slug: 'equation-of-a-straight-line', title: 'Equation of a Straight Line', difficulty: 'medium' },
      { slug: 'horizontal-and-vertical-lines', title: 'Horizontal and Vertical Lines', difficulty: 'easy' },
      { slug: 'intercepts', title: 'Intercepts', difficulty: 'medium' },
    ],
  },
  {
    slug: 'special-lines-and-applications',
    title: 'Special Lines and Applications',
    concepts: [
      { slug: 'parallel-lines', title: 'Parallel Lines', difficulty: 'medium' },
      { slug: 'perpendicular-lines', title: 'Perpendicular Lines', difficulty: 'hard' },
      { slug: 'coordinate-geometry-in-real-life', title: 'Coordinate Geometry in Real Life', difficulty: 'medium' },
    ],
  },
];
