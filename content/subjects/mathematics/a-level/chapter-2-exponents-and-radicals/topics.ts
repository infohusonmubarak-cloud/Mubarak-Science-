import type { Topic } from '@/types/content';

// Navigation outline for Chapter 2, matching the textbook's four sections
// (2.1-2.4) exactly.
export const chapter2Topics: Topic[] = [
  {
    slug: 'exponents',
    title: '2.1 Exponents',
    concepts: [
      { slug: 'meaning-of-an-exponent', title: 'Meaning of an Exponent', difficulty: 'easy' },
      { slug: 'zero-and-negative-exponents', title: 'Zero and Negative Exponents', difficulty: 'medium' },
      { slug: 'product-and-quotient-rules-of-exponents', title: 'Product and Quotient Rules', difficulty: 'medium' },
      { slug: 'power-of-a-power-and-product-rules', title: 'Power of a Power, Power of a Product', difficulty: 'medium' },
      { slug: 'fractional-exponents', title: 'Fractional Exponents', difficulty: 'hard' },
    ],
  },
  {
    slug: 'radicals',
    title: '2.2 Radicals',
    concepts: [
      { slug: 'meaning-of-a-radical', title: 'Meaning of a Radical', difficulty: 'easy' },
      { slug: 'converting-between-radical-and-exponent-form', title: 'Radical Form and Exponent Form', difficulty: 'medium' },
      { slug: 'simplifying-radicals', title: 'Simplifying Radicals', difficulty: 'medium' },
    ],
  },
  {
    slug: 'operations-with-radicals',
    title: '2.3 Operations with Radicals',
    concepts: [
      { slug: 'adding-and-subtracting-radicals', title: 'Adding and Subtracting Radicals', difficulty: 'easy' },
      { slug: 'multiplying-radicals', title: 'Multiplying Radicals', difficulty: 'medium' },
      { slug: 'dividing-radicals-and-rationalizing-denominators', title: 'Dividing Radicals and Rationalizing Denominators', difficulty: 'hard' },
    ],
  },
  {
    slug: 'exponential-equations',
    title: '2.4 Exponential Equations',
    concepts: [
      { slug: 'solving-exponential-equations-with-equal-bases', title: 'Solving Exponential Equations with Equal Bases', difficulty: 'medium' },
      { slug: 'exponential-growth-and-decay', title: 'Exponential Growth and Decay', difficulty: 'medium' },
    ],
  },
];
