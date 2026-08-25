import type { Chapter } from '@/types/content';
import { chapter1 } from './chapter-1-coordinate-geometry';
import { chapter2 } from './chapter-2-exponents-and-radicals';
import { chapter3 } from './chapter-3-logarithms';
import { chapter4 } from './chapter-4-functions';
import { chapter5 } from './chapter-5-quadratic-functions';
import { chapter6 } from './chapter-6-absolute-value-functions';
import { chapter7 } from './chapter-7-probability';
import { chapter8 } from './chapter-8-similarity';
import { chapter9 } from './chapter-9-circles';

// Chapter 10 is an outline-only stub for this pass: it is a real,
// navigable page with an accurate topic/concept map, but only Chapters
// 1-9 have full concept bodies written. `status: 'coming-soon'` drives
// the ComingSoonPanel instead of a full concept template.

const chapter10: Chapter = {
  slug: 'trigonometry',
  number: 10,
  title: 'Trigonometry',
  blurb: 'Sine, cosine and tangent in a right triangle, the Pythagorean theorem, and using SOH-CAH-TOA to measure distance and height.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'right-triangle-basics',
      title: 'Right Triangle Basics',
      concepts: [
        { slug: 'opposite-adjacent-hypotenuse', title: 'Opposite, Adjacent and Hypotenuse' },
        { slug: 'pythagorean-theorem', title: 'The Pythagorean Theorem' },
      ],
    },
    {
      slug: 'the-trig-ratios',
      title: 'The Trigonometric Ratios',
      concepts: [
        { slug: 'sine-cosine-tangent', title: 'Sine, Cosine and Tangent' },
        { slug: 'soh-cah-toa', title: 'SOH-CAH-TOA' },
        { slug: 'inverse-trig-functions', title: 'Inverse Trigonometric Functions' },
      ],
    },
    {
      slug: 'trig-applications',
      title: 'Applications',
      concepts: [{ slug: 'measuring-height-and-distance', title: 'Measuring Height and Distance' }],
    },
  ],
};

export const aLevelMath = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Ten foundational chapters — from coordinate geometry through trigonometry.',
  status: 'available' as const,
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10],
};
