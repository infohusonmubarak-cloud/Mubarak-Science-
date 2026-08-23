import type { Level, Subject } from '@/types/content';
import { aLevelMath } from './a-level';
import { bLevelMath } from './b-level';

const cLevelMath: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'The next tier of Mathematics chapters — not written yet.',
  status: 'coming-soon',
  chapters: [],
};

export const mathematics: Subject = {
  slug: 'mathematics',
  name: 'Mathematics',
  shortDescription: 'Coordinate geometry, functions, trigonometry, statistics, vectors and more — understood, not memorized.',
  iconKey: 'mathematics',
  status: 'available',
  levels: [aLevelMath, bLevelMath, cLevelMath],
};
