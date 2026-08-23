import type { QuickRevision } from '@/types/content';

export const chapter2CForcesQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'centripetal-force',
      keyPoint: 'Fc = mv²/r — always points toward the centre of the circle.',
      formulaSlug: 'centripetal-force-formula',
      miniExample: 'm=0.5kg, v=4m/s, r=0.8m → Fc=10N.',
    },
    {
      conceptSlug: 'tension-as-centripetal-force',
      keyPoint: 'For a ball on a string, tension alone supplies the centripetal force.',
      formulaSlug: 'centripetal-force-formula-angular',
      miniExample: 'm=0.2kg, r=0.5m, ω=5rad/s → T=2.5N.',
    },
    {
      conceptSlug: 'friction-as-centripetal-force',
      keyPoint: 'Maximum safe turning speed: v_max = √(μgr).',
      miniExample: 'μ=0.4, g=9.8, r=50m → v_max=14 m/s.',
    },
    {
      conceptSlug: 'vertical-circular-motion',
      keyPoint: 'Bottom of loop: T = mv²/r + mg. Top of loop: T = mv²/r − mg.',
      miniExample: 'm=2kg, v=5m/s, r=1m at bottom → T=69.6N.',
    },
    {
      conceptSlug: 'centrifugal-force-a-fictitious-force',
      keyPoint: "Centrifugal force isn't real — it's your inertia resisting the turn, felt from inside a rotating frame.",
      miniExample: 'A car door pushes YOU inward; you only feel pushed outward against it.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'centripetal-force',
      keyPoint: 'The net inward force needed for any circular motion; not an extra force of its own.',
      formulaSlug: 'centripetal-force-formula',
      miniExample: 'm=2kg, v=10m/s, r=5m → Fc=40N.',
    },
    {
      conceptSlug: 'tension-as-centripetal-force',
      keyPoint: 'A string can only pull along its length — automatically toward the centre for horizontal circular motion.',
      formulaSlug: 'centripetal-force-formula-angular',
      miniExample: 'm=0.3kg, r=0.4m, ω=4rad/s → T=1.92N.',
    },
    {
      conceptSlug: 'friction-as-centripetal-force',
      keyPoint: 'Friction has a maximum value (μmg) — exceeding it means the car skids outward off the curve.',
      miniExample: 'μ=0.5, g=9.8, r=20m → v_max≈9.9 m/s.',
    },
    {
      conceptSlug: 'gravity-as-centripetal-force',
      keyPoint: 'For orbiting objects, gravity alone supplies Fc — astronauts are in continuous free fall, not beyond gravity.',
      formulaSlug: 'centripetal-force-formula',
      miniExample: 'm=500kg, v=8000m/s, r=8×10⁶m → Fc=4000N.',
    },
    {
      conceptSlug: 'vertical-circular-motion',
      keyPoint: 'Gravity helps supply Fc at the top of a vertical loop, opposes it at the bottom.',
      miniExample: 'm=1.5kg, v=4m/s, r=0.8m at bottom → T=44.7N.',
    },
    {
      conceptSlug: 'centrifugal-force-a-fictitious-force',
      keyPoint: 'Only the inward centripetal force is real; the outward feeling is inertia, not a force.',
      miniExample: 'Cutting a swung string removes Fc; the ball flies off straight, not outward.',
    },
    {
      conceptSlug: 'circular-motion-on-a-banked-curve',
      keyPoint: 'Banking angles the normal force inward, letting it help supply Fc — even with zero friction.',
      miniExample: 'v=25m/s, r=100m → ideal banking angle ≈32.5°.',
    },
    {
      conceptSlug: 'circular-motion-in-everyday-life',
      keyPoint: 'Same physics (Fc = mv²/r) in centrifuges, washing machines, roller coasters, and orbits — only the force source changes.',
      miniExample: 'A centrifuge wall pushes denser particles inward, separating them by density.',
    },
  ],
};
