import type { Formula } from '@/types/content';

export const chapter4Formulas: Record<string, Formula> = {
  'product-set-cardinality': {
    slug: 'product-set-cardinality',
    name: 'Cardinality of a Product Set',
    expression: 'n(A × B) = n(A) × n(B)',
    meaning: 'The number of ordered pairs in the product set A × B equals the number of elements in A times the number of elements in B.',
    variables: [
      { symbol: 'n(A × B)', meaning: 'the number of ordered pairs in the product set A × B' },
      { symbol: 'n(A)', meaning: 'the number of elements in set A' },
      { symbol: 'n(B)', meaning: 'the number of elements in set B' },
    ],
    whenToUse: 'Whenever you need to know how many ordered pairs a product set contains, without listing every pair by hand.',
    relatedConceptSlugs: ['cardinality-of-a-product-set'],
  },
};
