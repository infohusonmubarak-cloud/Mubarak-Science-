import type { Chapter, Level } from '@/types/content';
import { chapter1Bonding } from './chapter-1-chemical-bonding-and-intermolecular-forces';
import { chapter2Energy } from './chapter-2-energy-changes-in-chemical-reactions';
import { chapter3Kinetics } from './chapter-3-chemical-kinetics-rates-of-reaction';
import { chapter4Equilibrium } from './chapter-4-chemical-equilibrium';
import { chapter5AcidBase } from './chapter-5-acid-base-reactions';
import { chapter6Transition } from './chapter-6-transition-elements';
import { chapter7Environment } from './chapter-7-chemistry-and-green-environment';

// Chapters 1-7 are fully authored; chapter 8 is an outline-only stub for
// now — a real, navigable page with an accurate section map, upgraded to
// a full chapter in the final batch.

const chapter8: Chapter = {
  slug: 'organic-compounds-and-macromolecules',
  number: 8,
  title: 'Organic Compounds and Macromolecules',
  blurb: 'What makes a compound organic, how functional groups are identified, and how small molecules link into macromolecules.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'organic-compounds-topic',
      title: 'Organic Compounds',
      concepts: [
        { slug: 'what-are-organic-compounds', title: 'What Are Organic Compounds' },
        { slug: 'hydrocarbons-and-homologous-series', title: 'Hydrocarbons and Homologous Series' },
      ],
    },
    {
      slug: 'functional-groups-topic',
      title: 'Determining the Functional Groups in Organic Compounds',
      concepts: [
        { slug: 'common-functional-groups', title: 'Common Functional Groups' },
        { slug: 'tests-for-functional-groups', title: 'Tests for Functional Groups' },
      ],
    },
    {
      slug: 'macromolecules-topic',
      title: 'Macromolecules',
      concepts: [
        { slug: 'polymers-and-monomers', title: 'Polymers and Monomers' },
        { slug: 'natural-and-synthetic-macromolecules', title: 'Natural and Synthetic Macromolecules' },
      ],
    },
  ],
};

export const cLevelChemistry: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Eight chapters — from chemical bonding through organic compounds and macromolecules.',
  status: 'available',
  chapters: [chapter1Bonding, chapter2Energy, chapter3Kinetics, chapter4Equilibrium, chapter5AcidBase, chapter6Transition, chapter7Environment, chapter8],
};
