import type { QuickRevision } from '@/types/content';

export const chapter5QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'graphing-y-x-squared-plus-bx-plus-c',
      keyPoint: 'a = 1 → opens upward, minimum vertex.',
      formulaSlug: 'vertex-formula-of-a-quadratic',
      miniExample: 'y=x²−2x−3 → vertex (1,−4).',
    },
    {
      conceptSlug: 'effect-of-a-on-the-parabola',
      keyPoint: 'Sign of a: direction. |a|: width (bigger |a| = narrower).',
      miniExample: 'y=3x² is narrower than y=0.5x².',
    },
    {
      conceptSlug: 'the-discriminant',
      keyPoint: 'D=b²−4ac. D>0: 2 roots. D=0: 1 root. D<0: none.',
      formulaSlug: 'discriminant-formula',
      miniExample: '2x²+3x+5=0 → D=−31 → no real roots.',
    },
    {
      conceptSlug: 'the-quadratic-formula',
      keyPoint: 'x = (−b ± √(b²−4ac)) / 2a.',
      formulaSlug: 'quadratic-formula',
      miniExample: '2x²+3x−2=0 → x=0.5 or x=−2.',
    },
    {
      conceptSlug: 'solving-quadratic-inequalities',
      keyPoint: 'Find roots, then test a point in each interval.',
      formulaSlug: 'quadratic-formula',
      miniExample: 'x²−x−6>0 → x<−2 or x>3.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'graphing-y-x-squared-plus-bx-plus-c',
      keyPoint: 'Upward parabola (a=1): minimum vertex at x=−b/2a.',
      formulaSlug: 'vertex-formula-of-a-quadratic',
      miniExample: 'y=x²−4x+1 → vertex (2,−3).',
    },
    {
      conceptSlug: 'graphing-y-negative-x-squared-plus-bx-plus-c',
      keyPoint: 'Downward parabola (a=−1): maximum vertex, same formula.',
      formulaSlug: 'vertex-formula-of-a-quadratic',
      miniExample: 'y=−x²+6x−5 → vertex (3,4), a maximum.',
    },
    {
      conceptSlug: 'effect-of-a-on-the-parabola',
      keyPoint: 'Sign of a sets direction; |a| sets narrowness.',
      miniExample: 'y=−4x² opens down and is narrower than y=x².',
    },
    {
      conceptSlug: 'the-vertex-formula-and-general-quadratic-graphs',
      keyPoint: 'Vertex x=−b/2a; substitute back for y; check sign of a for direction.',
      formulaSlug: 'vertex-formula-of-a-quadratic',
      miniExample: 'y=3x²+12x+7 → vertex (−2,−5).',
    },
    {
      conceptSlug: 'the-discriminant',
      keyPoint: 'D=b²−4ac tells the number of real roots before solving.',
      formulaSlug: 'discriminant-formula',
      miniExample: 'x²−6x+9=0 → D=0 → one repeated root.',
    },
    {
      conceptSlug: 'the-quadratic-formula',
      keyPoint: 'x = (−b ± √(b²−4ac)) / 2a solves any quadratic.',
      formulaSlug: 'quadratic-formula',
      miniExample: 'x²−x−6=0 → x=3 or x=−2.',
    },
    {
      conceptSlug: 'solving-quadratic-inequalities',
      keyPoint: 'Roots split the number line; test one point per interval.',
      formulaSlug: 'quadratic-formula',
      miniExample: 'x²−9<0 → −3<x<3.',
    },
  ],
};
