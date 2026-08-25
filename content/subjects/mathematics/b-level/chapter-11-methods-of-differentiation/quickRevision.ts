import type { QuickRevision } from '@/types/content';

export const chapter11BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-idea-of-a-limit',
      keyPoint: 'lim(x→a) f(x) = L: f(x) gets closer to L as x gets closer to a.',
      miniExample: '(x²−1)/(x−1) → limit 2 as x→1.',
    },
    {
      conceptSlug: 'evaluating-limits-by-direct-substitution-and-factoring',
      keyPoint: 'Try substitution first; if 0/0, factor and cancel, then substitute again.',
      miniExample: '(x²−4)/(x−2) → limit 4 as x→2.',
    },
    {
      conceptSlug: 'the-derivative-as-a-rate-of-change',
      keyPoint: 'Average rate = secant slope; instantaneous rate = tangent slope.',
      formulaSlug: 'average-rate-of-change-formula',
      miniExample: 'h(t)=t², t=0 to 2 → average rate 2.',
    },
    {
      conceptSlug: 'the-derivative-as-the-limit-of-the-difference-quotient',
      keyPoint: "f'(x) = lim(h→0) [f(x+h)−f(x)]/h.",
      formulaSlug: 'derivative-definition',
      miniExample: 'f(x)=x² → f\'(x)=2x.',
    },
    {
      conceptSlug: 'the-power-rule',
      keyPoint: 'd/dx[x^n] = n·x^(n−1).',
      formulaSlug: 'power-rule-formula',
      miniExample: 'x⁵ → 5x⁴.',
    },
    {
      conceptSlug: 'the-sum-and-difference-rules',
      keyPoint: 'Differentiate a polynomial term by term.',
      formulaSlug: 'sum-difference-rule-formula',
      miniExample: '3x²+5x−7 → 6x+5.',
    },
    {
      conceptSlug: 'the-product-rule',
      keyPoint: "(f·g)' = f'g + fg'.",
      formulaSlug: 'product-rule-formula',
      miniExample: 'x²(x+3) → 3x²+6x.',
    },
    {
      conceptSlug: 'the-quotient-rule',
      keyPoint: "(f/g)' = (f'g − fg')/g².",
      formulaSlug: 'quotient-rule-formula',
      miniExample: 'x²/(x+1) → (x²+2x)/(x+1)².',
    },
    {
      conceptSlug: 'the-chain-rule',
      keyPoint: 'Differentiate outer, then multiply by derivative of inner.',
      formulaSlug: 'chain-rule-formula',
      miniExample: '(x−2)² → 2(x−2).',
    },
    {
      conceptSlug: 'implicit-differentiation',
      keyPoint: 'Differentiate both sides; every y-term gets an extra dy/dx.',
      formulaSlug: 'implicit-differentiation-technique',
      miniExample: 'x²+y²=25 at (3,4) → dy/dx=−3/4.',
    },
    {
      conceptSlug: 'applications-of-implicit-differentiation',
      keyPoint: 'A mixed xy term needs the Product Rule.',
      formulaSlug: 'implicit-differentiation-technique',
      miniExample: 'x²+xy+y²=7 at (1,2) → dy/dx=−4/5.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-idea-of-a-limit',
      keyPoint: 'A limit can exist even where the function itself is undefined.',
      miniExample: '(x²−9)/(x−3) → limit 6 as x→3.',
    },
    {
      conceptSlug: 'evaluating-limits-by-direct-substitution-and-factoring',
      keyPoint: '0/0 means "try again," not "undefined" — factor first.',
      miniExample: '(x²−25)/(x−5) → limit 10 as x→5.',
    },
    {
      conceptSlug: 'the-derivative-as-a-rate-of-change',
      keyPoint: 'Shrinking the secant interval to a point turns it into the tangent.',
      formulaSlug: 'average-rate-of-change-formula',
      miniExample: 'f(x)=x², x=1 to 4 → average rate 5.',
    },
    {
      conceptSlug: 'the-derivative-as-the-limit-of-the-difference-quotient',
      keyPoint: 'Simplify (factor out h) before substituting h=0.',
      formulaSlug: 'derivative-definition',
      miniExample: "f(x)=x² → f'(5)=10.",
    },
    {
      conceptSlug: 'the-power-rule',
      keyPoint: 'Comes from expanding (x+h)^n with the Binomial Theorem.',
      formulaSlug: 'power-rule-formula',
      miniExample: "4x³ → f'(2)=48.",
    },
    {
      conceptSlug: 'the-sum-and-difference-rules',
      keyPoint: 'Follows from the limit of a sum = sum of the limits.',
      formulaSlug: 'sum-difference-rule-formula',
      miniExample: "2x³−4x+9 → f'(1)=2.",
    },
    {
      conceptSlug: 'the-product-rule',
      keyPoint: 'Never just multiply the two derivatives together.',
      formulaSlug: 'product-rule-formula',
      miniExample: "x(x+2) → f'(3)=8.",
    },
    {
      conceptSlug: 'the-quotient-rule',
      keyPoint: 'Derivable from the Product Rule applied to f·g⁻¹.',
      formulaSlug: 'quotient-rule-formula',
      miniExample: "x/(x+2) → f'(0)=0.5.",
    },
    {
      conceptSlug: 'the-chain-rule',
      keyPoint: 'dy/dx = (dy/du)·(du/dx).',
      formulaSlug: 'chain-rule-formula',
      miniExample: "(2x−1)³ → f'(1)=6.",
    },
    {
      conceptSlug: 'implicit-differentiation',
      keyPoint: 'Needed whenever y cannot be isolated as y=f(x).',
      formulaSlug: 'implicit-differentiation-technique',
      miniExample: 'x²+y²=25 at (0,5) → dy/dx=0.',
    },
    {
      conceptSlug: 'applications-of-implicit-differentiation',
      keyPoint: 'Combines the Power, Product, and Chain Rules in one problem.',
      formulaSlug: 'implicit-differentiation-technique',
      miniExample: 'x²+xy+y²=7 at (2,1) → dy/dx=−1.25.',
    },
  ],
};
