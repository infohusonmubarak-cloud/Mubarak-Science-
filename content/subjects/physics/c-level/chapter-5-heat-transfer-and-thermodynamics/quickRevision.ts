import type { QuickRevision } from '@/types/content';

export const chapter5CHeatQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'mechanisms-of-heat-transfer',
      keyPoint: 'Conduction, convection, radiation. Q/t = kA(ΔT)/d for conduction.',
      formulaSlug: 'fouriers-law-formula',
      miniExample: 'k=50,A=0.02,ΔT=100,d=0.5 → 200W.',
    },
    {
      conceptSlug: 'radiation-and-stefan-boltzmann-law',
      keyPoint: 'P = εσAT⁴ — T must be in kelvin.',
      formulaSlug: 'stefan-boltzmann-formula',
      miniExample: 'ε=0.9,A=0.5,T=400K → P≈653.2W.',
    },
    {
      conceptSlug: 'internal-energy-and-work',
      keyPoint: 'W = PΔV — area under a horizontal P-V line.',
      formulaSlug: 'work-done-by-gas-formula',
      miniExample: 'P=200000Pa, ΔV=0.03m³ → W=6000J.',
    },
    {
      conceptSlug: 'first-law-of-thermodynamics',
      keyPoint: 'ΔU = Q−W — energy conservation.',
      formulaSlug: 'first-law-thermodynamics-formula',
      miniExample: 'Q=8000J, W=6000J → ΔU=2000J.',
    },
    {
      conceptSlug: 'heat-engines-and-efficiency',
      keyPoint: 'η = W/Qₕ = 1−Qc/Qₕ.',
      formulaSlug: 'heat-engine-efficiency-formula',
      miniExample: 'Qₕ=5000J, Qc=3000J → η=40%.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'mechanisms-of-heat-transfer',
      keyPoint: 'A thicker material conducts heat more slowly.',
      formulaSlug: 'fouriers-law-formula',
      miniExample: 'Metal spoons heat up faster than wooden ones.',
    },
    {
      conceptSlug: 'radiation-and-stefan-boltzmann-law',
      keyPoint: 'Radiated power depends extremely steeply on temperature.',
      formulaSlug: 'stefan-boltzmann-formula',
      miniExample: 'The only mechanism that works through a vacuum.',
    },
    {
      conceptSlug: 'internal-energy-and-work',
      keyPoint: 'Positive for expansion, negative for compression.',
      formulaSlug: 'work-done-by-gas-formula',
      miniExample: 'A piston pushed outward by expanding combustion gases.',
    },
    {
      conceptSlug: 'first-law-of-thermodynamics',
      keyPoint: 'W is positive when work is done BY the system.',
      formulaSlug: 'first-law-thermodynamics-formula',
      miniExample: 'A bicycle pump warms up as air is compressed.',
    },
    {
      conceptSlug: 'heat-engines-and-efficiency',
      keyPoint: 'No real heat engine reaches 100% efficiency.',
      formulaSlug: 'heat-engine-efficiency-formula',
      miniExample: "A car engine is typically only 25-30% efficient.",
    },
  ],
};
