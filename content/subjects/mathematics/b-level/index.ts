import type { Chapter } from '@/types/content';
import { chapter1B } from './chapter-1-remainder-and-factor-theorem';
import { chapter2B } from './chapter-2-binomial-theorem';
import { chapter3B } from './chapter-3-elementary-functions-and-transformations';
import { chapter4B } from './chapter-4-sequences-and-series';
import { chapter5B } from './chapter-5-matrices';
import { chapter6B } from './chapter-6-statistics';
import { chapter7B } from './chapter-7-circles';
import { chapter8B } from './chapter-8-areas-of-similar-triangles';
import { chapter9B } from './chapter-9-introduction-to-vectors';
import { chapter10B } from './chapter-10-trigonometry-advanced';

// Chapter 11 is an outline-only stub for this pass — a real, navigable
// page with an accurate topic/concept map, no full body yet. Chapters
// 1-10 are now fully authored.

const chapter11: Chapter = {
  slug: 'method-of-differentiation',
  number: 11,
  title: 'Method of Differentiation',
  blurb: 'Rates of change and gradients, the rules of differentiation, and finding stationary points and maxima/minima.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-idea-of-a-derivative',
      title: 'The Idea of a Derivative',
      concepts: [
        { slug: 'limits-and-rate-of-change', title: 'Limits and Rate of Change' },
        { slug: 'the-derivative-and-notation', title: 'The Derivative and Its Notation' },
      ],
    },
    {
      slug: 'differentiation-rules',
      title: 'Differentiation Rules',
      concepts: [
        { slug: 'power-and-constant-rules', title: 'Power Rule and Constant Rule' },
        { slug: 'sum-and-difference-rule', title: 'Sum and Difference Rule' },
        { slug: 'product-rule', title: 'Product Rule' },
        { slug: 'quotient-rule', title: 'Quotient Rule' },
        { slug: 'chain-rule', title: 'Chain Rule' },
      ],
    },
    {
      slug: 'using-derivatives',
      title: 'Using Derivatives',
      concepts: [
        { slug: 'stationary-points', title: 'Stationary Points' },
        { slug: 'maxima-and-minima', title: 'Maxima and Minima' },
        { slug: 'differentiation-applications', title: 'Speed, Acceleration and Optimization' },
      ],
    },
  ],
};

export const bLevelMath = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'Eleven advanced chapters — from polynomial theorems through differentiation.',
  status: 'available' as const,
  chapters: [
    chapter1B, chapter2B, chapter3B, chapter4B, chapter5B, chapter6B,
    chapter7B, chapter8B, chapter9B, chapter10B, chapter11,
  ],
};
