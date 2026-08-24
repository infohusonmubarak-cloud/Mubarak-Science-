import type { Formula } from '@/types/content';

export const chapter5HeatFormulas: Record<string, Formula> = {
  'heat-unit-conversion-formula': {
    slug: 'heat-unit-conversion-formula',
    name: 'Heat Unit Conversion (Calorie to Joule)',
    expression: '1 cal = 4.186 J',
    meaning: 'The calorie (an older heat unit, defined as the heat needed to raise 1 g of water by 1°C) converts to the SI unit of energy, the joule, using this fixed conversion factor.',
    variables: [
      { symbol: 'cal', meaning: 'Calories — a traditional unit of heat energy' },
      { symbol: 'J', meaning: 'Joules — the SI unit of energy' },
    ],
    whenToUse: 'Use to convert between calories and joules when heat energy is given in either unit.',
    relatedConceptSlugs: ['units-of-heat'],
  },
  'thermal-capacity-formula': {
    slug: 'thermal-capacity-formula',
    name: 'Thermal Capacity',
    expression: 'C = Q / ΔT',
    meaning: 'Thermal capacity is the amount of heat energy needed to raise the temperature of an entire object (of any mass) by one degree.',
    variables: [
      { symbol: 'C', meaning: 'Thermal capacity, in J/°C (or J/K)' },
      { symbol: 'Q', meaning: 'Heat energy supplied, in joules' },
      { symbol: 'ΔT', meaning: 'Temperature change produced, in °C (or K)' },
    ],
    whenToUse: "Use to describe how much heat a specific object (not a material in general) needs to change temperature — thermal capacity depends on the object's total mass and material.",
    relatedConceptSlugs: ['thermal-capacity'],
  },
  'specific-heat-capacity-formula': {
    slug: 'specific-heat-capacity-formula',
    name: 'Specific Heat Capacity',
    expression: 'Q = mcΔT',
    meaning: "Specific heat capacity describes how much heat energy is needed to raise the temperature of one kilogram of a specific MATERIAL by one degree — a property of the material itself, independent of how much of it you have.",
    variables: [
      { symbol: 'Q', meaning: 'Heat energy supplied (or released), in joules' },
      { symbol: 'm', meaning: 'Mass of the substance, in kg' },
      { symbol: 'c', meaning: 'Specific heat capacity of the material, in J/(kg·°C)' },
      { symbol: 'ΔT', meaning: 'Temperature change, in °C (or K)' },
    ],
    whenToUse: 'Use to calculate the heat energy needed to change the temperature of a known mass of a specific material by a known amount.',
    relatedConceptSlugs: ['specific-heat-capacity'],
  },
  'heat-exchange-formula': {
    slug: 'heat-exchange-formula',
    name: 'Law of Heat Exchange (Calorimetry)',
    expression: 'Heat lost by hot object = Heat gained by cold object',
    meaning: 'When a hot object and a cold object are in thermal contact (with no heat lost to the surroundings), heat flows from the hot object to the cold one until they reach a common final temperature — the heat lost by one exactly equals the heat gained by the other.',
    variables: [
      { symbol: 'm₁c₁(T₁ − Tf)', meaning: 'Heat lost by the hotter object (mass m₁, specific heat c₁, initial temperature T₁), cooling to the final temperature Tf' },
      { symbol: 'm₂c₂(Tf − T₂)', meaning: 'Heat gained by the cooler object (mass m₂, specific heat c₂, initial temperature T₂), warming to the final temperature Tf' },
    ],
    whenToUse: 'Use to find an unknown final temperature, mass, or specific heat capacity when two substances at different temperatures reach thermal equilibrium together.',
    relatedConceptSlugs: ['law-of-heat-exchange'],
  },
  'latent-heat-of-vaporization-formula': {
    slug: 'latent-heat-of-vaporization-formula',
    name: 'Latent Heat of Vaporization',
    expression: 'Q = mLᵥ',
    meaning: 'The heat energy needed to convert a mass of liquid into vapour (or vice versa) at a constant temperature (the boiling point), with no temperature change during the process itself.',
    variables: [
      { symbol: 'Q', meaning: 'Heat energy required, in joules' },
      { symbol: 'm', meaning: 'Mass of the substance changing state, in kg' },
      { symbol: 'Lᵥ', meaning: 'Specific latent heat of vaporization of the substance, in J/kg' },
    ],
    whenToUse: 'Use to find the heat energy needed to boil (or condense) a known mass of a substance at its boiling point.',
    relatedConceptSlugs: ['vaporization-and-specific-latent-heat'],
  },
  'latent-heat-of-fusion-formula': {
    slug: 'latent-heat-of-fusion-formula',
    name: 'Latent Heat of Fusion',
    expression: 'Q = mLf',
    meaning: 'The heat energy needed to convert a mass of solid into liquid (or vice versa) at a constant temperature (the melting point), with no temperature change during the process itself.',
    variables: [
      { symbol: 'Q', meaning: 'Heat energy required, in joules' },
      { symbol: 'm', meaning: 'Mass of the substance changing state, in kg' },
      { symbol: 'Lf', meaning: 'Specific latent heat of fusion of the substance, in J/kg' },
    ],
    whenToUse: 'Use to find the heat energy needed to melt (or freeze) a known mass of a substance at its melting point.',
    relatedConceptSlugs: ['fusion-and-specific-latent-heat'],
  },
};
