import type { QuickRevision } from '@/types/content';

export const chapter6BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'range-and-interquartile-range',
      keyPoint: 'Range = max−min. IQR = Q₃−Q₁ (robust to outliers).',
      formulaSlug: 'range-and-iqr-formula',
      miniExample: '4..30 dataset → range=26, IQR=15.',
    },
    {
      conceptSlug: 'variance-and-standard-deviation',
      keyPoint: 'σ² = Σ(x−x̄)²/n. σ = √σ².',
      formulaSlug: 'variance-standard-deviation-formula',
      miniExample: '2,4,6,8 → σ²=5, σ≈2.24.',
    },
    {
      conceptSlug: 'cumulative-frequency-tables-and-the-ogive',
      keyPoint: 'Running total, plotted at UPPER class boundary.',
      miniExample: 'Boundaries 10-50 → cumulative 5,18,35,45,50.',
    },
    {
      conceptSlug: 'the-correlation-coefficient',
      keyPoint: 'r ∈ [−1,1]. Sign=direction, |r|=strength.',
      formulaSlug: 'correlation-coefficient-formula',
      miniExample: 'r=−0.85 → strong negative correlation.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'range-and-interquartile-range',
      keyPoint: 'Q₁=median of lower half; Q₃=median of upper half.',
      formulaSlug: 'range-and-iqr-formula',
      miniExample: '12,5,19,8,23,3 → range=20.',
    },
    {
      conceptSlug: 'variance-and-standard-deviation',
      keyPoint: 'Square deviations first — raw deviations always sum to 0.',
      formulaSlug: 'variance-standard-deviation-formula',
      miniExample: '1,3,5,7,9 → variance=8.',
    },
    {
      conceptSlug: 'cumulative-frequency-tables-and-the-ogive',
      keyPoint: 'Joining cumulative points gives an S-shaped ogive.',
      miniExample: '0-5(3),5-10(7) → cumulative at 10 is 10.',
    },
    {
      conceptSlug: 'reading-the-median-and-quartiles-from-an-ogive',
      keyPoint: 'Median: read at n/2. Q₁: n/4. Q₃: 3n/4.',
      miniExample: 'n=50 → median at cumulative freq 25 ≈ x=24.1.',
    },
    {
      conceptSlug: 'scatter-diagrams-and-correlation',
      keyPoint: 'Upward trend = positive; downward = negative; no pattern = none.',
      miniExample: 'Car age up, resale value down → negative correlation.',
    },
    {
      conceptSlug: 'the-correlation-coefficient',
      keyPoint: 'Numerator sign shows direction; whole ratio bounded to [−1,1].',
      formulaSlug: 'correlation-coefficient-formula',
      miniExample: '|−0.95| is stronger than |0.4|.',
    },
  ],
};
