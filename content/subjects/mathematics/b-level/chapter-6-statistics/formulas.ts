import type { Formula } from '@/types/content';

export const chapter6BFormulas: Record<string, Formula> = {
  'range-and-iqr-formula': {
    slug: 'range-and-iqr-formula',
    name: 'Range and Interquartile Range',
    expression: 'Range = maximum − minimum.     IQR = Q₃ − Q₁',
    meaning: 'Two simple measures of how spread out a dataset is. The range uses only the two extreme values; the interquartile range (IQR) uses the middle 50% of the data, making it far less sensitive to outliers.',
    variables: [
      { symbol: 'Q₁', meaning: 'the first quartile — the value 25% of the way through the ordered data' },
      { symbol: 'Q₃', meaning: 'the third quartile — the value 75% of the way through the ordered data' },
    ],
    whenToUse: 'Whenever you need a quick measure of spread — the range for a rough idea, the IQR for a measure resistant to extreme outliers.',
    relatedConceptSlugs: ['range-and-interquartile-range'],
  },
  'variance-standard-deviation-formula': {
    slug: 'variance-standard-deviation-formula',
    name: 'Variance and Standard Deviation',
    expression: 'Variance:  σ² = Σ(x − x̄)² / n.     Standard deviation:  σ = √(σ²)',
    meaning: 'Measures how far, on average, the data values are spread from the mean — variance is the average of the squared deviations; standard deviation is its square root, bringing the units back in line with the original data.',
    variables: [
      { symbol: 'x', meaning: 'each individual data value' },
      { symbol: 'x̄', meaning: 'the mean of the dataset' },
      { symbol: 'n', meaning: 'the number of data values' },
      { symbol: 'σ (sigma)', meaning: 'the standard deviation' },
    ],
    whenToUse: 'Whenever you need the standard, most widely-used measure of how spread out a dataset is around its mean.',
    relatedConceptSlugs: ['variance-and-standard-deviation'],
  },
  'correlation-coefficient-formula': {
    slug: 'correlation-coefficient-formula',
    name: "Pearson's Correlation Coefficient",
    expression: 'r = Σ(x − x̄)(y − ȳ) / √[Σ(x − x̄)² · Σ(y − ȳ)²]',
    meaning: 'A single number, always between −1 and 1, that measures both the strength and direction of the linear relationship between two variables.',
    variables: [
      { symbol: 'r', meaning: 'the correlation coefficient' },
      { symbol: 'x, y', meaning: 'the paired data values for each variable' },
      { symbol: 'x̄, ȳ', meaning: 'the means of the x-values and y-values respectively' },
    ],
    whenToUse: 'Whenever you need a precise numerical measure of how strongly two variables are linearly related, beyond just a visual scatter diagram impression.',
    relatedConceptSlugs: ['the-correlation-coefficient'],
  },
};
