import type { QuickRevision } from '@/types/content';

export const chapter6CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'what-is-a-conic-section',
      keyPoint: 'Conics come from slicing a cone: circle, ellipse, parabola, hyperbola.',
      miniExample: 'x²+y²=9 → circle. y=x²+3 → parabola.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-circle',
      keyPoint: '(x−h)²+(y−k)²=r².',
      formulaSlug: 'standard-equation-of-a-circle-formula',
      miniExample: 'Center(3,−2), r=4 → =16.',
    },
    {
      conceptSlug: 'the-general-equation-of-a-circle',
      keyPoint: 'Complete the square to recover standard form.',
      formulaSlug: 'general-equation-of-a-circle-formula',
      miniExample: 'x²+y²−6x+4y−12=0 → center(3,−2), r=5.',
    },
    {
      conceptSlug: 'the-focus-directrix-definition-of-a-parabola',
      keyPoint: 'Every point equidistant from focus and directrix.',
      formulaSlug: 'parabola-focus-directrix-formula',
      miniExample: 'Focus(0,2), directrix y=−2 → (4,2) checks out.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-parabola',
      keyPoint: 'x²=4py; focus (0,p); directrix y=−p.',
      formulaSlug: 'standard-parabola-equation-formula',
      miniExample: 'x²=8y → p=2.',
    },
    {
      conceptSlug: 'the-general-equation-of-a-translated-parabola',
      keyPoint: '(x−h)²=4p(y−k), vertex (h,k).',
      formulaSlug: 'general-translated-parabola-formula',
      miniExample: 'Vertex(2,3), p=1 → (x−2)²=4(y−3).',
    },
    {
      conceptSlug: 'translation-of-axes',
      keyPoint: "x'=x−h, y'=y−k.",
      formulaSlug: 'translation-of-axes-formula',
      miniExample: 'New origin (3,−2) → (7,1) becomes (4,3).',
    },
    {
      conceptSlug: 'rotation-of-axes',
      keyPoint: "x=x'cosθ−y'sinθ, y=x'sinθ+y'cosθ.",
      formulaSlug: 'rotation-of-axes-formula',
      miniExample: 'θ=90°: (5,0) → new coords (0,−5).',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'what-is-a-conic-section',
      keyPoint: 'A circle has matching x², y² coefficients; a parabola has only one.',
      miniExample: 'Flashlight beam on a wall at different angles.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-circle',
      keyPoint: 'Built directly from the distance formula.',
      formulaSlug: 'standard-equation-of-a-circle-formula',
      miniExample: '=81 → radius 9.',
    },
    {
      conceptSlug: 'the-general-equation-of-a-circle',
      keyPoint: 'Add the same constants to both sides when completing the square.',
      formulaSlug: 'general-equation-of-a-circle-formula',
      miniExample: 'x²+y²+2x−4y−4=0 → radius 3.',
    },
    {
      conceptSlug: 'the-focus-directrix-definition-of-a-parabola',
      keyPoint: 'This defining property is what the algebraic equation is built from.',
      formulaSlug: 'parabola-focus-directrix-formula',
      miniExample: 'Reflective property used in satellite dishes.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-parabola',
      keyPoint: 'Divide the y-coefficient by 4 to find p, not use it directly.',
      formulaSlug: 'standard-parabola-equation-formula',
      miniExample: 'x²=12y → p=3.',
    },
    {
      conceptSlug: 'the-general-equation-of-a-translated-parabola',
      keyPoint: 'The focus and directrix shift along with the vertex too.',
      formulaSlug: 'general-translated-parabola-formula',
      miniExample: '(x−1)²=8(y+2) → vertex (1,−2).',
    },
    {
      conceptSlug: 'translation-of-axes',
      keyPoint: 'Subtract (not add) when going from old to new coordinates.',
      formulaSlug: 'translation-of-axes-formula',
      miniExample: "New origin (2,5) → x'=7 for point (9,5).",
    },
    {
      conceptSlug: 'rotation-of-axes',
      keyPoint: 'Converting new-from-old uses the inverse (−θ) formulas.',
      formulaSlug: 'rotation-of-axes-formula',
      miniExample: "θ=90°: (0,4) → y'=0.",
    },
  ],
};
