import type { Chapter, Level } from '@/types/content';
import { chapter1C } from './chapter-1-complex-numbers';
import { chapter2C } from './chapter-2-mathematical-induction';

// Outline-only stubs for this pass — real, navigable pages with accurate
// topic/concept maps, no full bodies yet. Each will be replaced with a
// fully-authored chapter module (matching the a-level/b-level pattern)
// one at a time. Chapters 1-2 are now fully authored.

const chapter3: Chapter = {
  slug: 'analytic-solid-geometry',
  number: 3,
  title: 'Analytic Solid Geometry',
  blurb: 'The line, the plane, and the sphere in three-dimensional coordinate space.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'coordinates-in-space-topic',
      title: 'Coordinates in Space',
      concepts: [{ slug: 'the-three-dimensional-coordinate-system', title: 'The Three-Dimensional Coordinate System' }],
    },
    {
      slug: 'distance-and-midpoint-in-3d-topic',
      title: 'Distance and Midpoint in Three Dimensions',
      concepts: [{ slug: 'the-distance-and-midpoint-formulas-in-3d', title: 'The Distance and Midpoint Formulas in 3D' }],
    },
    {
      slug: 'the-line-in-space-topic',
      title: 'The Line in Space',
      concepts: [
        { slug: 'direction-numbers-of-a-line', title: 'Direction Numbers of a Line' },
        { slug: 'symmetric-and-parametric-equations-of-a-line', title: 'Symmetric and Parametric Equations of a Line' },
      ],
    },
    {
      slug: 'the-plane-in-space-topic',
      title: 'The Plane in Space',
      concepts: [
        { slug: 'the-normal-vector-and-equation-of-a-plane', title: 'The Normal Vector and Equation of a Plane' },
        { slug: 'the-distance-from-a-point-to-a-plane', title: 'The Distance from a Point to a Plane' },
      ],
    },
    {
      slug: 'the-sphere-topic',
      title: 'The Sphere',
      concepts: [
        { slug: 'the-standard-equation-of-a-sphere', title: 'The Standard Equation of a Sphere' },
        { slug: 'finding-the-center-and-radius-by-completing-the-square', title: 'Finding the Center and Radius by Completing the Square' },
      ],
    },
  ],
};

