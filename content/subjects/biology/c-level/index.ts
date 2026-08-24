import type { Chapter, Level } from '@/types/content';
import { chapter1Themes } from './chapter-1-themes-and-importance-of-biology';
import { chapter2Molecular } from './chapter-2-molecular-biology';
import { chapter3Transport } from './chapter-3-transport-system-in-organisms';

// Chapters 1-3 are fully authored; the remaining three are outline-only
// stubs for now — real, navigable pages with an accurate section map,
// upgraded to full chapters one batch at a time.

const chapter4: Chapter = {
  slug: 'diseases-in-plants-and-animals',
  number: 4,
  title: 'Diseases in Plants and Animals',
  blurb: 'What causes disease in plants and animals, how to recognize it, and how it is controlled.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'plant-diseases-topic',
      title: 'Plant Diseases',
      concepts: [
        { slug: 'causes-of-plant-diseases', title: 'Disease Causing Factors' },
        { slug: 'signs-and-symptoms-of-plant-diseases', title: 'Signs and Symptoms of Diseases' },
        { slug: 'types-of-plant-pathogens', title: 'Types of Pathogens' },
        { slug: 'control-of-plant-diseases', title: 'Control of Plant Diseases' },
      ],
    },
    {
      slug: 'animal-diseases-topic',
      title: 'Animal Diseases',
      concepts: [
        { slug: 'non-infectious-animal-diseases', title: 'Non-infectious Diseases' },
        { slug: 'infectious-animal-diseases', title: 'Infectious Diseases' },
      ],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'coordination-and-response',
  number: 5,
  title: 'Coordination and Response',
  blurb: 'How plants and animals sense and respond to their environment — plant growth regulation, the nervous system, sense organs, and the endocrine system.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'coordination-in-plants-topic',
      title: 'Coordination and Response in Plants',
      concepts: [
        { slug: 'coordination-and-response-in-plants', title: 'Coordination and Response in Plants' },
        { slug: 'plant-growth-regulators', title: 'Plant Growth Regulators' },
        { slug: 'seed-dormancy-and-germination', title: 'Seed Dormancy and Seed Germination' },
        { slug: 'photoperiodism-and-photomorphogenesis', title: 'Photoperiodism and Photomorphogenesis' },
      ],
    },
    {
      slug: 'coordination-in-animals-topic',
      title: 'Coordination and Response in Animals',
      concepts: [
        { slug: 'the-human-nervous-system', title: 'Human Nervous System' },
        { slug: 'structure-of-neurones', title: 'Structure of Neurones' },
        { slug: 'synapses', title: 'Synapses' },
      ],
    },
    {
      slug: 'sense-organs-topic',
      title: 'Sense Organs',
      concepts: [{ slug: 'sense-organs', title: 'Sense Organs' }],
    },
    {
      slug: 'endocrine-system-topic',
      title: 'The Endocrine System',
      concepts: [
        { slug: 'endocrine-glands-and-hormones', title: 'Endocrine Glands and Hormones' },
        { slug: 'comparing-nervous-and-endocrine-systems', title: 'Comparison between Nervous System and Endocrine System' },
      ],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'biodiversity-and-conservation',
  number: 6,
  title: 'Biodiversity and Conservation',
  blurb: "Levels and importance of biodiversity, Myanmar's biodiversity, the threats facing it, and how it is conserved.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'biodiversity-topic',
      title: 'Biodiversity',
      concepts: [
        { slug: 'levels-of-biodiversity', title: 'Levels of Biodiversity' },
        { slug: 'importance-of-biodiversity', title: 'Importance of Biodiversity' },
      ],
    },
    {
      slug: 'biodiversity-in-myanmar-topic',
      title: 'Biodiversity in Myanmar',
      concepts: [
        { slug: 'forest-diversity-in-myanmar', title: 'Forest Diversity' },
        { slug: 'endangered-species-in-myanmar', title: 'Endangered Species' },
      ],
    },
    {
      slug: 'threats-to-biodiversity-topic',
      title: 'Threats to Biodiversity',
      concepts: [
        { slug: 'habitat-destruction-and-invasive-species', title: 'Habitat Destruction and Invasive Alien Species' },
        { slug: 'genetic-pollution-and-overexploitation', title: 'Genetic Pollution and Overexploitation' },
        { slug: 'climate-change-and-human-impact-on-biodiversity', title: 'Climate Change, Overpopulation and Wildlife Trade' },
      ],
    },
    {
      slug: 'conservation-topic',
      title: 'Conservation',
      concepts: [
        { slug: 'reasons-for-conservation', title: 'Reasons for Conservation' },
        { slug: 'conservation-methods', title: 'Conservation Methods' },
        { slug: 'protected-areas-in-myanmar', title: 'Protected Areas in Myanmar' },
      ],
    },
  ],
};

export const cLevelBiology: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Six chapters — from the themes of biology through biodiversity and conservation.',
  status: 'available',
  chapters: [chapter1Themes, chapter2Molecular, chapter3Transport, chapter4, chapter5, chapter6],
};
