import type { QuickRevision } from '@/types/content';

export const chapter10CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'antiderivatives-and-basic-integration-rules',
      keyPoint: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n≠−1); integrate term by term.',
      formulaSlug: 'basic-integration-formula',
      miniExample: '∫3x²dx = x³+C.',
    },
    {
      conceptSlug: 'integrating-exponential-and-trigonometric-functions',
      keyPoint: '∫eˣdx=eˣ+C; ∫sin(x)dx=−cos(x)+C; ∫cos(x)dx=sin(x)+C.',
      formulaSlug: 'exponential-trig-integration-formula',
      miniExample: '∫4cos(x)dx = 4sin(x)+C.',
    },
    {
      conceptSlug: 'integration-by-substitution',
      keyPoint: 'Let u=g(x) when g\'(x) also appears in the integrand.',
      formulaSlug: 'substitution-method-formula',
      miniExample: '∫2x(x²+1)³dx = (x²+1)⁴/4+C.',
    },
    {
      conceptSlug: 'integration-by-parts',
      keyPoint: '∫u dv = uv − ∫v du.',
      formulaSlug: 'integration-by-parts-formula',
      miniExample: '∫xeˣdx = xeˣ−eˣ+C.',
    },
    {
      conceptSlug: 'setting-up-a-partial-fraction-decomposition',
      keyPoint: '(px+q)/[(x−a)(x−b)] = A/(x−a) + B/(x−b).',
      formulaSlug: 'partial-fraction-decomposition-formula',
      miniExample: 'Substitute x=a and x=b to isolate A and B.',
    },
    {
      conceptSlug: 'integrating-using-partial-fractions',
      keyPoint: '∫A/(x−a) dx = A·ln|x−a| + C.',
      formulaSlug: 'partial-fraction-integration-formula',
      miniExample: '∫1/[(x−1)(x+2)]dx = (1/3)ln|x−1|−(1/3)ln|x+2|+C.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'antiderivatives-and-basic-integration-rules',
      keyPoint: 'Check any integral by differentiating the answer.',
      formulaSlug: 'basic-integration-formula',
      miniExample: '∫₀¹x²dx = 1/3.',
    },
    {
      conceptSlug: 'integrating-exponential-and-trigonometric-functions',
      keyPoint: 'Easy to swap the sign between ∫sin and ∫cos — double check.',
      formulaSlug: 'exponential-trig-integration-formula',
      miniExample: '∫2eˣ+3sin(x)dx = 2eˣ−3cos(x)+C.',
    },
    {
      conceptSlug: 'integration-by-substitution',
      keyPoint: 'Substitution reverses the Chain Rule.',
      formulaSlug: 'substitution-method-formula',
      miniExample: '∫2x·e^(x²)dx = e^(x²)+C.',
    },
    {
      conceptSlug: 'integration-by-parts',
      keyPoint: 'Comes from reversing the Product Rule; pick u to simplify under differentiation.',
      formulaSlug: 'integration-by-parts-formula',
      miniExample: '∫x cos(x)dx = x sin(x)+cos(x)+C.',
    },
    {
      conceptSlug: 'setting-up-a-partial-fraction-decomposition',
      keyPoint: 'Only applies directly to distinct linear factors.',
      formulaSlug: 'partial-fraction-decomposition-formula',
      miniExample: '1/[(x−1)(x+1)]: A=1/2, B=−1/2.',
    },
    {
      conceptSlug: 'integrating-using-partial-fractions',
      keyPoint: 'Never forget the absolute value bars inside the logarithm.',
      formulaSlug: 'partial-fraction-integration-formula',
      miniExample: '∫1/[(x−1)(x+1)]dx = (1/2)ln|x−1|−(1/2)ln|x+1|+C.',
    },
  ],
};
