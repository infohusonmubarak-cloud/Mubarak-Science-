import type { Chapter, Level } from '@/types/content';
import { chapter1C } from './chapter-1-complex-numbers';
import { chapter2C } from './chapter-2-mathematical-induction';
import { chapter3C } from './chapter-3-analytic-solid-geometry';
import { chapter4C } from './chapter-4-vectors-in-three-dimensions';
import { chapter5C } from './chapter-5-permutation-and-combination';
import { chapter6C } from './chapter-6-circles-and-parabolas';
import { chapter7C } from './chapter-7-trigonometric-functions-and-graphs';
import { chapter8C } from './chapter-8-logarithmic-and-exponential-functions';
import { chapter9C } from './chapter-9-applications-of-derivatives';

// Outline-only stubs for this pass — real, navigable pages with accurate
// topic/concept maps, no full bodies yet. Each will be replaced with a
// fully-authored chapter module (matching the a-level/b-level pattern)
// one at a time. Chapters 1-9 are now fully authored.

const chapter10: Chapter = {
  slug: 'methods-of-integration',
  number: 10,
  title: 'Methods of Integration',
  blurb: 'Basic integration, the substitution method, integration by parts, and the partial fraction method.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'basic-integration-topic',
      title: 'Basic Integration',
      concepts: [
        { slug: 'antiderivatives-and-basic-integration-rules', title: 'Antiderivatives and Basic Integration Rules' },
        { slug: 'integrating-exponential-and-trigonometric-functions', title: 'Integrating Exponential and Trigonometric Functions' },
      ],
    },
    {
      slug: 'substitution-method-topic',
      title: 'The Substitution Method',
      concepts: [{ slug: 'integration-by-substitution', title: 'Integration by Substitution' }],
    },
    {
      slug: 'integration-by-parts-topic',
      title: 'Integration by Parts',
      concepts: [{ slug: 'integration-by-parts', title: 'Integration by Parts' }],
    },
    {
      slug: 'partial-fraction-method-topic',
      title: 'The Partial Fraction Method',
      concepts: [
        { slug: 'setting-up-a-partial-fraction-decomposition', title: 'Setting Up a Partial Fraction Decomposition' },
        { slug: 'integrating-using-partial-fractions', title: 'Integrating Using Partial Fractions' },
      ],
    },
  ],
};

const chapter11: Chapter = {
  slug: 'applications-of-integration',
  number: 11,
  title: 'Applications of Integration',
  blurb: 'The definite integral as area under a curve, area between two curves, and volumes of revolution.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'area-under-a-curve-topic',
      title: 'The Definite Integral and Area Under a Curve',
      concepts: [
        { slug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus', title: 'The Definite Integral and the Fundamental Theorem of Calculus' },
        { slug: 'area-under-a-curve', title: 'Area Under a Curve' },
      ],
    },
    {
      slug: 'area-between-two-curves-topic',
      title: 'Area Between Two Curves',
      concepts: [{ slug: 'area-between-two-curves', title: 'Area Between Two Curves' }],
    },
    {
      slug: 'volume-by-disks-topic',
      title: 'Volume of Revolution: The Disk Method',
      concepts: [{ slug: 'volume-of-revolution-the-disk-method', title: 'Volume of Revolution: The Disk Method' }],
    },
    {
      slug: 'volume-by-washers-topic',
      title: 'Volume of Revolution: The Washer Method',
      concepts: [{ slug: 'volume-of-revolution-the-washer-method', title: 'Volume of Revolution: The Washer Method' }],
    },
  ],
};

export const cLevelMath: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Eleven advanced chapters — from complex numbers and solid geometry through the methods and applications of integration.',
  status: 'available',
  chapters: [
    chapter1C, chapter2C, chapter3C, chapter4C, chapter5C, chapter6C,
    chapter7C, chapter8C, chapter9C, chapter10, chapter11,
  ],
};
