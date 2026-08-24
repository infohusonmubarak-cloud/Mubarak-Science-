import type { Formula } from '@/types/content';

export const chapter4EquilibriumFormulas: Record<string, Formula> = {
  'equilibrium-constant-formula': {
    slug: 'equilibrium-constant-formula',
    name: 'The Equilibrium Constant, Kc',
    expression: 'For aA + bB ⇌ cC + dD:  Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ',
    meaning: 'The ratio of product concentrations to reactant concentrations at equilibrium, each raised to the power of its coefficient in the balanced equation — a fixed value for a given reaction at a given temperature.',
    variables: [
      { symbol: 'Kc', meaning: 'the equilibrium constant (concentration-based), unitless in the way it is typically used here' },
      { symbol: '[A], [B], [C], [D]', meaning: 'equilibrium molar concentrations of each substance, in mol/L' },
      { symbol: 'a, b, c, d', meaning: 'the balanced stoichiometric coefficients of each substance in the equation' },
    ],
    whenToUse: 'Whenever you need to quantify how far a reversible reaction proceeds toward products at equilibrium, or calculate an unknown equilibrium concentration.',
    relatedConceptSlugs: ['the-equilibrium-constant-kc', 'interpreting-the-size-of-kc'],
  },
};
