import type { QuickRevision } from '@/types/content';

export const chapter3BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-cubic-function',
      keyPoint: 'y=x³: S-shaped, passes through origin, odd function.',
      formulaSlug: 'cubic-function-form',
      miniExample: 'x=3 → y=27.',
    },
    {
      conceptSlug: 'the-reciprocal-function',
      keyPoint: 'y=a/x: two branches, asymptotes at both axes.',
      formulaSlug: 'reciprocal-function-form',
      miniExample: 'y=6/x, x=3 → y=2.',
    },
    {
      conceptSlug: 'the-exponential-function',
      keyPoint: 'y=a·bˣ: growth if b>1, decay if 0<b<1, asymptote y=0.',
      formulaSlug: 'exponential-function-form',
      miniExample: 'y=3·2ˣ, x=4 → y=48.',
    },
    {
      conceptSlug: 'translations-of-functions',
      keyPoint: 'y=f(x−h)+k: shift h horizontally, k vertically.',
      formulaSlug: 'translation-formula',
      miniExample: '4 left, 5 down → y=(x+4)²−5.',
    },
    {
      conceptSlug: 'stretches-and-compressions-of-functions',
      keyPoint: 'y=a·f(x): vertical scale. y=f(bx): horizontal, inverted.',
      formulaSlug: 'stretch-compression-formula',
      miniExample: 'f(2x) compresses horizontally.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-elementary-function-family',
      keyPoint: 'Recognize linear, quadratic, cubic, reciprocal, sqrt, exponential shapes.',
      miniExample: 'y=5/x → reciprocal family.',
    },
    {
      conceptSlug: 'the-cubic-function',
      keyPoint: 'y=x³ is an odd function: f(−x)=−f(x).',
      formulaSlug: 'cubic-function-form',
      miniExample: 'x=−2 → y=−8.',
    },
    {
      conceptSlug: 'the-reciprocal-function',
      keyPoint: 'Undefined at x=0; models inverse proportion.',
      formulaSlug: 'reciprocal-function-form',
      miniExample: 'Speed and time for fixed distance.',
    },
    {
      conceptSlug: 'the-square-root-function',
      keyPoint: 'y=a√(x−h)+k; domain x≥h.',
      formulaSlug: 'square-root-function-form',
      miniExample: '√(x−3), x=12 → y=3, domain x≥3.',
    },
    {
      conceptSlug: 'the-exponential-function',
      keyPoint: 'y-intercept is always a, since bˣ=1 at x=0.',
      formulaSlug: 'exponential-function-form',
      miniExample: 'y=5·2ˣ, x=0 → y=5.',
    },
    {
      conceptSlug: 'translations-of-functions',
      keyPoint: '(x−h) shifts right; (x+h) shifts left — feels backwards.',
      formulaSlug: 'translation-formula',
      miniExample: '3 right, 2 up on √x → √(x−3)+2.',
    },
    {
      conceptSlug: 'reflections-of-functions',
      keyPoint: 'y=−f(x): flip over x-axis. y=f(−x): flip over y-axis.',
      formulaSlug: 'reflection-formula',
      miniExample: 'x³ reflected over y-axis → −x³.',
    },
    {
      conceptSlug: 'stretches-and-compressions-of-functions',
      keyPoint: 'Horizontal scaling is inverted: |b|>1 compresses.',
      formulaSlug: 'stretch-compression-formula',
      miniExample: '(4,5) on f(x) → (2,5) on f(2x).',
    },
    {
      conceptSlug: 'combining-transformations',
      keyPoint: 'y=a·f(b(x−h))+k: identify a,b,h,k separately.',
      formulaSlug: 'translation-formula',
      miniExample: '−2(x+1)²+4: left 1, stretch×2, flip, up 4.',
    },
  ],
};
