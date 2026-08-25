import type { QuickRevision } from '@/types/content';

export const chapter6QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'graphing-y-equals-abs-x-minus-h-plus-k',
      keyPoint: 'y = |x−h|+k: upward V, vertex (h,k).',
      formulaSlug: 'vertex-form-of-absolute-value-function',
      miniExample: 'y=|x−3|+2 → vertex (3,2).',
    },
    {
      conceptSlug: 'effect-of-a-on-the-absolute-value-graph',
      keyPoint: 'Sign of a: direction. |a|: narrowness.',
      miniExample: 'y=4|x| is narrower than y=|x|.',
    },
    {
      conceptSlug: 'solving-absolute-value-equations',
      keyPoint: '|x−p|=q → x=p+q or x=p−q (q≥0).',
      formulaSlug: 'absolute-value-equation-solution',
      miniExample: '|x−3|=5 → x=8 or x=−2.',
    },
    {
      conceptSlug: 'solving-absolute-value-inequalities',
      keyPoint: '|x−p|<q: one interval. |x−p|>q: two intervals.',
      formulaSlug: 'absolute-value-inequality-rules',
      miniExample: '|x−3|<5 → −2<x<8.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'graphing-y-equals-abs-x-minus-h-plus-k',
      keyPoint: 'y=|x−h|+k opens upward, vertex (h,k), symmetric about x=h.',
      formulaSlug: 'vertex-form-of-absolute-value-function',
      miniExample: 'y=|x+4|−1 → vertex (−4,−1).',
    },
    {
      conceptSlug: 'graphing-y-equals-negative-abs-x-minus-h-plus-k',
      keyPoint: 'y=−|x−h|+k opens downward, vertex is a maximum.',
      formulaSlug: 'vertex-form-of-absolute-value-function',
      miniExample: 'y=−|x−5|+4 → vertex (5,4), a maximum.',
    },
    {
      conceptSlug: 'effect-of-a-on-the-absolute-value-graph',
      keyPoint: 'Sign of a sets direction; |a| sets narrowness. Vertex of y=a|x| stays at (0,0).',
      miniExample: 'y=−0.3|x| opens down, wider than y=|x|.',
    },
    {
      conceptSlug: 'graphing-y-equals-a-abs-x-minus-h-plus-k',
      keyPoint: 'y=a|x−h|+k combines all transformations: vertex (h,k), direction/width from a.',
      formulaSlug: 'vertex-form-of-absolute-value-function',
      miniExample: 'y=−3|x−4|+2 → vertex (4,2), a maximum.',
    },
    {
      conceptSlug: 'solving-absolute-value-equations',
      keyPoint: '|x−p|=q splits into x−p=q or x−p=−q, when q≥0.',
      formulaSlug: 'absolute-value-equation-solution',
      miniExample: '|x+2|=7 → x=5 or x=−9.',
    },
    {
      conceptSlug: 'solving-absolute-value-inequalities',
      keyPoint: '"Less than" → one band. "Greater than" → two rays.',
      formulaSlug: 'absolute-value-inequality-rules',
      miniExample: '|x+1|>4 → x<−5 or x>3.',
    },
  ],
};
