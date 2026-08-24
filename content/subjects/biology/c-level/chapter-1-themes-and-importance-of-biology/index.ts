import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1ThemesTopics } from './topics';
import { chapter1ThemesQuickRevision } from './quickRevision';
import { chapter1ThemesAssessment } from './assessment';

export { chapter1ThemesConcepts } from './concepts';
export { chapter1ThemesFormulas } from './formulas';
export { chapter1ThemesQuickRevision } from './quickRevision';
export { chapter1ThemesTopics } from './topics';
export { chapter1ThemesAssessment } from './assessment';

const CONCEPT_MAP_BASE = '/subjects/biology/c-level/themes-and-importance-of-biology';

const chapter1ThemesConceptMap: ConceptMapNode = {
  label: 'Themes and Importance of Biology',
  children: [
    {
      label: 'Themes of Biology',
      children: [
        { label: 'Emergent Properties', href: `${CONCEPT_MAP_BASE}/emergent-properties-in-biological-organization` },
        { label: 'Genetic Information', href: `${CONCEPT_MAP_BASE}/genetic-information-in-life-processes` },
        { label: 'Energy and Matter Transfer', href: `${CONCEPT_MAP_BASE}/energy-and-matter-transfer-in-life` },
        { label: 'Interactions Across Scales', href: `${CONCEPT_MAP_BASE}/interactions-in-biological-systems` },
        { label: 'Evolution: Unity and Diversity', href: `${CONCEPT_MAP_BASE}/evolution-and-the-diversity-of-life` },
      ],
    },
    {
      label: 'Importance of Biology in Daily Life',
      children: [
        { label: 'Agriculture and Hydroponics', href: `${CONCEPT_MAP_BASE}/agriculture-horticulture-and-hydroponics` },
        { label: 'Aquaculture and Livestock', href: `${CONCEPT_MAP_BASE}/aquaculture-and-livestock` },
        { label: 'Food', href: `${CONCEPT_MAP_BASE}/biology-in-food-production` },
        { label: 'Health and Medicine', href: `${CONCEPT_MAP_BASE}/biology-in-health-and-medicine` },
        { label: 'Clothing and Shelter', href: `${CONCEPT_MAP_BASE}/biology-in-clothing-and-shelter` },
      ],
    },
  ],
};

export const chapter1Themes: Chapter = {
  slug: 'themes-and-importance-of-biology',
  number: 1,
  title: 'Introduction to Biology: Themes and Importance',
  blurb:
    'The five unifying themes that run through all of biology, and why biology matters directly to ' +
    'agriculture, food, health, and everyday life.',
  status: 'available',
  topics: chapter1ThemesTopics,
  quickRevision: chapter1ThemesQuickRevision,
  assessment: chapter1ThemesAssessment,
  conceptMap: chapter1ThemesConceptMap,
};
