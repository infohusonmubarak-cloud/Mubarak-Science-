import type { Topic } from '@/types/content';

export const chapter2PhysicsTopics: Topic[] = [
  {
    slug: 'vectors',
    title: '2.1 Vectors',
    concepts: [{ slug: 'vectors-and-scalars', title: 'Vectors and Scalars', difficulty: 'easy' }],
  },
  {
    slug: 'describing-motion',
    title: '2.2 Describing Motion',
    concepts: [
      { slug: 'distance-and-displacement', title: 'Distance and Displacement', difficulty: 'easy' },
      { slug: 'speed', title: 'Speed', difficulty: 'easy' },
      { slug: 'velocity', title: 'Velocity', difficulty: 'easy' },
    ],
  },
  {
    slug: 'the-equations-of-motion',
    title: '2.3 Equations of Motion',
    concepts: [
      { slug: 'acceleration', title: 'Acceleration', difficulty: 'medium' },
      { slug: 'the-first-equation-of-motion', title: 'The First Equation of Motion (v = u + at)', difficulty: 'medium' },
      { slug: 'the-second-equation-of-motion', title: 'The Second Equation of Motion (s = ut + ½at²)', difficulty: 'hard' },
      { slug: 'the-third-equation-of-motion', title: 'The Third Equation of Motion (v² = u² + 2as)', difficulty: 'hard' },
      { slug: 'free-fall', title: 'Free Fall', difficulty: 'medium' },
    ],
  },
  {
    slug: 'motion-graphs',
    title: '2.4 Motion Graphs',
    concepts: [
      { slug: 'distance-time-graphs', title: 'Distance-Time Graphs', difficulty: 'medium' },
      { slug: 'velocity-time-graphs', title: 'Velocity-Time Graphs', difficulty: 'medium' },
    ],
  },
];
