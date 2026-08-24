import type { Chapter, Level } from '@/types/content';
import { chapter1Bonding } from './chapter-1-chemical-bonding-and-intermolecular-forces';
import { chapter2Energy } from './chapter-2-energy-changes-in-chemical-reactions';
import { chapter3Kinetics } from './chapter-3-chemical-kinetics-rates-of-reaction';
import { chapter4Equilibrium } from './chapter-4-chemical-equilibrium';

// Chapters 1-4 are fully authored; the other four are outline-only stubs
// for now — real, navigable pages with an accurate section map, upgraded
// to full chapters one batch at a time.

const chapter5: Chapter = {
  slug: 'acid-base-reactions',
  number: 5,
  title: 'Acid-Base Reactions',
  blurb: 'Theories of acids and bases, pH and the ionisation of water, weak acid/base equilibria, salt hydrolysis, and how buffer solutions resist pH change.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'theories-of-acids-and-bases-topic',
      title: 'Theories of Acids and Bases',
      concepts: [
        { slug: 'arrhenius-theory-of-acids-and-bases', title: 'Arrhenius Theory' },
        { slug: 'bronsted-lowry-theory-of-acids-and-bases', title: 'Brønsted–Lowry Theory' },
      ],
    },
    {
      slug: 'ionic-dissociation-of-water-and-ph-topic',
      title: 'Ionic Dissociation of Water and pH',
      concepts: [
        { slug: 'ionic-product-of-water', title: 'The Ionic Product of Water, Kw' },
        { slug: 'the-ph-scale', title: 'The pH Scale' },
      ],
    },
    {
      slug: 'ionisation-of-acids-and-bases-topic',
      title: 'Ionisation of Acids and Bases',
      concepts: [
        { slug: 'strong-and-weak-acids', title: 'Strong and Weak Acids' },
        { slug: 'the-acid-dissociation-constant-ka', title: 'The Acid Dissociation Constant, Ka' },
        { slug: 'strong-and-weak-bases', title: 'Strong and Weak Bases' },
      ],
    },
    {
      slug: 'salt-hydrolysis-topic',
      title: 'Salt Hydrolysis',
      concepts: [
        { slug: 'salt-hydrolysis', title: 'Salt Hydrolysis' },
      ],
    },
    {
      slug: 'buffer-solutions-topic',
      title: 'Buffer Solutions',
      concepts: [
        { slug: 'how-buffer-solutions-work', title: 'How Buffer Solutions Work' },
        { slug: 'the-henderson-hasselbalch-equation', title: 'The Henderson–Hasselbalch Equation' },
      ],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'transition-elements',
  number: 6,
  title: 'Transition Elements',
  blurb: 'The 3d series transition elements, the characteristic properties that set them apart from main-group metals, and their everyday uses.',
  status: 'coming-soon',
  topics: [
    {
      slug: '3d-series-transition-elements-topic',
      title: 'The 3d Series Transition Elements',
      concepts: [
        { slug: 'electron-configuration-of-3d-transition-elements', title: 'Electron Configuration of the 3d Series' },
        { slug: 'what-makes-an-element-a-transition-element', title: 'What Makes an Element a Transition Element' },
      ],
    },
    {
      slug: 'characteristic-properties-topic',
      title: 'Characteristic Properties of the 3d Series Transition Elements',
      concepts: [
        { slug: 'variable-oxidation-states', title: 'Variable Oxidation States' },
        { slug: 'coloured-compounds-and-catalytic-activity', title: 'Coloured Compounds and Catalytic Activity' },
      ],
    },
    {
      slug: 'uses-of-transition-elements-topic',
      title: 'Uses of the 3d Series Transition Elements',
      concepts: [
        { slug: 'uses-of-transition-elements', title: 'Uses of Transition Elements' },
      ],
    },
  ],
};

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
  chapters: [chapter1Bonding, chapter2Energy, chapter3Kinetics, chapter4Equilibrium, chapter5, chapter6, chapter7, chapter8],
};
