import type { Level } from '@/types/content';
import { chapter1Themes } from './chapter-1-themes-and-importance-of-biology';
import { chapter2Molecular } from './chapter-2-molecular-biology';
import { chapter3Transport } from './chapter-3-transport-system-in-organisms';
import { chapter4Diseases } from './chapter-4-diseases-in-plants-and-animals';
import { chapter5Coordination } from './chapter-5-coordination-and-response';
import { chapter6Biodiversity } from './chapter-6-biodiversity-and-conservation';

export const cLevelBiology: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Six chapters — from the themes of biology through biodiversity and conservation.',
  status: 'available',
  chapters: [chapter1Themes, chapter2Molecular, chapter3Transport, chapter4Diseases, chapter5Coordination, chapter6Biodiversity],
};
