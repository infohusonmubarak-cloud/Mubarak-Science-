import type { QuickRevision } from '@/types/content';

export const chapter10CElectricalQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'electromotive-force-and-circuits',
      keyPoint: 'V = ε − Ir.',
      formulaSlug: 'terminal-voltage-formula',
      miniExample: 'ε=12V,I=2A,r=0.5Ω → V=11V.',
    },
    {
      conceptSlug: 'batteries-in-series-and-parallel',
      keyPoint: 'Series: EMFs add. Parallel (identical): EMF unchanged, r_total=r/n.',
      formulaSlug: 'battery-combination-formula',
      miniExample: 'Three 1.5V cells in series → 4.5V.',
    },
    {
      conceptSlug: 'electrical-energy-and-power',
      keyPoint: 'P = VI = I²R = V²/R. E = Pt.',
      formulaSlug: 'electrical-power-formula',
      miniExample: 'V=12V,I=3A,t=10s → P=36W, E=360J.',
    },
    {
      conceptSlug: 'joules-law-of-heating',
      keyPoint: 'H = I²Rt — heat grows with the square of current.',
      formulaSlug: 'joules-law-formula',
      miniExample: 'I=2A,R=10Ω,t=60s → H=2400J.',
    },
    {
      conceptSlug: 'applications-of-heating-effect',
      keyPoint: 'R = V²/P — designs a heating element for a target power.',
      formulaSlug: 'heating-element-resistance-formula',
      miniExample: 'P=1000W,V=220V → R=48.4Ω.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'electromotive-force-and-circuits',
      keyPoint: 'Terminal voltage drops further under heavier current draw.',
      formulaSlug: 'terminal-voltage-formula',
      miniExample: "A car battery's voltage dips while cranking the starter.",
    },
    {
      conceptSlug: 'batteries-in-series-and-parallel',
      keyPoint: 'Series for more voltage; parallel for more current capacity.',
      formulaSlug: 'battery-combination-formula',
      miniExample: 'Flashlights stack cells in series for enough voltage.',
    },
    {
      conceptSlug: 'electrical-energy-and-power',
      keyPoint: 'Power is a rate; energy is a total amount.',
      formulaSlug: 'electrical-power-formula',
      miniExample: 'Electricity bills charge for kWh = kW × hours.',
    },
    {
      conceptSlug: 'joules-law-of-heating',
      keyPoint: 'Doubling current quadruples heat generated.',
      formulaSlug: 'joules-law-formula',
      miniExample: 'Why wiring is rated for maximum current, not voltage.',
    },
    {
      conceptSlug: 'applications-of-heating-effect',
      keyPoint: 'At fixed voltage, lower resistance means MORE power.',
      formulaSlug: 'heating-element-resistance-formula',
      miniExample: 'A kettle is designed with low resistance to heat fast.',
    },
  ],
};
