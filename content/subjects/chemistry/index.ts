import type { Level, Subject } from '@/types/content';
import { aLevelChemistry } from './a-level';
import { cLevelChemistry } from './c-level';

const bLevelChemistry: Level = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'The next tier of Chemistry chapters — not written yet.',
  status: 'coming-soon',
  chapters: [],
};

export const chemistry: Subject = {
  slug: 'chemistry',
  name: 'Chemistry',
  shortDescription: 'Atoms, reactions, moles, and the periodic table — understood, not memorized.',
  iconKey: 'chemistry',
  status: 'available',
  levels: [aLevelChemistry, bLevelChemistry, cLevelChemistry],
};
