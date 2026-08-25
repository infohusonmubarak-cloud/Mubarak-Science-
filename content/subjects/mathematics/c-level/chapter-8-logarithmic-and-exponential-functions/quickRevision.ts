import type { QuickRevision } from '@/types/content';

export const chapter8CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-graph-of-an-exponential-function',
      keyPoint: 'y=bˣ: range (0,∞), passes through (0,1), asymptote y=0.',
      formulaSlug: 'exponential-function-properties-formula',
      miniExample: '2⁻²=0.25.',
    },
    {
      conceptSlug: 'the-graph-of-a-logarithmic-function',
      keyPoint: 'y=log_b(x): inverse of bˣ, domain (0,∞).',
      formulaSlug: 'logarithmic-function-properties-formula',
      miniExample: 'log₂(8)=3.',
    },
    {
      conceptSlug: 'transformations-of-exponential-and-logarithmic-graphs',
      keyPoint: 'Vertical shift D also moves the asymptote.',
      formulaSlug: 'transformation-of-exp-log-graphs-formula',
      miniExample: '3ˣ+6 → asymptote y=6.',
    },
    {
      conceptSlug: 'the-derivative-of-e-to-the-x',
      keyPoint: 'd/dx[eˣ] = eˣ — its own derivative.',
      formulaSlug: 'derivative-of-e-to-the-x-formula',
      miniExample: '3eˣ → f\'(0)=3.',
    },
    {
      conceptSlug: 'the-derivative-of-general-exponential-functions',
      keyPoint: 'd/dx[bˣ] = bˣ·ln(b).',
      formulaSlug: 'derivative-of-general-exponential-formula',
      miniExample: '2ˣ → f\'(0)≈0.693.',
    },
    {
      conceptSlug: 'the-derivative-of-the-natural-logarithm',
      keyPoint: 'd/dx[lnx] = 1/x.',
      formulaSlug: 'derivative-of-natural-log-formula',
      miniExample: '5lnx → f\'(2)=2.5.',
    },
    {
      conceptSlug: 'the-derivative-of-general-logarithmic-functions',
      keyPoint: 'd/dx[log_b x] = 1/(x ln b).',
      formulaSlug: 'derivative-of-general-log-formula',
      miniExample: 'log₂(x) → f\'(1)≈1.443.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-graph-of-an-exponential-function',
      keyPoint: 'bˣ is always strictly positive.',
      formulaSlug: 'exponential-function-properties-formula',
      miniExample: '3²=9.',
    },
    {
      conceptSlug: 'the-graph-of-a-logarithmic-function',
      keyPoint: 'The log graph is the exponential graph reflected over y=x.',
      formulaSlug: 'logarithmic-function-properties-formula',
      miniExample: 'log₃(9)=2.',
    },
    {
      conceptSlug: 'transformations-of-exponential-and-logarithmic-graphs',
      keyPoint: 'x−C shifts right; +D shifts up, moving the asymptote too.',
      formulaSlug: 'transformation-of-exp-log-graphs-formula',
      miniExample: '2ˣ⁻¹+3: shifted right 1, up 3.',
    },
    {
      conceptSlug: 'the-derivative-of-e-to-the-x',
      keyPoint: 'e is defined so this self-derivative property holds.',
      formulaSlug: 'derivative-of-e-to-the-x-formula',
      miniExample: 'eˣ+5 → f\'(0)=1.',
    },
    {
      conceptSlug: 'the-derivative-of-general-exponential-functions',
      keyPoint: 'Derived from bˣ = e^(x ln b) via the Chain Rule.',
      formulaSlug: 'derivative-of-general-exponential-formula',
      miniExample: 'ln(e)=1 simplifies the formula.',
    },
    {
      conceptSlug: 'the-derivative-of-the-natural-logarithm',
      keyPoint: 'Connects to the "missing case" of the power rule.',
      formulaSlug: 'derivative-of-natural-log-formula',
      miniExample: 'lnx → f\'(4)=0.25.',
    },
    {
      conceptSlug: 'the-derivative-of-general-logarithmic-functions',
      keyPoint: 'Derived using the change-of-base identity.',
      formulaSlug: 'derivative-of-general-log-formula',
      miniExample: 'ln(e)=1 simplifies to 1/x.',
    },
  ],
};
