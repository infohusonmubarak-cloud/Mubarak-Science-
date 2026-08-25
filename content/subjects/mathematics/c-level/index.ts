import type { Level } from '@/types/content';
import { chapter1C } from './chapter-1-complex-numbers';
import { chapter2C } from './chapter-2-mathematical-induction';
import { chapter3C } from './chapter-3-analytic-solid-geometry';
import { chapter4C } from './chapter-4-vectors-in-three-dimensions';
import { chapter5C } from './chapter-5-permutation-and-combination';
import { chapter6C } from './chapter-6-circles-and-parabolas';
import { chapter7C } from './chapter-7-trigonometric-functions-and-graphs';
import { chapter8C } from './chapter-8-logarithmic-and-exponential-functions';
import { chapter9C } from './chapter-9-applications-of-derivatives';
import { chapter10C } from './chapter-10-methods-of-integration';
import { chapter11C } from './chapter-11-applications-of-integration';

// All 11 chapters are now fully authored.

export const cLevelMath: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Eleven advanced chapters — from complex numbers and solid geometry through the methods and applications of integration.',
  status: 'available',
  chapters: [
    chapter1C, chapter2C, chapter3C, chapter4C, chapter5C, chapter6C,
    chapter7C, chapter8C, chapter9C, chapter10C, chapter11C,
  ],
};
