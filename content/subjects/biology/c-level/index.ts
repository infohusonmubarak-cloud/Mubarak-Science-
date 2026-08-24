import type { Chapter, Level } from '@/types/content';
import { chapter1Themes } from './chapter-1-themes-and-importance-of-biology';
import { chapter2Molecular } from './chapter-2-molecular-biology';

// Chapters 1-2 are fully authored; the remaining four are outline-only
// stubs for now — real, navigable pages with an accurate section map,
// upgraded to full chapters one batch at a time.

const chapter3: Chapter = {
  slug: 'transport-system-in-organisms',
  number: 3,
  title: 'Transport System in Organisms',
  blurb: 'How water, sugars, and dissolved substances move through plants and animals — transpiration, translocation, and the mammalian cardiovascular and lymphatic systems.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'transport-tissues-and-water-movement-topic',
      title: 'Transport Tissues and Water Movement in Plants',
      concepts: [
        { slug: 'xylem-and-phloem-structure', title: 'Structure of Transport Tissues' },
        { slug: 'movement-of-water-in-a-plant', title: 'Movement of Water in a Plant' },
      ],
    },
    {
      slug: 'transpiration-topic',
      title: 'Transpiration',
      concepts: [
        { slug: 'transpiration-and-factors-affecting-it', title: 'Transpiration and Factors Affecting It' },
        { slug: 'benefits-and-demonstration-of-transpiration', title: 'Benefits and Demonstration of Transpiration Pull' },
      ],
    },
    {
      slug: 'translocation-topic',
      title: 'Translocation',
      concepts: [{ slug: 'translocation-in-plants', title: 'Translocation' }],
    },
    {
      slug: 'principles-of-transport-in-animals-topic',
      title: 'Principles of Transport in Animals',
      concepts: [{ slug: 'principles-and-features-of-mass-transport', title: 'Principles and Features of Mass Transport Systems' }],
    },
    {
      slug: 'cardiovascular-system-topic',
      title: 'Cardiovascular System',
      concepts: [
        { slug: 'structure-of-the-heart', title: 'The Structure of the Heart' },
        { slug: 'blood-vessels', title: 'The Blood Vessels' },
        { slug: 'components-of-blood', title: 'The Components of the Blood' },
        { slug: 'blood-clotting', title: 'The Clotting of the Blood' },
        { slug: 'cardiac-cycle-and-heartbeat-control', title: 'The Cardiac Cycle and Control of Heart Beat' },
      ],
    },
    {
      slug: 'lymphatic-system-topic',
      title: 'Lymphatic System',
      concepts: [{ slug: 'the-lymphatic-system', title: 'The Lymphatic System' }],
    },
  ],
};

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
  chapters: [chapter1Themes, chapter2Molecular, chapter3, chapter4, chapter5, chapter6],
};
