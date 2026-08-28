import type { Formula } from '@/types/content';

export const chapter9AElectricityFormulas: Record<string, Formula> = {
  'coulombs-law-formula-a-level': {
    slug: 'coulombs-law-formula-a-level',
    name: "Coulomb's Law",
    expression: 'F = k q₁q₂ / r²',
    meaning: 'The electric force between two charges grows with the size of both charges, and shrinks rapidly (as the inverse square) with the distance between them — mirroring the same inverse-square pattern seen in gravity, but very much stronger.',
    variables: [
      { symbol: 'F', meaning: 'the electric force between the two charges, in newtons (N) — attractive for opposite charges, repulsive for like charges' },
      { symbol: 'k', meaning: "Coulomb's constant, about 9 × 10⁹ N·m²/C²" },
      { symbol: 'q₁, q₂', meaning: 'the two charges, in coulombs (C)' },
      { symbol: 'r', meaning: 'the distance between the two charges, in metres (m)' },
    ],
    whenToUse: 'Whenever the electric force between two known point charges at a known separation needs to be found.',
    relatedConceptSlugs: ['coulombs-law-a-level'],
  },
  'charge-quantization-formula-a-level': {
    slug: 'charge-quantization-formula-a-level',
    name: 'Charge Quantization',
    expression: 'Q = ne',
    meaning: 'Electric charge always comes in whole-number multiples of a single, smallest possible unit — the charge on one electron (or proton). Charge cannot be divided into an arbitrarily small fraction.',
    variables: [
      { symbol: 'Q', meaning: 'total charge, in coulombs (C)' },
      { symbol: 'n', meaning: 'the number of electrons (or protons) — a whole number' },
      { symbol: 'e', meaning: 'the elementary charge, 1.6 × 10⁻¹⁹ C — the smallest unit of charge' },
    ],
    whenToUse: 'Whenever the total charge on an object needs to be found from a number of excess (or missing) electrons, or vice versa.',
    relatedConceptSlugs: ['matter-and-electricity-a-level'],
  },
};
