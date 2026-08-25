import type { QuickRevision } from '@/types/content';

export const chapter10QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'degree-radian-conversion',
      keyPoint: 'radians = degrees × (π/180).',
      formulaSlug: 'degree-radian-conversion-formula',
      miniExample: '150° = 5π/6 radians.',
    },
    {
      conceptSlug: 'arc-length-of-a-sector',
      keyPoint: 's = rθ (θ in radians).',
      formulaSlug: 'arc-length-formula',
      miniExample: 'r=8, θ=2 → s=16.',
    },
    {
      conceptSlug: 'the-six-trigonometric-ratios',
      keyPoint: 'SOH-CAH-TOA: sinθ=opp/hyp, cosθ=adj/hyp, tanθ=opp/adj.',
      formulaSlug: 'six-trig-ratios-formula',
      miniExample: 'opp=3,adj=4,hyp=5 → sinθ=3/5.',
    },
    {
      conceptSlug: 'pythagorean-identity-and-reciprocal-relations',
      keyPoint: 'sin²θ + cos²θ = 1.',
      formulaSlug: 'pythagorean-trig-identity',
      miniExample: 'sinθ=3/5 → cosθ=4/5.',
    },
    {
      conceptSlug: 'trig-ratios-for-special-angles',
      keyPoint: 'Exact values for 0°,30°,45°,60°,90° from special right triangles.',
      formulaSlug: 'special-angle-trig-values-table',
      miniExample: 'sin30°=1/2, cos30°=√3/2.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-an-angle-and-standard-position',
      keyPoint: 'Standard position: vertex at origin, initial side on positive x-axis.',
      formulaSlug: 'coterminal-angles-formula',
      miniExample: '400° is coterminal with 40°.',
    },
    {
      conceptSlug: 'degree-radian-conversion',
      keyPoint: '360° = 2π radians; a radian is where arc length = radius.',
      formulaSlug: 'degree-radian-conversion-formula',
      miniExample: 'π/3 rad = 60°.',
    },
    {
      conceptSlug: 'arc-length-of-a-sector',
      keyPoint: 's = rθ, only with θ in radians.',
      formulaSlug: 'arc-length-formula',
      miniExample: 'r=6, θ=1.5 → s=9.',
    },
    {
      conceptSlug: 'area-of-a-sector',
      keyPoint: 'A = (1/2)r²θ — a sector is the θ/2π fraction of the full circle.',
      formulaSlug: 'sector-area-formula',
      miniExample: 'r=10, θ=π/3 → A≈52.4.',
    },
    {
      conceptSlug: 'the-six-trigonometric-ratios',
      keyPoint: 'Six ratios from opp/adj/hyp; the same for all similar right triangles.',
      formulaSlug: 'six-trig-ratios-formula',
      miniExample: 'opp=6,adj=8,hyp=10 → cosθ=0.8.',
    },
    {
      conceptSlug: 'pythagorean-identity-and-reciprocal-relations',
      keyPoint: 'sin²θ+cos²θ=1; tanθ=sinθ/cosθ.',
      formulaSlug: 'pythagorean-trig-identity',
      miniExample: 'cosθ=12/13 → sinθ=5/13.',
    },
    {
      conceptSlug: 'trig-ratios-for-special-angles',
      keyPoint: 'Derive from 45-45-90 and 30-60-90 triangles; 30°/60° values swap.',
      formulaSlug: 'special-angle-trig-values-table',
      miniExample: 'tan45°=1.',
    },
    {
      conceptSlug: 'solving-right-triangles',
      keyPoint: 'One side + one other measurement solves the whole triangle.',
      formulaSlug: 'six-trig-ratios-formula',
      miniExample: '∠C=35°, hyp=10 → AB≈5.74, BC≈8.19, ∠A=55°.',
    },
    {
      conceptSlug: 'angle-of-elevation-and-depression',
      keyPoint: 'Elevation: up from horizontal. Depression: down from horizontal. Equal by alternate angles.',
      formulaSlug: 'six-trig-ratios-formula',
      miniExample: '40m away, 32° elevation → height≈25m.',
    },
  ],
};
