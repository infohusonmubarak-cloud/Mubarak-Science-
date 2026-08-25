import type { Formula } from '@/types/content';

export const chapter4CEnergyFormulas: Record<string, Formula> = {
  'energy-demand-growth-formula': {
    slug: 'energy-demand-growth-formula',
    name: 'Compound Growth of Energy Demand',
    expression: 'D = D₀(1+r)ᵗ',
    meaning: 'Energy demand tends to grow by a roughly constant percentage each year — the same compound-growth pattern as compound interest — letting future demand be projected from a current value and a growth rate.',
    variables: [
      { symbol: 'D', meaning: 'projected energy demand after time t, in the same units as D₀ (e.g. megawatts, MW)' },
      { symbol: 'D₀', meaning: 'current (initial) energy demand' },
      { symbol: 'r', meaning: 'annual growth rate, as a decimal (e.g. 5% = 0.05)' },
      { symbol: 't', meaning: 'number of years into the future' },
    ],
    whenToUse: 'Whenever projecting how much energy demand will grow over a number of years at a roughly constant annual growth rate.',
    relatedConceptSlugs: ['energy-demand-and-crisis'],
  },
  'calorific-value-formula': {
    slug: 'calorific-value-formula',
    name: 'Energy Released from Fuel (Calorific Value)',
    expression: 'E = mq',
    meaning: 'The total energy released by completely burning a fuel equals its mass times its calorific value — the amount of energy stored per kilogram of that particular fuel.',
    variables: [
      { symbol: 'E', meaning: 'total energy released, in joules (J) or megajoules (MJ)' },
      { symbol: 'm', meaning: 'mass of fuel burned, in kilograms (kg)' },
      { symbol: 'q', meaning: "the fuel's calorific value (specific energy content), in joules per kilogram (J/kg) or megajoules per kilogram (MJ/kg)" },
    ],
    whenToUse: 'Whenever the total energy released by burning a known mass of a non-renewable fuel needs to be found.',
    relatedConceptSlugs: ['non-renewable-energy-sources'],
  },
  'wind-power-formula': {
    slug: 'wind-power-formula',
    name: 'Power Available from Wind',
    expression: 'P = ½ρAv³',
    meaning: 'The power carried by moving air through a given area depends on the air density, the swept area of the turbine blades, and — most steeply — the cube of the wind speed.',
    variables: [
      { symbol: 'P', meaning: 'power available in the wind, in watts (W)' },
      { symbol: 'ρ', meaning: 'density of air, in kilograms per cubic metre (kg/m³) — about 1.2 kg/m³ at sea level' },
      { symbol: 'A', meaning: "cross-sectional area swept by the turbine's blades, in square metres (m²)" },
      { symbol: 'v', meaning: 'wind speed, in metres per second (m/s)' },
    ],
    whenToUse: 'Whenever estimating how much power a wind turbine of a given blade size could generate from a given wind speed.',
    relatedConceptSlugs: ['renewable-energy-sources'],
  },
  'co2-emissions-formula': {
    slug: 'co2-emissions-formula',
    name: 'Carbon Dioxide Emissions from Burning Fuel',
    expression: 'm_CO2 = m_fuel × EF',
    meaning: "The mass of carbon dioxide released by burning a fuel is proportional to the mass of fuel burned, scaled by that fuel's emission factor (how much CO2 each kilogram of fuel releases when burned).",
    variables: [
      { symbol: 'm_CO2', meaning: 'mass of carbon dioxide released, in kilograms (kg)' },
      { symbol: 'm_fuel', meaning: 'mass of fuel burned, in kilograms (kg)' },
      { symbol: 'EF', meaning: 'emission factor for that fuel, in kilograms of CO2 released per kilogram of fuel burned' },
    ],
    whenToUse: 'Whenever estimating the carbon dioxide emissions produced by burning a known mass of a particular fuel.',
    relatedConceptSlugs: ['environmental-impacts-of-energy-use'],
  },
};
