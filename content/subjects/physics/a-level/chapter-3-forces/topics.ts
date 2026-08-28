import type { Topic } from '@/types/content';

export const chapter3AForcesTopics: Topic[] = [
  {
    slug: 'newtons-laws-of-motion-topic',
    title: "3.1 Newton's Laws of Motion",
    concepts: [
      { slug: 'newtons-first-law', title: "Newton's First Law", difficulty: 'easy' },
      { slug: 'newtons-second-law', title: "Newton's Second Law", difficulty: 'medium' },
      { slug: 'newtons-third-law', title: "Newton's Third Law", difficulty: 'medium' },
    ],
  },
  {
    slug: 'gravitational-force-topic',
    title: "3.2 Gravitational Force and Newton's Law of Gravitation",
    concepts: [{ slug: 'newtons-law-of-gravitation', title: "Newton's Law of Gravitation", difficulty: 'hard' }],
  },
  {
    slug: 'kinds-of-forces-topic',
    title: '3.3 Different Kinds of Forces',
    concepts: [
      { slug: 'contact-forces', title: 'Contact Forces: Friction, Normal Reaction and Tension', difficulty: 'medium' },
      { slug: 'resultant-force-and-equilibrium', title: 'Resultant Force and Equilibrium', difficulty: 'medium' },
    ],
  },
  {
    slug: 'mass-and-weight-topic',
    title: '3.4 Mass and Weight',
    concepts: [{ slug: 'mass-and-weight', title: 'Mass and Weight', difficulty: 'easy' }],
  },
  {
    slug: 'freely-falling-bodies-topic',
    title: '3.5 Freely Falling Bodies',
    concepts: [{ slug: 'freely-falling-bodies', title: 'Freely Falling Bodies', difficulty: 'medium' }],
  },
  {
    slug: 'momentum-topic',
    title: '3.6 Momentum and Law of Conservation of Momentum',
    concepts: [
      { slug: 'momentum-and-impulse', title: 'Momentum and Impulse', difficulty: 'medium' },
      { slug: 'conservation-of-momentum', title: 'The Law of Conservation of Momentum', difficulty: 'hard' },
    ],
  },
];
