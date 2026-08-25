import type { QuickRevision } from '@/types/content';

export const chapter9CCapacitorQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'capacitors',
      keyPoint: 'Stores equal and opposite charge on two plates, separated by an insulator.',
      miniExample: 'A camera flash charges slowly, discharges almost instantly.',
    },
    {
      conceptSlug: 'capacitance-of-a-capacitor',
      keyPoint: 'C = Q/V, in farads.',
      formulaSlug: 'capacitance-definition-formula',
      miniExample: 'Q=0.002C, V=100V → C=20μF.',
    },
    {
      conceptSlug: 'parallel-plate-capacitor',
      keyPoint: 'C = ε₀εᵣA/d.',
      formulaSlug: 'parallel-plate-capacitance-formula',
      miniExample: 'A=0.02m²,d=0.001m → C≈177pF.',
    },
    {
      conceptSlug: 'energy-stored-in-a-capacitor',
      keyPoint: 'E = ½CV² — grows with the SQUARE of voltage.',
      formulaSlug: 'capacitor-energy-formula',
      miniExample: 'C=100μF, V=12V → E=7.2mJ.',
    },
    {
      conceptSlug: 'capacitors-in-series-and-parallel',
      keyPoint: 'Series: 1/C sums. Parallel: C sums directly (opposite of resistors).',
      formulaSlug: 'capacitor-combination-formula',
      miniExample: '4μF and 6μF in series → 2.4μF.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'capacitors',
      keyPoint: 'The insulating gap blocks any actual charge from crossing.',
      miniExample: 'Used throughout electronics for storage, smoothing, timing.',
    },
    {
      conceptSlug: 'capacitance-of-a-capacitor',
      keyPoint: "Capacitance is a fixed property of the capacitor's own construction.",
      formulaSlug: 'capacitance-definition-formula',
      miniExample: 'Real capacitors: μF or pF, rarely whole farads.',
    },
    {
      conceptSlug: 'parallel-plate-capacitor',
      keyPoint: 'A dielectric material increases capacitance over vacuum/air.',
      formulaSlug: 'parallel-plate-capacitance-formula',
      miniExample: 'A capacitive touchscreen senses a change in local capacitance.',
    },
    {
      conceptSlug: 'energy-stored-in-a-capacitor',
      keyPoint: 'Doubling voltage quadruples stored energy.',
      formulaSlug: 'capacitor-energy-formula',
      miniExample: 'A defibrillator releases stored energy in a controlled pulse.',
    },
    {
      conceptSlug: 'capacitors-in-series-and-parallel',
      keyPoint: 'Series capacitors share the same charge; parallel share the same voltage.',
      formulaSlug: 'capacitor-combination-formula',
      miniExample: 'Series combination raises the total voltage rating.',
    },
  ],
};
