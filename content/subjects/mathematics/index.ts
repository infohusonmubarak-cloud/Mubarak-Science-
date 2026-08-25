import type { Subject } from '@/types/content';
import { aLevelMath } from './a-level';
import { bLevelMath } from './b-level';
import { cLevelMath } from './c-level';

export const mathematics: Subject = {
  slug: 'mathematics',
  name: 'Mathematics',
  shortDescription: 'Coordinate geometry, functions, trigonometry, statistics, vectors and more — understood, not memorized.',
  iconKey: 'mathematics',
  status: 'available',
  levels: [aLevelMath, bLevelMath, cLevelMath],
};
