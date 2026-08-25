import type { QuickRevision } from '@/types/content';

export const chapter4BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'arithmetic-progressions',
      keyPoint: 'aₙ = a₁ + (n−1)d.',
      formulaSlug: 'arithmetic-sequence-nth-term',
      miniExample: 'a₁=5,d=3 → a₁₀=32.',
    },
    {
      conceptSlug: 'arithmetic-series',
      keyPoint: 'Sₙ = n/2·(a₁+aₙ).',
      formulaSlug: 'arithmetic-series-sum',
      miniExample: '1+2+...+10 = 55.',
    },
    {
      conceptSlug: 'geometric-progressions',
      keyPoint: 'aₙ = a₁·rⁿ⁻¹.',
      formulaSlug: 'geometric-sequence-nth-term',
      miniExample: 'a₁=3,r=2 → a₆=96.',
    },
    {
      conceptSlug: 'geometric-series',
      keyPoint: 'Sₙ = a₁(1−rⁿ)/(1−r).',
      formulaSlug: 'geometric-series-sum',
      miniExample: 'a₁=2,r=3,n=5 → S₅=242.',
    },
    {
      conceptSlug: 'infinite-geometric-series',
      keyPoint: 'S∞ = a₁/(1−r), only if |r|<1.',
      formulaSlug: 'infinite-geometric-series-sum',
      miniExample: '8+4+2+1+... = 16.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'introduction-to-sequences-and-series',
      keyPoint: 'Sequence = list of terms. Series = sum of terms.',
      miniExample: 'aₙ=2n+1 → a₁,a₂,a₃=3,5,7, S₃=15.',
    },
    {
      conceptSlug: 'arithmetic-progressions',
      keyPoint: 'd = common difference, added each step.',
      formulaSlug: 'arithmetic-sequence-nth-term',
      miniExample: 'a₁=4,a₅=20 → d=4.',
    },
    {
      conceptSlug: 'arithmetic-series',
      keyPoint: 'Pair first+last: n/2 pairs, each summing to a₁+aₙ.',
      formulaSlug: 'arithmetic-series-sum',
      miniExample: 'a₁=3,d=5,n=20 → S₂₀=1010.',
    },
    {
      conceptSlug: 'geometric-progressions',
      keyPoint: 'r = common ratio, multiplied each step.',
      formulaSlug: 'geometric-sequence-nth-term',
      miniExample: 'a₁=2,a₄=54 → r=3.',
    },
    {
      conceptSlug: 'geometric-series',
      keyPoint: 'Proof: subtract rSₙ from Sₙ, most terms cancel.',
      formulaSlug: 'geometric-series-sum',
      miniExample: 'a₁=1,r=2,n=4 → S₄=15.',
    },
    {
      conceptSlug: 'infinite-geometric-series',
      keyPoint: 'As n→∞, rⁿ→0 when |r|<1, so Sₙ approaches a₁/(1−r).',
      formulaSlug: 'infinite-geometric-series-sum',
      miniExample: '0.333... = 1/3 via a₁=0.3,r=0.1.',
    },
  ],
};
