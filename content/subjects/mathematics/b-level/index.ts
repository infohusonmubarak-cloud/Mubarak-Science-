import type { Chapter } from '@/types/content';

// All 11 Level B chapters are outline-only stubs for this pass — real,
// navigable pages with accurate topic/concept maps, no full bodies yet.

const chapter1: Chapter = {
  slug: 'remainder-and-factor-theorem',
  number: 1,
  title: 'The Remainder Theorem and the Factor Theorem',
  blurb: 'Dividing polynomials, and using the remainder and factor theorems to find roots without long division.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'polynomial-division',
      title: 'Polynomial Division',
      concepts: [
        { slug: 'dividing-polynomials', title: 'Dividing Polynomials' },
        { slug: 'synthetic-division', title: 'Synthetic Division' },
      ],
    },
    {
      slug: 'the-two-theorems',
      title: 'The Two Theorems',
      concepts: [
        { slug: 'remainder-theorem', title: 'The Remainder Theorem' },
        { slug: 'factor-theorem', title: 'The Factor Theorem' },
        { slug: 'finding-polynomial-roots', title: 'Finding Polynomial Roots' },
      ],
    },
  ],
};

const chapter2: Chapter = {
  slug: 'binomial-theorem',
  number: 2,
  title: 'The Binomial Theorem',
  blurb: "Expanding (a+b)ⁿ with Pascal's triangle and binomial coefficients.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'expanding-binomials',
      title: 'Expanding Binomials',
      concepts: [
        { slug: 'pascals-triangle', title: "Pascal's Triangle" },
        { slug: 'binomial-coefficients', title: 'Binomial Coefficients' },
        { slug: 'the-binomial-expansion', title: 'The Binomial Expansion' },
      ],
    },
    {
      slug: 'using-the-expansion',
      title: 'Using the Expansion',
      concepts: [
        { slug: 'general-term', title: 'The General Term' },
        { slug: 'middle-terms', title: 'Middle Terms' },
      ],
    },
  ],
};

const chapter3: Chapter = {
  slug: 'elementary-functions-and-transformations',
  number: 3,
  title: 'Elementary Functions and Transformations',
  blurb: 'The core family of functions — linear, quadratic, cubic, reciprocal, square-root and exponential — and how they shift, reflect, stretch and compress.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-function-family',
      title: 'The Function Family',
      concepts: [
        { slug: 'constant-and-linear-functions', title: 'Constant and Linear Functions' },
        { slug: 'quadratic-and-cubic-functions', title: 'Quadratic and Cubic Functions' },
        { slug: 'reciprocal-and-square-root-functions', title: 'Reciprocal and Square-Root Functions' },
        { slug: 'exponential-functions', title: 'Exponential Functions' },
      ],
    },
    {
      slug: 'transformations',
      title: 'Transformations',
      concepts: [
        { slug: 'translations', title: 'Translations' },
        { slug: 'reflections', title: 'Reflections' },
        { slug: 'stretches-and-compressions', title: 'Stretches and Compressions' },
      ],
    },
  ],
};

