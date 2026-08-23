import type { QuickRevision } from '@/types/content';

export const chapter2PhysicsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'distance-and-displacement',
      keyPoint: 'Distance = total path length. Displacement = straight-line, with direction.',
      miniExample: 'One lap of a track: distance 400 m, displacement 0 m.',
    },
    {
      conceptSlug: 'speed',
      keyPoint: 'speed = distance / time',
      formulaSlug: 'speed-formula',
      miniExample: '150 m in 30 s → 5 m/s.',
    },
    {
      conceptSlug: 'acceleration',
      keyPoint: 'a = (v − u) / t',
      formulaSlug: 'acceleration-formula',
      miniExample: '10→30 m/s in 5 s → 4 m/s².',
    },
    {
      conceptSlug: 'the-first-equation-of-motion',
      keyPoint: 'v = u + at',
      formulaSlug: 'suvat-v-equals-u-plus-at',
      miniExample: 'u=5, a=3, t=4 → v=17 m/s.',
    },
    {
      conceptSlug: 'free-fall',
      keyPoint: 'g ≈ 9.8 m/s² for every object near Earth.',
      miniExample: 'Dropped for 2 s → falls 19.6 m.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'distance-and-displacement',
      keyPoint: 'Distance (scalar) vs. displacement (vector, net change).',
      miniExample: '300 m east then 100 m west → distance 400 m, displacement 200 m east.',
    },
    {
      conceptSlug: 'speed',
      keyPoint: 'speed = distance / time (scalar).',
      formulaSlug: 'speed-formula',
      miniExample: '100 m in 20 s → 5 m/s.',
    },
    {
      conceptSlug: 'velocity',
      keyPoint: 'velocity = displacement / time (vector, has direction).',
      formulaSlug: 'velocity-formula',
      miniExample: '40 m north in 8 s → 5 m/s north.',
    },
    {
      conceptSlug: 'distance-time-graphs',
      keyPoint: 'Slope of a distance-time graph = speed.',
      miniExample: '(0,0) to (5,20) → speed 4 m/s.',
    },
    {
      conceptSlug: 'acceleration',
      keyPoint: 'a = (v−u)/t — deceleration is negative acceleration.',
      formulaSlug: 'acceleration-formula',
      miniExample: '12→0 m/s in 4 s → −3 m/s².',
    },
    {
      conceptSlug: 'velocity-time-graphs',
      keyPoint: 'Slope of a velocity-time graph = acceleration; area under it = displacement.',
      miniExample: '(0,5) to (10,25) → acceleration 2 m/s².',
    },
    {
      conceptSlug: 'the-first-equation-of-motion',
      keyPoint: 'v = u + at — final velocity from initial, acceleration, time.',
      formulaSlug: 'suvat-v-equals-u-plus-at',
      miniExample: 'u=5, a=3, t=4 → v=17 m/s.',
    },
    {
      conceptSlug: 'the-second-equation-of-motion',
      keyPoint: 's = ut + ½at² — displacement without needing final velocity.',
      formulaSlug: 'suvat-s-equals-ut-plus-half-at-squared',
      miniExample: 'u=2, a=4, t=3 → s=24 m.',
    },
    {
      conceptSlug: 'the-third-equation-of-motion',
      keyPoint: 'v² = u² + 2as — use when time is unknown.',
      formulaSlug: 'suvat-v-squared-equals-u-squared-plus-2as',
      miniExample: 'u=4, a=2, s=24 → v≈10.6 m/s.',
    },
    {
      conceptSlug: 'free-fall',
      keyPoint: 'Free fall is uniform acceleration under gravity — substitute g for a.',
      miniExample: 'Dropped for 3 s → v = 29.4 m/s.',
    },
  ],
};
