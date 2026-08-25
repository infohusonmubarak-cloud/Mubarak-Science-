import type { QuickRevision } from '@/types/content';

export const chapter10BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'extending-trigonometric-ratios-to-any-angle',
      keyPoint: 'sinθ=y/r, cosθ=x/r, tanθ=y/x, for any point (x,y) at distance r.',
      formulaSlug: 'general-trig-ratio-definition',
      miniExample: 'P(−3,4) → r=5, sinθ=0.8.',
    },
    {
      conceptSlug: 'the-quadrants-and-signs-of-trigonometric-ratios',
      keyPoint: 'ASTC: I all+, II sin+, III tan+, IV cos+.',
      formulaSlug: 'quadrant-sign-rule',
      miniExample: 'cos−, sin+ → Quadrant II.',
    },
    {
      conceptSlug: 'negative-angles-and-their-trigonometric-ratios',
      keyPoint: 'sin(−θ)=−sinθ, cos(−θ)=cosθ, tan(−θ)=−tanθ.',
      formulaSlug: 'negative-angle-identities',
      miniExample: 'sin40°≈0.643 → sin(−40°)≈−0.643.',
    },
    {
      conceptSlug: 'the-basic-acute-angle',
      keyPoint: 'Reduce any angle to an acute reference angle, then apply ASTC sign.',
      formulaSlug: 'basic-acute-angle-formula',
      miniExample: 'sin150° = +sin30° = 0.5.',
    },
    {
      conceptSlug: 'trigonometric-ratios-of-quadrantal-angles',
      keyPoint: 'tan undefined at 90°, 270° (x=0 there).',
      formulaSlug: 'quadrantal-angle-values',
      miniExample: 'sin270°=−1.',
    },
    {
      conceptSlug: 'the-pythagorean-identity',
      keyPoint: 'sin²θ + cos²θ = 1, always.',
      formulaSlug: 'pythagorean-identity',
      miniExample: 'sinθ=0.6 → cosθ=0.8 (QI).',
    },
    {
      conceptSlug: 'the-quotient-identity',
      keyPoint: 'tanθ = sinθ/cosθ.',
      formulaSlug: 'quotient-identity',
      miniExample: 'sin=0.6, cos=0.8 → tan=0.75.',
    },
    {
      conceptSlug: 'the-law-of-sines',
      keyPoint: 'a/sinA = b/sinB = c/sinC.',
      formulaSlug: 'law-of-sines',
      miniExample: 'd=5,D=30°,E=90° → e=10.',
    },
    {
      conceptSlug: 'the-law-of-cosines',
      keyPoint: 'c² = a²+b²−2ab·cosC.',
      formulaSlug: 'law-of-cosines',
      miniExample: 'a=7,b=9,C=60° → c≈8.19.',
    },
    {
      conceptSlug: 'bearings-and-solving-triangle-problems',
      keyPoint: 'Bearings: clockwise from north; reverse bearing = ±180°.',
      formulaSlug: 'law-of-cosines',
      miniExample: '40km@065°, 30km@155° → AC=50km.',
    },
    {
      conceptSlug: 'the-area-of-a-triangle-using-sine',
      keyPoint: 'Area = ½ab·sinC.',
      formulaSlug: 'area-of-a-triangle-formula',
      miniExample: 'a=8,b=5,C=30° → Area=10.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'extending-trigonometric-ratios-to-any-angle',
      keyPoint: 'Matches right-triangle trig exactly in QI; x,y can be negative elsewhere.',
      formulaSlug: 'general-trig-ratio-definition',
      miniExample: 'P(5,−12) → r=13.',
    },
    {
      conceptSlug: 'the-quadrants-and-signs-of-trigonometric-ratios',
      keyPoint: 'tan\'s sign is sin\'s sign × cos\'s sign combined.',
      formulaSlug: 'quadrant-sign-rule',
      miniExample: 'tan+, cos− → Quadrant III.',
    },
    {
      conceptSlug: 'negative-angles-and-their-trigonometric-ratios',
      keyPoint: 'Reflecting across the x-axis flips y (sin, tan) but not x (cos).',
      formulaSlug: 'negative-angle-identities',
      miniExample: 'cos25°≈0.906 → cos(−25°)≈0.906.',
    },
    {
      conceptSlug: 'the-basic-acute-angle',
      keyPoint: 'QII: α=180−θ. QIII: α=θ−180. QIV: α=360−θ.',
      formulaSlug: 'basic-acute-angle-formula',
      miniExample: 'cos210° = −cos30° ≈ −0.866.',
    },
    {
      conceptSlug: 'trigonometric-ratios-of-quadrantal-angles',
      keyPoint: 'Values follow directly from the general definition at axis points.',
      formulaSlug: 'quadrantal-angle-values',
      miniExample: 'tan180°=0; tan90° undefined.',
    },
    {
      conceptSlug: 'the-pythagorean-identity',
      keyPoint: 'Comes from the Pythagorean theorem on the unit circle (r=1).',
      formulaSlug: 'pythagorean-identity',
      miniExample: 'cosθ=−0.28 (QIII) → sinθ=−0.96.',
    },
    {
      conceptSlug: 'the-quotient-identity',
      keyPoint: 'Follows from (y/r)/(x/r) = y/x.',
      formulaSlug: 'quotient-identity',
      miniExample: 'sin=0.8, cos=0.6 → tan≈1.33.',
    },
    {
      conceptSlug: 'the-law-of-sines',
      keyPoint: 'Derived by writing one height two different ways.',
      formulaSlug: 'law-of-sines',
      miniExample: 'G=H=45°, g=8 → h=8.',
    },
    {
      conceptSlug: 'the-law-of-cosines',
      keyPoint: 'Reduces to Pythagoras exactly when C=90° (cosC=0).',
      formulaSlug: 'law-of-cosines',
      miniExample: 'p=8,q=6,R=90° → r=10.',
    },
    {
      conceptSlug: 'bearings-and-solving-triangle-problems',
      keyPoint: 'Convert the bearing description into a triangle\'s interior angle first.',
      formulaSlug: 'law-of-cosines',
      miniExample: 'Bearing 040° → reverse bearing 220°.',
    },
    {
      conceptSlug: 'the-area-of-a-triangle-using-sine',
      keyPoint: 'Derived from h=a·sinC substituted into ½×base×height.',
      formulaSlug: 'area-of-a-triangle-formula',
      miniExample: 'a=10,b=12,C=90° → Area=60.',
    },
  ],
};