const chapter4: Chapter = {
  slug: 'sequences-and-series',
  number: 4,
  title: 'Sequences and Series',
  blurb: 'Arithmetic and geometric sequences, their sums, and infinite geometric series — the math behind savings, growth and depreciation.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'arithmetic-sequences',
      title: 'Arithmetic Sequences and Series',
      concepts: [
        { slug: 'arithmetic-nth-term', title: 'The nth Term of an Arithmetic Sequence' },
        { slug: 'arithmetic-series-sum', title: 'Sum of an Arithmetic Series' },
      ],
    },
    {
      slug: 'geometric-sequences',
      title: 'Geometric Sequences and Series',
      concepts: [
        { slug: 'geometric-nth-term', title: 'The nth Term of a Geometric Sequence' },
        { slug: 'geometric-series-sum', title: 'Sum of a Geometric Series' },
        { slug: 'infinite-geometric-series', title: 'Infinite Geometric Series' },
      ],
    },
    {
      slug: 'sequence-applications',
      title: 'Applications',
      concepts: [{ slug: 'savings-growth-and-depreciation', title: 'Savings, Growth and Depreciation' }],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'matrices',
  number: 5,
  title: 'Matrices',
  blurb: 'Matrix notation, addition and multiplication, determinants and inverses, and solving simultaneous equations.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'matrix-basics',
      title: 'Matrix Basics',
      concepts: [
        { slug: 'matrix-notation-and-order', title: 'Matrix Notation and Order' },
        { slug: 'adding-and-subtracting-matrices', title: 'Adding and Subtracting Matrices' },
        { slug: 'scalar-and-matrix-multiplication', title: 'Scalar and Matrix Multiplication' },
      ],
    },
    {
      slug: 'determinants-and-inverses',
      title: 'Determinants and Inverses',
      concepts: [
        { slug: 'determinant-of-a-2x2-matrix', title: 'Determinant of a 2×2 Matrix' },
        { slug: 'inverse-of-a-2x2-matrix', title: 'Inverse of a 2×2 Matrix' },
        { slug: 'solving-simultaneous-equations-with-matrices', title: 'Solving Simultaneous Equations with Matrices' },
      ],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'statistics',
  number: 6,
  title: 'Statistics',
  blurb: 'Describing data with mean, median, mode, variance and standard deviation, and visualizing it with histograms, box plots and scatter plots.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'describing-data',
      title: 'Describing Data',
      concepts: [
        { slug: 'population-and-sample', title: 'Population and Sample' },
        { slug: 'mean-median-and-mode', title: 'Mean, Median and Mode' },
        { slug: 'range-variance-and-standard-deviation', title: 'Range, Variance and Standard Deviation' },
        { slug: 'quartiles-and-percentiles', title: 'Quartiles and Percentiles' },
      ],
    },
    {
      slug: 'visualizing-data',
      title: 'Visualizing Data',
      concepts: [
        { slug: 'frequency-tables-and-histograms', title: 'Frequency Tables and Histograms' },
        { slug: 'bar-and-pie-charts', title: 'Bar and Pie Charts' },
        { slug: 'box-plots-and-scatter-plots', title: 'Box Plots and Scatter Plots' },
      ],
    },
  ],
};

