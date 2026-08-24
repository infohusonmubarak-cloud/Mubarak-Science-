import type { Chapter } from '@/types/content';
import { chapter4Chem } from './chapter-4-quantities-of-substances';

// Chapter 4 is the fully-authored reference chapter for this pass. The
// other seven are outline-only stubs — real, navigable pages with an
// accurate topic/concept map, no full bodies yet.

const chapter1: Chapter = {
  slug: 'the-central-science',
  number: 1,
  title: 'The Central Science',
  blurb: 'What chemistry is, how it connects to biology, physics, medicine and the environment, and the measurement skills every chemist needs.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'chemistry-and-other-fields',
      title: 'Chemistry and Other Fields',
      concepts: [
        { slug: 'what-is-chemistry', title: 'What Is Chemistry?' },
        { slug: 'chemistry-in-daily-life', title: 'Chemistry in Daily Life' },
        { slug: 'chemistry-and-other-sciences', title: 'Chemistry, Biology, Physics and Medicine' },
      ],
    },
    {
      slug: 'working-safely-and-accurately',
      title: 'Working Safely and Accurately',
      concepts: [
        { slug: 'laboratory-safety', title: 'Laboratory Safety' },
        { slug: 'scientific-method-in-chemistry', title: 'The Scientific Method in Chemistry' },
        { slug: 'measurements-and-significant-figures', title: 'Measurements and Significant Figures' },
        { slug: 'accuracy-precision-and-error', title: 'Accuracy, Precision and Experimental Error' },
      ],
    },
  ],
};

const chapter2: Chapter = {
  slug: 'matter-and-solutions',
  number: 2,
  title: 'Matter and Solutions',
  blurb: 'States of matter, elements, compounds and mixtures, and how solutions, concentration and solubility work.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'states-and-classification-of-matter',
      title: 'States and Classification of Matter',
      concepts: [
        { slug: 'states-of-matter', title: 'States of Matter' },
        { slug: 'elements-compounds-and-mixtures', title: 'Elements, Compounds and Mixtures' },
        { slug: 'physical-and-chemical-properties', title: 'Physical and Chemical Properties' },
      ],
    },
    {
      slug: 'solutions',
      title: 'Solutions',
      concepts: [
        { slug: 'solutions-solute-and-solvent', title: 'Solutions, Solute and Solvent' },
        { slug: 'concentration-and-solubility', title: 'Concentration and Solubility' },
        { slug: 'saturation-and-dilution', title: 'Saturation and Dilution' },
        { slug: 'separation-techniques', title: 'Separation Techniques' },
      ],
    },
  ],
};

