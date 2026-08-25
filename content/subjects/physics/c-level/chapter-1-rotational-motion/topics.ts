import type { Topic } from '@/types/content';

// Navigation outline for Chapter 1, matching the textbook's section
// list: rotational motion under constant angular acceleration; the
// relations between linear and angular quantities; centripetal
// acceleration.
export const chapter1CRotationTopics: Topic[] = [
  {
    slug: 'rotational-motion-under-constant-angular-acceleration',
    title: '1.1 Rotational Motion Under Constant Angular Acceleration',
    concepts: [
      { slug: 'angular-displacement', title: 'Angular Displacement', difficulty: 'easy' },
      { slug: 'angular-velocity', title: 'Angular Velocity', difficulty: 'medium' },
      { slug: 'angular-acceleration', title: 'Angular Acceleration', difficulty: 'medium' },
      { slug: 'rotational-kinematics-equations', title: 'Rotational Kinematics Equations', difficulty: 'hard' },
    ],
  },
  {
    slug: 'relations-between-linear-and-angular-quantities',
    title: '1.2 Relations Between Linear and Angular Quantities',
    concepts: [
      { slug: 'linear-and-angular-quantity-relationships', title: 'Linear and Angular Quantity Relationships', difficulty: 'medium' },
      { slug: 'tangential-velocity-and-tangential-acceleration', title: 'Tangential Velocity and Tangential Acceleration', difficulty: 'medium' },
    ],
  },
  {
    slug: 'centripetal-acceleration-topic',
    title: '1.3 Centripetal Acceleration',
    concepts: [
      { slug: 'centripetal-acceleration', title: 'Centripetal Acceleration', difficulty: 'medium' },
      { slug: 'period-frequency-and-revolution', title: 'Period, Frequency and Revolution', difficulty: 'easy' },
    ],
  },
];
