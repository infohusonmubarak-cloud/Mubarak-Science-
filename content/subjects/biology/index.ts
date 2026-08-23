import type { Level, Subject } from '@/types/content';
import { aLevelBiology } from './a-level';

const bLevelBiology: Level = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'The next tier of Biology chapters — not written yet.',
  status: 'coming-soon',
  chapters: [],
};

const cLevelBiology: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'The final tier of Biology chapters — not written yet.',
  status: 'coming-soon',
  chapters: [],
};

export const biology: Subject = {
  slug: 'biology',
  name: 'Biology',
  shortDescription: 'Cells, body systems, and how living things sustain and continue life — understood, not memorized.',
  iconKey: 'biology',
  status: 'available',
  levels: [aLevelBiology, bLevelBiology, cLevelBiology],
};
