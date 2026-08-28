import type { Formula } from '@/types/content';

export const chapter6AHeatFormulas: Record<string, Formula> = {
  'specific-heat-capacity-formula-a-level': {
    slug: 'specific-heat-capacity-formula-a-level',
    name: 'Heat Energy and Specific Heat Capacity',
    expression: 'Q = mcΔT',
    meaning: "The heat energy needed to change a substance's temperature depends on its mass, its specific heat capacity (how much energy it takes to heat that particular material), and the size of the temperature change.",
    variables: [
      { symbol: 'Q', meaning: 'heat energy supplied or removed, in joules (J)' },
      { symbol: 'm', meaning: 'mass of the substance, in kilograms (kg)' },
      { symbol: 'c', meaning: 'specific heat capacity of the substance, in joules per kilogram per kelvin (J/(kg·K))' },
      { symbol: 'ΔT', meaning: 'the change in temperature, in kelvin (K) or degrees Celsius (°C) — the SIZE of the change is the same in both scales' },
    ],
    whenToUse: 'Whenever the heat energy needed to change the temperature of a known mass of substance by a known amount needs to be found.',
    relatedConceptSlugs: ['specific-heat-capacity-a-level'],
  },
  'temperature-conversion-formula': {
    slug: 'temperature-conversion-formula',
    name: 'Temperature Scale Conversion',
    expression: 'T(K) = T(°C) + 273;   T(°F) = (9/5)T(°C) + 32',
    meaning: 'The Kelvin, Celsius, and Fahrenheit scales all measure the same physical temperature, just with different zero points and different-sized degrees — these formulas convert a reading on one scale to another.',
    variables: [
      { symbol: 'T(K)', meaning: 'temperature in kelvin (K) — the SI unit, starting at absolute zero' },
      { symbol: 'T(°C)', meaning: 'temperature in degrees Celsius (°C)' },
      { symbol: 'T(°F)', meaning: 'temperature in degrees Fahrenheit (°F)' },
    ],
    whenToUse: 'Whenever a temperature needs to be converted between the Celsius, Kelvin, or Fahrenheit scales.',
    relatedConceptSlugs: ['temperature-scales-a-level'],
  },
  'thermal-expansion-formula': {
    slug: 'thermal-expansion-formula',
    name: 'Linear Thermal Expansion',
    expression: 'ΔL = L₀αΔT',
    meaning: 'When a solid is heated, it expands — the amount it expands is proportional to its original length, how much its temperature changes, and a material-specific property called the coefficient of linear expansion.',
    variables: [
      { symbol: 'ΔL', meaning: 'the change in length, in metres (m)' },
      { symbol: 'L₀', meaning: 'the original length, in metres (m)' },
      { symbol: 'α', meaning: 'the coefficient of linear expansion of the material, in per kelvin (K⁻¹)' },
      { symbol: 'ΔT', meaning: 'the change in temperature, in kelvin (K) or degrees Celsius (°C)' },
    ],
    whenToUse: 'Whenever the change in length of a solid due to a temperature change needs to be found.',
    relatedConceptSlugs: ['thermal-expansion-a-level'],
  },
};
