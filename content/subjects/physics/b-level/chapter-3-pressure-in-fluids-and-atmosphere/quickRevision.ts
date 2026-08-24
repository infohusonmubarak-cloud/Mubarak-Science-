import type { QuickRevision } from '@/types/content';

export const chapter3PressureQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'atmospheric-pressure-explained',
      keyPoint: 'P = F/A; atmospheric pressure ≈ 100,000 Pa at sea level, acting equally in all directions.',
      formulaSlug: 'pressure-definition-formula',
      miniExample: '100,000 Pa over a 1.5 m² table exerts 150,000 N.',
    },
    {
      conceptSlug: 'the-mercury-barometer',
      keyPoint: 'P = hρg; a barometer measures atmospheric pressure from a supported mercury column (~760 mm).',
      formulaSlug: 'barometric-pressure-formula',
      miniExample: '0.76 m of mercury gives P ≈ 101,293 Pa.',
    },
    {
      conceptSlug: 'pressure-in-a-liquid-b-level',
      keyPoint: 'P = P₀ + hρg; pressure increases linearly with depth.',
      formulaSlug: 'liquid-pressure-formula',
      miniExample: 'At 10 m depth in water, total pressure ≈ 198,000 Pa.',
    },
    {
      conceptSlug: 'archimedes-principle',
      keyPoint: 'Buoyant force Fᵦ = ρVg equals the weight of fluid displaced.',
      formulaSlug: 'buoyant-force-formula',
      miniExample: 'Displacing 0.02 m³ of water gives 196 N of buoyant force.',
    },
    {
      conceptSlug: 'pascals-law',
      keyPoint: "F₁/A₁ = F₂/A₂; pressure in an enclosed fluid transmits equally, multiplying force.",
      formulaSlug: 'pascals-law-formula',
      miniExample: 'A 0.02→0.5 m² piston ratio turns 100 N into 2500 N.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-manometer',
      keyPoint: 'ΔP = hρg; a manometer compares gas pressure to atmospheric via liquid column height difference.',
      formulaSlug: 'manometer-pressure-difference-formula',
      miniExample: 'A 0.15 m mercury difference indicates a gas pressure roughly 20,000 Pa above atmospheric.',
    },
  ],
};
