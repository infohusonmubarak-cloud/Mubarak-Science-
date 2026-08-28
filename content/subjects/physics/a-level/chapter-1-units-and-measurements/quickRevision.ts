import type { QuickRevision } from '@/types/content';

export const chapter1AUnitsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'basic-and-derived-units',
      keyPoint: 'Base units: length, mass, time, current, temperature, amount, luminous intensity. Derived units combine them.',
      miniExample: 'N = kg·m/s².',
    },
    {
      conceptSlug: 'systems-of-units',
      keyPoint: 'SI (metre, kilogram, second) is the internationally agreed system.',
      miniExample: '250 cm = 2.5 m.',
    },
    {
      conceptSlug: 'si-prefixes',
      keyPoint: 'A prefix means "× a power of ten."',
      miniExample: '4.7 μF = 4.7 × 10⁻⁶ F.',
    },
    {
      conceptSlug: 'vernier-caliper',
      keyPoint: 'Total reading = MSR + (VC × LC).',
      formulaSlug: 'vernier-caliper-formula',
      miniExample: '2.3 cm + (6×0.01) = 2.36 cm.',
    },
    {
      conceptSlug: 'measurement-of-time',
      keyPoint: 'T = 2π√(L/g) for a simple pendulum.',
      formulaSlug: 'simple-pendulum-period-formula',
      miniExample: 'L=1.0 m → T ≈ 2.0 s.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'basic-and-derived-units',
      keyPoint: 'Every quantity reduces to combinations of the seven base units — a fast way to check a formula.',
      miniExample: 'Pressure = force/area = kg/(m·s²).',
    },
    {
      conceptSlug: 'systems-of-units',
      keyPoint: 'SI vs. CGS vs. FPS — always convert everything to one system before calculating.',
      miniExample: '3.2 kg = 3200 g.',
    },
    {
      conceptSlug: 'si-prefixes',
      keyPoint: 'Common prefixes: giga, mega, kilo, centi, milli, micro, nano.',
      miniExample: '650 nm = 6.5 × 10⁻⁷ m.',
    },
    {
      conceptSlug: 'standards-of-measurement',
      keyPoint: 'Modern SI units are defined using constants of nature, not physical objects.',
      miniExample: 'The second is defined by caesium atom vibrations.',
    },
    {
      conceptSlug: 'vernier-caliper',
      keyPoint: 'Total reading = MSR + (VC × LC), with LC = 1 MSD − 1 VSD.',
      formulaSlug: 'vernier-caliper-formula',
      miniExample: '4.1 + (3×0.01) = 4.13 cm.',
    },
    {
      conceptSlug: 'micrometer-screw-gauge',
      keyPoint: 'Total reading = MSR + (CSR × LC), with LC = pitch/divisions. About 10× finer than a vernier caliper.',
      formulaSlug: 'micrometer-screw-gauge-formula',
      miniExample: '0.5 + (20×0.001) = 0.52 cm.',
    },
    {
      conceptSlug: 'measurement-of-mass',
      keyPoint: 'A beam balance compares an unknown mass against known standard masses.',
      miniExample: '200+50+5 = 255 g.',
    },
    {
      conceptSlug: 'measurement-of-time',
      keyPoint: "A pendulum's period depends only on length and g, never on mass.",
      formulaSlug: 'simple-pendulum-period-formula',
      miniExample: 'L=2.5 m → T ≈ 3.2 s.',
    },
  ],
};
