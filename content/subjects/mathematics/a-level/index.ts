import type { Chapter } from '@/types/content';
import { chapter1 } from './chapter-1-coordinate-geometry';
import { chapter2 } from './chapter-2-exponents-and-radicals';
import { chapter3 } from './chapter-3-logarithms';
import { chapter4 } from './chapter-4-functions';
import { chapter5 } from './chapter-5-quadratic-functions';
import { chapter6 } from './chapter-6-absolute-value-functions';
import { chapter7 } from './chapter-7-probability';

// Chapters 8-10 are outline-only stubs for this pass: every chapter is a
// real, navigable page with an accurate topic/concept map, but only
// Chapters 1-7 have full concept bodies written. `status: 'coming-soon'`
// drives the ComingSoonPanel instead of a full concept template.

const chapter8: Chapter = {
  slug: 'similarity',
  number: 8,
  title: 'Similarity',
  blurb: 'Similar figures, scale factor, and the AA, SAS and SSS tests for similar triangles.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'similar-figures',
      title: 'Similar Figures',
      concepts: [
        { slug: 'corresponding-sides-and-angles', title: 'Corresponding Sides and Angles' },
        { slug: 'scale-factor', title: 'Scale Factor' },
      ],
    },
    {
      slug: 'similar-triangles',
      title: 'Similar Triangles',
      concepts: [
        { slug: 'aa-similarity', title: 'AA Similarity' },
        { slug: 'sas-similarity', title: 'SAS Similarity' },
        { slug: 'sss-similarity', title: 'SSS Similarity' },
        { slug: 'ratio-of-areas', title: 'Ratio of Areas' },
      ],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'circles',
  number: 9,
  title: 'Circles',
  blurb: 'Radius, diameter, chords, arcs and sectors, tangents, and the equation of a circle on the coordinate plane.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'parts-of-a-circle',
      title: 'Parts of a Circle',
      concepts: [
        { slug: 'radius-diameter-and-circumference', title: 'Radius, Diameter and Circumference' },
        { slug: 'chords-and-arcs', title: 'Chords and Arcs' },
        { slug: 'tangents-and-secants', title: 'Tangents and Secants' },
      ],
    },
    {
      slug: 'measuring-circles',
      title: 'Measuring Circles',
      concepts: [
        { slug: 'arc-length', title: 'Arc Length' },
        { slug: 'sector-area', title: 'Sector Area' },
        { slug: 'central-and-inscribed-angles', title: 'Central and Inscribed Angles' },
      ],
    },
    {
      slug: 'circle-equations',
      title: 'Circles on the Coordinate Plane',
      concepts: [{ slug: 'equation-of-a-circle', title: 'Equation of a Circle' }],
    },
  ],
};

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
