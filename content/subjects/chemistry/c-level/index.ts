import type { Level } from '@/types/content';
import { chapter1Bonding } from './chapter-1-chemical-bonding-and-intermolecular-forces';
import { chapter2Energy } from './chapter-2-energy-changes-in-chemical-reactions';
import { chapter3Kinetics } from './chapter-3-chemical-kinetics-rates-of-reaction';
import { chapter4Equilibrium } from './chapter-4-chemical-equilibrium';
import { chapter5AcidBase } from './chapter-5-acid-base-reactions';
import { chapter6Transition } from './chapter-6-transition-elements';
import { chapter7Environment } from './chapter-7-chemistry-and-green-environment';
import { chapter8Organic } from './chapter-8-organic-compounds-and-macromolecules';

// All eight chapters are now fully authored.

export const cLevelChemistry: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Eight chapters — from chemical bonding through organic compounds and macromolecules.',
  status: 'available',
  chapters: [
    chapter1Bonding, chapter2Energy, chapter3Kinetics, chapter4Equilibrium,
    chapter5AcidBase, chapter6Transition, chapter7Environment, chapter8Organic,
  ],
};
