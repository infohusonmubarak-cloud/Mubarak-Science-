import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 6 — Statistics. Matches sections
// 6.1-6.3 of the textbook exactly.
export const chapter6BConcepts: Record<string, Concept> = {
  'range-and-interquartile-range': {
    slug: 'range-and-interquartile-range',
    title: 'Range and Interquartile Range',
    difficulty: 'medium',
    simpleExplanation:
      'The range is the simplest measure of spread: the highest value minus the lowest. The ' +
      'interquartile range (IQR) is more robust: it measures the spread of just the middle 50% of ' +
      'the data, Q₃ − Q₁, ignoring extreme values at either end.',
    whyItMatters:
      'A single extreme outlier can massively distort the range, but barely affects the IQR — ' +
      'knowing both, and when each is more appropriate, is essential for honestly describing a dataset\'s spread.',
    formulaSlug: 'range-and-iqr-formula',
    workedExample: {
      id: 'range-iqr-worked-1',
      title: 'Find the range and IQR of a dataset',
      problemStatement: 'Find the range and IQR of: 4, 7, 9, 12, 15, 18, 21, 25, 30.',
      steps: [
        { step: 1, instruction: 'Find the range.', math: 'Range = 30 − 4 = 26', explanation: 'Maximum minus minimum.' },
        { step: 2, instruction: 'Find Q₁ (the median of the lower half: 4,7,9,12).', math: 'Q₁ = (7+9)/2 = 8', explanation: 'Average the two middle values of the lower half.' },
        { step: 3, instruction: 'Find Q₃ (the median of the upper half: 18,21,25,30).', math: 'Q₃ = (21+25)/2 = 23', explanation: 'Average the two middle values of the upper half.' },
        { step: 4, instruction: 'Compute the IQR.', math: 'IQR = 23 − 8 = 15', explanation: 'Q₃ minus Q₁.' },
      ],
      finalAnswer: 'Range = 26, IQR = 15',
    },
    whyItWorks:
      'The range only looks at the two most extreme values, so a single unusually high or low ' +
      'value dominates it entirely — the IQR instead brackets the "typical" middle half of the ' +
      'data, so a handful of extreme outliers barely move Q₁ or Q₃ at all.',
    realLifeExample: {
      title: 'Comparing household income spread',
      scenario: 'A city\'s household incomes include a small number of extremely high earners alongside a large middle-income group.',
      explanation: 'The range would be dominated by the highest earner, but the IQR gives a much more honest picture of the spread among typical households.',
    },
    practiceQuestions: [
      {
        id: 'range-iqr-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the range of: 12, 5, 19, 8, 23, 3.',
        hints: ['Max − min.'],
        correctAnswer: 20,
        explanation: '23 − 3 = 20.',
      },
    ],
    commonMistake:
      'Computing the IQR using the overall median as one of the boundaries instead of properly ' +
      'splitting the data into lower and upper halves first — always find Q₁ and Q₃ from each half separately.',
    quickReview: [
      'Range = max − min. Simple, but sensitive to outliers.',
      'IQR = Q₃ − Q₁. More robust, describing the middle 50% of the data.',
      'Q₁ = median of the lower half; Q₃ = median of the upper half.',
    ],
  },

  'variance-and-standard-deviation': {
    slug: 'variance-and-standard-deviation',
    title: 'Variance and Standard Deviation',
    difficulty: 'hard',
    simpleExplanation:
      'Variance and standard deviation measure how far, on average, data values spread out from ' +
      'the mean. Variance, σ², averages the SQUARED distance of each value from the mean; standard ' +
      'deviation, σ, is the square root of variance, bringing the measurement back into the original units.',
    whyItMatters:
      'Standard deviation is the single most widely-used measure of spread in statistics — it uses ' +
      'every data value (unlike the range or IQR), giving the most complete picture of variability.',
    formulaSlug: 'variance-standard-deviation-formula',
    workedExample: {
      id: 'variance-worked-1',
      title: 'Find the standard deviation of a small dataset',
      problemStatement: 'Find the standard deviation of: 2, 4, 6, 8.',
      steps: [
        { step: 1, instruction: 'Find the mean.', math: 'x̄ = (2+4+6+8)/4 = 20/4 = 5', explanation: 'Average the values.' },
        { step: 2, instruction: 'Find each deviation from the mean and square it.', math: '(2−5)²=9,  (4−5)²=1,  (6−5)²=1,  (8−5)²=9', explanation: 'Subtract the mean, then square, for each value.' },
        { step: 3, instruction: 'Average the squared deviations to get the variance.', math: 'σ² = (9+1+1+9)/4 = 20/4 = 5', explanation: 'This is the variance.' },
        { step: 4, instruction: 'Take the square root to get the standard deviation.', math: 'σ = √5 ≈ 2.24', explanation: 'Square root of the variance.' },
      ],
      finalAnswer: 'σ² = 5, σ ≈ 2.24',
    },
    whyItWorks:
      'Squaring each deviation before averaging is necessary because the deviations from the mean ' +
      'always sum to exactly zero (positive and negative deviations cancel) — squaring makes every ' +
      'deviation positive first, so the average genuinely measures spread instead of always giving zero. Taking the final square root undoes the earlier squaring, restoring the original units.',
    realLifeExample: {
      title: 'Comparing consistency of two athletes\' race times',
      scenario: 'Two runners have the same average race time, but one\'s times vary much more from race to race than the other\'s.',
      explanation: 'The runner with the smaller standard deviation is more consistent — standard deviation directly quantifies that consistency, something the mean alone cannot show.',
    },
    practiceQuestions: [
      {
        id: 'variance-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the variance of: 1, 3, 5, 7, 9. (Mean = 5.)',
        hints: ['Deviations: −4,−2,0,2,4. Squares: 16,4,0,4,16.', 'Average the squares.'],
        correctAnswer: 8,
        explanation: '(16+4+0+4+16)/5 = 40/5 = 8.',
      },
    ],
    commonMistake:
      'Forgetting to square the deviations before averaging — averaging the raw (unsquared) ' +
      'deviations from the mean always gives exactly 0, since they cancel by definition.',
    quickReview: [
      'σ² = Σ(x−x̄)²/n (variance); σ = √(σ²) (standard deviation).',
      'Squaring prevents positive and negative deviations from cancelling to zero.',
      'A smaller standard deviation means data is more tightly clustered around the mean.',
    ],
  },

  'cumulative-frequency-tables-and-the-ogive': {
    slug: 'cumulative-frequency-tables-and-the-ogive',
    title: 'Cumulative Frequency Tables and the Ogive',
    difficulty: 'medium',
    simpleExplanation:
      'A cumulative frequency table runs a "running total" of frequencies up to each class boundary ' +
      '— each row shows how many data values fall AT OR BELOW that point. Plotting these cumulative ' +
      'totals against the upper class boundaries and joining the points produces a smooth, S-shaped curve called an ogive.',
    whyItMatters:
      'The ogive turns a table of numbers into a visual tool for instantly estimating what ' +
      'proportion of the data falls below any given value — the foundation for reading off medians and quartiles.',
    diagram: {
      id: 'ogive-diagram',
      title: 'A cumulative frequency curve (ogive)',
      altText: 'An S-shaped cumulative frequency curve rising from 0 to the total frequency as the class boundary increases',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: '0' },
          { x: 10, y: 5 },
          { x: 20, y: 18 },
          { x: 30, y: 35 },
          { x: 40, y: 45 },
          { x: 50, y: 50, label: '50' },
        ],
        segments: [
          { from: [0, 0], to: [10, 5] },
          { from: [10, 5], to: [20, 18] },
          { from: [20, 18], to: [30, 35] },
          { from: [30, 35], to: [40, 45] },
          { from: [40, 45], to: [50, 50] },
        ],
      },
    },
    workedExample: {
      id: 'ogive-worked-1',
      title: 'Build a cumulative frequency table',
      problemStatement: 'Test scores fall into classes: 0-10 (5 students), 10-20 (13), 20-30 (17), 30-40 (10), 40-50 (5). Build the cumulative frequency table.',
      steps: [
        { step: 1, instruction: 'List the running total up to each upper boundary.', math: 'Up to 10: 5', explanation: 'Just the first class\'s frequency.' },
        { step: 2, instruction: 'Add each new class\'s frequency to the running total.', math: 'Up to 20: 5+13=18;  Up to 30: 18+17=35;  Up to 40: 35+10=45;  Up to 50: 45+5=50', explanation: 'Each cumulative value adds the next class\'s frequency.' },
      ],
      finalAnswer: 'Cumulative frequencies: 5, 18, 35, 45, 50 (at boundaries 10, 20, 30, 40, 50)',
    },
    whyItWorks:
      'Since each cumulative total already includes every value below it, plotting these totals ' +
      'against the upper boundary and connecting them traces exactly how the proportion of data ' +
      '"below this point" grows as the boundary increases — always rising (or staying flat), which is why the curve always has this characteristic S-shape.',
    realLifeExample: {
      title: 'Estimating what percentage of runners finished under a given time',
      scenario: 'A race organizer wants to quickly estimate what fraction of runners finished within any given time, from grouped finishing-time data.',
      explanation: 'Plotting an ogive of finishing times lets them read that percentage directly from the graph, for any time value, without recomputing from the raw table.',
    },
    practiceQuestions: [
      {
        id: 'ogive-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Classes 0-5 (3), 5-10 (7), 10-15 (4) have what cumulative frequency at the boundary 10?',
        hints: ['Add the first two class frequencies: 3+7.'],
        correctAnswer: 10,
        explanation: '3+7 = 10 (the third class, 10-15, is not yet included at boundary 10).',
      },
    ],
    commonMistake:
      'Plotting the cumulative frequency against the LOWER class boundary instead of the UPPER ' +
      'boundary — a cumulative total "up to 20" must be plotted at x=20, not at the class\'s starting value.',
    quickReview: [
      'Cumulative frequency = running total of frequencies up to each class.',
      'Plot cumulative frequency against the UPPER class boundary.',
      'Joining the points gives an S-shaped ogive curve.',
    ],
  },

  'reading-the-median-and-quartiles-from-an-ogive': {
    slug: 'reading-the-median-and-quartiles-from-an-ogive',
    title: 'Reading the Median and Quartiles from an Ogive',
    difficulty: 'medium',
    simpleExplanation:
      'To estimate the median from an ogive, find n/2 on the cumulative frequency axis, draw a ' +
      'horizontal line to the curve, then a vertical line down to the data axis — that x-value is the ' +
      'estimated median. Q₁ and Q₃ are found the same way, using n/4 and 3n/4 instead.',
    whyItMatters:
      'This gives a fast visual estimate of the median and quartiles directly from grouped data, ' +
      'without needing the individual raw data values.',
    diagram: {
      id: 'ogive-median-diagram',
      title: 'Reading the median from an ogive (n=50, so read at 25)',
      altText: 'The same cumulative frequency curve, with dashed lines showing how to read the median at cumulative frequency 25',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 5 },
          { x: 20, y: 18 },
          { x: 30, y: 35 },
          { x: 40, y: 45 },
          { x: 50, y: 50 },
          { x: 24, y: 25, label: 'Median ≈ 24', labelDx: 14, labelDy: -6 },
        ],
        segments: [
          { from: [0, 0], to: [10, 5] },
          { from: [10, 5], to: [20, 18] },
          { from: [20, 18], to: [30, 35] },
          { from: [30, 35], to: [40, 45] },
          { from: [40, 45], to: [50, 50] },
          { from: [0, 25], to: [24, 25], dashed: true },
          { from: [24, 25], to: [24, 0], dashed: true },
        ],
      },
    },
    workedExample: {
      id: 'ogive-median-worked-1',
      title: 'Estimate the median from cumulative frequencies',
      problemStatement: 'Using the cumulative frequency table (boundaries 10,20,30,40,50 → cumulative 5,18,35,45,50, total n=50), estimate the median.',
      steps: [
        { step: 1, instruction: 'Find n/2.', math: '50/2 = 25', explanation: 'The median is at the 25th position out of 50.' },
        { step: 2, instruction: 'Find which class contains cumulative frequency 25.', math: '18 (at 20) < 25 < 35 (at 30)', explanation: 'The median falls in the class 20-30.' },
        { step: 3, instruction: 'Interpolate within that class.', math: '(25−18)/(35−18) = 7/17 ≈ 0.41', explanation: 'How far through this class the 25th value falls.' },
        { step: 4, instruction: 'Apply that fraction to the class width.', math: '20 + 0.41×10 ≈ 24.1', explanation: 'Add the fraction of the class width to the lower boundary.' },
      ],
      finalAnswer: 'Estimated median ≈ 24.1',
    },
    whyItWorks:
      'The ogive shows exactly how many data values fall below each point — since the median is, ' +
      'by definition, the value with exactly half the data below it, finding where the curve reaches ' +
      'cumulative frequency n/2 finds exactly that value (using straight-line interpolation within the class where the curve doesn\'t land exactly on a plotted point).',
    realLifeExample: {
      title: 'Estimating the median wait time from grouped data',
      scenario: 'A clinic records patient wait times only in grouped ranges (e.g. 0-10 min, 10-20 min), not exact individual times.',
      explanation: 'The ogive method estimates the median wait time directly from this grouped data, even though the exact individual wait times were never recorded.',
    },
    practiceQuestions: [
      {
        id: 'ogive-median-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For a dataset with n=40, what cumulative frequency value corresponds to the median?',
        hints: ['Median is at n/2.'],
        correctAnswer: 20,
        explanation: '40/2 = 20.',
      },
    ],
    commonMistake:
      'Using n instead of n/2 (or n/4, 3n/4 for quartiles) when locating the median on the ' +
      'cumulative frequency axis — always divide n by the appropriate fraction first.',
    quickReview: [
      'Median: locate n/2 on the cumulative frequency axis, read across then down.',
      'Q₁: use n/4. Q₃: use 3n/4.',
      'Interpolate within the class where the target cumulative frequency falls.',
    ],
  },

  'scatter-diagrams-and-correlation': {
    slug: 'scatter-diagrams-and-correlation',
    title: 'Scatter Diagrams and Correlation',
    difficulty: 'medium',
    simpleExplanation:
      'A scatter diagram plots paired data (x,y) as individual points, revealing whether two ' +
      'variables are related. Positive correlation: points trend upward (as x increases, y tends to ' +
      'increase). Negative correlation: points trend downward. No correlation: points show no clear pattern.',
    whyItMatters:
      'A quick glance at a scatter diagram often reveals a relationship (or lack of one) between two ' +
      'variables far faster than examining a table of raw numbers.',
    diagram: {
      id: 'scatter-diagram',
      title: 'A scatter diagram showing positive correlation',
      altText: 'A scatter plot of points trending upward from lower-left to upper-right, showing positive correlation',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 4.5 },
          { x: 5, y: 7 }, { x: 6, y: 6.5 }, { x: 7, y: 9 }, { x: 8, y: 8.5 },
        ],
      },
    },
    workedExample: {
      id: 'scatter-worked-1',
      title: 'Classify the type of correlation',
      problemStatement: 'A scatter diagram shows that as students study more hours, their test scores tend to be higher. What type of correlation is this?',
      steps: [
        { step: 1, instruction: 'Identify the trend direction.', explanation: 'As x (study hours) increases, y (test score) also tends to increase.' },
        { step: 2, instruction: 'Match to the correlation type.', explanation: 'An upward trend is positive correlation.' },
      ],
      finalAnswer: 'Positive correlation',
    },
    whyItWorks:
      'Correlation type is defined entirely by the overall trend direction visible in the scattered ' +
      'points — an upward-sloping pattern of points is defined as positive correlation, and a ' +
      'downward-sloping pattern as negative, regardless of how tightly or loosely the points cluster around that trend.',
    realLifeExample: {
      title: 'Ice cream sales versus temperature',
      scenario: 'A shop records daily ice cream sales alongside the day\'s temperature.',
      explanation: 'A scatter diagram of this data would show positive correlation — hotter days tend to have higher sales — visible immediately from the pattern of points.',
    },
    practiceQuestions: [
      {
        id: 'scatter-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A scatter diagram shows that as a car\'s age increases, its resale value tends to decrease. What type of correlation is this?',
        options: [
          { id: 'a', text: 'Negative correlation' },
          { id: 'b', text: 'Positive correlation' },
          { id: 'c', text: 'No correlation' },
          { id: 'd', text: 'Perfect correlation' },
        ],
        correctOptionId: 'a',
        hints: ['One variable increases while the other decreases.'],
        explanation: 'A downward trend (age up, value down) is negative correlation.',
      },
    ],
    commonMistake:
      'Assuming correlation proves one variable directly causes the other — correlation only ' +
      'describes an observed pattern, and does not by itself establish cause and effect.',
    quickReview: [
      'Positive correlation: points trend upward.',
      'Negative correlation: points trend downward.',
      'No correlation: no clear directional pattern.',
    ],
  },

  'the-correlation-coefficient': {
    slug: 'the-correlation-coefficient',
    title: 'The Correlation Coefficient',
    difficulty: 'hard',
    simpleExplanation:
      'The correlation coefficient, r, is a single number between −1 and 1 that precisely measures ' +
      'both the direction and strength of a linear relationship. r close to +1: strong positive ' +
      'correlation. r close to −1: strong negative correlation. r close to 0: little or no linear relationship.',
    whyItMatters:
      'A scatter diagram alone is subjective — the correlation coefficient gives an exact, ' +
      'comparable number, letting you say precisely HOW strong a relationship is, not just its rough direction.',
    formulaSlug: 'correlation-coefficient-formula',
    workedExample: {
      id: 'correlation-coefficient-worked-1',
      title: 'Interpret a correlation coefficient',
      problemStatement: 'A study finds r = −0.85 between hours of TV watched and exam scores. Interpret this value.',
      steps: [
        { step: 1, instruction: 'Check the sign.', math: 'r is negative', explanation: 'Negative correlation: more TV watching is associated with lower exam scores.' },
        { step: 2, instruction: 'Check the magnitude.', math: '|r| = 0.85, close to 1', explanation: 'A magnitude close to 1 indicates a strong relationship.' },
        { step: 3, instruction: 'Combine both.', explanation: 'A strong negative linear relationship.' },
      ],
      finalAnswer: 'r = −0.85 indicates a strong negative correlation.',
    },
    whyItWorks:
      'The formula\'s numerator, Σ(x−x̄)(y−ȳ), is positive when x and y tend to be above/below their ' +
      'means together (both high or both low at the same time — positive relationship) and negative ' +
      'when they move oppositely — the denominator simply rescales this to always land between −1 ' +
      'and 1, regardless of the original units or the size of the dataset.',
    realLifeExample: {
      title: 'Quantifying the strength of a marketing effect',
      scenario: 'A company wants to know precisely how strongly advertising spending predicts sales, not just whether a rough trend exists.',
      explanation: 'Computing r gives an exact, comparable strength value, letting the company compare this relationship\'s strength against other business factors on the same −1 to 1 scale.',
    },
    practiceQuestions: [
      {
        id: 'correlation-coefficient-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Which value of r represents the STRONGEST correlation?',
        options: [
          { id: 'a', text: 'r = −0.95' },
          { id: 'b', text: 'r = 0.4' },
          { id: 'c', text: 'r = −0.2' },
          { id: 'd', text: 'r = 0.05' },
        ],
        correctOptionId: 'a',
        hints: ['Strength depends on |r|, not the sign.'],
        explanation: '|−0.95| = 0.95, the largest magnitude among the options — the strongest relationship, even though it is negative.',
      },
    ],
    commonMistake:
      'Assuming a negative r means a "weak" or "bad" correlation — the SIGN of r shows direction ' +
      'only; the STRENGTH is shown by its magnitude, |r|, regardless of sign.',
    quickReview: [
      'r ranges from −1 to +1.',
      'Sign shows direction (positive/negative); magnitude |r| shows strength.',
      '|r| close to 1: strong relationship. |r| close to 0: weak or no linear relationship.',
    ],
  },
};
