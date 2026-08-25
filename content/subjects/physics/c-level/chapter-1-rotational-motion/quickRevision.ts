import type { QuickRevision } from '@/types/content';

export const chapter1CRotationQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'angular-displacement',
      keyPoint: 'θ = s/r, always in radians.',
      formulaSlug: 'angular-displacement-formula',
      miniExample: 's=6m, r=4m → θ=1.5 rad.',
    },
    {
      conceptSlug: 'angular-velocity',
      keyPoint: 'ω = Δθ/Δt, in rad/s.',
      formulaSlug: 'angular-velocity-formula',
      miniExample: '10 rad in 4s → ω=2.5 rad/s.',
    },
    {
      conceptSlug: 'angular-acceleration',
      keyPoint: 'α = Δω/Δt, in rad/s².',
      formulaSlug: 'angular-acceleration-formula',
      miniExample: '2→10 rad/s in 4s → α=2 rad/s².',
    },
    {
      conceptSlug: 'rotational-kinematics-equations',
      keyPoint: 'ω=ω₀+αt; θ=ω₀t+½αt²; ω²=ω₀²+2αθ.',
      formulaSlug: 'rotational-kinematics-formula',
      miniExample: 'ω₀=5, α=3, t=4 → ω=17, θ=44.',
    },
    {
      conceptSlug: 'linear-and-angular-quantity-relationships',
      keyPoint: 'v = rω — linear speed depends on radius.',
      formulaSlug: 'linear-angular-relations-formula',
      miniExample: 'r=0.5m, ω=8rad/s → v=4 m/s.',
    },
    {
      conceptSlug: 'tangential-velocity-and-tangential-acceleration',
      keyPoint: 'aₜ = rα — tangential accel changes speed, not direction.',
      formulaSlug: 'tangential-acceleration-formula',
      miniExample: 'r=0.3m, α=6rad/s² → aₜ=1.8 m/s².',
    },
    {
      conceptSlug: 'centripetal-acceleration',
      keyPoint: 'a_c = v²/r = ω²r, always toward the center.',
      formulaSlug: 'rotational-centripetal-acceleration-formula',
      miniExample: 'v=20m/s, r=50m → a_c=8 m/s².',
    },
    {
      conceptSlug: 'period-frequency-and-revolution',
      keyPoint: 'T = 1/f; ω = 2πf.',
      formulaSlug: 'rotational-period-frequency-formula',
      miniExample: 'f=5Hz → T=0.2s, ω≈31.42 rad/s.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'angular-displacement',
      keyPoint: 'A full circle is 2π radians (360°).',
      formulaSlug: 'angular-displacement-formula',
      miniExample: 'The rotational counterpart of linear displacement.',
    },
    {
      conceptSlug: 'angular-velocity',
      keyPoint: 'ω is the same for every point on a rigid rotating object.',
      formulaSlug: 'angular-velocity-formula',
      miniExample: "Earth's rotation: ω≈7.27×10⁻⁵ rad/s everywhere.",
    },
    {
      conceptSlug: 'angular-acceleration',
      keyPoint: 'Negative α means the rotation is decelerating.',
      formulaSlug: 'angular-acceleration-formula',
      miniExample: 'A washing machine spinning up from rest.',
    },
    {
      conceptSlug: 'rotational-kinematics-equations',
      keyPoint: 'Only valid for constant angular acceleration.',
      formulaSlug: 'rotational-kinematics-formula',
      miniExample: 'Directly mirror the linear suvat equations.',
    },
    {
      conceptSlug: 'linear-and-angular-quantity-relationships',
      keyPoint: 'Points farther from the axis move faster (larger v), same ω.',
      formulaSlug: 'linear-angular-relations-formula',
      miniExample: 'The outer edge of a spinning record moves fastest.',
    },
    {
      conceptSlug: 'tangential-velocity-and-tangential-acceleration',
      keyPoint: 'Different from centripetal acceleration, which changes direction.',
      formulaSlug: 'tangential-acceleration-formula',
      miniExample: 'A car tire speeding up from a stop.',
    },
    {
      conceptSlug: 'centripetal-acceleration',
      keyPoint: 'Exists even at constant speed, since direction is changing.',
      formulaSlug: 'rotational-centripetal-acceleration-formula',
      miniExample: 'Requires a net inward force to sustain (Chapter 2).',
    },
    {
      conceptSlug: 'period-frequency-and-revolution',
      keyPoint: 'Larger frequency means smaller period.',
      formulaSlug: 'rotational-period-frequency-formula',
      miniExample: 'T=0.1s → f=10Hz.',
    },
  ],
};
