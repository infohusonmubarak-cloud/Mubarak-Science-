import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 3 — Analytic Solid Geometry. Matches
// the textbook preface's description: line, plane, and sphere.
export const chapter3CConcepts: Record<string, Concept> = {
  'the-three-dimensional-coordinate-system': {
    slug: 'the-three-dimensional-coordinate-system',
    title: 'The Three-Dimensional Coordinate System',
    difficulty: 'easy',
    simpleExplanation:
      'The familiar 2D (x,y) coordinate plane extends to three dimensions by adding a third axis, z, ' +
      'perpendicular to both x and y. Every point in 3D space is then located by an ordered triple ' +
      '(x, y, z), giving its position along each of the three axes.',
    whyItMatters:
      'This is the essential foundation for describing any real three-dimensional object or location ' +
      'mathematically — the line, plane, and sphere later in this chapter are all built directly on ' +
      'this coordinate system.',
    diagram: {
      id: 'coordinate-system-3d-diagram',
      title: 'The x, y, and z axes, with a point P(3,4,2)',
      altText: 'A sketch of three perpendicular axes labelled x, y, and z meeting at the origin, with a point P marked off to the side representing the location (3,4,2)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 2.5, y: 0.5, label: 'P(3,4,2)', labelDx: 14, labelDy: 4 },
        ],
        segments: [
          { from: [0, 0], to: [-2.5, -2.5], arrow: true, label: 'x', labelDx: -10, labelDy: -6 },
          { from: [0, 0], to: [5, 0], arrow: true, label: 'y', labelDx: 10, labelDy: 4 },
          { from: [0, 0], to: [0, 5], arrow: true, label: 'z', labelDx: 0, labelDy: -10 },
          { from: [0, 0], to: [2.5, 0.5], dashed: true },
        ],
      },
    },
    workedExample: {
      id: 'coordinate-system-3d-worked-1',
      title: 'Locate a point in 3D space',
      problemStatement: 'Describe how to reach the point P(3,4,2) starting from the origin.',
      steps: [
        { step: 1, instruction: 'Move along the x-axis.', math: '3 units', explanation: 'The first coordinate.' },
        { step: 2, instruction: 'From there, move parallel to the y-axis.', math: '4 units', explanation: 'The second coordinate.' },
        { step: 3, instruction: 'From there, move parallel to the z-axis.', math: '2 units', explanation: 'The third coordinate, usually thought of as "up."' },
      ],
      finalAnswer: 'P(3,4,2) is reached by moving 3 units along x, 4 units along y, and 2 units along z from the origin.',
    },
    whyItWorks:
      'Just as two perpendicular axes (x and y) are enough to uniquely locate any point in a flat ' +
      'plane, a third axis (z), perpendicular to both of the first two, adds exactly the one additional ' +
      'degree of freedom needed to locate any point in the space around us — no more, no fewer.',
    realLifeExample: {
      title: 'GPS coordinates with altitude',
      scenario: 'A GPS system needs to describe not just a location on the ground, but also its height above sea level.',
      explanation: 'Latitude and longitude act like x and y, and altitude acts like the third (z) coordinate — together giving a full three-dimensional location.',
    },
    practiceQuestions: [
      {
        id: 'coordinate-system-3d-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which ordered triple describes a point 5 units along the x-axis, 0 along y, and 2 along z?',
        options: [
          { id: 'a', text: '(5, 0, 2)' },
          { id: 'b', text: '(0, 5, 2)' },
          { id: 'c', text: '(2, 0, 5)' },
          { id: 'd', text: '(5, 2, 0)' },
        ],
        correctOptionId: 'a',
        hints: ['The coordinates are always written in the order (x, y, z).'],
        explanation: 'x=5, y=0, z=2 gives the ordered triple (5, 0, 2).',
      },
    ],
    commonMistake:
      'Forgetting that the ORDER of the coordinates matters — (3,4,2) and (4,3,2) describe different ' +
      'points, exactly like in two dimensions.',
    quickReview: [
      'Every point in 3D space is described by an ordered triple (x, y, z).',
      'The z-axis is perpendicular to both the x-axis and the y-axis.',
      'Order matters: (x,y,z) is not the same as any rearrangement of its values.',
    ],
  },

  'the-distance-and-midpoint-formulas-in-3d': {
    slug: 'the-distance-and-midpoint-formulas-in-3d',
    title: 'The Distance and Midpoint Formulas in 3D',
    difficulty: 'medium',
    simpleExplanation:
      'Both the familiar 2D distance and midpoint formulas extend directly to three dimensions, simply ' +
      'by including a third term for the z-coordinates.',
    whyItMatters:
      'Measuring how far apart two points are, or finding the point exactly between them, is a basic ' +
      'building block used throughout the rest of this chapter and in later applications.',
    formulaSlug: 'distance-and-midpoint-formulas-in-3d',
    workedExample: {
      id: 'distance-midpoint-3d-worked-1',
      title: 'Find the distance between two points in 3D',
      problemStatement: 'Find the distance between A(1,2,3) and B(4,6,15).',
      steps: [
        { step: 1, instruction: 'Apply the 3D distance formula.', math: 'd = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]', explanation: 'Extend the familiar 2D formula with a third term.' },
        { step: 2, instruction: 'Substitute the coordinates.', math: 'd = √[(4−1)² + (6−2)² + (15−3)²]', explanation: 'Subtract corresponding coordinates.' },
        { step: 3, instruction: 'Simplify.', math: 'd = √(9 + 16 + 144) = √169', explanation: 'Square each difference and add.' },
        { step: 4, instruction: 'Take the square root.', math: '√169 = 13', explanation: 'Final result.' },
      ],
      finalAnswer: 'The distance between A and B is 13.',
    },
    whyItWorks:
      'The 3D distance formula is really the Pythagorean theorem applied twice — first within the ' +
      '(x,y) plane to find the flat horizontal distance, and then again combining that horizontal ' +
      'distance with the vertical (z) difference into an overall straight-line 3D distance.',
    realLifeExample: {
      title: 'Finding the straight-line distance between two drones',
      scenario: 'Two drones are flying at different heights and different horizontal positions.',
      explanation: 'The 3D distance formula gives their actual straight-line separation directly, accounting for the height difference as well as the horizontal distance.',
    },
    practiceQuestions: [
      {
        id: 'distance-midpoint-3d-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the midpoint\'s z-coordinate for A(2,0,4) and B(6,8,10).',
        hints: ['Midpoint z-coordinate = (z₁+z₂)/2.'],
        correctAnswer: 7,
        explanation: '(4+10)/2 = 7.',
      },
    ],
    commonMistake:
      'Forgetting the third (z) term entirely, and applying only the plain 2D distance or midpoint formula.',
    quickReview: [
      'd = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²].',
      'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2).',
      'Both formulas are the familiar 2D versions, extended with a third coordinate.',
    ],
  },

  'direction-numbers-of-a-line': {
    slug: 'direction-numbers-of-a-line',
    title: 'Direction Numbers of a Line',
    difficulty: 'medium',
    simpleExplanation:
      'A line in 3D can be described by any one point on it, plus a set of "direction numbers" (a,b,c) ' +
      'that indicate which way the line points — found from the coordinate differences between any two ' +
      'points on the line.',
    whyItMatters:
      'Direction numbers are the essential ingredient (along with one known point) for writing a ' +
      'line\'s equation, covered in the next concept.',
    formulaSlug: 'direction-numbers-formula',
    workedExample: {
      id: 'direction-numbers-worked-1',
      title: 'Find the direction numbers of a line',
      problemStatement: 'Find the direction numbers of the line through A(1,2,3) and B(4,0,7).',
      steps: [
        { step: 1, instruction: 'Find a.', math: 'a = 4 − 1 = 3', explanation: 'Subtract the x-coordinates.' },
        { step: 2, instruction: 'Find b.', math: 'b = 0 − 2 = −2', explanation: 'Subtract the y-coordinates.' },
        { step: 3, instruction: 'Find c.', math: 'c = 7 − 3 = 4', explanation: 'Subtract the z-coordinates.' },
      ],
      finalAnswer: 'Direction numbers: (3, −2, 4).',
    },
    whyItWorks:
      'Moving from A to B involves a specific change in each coordinate — these three changes ARE the ' +
      'direction the line travels; any point further along the same line is reached by adding a ' +
      'multiple of these same three changes, which is exactly what direction numbers capture.',
    realLifeExample: {
      title: 'Describing a flight path\'s heading',
      scenario: 'An air traffic controller knows a plane\'s position at two moments and needs to describe the straight-line direction it is heading.',
      explanation: 'The direction numbers between the two known positions give exactly this heading, in three-dimensional terms (accounting for altitude change too).',
    },
    practiceQuestions: [
      {
        id: 'direction-numbers-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the direction number "b" for the line through (0,5,1) and (6,1,9).',
        hints: ['b = y₂ − y₁.'],
        correctAnswer: -4,
        explanation: '1 − 5 = −4.',
      },
    ],
    commonMistake:
      'Subtracting the coordinates in an inconsistent order across the three axes (e.g. B−A for x but ' +
      'A−B for y) — the SAME order must be used for all three coordinates.',
    quickReview: [
      'a = x₂−x₁,  b = y₂−y₁,  c = z₂−z₁.',
      'Direction numbers describe which way a line points, independent of which point is used.',
      'Use the same subtraction order for all three coordinates.',
    ],
  },

  'symmetric-and-parametric-equations-of-a-line': {
    slug: 'symmetric-and-parametric-equations-of-a-line',
    title: 'Symmetric and Parametric Equations of a Line',
    difficulty: 'medium',
    simpleExplanation:
      'A line through a known point (x₀,y₀,z₀) with direction numbers (a,b,c) can be written either as ' +
      'one combined symmetric equation, (x−x₀)/a = (y−y₀)/b = (z−z₀)/c, or as three separate parametric ' +
      'equations using a parameter t: x=x₀+at, y=y₀+bt, z=z₀+ct.',
    whyItMatters:
      'These are the two standard ways to actually write down a line\'s equation in 3D — parametric ' +
      'form is especially useful since it generates every point on the line just by plugging in ' +
      'different values of t.',
    formulaSlug: 'symmetric-and-parametric-line-equations-formula',
    workedExample: {
      id: 'line-equations-worked-1',
      title: 'Write a line\'s parametric and symmetric equations',
      problemStatement: 'Write the parametric and symmetric equations of the line through P₀(2,−1,3) with direction numbers (1,4,−2).',
      steps: [
        { step: 1, instruction: 'Write the parametric equations.', math: 'x = 2+t,   y = −1+4t,   z = 3−2t', explanation: 'Each coordinate is the starting value plus (direction number)×t.' },
        { step: 2, instruction: 'Write the symmetric equation.', math: '(x−2)/1 = (y+1)/4 = (z−3)/(−2)', explanation: 'Solve each parametric equation for t, then set them equal.' },
      ],
      finalAnswer: 'Parametric: x=2+t, y=−1+4t, z=3−2t.  Symmetric: (x−2)/1 = (y+1)/4 = (z−3)/(−2).',
    },
    whyItWorks:
      'Solving each parametric equation for t gives t=(x−x₀)/a, t=(y−y₀)/b, and t=(z−z₀)/c — since ' +
      'these all equal the SAME t for a given point on the line, setting them equal to each other ' +
      'directly produces the symmetric equation.',
    realLifeExample: {
      title: 'Tracking a satellite\'s straight-line path',
      scenario: 'A satellite travels in a straight line through space, and engineers need to predict its exact position at any given time.',
      explanation: 'Parametric equations, with t representing time, give the satellite\'s exact (x,y,z) position for any value of t directly.',
    },
    practiceQuestions: [
      {
        id: 'line-equations-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For the line x=2+t, y=−1+4t, z=3−2t, find the y-coordinate when t=3.',
        hints: ['Substitute t=3 into the y equation.'],
        correctAnswer: 11,
        explanation: '−1+4(3) = −1+12 = 11.',
      },
    ],
    commonMistake:
      'Mismatching which coordinate (x₀,y₀,z₀) pairs with which direction number (a,b,c) — they must ' +
      'correspond in the same order throughout.',
    quickReview: [
      'Parametric: x=x₀+at, y=y₀+bt, z=z₀+ct.',
      'Symmetric: (x−x₀)/a = (y−y₀)/b = (z−z₀)/c.',
      'Both forms describe the exact same line, just written differently.',
    ],
  },

  'the-normal-vector-and-equation-of-a-plane': {
    slug: 'the-normal-vector-and-equation-of-a-plane',
    title: 'The Normal Vector and Equation of a Plane',
    difficulty: 'medium',
    simpleExplanation:
      'A plane can be described by any one point on it, plus a "normal vector" (a,b,c) — a vector ' +
      'perpendicular to the entire plane. The plane\'s equation is a(x−x₀)+b(y−y₀)+c(z−z₀)=0, which ' +
      'simplifies to ax+by+cz=d.',
    whyItMatters:
      'This is the standard way to describe a flat surface in 3D space mathematically — essential for ' +
      'everything from computer graphics to structural engineering.',
    diagram: {
      id: 'plane-normal-diagram',
      title: 'A plane with its normal vector n',
      altText: 'A schematic sketch of a tilted flat plane, shown as a shaded parallelogram, with an arrow labelled n pointing perpendicular to it',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0.25, y: 0.25, label: 'P₀', labelDx: -14, labelDy: 0 }],
        polygons: [{ points: [[-2, -1], [2, -1], [2.5, 1.5], [-1.5, 1.5]] }],
        segments: [{ from: [0.25, 0.25], to: [0.6, 2.4], arrow: true, label: 'n', labelDx: 10, labelDy: 0 }],
      },
    },
    formulaSlug: 'normal-vector-plane-equation-formula',
    workedExample: {
      id: 'plane-equation-worked-1',
      title: 'Find the equation of a plane from a point and normal vector',
      problemStatement: 'Find the equation of the plane through P₀(1,2,3) with normal vector (4,−1,2).',
      steps: [
        { step: 1, instruction: 'Write the point-normal form.', math: '4(x−1) − 1(y−2) + 2(z−3) = 0', explanation: 'Substitute a=4, b=−1, c=2, and the point (1,2,3).' },
        { step: 2, instruction: 'Expand each term.', math: '4x−4 − y+2 + 2z−6 = 0', explanation: 'Distribute carefully, watching the signs.' },
        { step: 3, instruction: 'Combine constants and simplify.', math: '4x − y + 2z − 8 = 0', explanation: 'Combine −4+2−6=−8.' },
        { step: 4, instruction: 'Move the constant to the right side.', math: '4x − y + 2z = 8', explanation: 'Standard ax+by+cz=d form.' },
      ],
      finalAnswer: 'The plane\'s equation is 4x − y + 2z = 8.',
    },
    whyItWorks:
      'Every vector from the known point P₀ to any other point (x,y,z) IN the plane must be ' +
      'perpendicular to the normal vector (a,b,c) — and two vectors are perpendicular exactly when ' +
      'their dot product is zero, which is precisely what a(x−x₀)+b(y−y₀)+c(z−z₀)=0 expresses.',
    realLifeExample: {
      title: 'Modeling a flat rooftop or solar panel surface',
      scenario: 'An architect models a flat rooftop surface, needing both a reference point on it and the exact direction it is tilted (its normal direction).',
      explanation: 'The normal vector and a single known point are exactly enough information to write down the plane\'s full equation.',
    },
    practiceQuestions: [
      {
        id: 'plane-equation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find d, for the plane through (2,1,5) with normal vector (3,2,−1), written as 3x+2y−z=d.',
        hints: ['d = a·x₀ + b·y₀ + c·z₀.'],
        correctAnswer: 3,
        explanation: 'd = 3(2)+2(1)−1(5) = 6+2−5 = 3.',
      },
    ],
    commonMistake:
      'Sign errors when distributing a(x−x₀)+b(y−y₀)+c(z−z₀) — especially when a, b, or c is negative, ' +
      'it is easy to mishandle the resulting double-negative.',
    quickReview: [
      'a(x−x₀) + b(y−y₀) + c(z−z₀) = 0, simplifying to ax+by+cz=d.',
      'The normal vector (a,b,c) is perpendicular to every line lying in the plane.',
      'd = ax₀+by₀+cz₀, once the equation is expanded.',
    ],
  },

  'the-distance-from-a-point-to-a-plane': {
    slug: 'the-distance-from-a-point-to-a-plane',
    title: 'The Distance from a Point to a Plane',
    difficulty: 'hard',
    simpleExplanation:
      'The shortest distance from a point (x₀,y₀,z₀) to a plane ax+by+cz=d is found directly from the ' +
      'plane\'s equation: distance = |ax₀+by₀+cz₀−d| / √(a²+b²+c²).',
    whyItMatters:
      'This gives the shortest (perpendicular) distance directly from a formula, without needing to ' +
      'find the actual closest point on the plane first.',
    formulaSlug: 'distance-point-to-plane-formula',
    workedExample: {
      id: 'point-plane-distance-worked-1',
      title: 'Find the distance from a point to a plane',
      problemStatement: 'Find the distance from the origin (0,0,0) to the plane x+2y+2z=3.',
      steps: [
        { step: 1, instruction: 'Apply the distance formula.', math: 'distance = |ax₀+by₀+cz₀−d| / √(a²+b²+c²)', explanation: 'a=1, b=2, c=2, d=3, and (x₀,y₀,z₀)=(0,0,0).' },
        { step: 2, instruction: 'Substitute the values.', math: '|1(0)+2(0)+2(0)−3| / √(1²+2²+2²)', explanation: 'Plug everything in.' },
        { step: 3, instruction: 'Simplify the numerator and denominator.', math: '|−3| / √9 = 3/3', explanation: '1+4+4=9, and √9=3.' },
        { step: 4, instruction: 'Compute the result.', math: '3/3 = 1', explanation: 'Final division.' },
      ],
      finalAnswer: 'The distance is 1.',
    },
    whyItWorks:
      'The numerator, |ax₀+by₀+cz₀−d|, measures how far the point is from satisfying the plane\'s ' +
      'equation exactly — and dividing by √(a²+b²+c²) (the magnitude of the normal vector) rescales ' +
      'that raw measurement into an actual physical (perpendicular) distance.',
    realLifeExample: {
      title: 'Drone flight-path clearance planning',
      scenario: 'A drone\'s flight-planning software needs to calculate how close the drone will pass to a flat rooftop, modeled as a plane.',
      explanation: 'This formula gives that clearance distance directly from the drone\'s coordinates and the rooftop\'s plane equation.',
    },
    practiceQuestions: [
      {
        id: 'point-plane-distance-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the distance from the point (0,0,5) to the plane 3x+4y=10 (that is, 3x+4y+0z=10).',
        hints: ['a=3, b=4, c=0, d=10.'],
        correctAnswer: 2,
        explanation: '|3(0)+4(0)+0(5)−10| / √(9+16+0) = 10/5 = 2.',
      },
    ],
    commonMistake:
      'Forgetting to take the absolute value of the numerator — distance must always be non-negative, ' +
      'but the raw expression ax₀+by₀+cz₀−d can come out negative.',
    quickReview: [
      'distance = |ax₀+by₀+cz₀−d| / √(a²+b²+c²).',
      'The numerator measures how far the point is from the plane\'s equation; the denominator rescales it into a true distance.',
      'Always take the absolute value of the numerator.',
    ],
  },

  'the-standard-equation-of-a-sphere': {
    slug: 'the-standard-equation-of-a-sphere',
    title: 'The Standard Equation of a Sphere',
    difficulty: 'medium',
    simpleExplanation:
      'A sphere is the set of all points at a fixed distance r (the radius) from a fixed center point ' +
      '(h,k,l). Its standard equation is (x−h)² + (y−k)² + (z−l)² = r² — the direct 3D extension of the ' +
      'equation of a circle.',
    whyItMatters:
      'This is the standard, universally recognized way to describe a sphere mathematically — the ' +
      'direct 3D counterpart of the circle equation from earlier coordinate geometry.',
    diagram: {
      id: 'sphere-equation-diagram',
      title: 'A sphere with center C and radius r (shown as a circular cross-section)',
      altText: 'A circle representing a cross-section of a sphere, with its center labelled C and a radius line labelled r',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 3 }],
        points: [{ x: 0, y: 0, label: 'C(h,k,l)', labelDx: -20, labelDy: 0 }],
        segments: [{ from: [0, 0], to: [3, 0], label: 'r', labelDx: 0, labelDy: 12 }],
      },
    },
    formulaSlug: 'standard-equation-of-a-sphere-formula',
    workedExample: {
      id: 'sphere-equation-worked-1',
      title: 'Write the equation of a sphere',
      problemStatement: 'Write the equation of the sphere with center (2,−1,3) and radius 5.',
      steps: [
        { step: 1, instruction: 'Apply the standard equation.', math: '(x−h)² + (y−k)² + (z−l)² = r²', explanation: 'Substitute the center and radius.' },
        { step: 2, instruction: 'Substitute h=2, k=−1, l=3, r=5.', math: '(x−2)² + (y+1)² + (z−3)² = 5²', explanation: 'Note (y−(−1)) becomes (y+1).' },
        { step: 3, instruction: 'Simplify the right side.', math: '5² = 25', explanation: 'Square the radius.' },
      ],
      finalAnswer: '(x−2)² + (y+1)² + (z−3)² = 25.',
    },
    whyItWorks:
      'The left side, (x−h)²+(y−k)²+(z−l)², is exactly the squared 3D distance formula between the ' +
      'point (x,y,z) and the center (h,k,l) — setting that squared distance equal to r² is exactly the ' +
      'condition "every point on the sphere is distance r from the center."',
    realLifeExample: {
      title: 'Modeling satellite signal coverage',
      scenario: 'A satellite\'s signal reaches every point within a fixed distance of the satellite itself.',
      explanation: 'This coverage region is exactly a sphere, and its equation is written directly using the satellite\'s position as the center and the signal range as the radius.',
    },
    practiceQuestions: [
      {
        id: 'sphere-equation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A sphere has equation (x−4)²+(y−1)²+(z+2)²=49. Find its radius.',
        hints: ['The right side of the equation is r².'],
        correctAnswer: 7,
        explanation: '√49 = 7.',
      },
    ],
    commonMistake:
      'Forgetting to square the radius on the right side of the equation — writing "=r" instead of the correct "=r²".',
    quickReview: [
      '(x−h)² + (y−k)² + (z−l)² = r².',
      'The direct 3D extension of the circle equation.',
      'The center is (h,k,l); the right side is the radius SQUARED.',
    ],
  },

  'finding-the-center-and-radius-by-completing-the-square': {
    slug: 'finding-the-center-and-radius-by-completing-the-square',
    title: 'Finding the Center and Radius by Completing the Square',
    difficulty: 'hard',
    simpleExplanation:
      'A sphere\'s equation is not always given in standard form — it may be expanded out. Completing ' +
      'the square on the x, y, and z terms separately converts it back into standard form, revealing ' +
      'the center and radius directly.',
    whyItMatters:
      'Real equations (from calculations or measurements) rarely come pre-packaged in standard form — ' +
      'this technique recovers the geometrically meaningful center and radius from whatever form the equation happens to be in.',
    formulaSlug: 'standard-equation-of-a-sphere-formula',
    workedExample: {
      id: 'sphere-completing-square-worked-1',
      title: 'Find a sphere\'s center and radius by completing the square',
      problemStatement: 'Find the center and radius of the sphere x²+y²+z²−4x+6y−2z−2=0.',
      steps: [
        { step: 1, instruction: 'Group terms by variable, and move the constant to the right.', math: '(x²−4x) + (y²+6y) + (z²−2z) = 2', explanation: 'Rearrange the original equation.' },
        { step: 2, instruction: 'Complete the square for each variable.', math: '(x²−4x+4) + (y²+6y+9) + (z²−2z+1) = 2+4+9+1', explanation: 'Add the same constants to BOTH sides.' },
        { step: 3, instruction: 'Simplify the right side.', math: '2+4+9+1 = 16', explanation: 'Add up the constants.' },
        { step: 4, instruction: 'Write in standard form.', math: '(x−2)² + (y+3)² + (z−1)² = 16', explanation: 'Each grouped expression is now a perfect square.' },
      ],
      finalAnswer: 'Center (2, −3, 1), radius √16 = 4.',
    },
    whyItWorks:
      'Completing the square is simply a reversible algebraic rearrangement — adding and subtracting ' +
      'the same constant does not change an equation\'s solutions, so the resulting standard-form ' +
      'equation describes exactly the same sphere as the original expanded one.',
    realLifeExample: {
      title: 'Recovering a satellite\'s true coverage region from raw sensor data',
      scenario: 'Engineers derive an expanded (non-standard) equation for a satellite\'s signal coverage region from raw measurement data.',
      explanation: 'Completing the square converts this into standard form, revealing the actual center and radius of the coverage sphere directly.',
    },
    practiceQuestions: [
      {
        id: 'sphere-completing-square-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the radius of the sphere x²+y²+z²+2x−4y+4=0, after completing the square.',
        hints: ['Group: (x²+2x)+(y²−4y)+z²=−4.', 'Complete the square for x and y.'],
        correctAnswer: 1,
        explanation: '(x+1)²+(y−2)²+z² = −4+1+4 = 1, so radius = √1 = 1.',
      },
    ],
    commonMistake:
      'Adding the completing-the-square constants only to the left side of the equation — the exact ' +
      'same constants must also be added to the RIGHT side, or the equation\'s meaning changes.',
    quickReview: [
      'Group terms by variable, then complete the square for each one separately.',
      'Add the same constants to both sides of the equation.',
      'The result reveals the center (h,k,l) and radius r directly.',
    ],
  },
};
