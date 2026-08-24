import type { Formula } from '@/types/content';

export const chapter2EnergyFormulas: Record<string, Formula> = {
  'enthalpy-change-formula': {
    slug: 'enthalpy-change-formula',
    name: 'Enthalpy Change of Reaction',
    expression: 'ΔH = H(products) − H(reactants)',
    meaning: 'The heat energy released or absorbed by a reaction at constant pressure.',
    variables: [
      { symbol: 'ΔH', meaning: 'enthalpy change of the reaction, in kilojoules per mole (kJ/mol)' },
      { symbol: 'H(products)', meaning: 'total enthalpy (heat content) of the products' },
      { symbol: 'H(reactants)', meaning: 'total enthalpy (heat content) of the reactants' },
    ],
    whenToUse: 'Whenever you need to classify a reaction as exothermic (ΔH negative) or endothermic (ΔH positive), or state how much heat energy a reaction releases or absorbs.',
    relatedConceptSlugs: ['exothermic-and-endothermic-reactions', 'enthalpy-diagrams', 'standard-enthalpy-of-reaction'],
  },
  'heat-energy-formula': {
    slug: 'heat-energy-formula',
    name: 'Heat Energy (Calorimetry)',
    expression: 'q = mcΔT',
    meaning: 'The heat energy absorbed or released by a substance, calculated from a measured temperature change — the standard way an enthalpy change is measured experimentally.',
    variables: [
      { symbol: 'q', meaning: 'heat energy transferred, in joules (J)' },
      { symbol: 'm', meaning: 'mass of the substance (usually the water in a calorimeter), in grams (g)' },
      { symbol: 'c', meaning: 'specific heat capacity of the substance, in J/(g·°C) — for water, c = 4.18 J/(g·°C)' },
      { symbol: 'ΔT', meaning: 'change in temperature, in °C' },
    ],
    whenToUse: 'Whenever a reaction\'s heat is measured by tracking the temperature change it causes in a known mass of (usually water-based) surroundings.',
    relatedConceptSlugs: ['internal-energy-and-enthalpy', 'standard-enthalpy-of-reaction'],
  },
  'hesss-law-formula': {
    slug: 'hesss-law-formula',
    name: "Hess's Law",
    expression: 'ΔH(overall) = ΔH₁ + ΔH₂ + ΔH₃ + …',
    meaning: 'The overall enthalpy change for a reaction equals the sum of the enthalpy changes for any set of steps that add up to the same overall reaction.',
    variables: [
      { symbol: 'ΔH(overall)', meaning: 'enthalpy change for the reaction as a whole, in kJ/mol' },
      { symbol: 'ΔH₁, ΔH₂, …', meaning: 'enthalpy changes of each individual step in an alternative pathway between the same starting reactants and final products' },
    ],
    whenToUse: 'Whenever a reaction\'s enthalpy change cannot be measured directly, but can be built from other reactions whose enthalpy changes are already known.',
    relatedConceptSlugs: ['hesss-law', 'calculating-enthalpy-changes-using-hesss-law'],
  },
};