const chapter7: Chapter = {
  slug: 'circles-advanced',
  number: 7,
  title: 'Circles',
  blurb: 'An advanced extension of Level A circle geometry — tangent-chord relationships, cyclic quadrilaterals, and circle proofs.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'advanced-circle-geometry',
      title: 'Advanced Circle Geometry',
      concepts: [
        { slug: 'cyclic-quadrilaterals', title: 'Cyclic Quadrilaterals' },
        { slug: 'tangent-chord-theorem', title: 'The Tangent-Chord Theorem' },
        { slug: 'intersecting-chords-and-secants', title: 'Intersecting Chords and Secants' },
      ],
    },
    {
      slug: 'circle-proofs',
      title: 'Circle Proofs and Coordinate Geometry',
      concepts: [
        { slug: 'circle-geometry-proofs', title: 'Circle Geometry Proofs' },
        { slug: 'coordinate-geometry-of-circles', title: 'Coordinate Geometry of Circles' },
      ],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'areas-of-similar-triangles',
  number: 8,
  title: 'Areas of Similar Triangles',
  blurb: 'How the perimeter, area and volume of similar figures scale with the linear scale factor.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'scaling-relationships',
      title: 'Scaling Relationships',
      concepts: [
        { slug: 'similar-triangle-review', title: 'Similar Triangle Review' },
        { slug: 'perimeter-ratio', title: 'Perimeter Ratio' },
        { slug: 'area-ratio', title: 'Area Ratio' },
        { slug: 'volume-ratio', title: 'Volume Ratio' },
      ],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'introduction-to-vectors',
  number: 9,
  title: 'Introduction to Vectors',
  blurb: 'Magnitude and direction, vector addition and subtraction, unit vectors, and the dot product.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'vector-basics',
      title: 'Vector Basics',
      concepts: [
        { slug: 'scalars-and-vectors', title: 'Scalars and Vectors' },
        { slug: 'magnitude-and-direction', title: 'Magnitude and Direction' },
        { slug: 'position-vectors-and-components', title: 'Position Vectors and Components' },
      ],
    },
    {
      slug: 'vector-operations',
      title: 'Vector Operations',
      concepts: [
        { slug: 'adding-and-subtracting-vectors', title: 'Adding and Subtracting Vectors' },
        { slug: 'scalar-multiplication-of-vectors', title: 'Scalar Multiplication' },
        { slug: 'unit-vectors', title: 'Unit Vectors' },
        { slug: 'dot-product', title: 'The Dot Product' },
      ],
    },
    {
      slug: 'vector-applications',
      title: 'Applications',
      concepts: [{ slug: 'force-velocity-and-navigation', title: 'Force, Velocity and Navigation' }],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'trigonometry-advanced',
  number: 10,
  title: 'Trigonometry',
  blurb: 'An advanced extension of Level A trigonometry — radians, identities, compound and double angles, and the sine and cosine rules.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'radians-and-identities',
      title: 'Radians and Identities',
      concepts: [
        { slug: 'radians', title: 'Radians and Degree Conversion' },
        { slug: 'the-unit-circle', title: 'The Unit Circle' },
        { slug: 'trigonometric-identities', title: 'Trigonometric Identities' },
      ],
    },
    {
      slug: 'compound-angles',
      title: 'Compound and Double Angles',
      concepts: [
        { slug: 'compound-angle-formulas', title: 'Compound Angle Formulas' },
        { slug: 'double-angle-formulas', title: 'Double Angle Formulas' },
        { slug: 'trigonometric-equations', title: 'Trigonometric Equations' },
      ],
    },
    {
      slug: 'non-right-triangles',
      title: 'Non-Right Triangles',
      concepts: [
        { slug: 'sine-rule', title: 'The Sine Rule' },
        { slug: 'cosine-rule', title: 'The Cosine Rule' },
        { slug: 'area-of-a-triangle', title: 'Area of a Triangle Using Sine' },
      ],
    },
  ],
};

const chapter11: Chapter = {
  slug: 'method-of-differentiation',
  number: 11,
  title: 'Method of Differentiation',
  blurb: 'Rates of change and gradients, the rules of differentiation, and finding stationary points and maxima/minima.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-idea-of-a-derivative',
      title: 'The Idea of a Derivative',
      concepts: [
        { slug: 'limits-and-rate-of-change', title: 'Limits and Rate of Change' },
        { slug: 'the-derivative-and-notation', title: 'The Derivative and Its Notation' },
      ],
    },
    {
      slug: 'differentiation-rules',
      title: 'Differentiation Rules',
      concepts: [
        { slug: 'power-and-constant-rules', title: 'Power Rule and Constant Rule' },
        { slug: 'sum-and-difference-rule', title: 'Sum and Difference Rule' },
        { slug: 'product-rule', title: 'Product Rule' },
        { slug: 'quotient-rule', title: 'Quotient Rule' },
        { slug: 'chain-rule', title: 'Chain Rule' },
      ],
    },
    {
      slug: 'using-derivatives',
      title: 'Using Derivatives',
      concepts: [
        { slug: 'stationary-points', title: 'Stationary Points' },
        { slug: 'maxima-and-minima', title: 'Maxima and Minima' },
        { slug: 'differentiation-applications', title: 'Speed, Acceleration and Optimization' },
      ],
    },
  ],
};

export const bLevelMath = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'Eleven advanced chapters — from polynomial theorems through differentiation.',
  status: 'available' as const,
  chapters: [
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
    chapter7, chapter8, chapter9, chapter10, chapter11,
  ],
};
