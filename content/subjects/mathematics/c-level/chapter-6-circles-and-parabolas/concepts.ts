import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 6 — Circles and Parabolas. Matches
// the textbook preface's description: conic sections, circle and
// parabola equations, translation and rotation of axes.
export const chapter6CConcepts: Record<string, Concept> = {
  'what-is-a-conic-section': {
    slug: 'what-is-a-conic-section',
    title: 'What Is a Conic Section?',
    difficulty: 'easy',
    simpleExplanation:
      'A conic section is any curve formed by slicing a (double) cone with a flat plane. Depending on ' +
      'the angle of the slice, the result is a circle, an ellipse, a parabola, or a hyperbola. This ' +
      'chapter focuses on two of these: the circle and the parabola.',
    whyItMatters:
      'Recognizing conics as different "slices of the same cone" explains why these seemingly different ' +
      'curves share closely related algebraic forms — it unifies them under one geometric idea.',
    workedExample: {
      id: 'conic-overview-worked-1',
      title: 'Identify conic sections from their equations',
      problemStatement: 'Identify which conic section each equation represents: (a) x²+y²=9, (b) y=x²+3.',
      steps: [
        { step: 1, instruction: 'Examine equation (a).', math: 'x²+y²=9', explanation: 'Both x² and y² appear, with equal (1) coefficients, and no other terms — this is a circle.' },
        { step: 2, instruction: 'Examine equation (b).', math: 'y=x²+3', explanation: 'Only ONE variable (x) is squared — this is a parabola.' },
      ],
      finalAnswer: '(a) is a circle; (b) is a parabola.',
    },
    whyItWorks:
      'A circle\'s equation has matching coefficients on x² and y² (both represent the same squared ' +
      'distance from the center); a parabola\'s equation squares only ONE variable, since it measures ' +
      'distance from a single line (the directrix) rather than a single point equally in every direction.',
    realLifeExample: {
      title: 'The shape of a flashlight beam',
      scenario: 'A flashlight\'s cone-shaped beam of light, shone onto a flat wall at different angles, creates a differently shaped bright patch.',
      explanation: 'Shining it straight on gives a circle; tilting it gives an ellipse; tilting it further eventually gives a parabola-shaped patch — a physical demonstration of conic sections.',
    },
    practiceQuestions: [
      {
        id: 'conic-overview-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which equation represents a parabola?',
        options: [
          { id: 'a', text: 'y = 3x² + 1' },
          { id: 'b', text: 'x² + y² = 25' },
          { id: 'c', text: '(x−1)² + (y+2)² = 9' },
          { id: 'd', text: 'x² + y² − 4x = 0' },
        ],
        correctOptionId: 'a',
        hints: ['Look for the equation with only ONE squared variable.'],
        explanation: 'Only y=3x²+1 has a single squared variable; the others all have both x² and y² with matching coefficients (circles).',
      },
    ],
    commonMistake:
      'Assuming any equation with a squared term is automatically a circle — the SPECIFIC form of the ' +
      'equation (which variables are squared, and their coefficients) determines which conic it actually is.',
    quickReview: [
      'Conics come from slicing a cone: circle, ellipse, parabola, and hyperbola.',
      'A circle has both x² and y², with equal coefficients.',
      'A parabola has only one squared variable.',
    ],
  },

  'the-standard-equation-of-a-circle': {
    slug: 'the-standard-equation-of-a-circle',
    title: 'The Standard Equation of a Circle',
    difficulty: 'easy',
    simpleExplanation:
      'A circle with center (h,k) and radius r has the standard equation (x−h)² + (y−k)² = r² — the ' +
      'set of all points at exactly distance r from the center.',
    whyItMatters:
      'This is the most direct, universally recognized way to describe a circle, and the foundation for ' +
      'recognizing a circle\'s equation even when written in a less obvious (general) form.',
    diagram: {
      id: 'circle-standard-equation-diagram',
      title: 'A circle with center C and radius r',
      altText: 'A circle with its center labelled C and a radius line labelled r drawn from the center to the edge of the circle',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 3 }],
        points: [{ x: 0, y: 0, label: 'C(h,k)', labelDx: -20, labelDy: 0 }],
        segments: [{ from: [0, 0], to: [3, 0], label: 'r', labelDx: 0, labelDy: 12 }],
      },
    },
    formulaSlug: 'standard-equation-of-a-circle-formula',
    workedExample: {
      id: 'circle-standard-worked-1',
      title: 'Write a circle\'s standard equation',
      problemStatement: 'Write the equation of a circle with center (3,−2) and radius 4.',
      steps: [
        { step: 1, instruction: 'Apply the standard equation.', math: '(x−h)² + (y−k)² = r²', explanation: 'Substitute the center and radius.' },
        { step: 2, instruction: 'Substitute h=3, k=−2, r=4.', math: '(x−3)² + (y+2)² = 4²', explanation: 'Note (y−(−2)) becomes (y+2).' },
        { step: 3, instruction: 'Simplify the right side.', math: '4² = 16', explanation: 'Square the radius.' },
      ],
      finalAnswer: '(x−3)² + (y+2)² = 16.',
    },
    whyItWorks:
      'The left side, (x−h)²+(y−k)², is exactly the squared distance formula between a point (x,y) and ' +
      'the center (h,k) — setting it equal to r² is precisely the condition "every point on the circle ' +
      'is distance r from the center."',
    realLifeExample: {
      title: 'Modeling a circular sensor\'s detection range',
      scenario: 'A circular motion sensor detects movement anywhere within a fixed radius of its mounted location.',
      explanation: 'The sensor\'s detection zone is described exactly by the standard equation of a circle, using its mounted position as the center.',
    },
    practiceQuestions: [
      {
        id: 'circle-standard-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A circle has equation (x+1)²+(y−5)²=81. Find its radius.',
        hints: ['The right side of the equation is r².'],
        correctAnswer: 9,
        explanation: '√81 = 9.',
      },
    ],
    commonMistake:
      'Forgetting to square the radius on the right side of the equation — writing "=r" instead of "=r²".',
    quickReview: [
      '(x−h)² + (y−k)² = r².',
      'The center is (h,k); the right side is the radius SQUARED.',
      'Directly built from the distance formula.',
    ],
  },

  'the-general-equation-of-a-circle': {
    slug: 'the-general-equation-of-a-circle',
    title: 'The General Equation of a Circle',
    difficulty: 'medium',
    simpleExplanation:
      'A circle\'s equation is not always given in standard form — it may be expanded out as ' +
      'x²+y²+Dx+Ey+F=0. Completing the square on the x and y terms converts it back into standard ' +
      'form, revealing the center and radius directly.',
    whyItMatters:
      'Equations that come from calculations rarely arrive pre-packaged in standard form — this ' +
      'technique recovers the geometrically meaningful center and radius from whatever form the equation happens to take.',
    formulaSlug: 'general-equation-of-a-circle-formula',
    workedExample: {
      id: 'circle-general-worked-1',
      title: 'Find a circle\'s center and radius by completing the square',
      problemStatement: 'Find the center and radius of the circle x²+y²−6x+4y−12=0.',
      steps: [
        { step: 1, instruction: 'Group terms by variable, and move the constant to the right.', math: '(x²−6x) + (y²+4y) = 12', explanation: 'Rearrange the original equation.' },
        { step: 2, instruction: 'Complete the square for each variable.', math: '(x²−6x+9) + (y²+4y+4) = 12+9+4', explanation: 'Add the same constants to BOTH sides.' },
        { step: 3, instruction: 'Simplify the right side.', math: '12+9+4 = 25', explanation: 'Add up the constants.' },
        { step: 4, instruction: 'Write in standard form.', math: '(x−3)² + (y+2)² = 25', explanation: 'Each grouped expression is now a perfect square.' },
      ],
      finalAnswer: 'Center (3, −2), radius √25 = 5.',
    },
    whyItWorks:
      'Completing the square is a reversible algebraic rearrangement — adding and subtracting the same ' +
      'constant does not change the equation\'s solutions, so the resulting standard-form equation ' +
      'describes exactly the same circle as the original expanded one.',
    realLifeExample: {
      title: 'Recovering a Wi-Fi router\'s coverage circle from a signal-strength equation',
      scenario: 'Engineers derive an expanded equation for a router\'s coverage boundary from raw signal-strength measurements.',
      explanation: 'Completing the square converts this into standard form, revealing the router\'s actual position (center) and coverage radius directly.',
    },
    practiceQuestions: [
      {
        id: 'circle-general-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the radius of the circle x²+y²+2x−4y−4=0, after completing the square.',
        hints: ['Group: (x²+2x)+(y²−4y)=4.', 'Complete the square for x and y.'],
        correctAnswer: 3,
        explanation: '(x+1)²+(y−2)² = 4+1+4 = 9, so radius = √9 = 3.',
      },
    ],
    commonMistake:
      'Adding the completing-the-square constants only to the left side of the equation — the exact ' +
      'same constants must also be added to the RIGHT side, or the equation\'s meaning changes.',
    quickReview: [
      'Group terms by variable, then complete the square for each one separately.',
      'Add the same constants to both sides of the equation.',
      'The result reveals the center (h,k) and radius r directly.',
    ],
  },

  'the-focus-directrix-definition-of-a-parabola': {
    slug: 'the-focus-directrix-definition-of-a-parabola',
    title: 'The Focus-Directrix Definition of a Parabola',
    difficulty: 'medium',
    simpleExplanation:
      'A parabola is the set of all points equidistant from a fixed point (the focus) and a fixed line ' +
      '(the directrix) — every point on the curve is exactly as far from the focus as it is from the directrix.',
    whyItMatters:
      'This geometric definition is what actually generates the parabola\'s curve — the algebraic ' +
      'equations covered next are derived directly from this defining property.',
    diagram: {
      id: 'parabola-focus-directrix-diagram',
      title: 'The parabola y=x²/4, with focus (0,1) and directrix y=−1',
      altText: 'A parabola opening upward, with a point marked as its focus above the vertex, and a horizontal dashed line below the vertex representing the directrix',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => (x * x) / 4,
        fn2: () => -1,
        min: -4,
        max: 4,
        markPoints: [{ x: 0, y: 1, label: 'focus (0,1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'parabola-focus-directrix-formula',
    workedExample: {
      id: 'parabola-focus-directrix-worked-1',
      title: 'Verify a point lies on a parabola using the focus-directrix definition',
      problemStatement: 'A parabola has focus (0,2) and directrix y=−2. Verify that the point (4,2) lies on this parabola.',
      steps: [
        { step: 1, instruction: 'Find the distance from (4,2) to the focus (0,2).', math: '√((4−0)² + (2−2)²) = √16 = 4', explanation: 'Apply the distance formula.' },
        { step: 2, instruction: 'Find the (perpendicular) distance from (4,2) to the directrix y=−2.', math: '|2−(−2)| = 4', explanation: 'The perpendicular distance to a horizontal line is just the difference in y-values.' },
        { step: 3, instruction: 'Compare the two distances.', math: '4 = 4', explanation: 'Both distances are equal.' },
      ],
      finalAnswer: 'Both distances equal 4, confirming (4,2) lies on the parabola.',
    },
    whyItWorks:
      'This equidistance condition is literally the DEFINITION of a parabola — any point satisfying it ' +
      'is, by definition, on the curve, and any point on the curve must satisfy it; this is exactly how ' +
      'the standard algebraic equation (covered next) gets derived.',
    realLifeExample: {
      title: 'Satellite dish and headlight reflector design',
      scenario: 'A satellite dish or car headlight uses a parabolic reflector, taking advantage of a special reflective property tied directly to the focus.',
      explanation: 'All incoming signals parallel to the axis reflect toward the single focus point (or, in a headlight, light from the focus reflects out in parallel rays) — a direct physical consequence of the focus-directrix definition.',
    },
    practiceQuestions: [
      {
        id: 'parabola-focus-directrix-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A parabola has focus (0,3) and directrix y=−3. Find the distance from the point (6,3) to the focus.',
        hints: ['Apply the distance formula between (6,3) and (0,3).'],
        correctAnswer: 6,
        explanation: '√((6−0)²+(3−3)²) = √36 = 6.',
      },
    ],
    commonMistake:
      'Computing the distance to the directrix incorrectly — remember it is the PERPENDICULAR distance ' +
      'to the line itself, not the distance to some specific point on it.',
    quickReview: [
      'A parabola: every point is equidistant from the focus and the directrix.',
      'This defining property is what the algebraic equation is built from.',
      'The reflective property of parabolas (used in dishes and headlights) follows directly from this definition.',
    ],
  },

  'the-standard-equation-of-a-parabola': {
    slug: 'the-standard-equation-of-a-parabola',
    title: 'The Standard Equation of a Parabola',
    difficulty: 'medium',
    simpleExplanation:
      'A parabola with its vertex at the origin, opening upward or downward, has the standard equation ' +
      'x² = 4py — where p is the distance from the vertex to the focus (0,p), and the directrix is the line y=−p.',
    whyItMatters:
      'This is the direct algebraic translation of the focus-directrix definition, giving a clean ' +
      'equation to work with instead of a distance condition.',
    formulaSlug: 'standard-parabola-equation-formula',
    workedExample: {
      id: 'parabola-standard-worked-1',
      title: 'Find a parabola\'s focus and directrix from its equation',
      problemStatement: 'Find the focus and directrix of the parabola x²=8y.',
      steps: [
        { step: 1, instruction: 'Compare to the standard form.', math: 'x² = 4py', explanation: 'Match up the coefficient of y.' },
        { step: 2, instruction: 'Solve for p.', math: '4p = 8  →  p = 2', explanation: 'Divide both sides by 4.' },
        { step: 3, instruction: 'State the focus and directrix.', math: 'Focus (0,2),  directrix y=−2', explanation: 'Using p=2 in the standard relationships.' },
      ],
      finalAnswer: 'Focus (0,2), directrix y=−2.',
    },
    whyItWorks:
      'Setting the focus-directrix distance condition equal for a general point (x,y) — ' +
      '√(x²+(y−p)²) = |y+p| — and squaring both sides to clear the square root, then simplifying, ' +
      'reduces directly to x²=4py.',
    realLifeExample: {
      title: 'Designing a parabolic solar cooker',
      scenario: 'A solar cooker uses a parabolic dish to focus sunlight onto a single cooking point.',
      explanation: 'The standard equation lets engineers calculate exactly where to place the cooking surface (the focus), given the dish\'s shape.',
    },
    practiceQuestions: [
      {
        id: 'parabola-standard-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For the parabola x²=12y, find p.',
        hints: ['4p = 12.'],
        correctAnswer: 3,
        explanation: '4p=12, so p=3.',
      },
    ],
    commonMistake:
      'Forgetting to divide by 4 when solving for p from the y-coefficient — treating the coefficient ' +
      'itself as p, rather than 4p.',
    quickReview: [
      'x² = 4py, vertex at the origin.',
      'Focus is (0,p); directrix is y=−p.',
      'Derived directly from the focus-directrix distance condition.',
    ],
  },

  'the-general-equation-of-a-translated-parabola': {
    slug: 'the-general-equation-of-a-translated-parabola',
    title: 'The General Equation of a Translated Parabola',
    difficulty: 'medium',
    simpleExplanation:
      'When a parabola\'s vertex is NOT at the origin, but instead at some point (h,k), its equation ' +
      'becomes (x−h)² = 4p(y−k) — the standard-form equation, directly translated.',
    whyItMatters:
      'Most real parabolas encountered in applications are not conveniently centered at the origin — ' +
      'this is the general form actually needed to describe them.',
    diagram: {
      id: 'translated-parabola-diagram',
      title: 'A parabola with vertex (2,3): (x−2)²=4(y−3)',
      altText: 'A parabola opening upward, with its vertex marked at the point (2,3), shifted away from the origin',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => 3 + ((x - 2) * (x - 2)) / 4,
        min: -2,
        max: 6,
        markPoints: [{ x: 2, y: 3, label: 'vertex (2,3)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'general-translated-parabola-formula',
    workedExample: {
      id: 'translated-parabola-worked-1',
      title: 'Write the equation of a translated parabola',
      problemStatement: 'Write the equation of a parabola with vertex (2,3) and p=1 (opening upward).',
      steps: [
        { step: 1, instruction: 'Apply the general equation.', math: '(x−h)² = 4p(y−k)', explanation: 'Substitute the vertex and p.' },
        { step: 2, instruction: 'Substitute h=2, k=3, p=1.', math: '(x−2)² = 4(1)(y−3)', explanation: 'Plug in the known values.' },
        { step: 3, instruction: 'Simplify.', math: '(x−2)² = 4(y−3)', explanation: 'Multiply out 4(1).' },
      ],
      finalAnswer: '(x−2)² = 4(y−3).',
    },
    whyItWorks:
      'Shifting a curve h units right and k units up is achieved by replacing x with (x−h) and y with ' +
      '(y−k) everywhere in the original equation — exactly the same translation technique used for ' +
      'circles, applied here to the standard parabola equation.',
    realLifeExample: {
      title: 'Positioning a suspension bridge\'s cable curve',
      scenario: 'A suspension bridge\'s main cable follows a parabolic curve, but its lowest point (vertex) is at the bridge\'s specific height and horizontal position, not at the origin.',
      explanation: 'The translated parabola equation describes the cable\'s actual real-world shape and position directly.',
    },
    practiceQuestions: [
      {
        id: 'translated-parabola-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A parabola (x−1)²=8(y+2) has vertex (1,k). Find k.',
        hints: ['(y+2) means (y−k) with k negative.'],
        correctAnswer: -2,
        explanation: '(y+2) = (y−(−2)), so k=−2.',
      },
    ],
    commonMistake:
      'Forgetting that a translated parabola\'s focus and directrix also shift along with the vertex — ' +
      'they are no longer at (0,p) and y=−p, but at (h,k+p) and y=k−p respectively.',
    quickReview: [
      '(x−h)² = 4p(y−k), vertex at (h,k).',
      'Replace x with (x−h) and y with (y−k) to translate the standard equation.',
      'The focus and directrix shift along with the vertex.',
    ],
  },

  'translation-of-axes': {
    slug: 'translation-of-axes',
    title: 'Translation of Axes',
    difficulty: 'medium',
    simpleExplanation:
      'Translation of axes means shifting the origin of the coordinate system to a new location (h,k), ' +
      'without changing the direction of the axes. A point\'s new coordinates relate to its old ones by ' +
      "x' = x−h and y' = y−k.",
    whyItMatters:
      'Choosing a more convenient origin can dramatically simplify an equation — this is exactly how a ' +
      'translated parabola or circle equation can be converted back to its simpler standard form.',
    diagram: {
      id: 'translation-of-axes-diagram',
      title: "Translating the origin from O to O'(3,−2)",
      altText: "A sketch showing the original x and y axes as dashed lines through the origin O, and a new set of axes drawn through a shifted origin O' at (3,-2), with a point P marked",
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -10, labelDy: 8 },
          { x: 3, y: -2, label: "O'", labelDx: -12, labelDy: -8 },
          { x: 7, y: 1, label: 'P', labelDx: 10, labelDy: 4 },
        ],
        segments: [
          { from: [-1, 0], to: [8, 0], dashed: true },
          { from: [0, -3], to: [0, 2], dashed: true },
          { from: [1, -2], to: [8, -2] },
          { from: [3, -4], to: [3, 2] },
        ],
      },
    },
    formulaSlug: 'translation-of-axes-formula',
    workedExample: {
      id: 'translation-of-axes-worked-1',
      title: 'Convert coordinates to a translated system',
      problemStatement: 'The origin is translated to the point (3,−2). Find the new coordinates (x\',y\') of the point (7,1) in the old system.',
      steps: [
        { step: 1, instruction: "Apply the translation formulas.", math: "x' = x−h,   y' = y−k", explanation: 'h=3, k=−2 here.' },
        { step: 2, instruction: "Find x'.", math: "x' = 7−3 = 4", explanation: 'Subtract h from x.' },
        { step: 3, instruction: "Find y'.", math: "y' = 1−(−2) = 3", explanation: 'Subtract k from y.' },
      ],
      finalAnswer: "New coordinates: (4, 3).",
    },
    whyItWorks:
      "Measuring a point's position relative to a new origin O' means subtracting that new origin's " +
      'own position (h,k) from the point\'s original coordinates — exactly what x\'=x−h and y\'=y−k compute.',
    realLifeExample: {
      title: 'A surveyor switching to a more convenient reference point',
      scenario: 'A surveyor initially measures everything relative to a fixed starting marker, but finds it more convenient mid-project to re-measure relative to a landmark closer to the current work site.',
      explanation: 'Translation of axes gives every previously measured point\'s new coordinates relative to this more convenient reference point, without needing to re-survey anything.',
    },
    practiceQuestions: [
      {
        id: 'translation-of-axes-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "If axes are translated so the new origin is at (2,5), find the new x'-coordinate of the point (9,5).",
        hints: ["x' = x − h."],
        correctAnswer: 7,
        explanation: '9−2 = 7.',
      },
    ],
    commonMistake:
      "Adding h and k instead of subtracting, when converting FROM the old TO the new coordinates — " +
      "x'=x−h, not x+h (addition is used only when converting back from new to old).",
    quickReview: [
      "x' = x−h,   y' = y−k.",
      "(h,k) is the new origin's location in the old system.",
      'A more convenient origin can dramatically simplify an equation.',
    ],
  },

  'rotation-of-axes': {
    slug: 'rotation-of-axes',
    title: 'Rotation of Axes',
    difficulty: 'hard',
    simpleExplanation:
      'Rotation of axes means rotating the coordinate axes by an angle θ about the same origin, without ' +
      'shifting it. A point\'s original coordinates relate to its coordinates in the rotated system by ' +
      "x = x'cosθ − y'sinθ and y = x'sinθ + y'cosθ.",
    whyItMatters:
      'Some curves (especially tilted conics) have much simpler equations once the axes are rotated to ' +
      'align with the curve\'s natural orientation — this technique makes that alignment possible.',
    diagram: {
      id: 'rotation-of-axes-diagram',
      title: 'Rotating the axes by angle θ',
      altText: "A sketch showing the original x and y axes as dashed lines, and a new set of axes x' and y' rotated by an angle theta from the originals, both through the same origin",
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -10, labelDy: -8 }],
        segments: [
          { from: [-4, 0], to: [4, 0], dashed: true, label: 'x' },
          { from: [0, -4], to: [0, 4], dashed: true, label: 'y' },
          { from: [-3.46, -2], to: [3.46, 2], label: "x'" },
          { from: [-2, 3.46], to: [2, -3.46], label: "y'" },
        ],
        angleMarks: [{ at: [0, 0], from: [4, 0], to: [3.46, 2], label: 'θ', radius: 1.2 }],
      },
    },
    formulaSlug: 'rotation-of-axes-formula',
    workedExample: {
      id: 'rotation-of-axes-worked-1',
      title: 'Convert coordinates to a rotated system',
      problemStatement: 'Axes are rotated by θ=90°. Find the new coordinates (x\',y\') of the point (5,0) in the old system.',
      steps: [
        { step: 1, instruction: 'Use the inverse rotation formulas (solving for the new coordinates).', math: "x' = x cosθ + y sinθ,   y' = −x sinθ + y cosθ", explanation: 'Rearranged from the standard rotation equations.' },
        { step: 2, instruction: 'Substitute θ=90° (cos90°=0, sin90°=1).', math: "x' = x(0)+y(1) = y,   y' = −x(1)+y(0) = −x", explanation: 'Simplify using the known trig values.' },
        { step: 3, instruction: 'Substitute the point (5,0).', math: "x' = 0,   y' = −5", explanation: 'x=5, y=0.' },
      ],
      finalAnswer: "New coordinates: (0, −5).",
    },
    whyItWorks:
      'Rotating the axes by θ is mathematically equivalent to rotating every point by −θ relative to ' +
      'fixed axes — the rotation formulas come directly from the general definition of trigonometric ' +
      'ratios applied to this relative rotation.',
    realLifeExample: {
      title: 'Aligning coordinates with a tilted conveyor belt',
      scenario: 'An engineer analyzing motion along a conveyor belt that runs at an angle (not aligned with the standard horizontal/vertical directions) wants simpler equations of motion.',
      explanation: 'Rotating the coordinate axes to align with the belt\'s actual direction of travel turns an awkward tilted-motion problem into a simple straight-line one.',
    },
    practiceQuestions: [
      {
        id: 'rotation-of-axes-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: "Axes are rotated by θ=90°. Find the new y'-coordinate of the point (0,4) in the old system.",
        hints: ["y' = −x sinθ + y cosθ, with θ=90°."],
        correctAnswer: 0,
        explanation: "y' = −0(1)+4(0) = 0.",
      },
    ],
    commonMistake:
      'Using the θ-rotation formulas (for old coordinates in terms of new) when actually converting new ' +
      'from old requires the inverse (−θ) version — mixing up which direction the substitution goes.',
    quickReview: [
      "x = x'cosθ − y'sinθ,   y = x'sinθ + y'cosθ.",
      'The inverse (solving for new from old) uses −θ in place of θ.',
      'Rotating axes can dramatically simplify a tilted curve\'s equation.',
    ],
  },
};
