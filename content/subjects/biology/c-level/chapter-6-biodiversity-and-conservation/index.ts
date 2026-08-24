import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6BiodiversityTopics } from './topics';
import { chapter6BiodiversityQuickRevision } from './quickRevision';
import { chapter6BiodiversityAssessment } from './assessment';

export { chapter6BiodiversityConcepts } from './concepts';
export { chapter6BiodiversityFormulas } from './formulas';
export { chapter6BiodiversityQuickRevision } from './quickRevision';
export { chapter6BiodiversityTopics } from './topics';
export { chapter6BiodiversityAssessment } from './assessment';

const BASE = '/subjects/biology/c-level/biodiversity-and-conservation';

const chapter6BiodiversityConceptMap: ConceptMapNode = {
  label: 'Biodiversity and Conservation',
  children: [
    {
      label: 'Biodiversity',
      children: [
        { label: 'Levels of Biodiversity', href: `${BASE}/levels-of-biodiversity` },
        { label: 'Importance of Biodiversity', href: `${BASE}/importance-of-biodiversity` },
      ],
    },
    {
      label: 'Biodiversity in Myanmar',
      children: [
        { label: 'Forest Diversity', href: `${BASE}/forest-diversity-in-myanmar` },
        { label: 'Endangered Species', href: `${BASE}/endangered-species-in-myanmar` },
      ],
    },
    {
      label: 'Threats to Biodiversity',
      children: [
        { label: 'Habitat Destruction and Invasive Species', href: `${BASE}/habitat-destruction-and-invasive-species` },
        { label: 'Genetic Pollution and Overexploitation', href: `${BASE}/genetic-pollution-and-overexploitation` },
        { label: 'Climate Change, Overpopulation, Wildlife Trade', href: `${BASE}/climate-change-and-human-impact-on-biodiversity` },
      ],
    },
    {
      label: 'Conservation',
      children: [
        { label: 'Reasons for Conservation', href: `${BASE}/reasons-for-conservation` },
        { label: 'Conservation Methods', href: `${BASE}/conservation-methods` },
        { label: 'Protected Areas in Myanmar', href: `${BASE}/protected-areas-in-myanmar` },
      ],
    },
  ],
};

export const chapter6Biodiversity: Chapter = {
  slug: 'biodiversity-and-conservation',
  number: 6,
  title: 'Biodiversity and Conservation',
  blurb: "Levels and importance of biodiversity, Myanmar's biodiversity, the threats facing it, and how it is conserved.",
  status: 'available',
  topics: chapter6BiodiversityTopics,
  quickRevision: chapter6BiodiversityQuickRevision,
  assessment: chapter6BiodiversityAssessment,
  conceptMap: chapter6BiodiversityConceptMap,
};
