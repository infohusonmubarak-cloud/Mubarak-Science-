import type { QuickRevision } from '@/types/content';

export const chapter9CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'reviewing-derivatives-of-various-function-types',
      keyPoint: 'Differentiation is linear — differentiate each term separately, then combine.',
      miniExample: "d/dx[3x²−eˣ] = 6x−eˣ.",
    },
    {
      conceptSlug: 'critical-points-and-where-they-occur',
      keyPoint: "Critical points: where f'(x)=0 or f'(x) is undefined.",
      formulaSlug: 'critical-point-definition-formula',
      miniExample: 'f(x)=x³−3x → critical points at x=±1.',
    },
    {
      conceptSlug: 'increasing-and-decreasing-intervals',
      keyPoint: "f'(x)>0 ⟹ increasing; f'(x)<0 ⟹ decreasing.",
      formulaSlug: 'increasing-decreasing-test-formula',
      miniExample: 'Test one point per interval between critical points.',
    },
    {
      conceptSlug: 'finding-absolute-and-local-extrema',
      keyPoint: 'On [a,b], check critical points AND both endpoints.',
      formulaSlug: 'extrema-classification-formula',
      miniExample: 'f(x)=x³−3x on [−2,2] → abs max 2, abs min −2.',
    },
    {
      conceptSlug: 'the-second-derivative-and-concavity',
      keyPoint: "f''(x)>0 ⟹ concave up; f''(x)<0 ⟹ concave down.",
      formulaSlug: 'concavity-formula',
      miniExample: 'f(x)=x³−3x → inflection point at (0,0).',
    },
    {
      conceptSlug: 'the-second-derivative-test-for-extrema',
      keyPoint: "At critical point c: f''(c)>0 ⟹ local min; f''(c)<0 ⟹ local max.",
      formulaSlug: 'second-derivative-test-formula',
      miniExample: "f''(1)=6>0 → local min at x=1.",
    },
    {
      conceptSlug: 'linear-approximation-using-derivatives',
      keyPoint: "L(x) = f(a) + f'(a)(x−a) estimates f near a.",
      formulaSlug: 'linear-approximation-formula',
      miniExample: '√4.1 ≈ 2 + 0.25(0.1) = 2.025.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'reviewing-derivatives-of-various-function-types',
      keyPoint: 'd/dx[bˣ]=bˣ·ln(b) for general base b, not just eˣ.',
      miniExample: "d/dx[3ˣ] = 3ˣ·ln3.",
    },
    {
      conceptSlug: 'critical-points-and-where-they-occur',
      keyPoint: 'Always substitute the critical x-value back into f, not f\', for its y-coordinate.',
      formulaSlug: 'critical-point-definition-formula',
      miniExample: 'f(−1)=(−1)³−3(−1)=2.',
    },
    {
      conceptSlug: 'increasing-and-decreasing-intervals',
      keyPoint: "f' is continuous, so it can only change sign at a critical point.",
      formulaSlug: 'increasing-decreasing-test-formula',
      miniExample: 'One sample point per interval determines the whole interval.',
    },
    {
      conceptSlug: 'finding-absolute-and-local-extrema',
      keyPoint: 'The Extreme Value Theorem guarantees absolute extrema exist on a closed interval.',
      formulaSlug: 'extrema-classification-formula',
      miniExample: 'Compare all critical-point and endpoint values; largest/smallest wins.',
    },
    {
      conceptSlug: 'the-second-derivative-and-concavity',
      keyPoint: 'A candidate inflection point (f\'\'=0) is only real if the sign of f\'\' actually changes there.',
      formulaSlug: 'concavity-formula',
      miniExample: "f''(x)=2 everywhere → no inflection point at all.",
    },
    {
      conceptSlug: 'the-second-derivative-test-for-extrema',
      keyPoint: "f''(c)=0 is inconclusive — fall back to the First Derivative Test.",
      formulaSlug: 'second-derivative-test-formula',
      miniExample: 'Usually faster than checking sign changes on both sides.',
    },
    {
      conceptSlug: 'linear-approximation-using-derivatives',
      keyPoint: 'Choose a to be a nearby point where f(a) and f\'(a) are both easy and exact.',
      formulaSlug: 'linear-approximation-formula',
      miniExample: 'Accuracy degrades the farther x is from a.',
    },
  ],
};
