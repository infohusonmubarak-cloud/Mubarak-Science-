import type { Formula } from '@/types/content';

export const chapter2CFormulas: Record<string, Formula> = {
  'principle-of-mathematical-induction-statement': {
    slug: 'principle-of-mathematical-induction-statement',
    name: 'The Principle of Mathematical Induction',
    expression: 'If P(1) is true, and P(k) true ⟹ P(k+1) true for every k, then P(n) is true for all n ≥ 1',
    meaning: 'A two-step method for proving a statement P(n) holds for every integer n from some starting value onward, without checking each one individually.',
    variables: [
      { symbol: 'P(n)', meaning: 'the mathematical statement being proved, depending on the integer n' },
      { symbol: 'Base case', meaning: 'the direct verification that P(1) (or the actual starting value) is true' },
      { symbol: 'Inductive step', meaning: 'proving that IF P(k) is true, THEN P(k+1) must also be true' },
    ],
    whenToUse: 'Whenever a statement needs to be proved true for every integer in an infinite range, not just checked for a handful of examples.',
    relatedConceptSlugs: ['the-principle-of-mathematical-induction'],
  },
  'sum-of-first-n-integers-formula': {
    slug: 'sum-of-first-n-integers-formula',
    name: 'Sum of the First n Positive Integers',
    expression: '1 + 2 + 3 + ... + n = n(n+1) / 2',
    meaning: 'The sum of every positive integer from 1 up to n, provable by mathematical induction.',
    variables: [
      { symbol: 'n', meaning: 'the largest integer included in the sum, a positive integer' },
    ],
    whenToUse: 'Whenever the sum of consecutive integers from 1 to n is needed directly, without adding them one by one.',
    relatedConceptSlugs: ['proving-summation-formulas-by-induction'],
  },
  'divisibility-induction-technique': {
    slug: 'divisibility-induction-technique',
    name: 'Divisibility Proofs by Induction',
    expression: 'Assume f(k) = d·m for some integer m; show f(k+1) = d·(some integer)',
    meaning: 'To prove f(n) is always divisible by a fixed number d, verify the base case directly, then assume f(k) equals d times some integer, and algebraically show f(k+1) must also equal d times some integer.',
    variables: [
      { symbol: 'd', meaning: 'the fixed divisor being proved to always divide f(n)' },
      { symbol: 'm', meaning: 'the (unknown but existing) integer such that f(k) = d·m, by the inductive hypothesis' },
    ],
    whenToUse: 'Whenever a formula or expression needs to be proved divisible by a fixed number for every positive integer n.',
    relatedConceptSlugs: ['proving-divisibility-statements-by-induction'],
  },
  'inequality-induction-technique': {
    slug: 'inequality-induction-technique',
    name: 'Inequality Proofs by Induction',
    expression: 'Assume P(k) [an inequality] holds; use it, plus algebra, to show P(k+1) holds too',
    meaning: 'To prove an inequality holds for every integer n (from some starting value), verify the base case directly, then use the inductive hypothesis (the inequality at k) to derive the inequality at k+1.',
    variables: [
      { symbol: 'Starting value', meaning: 'the base case does not have to be n=1 — it can be any integer where the inequality first becomes true' },
    ],
    whenToUse: 'Whenever an inequality (rather than an equation) needs to be proved true for every integer in a range.',
    relatedConceptSlugs: ['proving-inequalities-by-induction'],
  },
};
