import type { Topic } from '@/types/content';

// Navigation outline for Chapter 9, matching the textbook's two sections
// (9.1-9.2) exactly.
export const chapter9Topics: Topic[] = [
  {
    slug: 'angles-in-a-circle',
    title: '9.1 Angles in a Circle',
    concepts: [
      { slug: 'central-and-inscribed-angles', title: 'Central and Inscribed Angles', difficulty: 'medium' },
      { slug: 'angle-in-a-semicircle', title: 'Angle in a Semicircle', difficulty: 'medium' },
      { slug: 'cyclic-quadrilateral-angles', title: 'Angles of a Cyclic Quadrilateral', difficulty: 'hard' },
    ],
  },
  {
    slug: 'properties-of-chords',
    title: '9.2 Properties of Chords',
    concepts: [
      { slug: 'equal-chords-and-equal-arcs', title: 'Equal Chords and Equal Arcs', difficulty: 'medium' },
      { slug: 'perpendicular-from-centre-to-a-chord', title: 'The Perpendicular from the Centre to a Chord', difficulty: 'medium' },
      { slug: 'the-intersecting-chords-theorem', title: 'The Intersecting Chords Theorem', difficulty: 'hard' },
    ],
  },
];
