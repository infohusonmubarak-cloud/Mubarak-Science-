import type { Formula } from '@/types/content';

export const chapter2MolecularFormulas: Record<string, Formula> = {
  'chargaffs-base-pairing-rule': {
    slug: 'chargaffs-base-pairing-rule',
    name: "Chargaff's Base-Pairing Rule",
    expression: '%A = %T and %G = %C',
    meaning:
      'In double-stranded DNA, the percentage of adenine always equals the percentage of thymine, and ' +
      'the percentage of guanine always equals the percentage of cytosine, because A always pairs with ' +
      'T and G always pairs with C across the double helix.',
    variables: [
      { symbol: '%A', meaning: 'Percentage of adenine bases in the DNA sample' },
      { symbol: '%T', meaning: 'Percentage of thymine bases in the DNA sample' },
      { symbol: '%G', meaning: 'Percentage of guanine bases in the DNA sample' },
      { symbol: '%C', meaning: 'Percentage of cytosine bases in the DNA sample' },
    ],
    whenToUse:
      'Use this rule to find the percentage of any one base in a double-stranded DNA sample when you ' +
      'know the percentage of at least one other base, since all four percentages must add up to 100%.',
    relatedConceptSlugs: ['the-structure-of-dna', 'dna-replication'],
  },
};
