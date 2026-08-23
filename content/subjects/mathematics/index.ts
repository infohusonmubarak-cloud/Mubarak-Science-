import type { Subject } from '@/types/content';
import { levelA } from './level-a';
import { levelB } from './level-b';

export const mathematics: Subject = {
  slug: 'mathematics',
  name: 'Mathematics',
  shortDescription: 'Coordinate geometry, functions, trigonometry, statistics, vectors and more — understood, not memorized.',
  iconKey: 'mathematics',
  status: 'available',
  levels: [levelA, levelB],
};
