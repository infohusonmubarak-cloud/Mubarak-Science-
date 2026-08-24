import type { Formula } from '@/types/content';

export const chapter9ElectricFieldFormulas: Record<string, Formula> = {
  'coulombs-law-formula': {
    slug: 'coulombs-law-formula',
    name: "Coulomb's Law",
    expression: 'F = kq₁q₂ / r²',
    meaning: 'The electric force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them.',
    variables: [
      { symbol: 'F', meaning: 'Electric force between the charges, in newtons (attractive if opposite signs, repulsive if same sign)' },
      { symbol: 'k', meaning: "Coulomb's constant, ≈ 8.99 × 10⁹ N·m²/C²" },
      { symbol: 'q₁, q₂', meaning: 'Magnitudes of the two point charges, in coulombs (C)' },
      { symbol: 'r', meaning: 'Distance between the charges, in metres' },
    ],
    whenToUse: 'Use to find the electric force between two point charges at a known separation.',
    relatedConceptSlugs: ['coulombs-law'],
  },
  'electric-field-intensity-formula': {
    slug: 'electric-field-intensity-formula',
    name: 'Electric Field Intensity',
    expression: 'E = F / q',
    meaning: 'Electric field intensity measures the force per unit charge that would be experienced by a small positive test charge placed at a point.',
    variables: [
      { symbol: 'E', meaning: 'Electric field intensity, in N/C (or equivalently V/m)' },
      { symbol: 'F', meaning: 'Force experienced by the test charge, in newtons' },
      { symbol: 'q', meaning: 'Magnitude of the test charge, in coulombs' },
    ],
    whenToUse: 'Use to find the electric field strength at a point from the force it would exert on a known test charge, or to find the force on a charge placed in a known field.',
    relatedConceptSlugs: ['electric-field-and-field-intensity'],
  },
  'electric-potential-formula': {
    slug: 'electric-potential-formula',
    name: 'Electric Potential (Point Charge)',
    expression: 'V = kQ / r',
    meaning: 'Electric potential at a point measures the electric potential energy per unit charge that a small positive test charge would have at that point, due to a source charge Q.',
    variables: [
      { symbol: 'V', meaning: 'Electric potential, in volts (V)' },
      { symbol: 'k', meaning: "Coulomb's constant, ≈ 8.99 × 10⁹ N·m²/C²" },
      { symbol: 'Q', meaning: 'Magnitude of the source charge, in coulombs' },
      { symbol: 'r', meaning: 'Distance from the source charge, in metres' },
    ],
    whenToUse: 'Use to find the electric potential at a point a known distance from a point charge.',
    relatedConceptSlugs: ['electric-potential-and-potential-difference'],
  },
  'parallel-plate-pd-formula': {
    slug: 'parallel-plate-pd-formula',
    name: 'Potential Difference Between Parallel Plates',
    expression: 'V = Ed',
    meaning: 'For a uniform electric field between two parallel charged plates, the potential difference between them equals the field strength multiplied by the separation between the plates.',
    variables: [
      { symbol: 'V', meaning: 'Potential difference between the plates, in volts' },
      { symbol: 'E', meaning: 'Electric field strength between the plates, in V/m (uniform)' },
      { symbol: 'd', meaning: 'Distance (separation) between the plates, in metres' },
    ],
    whenToUse: 'Use to find the potential difference across parallel plates given the field strength and separation, or to find the field strength given a known applied voltage.',
    relatedConceptSlugs: ['potential-difference-between-parallel-plates'],
  },
};
