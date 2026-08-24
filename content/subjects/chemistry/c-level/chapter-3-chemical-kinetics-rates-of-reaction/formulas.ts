import type { Formula } from '@/types/content';

export const chapter3KineticsFormulas: Record<string, Formula> = {
  'average-reaction-rate-formula': {
    slug: 'average-reaction-rate-formula',
    name: 'Average Reaction Rate',
    expression: 'rate = Δ[concentration] / Δt',
    meaning: 'How quickly the concentration of a reactant or product changes over a time interval.',
    variables: [
      { symbol: 'rate', meaning: 'average reaction rate, typically in mol/(L·s)' },
      { symbol: 'Δ[concentration]', meaning: 'change in concentration (mol/L) of a chosen reactant or product over the interval' },
      { symbol: 'Δt', meaning: 'time interval over which the change is measured, in seconds (s)' },
    ],
    whenToUse: 'Whenever you have concentration measurements at two points in time and need the average rate of reaction between them.',
    relatedConceptSlugs: ['measuring-reaction-rate', 'average-and-instantaneous-rate'],
  },
  'arrhenius-equation': {
    slug: 'arrhenius-equation',
    name: 'The Arrhenius Equation',
    expression: 'k = A·e^(−Ea/RT)',
    meaning: 'How the rate constant of a reaction depends on temperature and activation energy — the mathematical basis for why raising temperature speeds up reactions so dramatically.',
    variables: [
      { symbol: 'k', meaning: 'the rate constant of the reaction' },
      { symbol: 'A', meaning: 'the pre-exponential (frequency) factor — related to how often molecules collide with the correct orientation' },
      { symbol: 'Ea', meaning: 'activation energy, in J/mol' },
      { symbol: 'R', meaning: 'the gas constant, 8.314 J/(mol·K)' },
      { symbol: 'T', meaning: 'absolute temperature, in kelvin (K)' },
    ],
    whenToUse: 'Whenever you need to explain or calculate how much a reaction rate changes with temperature, or compare the activation energies of different reactions.',
    relatedConceptSlugs: ['activation-energy', 'temperature-effects-on-rate'],
  },
};
