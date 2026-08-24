import type { Subject } from '@/types/content';
import { aLevelPhysics } from './a-level';
import { bLevelPhysics } from './b-level';
import { cLevelPhysics } from './c-level';

export const physics: Subject = {
  slug: 'physics',
  name: 'Physics',
  shortDescription: 'Motion, forces, energy, waves, electricity and more — understood, not memorized.',
  iconKey: 'physics',
  status: 'available',
  levels: [aLevelPhysics, bLevelPhysics, cLevelPhysics],
};
