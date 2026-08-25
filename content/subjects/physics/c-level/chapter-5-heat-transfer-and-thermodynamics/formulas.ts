import type { Formula } from '@/types/content';

export const chapter5CHeatFormulas: Record<string, Formula> = {
  'fouriers-law-formula': {
    slug: 'fouriers-law-formula',
    name: "Fourier's Law of Heat Conduction",
    expression: 'Q/t = kA(ΔT)/d',
    meaning: 'The rate at which heat conducts through a material depends on how thermally conductive the material is, the cross-sectional area it flows through, and the temperature difference — but slows down the thicker the material is.',
    variables: [
      { symbol: 'Q/t', meaning: 'rate of heat transfer, in watts (W)' },
      { symbol: 'k', meaning: 'thermal conductivity of the material, in watts per metre-kelvin (W/(m·K))' },
      { symbol: 'A', meaning: 'cross-sectional area heat flows through, in square metres (m²)' },
      { symbol: 'ΔT', meaning: 'temperature difference across the material, in kelvin (K)' },
      { symbol: 'd', meaning: 'thickness of the material, in metres (m)' },
    ],
    whenToUse: 'Whenever the rate of heat conduction through a solid material (like a wall, a metal rod, or a window) needs to be found.',
    relatedConceptSlugs: ['mechanisms-of-heat-transfer'],
  },
  'stefan-boltzmann-formula': {
    slug: 'stefan-boltzmann-formula',
    name: 'The Stefan-Boltzmann Law',
    expression: 'P = εσAT⁴',
    meaning: 'Every object radiates thermal energy at a rate that depends steeply on its absolute temperature (to the fourth power), scaled by its surface area and how effectively it radiates (its emissivity).',
    variables: [
      { symbol: 'P', meaning: 'power radiated, in watts (W)' },
      { symbol: 'ε', meaning: "emissivity of the surface (0 to 1, dimensionless) — 1 for a perfect radiator ('black body')" },
      { symbol: 'σ', meaning: 'the Stefan-Boltzmann constant, 5.67×10⁻⁸ W/(m²·K⁴)' },
      { symbol: 'A', meaning: 'surface area of the radiating object, in square metres (m²)' },
      { symbol: 'T', meaning: 'absolute temperature of the object, in kelvin (K)' },
    ],
    whenToUse: 'Whenever the power an object radiates as heat (via electromagnetic radiation) needs to be found from its temperature and surface area.',
    relatedConceptSlugs: ['radiation-and-stefan-boltzmann-law'],
  },
  'work-done-by-gas-formula': {
    slug: 'work-done-by-gas-formula',
    name: 'Work Done by a Gas at Constant Pressure',
    expression: 'W = PΔV',
    meaning: 'When a gas expands or is compressed at constant pressure, the work it does (or has done on it) equals the pressure times the change in its volume — exactly the area under a horizontal line on a pressure-volume graph.',
    variables: [
      { symbol: 'W', meaning: 'work done by the gas, in joules (J)' },
      { symbol: 'P', meaning: 'the (constant) pressure of the gas, in pascals (Pa)' },
      { symbol: 'ΔV', meaning: 'change in volume (final minus initial), in cubic metres (m³)' },
    ],
    whenToUse: 'Whenever the work done by (or on) a gas expanding or compressing at constant pressure needs to be found.',
    relatedConceptSlugs: ['internal-energy-and-work'],
  },
  'first-law-thermodynamics-formula': {
    slug: 'first-law-thermodynamics-formula',
    name: 'The First Law of Thermodynamics',
    expression: 'ΔU = Q − W',
    meaning: "A statement of energy conservation for a thermodynamic system: the change in a gas's internal energy equals the heat added to it, minus the work it does on its surroundings.",
    variables: [
      { symbol: 'ΔU', meaning: 'change in internal energy, in joules (J)' },
      { symbol: 'Q', meaning: 'heat added to the system, in joules (J) — negative if heat leaves the system' },
      { symbol: 'W', meaning: 'work done BY the system on its surroundings, in joules (J) — negative if work is done ON the system' },
    ],
    whenToUse: 'Whenever relating heat added to a system, work it does, and the resulting change in its internal energy.',
    relatedConceptSlugs: ['first-law-of-thermodynamics'],
  },
  'heat-engine-efficiency-formula': {
    slug: 'heat-engine-efficiency-formula',
    name: 'Heat Engine Efficiency',
    expression: 'η = W/Qₕ = 1 − Qc/Qₕ',
    meaning: 'A heat engine\'s efficiency is the fraction of the heat energy it takes in from a hot reservoir that it actually converts into useful work, rather than expelling as waste heat to a cold reservoir.',
    variables: [
      { symbol: 'η', meaning: 'efficiency (a fraction from 0 to 1, or a percentage)' },
      { symbol: 'W', meaning: 'useful work output, in joules (J)' },
      { symbol: 'Qₕ', meaning: 'heat absorbed from the hot reservoir, in joules (J)' },
      { symbol: 'Qc', meaning: 'heat expelled to the cold reservoir, in joules (J)' },
    ],
    whenToUse: 'Whenever the efficiency of a heat engine needs to be found from the heat it takes in and the heat it expels (or the work it produces).',
    relatedConceptSlugs: ['heat-engines-and-efficiency'],
  },
};
