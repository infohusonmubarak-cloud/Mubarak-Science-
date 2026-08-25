import type { QuickRevision } from '@/types/content';

export const chapter2BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'meaning-of-binomial-coefficients',
      keyPoint: 'ⁿCᵣ = n!/(r!(n−r)!) — ways to choose r from n.',
      formulaSlug: 'combination-formula',
      miniExample: '⁵C₂ = 10.',
    },
    {
      conceptSlug: 'the-binomial-theorem',
      keyPoint: '(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ.',
      formulaSlug: 'binomial-theorem-formula',
      miniExample: '(x+3)⁶ = x⁶+18x⁵+135x⁴+...',
    },
    {
      conceptSlug: 'the-general-term-of-a-binomial-expansion',
      keyPoint: 'T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ.',
      formulaSlug: 'general-term-formula',
      miniExample: '4th term of (x+2)⁷ → 280x⁴.',
    },
    {
      conceptSlug: 'finding-the-coefficient-of-a-specific-term',
      keyPoint: 'Set the exponent of x equal to target, solve for r.',
      formulaSlug: 'general-term-formula',
      miniExample: 'Coeff of x⁴ in (x+3)⁶ → 135.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-binomial-coefficients',
      keyPoint: 'ⁿCᵣ counts combinations; also the coefficients of (a+b)ⁿ.',
      formulaSlug: 'combination-formula',
      miniExample: '⁶C₂ = 15.',
    },
    {
      conceptSlug: 'expanding-small-binomial-powers',
      keyPoint: 'Read Pascal\'s triangle row n, pair with aⁿ⁻ʳbʳ.',
      miniExample: '(x−1)³ = x³−3x²+3x−1.',
    },
    {
      conceptSlug: 'the-binomial-theorem',
      keyPoint: 'General formula for any n — no triangle needed.',
      formulaSlug: 'binomial-theorem-formula',
      miniExample: 'Coefficient of x³ in (x+2)⁴ = ⁴C₁×2 = 8.',
    },
    {
      conceptSlug: 'the-general-term-of-a-binomial-expansion',
      keyPoint: 'For the Tth term, use r = T−1.',
      formulaSlug: 'general-term-formula',
      miniExample: '3rd term of (x+1)⁵ → 10x³.',
    },
    {
      conceptSlug: 'finding-the-coefficient-of-a-specific-term',
      keyPoint: 'Solve n−r = target power for r, then evaluate ⁿCᵣ×bʳ.',
      formulaSlug: 'general-term-formula',
      miniExample: 'Coeff of x³ in (x+2)⁵ → 40.',
    },
  ],
};
