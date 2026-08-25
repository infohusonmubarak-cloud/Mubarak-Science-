import type { QuickRevision } from '@/types/content';

export const chapter2CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-principle-of-mathematical-induction',
      keyPoint: 'Base case + inductive step (P(k) true ⟹ P(k+1) true) ⟹ P(n) true for all n.',
      formulaSlug: 'principle-of-mathematical-induction-statement',
      miniExample: 'Domino analogy: first domino falls, each knocks the next.',
    },
    {
      conceptSlug: 'proving-summation-formulas-by-induction',
      keyPoint: 'Add the (k+1)th term to both sides, then simplify with algebra.',
      formulaSlug: 'sum-of-first-n-integers-formula',
      miniExample: '1+2+...+10 = 55.',
    },
    {
      conceptSlug: 'proving-divisibility-statements-by-induction',
      keyPoint: 'Assume f(k)=d·m, rewrite f(k+1) in terms of f(k), then factor out d.',
      formulaSlug: 'divisibility-induction-technique',
      miniExample: '3ⁿ−1 divisible by 2 for all n≥1.',
    },
    {
      conceptSlug: 'proving-inequalities-by-induction',
      keyPoint: 'Base case can start anywhere; multiply by positives to preserve inequalities.',
      formulaSlug: 'inequality-induction-technique',
      miniExample: 'n! > 2ⁿ for all n≥4.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-principle-of-mathematical-induction',
      keyPoint: 'Both steps are required — skipping either invalidates the proof.',
      formulaSlug: 'principle-of-mathematical-induction-statement',
      miniExample: 'n < 2ⁿ for all n≥1.',
    },
    {
      conceptSlug: 'proving-summation-formulas-by-induction',
      keyPoint: 'The inductive step must explicitly connect back to the inductive hypothesis.',
      formulaSlug: 'sum-of-first-n-integers-formula',
      miniExample: 'k(k+1)/2 + (k+1) = (k+1)(k+2)/2.',
    },
    {
      conceptSlug: 'proving-divisibility-statements-by-induction',
      keyPoint: 'Rewriting f(k+1) in terms of f(k) is the essential algebraic move.',
      formulaSlug: 'divisibility-induction-technique',
      miniExample: '5¹−1=4, divisible by 4.',
    },
    {
      conceptSlug: 'proving-inequalities-by-induction',
      keyPoint: 'Compare growth rates (e.g. factorial vs exponential) using induction.',
      formulaSlug: 'inequality-induction-technique',
      miniExample: '7! = 5040 > 3⁷ = 2187.',
    },
  ],
};
