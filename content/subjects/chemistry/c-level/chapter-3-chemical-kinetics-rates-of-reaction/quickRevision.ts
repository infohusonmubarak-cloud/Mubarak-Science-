import type { QuickRevision } from '@/types/content';

export const chapter3KineticsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'measuring-reaction-rate',
      keyPoint: 'rate = Δ[concentration] / Δt.',
      formulaSlug: 'average-reaction-rate-formula',
      miniExample: '0.80→0.50 mol/L over 60 s → rate = 0.005 mol/(L·s).',
    },
    {
      conceptSlug: 'collision-theory',
      keyPoint: 'Reactions need collisions with enough energy AND correct orientation.',
      miniExample: 'Most collisions between gas molecules fail to react.',
    },
    {
      conceptSlug: 'activation-energy',
      keyPoint: 'Ea is the minimum energy needed for a collision to succeed — even exothermic reactions have one.',
      formulaSlug: 'arrhenius-equation',
      miniExample: 'A catalyst lowers Ea from 75 to 50 kJ/mol, speeding up the reaction.',
    },
    {
      conceptSlug: 'temperature-effects-on-rate',
      keyPoint: 'Rate roughly doubles for every 10°C rise (rule of thumb).',
      formulaSlug: 'arrhenius-equation',
      miniExample: '0.010 mol/(L·s) at 20°C → ≈0.040 mol/(L·s) at 40°C.',
    },
    {
      conceptSlug: 'surface-area-and-catalysts',
      keyPoint: 'More surface area or a catalyst → faster rate, without changing the products.',
      miniExample: "A car's catalytic converter speeds up exhaust reactions using platinum/palladium.",
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'measuring-reaction-rate',
      keyPoint: 'Rate can be measured from any reactant or product, always reported as positive.',
      formulaSlug: 'average-reaction-rate-formula',
      miniExample: '0→0.40 mol/L over 20 s → rate = 0.02 mol/(L·s).',
    },
    {
      conceptSlug: 'average-and-instantaneous-rate',
      keyPoint: 'Average rate = secant line slope; instantaneous rate = tangent line slope.',
      miniExample: 'Reaction rate is fastest at the start, slows as reactants are used up.',
    },
    {
      conceptSlug: 'collision-theory',
      keyPoint: 'Every rate-affecting factor works by changing collision frequency or collision success rate.',
      miniExample: 'Pure O₂ reacts faster than air because collisions are more frequent.',
    },
    {
      conceptSlug: 'activation-energy',
      keyPoint: 'Ea and ΔH are independent — a reaction can be exothermic but still need a spark to start.',
      formulaSlug: 'arrhenius-equation',
      miniExample: 'Wood combustion is exothermic overall but needs an initial flame.',
    },
    {
      conceptSlug: 'the-maxwell-boltzmann-distribution',
      keyPoint: 'Only particles beyond Ea (the tail of the distribution) can react.',
      miniExample: 'A small temperature rise disproportionately grows the fraction beyond Ea.',
    },
    {
      conceptSlug: 'concentration-and-pressure-effects-on-rate',
      keyPoint: 'Higher concentration/pressure → more frequent collisions → faster rate.',
      miniExample: 'Compressed gas reacts faster than the same gas at low pressure.',
    },
    {
      conceptSlug: 'temperature-effects-on-rate',
      keyPoint: 'Temperature increases BOTH collision frequency and the fraction of successful collisions.',
      formulaSlug: 'arrhenius-equation',
      miniExample: '0.005 mol/(L·s) at 10°C → ≈0.02 mol/(L·s) at 30°C.',
    },
    {
      conceptSlug: 'surface-area-and-catalysts',
      keyPoint: 'A catalyst provides a lower-Ea pathway and is regenerated, never consumed.',
      miniExample: 'Powdered magnesium reacts far faster with acid than a magnesium strip.',
    },
  ],
};
