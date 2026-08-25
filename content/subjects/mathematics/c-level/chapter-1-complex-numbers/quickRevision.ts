import type { QuickRevision } from '@/types/content';

export const chapter1CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-imaginary-unit-and-i-squared',
      keyPoint: 'i² = −1; powers of i cycle every 4.',
      formulaSlug: 'imaginary-unit-definition',
      miniExample: 'i⁷ = −i.',
    },
    {
      conceptSlug: 'complex-numbers-in-standard-form',
      keyPoint: 'z = a + bi: a is the real part, b is the imaginary part.',
      formulaSlug: 'standard-form-of-a-complex-number',
      miniExample: 'z=5−3i → Re=5, Im=−3.',
    },
    {
      conceptSlug: 'adding-and-subtracting-complex-numbers',
      keyPoint: 'Combine real parts, and imaginary parts, separately.',
      formulaSlug: 'complex-number-addition-subtraction-rule',
      miniExample: '(3+4i)+(1−6i)=4−2i.',
    },
    {
      conceptSlug: 'multiplying-complex-numbers',
      keyPoint: 'FOIL, then replace i² with −1.',
      formulaSlug: 'complex-number-multiplication-rule',
      miniExample: '(2+3i)(1−4i)=14−5i.',
    },
    {
      conceptSlug: 'dividing-complex-numbers-using-conjugates',
      keyPoint: 'Multiply top and bottom by the denominator\'s conjugate.',
      formulaSlug: 'complex-conjugate-and-division-rule',
      miniExample: '(4+2i)/(1−i)=1+3i.',
    },
    {
      conceptSlug: 'the-complex-plane-and-modulus',
      keyPoint: '|z| = √(a²+b²).',
      formulaSlug: 'modulus-of-a-complex-number-formula',
      miniExample: 'z=3+4i → |z|=5.',
    },
    {
      conceptSlug: 'the-trigonometric-form-of-a-complex-number',
      keyPoint: 'z = r(cosθ+isinθ), r=|z|, θ=arg(z).',
      formulaSlug: 'trigonometric-form-of-a-complex-number-formula',
      miniExample: 'z=3+4i → r=5, θ≈53.13°.',
    },
    {
      conceptSlug: 'de-moivres-theorem',
      keyPoint: '[r(cosθ+isinθ)]ⁿ = rⁿ(cos(nθ)+isin(nθ)).',
      formulaSlug: 'de-moivres-theorem-formula',
      miniExample: '[2(cos30°+isin30°)]³=8i.',
    },
    {
      conceptSlug: 'finding-nth-roots-of-a-complex-number',
      keyPoint: 'Every nonzero complex number has n distinct nth roots.',
      formulaSlug: 'nth-root-formula-for-complex-numbers',
      miniExample: 'Cube roots of 8: 2, −1+1.73i, −1−1.73i.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-imaginary-unit-and-i-squared',
      keyPoint: 'To simplify iⁿ, use the remainder of n÷4.',
      formulaSlug: 'imaginary-unit-definition',
      miniExample: 'i¹⁰ = i² = −1.',
    },
    {
      conceptSlug: 'complex-numbers-in-standard-form',
      keyPoint: 'Im(z) is a real number — the coefficient of i, not "bi" itself.',
      formulaSlug: 'standard-form-of-a-complex-number',
      miniExample: 'z=−7+2i → Im(z)=2.',
    },
    {
      conceptSlug: 'adding-and-subtracting-complex-numbers',
      keyPoint: 'Distribute the minus sign to both parts when subtracting.',
      formulaSlug: 'complex-number-addition-subtraction-rule',
      miniExample: '(6−3i)+(−2+5i)=4+2i.',
    },
    {
      conceptSlug: 'multiplying-complex-numbers',
      keyPoint: 'A number times its own conjugate is always real.',
      formulaSlug: 'complex-number-multiplication-rule',
      miniExample: '(1+i)(1−i)=2.',
    },
    {
      conceptSlug: 'dividing-complex-numbers-using-conjugates',
      keyPoint: '(c+di)(c−di) = c²+d², always real.',
      formulaSlug: 'complex-conjugate-and-division-rule',
      miniExample: '(3+i)/(1+i)=2−i.',
    },
    {
      conceptSlug: 'the-complex-plane-and-modulus',
      keyPoint: 'z=a+bi plots as the point (a,b); |z| is its distance from O.',
      formulaSlug: 'modulus-of-a-complex-number-formula',
      miniExample: 'z=−6+8i → |z|=10.',
    },
    {
      conceptSlug: 'the-trigonometric-form-of-a-complex-number',
      keyPoint: 'a=r cosθ, b=r sinθ — check the quadrant when finding θ.',
      formulaSlug: 'trigonometric-form-of-a-complex-number-formula',
      miniExample: 'z=6+8i → r=10.',
    },
    {
      conceptSlug: 'de-moivres-theorem',
      keyPoint: 'Comes from repeatedly applying the trig-form multiplication rule.',
      formulaSlug: 'de-moivres-theorem-formula',
      miniExample: '[3(cos40°+isin40°)]² has modulus 9.',
    },
    {
      conceptSlug: 'finding-nth-roots-of-a-complex-number',
      keyPoint: 'All n roots share modulus r^(1/n), angles spaced 360°/n apart.',
      formulaSlug: 'nth-root-formula-for-complex-numbers',
      miniExample: '4th roots of 16 all have modulus 2.',
    },
  ],
};
