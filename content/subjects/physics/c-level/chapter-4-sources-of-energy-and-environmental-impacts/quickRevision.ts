import type { QuickRevision } from '@/types/content';

export const chapter4CEnergyQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'energy-demand-and-crisis',
      keyPoint: 'D = D₀(1+r)ᵗ — energy demand compounds like interest.',
      formulaSlug: 'energy-demand-growth-formula',
      miniExample: 'D₀=500MW, r=5%, t=10 → D≈814.4MW.',
    },
    {
      conceptSlug: 'sources-of-energy-overview',
      keyPoint: 'Renewable/non-renewable and primary/secondary are two separate axes.',
      miniExample: 'Electricity from coal: secondary, sourced from a non-renewable.',
    },
    {
      conceptSlug: 'non-renewable-energy-sources',
      keyPoint: 'E = mq — total energy from mass × calorific value.',
      formulaSlug: 'calorific-value-formula',
      miniExample: '2kg coal, q=30MJ/kg → E=60MJ.',
    },
    {
      conceptSlug: 'renewable-energy-sources',
      keyPoint: 'P = ½ρAv³ — wind power grows with the CUBE of speed.',
      formulaSlug: 'wind-power-formula',
      miniExample: 'r=20m, v=10m/s → P≈754kW.',
    },
    {
      conceptSlug: 'environmental-impacts-of-energy-use',
      keyPoint: 'm_CO2 = m_fuel × EF.',
      formulaSlug: 'co2-emissions-formula',
      miniExample: '1000kg coal, EF=2.5 → 2500kg CO2.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'energy-demand-and-crisis',
      keyPoint: 'Growth by a constant PERCENTAGE, not a constant amount.',
      formulaSlug: 'energy-demand-growth-formula',
      miniExample: 'Used to plan new generating capacity years ahead.',
    },
    {
      conceptSlug: 'sources-of-energy-overview',
      keyPoint: '"Renewable" describes replenishment speed, not cleanliness.',
      miniExample: 'Burning wood is renewable but still has environmental impact.',
    },
    {
      conceptSlug: 'non-renewable-energy-sources',
      keyPoint: 'Different fuels have very different calorific values.',
      formulaSlug: 'calorific-value-formula',
      miniExample: 'Coal, oil, and natural gas each have their own q.',
    },
    {
      conceptSlug: 'renewable-energy-sources',
      keyPoint: 'Site selection matters enormously because of the cubic v term.',
      formulaSlug: 'wind-power-formula',
      miniExample: 'Doubling wind speed multiplies power by 8×.',
    },
    {
      conceptSlug: 'environmental-impacts-of-energy-use',
      keyPoint: 'Emission factor differs by fuel type.',
      formulaSlug: 'co2-emissions-formula',
      miniExample: 'National carbon footprints sum this across every fuel used.',
    },
  ],
};
