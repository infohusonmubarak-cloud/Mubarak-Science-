import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 10 — Trigonometry. Matches sections
// 10.1-10.8 of the textbook exactly.
export const chapter10Concepts: Record<string, Concept> = {
  'meaning-of-an-angle-and-standard-position': {
    slug: 'meaning-of-an-angle-and-standard-position',
    title: 'Meaning of an Angle and Standard Position',
    difficulty: 'easy',
    simpleExplanation:
      'An angle in standard position has its vertex at the origin and its initial side along the ' +
      'positive x-axis. The terminal side is where it ends after rotating — counterclockwise for a ' +
      'positive angle, clockwise for a negative angle. Two angles with the same terminal side (differing by a whole number of full turns) are called coterminal.',
    whyItMatters:
      'Standard position gives every angle a consistent, comparable "starting line" — the ' +
      'foundation for placing angles on the coordinate plane and defining trigonometric ratios for angles beyond just triangles.',
    diagram: {
      id: 'standard-position-diagram',
      title: 'An angle θ in standard position',
      altText: 'An angle drawn with its vertex at the origin, initial side along the positive x-axis, and terminal side rotated counterclockwise',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 5, y: 0, label: 'initial side', labelDx: 10, labelDy: 6 },
          { x: 3.83, y: 3.21, label: 'terminal side', labelDx: 12, labelDy: 6 },
        ],
        segments: [
          { from: [0, 0], to: [5, 0] },
          { from: [0, 0], to: [3.83, 3.21] },
        ],
        arcs: [{ cx: 0, cy: 0, r: 1.5, startDeg: 0, endDeg: 40, label: 'θ' }],
      },
    },
    formulaSlug: 'coterminal-angles-formula',
    workedExample: {
      id: 'standard-position-worked-1',
      title: 'Find a positive coterminal angle',
      problemStatement: 'Find a positive angle less than 360° that is coterminal with −50°.',
      steps: [
        { step: 1, instruction: 'Add one full revolution (360°).', math: '−50° + 360°', explanation: 'Adding 360° gives the same terminal side.' },
        { step: 2, instruction: 'Evaluate.', math: '= 310°', explanation: 'This is between 0° and 360°.' },
      ],
      finalAnswer: '310° is coterminal with −50°',
    },
    whyItWorks:
      'Rotating by a full 360° (one complete revolution) always returns to the exact same terminal ' +
      'side, so adding or subtracting any whole number of 360° turns never changes which direction the angle points — only its numeric label.',
    realLifeExample: {
      title: 'Clock hands and compass bearings',
      scenario: 'A ship\'s compass bearing measures direction as an angle from a fixed reference (like north), and a full spin returns to the same direction.',
      explanation: 'Bearings of 30° and 390° point in exactly the same direction — coterminal angles, just like a clock hand returning to the same position after one full lap.',
    },
    practiceQuestions: [
      {
        id: 'standard-position-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find a positive angle less than 360° coterminal with 400°.',
        hints: ['Subtract 360° once.'],
        correctAnswer: 40,
        explanation: '400° − 360° = 40°.',
      },
    ],
    commonMistake:
      'Assuming a negative angle and its positive coterminal counterpart are somehow different ' +
      'angles — they point in the exact same direction (same terminal side), just measured with a different starting count.',
    quickReview: [
      'Standard position: vertex at origin, initial side on the positive x-axis.',
      'Positive angles rotate counterclockwise; negative angles rotate clockwise.',
      'Coterminal angles: θ + 360°n, for any integer n — same terminal side.',
    ],
  },

  'degree-radian-conversion': {
    slug: 'degree-radian-conversion',
    title: 'Degree-Radian Conversion',
    difficulty: 'medium',
    simpleExplanation:
      'A radian is defined as the angle created when an arc\'s length exactly equals the circle\'s ' +
      'radius. Since a full circle\'s circumference is 2πr, a full revolution is 2π radians — the same 360°. This gives the conversion: radians = degrees × (π/180).',
    whyItMatters:
      'Radians are the natural unit for angles in higher mathematics and physics (calculus formulas ' +
      'and circular motion equations assume radians) — fluently converting between degrees and radians is essential going forward.',
    diagram: {
      id: 'radian-diagram',
      title: 'One radian — where arc length equals the radius',
      altText: 'A circle showing an arc whose length equals the radius, with the corresponding central angle marked as 1 radian, approximately 57.3 degrees',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 5, y: 0, label: '', labelDx: 0, labelDy: 0 },
          { x: 2.70, y: 4.21, label: '', labelDx: 0, labelDy: 0 },
        ],
        segments: [
          { from: [0, 0], to: [5, 0], label: 'r' },
          { from: [0, 0], to: [2.70, 4.21], label: 'r' },
        ],
        arcs: [{ cx: 0, cy: 0, r: 5, startDeg: 0, endDeg: 57.3, label: 'arc = r' }],
      },
    },
    formulaSlug: 'degree-radian-conversion-formula',
    workedExample: {
      id: 'degree-radian-worked-1',
      title: 'Convert degrees to radians',
      problemStatement: 'Convert 150° to radians (leave your answer in terms of π).',
      steps: [
        { step: 1, instruction: 'Apply the conversion formula.', math: 'radians = degrees × (π/180)', explanation: 'Multiply by π/180 to convert to radians.' },
        { step: 2, instruction: 'Substitute.', math: '150 × (π/180)', explanation: 'Plug in the given degree value.' },
        { step: 3, instruction: 'Simplify the fraction.', math: '150/180 = 5/6,  so  5π/6', explanation: 'Reduce the fraction to lowest terms.' },
      ],
      finalAnswer: '150° = 5π/6 radians',
    },
    whyItWorks:
      'A full revolution measures 360° and also measures 2π radians (since the full circumference, ' +
      '2πr, contains exactly 2π "radius-length" arcs) — setting 360° = 2π radians and simplifying ' +
      'gives 1° = π/180 radians, the exact conversion factor.',
    realLifeExample: {
      title: 'Programming a robot arm\'s rotation',
      scenario: 'Many robotics and graphics programming libraries require rotation angles to be entered in radians, not degrees.',
      explanation: 'An engineer converting a design spec (given in degrees) to code must apply exactly this conversion formula before the robot arm will rotate correctly.',
    },
    practiceQuestions: [
      {
        id: 'degree-radian-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Convert π/3 radians to degrees.',
        options: [
          { id: 'a', text: '60°' },
          { id: 'b', text: '90°' },
          { id: 'c', text: '45°' },
          { id: 'd', text: '30°' },
        ],
        correctOptionId: 'a',
        hints: ['degrees = radians × (180/π).', '(π/3) × (180/π) = 180/3.'],
        explanation: '(π/3) × (180/π) = 60°.',
      },
    ],
    commonMistake:
      'Multiplying by 180/π when converting degrees to radians (or π/180 when converting radians to ' +
      'degrees) — these are inverses of each other, and using the wrong one gives a wildly incorrect result.',
    quickReview: [
      'radians = degrees × (π/180); degrees = radians × (180/π).',
      '360° = 2π radians; 180° = π radians.',
      'A radian is the angle where arc length equals the radius.',
    ],
  },

  'arc-length-of-a-sector': {
    slug: 'arc-length-of-a-sector',
    title: 'Arc Length of a Sector',
    difficulty: 'medium',
    simpleExplanation:
      'The length of an arc — a curved portion of a circle\'s circumference — is found by ' +
      's = rθ, where θ is the central angle in radians and r is the radius.',
    whyItMatters:
      'This directly connects an angle to a real physical length along a curve, essential for ' +
      'anything involving circular paths, from measuring pipes to designing curved roads.',
    diagram: {
      id: 'arc-length-diagram',
      title: 'A 90° sector, showing the arc length s',
      altText: 'A circle sector with a 90-degree central angle, showing the two radii and the curved arc s between them',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
        ],
        circles: [],
        segments: [
          { from: [0, 0], to: [5, 0], label: 'r' },
          { from: [0, 0], to: [0, 5], label: 'r' },
        ],
        arcs: [{ cx: 0, cy: 0, r: 5, startDeg: 0, endDeg: 90, label: 's' }],
      },
    },
    formulaSlug: 'arc-length-formula',
    workedExample: {
      id: 'arc-length-worked-1',
      title: 'Find an arc length',
      problemStatement: 'A circle has radius 8 cm. Find the arc length subtended by a central angle of 2 radians.',
      steps: [
        { step: 1, instruction: 'Apply the arc length formula.', math: 's = rθ', explanation: 'θ is already given in radians.' },
        { step: 2, instruction: 'Substitute the known values.', math: 's = 8 × 2', explanation: 'r=8, θ=2.' },
        { step: 3, instruction: 'Evaluate.', math: 's = 16', explanation: 'Multiply.' },
      ],
      finalAnswer: 's = 16 cm',
    },
    whyItWorks:
      'By the definition of a radian, an angle of exactly 1 radian corresponds to an arc exactly ' +
      'r long — so an angle of θ radians, being θ times as large, corresponds to an arc exactly θ times as long, giving s = rθ directly.',
    realLifeExample: {
      title: 'Measuring the path of a Ferris wheel car',
      scenario: 'An engineer wants to know how far a Ferris wheel car travels while the wheel rotates through a given angle.',
      explanation: 'Using s = rθ with the wheel\'s radius and the rotation angle (in radians) gives the exact arc-length distance traveled by the car.',
    },
    practiceQuestions: [
      {
        id: 'arc-length-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A circle has radius 6. Find the arc length for a central angle of 1.5 radians.',
        hints: ['s = rθ = 6 × 1.5.'],
        correctAnswer: 9,
        explanation: 's = 6 × 1.5 = 9.',
      },
    ],
    commonMistake:
      'Using θ in degrees directly in s = rθ without converting to radians first — this formula ' +
      'only works correctly when θ is measured in radians.',
    quickReview: [
      's = rθ, with θ in radians.',
      'Always convert θ to radians first if it is given in degrees.',
      'Comes directly from the definition of a radian.',
    ],
  },

  'area-of-a-sector': {
    slug: 'area-of-a-sector',
    title: 'Area of a Sector',
    difficulty: 'medium',
    simpleExplanation:
      'A sector is the pie-slice-shaped region between two radii and the arc connecting them. Its ' +
      'area is A = (1/2)r²θ, where θ is the central angle in radians.',
    whyItMatters:
      'This lets you find the area of any "slice" of a circle — used for anything from pizza slices ' +
      'to pie charts to the area swept by a rotating machine part.',
    diagram: {
      id: 'sector-area-diagram',
      title: 'A 60° sector, shaded',
      altText: 'A shaded pie-slice-shaped sector of a circle with a 60-degree central angle',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 }],
        polygons: [{ points: [[0, 0], [5, 0], [4.83, 1.29], [4.33, 2.5], [3.54, 3.54], [2.5, 4.33], [0, 0]] }],
        segments: [
          { from: [0, 0], to: [5, 0], label: 'r' },
          { from: [0, 0], to: [2.5, 4.33], label: 'r' },
        ],
        arcs: [{ cx: 0, cy: 0, r: 5, startDeg: 0, endDeg: 60 }],
      },
    },
    formulaSlug: 'sector-area-formula',
    workedExample: {
      id: 'sector-area-worked-1',
      title: 'Find the area of a sector',
      problemStatement: 'A circle has radius 10 cm. Find the area of a sector with central angle π/3 radians.',
      steps: [
        { step: 1, instruction: 'Apply the sector area formula.', math: 'A = (1/2)r²θ', explanation: 'θ is already in radians.' },
        { step: 2, instruction: 'Substitute the known values.', math: 'A = (1/2)(10²)(π/3)', explanation: 'r=10, θ=π/3.' },
        { step: 3, instruction: 'Evaluate.', math: 'A = (1/2)(100)(π/3) = 50π/3 ≈ 52.4', explanation: 'Simplify the expression.' },
      ],
      finalAnswer: 'A = 50π/3 ≈ 52.4 cm²',
    },
    whyItWorks:
      'A full circle (θ = 2π) has area πr². A sector with angle θ is exactly the fraction θ/(2π) of ' +
      'the full circle, so its area is (θ/2π) × πr² = (1/2)r²θ — the π cancels neatly, leaving this simplified formula.',
    realLifeExample: {
      title: 'Calculating a pie chart wedge\'s area',
      scenario: 'A designer needs the exact area of one wedge of a circular pie chart, given the chart\'s radius and the wedge\'s angle.',
      explanation: 'The sector area formula gives that wedge\'s exact area directly from its central angle, without needing to measure it by hand.',
    },
    practiceQuestions: [
      {
        id: 'sector-area-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A circle has radius 4. Find the area of a sector with central angle 2 radians.',
        hints: ['A = (1/2)(4²)(2).'],
        correctAnswer: 16,
        explanation: 'A = (1/2)(16)(2) = 16.',
      },
    ],
    commonMistake:
      'Forgetting the (1/2) factor, or using the diameter instead of the radius — the formula ' +
      'specifically uses r² (radius squared), not the diameter.',
    quickReview: [
      'A = (1/2)r²θ, with θ in radians.',
      'A sector is the fraction θ/(2π) of the full circle\'s area, πr².',
      'Always use the radius, not the diameter.',
    ],
  },

  'the-six-trigonometric-ratios': {
    slug: 'the-six-trigonometric-ratios',
    title: 'The Six Trigonometric Ratios',
    difficulty: 'medium',
    simpleExplanation:
      'For an acute angle θ in a right triangle, there are six trigonometric ratios, built from the ' +
      'three sides (opposite, adjacent, hypotenuse): sine, cosine, and tangent (SOH-CAH-TOA), plus their three reciprocals — cosecant, secant, and cotangent.',
    whyItMatters:
      'These six ratios are the core vocabulary of trigonometry — every other trigonometric result in this chapter builds on these six fixed relationships.',
    diagram: {
      id: 'six-trig-ratios-diagram',
      title: 'A right triangle labelled with opposite, adjacent, and hypotenuse',
      altText: 'A right triangle with angle theta marked at one vertex, and its sides labelled opposite, adjacent, and hypotenuse',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 4, label: 'A', labelDx: -6, labelDy: 6 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 6, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
        ],
        segments: [
          { from: [0, 4], to: [0, 0], label: 'opp' },
          { from: [0, 0], to: [6, 0], label: 'adj' },
          { from: [6, 0], to: [0, 4], label: 'hyp' },
        ],
        angleMarks: [
          { at: [6, 0], from: [0, 0], to: [0, 4], label: 'θ' },
          { at: [0, 0], from: [0, 4], to: [6, 0], rightAngle: true },
        ],
      },
    },
    formulaSlug: 'six-trig-ratios-formula',
    workedExample: {
      id: 'six-trig-ratios-worked-1',
      title: 'Find all six trigonometric ratios',
      problemStatement: 'In a right triangle, the side opposite θ is 3, the adjacent side is 4, and the hypotenuse is 5. Find sinθ, cosθ, and tanθ.',
      steps: [
        { step: 1, instruction: 'Apply the sine ratio.', math: 'sinθ = opp/hyp = 3/5', explanation: 'Opposite over hypotenuse.' },
        { step: 2, instruction: 'Apply the cosine ratio.', math: 'cosθ = adj/hyp = 4/5', explanation: 'Adjacent over hypotenuse.' },
        { step: 3, instruction: 'Apply the tangent ratio.', math: 'tanθ = opp/adj = 3/4', explanation: 'Opposite over adjacent.' },
      ],
      finalAnswer: 'sinθ=3/5, cosθ=4/5, tanθ=3/4',
    },
    whyItWorks:
      'Because all right triangles with the same angle θ are similar (AA similarity, from Chapter ' +
      '8), the ratio of any two sides is always the same fixed number for that θ, no matter how big or small the triangle is — which is exactly what makes each trigonometric ratio a well-defined function of the angle alone.',
    realLifeExample: {
      title: 'Calculating a ramp\'s rise from its angle',
      scenario: 'A wheelchair ramp is built at a fixed angle, and the builder needs to know how much it rises over a given horizontal run.',
      explanation: 'tanθ = rise/run directly gives the rise, once the angle and the horizontal run are known — a direct real-world use of the tangent ratio.',
    },
    practiceQuestions: [
      {
        id: 'six-trig-ratios-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In a right triangle, opp=6, adj=8, hyp=10. Find cosθ (as a decimal).',
        hints: ['cosθ = adj/hyp = 8/10.'],
        correctAnswer: 0.8,
        explanation: 'cosθ = 8/10 = 0.8.',
      },
    ],
    commonMistake:
      'Mixing up "opposite" and "adjacent" — the opposite side is always across from angle θ, never ' +
      'touching it; the adjacent side touches θ but is not the hypotenuse.',
    quickReview: [
      'sinθ=opp/hyp, cosθ=adj/hyp, tanθ=opp/adj (SOH-CAH-TOA).',
      'cscθ, secθ, cotθ are the reciprocals of sinθ, cosθ, tanθ respectively.',
      'These ratios are fixed for a given angle θ, regardless of the triangle\'s size (similar triangles).',
    ],
  },

  'pythagorean-identity-and-reciprocal-relations': {
    slug: 'pythagorean-identity-and-reciprocal-relations',
    title: 'The Pythagorean Identity and Reciprocal Relations',
    difficulty: 'hard',
    simpleExplanation:
      'The six trigonometric ratios are not independent — they are linked by fixed relationships. ' +
      'The most important is the Pythagorean identity, sin²θ + cos²θ = 1, which holds for every ' +
      'angle θ. Also, tanθ always equals sinθ/cosθ.',
    whyItMatters:
      'These identities let you find any trigonometric ratio of an angle from just one known ratio, ' +
      'without needing to know the angle itself or measure a triangle.',
    diagram: {
      id: 'pythagorean-identity-diagram',
      title: 'sinθ and cosθ as the legs of a right triangle with hypotenuse r',
      altText: 'A right triangle formed by a radius from the origin, its horizontal projection (cosine), and its vertical projection (sine)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 3.83, y: 3.21, label: 'P', labelDx: 8, labelDy: 6 },
          { x: 3.83, y: 0, label: '', labelDx: 0, labelDy: 0 },
        ],
        segments: [
          { from: [0, 0], to: [3.83, 3.21], label: 'r' },
          { from: [0, 0], to: [3.83, 0], label: 'r·cosθ' },
          { from: [3.83, 0], to: [3.83, 3.21], dashed: true, label: 'r·sinθ' },
        ],
        angleMarks: [
          { at: [0, 0], from: [3.83, 0], to: [3.83, 3.21], label: 'θ' },
          { at: [3.83, 0], from: [0, 0], to: [3.83, 3.21], rightAngle: true },
        ],
      },
    },
    formulaSlug: 'pythagorean-trig-identity',
    workedExample: {
      id: 'pythagorean-identity-worked-1',
      title: 'Find cosθ given sinθ',
      problemStatement: 'If sinθ = 3/5 and θ is acute, find cosθ.',
      steps: [
        { step: 1, instruction: 'Apply the Pythagorean identity.', math: 'sin²θ + cos²θ = 1', explanation: 'This holds for every angle.' },
        { step: 2, instruction: 'Substitute the known sinθ.', math: '(3/5)² + cos²θ = 1  →  9/25 + cos²θ = 1', explanation: 'Square 3/5.' },
        { step: 3, instruction: 'Solve for cos²θ, then take the square root.', math: 'cos²θ = 16/25  →  cosθ = 4/5', explanation: 'Positive root, since θ is acute (cosine is positive in that range).' },
      ],
      finalAnswer: 'cosθ = 4/5',
    },
    whyItWorks:
      'Stated simply: if a radius r reaches a point P, its horizontal projection has length r·cosθ ' +
      'and its vertical projection has length r·sinθ, forming a right triangle with hypotenuse r. ' +
      'The Pythagorean theorem gives (r·cosθ)² + (r·sinθ)² = r² — dividing both sides by r² leaves exactly cos²θ + sin²θ = 1.',
    realLifeExample: {
      title: 'Checking a GPS position calculation',
      scenario: 'A navigation system computes a position\'s sine and cosine components from an angle and needs to verify the calculation is internally consistent.',
      explanation: 'Since sin²θ + cos²θ must always equal exactly 1, this identity is often used as a quick sanity check that a computed angle\'s trigonometric values are correct.',
    },
    practiceQuestions: [
      {
        id: 'pythagorean-identity-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'If cosθ = 12/13 and θ is acute, find sinθ (as a fraction\'s numerator over 13 — give just the numerator).',
        hints: ['sin²θ = 1 − cos²θ = 1 − 144/169.'],
        correctAnswer: 5,
        explanation: 'sin²θ = 1 − 144/169 = 25/169, so sinθ = 5/13. The numerator is 5.',
      },
    ],
    commonMistake:
      'Forgetting that sin²θ means (sinθ)², not sin(θ²) — the square applies to the whole sine ' +
      'value, not to the angle before taking the sine.',
    quickReview: [
      'sin²θ + cos²θ = 1, for every angle θ.',
      'tanθ = sinθ/cosθ.',
      'Proof idea: the Pythagorean theorem applied to the horizontal and vertical projections of a radius.',
    ],
  },

  'trig-ratios-for-special-angles': {
    slug: 'trig-ratios-for-special-angles',
    title: 'Trigonometric Ratios for Special Angles',
    difficulty: 'medium',
    simpleExplanation:
      'The angles 0°, 30°, 45°, 60°, and 90° have exact, memorizable trigonometric ratios, derived ' +
      'directly from the 45-45-90 and 30-60-90 special right triangles (Chapter 8) — no calculator or decimal approximation needed.',
    whyItMatters:
      'These exact values appear constantly throughout trigonometry and calculus — memorizing them ' +
      '(or knowing how to quickly re-derive them from the special triangles) saves significant time.',
    diagram: {
      id: 'special-angles-diagram',
      title: 'The special angles 30°, 45°, and 60° marked on a circle',
      altText: 'A circle with three points marked at 30, 45, and 60 degrees, each connected to the centre by a radius',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 8.66, y: 5, label: '30°', labelDx: 10, labelDy: 2 },
          { x: 7.07, y: 7.07, label: '45°', labelDx: 6, labelDy: 8 },
          { x: 5, y: 8.66, label: '60°', labelDx: -2, labelDy: 8 },
        ],
        circles: [{ cx: 0, cy: 0, r: 10, dashed: true }],
        segments: [
          { from: [0, 0], to: [8.66, 5] },
          { from: [0, 0], to: [7.07, 7.07] },
          { from: [0, 0], to: [5, 8.66] },
        ],
      },
    },
    formulaSlug: 'special-angle-trig-values-table',
    workedExample: {
      id: 'special-angles-worked-1',
      title: 'Derive sin(30°) and cos(30°) from a 30-60-90 triangle',
      problemStatement: 'Using a 30-60-90 triangle with sides x, x√3, 2x, find sin(30°) and cos(30°).',
      steps: [
        { step: 1, instruction: 'Identify the sides relative to the 30° angle.', math: 'opp = x (short leg),  adj = x√3,  hyp = 2x', explanation: 'The side opposite 30° is the short leg.' },
        { step: 2, instruction: 'Apply the sine ratio.', math: 'sin(30°) = x / 2x = 1/2', explanation: 'The x cancels.' },
        { step: 3, instruction: 'Apply the cosine ratio.', math: 'cos(30°) = x√3 / 2x = √3/2', explanation: 'The x cancels again.' },
      ],
      finalAnswer: 'sin(30°) = 1/2,  cos(30°) = √3/2',
    },
    whyItWorks:
      'Since the special right triangles have fixed, known side ratios (independent of size), ' +
      'plugging those exact ratios into the definitions of sine and cosine (opp/hyp, adj/hyp) always ' +
      'produces the same exact values — no approximation is ever needed.',
    realLifeExample: {
      title: 'Exact calculations in engineering design',
      scenario: 'An engineer designing a component with a 60° angle wants an exact, not approximate, value for a related trigonometric ratio, to avoid compounding rounding errors.',
      explanation: 'Using the special angle exact values (like cos(60°) = 1/2) keeps subsequent calculations perfectly precise, rather than accumulating decimal rounding errors.',
    },
    practiceQuestions: [
      {
        id: 'special-angles-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is tan(45°)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '0' },
          { id: 'c', text: '√2' },
          { id: 'd', text: 'undefined' },
        ],
        correctOptionId: 'a',
        hints: ['A 45-45-90 triangle has equal legs.'],
        explanation: 'tan(45°) = opp/adj = x/x = 1, since the legs of a 45-45-90 triangle are equal.',
      },
    ],
    commonMistake:
      'Mixing up sin and cos values for 30° and 60° — they are "swapped" (sin30°=cos60°=1/2, ' +
      'cos30°=sin60°=√3/2) since 30° and 60° are complementary angles.',
    quickReview: [
      'sin: 0, 1/2, √2/2, √3/2, 1 for θ = 0°, 30°, 45°, 60°, 90° (cos is the same list reversed).',
      'Derive these from the 45-45-90 and 30-60-90 special right triangles.',
      '30° and 60° are complementary, so their sin and cos values swap.',
    ],
  },

  'solving-right-triangles': {
    slug: 'solving-right-triangles',
    title: 'Solving Right Triangles',
    difficulty: 'hard',
    simpleExplanation:
      '"Solving" a right triangle means finding every missing side and angle. Given enough ' +
      'information (one side plus one other side or angle), you can find everything else using the ' +
      'trigonometric ratios, the Pythagorean theorem, and the fact that the two acute angles sum to 90°.',
    whyItMatters:
      'This combines everything from this chapter into one complete practical skill — the ' +
      'core technique behind surveying, navigation, and construction measurements.',
    diagram: {
      id: 'solving-right-triangle-diagram',
      title: 'A right triangle with one angle and the hypotenuse known',
      altText: 'A right triangle with a 35-degree angle marked and the hypotenuse labelled 10, with the other two sides unlabelled to be found',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 3.5, label: 'A', labelDx: -6, labelDy: 6 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 5.7, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
        ],
        segments: [
          { from: [0, 3.5], to: [0, 0] },
          { from: [0, 0], to: [5.7, 0] },
          { from: [5.7, 0], to: [0, 3.5], label: '10' },
        ],
        angleMarks: [
          { at: [5.7, 0], from: [0, 0], to: [0, 3.5], label: '35°' },
          { at: [0, 0], from: [0, 3.5], to: [5.7, 0], rightAngle: true },
        ],
      },
    },
    formulaSlug: 'six-trig-ratios-formula',
    workedExample: {
      id: 'solving-right-triangle-worked-1',
      title: 'Solve a right triangle',
      problemStatement: 'In right triangle ABC (right angle at B), ∠C = 35° and hypotenuse AC = 10. Find AB, BC, and ∠A.',
      steps: [
        { step: 1, instruction: 'Find AB (opposite ∠C) using sine.', math: 'sin(35°) = AB/10  →  AB = 10 sin(35°) ≈ 5.74', explanation: 'sinθ = opp/hyp.' },
        { step: 2, instruction: 'Find BC (adjacent to ∠C) using cosine.', math: 'cos(35°) = BC/10  →  BC = 10 cos(35°) ≈ 8.19', explanation: 'cosθ = adj/hyp.' },
        { step: 3, instruction: 'Find the remaining angle.', math: '∠A = 90° − 35° = 55°', explanation: 'The two acute angles of a right triangle sum to 90°.' },
      ],
      finalAnswer: 'AB ≈ 5.74, BC ≈ 8.19, ∠A = 55°',
    },
    whyItWorks:
      'A right triangle has only 3 independent pieces of information (out of its 3 angles and 3 ' +
      'sides, since one angle is always 90° and the other two always sum to 90°) — once one side and ' +
      'one other measurement are known, the trigonometric ratios and the angle sum rule are always enough to solve for everything else.',
    realLifeExample: {
      title: 'Surveying an inaccessible distance',
      scenario: 'A surveyor measures one angle and one distance to a landmark across a river, without being able to physically cross it.',
      explanation: 'Solving the resulting right triangle using trigonometric ratios gives every other distance and angle needed, entirely from the surveyor\'s side of the river.',
    },
    practiceQuestions: [
      {
        id: 'solving-right-triangle-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In a right triangle, one acute angle is 40° and the adjacent side is 12. Find the opposite side. (tan40° ≈ 0.839. Round to 1 decimal place.)',
        hints: ['tanθ = opp/adj.', 'opp = adj × tanθ.'],
        correctAnswer: 10.1,
        tolerance: 0.1,
        explanation: 'opp = 12 × tan(40°) ≈ 12 × 0.839 ≈ 10.1.',
      },
    ],
    commonMistake:
      'Choosing the wrong trigonometric ratio for the given information — always identify which ' +
      'sides are known/unknown relative to the given angle (opposite, adjacent, or hypotenuse) before picking sin, cos, or tan.',
    quickReview: [
      'Use sin, cos, or tan to find a missing side from a known angle and one known side.',
      'The two acute angles of a right triangle always sum to 90°.',
      'Use the Pythagorean theorem as a check, or to find a third side once two are known.',
    ],
  },

  'angle-of-elevation-and-depression': {
    slug: 'angle-of-elevation-and-depression',
    title: 'Angle of Elevation and Angle of Depression',
    difficulty: 'medium',
    simpleExplanation:
      'The angle of elevation is the angle measured upward from a horizontal line to a higher ' +
      'object. The angle of depression is the angle measured downward from a horizontal line to a ' +
      'lower object. Because the horizontal reference lines are parallel, the angle of elevation from one point always equals the angle of depression from the other (alternate angles).',
    whyItMatters:
      'These two angles are the standard setup for real-world height-and-distance problems — ' +
      'measuring things you cannot directly reach, like a building\'s height or a ship\'s distance from a cliff.',
    diagram: {
      id: 'elevation-depression-diagram',
      title: 'The angle of elevation from an observer to the top of a building',
      altText: 'An observer at ground level looking up at the top of a building, with the angle of elevation marked between the horizontal line of sight and the line to the building top',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'Observer', labelDx: -10, labelDy: -6 },
          { x: 6, y: 0, label: '', labelDx: 0, labelDy: 0 },
          { x: 6, y: 5, label: 'Top', labelDx: 8, labelDy: 4 },
        ],
        segments: [
          { from: [0, 0], to: [6, 0], dashed: true, label: 'horizontal' },
          { from: [0, 0], to: [6, 5] },
          { from: [6, 0], to: [6, 5] },
        ],
        angleMarks: [
          { at: [0, 0], from: [6, 0], to: [6, 5], label: 'angle of elevation' },
          { at: [6, 0], from: [0, 0], to: [6, 5], rightAngle: true },
        ],
      },
    },
    formulaSlug: 'six-trig-ratios-formula',
    workedExample: {
      id: 'elevation-worked-1',
      title: 'Find a height using the angle of elevation',
      problemStatement: 'From a point 40 m from the base of a tower, the angle of elevation to the top is 32°. Find the tower\'s height. (tan32° ≈ 0.625.)',
      steps: [
        { step: 1, instruction: 'Sketch the situation as a right triangle.', explanation: 'Horizontal distance = 40 m (adjacent), height = unknown (opposite), angle = 32°.' },
        { step: 2, instruction: 'Choose the tangent ratio.', math: 'tan(32°) = height / 40', explanation: 'Tangent relates the opposite (height) and adjacent (distance) sides.' },
        { step: 3, instruction: 'Solve for height.', math: 'height = 40 × tan(32°) ≈ 40 × 0.625', explanation: 'Multiply both sides by 40.' },
        { step: 4, instruction: 'Evaluate.', math: '≈ 25 m', explanation: 'Compute the final value.' },
      ],
      finalAnswer: 'Height ≈ 25 m',
    },
    whyItWorks:
      'The observer\'s horizontal sightline and the ground are parallel, and the tower\'s vertical ' +
      'height forms a right angle with the ground — so the angle of elevation, the horizontal ' +
      'distance, and the tower\'s height together form a right triangle, exactly like any other right-triangle trigonometry problem.',
    realLifeExample: {
      title: 'Air traffic control tracking',
      scenario: 'An air traffic controller measures the angle of elevation to an aircraft and its known horizontal distance to estimate its altitude.',
      explanation: 'This is the same elevation-angle trigonometry, used to estimate real-time altitude from ground-based angle measurements.',
    },
    practiceQuestions: [
      {
        id: 'elevation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'From the top of a 50 m cliff, the angle of depression to a boat is 20°. Find the boat\'s horizontal distance from the base of the cliff. (tan20° ≈ 0.364. Round to the nearest metre.)',
        hints: ['The angle of depression from the top equals the angle of elevation from the boat.', 'tan(20°) = 50/distance.'],
        correctAnswer: 137,
        tolerance: 2,
        explanation: 'distance = 50 / tan(20°) ≈ 50 / 0.364 ≈ 137 m.',
      },
    ],
    commonMistake:
      'Measuring the angle of depression from the wrong reference line — it is always measured from ' +
      'the HORIZONTAL at the observer\'s eye level, not from the vertical or from the ground.',
    quickReview: [
      'Angle of elevation: upward from horizontal. Angle of depression: downward from horizontal.',
      'Angle of elevation from one point = angle of depression from the other (alternate angles, parallel horizontals).',
      'Both set up a right triangle solvable with the trigonometric ratios.',
    ],
  },
};
