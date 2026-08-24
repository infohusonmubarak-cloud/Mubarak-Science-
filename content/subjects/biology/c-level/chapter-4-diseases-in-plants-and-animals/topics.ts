import type { Topic } from '@/types/content';

export const chapter4DiseasesTopics: Topic[] = [
  {
    slug: 'plant-diseases-topic',
    title: 'Plant Diseases',
    concepts: [
      { slug: 'causes-of-plant-diseases', title: 'Disease Causing Factors', difficulty: 'easy' },
      { slug: 'signs-and-symptoms-of-plant-diseases', title: 'Signs and Symptoms of Diseases', difficulty: 'easy' },
      { slug: 'types-of-plant-pathogens', title: 'Types of Pathogens', difficulty: 'medium' },
      { slug: 'control-of-plant-diseases', title: 'Control of Plant Diseases', difficulty: 'medium' },
    ],
  },
  {
    slug: 'animal-diseases-topic',
    title: 'Animal Diseases',
    concepts: [
      { slug: 'non-infectious-animal-diseases', title: 'Non-infectious Diseases', difficulty: 'medium' },
      { slug: 'infectious-animal-diseases', title: 'Infectious Diseases', difficulty: 'medium' },
      { slug: 'how-pathogens-are-transmitted', title: 'How Pathogens Are Transmitted', difficulty: 'medium' },
      { slug: 'the-bodys-defence-against-disease', title: "The Body's Defence Against Disease", difficulty: 'hard' },
    ],
  },
];
