import type { Chapter, Level } from '@/types/content';
import { chapter1Bonding } from './chapter-1-chemical-bonding-and-intermolecular-forces';
import { chapter2Energy } from './chapter-2-energy-changes-in-chemical-reactions';
import { chapter3Kinetics } from './chapter-3-chemical-kinetics-rates-of-reaction';
import { chapter4Equilibrium } from './chapter-4-chemical-equilibrium';
import { chapter5AcidBase } from './chapter-5-acid-base-reactions';
import { chapter6Transition } from './chapter-6-transition-elements';

// Chapters 1-6 are fully authored; the other two are outline-only stubs
// for now — real, navigable pages with an accurate section map, upgraded
// to full chapters one batch at a time.

const chapter7: Chapter = {
  slug: 'chemistry-and-green-environment',
  number: 7,
  title: 'Chemistry and Green Environment',
  blurb: 'Pollutants and their environmental impact, radioactive substances, and how chemistry supports sustainable development.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'our-environmental-world-topic',
      title: 'Our Environmental World',
      concepts: [
        { slug: 'the-atmosphere-hydrosphere-and-lithosphere', title: 'The Atmosphere, Hydrosphere and Lithosphere' },
      ],
    },
    {
      slug: 'pollutants-and-impacts-topic',
      title: 'Pollutants and Impacts on the Environment',
      concepts: [
        { slug: 'air-pollutants', title: 'Air Pollutants' },
        { slug: 'water-and-soil-pollutants', title: 'Water and Soil Pollutants' },
        { slug: 'the-greenhouse-effect-and-global-warming', title: 'The Greenhouse Effect and Global Warming' },
      ],
    },
    {
      slug: 'radioactive-substances-topic',
      title: 'Radioactive Substances and the Environment',
      concepts: [
        { slug: 'radioactive-substances-in-the-environment', title: 'Radioactive Substances in the Environment' },
      ],
    },
    {
      slug: 'sustainable-development-topic',
      title: 'Chemistry for Sustainable Environmental Development',
      concepts: [
        { slug: 'chemistry-for-sustainable-development', title: 'Chemistry for Sustainable Development' },
      ],
    },
  ],
};

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
  chapters: [chapter1Bonding, chapter2Energy, chapter3Kinetics, chapter4Equilibrium, chapter5AcidBase, chapter6Transition, chapter7, chapter8],
};