const chapter4: Chapter = {
  slug: 'vectors-in-three-dimensions',
  number: 4,
  title: 'Vectors in Three Dimensions',
  blurb: 'The scalar (dot) product, the vector (cross) product, and lines and planes in 3D expressed with vectors.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'vectors-in-3d-and-components-topic',
      title: 'Vectors in 3D and Their Components',
      concepts: [{ slug: 'vectors-in-three-dimensions-and-their-magnitude', title: 'Vectors in Three Dimensions and Their Magnitude' }],
    },
    {
      slug: 'the-scalar-dot-product-topic',
      title: 'The Scalar (Dot) Product',
      concepts: [
        { slug: 'the-dot-product-of-two-vectors', title: 'The Dot Product of Two Vectors' },
        { slug: 'the-angle-between-two-vectors', title: 'The Angle Between Two Vectors' },
      ],
    },
    {
      slug: 'the-vector-cross-product-topic',
      title: 'The Vector (Cross) Product',
      concepts: [
        { slug: 'the-cross-product-of-two-vectors', title: 'The Cross Product of Two Vectors' },
        { slug: 'the-cross-product-and-area-of-a-parallelogram', title: 'The Cross Product and Area of a Parallelogram' },
      ],
    },
    {
      slug: 'lines-in-3d-using-vectors-topic',
      title: 'Lines in 3D Using Vectors',
      concepts: [{ slug: 'the-vector-equation-of-a-line-in-space', title: 'The Vector Equation of a Line in Space' }],
    },
    {
      slug: 'planes-in-3d-using-vectors-topic',
      title: 'Planes in 3D Using Vectors',
      concepts: [
        { slug: 'the-vector-equation-of-a-plane-in-space', title: 'The Vector Equation of a Plane in Space' },
        { slug: 'the-scalar-triple-product-and-volume', title: 'The Scalar Triple Product and Volume' },
      ],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'permutation-and-combination',
  number: 5,
  title: 'Permutation and Combination',
  blurb: 'Counting techniques — permutations and combinations — and their applications across mathematics, statistics, science, and engineering.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-fundamental-counting-principle-topic',
      title: 'The Fundamental Counting Principle',
      concepts: [
        { slug: 'the-fundamental-counting-principle', title: 'The Fundamental Counting Principle' },
        { slug: 'factorial-notation', title: 'Factorial Notation' },
      ],
    },
    {
      slug: 'permutations-topic',
      title: 'Permutations',
      concepts: [
        { slug: 'permutations-of-n-distinct-objects', title: 'Permutations of n Distinct Objects' },
        { slug: 'permutations-of-r-objects-from-n', title: 'Permutations of r Objects from n' },
      ],
    },
    {
      slug: 'special-permutations-topic',
      title: 'Permutations with Repetition and Circular Permutations',
      concepts: [
        { slug: 'permutations-with-repeated-objects', title: 'Permutations with Repeated Objects' },
        { slug: 'circular-permutations', title: 'Circular Permutations' },
      ],
    },
    {
      slug: 'combinations-topic',
      title: 'Combinations',
      concepts: [
        { slug: 'combinations-of-r-objects-from-n', title: 'Combinations of r Objects from n' },
        { slug: 'the-relationship-between-permutations-and-combinations', title: 'The Relationship Between Permutations and Combinations' },
      ],
    },
    {
      slug: 'applications-topic',
      title: 'Applications',
      concepts: [{ slug: 'applications-to-probability-and-statistics', title: 'Applications to Probability and Statistics' }],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'circles-and-parabolas',
  number: 6,
  title: 'Circles and Parabolas',
  blurb: 'Conic sections, the general equations of circles and parabolas, and translation and rotation of axes.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'conic-sections-overview-topic',
      title: 'Conic Sections: An Overview',
      concepts: [{ slug: 'what-is-a-conic-section', title: 'What Is a Conic Section?' }],
    },
    {
      slug: 'the-circle-topic',
      title: 'The Circle',
      concepts: [
        { slug: 'the-standard-equation-of-a-circle', title: 'The Standard Equation of a Circle' },
        { slug: 'the-general-equation-of-a-circle', title: 'The General Equation of a Circle' },
      ],
    },
    {
      slug: 'the-parabola-topic',
      title: 'The Parabola',
      concepts: [
        { slug: 'the-focus-directrix-definition-of-a-parabola', title: 'The Focus-Directrix Definition of a Parabola' },
        { slug: 'the-standard-equation-of-a-parabola', title: 'The Standard Equation of a Parabola' },
      ],
    },
    {
      slug: 'the-general-equation-of-a-parabola-topic',
      title: 'The General Equation of a Parabola',
      concepts: [{ slug: 'the-general-equation-of-a-translated-parabola', title: 'The General Equation of a Translated Parabola' }],
    },
    {
      slug: 'translation-and-rotation-of-axes-topic',
      title: 'Translation and Rotation of Axes',
      concepts: [
        { slug: 'translation-of-axes', title: 'Translation of Axes' },
        { slug: 'rotation-of-axes', title: 'Rotation of Axes' },
      ],
    },
  ],
};

