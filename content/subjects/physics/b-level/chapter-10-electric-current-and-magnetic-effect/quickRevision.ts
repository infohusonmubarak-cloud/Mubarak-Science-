import type { QuickRevision } from '@/types/content';

export const chapter10CurrentQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'ohms-law-and-resistance',
      keyPoint: 'V = IR for ohmic conductors at constant temperature.',
      formulaSlug: 'ohms-law-formula',
      miniExample: '12 V across 4 Ω gives 3 A.',
    },
    {
      conceptSlug: 'resistors-in-series-b-level',
      keyPoint: 'Rₛ = R₁ + R₂ + ...; series total is always greater than any individual resistor.',
      formulaSlug: 'series-resistance-formula',
      miniExample: '4 Ω + 6 Ω + 10 Ω = 20 Ω.',
    },
    {
      conceptSlug: 'resistors-in-parallel-b-level',
      keyPoint: '1/Rₚ = 1/R₁ + 1/R₂ + ...; parallel total is always less than the smallest resistor.',
      formulaSlug: 'parallel-resistance-formula',
      miniExample: '6 Ω and 3 Ω in parallel give 2 Ω.',
    },
    {
      conceptSlug: 'ammeter-and-voltmeter',
      keyPoint: 'Ammeter: series, low resistance. Voltmeter: parallel, high resistance.',
      miniExample: 'An ammeter wired in parallel would create a dangerous short circuit.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'current-and-effects-of-current',
      keyPoint: 'I = Q/t; current has heating, magnetic, and chemical effects.',
      formulaSlug: 'current-formula',
      miniExample: '2.5 A for 40 s transfers 100 C of charge.',
    },
    {
      conceptSlug: 'resistors-b-level',
      keyPoint: 'R = ρL/A; resistance depends on material, length, and cross-sectional area.',
      formulaSlug: 'resistivity-formula',
      miniExample: 'Thicker cables have lower resistance, reducing heating losses.',
    },
    {
      conceptSlug: 'magnetic-field-due-to-current',
      keyPoint: 'Any current produces a magnetic field; straight wire gives concentric circles.',
      miniExample: "Oersted's compass deflected near a current-carrying wire.",
    },
    {
      conceptSlug: 'electromagnets',
      keyPoint: 'A coil (+ soft iron core) creates a controllable magnetic field from current.',
      miniExample: 'Scrapyard cranes switch electromagnets on/off to grip and release metal.',
    },
  ],
};
