import type { Topic } from '@/types/content';

export const chapter2PhysicsTopics: Topic[] = [
  {
    slug: 'describing-motion',
    title: 'Describing Motion',
    concepts: [
      { slug: 'distance-and-displacement', title: 'Distance and Displacement', difficulty: 'easy' },
      { slug: 'speed', title: 'Speed', difficulty: 'easy' },
      { slug: 'velocity', title: 'Velocity', difficulty: 'easy' },
      { slug: 'distance-time-graphs', title: 'Distance-Time Graphs', difficulty: 'medium' },
    ],
  },
  {
    slug: 'acceleration-and-velocity-time-graphs',
    title: 'Acceleration and Velocity-Time Graphs',
    concepts: [
      { slug: 'acceleration', title: 'Acceleration', difficulty: 'medium' },
      { slug: 'velocity-time-graphs', title: 'Velocity-Time Graphs', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-equations-of-motion',
    title: 'The Equations of Motion',
    concepts: [
      { slug: 'the-first-equation-of-motion', title: 'The First Equation of Motion (v = u + at)', difficulty: 'medium' },
      { slug: 'the-second-equation-of-motion', title: 'The Second Equation of Motion (s = ut + ½at²)', difficulty: 'hard' },
      { slug: 'the-third-equation-of-motion', title: 'The Third Equation of Motion (v² = u² + 2as)', difficulty: 'hard' },
      { slug: 'free-fall', title: 'Free Fall', difficulty: 'medium' },
    ],
  },
];