const chapter7: Chapter = {
  slug: 'trigonometric-functions-and-graphs',
  number: 7,
  title: 'Trigonometric Functions and Their Graphs',
  blurb: 'Graphs of the trigonometric functions and their transformations, inverse trigonometric functions, and differentiation of trigonometric functions.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'graphs-of-sine-and-cosine-topic',
      title: 'Graphs of Sine and Cosine',
      concepts: [
        { slug: 'the-graph-of-sine', title: 'The Graph of Sine' },
        { slug: 'the-graph-of-cosine', title: 'The Graph of Cosine' },
      ],
    },
    {
      slug: 'graphs-of-tangent-and-others-topic',
      title: 'Graphs of Tangent and Other Trigonometric Functions',
      concepts: [
        { slug: 'the-graph-of-tangent', title: 'The Graph of Tangent' },
        { slug: 'graphs-of-cosecant-secant-and-cotangent', title: 'Graphs of Cosecant, Secant, and Cotangent' },
      ],
    },
    {
      slug: 'transformations-of-trig-graphs-topic',
      title: 'Transformations of Trigonometric Graphs',
      concepts: [
        { slug: 'amplitude-period-and-phase-shift', title: 'Amplitude, Period, and Phase Shift' },
        { slug: 'reflections-and-vertical-shifts-of-trig-graphs', title: 'Reflections and Vertical Shifts of Trigonometric Graphs' },
      ],
    },
    {
      slug: 'inverse-trig-functions-topic',
      title: 'Inverse Trigonometric Functions and Their Graphs',
      concepts: [
        { slug: 'the-inverse-sine-function-and-its-graph', title: 'The Inverse Sine Function and Its Graph' },
        { slug: 'the-inverse-cosine-and-inverse-tangent-functions', title: 'The Inverse Cosine and Inverse Tangent Functions' },
      ],
    },
    {
      slug: 'differentiation-of-trig-functions-topic',
      title: 'Differentiation of Trigonometric Functions',
      concepts: [
        { slug: 'derivatives-of-sine-and-cosine', title: 'Derivatives of Sine and Cosine' },
        { slug: 'derivatives-of-tangent-and-other-trig-functions', title: 'Derivatives of Tangent and Other Trigonometric Functions' },
      ],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'logarithmic-and-exponential-functions',
  number: 8,
  title: 'Logarithmic and Exponential Functions',
  blurb: 'Graphs of logarithmic and exponential functions, their transformations, and their derivatives.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'graphs-of-exponential-functions-topic',
      title: 'Graphs of Exponential Functions',
      concepts: [{ slug: 'the-graph-of-an-exponential-function', title: 'The Graph of an Exponential Function' }],
    },
    {
      slug: 'graphs-of-logarithmic-functions-topic',
      title: 'Graphs of Logarithmic Functions',
      concepts: [{ slug: 'the-graph-of-a-logarithmic-function', title: 'The Graph of a Logarithmic Function' }],
    },
    {
      slug: 'transformations-of-log-and-exp-graphs-topic',
      title: 'Transformations of Logarithmic and Exponential Graphs',
      concepts: [{ slug: 'transformations-of-exponential-and-logarithmic-graphs', title: 'Transformations of Exponential and Logarithmic Graphs' }],
    },
    {
      slug: 'differentiation-of-exponential-functions-topic',
      title: 'Differentiation of Exponential Functions',
      concepts: [
        { slug: 'the-derivative-of-e-to-the-x', title: 'The Derivative of eˣ' },
        { slug: 'the-derivative-of-general-exponential-functions', title: 'The Derivative of General Exponential Functions' },
      ],
    },
    {
      slug: 'differentiation-of-logarithmic-functions-topic',
      title: 'Differentiation of Logarithmic Functions',
      concepts: [
        { slug: 'the-derivative-of-the-natural-logarithm', title: 'The Derivative of the Natural Logarithm' },
        { slug: 'the-derivative-of-general-logarithmic-functions', title: 'The Derivative of General Logarithmic Functions' },
      ],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'applications-of-derivatives',
  number: 9,
  title: 'Applications of Derivatives',
  blurb: 'Critical points, maxima and minima, the second derivative test, and linear approximation.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'derivatives-of-various-functions-topic',
      title: 'Derivatives of Polynomial, Rational, Exponential, Logarithmic, and Trigonometric Functions',
      concepts: [{ slug: 'reviewing-derivatives-of-various-function-types', title: 'Reviewing Derivatives of Various Function Types' }],
    },
    {
      slug: 'critical-points-topic',
      title: 'Critical Points',
      concepts: [{ slug: 'critical-points-and-where-they-occur', title: 'Critical Points and Where They Occur' }],
    },
    {
      slug: 'maximum-and-minimum-topic',
      title: 'Maximum and Minimum',
      concepts: [
        { slug: 'increasing-and-decreasing-intervals', title: 'Increasing and Decreasing Intervals' },
        { slug: 'finding-absolute-and-local-extrema', title: 'Finding Absolute and Local Extrema' },
      ],
    },
    {
      slug: 'second-derivative-test-topic',
      title: 'The Second Derivative Test',
      concepts: [
        { slug: 'the-second-derivative-and-concavity', title: 'The Second Derivative and Concavity' },
        { slug: 'the-second-derivative-test-for-extrema', title: 'The Second Derivative Test for Extrema' },
      ],
    },
    {
      slug: 'approximation-topic',
      title: 'Approximation',
      concepts: [{ slug: 'linear-approximation-using-derivatives', title: 'Linear Approximation Using Derivatives' }],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'methods-of-integration',
  number: 10,
  title: 'Methods of Integration',
  blurb: 'Basic integration, the substitution method, integration by parts, and the partial fraction method.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'basic-integration-topic',
      title: 'Basic Integration',
      concepts: [
        { slug: 'antiderivatives-and-basic-integration-rules', title: 'Antiderivatives and Basic Integration Rules' },
        { slug: 'integrating-exponential-and-trigonometric-functions', title: 'Integrating Exponential and Trigonometric Functions' },
      ],
    },
    {
      slug: 'substitution-method-topic',
      title: 'The Substitution Method',
      concepts: [{ slug: 'integration-by-substitution', title: 'Integration by Substitution' }],
    },
    {
      slug: 'integration-by-parts-topic',
      title: 'Integration by Parts',
      concepts: [{ slug: 'integration-by-parts', title: 'Integration by Parts' }],
    },
    {
      slug: 'partial-fraction-method-topic',
      title: 'The Partial Fraction Method',
      concepts: [
        { slug: 'setting-up-a-partial-fraction-decomposition', title: 'Setting Up a Partial Fraction Decomposition' },
        { slug: 'integrating-using-partial-fractions', title: 'Integrating Using Partial Fractions' },
      ],
    },
  ],
};

