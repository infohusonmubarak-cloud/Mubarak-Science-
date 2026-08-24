import type { Formula } from '@/types/content';

export const chapter1BondingFormulas: Record<string, Formula> = {
  'electronegativity-difference-formula': {
    slug: 'electronegativity-difference-formula',
    name: 'Electronegativity Difference',
    expression: 'ΔEN = |EN₁ − EN₂|',
    meaning: 'How unequally two bonded atoms share their electrons — the bigger the difference, the more one-sided the bond.',
    variables: [
      { symbol: 'ΔEN', meaning: 'electronegativity difference between the two bonded atoms (no units — the Pauling scale is a relative scale)' },
      { symbol: 'EN₁, EN₂', meaning: 'the Pauling electronegativity values of each atom in the bond' },
    ],
    whenToUse: 'Whenever you need to predict what type of bond forms between two atoms: roughly ΔEN < 0.4 is nonpolar covalent, 0.4–1.7 is polar covalent, and ΔEN > 1.7 is ionic.',
    relatedConceptSlugs: ['electronegativity-and-bond-type', 'polarity-of-covalent-bonds'],
  },
};
