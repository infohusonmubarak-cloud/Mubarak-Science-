import type { Formula } from '@/types/content';

export const chapter8BFormulas: Record<string, Formula> = {
  'area-ratio-of-similar-triangles': {
    slug: 'area-ratio-of-similar-triangles',
    name: 'Area Ratio of Similar Triangles',
    expression: 'Area₁ / Area₂ = (s₁ / s₂)²',
    meaning: 'For two similar triangles, the ratio of their areas equals the square of the ratio of any pair of corresponding side lengths.',
    variables: [
      { symbol: 'Area₁, Area₂', meaning: 'the areas of the two similar triangles' },
      { symbol: 's₁, s₂', meaning: 'a pair of corresponding side lengths (or the linear scale factor between the two triangles), one from each triangle' },
    ],
    whenToUse: 'Whenever you know (or can find) a pair of corresponding side lengths of two similar triangles and need to relate their areas.',
    relatedConceptSlugs: ['the-area-ratio-theorem-for-similar-triangles', 'applying-the-area-ratio-theorem'],
  },
  'perimeter-ratio-of-similar-triangles': {
    slug: 'perimeter-ratio-of-similar-triangles',
    name: 'Perimeter Ratio of Similar Triangles',
    expression: 'Perimeter₁ / Perimeter₂ = s₁ / s₂',
    meaning: 'For two similar triangles, the ratio of their perimeters equals the ratio of any pair of corresponding side lengths directly — the same linear scale factor, not squared.',
    variables: [
      { symbol: 'Perimeter₁, Perimeter₂', meaning: 'the perimeters of the two similar triangles' },
      { symbol: 's₁, s₂', meaning: 'a pair of corresponding side lengths, one from each triangle' },
    ],
    whenToUse: 'Whenever you need to relate the perimeters (not the areas) of two similar triangles to their scale factor.',
    relatedConceptSlugs: ['perimeter-and-area-ratios-together'],
  },
};
