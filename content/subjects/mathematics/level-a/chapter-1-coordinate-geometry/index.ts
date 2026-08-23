import type { Chapter } from '@/types/content';
import { chapter1Topics } from './topics';
import { chapter1QuickRevision } from './quickRevision';

export { chapter1Concepts } from './concepts';
export { chapter1Formulas } from './formulas';
export { chapter1QuickRevision } from './quickRevision';
export { chapter1Topics } from './topics';

export const chapter1: Chapter = {
  slug: 'coordinate-geometry',
  number: 1,
  title: 'Introduction to Coordinate Geometry',
  blurb:
    'Locate points precisely with coordinates, measure the distance and midpoint ' +
    'between them, and describe straight lines with slope and the equation y = mx + c.',
  status: 'available',
  topics: chapter1Topics,
  quickRevision: chapter1QuickRevision,
};
