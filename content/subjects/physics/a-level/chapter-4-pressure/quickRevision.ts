import type { QuickRevision } from '@/types/content';

export const chapter4APressureQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'pressure-force-and-area-a-level',
      keyPoint: 'P = F/A. A smaller area concentrates the same force into a bigger pressure.',
      formulaSlug: 'pressure-force-area-formula',
      miniExample: '200N over 0.002m² → 100,000 Pa.',
    },
    {
      conceptSlug: 'pressure-in-fluids-a-level',
      keyPoint: 'P = hρg. Pressure increases with depth in a liquid.',
      formulaSlug: 'pressure-due-to-liquid-column-formula',
      miniExample: '3m of water → 29,400 Pa.',
    },
    {
      conceptSlug: 'density-a-level',
      keyPoint: 'ρ = m/V',
      formulaSlug: 'density-formula-a-level',
      miniExample: '540g in 60cm³ → 9 g/cm³.',
    },
    {
      conceptSlug: 'relative-density-a-level',
      keyPoint: 'RD = ρ(substance)/ρ(water). No units.',
      formulaSlug: 'relative-density-formula',
      miniExample: '800 kg/m³ → RD = 0.8, floats.',
    },
    {
      conceptSlug: 'hydrometer-a-level',
      keyPoint: 'Floats higher in a denser liquid — reads relative density directly.',
      miniExample: 'RD 1.03 in seawater vs. 1.00 in fresh water.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'pressure-force-and-area-a-level',
      keyPoint: 'Pressure (Pa) ≠ force (N) — a tiny force on a tiny area gives huge pressure.',
      formulaSlug: 'pressure-force-area-formula',
      miniExample: 'A drawing pin: 5N on 1mm² → 5,000,000 Pa.',
    },
    {
      conceptSlug: 'pressure-in-fluids-a-level',
      keyPoint: 'Fluid pressure depends only on depth, density, and g — not container shape.',
      formulaSlug: 'pressure-due-to-liquid-column-formula',
      miniExample: '1.5m of water → 14,700 Pa.',
    },
    {
      conceptSlug: 'density-a-level',
      keyPoint: 'Every pure substance has a characteristic density — used to identify materials.',
      formulaSlug: 'density-formula-a-level',
      miniExample: '2.7 g/cm³ × 40cm³ → 108 g.',
    },
    {
      conceptSlug: 'relative-density-a-level',
      keyPoint: 'RD > 1 sinks; RD < 1 floats. Used to test battery acid, milk, etc.',
      formulaSlug: 'relative-density-formula',
      miniExample: '2700 kg/m³ → RD = 2.7.',
    },
    {
      conceptSlug: 'hydrometer-a-level',
      keyPoint: 'A floating object displaces liquid equal to its own weight — less volume needed in denser liquid.',
      miniExample: 'Brewers track fermentation via dropping hydrometer readings.',
    },
  ],
};
