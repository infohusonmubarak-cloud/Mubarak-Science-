import type { Chapter } from '@/types/content';
import { chapter1B } from './chapter-1-remainder-and-factor-theorem';
import { chapter2B } from './chapter-2-binomial-theorem';
import { chapter3B } from './chapter-3-elementary-functions-and-transformations';
import { chapter4B } from './chapter-4-sequences-and-series';
import { chapter5B } from './chapter-5-matrices';
import { chapter6B } from './chapter-6-statistics';
import { chapter7B } from './chapter-7-circles';
import { chapter8B } from './chapter-8-areas-of-similar-triangles';

// Chapters 9-11 are outline-only stubs for this pass — real, navigable
// pages with accurate topic/concept maps, no full bodies yet. Chapters
// 1-8 are now fully authored.

const chapter9: Chapter = {
  slug: 'introduction-to-vectors',
  number: 9,
  title: 'Introduction to Vectors',
  blurb: 'Magnitude and direction, vector addition and subtraction, unit vectors, and the dot product.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'vector-basics',
      title: 'Vector Basics',
      concepts: [
        { slug: 'scalars-and-vectors', title: 'Scalars and Vectors' },
        { slug: 'magnitude-and-direction', title: 'Magnitude and Direction' },
        { slug: 'position-vectors-and-components', title: 'Position Vectors and Components' },
      ],
    },
    {
      slug: 'vector-operations',
      title: 'Vector Operations',
      concepts: [
        { slug: 'adding-and-subtracting-vectors', title: 'Adding and Subtracting Vectors' },
        { slug: 'scalar-multiplication-of-vectors', title: 'Scalar Multiplication' },
        { slug: 'unit-vectors', title: 'Unit Vectors' },
        { slug: 'dot-product', title: 'The Dot Product' },
      ],
    },
    {
      slug: 'vector-applications',
      title: 'Applications',
      concepts: [{ slug: 'force-velocity-and-navigation', title: 'Force, Velocity and Navigation' }],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'trigonometry-advanced',
  number: 10,
  title: 'Trigonometry',
  blurb: 'An advanced extension of Level A trigonometry — radians, identities, compound and double angles, and the sine and cosine rules.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'radians-and-identities',
      title: 'Radians and Identities',
      concepts: [
        { slug: 'radians', title: 'Radians and Degree Conversion' },
        { slug: 'the-unit-circle', title: 'The Unit Circle' },
        { slug: 'trigonometric-identities', title: 'Trigonometric Identities' },
      ],
    },
    {
      slug: 'compound-angles',
      title: 'Compound and Double Angles',
      concepts: [
        { slug: 'compound-angle-formulas', title: 'Compound Angle Formulas' },
        { slug: 'double-angle-formulas', title: 'Double Angle Formulas' },
        { slug: 'trigonometric-equations', title: 'Trigonometric Equations' },
      ],
    },
    {
      slug: 'non-right-triangles',
      title: 'Non-Right Triangles',
      concepts: [
        { slug: 'sine-rule', title: 'The Sine Rule' },
        { slug: 'cosine-rule', title: 'The Cosine Rule' },
        { slug: 'area-of-a-triangle', title: 'Area of a Triangle Using Sine' },
      ],
    },
  ],
};

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
    chapter7B, chapter8B, chapter9, chapter10, chapter11,
  ],
};