const chapter3: Chapter = {
  slug: 'electronic-structure-and-periodic-table',
  number: 3,
  title: 'Electronic Structure of Atoms and Periodic Table',
  blurb: 'Protons, neutrons and electrons, how electrons are arranged in shells, and how the periodic table organizes every element by structure and trend.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'atomic-structure',
      title: 'Atomic Structure',
      concepts: [
        { slug: 'subatomic-particles', title: 'Protons, Neutrons and Electrons' },
        { slug: 'atomic-number-and-mass-number', title: 'Atomic Number and Mass Number' },
        { slug: 'isotopes', title: 'Isotopes' },
      ],
    },
    {
      slug: 'electron-arrangement',
      title: 'Electron Arrangement',
      concepts: [
        { slug: 'electron-shells-and-configuration', title: 'Electron Shells and Configuration' },
        { slug: 'valence-electrons', title: 'Valence Electrons' },
      ],
    },
    {
      slug: 'the-periodic-table',
      title: 'The Periodic Table',
      concepts: [
        { slug: 'groups-and-periods', title: 'Groups and Periods' },
        { slug: 'metals-and-non-metals', title: 'Metals and Non-Metals' },
        { slug: 'periodic-trends', title: 'Periodic Trends: Radius, Ionization Energy, Electronegativity' },
      ],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'non-metals-oxygen-carbon-halogens',
  number: 5,
  title: 'Non-Metals: Oxygen, Carbon and Halogens',
  blurb: 'The properties and reactions of oxygen, the allotropes and compounds of carbon, and the trends and reactions of the halogen group.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'oxygen',
      title: 'Oxygen',
      concepts: [
        { slug: 'oxygen-properties-and-preparation', title: 'Properties and Preparation of Oxygen' },
        { slug: 'oxidation-and-combustion', title: 'Oxidation and Combustion' },
      ],
    },
    {
      slug: 'carbon',
      title: 'Carbon',
      concepts: [
        { slug: 'carbon-allotropes', title: 'Carbon Allotropes: Diamond, Graphite, Graphene' },
        { slug: 'carbon-oxides', title: 'Carbon Dioxide and Carbon Monoxide' },
      ],
    },
    {
      slug: 'halogens',
      title: 'Halogens',
      concepts: [
        { slug: 'halogen-properties-and-trends', title: 'Halogen Properties and Trends' },
        { slug: 'halogen-displacement-reactions', title: 'Halogen Displacement Reactions' },
      ],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'acids-bases-and-salts',
  number: 6,
  title: 'Acids, Bases and Salts',
  blurb: 'The pH scale, strong and weak acids and bases, neutralization, titration, and how salts are prepared.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'acids-and-bases',
      title: 'Acids and Bases',
      concepts: [
        { slug: 'acids-and-bases', title: 'Acids, Bases and Alkalis' },
        { slug: 'the-ph-scale-a-level', title: 'The pH Scale' },
        { slug: 'strong-and-weak-acids-and-bases', title: 'Strong and Weak Acids and Bases' },
      ],
    },
    {
      slug: 'neutralization-and-salts',
      title: 'Neutralization and Salts',
      concepts: [
        { slug: 'neutralization-reactions', title: 'Neutralization Reactions' },
        { slug: 'preparing-salts', title: 'Preparing Salts' },
        { slug: 'titration', title: 'Titration' },
      ],
    },
  ],
};

const chapter7: Chapter = {
  slug: 'air-water-and-soil',
  number: 7,
  title: 'Air, Water and Soil',
  blurb: 'The composition of air and water, pollution and the greenhouse effect, and the composition and pH of soil.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'air',
      title: 'Air',
      concepts: [
        { slug: 'composition-of-air', title: 'Composition of Air' },
        { slug: 'air-pollution-and-greenhouse-gases', title: 'Air Pollution and Greenhouse Gases' },
      ],
    },
    {
      slug: 'water',
      title: 'Water',
      concepts: [
        { slug: 'properties-of-water', title: 'Properties of Water' },
        { slug: 'the-water-cycle', title: 'The Water Cycle' },
        { slug: 'water-treatment-and-purification', title: 'Water Treatment and Purification' },
      ],
    },
    {
      slug: 'soil',
      title: 'Soil',
      concepts: [
        { slug: 'soil-composition', title: 'Soil Composition' },
        { slug: 'soil-ph-and-fertilizers', title: 'Soil pH and Fertilizers' },
      ],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'fuels-and-crude-oil',
  number: 8,
  title: 'Fuels and Crude Oil',
  blurb: 'Hydrocarbons and fractional distillation, complete and incomplete combustion, cracking, and the environmental impact of fossil fuels.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'crude-oil-and-hydrocarbons',
      title: 'Crude Oil and Hydrocarbons',
      concepts: [
        { slug: 'fossil-fuels-and-crude-oil', title: 'Fossil Fuels and Crude Oil' },
        { slug: 'alkanes-and-hydrocarbons', title: 'Alkanes and Hydrocarbons' },
        { slug: 'fractional-distillation', title: 'Fractional Distillation' },
      ],
    },
    {
      slug: 'using-fuels',
      title: 'Using Fuels',
      concepts: [
        { slug: 'combustion-of-fuels', title: 'Complete and Incomplete Combustion' },
        { slug: 'cracking', title: 'Cracking' },
        { slug: 'fuels-and-pollution', title: 'Fuels, Carbon Emissions and Pollution' },
      ],
    },
  ],
};

export const aLevelChemistry = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Eight chapters — from the central science through fuels and crude oil.',
  status: 'available' as const,
  chapters: [chapter1, chapter2, chapter3, chapter4Chem, chapter5, chapter6, chapter7, chapter8],
};
