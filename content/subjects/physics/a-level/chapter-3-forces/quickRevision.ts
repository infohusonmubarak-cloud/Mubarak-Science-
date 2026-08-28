import type { QuickRevision } from '@/types/content';

export const chapter3AForcesQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'newtons-first-law',
      keyPoint: 'An object keeps its state of motion unless a net force acts (inertia).',
      miniExample: 'A tablecloth yanked fast leaves the dishes almost still.',
    },
    {
      conceptSlug: 'newtons-second-law',
      keyPoint: 'F = ma',
      formulaSlug: 'newtons-second-law-formula',
      miniExample: '60 N on 12 kg → 5 m/s².',
    },
    {
      conceptSlug: 'newtons-third-law',
      keyPoint: 'Every action has an equal, opposite reaction on the OTHER object.',
      miniExample: 'Swimmer pushes water back; water pushes swimmer forward.',
    },
    {
      conceptSlug: 'mass-and-weight',
      keyPoint: 'W = mg. Mass is constant; weight depends on local gravity.',
      formulaSlug: 'weight-formula',
      miniExample: '80 kg on the Moon (g=1.6) → 128 N.',
    },
    {
      conceptSlug: 'momentum-and-impulse',
      keyPoint: 'p = mv; impulse J = FΔt = Δp.',
      formulaSlug: 'momentum-and-impulse-formula',
      miniExample: '3 kg at 6 m/s → p = 18 kg·m/s.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'newtons-first-law',
      keyPoint: 'Zero net force means constant velocity, not necessarily rest.',
      miniExample: 'A frictionless ball keeps rolling forever.',
    },
    {
      conceptSlug: 'newtons-second-law',
      keyPoint: 'F = ma — always use the NET force.',
      formulaSlug: 'newtons-second-law-formula',
      miniExample: '45 N, a=3 m/s² → m=15 kg.',
    },
    {
      conceptSlug: 'newtons-third-law',
      keyPoint: 'Action-reaction pairs act on two different objects, never the same one.',
      miniExample: 'Rocket exhaust pushed back; rocket pushed forward.',
    },
    {
      conceptSlug: 'newtons-law-of-gravitation',
      keyPoint: 'F = Gm₁m₂/r² — inverse-square law.',
      formulaSlug: 'newtons-law-of-gravitation-formula',
      miniExample: '50kg & 80kg, 2m apart → F ≈ 6.67×10⁻⁸ N.',
    },
    {
      conceptSlug: 'contact-forces',
      keyPoint: 'F(friction) = μN. Normal reaction and tension are also contact forces.',
      formulaSlug: 'friction-formula',
      miniExample: 'μ=0.4, N=300N → friction max = 120 N.',
    },
    {
      conceptSlug: 'resultant-force-and-equilibrium',
      keyPoint: 'Resultant = vector sum of all forces. Equilibrium: resultant = 0.',
      miniExample: '40N right, 15N friction left → resultant 25N right.',
    },
    {
      conceptSlug: 'mass-and-weight',
      keyPoint: 'Mass (kg) ≠ weight (N). W = mg.',
      formulaSlug: 'weight-formula',
      miniExample: '5 kg on Earth → 49 N.',
    },
    {
      conceptSlug: 'freely-falling-bodies',
      keyPoint: 'F=ma and W=mg together give a=g, independent of mass.',
      miniExample: "Apollo 15's hammer and feather land together on the Moon.",
    },
    {
      conceptSlug: 'momentum-and-impulse',
      keyPoint: 'A longer contact time reduces the force for the same momentum change.',
      formulaSlug: 'momentum-and-impulse-formula',
      miniExample: '400N for 0.5s → impulse 200 N·s.',
    },
    {
      conceptSlug: 'conservation-of-momentum',
      keyPoint: 'Total momentum before = total momentum after (no external force).',
      miniExample: '4kg@6m/s hits stationary 2kg, stick together → 4 m/s.',
    },
  ],
};
