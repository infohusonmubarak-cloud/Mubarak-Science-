import type { QuickRevision } from '@/types/content';

export const chapter7CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-graph-of-sine',
      keyPoint: 'y=sinx: range [−1,1], period 2π, passes through origin.',
      formulaSlug: 'sine-function-properties-formula',
      miniExample: 'sin(π/6)=sin(5π/6)=0.5.',
    },
    {
      conceptSlug: 'the-graph-of-cosine',
      keyPoint: 'y=cosx: same shape as sine, starts at max (1) at x=0.',
      formulaSlug: 'cosine-function-properties-formula',
      miniExample: 'cos(0)=1, cos(π)=−1.',
    },
    {
      conceptSlug: 'the-graph-of-tangent',
      keyPoint: 'Asymptotes at π/2+kπ; period π.',
      formulaSlug: 'tangent-function-properties-formula',
      miniExample: 'tan(π/4)=1.',
    },
    {
      conceptSlug: 'graphs-of-cosecant-secant-and-cotangent',
      keyPoint: 'csc=1/sin, sec=1/cos, cot=1/tan.',
      formulaSlug: 'reciprocal-trig-functions-formula',
      miniExample: 'sec(0)=1; csc(0) undefined.',
    },
    {
      conceptSlug: 'amplitude-period-and-phase-shift',
      keyPoint: 'y=A sin(B(x−C))+D: amplitude|A|, period 2π/B.',
      formulaSlug: 'general-sine-transformation-formula',
      miniExample: '3sin(2(x−π/4)) → amp 3, period π.',
    },
    {
      conceptSlug: 'reflections-and-vertical-shifts-of-trig-graphs',
      keyPoint: 'Negative sign reflects; +D shifts vertically.',
      formulaSlug: 'reflection-vertical-shift-formula',
      miniExample: '−sin(x)+4 has max 5.',
    },
    {
      conceptSlug: 'the-inverse-sine-function-and-its-graph',
      keyPoint: 'arcsin(x): range [−π/2,π/2].',
      formulaSlug: 'inverse-sine-formula',
      miniExample: 'arcsin(0.5)=π/6.',
    },
    {
      conceptSlug: 'the-inverse-cosine-and-inverse-tangent-functions',
      keyPoint: 'arccos range [0,π]; arctan range (−π/2,π/2).',
      formulaSlug: 'inverse-cosine-tangent-formula',
      miniExample: 'arccos(0.5)=60°; arctan(1)=45°.',
    },
    {
      conceptSlug: 'derivatives-of-sine-and-cosine',
      keyPoint: 'd/dx[sinx]=cosx; d/dx[cosx]=−sinx.',
      formulaSlug: 'derivative-of-sine-cosine-formula',
      miniExample: 'f=sinx+cosx → f\'(0)=1.',
    },
    {
      conceptSlug: 'derivatives-of-tangent-and-other-trig-functions',
      keyPoint: 'd/dx[tanx]=sec²x.',
      formulaSlug: 'derivative-of-tangent-and-others-formula',
      miniExample: 'tan\'(0)=1.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-graph-of-sine',
      keyPoint: 'sin(π−θ)=sin(θ), a reflection symmetry.',
      formulaSlug: 'sine-function-properties-formula',
      miniExample: 'sin(π/2)=1.',
    },
    {
      conceptSlug: 'the-graph-of-cosine',
      keyPoint: 'The (1,0) point on the unit circle at x=0 gives cosine\'s max.',
      formulaSlug: 'cosine-function-properties-formula',
      miniExample: 'cos(π/3)=0.5.',
    },
    {
      conceptSlug: 'the-graph-of-tangent',
      keyPoint: 'tan(x)=sin(x)/cos(x); undefined when cos(x)=0.',
      formulaSlug: 'tangent-function-properties-formula',
      miniExample: 'tan(0)=0.',
    },
    {
      conceptSlug: 'graphs-of-cosecant-secant-and-cotangent',
      keyPoint: 'Each reciprocal function is undefined where its partner is zero.',
      formulaSlug: 'reciprocal-trig-functions-formula',
      miniExample: 'cot(π/4)=1.',
    },
    {
      conceptSlug: 'amplitude-period-and-phase-shift',
      keyPoint: 'Larger B compresses the graph (shorter period).',
      formulaSlug: 'general-sine-transformation-formula',
      miniExample: '5sin(x) has amplitude 5.',
    },
    {
      conceptSlug: 'reflections-and-vertical-shifts-of-trig-graphs',
      keyPoint: 'Reflect first, then shift, matching the written order.',
      formulaSlug: 'reflection-vertical-shift-formula',
      miniExample: '−cos(x)+2 → range [1,3].',
    },
    {
      conceptSlug: 'the-inverse-sine-function-and-its-graph',
      keyPoint: 'The restricted range makes arcsin a genuine function.',
      formulaSlug: 'inverse-sine-formula',
      miniExample: 'arcsin(1)=90°.',
    },
    {
      conceptSlug: 'the-inverse-cosine-and-inverse-tangent-functions',
      keyPoint: 'Each inverse function has its OWN restricted range.',
      formulaSlug: 'inverse-cosine-tangent-formula',
      miniExample: 'arccos(0)=90°.',
    },
    {
      conceptSlug: 'derivatives-of-sine-and-cosine',
      keyPoint: 'Near x=0, sin(x) is nearly indistinguishable from y=x.',
      formulaSlug: 'derivative-of-sine-cosine-formula',
      miniExample: 'f=3sinx−2cosx → f\'=3cosx+2sinx.',
    },
    {
      conceptSlug: 'derivatives-of-tangent-and-other-trig-functions',
      keyPoint: 'All four derived from sin/cos derivatives via the Quotient Rule.',
      formulaSlug: 'derivative-of-tangent-and-others-formula',
      miniExample: 'sec\'(0)=0.',
    },
  ],
};
