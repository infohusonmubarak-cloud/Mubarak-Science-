import type { Chapter, Level } from '@/types/content';
import { chapter1Themes } from './chapter-1-themes-and-importance-of-biology';
import { chapter2Molecular } from './chapter-2-molecular-biology';
import { chapter3Transport } from './chapter-3-transport-system-in-organisms';
import { chapter4Diseases } from './chapter-4-diseases-in-plants-and-animals';
import { chapter5Coordination } from './chapter-5-coordination-and-response';

// Chapters 1-5 are fully authored; the remaining one is an outline-only
// stub for now — a real, navigable page with an accurate section map,
// upgraded to a full chapter last.

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
  chapters: [chapter1Themes, chapter2Molecular, chapter3Transport, chapter4Diseases, chapter5Coordination, chapter6],
};
