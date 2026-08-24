import type { Topic } from '@/types/content';

export const chapter1MotionInAPlaneTopics: Topic[] = [
  {
    slug: 'two-dimensional-motion-topic',
    title: 'Two-Dimensional Motion',
    concepts: [
      { slug: 'resolving-vectors-in-two-dimensions', title: 'Resolving Vectors into Components', difficulty: 'medium' },
      { slug: 'resultant-of-two-dimensional-vectors', title: 'Finding the Resultant of Two-Dimensional Vectors', difficulty: 'medium' },
    ],
  },
  {
    slug: 'projectile-motion-topic',
    title: 'Projectile Motion',
    concepts: [
      { slug: 'projectile-motion-basics', title: 'Projectile Motion: Independence of Horizontal and Vertical Motion', difficulty: 'medium' },
      { slug: 'time-of-flight-in-projectile-motion', title: 'Time of Flight', difficulty: 'medium' },
      { slug: 'maximum-height-in-projectile-motion', title: 'Maximum Height', difficulty: 'medium' },
      { slug: 'horizontal-range-in-projectile-motion', title: 'Horizontal Range', difficulty: 'hard' },
    ],
  },
  {
    slug: 'circular-motion-topic',
    title: 'Circular Motion',
    concepts: [
      { slug: 'period-and-frequency-in-circular-motion', title: 'Period and Frequency in Circular Motion', difficulty: 'easy' },
      { slug: 'centripetal-acceleration-in-a-plane', title: 'Centripetal Acceleration', difficulty: 'medium' },
      { slug: 'centripetal-force-in-a-plane', title: 'Centripetal Force', difficulty: 'medium' },
    ],
  },
];
