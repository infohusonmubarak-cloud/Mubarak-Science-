import type { Level, Subject } from '@/types/content';
import { aLevelPhysics } from './a-level';
import { cLevelPhysics } from './c-level';

const bLevelPhysics: Level = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'The next tier of Physics chapters — not written yet.',
  status: 'coming-soon',
  chapters: [],
};

export const physics: Subject = {
  slug: 'physics',
  name: 'Physics',
  shortDescription: 'Motion, forces, energy, waves, electricity and more — understood, not memorized.',
  iconKey: 'physics',
  status: 'available',
  levels: [aLevelPhysics, bLevelPhysics, cLevelPhysics],
};
