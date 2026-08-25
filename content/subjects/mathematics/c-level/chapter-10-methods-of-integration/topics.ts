import type { Topic } from '@/types/content';

// Navigation outline for Chapter 10, built from the textbook preface's
// description: basic integration; the substitution method; integration
// by parts; the partial fraction method.
export const chapter10CTopics: Topic[] = [
  {
    slug: 'basic-integration-topic',
    title: '10.1 Basic Integration',
    concepts: [
      { slug: 'antiderivatives-and-basic-integration-rules', title: 'Antiderivatives and Basic Integration Rules', difficulty: 'medium' },
      { slug: 'integrating-exponential-and-trigonometric-functions', title: 'Integrating Exponential and Trigonometric Functions', difficulty: 'medium' },
    ],
  },
  {
    slug: 'substitution-method-topic',
    title: '10.2 The Substitution Method',
    concepts: [{ slug: 'integration-by-substitution', title: 'Integration by Substitution', difficulty: 'hard' }],
  },
  {
    slug: 'integration-by-parts-topic',
    title: '10.3 Integration by Parts',
    concepts: [{ slug: 'integration-by-parts', title: 'Integration by Parts', difficulty: 'hard' }],
  },
  {
    slug: 'partial-fraction-method-topic',
    title: '10.4 The Partial Fraction Method',
    concepts: [
      { slug: 'setting-up-a-partial-fraction-decomposition', title: 'Setting Up a Partial Fraction Decomposition', difficulty: 'hard' },
      { slug: 'integrating-using-partial-fractions', title: 'Integrating Using Partial Fractions', difficulty: 'hard' },
    ],
  },
];
