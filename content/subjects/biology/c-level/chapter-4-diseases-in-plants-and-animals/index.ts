import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4DiseasesTopics } from './topics';
import { chapter4DiseasesQuickRevision } from './quickRevision';
import { chapter4DiseasesAssessment } from './assessment';

export { chapter4DiseasesConcepts } from './concepts';
export { chapter4DiseasesFormulas } from './formulas';
export { chapter4DiseasesQuickRevision } from './quickRevision';
export { chapter4DiseasesTopics } from './topics';
export { chapter4DiseasesAssessment } from './assessment';

const BASE = '/subjects/biology/c-level/diseases-in-plants-and-animals';

const chapter4DiseasesConceptMap: ConceptMapNode = {
  label: 'Diseases in Plants and Animals',
  children: [
    {
      label: 'Plant Diseases',
      children: [
        { label: 'Disease Causing Factors', href: `${BASE}/causes-of-plant-diseases` },
        { label: 'Signs and Symptoms', href: `${BASE}/signs-and-symptoms-of-plant-diseases` },
        { label: 'Types of Pathogens', href: `${BASE}/types-of-plant-pathogens` },
        { label: 'Control of Plant Diseases', href: `${BASE}/control-of-plant-diseases` },
      ],
    },
    {
      label: 'Animal Diseases',
      children: [
        { label: 'Non-infectious Diseases', href: `${BASE}/non-infectious-animal-diseases` },
        { label: 'Infectious Diseases', href: `${BASE}/infectious-animal-diseases` },
        { label: 'How Pathogens Are Transmitted', href: `${BASE}/how-pathogens-are-transmitted` },
        { label: "The Body's Defence Against Disease", href: `${BASE}/the-bodys-defence-against-disease` },
      ],
    },
  ],
};

export const chapter4Diseases: Chapter = {
  slug: 'diseases-in-plants-and-animals',
  number: 4,
  title: 'Diseases in Plants and Animals',
  blurb: 'What causes disease in plants and animals, how to recognize it, and how it is controlled.',
  status: 'available',
  topics: chapter4DiseasesTopics,
  quickRevision: chapter4DiseasesQuickRevision,
  assessment: chapter4DiseasesAssessment,
  conceptMap: chapter4DiseasesConceptMap,
};