const chapter11: Chapter = {
  slug: 'applications-of-integration',
  number: 11,
  title: 'Applications of Integration',
  blurb: 'The definite integral as area under a curve, area between two curves, and volumes of revolution.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'area-under-a-curve-topic',
      title: 'The Definite Integral and Area Under a Curve',
      concepts: [
        { slug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus', title: 'The Definite Integral and the Fundamental Theorem of Calculus' },
        { slug: 'area-under-a-curve', title: 'Area Under a Curve' },
      ],
    },
    {
      slug: 'area-between-two-curves-topic',
      title: 'Area Between Two Curves',
      concepts: [{ slug: 'area-between-two-curves', title: 'Area Between Two Curves' }],
    },
    {
      slug: 'volume-by-disks-topic',
      title: 'Volume of Revolution: The Disk Method',
      concepts: [{ slug: 'volume-of-revolution-the-disk-method', title: 'Volume of Revolution: The Disk Method' }],
    },
    {
      slug: 'volume-by-washers-topic',
      title: 'Volume of Revolution: The Washer Method',
      concepts: [{ slug: 'volume-of-revolution-the-washer-method', title: 'Volume of Revolution: The Washer Method' }],
    },
  ],
};

export const cLevelMath: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Eleven advanced chapters — from complex numbers and solid geometry through the methods and applications of integration.',
  status: 'available',
  chapters: [
    chapter1C, chapter2C, chapter3, chapter4, chapter5, chapter6,
    chapter7, chapter8, chapter9, chapter10, chapter11,
  ],
};
