import type { Formula } from '@/types/content';

export const chapter10CurrentFormulas: Record<string, Formula> = {
  'current-formula': {
    slug: 'current-formula',
    name: 'Electric Current',
    expression: 'I = Q / t',
    meaning: 'Electric current is the rate at which electric charge flows past a point in a circuit.',
    variables: [
      { symbol: 'I', meaning: 'Current, in amperes (A)' },
      { symbol: 'Q', meaning: 'Charge that flows, in coulombs (C)' },
      { symbol: 't', meaning: 'Time taken, in seconds' },
    ],
    whenToUse: 'Use to find the current from the amount of charge flowing in a given time, or vice versa.',
    relatedConceptSlugs: ['current-and-effects-of-current'],
  },
  'ohms-law-formula': {
    slug: 'ohms-law-formula',
    name: "Ohm's Law",
    expression: 'V = IR',
    meaning: "For many conductors (at constant temperature), the potential difference across them is directly proportional to the current flowing through them, with resistance as the constant of proportionality.",
    variables: [
      { symbol: 'V', meaning: 'Potential difference (voltage) across the conductor, in volts' },
      { symbol: 'I', meaning: 'Current flowing through the conductor, in amperes' },
      { symbol: 'R', meaning: 'Resistance of the conductor, in ohms (Ω)' },
    ],
    whenToUse: 'Use to find any one of voltage, current, or resistance when the other two are known.',
    relatedConceptSlugs: ['ohms-law-and-resistance'],
  },
  'resistivity-formula': {
    slug: 'resistivity-formula',
    name: 'Resistance from Resistivity',
    expression: 'R = ρL / A',
    meaning: "A conductor's resistance depends on its material (resistivity), its length, and its cross-sectional area — longer and thinner conductors have higher resistance.",
    variables: [
      { symbol: 'R', meaning: 'Resistance, in ohms (Ω)' },
      { symbol: 'ρ', meaning: "Resistivity of the material (a property of the material itself), in Ω·m" },
      { symbol: 'L', meaning: 'Length of the conductor, in metres' },
      { symbol: 'A', meaning: 'Cross-sectional area of the conductor, in m²' },
    ],
    whenToUse: "Use to find a conductor's resistance from its material, length, and cross-sectional area, or to design a resistor with a specific target resistance.",
    relatedConceptSlugs: ['resistors-b-level'],
  },
  'series-resistance-formula': {
    slug: 'series-resistance-formula',
    name: 'Resistors in Series',
    expression: 'Rₛ = R₁ + R₂ + R₃ + ...',
    meaning: "When resistors are connected in series (end to end, one path for current), their resistances simply add together to give the total (equivalent) resistance.",
    variables: [
      { symbol: 'Rₛ', meaning: 'Total (equivalent) resistance of the series combination, in ohms' },
      { symbol: 'R₁, R₂, R₃...', meaning: 'Resistance of each individual resistor, in ohms' },
    ],
    whenToUse: 'Use to find the total resistance of resistors connected end-to-end along a single current path.',
    relatedConceptSlugs: ['resistors-in-series-b-level'],
  },
  'parallel-resistance-formula': {
    slug: 'parallel-resistance-formula',
    name: 'Resistors in Parallel',
    expression: '1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃ + ...',
    meaning: 'When resistors are connected in parallel (providing multiple separate paths for current), the reciprocal of the total resistance equals the sum of the reciprocals of each individual resistance.',
    variables: [
      { symbol: 'Rₚ', meaning: 'Total (equivalent) resistance of the parallel combination, in ohms' },
      { symbol: 'R₁, R₂, R₃...', meaning: 'Resistance of each individual resistor, in ohms' },
    ],
    whenToUse: 'Use to find the total resistance of resistors connected across the same two points, providing multiple parallel current paths.',
    relatedConceptSlugs: ['resistors-in-parallel-b-level'],
  },
};
