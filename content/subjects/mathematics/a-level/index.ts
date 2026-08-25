import { chapter1 } from './chapter-1-coordinate-geometry';
import { chapter2 } from './chapter-2-exponents-and-radicals';
import { chapter3 } from './chapter-3-logarithms';
import { chapter4 } from './chapter-4-functions';
import { chapter5 } from './chapter-5-quadratic-functions';
import { chapter6 } from './chapter-6-absolute-value-functions';
import { chapter7 } from './chapter-7-probability';
import { chapter8 } from './chapter-8-similarity';
import { chapter9 } from './chapter-9-circles';
import { chapter10 } from './chapter-10-trigonometry';

export const aLevelMath = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Ten foundational chapters — from coordinate geometry through trigonometry.',
  status: 'available' as const,
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10],
};
