import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 11 — Applications of Integration.
// Matches the textbook preface's description: the definite integral as
// area under a curve, and volume integrals — expanded into area under a
// curve, area between two curves, and the disk/washer methods for
// volumes of revolution. Diagrams reuse GeometryDiagram's polygon-fill
// support to shade the exact regions being integrated (this chapter is
// one of the diagram-heavy ones the syllabus calls out specifically).
export const chapter11CConcepts: Record<string, Concept> = {
  'the-definite-integral-and-the-fundamental-theorem-of-calculus': {
    slug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus',
    title: 'The Definite Integral and the Fundamental Theorem of Calculus',
    difficulty: 'hard',
    simpleExplanation:
      'The Fundamental Theorem of Calculus (FTC) says that a definite integral ∫ₐᵇf(x)dx can be evaluated by ' +
      'finding any antiderivative F of f, and computing F(b)−F(a) — turning a quantity originally defined as an ' +
      'infinite sum of infinitesimal slices into a simple two-value calculation.',
    whyItMatters:
      'This theorem is the bridge between differentiation and integration — without it, evaluating a definite ' +
      'integral exactly would require the much harder machinery of limits of Riemann sums every single time.',
    diagram: {
      id: 'ftc-diagram',
      title: 'The region under y = 2x, between x = 1 and x = 3',
      altText: 'A shaded trapezoid region under a straight rising line, bounded on the left by x=1 and on the right by x=3, sitting above the x-axis',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 1, y: 0, label: 'a=1', labelDx: -4, labelDy: 14 },
          { x: 3, y: 0, label: 'b=3', labelDx: 4, labelDy: 14 },
        ],
        segments: [{ from: [0, 0], to: [4, 0] }],
        polygons: [{ points: [[1, 0], [3, 0], [3, 6], [1, 2]] }],
      },
    },
    formulaSlug: 'fundamental-theorem-of-calculus-formula',
    workedExample: {
      id: 'ftc-worked-1',
      title: 'Evaluate a definite integral using the Fundamental Theorem of Calculus',
      problemStatement: 'Evaluate ∫₁³ 2x dx.',
      steps: [
        { step: 1, instruction: 'Find an antiderivative of the integrand.', math: 'F(x) = x²', explanation: 'F\'(x)=2x, so F is a valid antiderivative of 2x.' },
        { step: 2, instruction: 'Apply the Fundamental Theorem of Calculus.', math: '∫₁³ 2x dx = F(3) − F(1)', explanation: 'Evaluate F at the upper limit, then subtract F at the lower limit.' },
        { step: 3, instruction: 'Compute both values and subtract.', math: 'F(3)=9,  F(1)=1,  9−1=8', explanation: 'Substitute each limit into F(x)=x².' },
      ],
      finalAnswer: '∫₁³ 2x dx = 8.',
    },
    whyItWorks:
      'This shaded trapezoid has area (2+6)/2 × (3−1) = 8 by the elementary trapezoid-area formula — exactly ' +
      'matching the integral\'s value, confirming that the Fundamental Theorem\'s shortcut (F(b)−F(a)) really ' +
      'does compute the true area under the curve, without needing to sum infinitely many thin slices by hand.',
    realLifeExample: {
      title: 'Total displacement from a velocity function',
      scenario: 'A vehicle\'s velocity is recorded as a function of time, and the total distance traveled ' +
        'between two specific times is needed.',
      explanation: 'The Fundamental Theorem of Calculus lets that total distance be computed exactly, as ' +
        'F(b)−F(a) for any antiderivative F of the velocity function, without needing to sum an enormous number ' +
        'of tiny time-slices.',
    },
    practiceQuestions: [
      {
        id: 'ftc-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate ∫₁² 6x² dx.',
        hints: ['Find an antiderivative of 6x², then apply F(2)−F(1).'],
        correctAnswer: 14,
        explanation: 'F(x)=2x³. F(2)−F(1) = 2(8) − 2(1) = 16 − 2 = 14.',
      },
    ],
    commonMistake:
      'Computing F(a)−F(b) instead of F(b)−F(a) — subtracting in the wrong order flips the sign of the final answer.',
    quickReview: [
      '∫ₐᵇ f(x)dx = F(b) − F(a), for any antiderivative F of f.',
      'This turns a definite integral into a simple two-value subtraction.',
      'Always evaluate at the UPPER limit first, then subtract the value at the lower limit.',
    ],
  },

  'area-under-a-curve': {
    slug: 'area-under-a-curve',
    title: 'Area Under a Curve',
    difficulty: 'medium',
    simpleExplanation:
      'When f(x) ≥ 0 on [a,b], the definite integral ∫ₐᵇf(x)dx gives exactly the area of the region trapped ' +
      'between the curve y=f(x) and the x-axis, from x=a to x=b.',
    whyItMatters:
      'This is the most direct geometric meaning of a definite integral, and the starting point for every other ' +
      'application in this chapter — area between curves and volumes of revolution both build directly on it.',
    diagram: {
      id: 'area-under-curve-diagram',
      title: 'The area under y = x², between x = 1 and x = 2',
      altText: 'A shaded region under an upward-curving parabola, bounded on the left by x=1 and on the right by x=2, sitting above the x-axis',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 1, y: 0, label: 'a=1', labelDx: -4, labelDy: 14 },
          { x: 2, y: 0, label: 'b=2', labelDx: 4, labelDy: 14 },
        ],
        segments: [{ from: [0, 0], to: [2.3, 0] }],
        polygons: [{ points: [[1, 0], [2, 0], [2, 4], [1.75, 3.0625], [1.5, 2.25], [1.25, 1.5625], [1, 1]] }],
      },
    },
    formulaSlug: 'area-under-a-curve-formula',
    workedExample: {
      id: 'area-under-curve-worked-1',
      title: 'Find the area under a curve',
      problemStatement: 'Find the area under y = x² between x = 1 and x = 2.',
      steps: [
        { step: 1, instruction: 'Set up the definite integral.', math: 'Area = ∫₁² x² dx', explanation: 'f(x)=x² is non-negative on [1,2], so the integral gives the area directly.' },
        { step: 2, instruction: 'Find an antiderivative.', math: 'F(x) = x³/3', explanation: 'Apply the Power Rule for integration.' },
        { step: 3, instruction: 'Apply the Fundamental Theorem of Calculus.', math: 'F(2) − F(1) = 8/3 − 1/3 = 7/3', explanation: 'Evaluate at the upper limit, subtract the value at the lower limit.' },
      ],
      finalAnswer: 'Area = 7/3 ≈ 2.333 square units.',
    },
    whyItWorks:
      'A definite integral is defined as the limit of a sum of infinitely many, infinitely thin rectangles of ' +
      'height f(x) and width dx spanning [a,b] — when f(x)≥0, that sum of rectangle areas is exactly the total ' +
      'area under the curve, and the Fundamental Theorem of Calculus provides a shortcut to compute that limit exactly.',
    realLifeExample: {
      title: 'Total water collected from a variable-rate inflow pipe',
      scenario: 'A pipe fills a tank at a rate (in liters per minute) that changes over time, described by a function r(t).',
      explanation: 'The total volume collected between two times is exactly the area under the rate function\'s ' +
        'graph over that time interval — found by evaluating the definite integral of r(t).',
    },
    practiceQuestions: [
      {
        id: 'area-under-curve-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the area under y = 3x² between x = 0 and x = 2.',
        hints: ['Find an antiderivative of 3x², then apply the Fundamental Theorem of Calculus.'],
        correctAnswer: 8,
        explanation: 'F(x)=x³. F(2)−F(0) = 8 − 0 = 8.',
      },
    ],
    commonMistake:
      'Using this formula directly when f(x) is negative somewhere on [a,b] — the plain integral would then ' +
      'subtract that region\'s area instead of adding it, so a genuinely negative section needs to be split off ' +
      'and its absolute value taken separately.',
    quickReview: [
      'Area = ∫ₐᵇ f(x)dx, valid directly when f(x)≥0 on [a,b].',
      'Find an antiderivative, then apply the Fundamental Theorem of Calculus.',
      'The foundation for area-between-curves and volume-of-revolution problems.',
    ],
  },

  'area-between-two-curves': {
    slug: 'area-between-two-curves',
    title: 'Area Between Two Curves',
    difficulty: 'hard',
    simpleExplanation:
      'The area of the region trapped between two curves f(x) and g(x), where f(x)≥g(x) on [a,b], is found by ' +
      'integrating their difference: ∫ₐᵇ[f(x)−g(x)]dx — subtracting away the area that would otherwise be ' +
      'double-counted underneath the lower curve.',
    whyItMatters:
      'Many real regions of interest are bounded above and below by two different curves, not by a curve and ' +
      'the x-axis — this generalizes the area-under-a-curve idea to handle that far more common situation.',
    diagram: {
      id: 'area-between-curves-diagram',
      title: 'The region between y = x+2 and y = x², from x = −1 to x = 2',
      altText: 'A shaded lens-shaped region trapped between a straight rising line above and a parabola below, meeting at two points',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -1, y: 1, label: '(−1, 1)', labelDx: -18, labelDy: -4 },
          { x: 2, y: 4, label: '(2, 4)', labelDx: 14, labelDy: -6 },
        ],
        polygons: [{ points: [[-1, 1], [2, 4], [1.5, 2.25], [1, 1], [0.5, 0.25], [0, 0], [-0.5, 0.25]] }],
      },
    },
    formulaSlug: 'area-between-two-curves-formula',
    workedExample: {
      id: 'area-between-curves-worked-1',
      title: 'Find the area between two curves',
      problemStatement: 'Find the area of the region bounded by f(x) = x+2 and g(x) = x².',
      steps: [
        { step: 1, instruction: 'Find where the curves intersect.', math: 'x+2 = x²  ⟹  x²−x−2=0  ⟹  (x−2)(x+1)=0  ⟹  x=−1, 2', explanation: 'The intersection points give the integration bounds.' },
        { step: 2, instruction: 'Determine which curve is on top between the intersections.', math: 'At x=0: f(0)=2, g(0)=0, so f is on top', explanation: 'Testing one point inside the interval confirms f(x)=x+2 stays above g(x)=x² throughout [−1,2].' },
        { step: 3, instruction: 'Set up and simplify the integral.', math: 'Area = ∫₋₁² [(x+2) − x²] dx', explanation: 'Top function minus bottom function.' },
        { step: 4, instruction: 'Integrate and evaluate.', math: 'F(x) = x²/2 + 2x − x³/3.   F(2)=10/3,  F(−1)=−7/6', explanation: 'Apply the Power Rule to each term, then the Fundamental Theorem of Calculus.' },
        { step: 5, instruction: 'Subtract to find the area.', math: 'Area = 10/3 − (−7/6) = 20/6 + 7/6 = 27/6 = 4.5', explanation: 'Combine the fractions over a common denominator.' },
      ],
      finalAnswer: 'Area = 4.5 square units.',
    },
    whyItWorks:
      '∫[f(x)−g(x)]dx can be split into ∫f(x)dx − ∫g(x)dx — the area under the top curve, minus the area under ' +
      'the bottom curve, both measured down to the x-axis — and whatever lies below the x-axis or below g(x) ' +
      'cancels out exactly, leaving only the region genuinely trapped between the two curves.',
    realLifeExample: {
      title: 'Material saved by a redesigned part',
      scenario: 'An engineer redesigns a machined part, changing its outline from one curve to another, and ' +
        'needs to know exactly how much material the new design saves.',
      explanation: 'The saved cross-sectional area is exactly the area between the old outline curve and the ' +
        'new outline curve — computed with this same technique.',
    },
    practiceQuestions: [
      {
        id: 'area-between-curves-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the area between f(x) = x and g(x) = x², from x = 0 to x = 1.',
        hints: ['f(x) ≥ g(x) on [0,1]; integrate f(x)−g(x).'],
        correctAnswer: 0.1667,
        tolerance: 0.01,
        explanation: '∫₀¹(x−x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 ≈ 0.1667.',
      },
    ],
    commonMistake:
      'Integrating g(x)−f(x) instead of f(x)−g(x) (subtracting in the wrong order) — this produces a negative ' +
      'value instead of the true, positive area; always confirm which curve is on top first.',
    quickReview: [
      'Area = ∫ₐᵇ [f(x)−g(x)]dx, where f(x) is the upper curve on [a,b].',
      'First find the intersection points — these are usually the integration bounds.',
      'Test a point inside the interval to confirm which curve is genuinely on top.',
    ],
  },

  'volume-of-revolution-the-disk-method': {
    slug: 'volume-of-revolution-the-disk-method',
    title: 'Volume of Revolution: The Disk Method',
    difficulty: 'hard',
    simpleExplanation:
      'Rotating the region under a curve f(x) around the x-axis sweeps out a solid of revolution. Slicing that ' +
      'solid perpendicular to the axis produces thin circular disks of radius f(x) — summing their volumes via ' +
      'integration gives V = π∫ₐᵇ[f(x)]²dx.',
    whyItMatters:
      'Many real solids — bottles, vases, machine parts turned on a lathe — are naturally described as a curve ' +
      'rotated around an axis, and the disk method is the direct way to compute their volume.',
    diagram: {
      id: 'disk-method-diagram',
      title: 'The solid formed by rotating y = √x (0 ≤ x ≤ 4) around the x-axis',
      altText: 'A leaf-shaped side-view silhouette symmetric about a horizontal axis, representing the outline of a solid of revolution, with a dashed vertical line showing one disk\'s diameter',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-0.3, 0], to: [4.5, 0], dashed: true, label: 'axis of rotation', labelDx: 30, labelDy: 10 },
          { from: [2, -1.414], to: [2, 1.414], dashed: true, label: 'disk diameter', labelDx: 30, labelDy: 0 },
        ],
        polygons: [{ points: [[0, 0], [1, 1], [2, 1.414], [3, 1.732], [4, 2], [4, -2], [3, -1.732], [2, -1.414], [1, -1]] }],
      },
    },
    formulaSlug: 'disk-method-formula',
    workedExample: {
      id: 'disk-method-worked-1',
      title: 'Find a volume of revolution using the disk method',
      problemStatement: 'Find the volume generated by rotating the region under y=√x, from x=0 to x=4, around the x-axis.',
      steps: [
        { step: 1, instruction: 'Set up the disk method integral.', math: 'V = π∫₀⁴ [√x]² dx = π∫₀⁴ x dx', explanation: 'Square the radius function f(x)=√x, giving [√x]²=x.' },
        { step: 2, instruction: 'Integrate.', math: 'π[x²/2]₀⁴', explanation: 'Apply the Power Rule for integration.' },
        { step: 3, instruction: 'Evaluate at the limits.', math: 'π(16/2 − 0) = 8π', explanation: 'Substitute x=4 and x=0, then subtract.' },
      ],
      finalAnswer: 'V = 8π ≈ 25.13 cubic units.',
    },
    whyItWorks:
      'Each thin disk at position x has radius f(x) and thickness dx, so its volume is π[f(x)]²·dx (the area of ' +
      'a circle, times a thin slice of thickness) — summing infinitely many such disks across [a,b] via ' +
      'integration gives the total volume of the whole solid.',
    realLifeExample: {
      title: 'Computing the volume of a lathe-turned bottle',
      scenario: 'A glassblower or machinist designs a bottle\'s profile as a curve, then spins it on a lathe (or ' +
        'the equivalent process) to create the full three-dimensional shape.',
      explanation: 'The bottle\'s volume can be computed in advance directly from its profile curve using the ' +
        'disk method, without needing to fill a physical prototype with liquid to measure it.',
    },
    practiceQuestions: [
      {
        id: 'disk-method-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the volume when the region under y=x, from x=0 to x=2, is rotated around the x-axis.',
        hints: ['V = π∫₀² x² dx.'],
        correctAnswer: 8.378,
        tolerance: 0.01,
        explanation: 'V = π[x³/3]₀² = π(8/3) ≈ 8.378.',
      },
    ],
    commonMistake:
      'Forgetting to square f(x) before integrating — the disk method needs [f(x)]² (since a disk\'s area is ' +
      'πr², not πr), so integrating f(x) alone gives a completely wrong result.',
    quickReview: [
      'V = π∫ₐᵇ [f(x)]² dx — for a region under f(x), rotated about the x-axis.',
      'Each disk has area π[f(x)]² and infinitesimal thickness dx.',
      'Only valid when the region touches the axis of rotation directly (no gap).',
    ],
  },

  'volume-of-revolution-the-washer-method': {
    slug: 'volume-of-revolution-the-washer-method',
    title: 'Volume of Revolution: The Washer Method',
    difficulty: 'hard',
    simpleExplanation:
      'When the region being rotated is trapped between two curves (with a gap between the region and the axis ' +
      'of rotation), each cross-section is a "washer" — a disk with a smaller disk removed from its center. The ' +
      'volume is V = π∫ₐᵇ([R(x)]²−[r(x)]²)dx, where R is the outer radius and r is the inner radius.',
    whyItMatters:
      'Many real solids of revolution have a hole through them — pipes, rings, washers, tubes — and the washer ' +
      'method is exactly the tool for computing their volume.',
    diagram: {
      id: 'washer-method-diagram',
      title: 'The region between y = x and y = x², from x = 0 to x = 1, before rotation',
      altText: 'A shaded sliver region between a straight rising line above and a parabola below, meeting at the origin and at (1,1), with a dashed vertical segment showing the washer thickness at one point',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-0.2, 0], to: [1.2, 0], dashed: true, label: 'axis of rotation', labelDx: 30, labelDy: 8 },
          { from: [0.75, 0.5625], to: [0.75, 0.75], dashed: true, label: 'washer thickness', labelDx: 40, labelDy: 0 },
        ],
        polygons: [{ points: [[0, 0], [1, 1], [0.75, 0.5625], [0.5, 0.25], [0.25, 0.0625]] }],
      },
    },
    formulaSlug: 'washer-method-formula',
    workedExample: {
      id: 'washer-method-worked-1',
      title: 'Find a volume of revolution using the washer method',
      problemStatement: 'Find the volume generated by rotating the region between y=x (outer) and y=x² (inner), from x=0 to x=1, around the x-axis.',
      steps: [
        { step: 1, instruction: 'Identify the outer and inner radius functions.', math: 'R(x) = x,   r(x) = x²', explanation: 'On [0,1], the line y=x lies above the parabola y=x², so it forms the outer boundary.' },
        { step: 2, instruction: 'Set up the washer method integral.', math: 'V = π∫₀¹ (x² − x⁴) dx', explanation: 'Square each radius function: [R(x)]²=x², [r(x)]²=x⁴.' },
        { step: 3, instruction: 'Integrate.', math: 'π[x³/3 − x⁵/5]₀¹', explanation: 'Apply the Power Rule to each term.' },
        { step: 4, instruction: 'Evaluate at the limits.', math: 'π(1/3 − 1/5) = π(2/15)', explanation: '1/3−1/5 = 5/15−3/15 = 2/15.' },
      ],
      finalAnswer: 'V = 2π/15 ≈ 0.419 cubic units.',
    },
    whyItWorks:
      'Each washer\'s cross-sectional area is the area of the outer disk minus the area of the inner disk removed ' +
      'from its center: π[R(x)]² − π[r(x)]² = π([R(x)]²−[r(x)]²) — summing these thin washer volumes across ' +
      '[a,b] via integration gives the total volume of the hollow solid.',
    realLifeExample: {
      title: 'Computing the volume of a metal washer or pipe segment',
      scenario: 'A machinist manufactures a ring-shaped washer or a pipe segment, whose cross-section is an ' +
        'annulus (a disk with a smaller disk removed) rather than a solid disk.',
      explanation: 'The washer method computes exactly how much material such a hollow, ring-shaped part ' +
        'requires, directly from its inner and outer radius functions.',
    },
    practiceQuestions: [
      {
        id: 'washer-method-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the volume when the region between R(x)=2 (outer) and r(x)=x (inner), from x=0 to x=2, is rotated around the x-axis.',
        hints: ['V = π∫₀² (4 − x²) dx.'],
        correctAnswer: 16.755,
        tolerance: 0.01,
        explanation: 'V = π[4x − x³/3]₀² = π(8 − 8/3) = π(16/3) ≈ 16.755.',
      },
    ],
    commonMistake:
      'Squaring the difference of the radii, (R(x)−r(x))², instead of subtracting the squares, [R(x)]²−[r(x)]² ' +
      '— these are not the same, and only the second one correctly represents "outer disk area minus inner disk area."',
    quickReview: [
      'V = π∫ₐᵇ ([R(x)]²−[r(x)]²) dx — outer radius squared minus inner radius squared.',
      'Used when the region being rotated does not touch the axis of rotation directly.',
      'Square each radius separately — never square their difference.',
    ],
  },
};
