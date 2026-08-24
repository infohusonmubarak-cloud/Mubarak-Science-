import type { Topic } from '@/types/content';

export const chapter2RotationalDynamicsTopics: Topic[] = [
  {
    slug: 'scalar-and-vector-product-topic',
    title: 'Scalar Product and Vector Product',
    concepts: [
      { slug: 'scalar-product-of-vectors', title: 'Scalar (Dot) Product of Vectors', difficulty: 'medium' },
      { slug: 'vector-product-of-vectors', title: 'Vector (Cross) Product of Vectors', difficulty: 'hard' },
    ],
  },
  {
    slug: 'turning-effect-of-force-topic',
    title: 'Turning Effect of Force',
    concepts: [{ slug: 'torque-and-turning-effect', title: 'Torque and the Turning Effect of Force', difficulty: 'medium' }],
  },
  {
    slug: 'torque-and-moment-of-inertia-topic',
    title: 'Relation Between Torque and Moment of Inertia',
    concepts: [
      { slug: 'moment-of-inertia', title: 'Moment of Inertia', difficulty: 'medium' },
      { slug: 'torque-moment-of-inertia-relation', title: 'Relation Between Torque and Moment of Inertia', difficulty: 'hard' },
    ],
  },
  {
    slug: 'equilibrium-topic-rotational-dynamics',
    title: 'Equilibrium',
    concepts: [{ slug: 'conditions-for-equilibrium', title: 'Conditions for Equilibrium', difficulty: 'medium' }],
  },
  {
    slug: 'angular-momentum-topic',
    title: 'Angular Momentum and Law of Conservation of Angular Momentum',
    concepts: [
      { slug: 'angular-momentum', title: 'Angular Momentum', difficulty: 'medium' },
      { slug: 'conservation-of-angular-momentum', title: 'Law of Conservation of Angular Momentum', difficulty: 'hard' },
    ],
  },
];
