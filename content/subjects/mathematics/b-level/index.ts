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
import { chapter11B } from './chapter-11-methods-of-differentiation';

// All eleven chapters are now fully authored.

export const bLevelMath = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'Eleven advanced chapters — from polynomial theorems through differentiation.',
  status: 'available' as const,
  chapters: [
    chapter1B, chapter2B, chapter3B, chapter4B, chapter5B, chapter6B,
    chapter7B, chapter8B, chapter9B, chapter10B, chapter11B,
  ],
};
