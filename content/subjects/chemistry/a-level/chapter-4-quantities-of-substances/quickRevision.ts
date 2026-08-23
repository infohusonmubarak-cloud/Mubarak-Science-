import type { QuickRevision } from '@/types/content';

export const chapter4ChemQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'relative-atomic-and-formula-mass',
      keyPoint: 'Mr = sum of every atom\'s Ar in the formula.',
      miniExample: 'Mr(H₂O) = (2×1) + 16 = 18.',
    },
    {
      conceptSlug: 'the-mole-and-avogadros-constant',
      keyPoint: '1 mole = 6.02 × 10²³ particles (Avogadro\'s constant).',
      miniExample: '2 mol water = 1.204 × 10²⁴ molecules.',
    },
    {
      conceptSlug: 'molar-mass-calculations',
      keyPoint: 'n = m/M',
      formulaSlug: 'moles-formula',
      miniExample: '36 g water ÷ 18 g/mol = 2 mol.',
    },
    {
      conceptSlug: 'concentration-calculations',
      keyPoint: 'c = n/V, with V in dm³.',
      formulaSlug: 'concentration-formula',
      miniExample: '0.5 mol in 2 dm³ = 0.25 mol/dm³.',
    },
    {
      conceptSlug: 'percentage-yield',
      keyPoint: '% yield = (actual/theoretical) × 100',
      formulaSlug: 'percentage-yield-formula',
      miniExample: '15 g actual, 20 g theoretical → 75%.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'relative-atomic-and-formula-mass',
      keyPoint: 'Ar = one element\'s relative mass; Mr = sum for the whole formula.',
      miniExample: 'Mr(CO₂) = 12 + (2×16) = 44.',
    },
    {
      conceptSlug: 'the-mole-and-avogadros-constant',
      keyPoint: 'The mole is a counting unit: 1 mol = 6.02 × 10²³ particles.',
      miniExample: 'Same particle count, different mass, for any 1 mol sample.',
    },
    {
      conceptSlug: 'molar-mass-calculations',
      keyPoint: 'n = m/M — rearrange to m = n × M for mass.',
      formulaSlug: 'moles-formula',
      miniExample: '88 g CO₂ ÷ 44 g/mol = 2 mol.',
    },
    {
      conceptSlug: 'empirical-and-molecular-formula',
      keyPoint: 'Empirical formula = simplest whole-number atom ratio.',
      miniExample: 'C₆H₁₂O₆ → CH₂O (divide by 6).',
    },
    {
      conceptSlug: 'balancing-chemical-equations',
      keyPoint: 'Balance with coefficients, never subscripts — atoms are conserved.',
      miniExample: '2H₂ + O₂ → 2H₂O.',
    },
    {
      conceptSlug: 'stoichiometry-and-mole-ratios',
      keyPoint: 'Balanced-equation coefficients are mole ratios.',
      miniExample: '2H₂ + O₂ → 2H₂O: 5 mol H₂ → 5 mol H₂O.',
    },
    {
      conceptSlug: 'limiting-reactants',
      keyPoint: 'The limiting reactant runs out first and caps the product.',
      miniExample: '4 mol H₂ needs 2 mol O₂; only 1 mol O₂ available → O₂ limits.',
    },
    {
      conceptSlug: 'concentration-calculations',
      keyPoint: 'c = n/V (mol/dm³) — watch cm³ vs. dm³.',
      formulaSlug: 'concentration-formula',
      miniExample: '1 mol in 4 dm³ = 0.25 mol/dm³.',
    },
    {
      conceptSlug: 'percentage-yield',
      keyPoint: 'Actual product vs. theoretical maximum, as a percentage.',
      formulaSlug: 'percentage-yield-formula',
      miniExample: '40 g actual / 50 g theoretical = 80%.',
    },
    {
      conceptSlug: 'atom-economy',
      keyPoint: 'Desired product mass vs. total reactant mass — different from % yield.',
      formulaSlug: 'atom-economy-formula',
      miniExample: '36 desired mass / 90 total mass = 40%.',
    },
  ],
};
