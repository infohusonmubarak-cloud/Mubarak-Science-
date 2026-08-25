import type { Topic } from '@/types/content';

// Navigation outline for Chapter 6, built from the textbook preface's
// description: basic properties and equations of circles and parabolas;
// conic section definitions; general equations; translation and
// rotation of axes.
export const chapter6CTopics: Topic[] = [
  {
    slug: 'conic-sections-overview-topic',
    title: '6.1 Conic Sections: An Overview',
    concepts: [{ slug: 'what-is-a-conic-section', title: 'What Is a Conic Section?', difficulty: 'easy' }],
  },
  {
    slug: 'the-circle-topic',
    title: '6.2 The Circle',
    concepts: [
      { slug: 'the-standard-equation-of-a-circle', title: 'The Standard Equation of a Circle', difficulty: 'easy' },
      { slug: 'the-general-equation-of-a-circle', title: 'The General Equation of a Circle', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-parabola-topic',
    title: '6.3 The Parabola',
    concepts: [
      { slug: 'the-focus-directrix-definition-of-a-parabola', title: 'The Focus-Directrix Definition of a Parabola', difficulty: 'medium' },
      { slug: 'the-standard-equation-of-a-parabola', title: 'The Standard Equation of a Parabola', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-general-equation-of-a-parabola-topic',
    title: '6.4 The General Equation of a Parabola',
    concepts: [{ slug: 'the-general-equation-of-a-translated-parabola', title: 'The General Equation of a Translated Parabola', difficulty: 'medium' }],
  },
  {
    slug: 'translation-and-rotation-of-axes-topic',
    title: '6.5 Translation and Rotation of Axes',
    concepts: [
      { slug: 'translation-of-axes', title: 'Translation of Axes', difficulty: 'medium' },
      { slug: 'rotation-of-axes', title: 'Rotation of Axes', difficulty: 'hard' },
    ],
  },
];
