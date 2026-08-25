import type { Topic } from '@/types/content';

// Navigation outline for Chapter 2, built from the textbook preface's
// description: the principle of mathematical induction; proving
// mathematical statements using it.
export const chapter2CTopics: Topic[] = [
  {
    slug: 'the-principle-of-mathematical-induction-topic',
    title: '2.1 The Principle of Mathematical Induction',
    concepts: [{ slug: 'the-principle-of-mathematical-induction', title: 'The Principle of Mathematical Induction', difficulty: 'medium' }],
  },
  {
    slug: 'proving-summation-formulas-topic',
    title: '2.2 Proving Summation Formulas by Induction',
    concepts: [{ slug: 'proving-summation-formulas-by-induction', title: 'Proving Summation Formulas by Induction', difficulty: 'medium' }],
  },
  {
    slug: 'proving-divisibility-statements-topic',
    title: '2.3 Proving Divisibility Statements by Induction',
    concepts: [{ slug: 'proving-divisibility-statements-by-induction', title: 'Proving Divisibility Statements by Induction', difficulty: 'hard' }],
  },
  {
    slug: 'proving-inequalities-topic',
    title: '2.4 Proving Inequalities by Induction',
    concepts: [{ slug: 'proving-inequalities-by-induction', title: 'Proving Inequalities by Induction', difficulty: 'hard' }],
  },
];
