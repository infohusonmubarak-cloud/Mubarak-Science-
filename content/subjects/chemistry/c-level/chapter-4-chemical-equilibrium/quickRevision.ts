import type { QuickRevision } from '@/types/content';

export const chapter4EquilibriumQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'dynamic-equilibrium',
      keyPoint: 'At equilibrium, forward rate = reverse rate — both reactions keep happening.',
      miniExample: 'A saturated sugar solution: dissolving and crystallizing continue at equal rates.',
    },
    {
      conceptSlug: 'le-chateliers-principle',
      keyPoint: 'A disturbed equilibrium shifts to partially counteract the disturbance.',
      miniExample: 'Adding N₂ to N₂+3H₂⇌2NH₃ shifts the equilibrium forward.',
    },
    {
      conceptSlug: 'effect-of-pressure-and-temperature-on-equilibrium',
      keyPoint: 'Higher pressure favours the side with fewer gas moles.',
      miniExample: 'N₂+3H₂⇌2NH₃: higher pressure favours NH₃ (2 moles vs. 4).',
    },
    {
      conceptSlug: 'the-equilibrium-constant-kc',
      keyPoint: 'Kc = [products]^coef / [reactants]^coef, fixed at a given temperature.',
      formulaSlug: 'equilibrium-constant-formula',
      miniExample: '[HI]=1.60, [H₂]=[I₂]=0.20 → Kc = 64.',
    },
    {
      conceptSlug: 'interpreting-the-size-of-kc',
      keyPoint: 'Kc >> 1 favours products; Kc << 1 favours reactants.',
      miniExample: 'Kc = 10¹⁵ → reaction nearly complete.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'reversible-reactions',
      keyPoint: 'Reversible reactions run both forward and backward, shown with ⇌.',
      miniExample: 'CO₂ + H₂O ⇌ H₂CO₃ in sealed vs. opened soda.',
    },
    {
      conceptSlug: 'dynamic-equilibrium',
      keyPoint: 'Equilibrium ≠ equal concentrations — it means equal RATES.',
      miniExample: 'A saturated solution keeps dissolving and crystallizing at equal rates.',
    },
    {
      conceptSlug: 'le-chateliers-principle',
      keyPoint: "The system shifts to PARTIALLY offset a disturbance, reaching a new equilibrium.",
      miniExample: 'Haemoglobin binds O₂ in lungs, releases it in tissues.',
    },
    {
      conceptSlug: 'effect-of-concentration-on-equilibrium',
      keyPoint: 'Adding a substance shifts equilibrium away from it; removing shifts toward it.',
      miniExample: 'Removing NH₃ as it forms shifts N₂+3H₂⇌2NH₃ forward.',
    },
    {
      conceptSlug: 'effect-of-pressure-and-temperature-on-equilibrium',
      keyPoint: 'Higher temperature shifts equilibrium in the endothermic direction.',
      miniExample: 'Raising temperature on an exothermic forward reaction favours the reverse.',
    },
    {
      conceptSlug: 'the-equilibrium-constant-kc',
      keyPoint: 'Coefficients in the balanced equation become exponents in Kc.',
      formulaSlug: 'equilibrium-constant-formula',
      miniExample: '[HI]=0.80, [H₂]=[I₂]=0.10 → Kc = 64.',
    },
    {
      conceptSlug: 'interpreting-the-size-of-kc',
      keyPoint: 'Kc ≈ 1 means significant amounts of both reactants and products at equilibrium.',
      miniExample: 'Kc = 10⁻¹² → reaction barely proceeds at all.',
    },
  ],
};
