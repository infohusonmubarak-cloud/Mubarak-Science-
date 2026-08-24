import type { Formula } from '@/types/content';

export const chapter6BiodiversityFormulas: Record<string, Formula> = {
  'simpsons-diversity-index-formula': {
    slug: 'simpsons-diversity-index-formula',
    name: "Simpson's Diversity Index",
    expression: 'D = 1 − Σ(n/N)²',
    meaning:
      "Simpson's Diversity Index gives a numerical measure of species diversity in a habitat, combining " +
      "both the number of species present (richness) and how evenly individuals are distributed among " +
      "them (evenness). Values range from 0 (no diversity — one species dominates) to just under 1 " +
      "(very high diversity).",
    variables: [
      { symbol: 'D', meaning: "Simpson's Diversity Index, ranging from 0 to just under 1" },
      { symbol: 'n', meaning: 'The number of individuals of one particular species' },
      { symbol: 'N', meaning: 'The total number of individuals of all species combined' },
      { symbol: 'Σ(n/N)²', meaning: 'The sum of (n/N)² calculated separately for every species present, then added together' },
    ],
    whenToUse:
      'Use this formula to quantitatively compare the biodiversity of two or more habitats or samples, ' +
      'rather than relying on a purely qualitative impression — a higher D value indicates greater ' +
      'diversity.',
    relatedConceptSlugs: ['levels-of-biodiversity', 'importance-of-biodiversity'],
  },
};
