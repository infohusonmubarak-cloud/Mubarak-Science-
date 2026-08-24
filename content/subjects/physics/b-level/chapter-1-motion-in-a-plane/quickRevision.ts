import type { QuickRevision } from '@/types/content';

export const chapter1MotionInAPlaneQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'resolving-vectors-in-two-dimensions',
      keyPoint: 'vₓ = v cosθ, vy = v sinθ splits any angled vector into components.',
      formulaSlug: 'vector-resolution-formula',
      miniExample: '20 m/s at 30°: vₓ ≈ 17.3 m/s, vy = 10 m/s.',
    },
    {
      conceptSlug: 'projectile-motion-basics',
      keyPoint: 'Horizontal velocity stays constant; vertical velocity accelerates due to gravity.',
      miniExample: 'A ball rolling off a table follows a curved (parabolic) path.',
    },
    {
      conceptSlug: 'horizontal-range-in-projectile-motion',
      keyPoint: 'R = u²sin2θ/g; range is maximised at a 45° launch angle.',
      formulaSlug: 'horizontal-range-formula',
      miniExample: '40 m/s at 45° gives R ≈ 163.3 m.',
    },
    {
      conceptSlug: 'centripetal-acceleration-in-a-plane',
      keyPoint: 'a = v²/r, always directed toward the centre — constant speed still means acceleration.',
      formulaSlug: 'centripetal-acceleration-formula',
      miniExample: '15 m/s around a 50 m curve gives a = 4.5 m/s².',
    },
    {
      conceptSlug: 'centripetal-force-in-a-plane',
      keyPoint: 'F = mv²/r; a real force (tension, friction, gravity) must supply it — nothing pushes outward.',
      formulaSlug: 'centripetal-force-in-a-plane-formula',
      miniExample: 'Earth\'s gravity supplies the centripetal force keeping satellites in orbit.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'resultant-of-two-dimensional-vectors',
      keyPoint: 'R = √(vₓ²+vy²), θ = tan⁻¹(vy/vₓ) recombines perpendicular components.',
      formulaSlug: 'resultant-vector-formula',
      miniExample: '6 m/s and 8 m/s components combine to a 10 m/s resultant.',
    },
    {
      conceptSlug: 'time-of-flight-in-projectile-motion',
      keyPoint: 'T = 2u sinθ/g; rise time equals fall time (symmetric motion).',
      formulaSlug: 'time-of-flight-formula',
      miniExample: '25 m/s at 40° gives T ≈ 3.28 s.',
    },
    {
      conceptSlug: 'maximum-height-in-projectile-motion',
      keyPoint: 'H = u²sin²θ/2g; occurs when vertical velocity momentarily reaches zero.',
      formulaSlug: 'maximum-height-formula',
      miniExample: '14 m/s straight up gives H = 10 m.',
    },
    {
      conceptSlug: 'period-and-frequency-in-circular-motion',
      keyPoint: 'T = 2πr/v (time per revolution); f = 1/T (revolutions per second).',
      formulaSlug: 'period-frequency-formula',
      miniExample: '5 revolutions in 2 s gives f = 2.5 Hz.',
    },
  ],
};
