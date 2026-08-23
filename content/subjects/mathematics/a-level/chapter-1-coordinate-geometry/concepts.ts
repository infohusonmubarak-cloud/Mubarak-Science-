import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 1 — Introduction to Coordinate Geometry.
// Every concept follows the same nine-part structure: simple explanation,
// why it matters, an optional diagram, an optional formula, a worked
// example, why the method works, a real-life example, practice questions,
// a common mistake, and a quick review.
export const chapter1Concepts: Record<string, Concept> = {
  'cartesian-coordinate-system': {
    slug: 'cartesian-coordinate-system',
    title: 'The Cartesian Coordinate System',
    difficulty: 'easy',
    simpleExplanation:
      'The coordinate plane is formed by two perpendicular number lines: a horizontal ' +
      'x-axis and a vertical y-axis. They cross at a fixed point called the origin, ' +
      'written (0, 0). Together, the two axes let you describe the exact location of ' +
      'any point using an ordered pair of numbers.',
    whyItMatters:
      'Before coordinates, describing "where" something is required words like "a bit ' +
      'to the left and up high." The coordinate plane replaces that with two precise ' +
      'numbers — the foundation every other idea in this chapter builds on.',
    diagram: {
      id: 'cartesian-axes-diagram',
      title: 'The x-axis, y-axis, and origin',
      altText: 'A coordinate plane showing the horizontal x-axis, the vertical y-axis, and the origin where they cross at (0, 0)',
      component: 'CoordinatePlane',
      interactive: false,
      props: { min: -6, max: 6 },
    },
    whyItWorks:
      'Because the two axes are perpendicular and always cross at the same fixed zero ' +
      'point, every combination of a horizontal position and a vertical position points ' +
      'to exactly one, unique location on the plane.',
    realLifeExample: {
      title: 'Reading a map grid reference',
      scenario:
        'Many street maps and spreadsheets use two perpendicular reference lines — ' +
        'columns and rows — the same way the coordinate plane uses axes.',
      explanation:
        'Just as (3, 4) means "3 across, 4 up" from the origin, a grid reference like ' +
        '"C4" means "column C, row 4" — both use two independent directions to pin down ' +
        'one exact spot.',
    },
    workedExample: {
      id: 'cartesian-worked-1',
      title: 'Locate a point from a description',
      problemStatement:
        'A point is 3 units right of the origin and 4 units up. What are its coordinates?',
      steps: [
        { step: 1, instruction: 'Start at the origin.', math: '(0, 0)', explanation: 'The origin is where both axes cross.' },
        { step: 2, instruction: 'Move 3 units right along the x-axis.', math: 'x = 3', explanation: 'Moving right increases the x-coordinate.' },
        { step: 3, instruction: 'Move 4 units up, parallel to the y-axis.', math: 'y = 4', explanation: 'Moving up increases the y-coordinate.' },
      ],
      finalAnswer: '(3, 4)',
    },
    practiceQuestions: [
      {
        id: 'cartesian-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which point lies 2 units left of the origin and 5 units below it?',
        options: [
          { id: 'a', text: '(2, 5)' },
          { id: 'b', text: '(-2, -5)' },
          { id: 'c', text: '(-2, 5)' },
          { id: 'd', text: '(2, -5)' },
        ],
        correctOptionId: 'b',
        hints: ['Left of the origin means a negative x.', 'Below the origin means a negative y.'],
        explanation: 'Left → x = -2. Below → y = -5. That gives (-2, -5).',
      },
    ],
    commonMistake:
      'Mixing up which axis is which — remember x (horizontal) is always listed first, ' +
      'y (vertical) second, in every ordered pair.',
    quickReview: [
      'The coordinate plane is formed by two perpendicular number lines: the x-axis (horizontal) and y-axis (vertical).',
      'They cross at the origin, (0, 0).',
      'Every point is located by an ordered pair (x, y).',
    ],
  },

  'ordered-pairs-and-quadrants': {
    slug: 'ordered-pairs-and-quadrants',
    title: 'Ordered Pairs and Quadrants',
    difficulty: 'easy',
    simpleExplanation:
      'An ordered pair (x, y) records a location with two numbers in a fixed order — x ' +
      'first, y second. The axes divide the plane into four regions called quadrants, ' +
      'numbered I to IV counterclockwise starting from the top-right. The sign pattern ' +
      'of (x, y) tells you immediately which quadrant a point sits in.',
    whyItMatters:
      'Recognizing a point\'s quadrant from its signs alone — before plotting anything — ' +
      'is a fast sanity check that catches mistakes early.',
    diagram: {
      id: 'quadrants-diagram',
      title: 'The four quadrants',
      altText: 'A coordinate plane with the four quadrants labelled I through IV, and two sample points A(3, 2) and B(-3, -2)',
      component: 'CoordinatePlane',
      interactive: false,
      props: {
        highlightQuadrants: true,
        pointA: { x: 3, y: 2, label: 'A(3, 2)' },
        pointB: { x: -3, y: -2, label: 'B(-3, -2)' },
      },
    },
    whyItWorks:
      'Quadrants are simply the four possible sign combinations of (x, y): (+,+), (-,+), ' +
      '(-,-), (+,-) — so the signs alone are enough to identify one, with no need to plot.',
    realLifeExample: {
      title: 'Zones around a home base',
      scenario:
        'Games and mapping apps often divide the area around a central point into ' +
        'directional zones — "north-west of base," for example.',
      explanation:
        'Quadrants work the same way: everything is described relative to the origin, so ' +
        '"upper-left" (Quadrant II) is instantly recognizable from signs alone.',
    },
    workedExample: {
      id: 'quadrants-worked-1',
      title: 'Identify a quadrant from signs',
      problemStatement: 'Without plotting, state which quadrant contains the point (-5, 7).',
      steps: [
        { step: 1, instruction: 'Look at the x-coordinate.', math: 'x = -5 (negative)', explanation: 'A negative x means the point is left of the y-axis.' },
        { step: 2, instruction: 'Look at the y-coordinate.', math: 'y = 7 (positive)', explanation: 'A positive y means the point is above the x-axis.' },
        { step: 3, instruction: 'Match the sign pattern to a quadrant.', math: '(-, +) → Quadrant II', explanation: 'Left and above matches Quadrant II.' },
      ],
      finalAnswer: 'Quadrant II',
    },
    practiceQuestions: [
      {
        id: 'quadrants-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which quadrant contains the point (4, -6)?',
        options: [
          { id: 'a', text: 'Quadrant I' },
          { id: 'b', text: 'Quadrant II' },
          { id: 'c', text: 'Quadrant III' },
          { id: 'd', text: 'Quadrant IV' },
        ],
        correctOptionId: 'd',
        hints: ['x is positive, y is negative.', 'Positive x = right of the y-axis; negative y = below the x-axis.'],
        explanation: '(+, -) is Quadrant IV.',
      },
    ],
    commonMistake:
      'Assuming the quadrants are numbered starting from the top-left or go clockwise — ' +
      'numbering starts at the top-right (Quadrant I, where both coordinates are ' +
      'positive) and goes counterclockwise.',
    quickReview: [
      'An ordered pair (x, y) always lists the horizontal value first.',
      'Quadrant I: (+,+). Quadrant II: (-,+). Quadrant III: (-,-). Quadrant IV: (+,-).',
      'Numbering goes counterclockwise starting from the top-right.',
    ],
  },

  'plotting-points': {
    slug: 'plotting-points',
    title: 'Plotting Points',
    difficulty: 'easy',
    simpleExplanation:
      'Plotting a point means marking its exact location using its ordered pair. Start ' +
      'at the origin, move horizontally for the x-value, then move vertically for the ' +
      'y-value, and mark that spot.',
    whyItMatters:
      'Plotting turns abstract number pairs into a picture you can reason about visually ' +
      '— the bridge between algebra (numbers) and geometry (shapes and positions).',
    diagram: {
      id: 'plotting-points-diagram',
      title: 'Drag the point and read its coordinates',
      altText: 'A coordinate plane with one draggable point, currently at (2, 3)',
      component: 'CoordinatePlane',
      interactive: true,
      props: { pointA: { x: 2, y: 3, label: 'Try dragging me' } },
    },
    whyItWorks:
      'Because x and y measure independent, perpendicular directions, you can move along ' +
      'them one at a time, in either order, and still land on the same unique spot.',
    realLifeExample: {
      title: 'Dropping a pin on a map app',
      scenario:
        'Digital maps place a pin using two independent values — how far east/west and ' +
        'how far north/south from a reference point.',
      explanation: 'Plotting (x, y) is the same two-step process: horizontal position, then vertical position.',
    },
    workedExample: {
      id: 'plotting-worked-1',
      title: 'Plot a point with negative coordinates',
      problemStatement: 'Plot the point (-4, 2) on the coordinate plane.',
      steps: [
        { step: 1, instruction: 'Start at the origin.', math: '(0, 0)', explanation: 'Every plot starts here.' },
        { step: 2, instruction: 'Move 4 units left, since x = -4.', math: 'x: 0 → -4', explanation: 'A negative x means move left.' },
        { step: 3, instruction: 'From there, move 2 units up, since y = 2.', math: 'y: 0 → 2', explanation: 'A positive y means move up.' },
      ],
      finalAnswer: 'The point (-4, 2) is 4 units left and 2 units up from the origin.',
    },
    practiceQuestions: [
      {
        id: 'plotting-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these correctly describes how to plot (3, -5)?',
        options: [
          { id: 'a', text: '3 right, 5 up' },
          { id: 'b', text: '3 right, 5 down' },
          { id: 'c', text: '3 left, 5 down' },
          { id: 'd', text: '3 up, 5 right' },
        ],
        correctOptionId: 'b',
        hints: ['x = 3 is positive, so move right.', 'y = -5 is negative, so move down.'],
        explanation: 'Positive x → right 3. Negative y → down 5.',
      },
    ],
    commonMistake: 'Plotting (y, x) instead of (x, y) — always move horizontally first, using the first number.',
    quickReview: [
      'Start at the origin every time.',
      'Move horizontally first using x, then vertically using y.',
      'Positive x/y means right/up; negative x/y means left/down.',
    ],
  },

  'distance-between-two-points': {
    slug: 'distance-between-two-points',
    title: 'Distance Between Two Points',
    difficulty: 'medium',
    simpleExplanation:
      'The distance between two points is the straight-line length between them. It is ' +
      'found by treating the horizontal and vertical gaps between the points as the two ' +
      'shorter sides of a right triangle, and applying the Pythagorean theorem.',
    whyItMatters:
      'Distance lets you measure length and separation directly from coordinates — the ' +
      'basis for geometry, navigation, and physics calculations.',
    diagram: {
      id: 'distance-diagram',
      title: 'Distance between two draggable points',
      altText: 'A coordinate plane with two draggable points and the line segment between them, showing the live distance value',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        pointA: { x: 1, y: 1, label: 'A' },
        pointB: { x: 4, y: 5, label: 'B' },
        showDistance: true,
      },
    },
    formulaSlug: 'distance-formula',
    workedExample: {
      id: 'distance-worked-1',
      title: 'Find the distance between two points',
      problemStatement: 'Find the distance between A(1, 2) and B(4, 6).',
      steps: [
        { step: 1, instruction: 'Identify the coordinates.', math: 'x₁=1, y₁=2, x₂=4, y₂=6', explanation: 'Label the points so you substitute correctly.' },
        { step: 2, instruction: 'Find the differences.', math: 'x₂−x₁=3,  y₂−y₁=4', explanation: 'These are the horizontal and vertical legs of a right triangle.' },
        { step: 3, instruction: 'Apply the distance formula.', math: 'd = √(3² + 4²) = √25', explanation: 'Square each leg, add them, then take the square root.' },
        { step: 4, instruction: 'Simplify.', math: 'd = 5', explanation: 'The straight-line distance between A and B is 5 units.' },
      ],
      finalAnswer: 'd = 5 units',
    },
    whyItWorks:
      'The formula is the Pythagorean theorem applied to the horizontal and vertical ' +
      'distances between the points, which form a right triangle whose hypotenuse is the ' +
      'segment AB.',
    realLifeExample: {
      title: 'Straight-line distance on a map grid',
      scenario: 'A city-planning map places two buildings at known grid coordinates.',
      explanation:
        'The distance formula instantly gives the straight-line ("as the crow flies") ' +
        'distance between them, without needing to measure by hand.',
    },
    practiceQuestions: [
      {
        id: 'distance-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the distance between (0, 0) and (3, 4).',
        hints: ['Subtract the x-coordinates and the y-coordinates first.', 'Square both differences, then add them.'],
        correctAnswer: 5,
        unit: 'units',
        explanation: 'd = √(3² + 4²) = √25 = 5.',
      },
      {
        id: 'distance-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the distance between (-2, 1) and (3, 13).',
        hints: ['Find the horizontal and vertical differences first.', '5² + 12² = 169, and √169 = 13.'],
        correctAnswer: 13,
        unit: 'units',
        explanation: 'd = √[(3−(−2))² + (13−1)²] = √[5² + 12²] = √169 = 13.',
      },
    ],
    commonMistake:
      'Forgetting to square the differences before adding them (writing ' +
      'd = (x₂−x₁) + (y₂−y₁) instead of using squares and a square root).',
    quickReview: [
      'd = √[(x₂−x₁)² + (y₂−y₁)²]',
      'It comes directly from the Pythagorean theorem.',
      'The order of the two points does not matter — squaring removes the sign.',
    ],
  },

  'midpoint-of-a-segment': {
    slug: 'midpoint-of-a-segment',
    title: 'Midpoint of a Segment',
    difficulty: 'medium',
    simpleExplanation:
      'The midpoint of a segment is the point exactly halfway between its two endpoints. ' +
      'Find it by averaging the x-coordinates and averaging the y-coordinates separately.',
    whyItMatters:
      'Midpoints let you find centre points — useful for balancing, dividing things ' +
      'equally, or finding the middle of any two locations.',
    diagram: {
      id: 'midpoint-diagram',
      title: 'Midpoint of two draggable points',
      altText: 'A coordinate plane with two draggable points and their midpoint marked and labelled',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        pointA: { x: -2, y: 1, label: 'A' },
        pointB: { x: 4, y: 5, label: 'B' },
        showMidpoint: true,
      },
    },
    formulaSlug: 'midpoint-formula',
    workedExample: {
      id: 'midpoint-worked-1',
      title: 'Find a midpoint',
      problemStatement: 'Find the midpoint of the segment joining P(2, -3) and Q(8, 7).',
      steps: [
        { step: 1, instruction: 'Average the x-coordinates.', math: '(2 + 8) / 2 = 5', explanation: 'Add the two x-values and divide by 2.' },
        { step: 2, instruction: 'Average the y-coordinates.', math: '(-3 + 7) / 2 = 2', explanation: 'Add the two y-values and divide by 2.' },
        { step: 3, instruction: 'Write the midpoint as an ordered pair.', math: 'M = (5, 2)', explanation: 'Combine both averages into one point.' },
      ],
      finalAnswer: 'M = (5, 2)',
    },
    whyItWorks:
      'Averaging each coordinate finds the exact "balance point" in each direction ' +
      'independently — halfway horizontally and halfway vertically together give the ' +
      'point exactly halfway along the segment.',
    realLifeExample: {
      title: 'Meeting halfway',
      scenario: 'Two friends live at different points on a town map and want to meet at a fair, halfway location.',
      explanation: 'Averaging their coordinates gives a meeting point exactly halfway between their two homes.',
    },
    practiceQuestions: [
      {
        id: 'midpoint-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the midpoint of the segment joining (0, 0) and (6, 10)?',
        options: [
          { id: 'a', text: '(3, 5)' },
          { id: 'b', text: '(6, 5)' },
          { id: 'c', text: '(3, 10)' },
          { id: 'd', text: '(6, 10)' },
        ],
        correctOptionId: 'a',
        hints: ['Average the x-coordinates separately from the y-coordinates.', '(0+6)/2 = 3 and (0+10)/2 = 5.'],
        explanation: 'Midpoint = ((0+6)/2, (0+10)/2) = (3, 5).',
      },
    ],
    commonMistake:
      'Averaging an x-value with a y-value instead of averaging each coordinate with its ' +
      'own pair (mixing up (x₁+y₂)/2 with (x₁+x₂)/2).',
    quickReview: [
      'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
      'Average the x-values and the y-values separately.',
      'The midpoint always lies exactly on the segment, halfway between the endpoints.',
    ],
  },

  'dividing-a-segment-in-a-ratio': {
    slug: 'dividing-a-segment-in-a-ratio',
    title: 'Dividing a Segment in a Ratio',
    difficulty: 'hard',
    simpleExplanation:
      'Besides finding the exact middle of a segment, you can also find a point that ' +
      'divides it unevenly — for example, a point one-quarter of the way from one end to ' +
      'the other. This is called dividing a segment in a given ratio.',
    whyItMatters:
      'Not every "in-between" point is exactly in the middle — ratios let you locate any ' +
      'point along a segment precisely, which shows up in scaling, animation, and construction.',
    whyItWorks:
      'Moving the same fraction of the way along each direction (x and y) independently ' +
      'moves you that same fraction of the way along the whole segment — the same idea as ' +
      'the midpoint, just with a fraction other than one-half.',
    realLifeExample: {
      title: 'Frame-by-frame animation',
      scenario: 'Animators move a character smoothly from a start position to an end position over several frames.',
      explanation:
        'Each in-between frame places the character at a specific ratio along the segment ' +
        'from start to end — one-quarter of the way, half-way, and so on — using exactly this idea.',
    },
    workedExample: {
      id: 'ratio-worked-1',
      title: 'Divide a segment in a 1:3 ratio',
      problemStatement: 'Find the point that divides the segment from A(0, 0) to B(8, 12) in the ratio 1:3.',
      steps: [
        { step: 1, instruction: 'Find the total horizontal and vertical change from A to B.', math: 'Δx = 8, Δy = 12', explanation: 'This is how far you would travel to go all the way from A to B.' },
        { step: 2, instruction: 'A ratio of 1:3 splits the segment into 4 equal parts, so take 1/4 of each change.', math: '(1/4)(8) = 2,  (1/4)(12) = 3', explanation: 'We want the point after the first of the 4 parts.' },
        { step: 3, instruction: "Add that to point A's coordinates.", math: '(0 + 2, 0 + 3) = (2, 3)', explanation: 'Starting at A and adding the partial change lands on the dividing point.' },
      ],
      finalAnswer: 'The point (2, 3) divides AB in the ratio 1:3.',
    },
    practiceQuestions: [
      {
        id: 'ratio-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A point divides the segment from (0, 0) to (10, 20) in the ratio 1:1. Where is it?',
        options: [
          { id: 'a', text: '(5, 10)' },
          { id: 'b', text: '(10, 20)' },
          { id: 'c', text: '(2, 4)' },
          { id: 'd', text: '(1, 1)' },
        ],
        correctOptionId: 'a',
        hints: ['A 1:1 ratio means the point is exactly halfway.', "That's just the midpoint formula."],
        explanation: 'Ratio 1:1 is the midpoint: ((0+10)/2, (0+20)/2) = (5, 10).',
      },
    ],
    commonMistake:
      'Thinking a "1:3" ratio means "multiply by one-third" — it actually means the ' +
      'segment splits into 1+3=4 equal parts, so the fraction from A is 1/4, not 1/3.',
    quickReview: [
      "Dividing a segment 'in a ratio' locates a point between two endpoints, not necessarily in the middle.",
      'A ratio of m:n splits the segment into m+n equal parts.',
      'The midpoint is just the special case of ratio 1:1.',
    ],
  },

  'slope-of-a-line': {
    slug: 'slope-of-a-line',
    title: 'Slope of a Line',
    difficulty: 'medium',
    simpleExplanation:
      'Slope measures how steep a line is — how much it rises or falls vertically for ' +
      'each step it takes horizontally. It is the change in y divided by the change in x ' +
      'between any two points on the line.',
    whyItMatters:
      'Slope tells you the rate at which one quantity changes compared to another — ' +
      'steepness, speed, or incline — anywhere two related quantities change together.',
    diagram: {
      id: 'slope-diagram',
      title: 'Slope of a draggable line',
      altText: 'A coordinate plane with two draggable points, the line through them, and the live slope value',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        pointA: { x: -2, y: -1, label: 'A' },
        pointB: { x: 4, y: 5, label: 'B' },
        showSlope: true,
        showLine: true,
      },
    },
    formulaSlug: 'slope-formula',
    workedExample: {
      id: 'slope-worked-1',
      title: 'Find the slope through two points',
      problemStatement: 'Find the slope of the line through A(1, 2) and B(5, 14).',
      steps: [
        { step: 1, instruction: 'Identify the coordinates.', math: 'x₁=1, y₁=2, x₂=5, y₂=14', explanation: 'Label the two points.' },
        { step: 2, instruction: 'Find the change in y and the change in x.', math: 'Δy = 14−2 = 12,  Δx = 5−1 = 4', explanation: 'Subtract in the same order for both.' },
        { step: 3, instruction: 'Divide the change in y by the change in x.', math: 'm = 12/4 = 3', explanation: 'This is the slope formula, m = (y₂−y₁)/(x₂−x₁).' },
      ],
      finalAnswer: 'm = 3',
    },
    whyItWorks:
      "Slope is a ratio, so it stays the same no matter which two points on the line you " +
      "pick — it measures the line's constant steepness, not the specific points chosen.",
    realLifeExample: {
      title: 'Wheelchair ramp incline',
      scenario: 'A ramp rises 1 metre in height over a 12 metre horizontal run.',
      explanation: 'Its slope is 1/12 — the same rise-over-run idea used to check whether a ramp meets accessibility standards.',
    },
    practiceQuestions: [
      {
        id: 'slope-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'What is the slope of the line through (0, 0) and (4, 8)?',
        hints: ['Δy = 8 − 0, Δx = 4 − 0.', 'Divide Δy by Δx.'],
        correctAnswer: 2,
        explanation: 'm = (8−0)/(4−0) = 8/4 = 2.',
      },
      {
        id: 'slope-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'What is the slope of the line through (3, 10) and (7, 2)?',
        hints: ['A line that falls left-to-right has a negative slope.', 'm = (2 − 10) / (7 − 3).'],
        correctAnswer: -2,
        explanation: 'm = (2−10)/(7−3) = −8/4 = −2.',
      },
    ],
    commonMistake:
      'Swapping the order of subtraction between numerator and denominator (using ' +
      'y₂−y₁ but x₁−x₂), which flips the sign of the slope.',
    quickReview: [
      "m = (y₂−y₁)/(x₂−x₁) — 'rise over run'.",
      'A positive slope rises left to right; a negative slope falls.',
      'Slope is the same wherever you measure it along a straight line.',
    ],
    relatedConcepts: [
      { label: 'Distance-Time Graphs (Physics)', href: '/subjects/physics/a-level/motion/distance-time-graphs' },
      { label: 'Velocity-Time Graphs (Physics)', href: '/subjects/physics/a-level/motion/velocity-time-graphs' },
    ],
  },

  'equation-of-a-straight-line': {
    slug: 'equation-of-a-straight-line',
    title: 'Equation of a Straight Line',
    difficulty: 'medium',
    simpleExplanation:
      'Every non-vertical straight line can be written as y = mx + c, where m is the ' +
      'slope and c is the y-intercept — the height where the line crosses the y-axis.',
    whyItMatters:
      'This equation lets you describe an entire line — every one of its infinite points ' +
      '— with just two numbers, and predict a y-value for any x-value on it.',
    diagram: {
      id: 'line-equation-diagram',
      title: 'A line and its equation',
      altText: 'A coordinate plane showing a line through two draggable points, its slope, and where it crosses each axis',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        pointA: { x: 0, y: 2, label: 'A' },
        pointB: { x: 3, y: 8, label: 'B' },
        showLine: true,
        showSlope: true,
        showIntercepts: true,
      },
    },
    formulaSlug: 'straight-line-equation',
    workedExample: {
      id: 'line-equation-worked-1',
      title: 'Find the equation of a line',
      problemStatement: 'Find the equation of the line with slope 3 that passes through (2, 11).',
      steps: [
        { step: 1, instruction: 'Start with the general form.', math: 'y = mx + c', explanation: 'We know m; we need to find c.' },
        { step: 2, instruction: 'Substitute the known slope and the point.', math: '11 = 3(2) + c', explanation: 'Plug x=2, y=11, m=3 into the equation.' },
        { step: 3, instruction: 'Solve for c.', math: '11 = 6 + c  →  c = 5', explanation: 'Subtract 6 from both sides.' },
      ],
      finalAnswer: 'y = 3x + 5',
    },
    whyItWorks:
      'Every point on the line must satisfy y = mx + c, so plugging in one known point ' +
      'pins down the only remaining unknown, c — after that, the equation describes every ' +
      'other point on the line too.',
    realLifeExample: {
      title: 'Predicting cost from usage',
      scenario: 'A taxi fare might be a fixed starting charge plus a set rate per kilometre.',
      explanation:
        'That is y = mx + c in disguise: c is the starting charge, m is the cost per ' +
        'kilometre (the slope), and y is the total fare for x kilometres.',
    },
    practiceQuestions: [
      {
        id: 'line-equation-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'In the line y = 4x − 7, what is the y-intercept?',
        options: [
          { id: 'a', text: '4' },
          { id: 'b', text: '-7' },
          { id: 'c', text: '7' },
          { id: 'd', text: '-4' },
        ],
        correctOptionId: 'b',
        hints: ['Compare to y = mx + c.', 'c is the constant term at the end.'],
        explanation: 'c = -7, so the y-intercept is -7.',
      },
      {
        id: 'line-equation-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A line has slope 2 and passes through (3, 10). What is its y-intercept, c?',
        hints: ['Substitute the point into y = mx + c and solve for c.', '10 = 2(3) + c'],
        correctAnswer: 4,
        explanation: '10 = 6 + c → c = 4.',
      },
    ],
    commonMistake:
      'Confusing which number is the slope and which is the intercept when reading ' +
      'y = mx + c — m always multiplies x; c stands alone.',
    quickReview: [
      'y = mx + c describes any straight (non-vertical) line.',
      'm is the slope; c is the y-intercept.',
      'Substitute one known point to solve for c once you know m.',
    ],
    relatedConcepts: [
      { label: 'The First Equation of Motion (Physics)', href: '/subjects/physics/a-level/motion/the-first-equation-of-motion' },
    ],
  },

  'horizontal-and-vertical-lines': {
    slug: 'horizontal-and-vertical-lines',
    title: 'Horizontal and Vertical Lines',
    difficulty: 'easy',
    simpleExplanation:
      'A horizontal line has the same y-value everywhere (equation y = a constant) ' +
      'because it never rises or falls. A vertical line has the same x-value everywhere ' +
      '(equation x = a constant) and has an undefined slope, since Δx = 0 would mean ' +
      'dividing by zero in the slope formula.',
    whyItMatters:
      'Horizontal and vertical lines are the simplest possible lines, and recognizing ' +
      'them instantly — without calculating slope — saves time and avoids the ' +
      '"division by zero" trap.',
    diagram: {
      id: 'horizontal-line-diagram',
      title: 'A horizontal line',
      altText: 'A coordinate plane showing a horizontal line through (-4, 3) and (4, 3)',
      component: 'CoordinatePlane',
      interactive: false,
      props: {
        pointA: { x: -4, y: 3, label: 'A' },
        pointB: { x: 4, y: 3, label: 'B' },
        showLine: true,
      },
    },
    workedExample: {
      id: 'horizontal-worked-1',
      title: 'Identify a horizontal line',
      problemStatement: 'What is the equation of the line passing through (2, 5) and (-6, 5)?',
      steps: [
        { step: 1, instruction: 'Compare the y-coordinates of both points.', math: 'y = 5 for both points', explanation: 'Both points share the same y-value.' },
        { step: 2, instruction: 'Since y never changes, the line is horizontal.', explanation: 'A constant y-value everywhere describes a horizontal line.' },
      ],
      finalAnswer: 'y = 5',
    },
    whyItWorks:
      'If two points already share a y-value, every point in between (and beyond) on ' +
      "that straight line must share it too — that is exactly what 'horizontal' means.",
    realLifeExample: {
      title: 'Sea level on an elevation chart',
      scenario: 'An elevation chart marks a horizontal line at 0 metres to represent sea level.',
      explanation: 'No matter how far the chart extends left or right, sea level (y = 0) stays the same height — a real horizontal line.',
    },
    practiceQuestions: [
      {
        id: 'horizontal-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the equation of the vertical line through (-3, 1) and (-3, 9)?',
        options: [
          { id: 'a', text: 'y = -3' },
          { id: 'b', text: 'x = -3' },
          { id: 'c', text: 'y = 9' },
          { id: 'd', text: 'x = 9' },
        ],
        correctOptionId: 'b',
        hints: ['Compare the x-coordinates of the two points, not the y-coordinates.', 'If x never changes, the line is vertical: x = (that constant).'],
        explanation: 'Both points share x = -3, so the line is x = -3.',
      },
    ],
    commonMistake:
      'Mixing up which equation form belongs to which line — a horizontal line is ' +
      'y = (number); a vertical line is x = (number). It is easy to swap them by accident.',
    quickReview: [
      'Horizontal line: y = constant, slope = 0.',
      'Vertical line: x = constant, slope is undefined.',
      'Check by comparing the coordinates directly, without calculating slope.',
    ],
  },

  intercepts: {
    slug: 'intercepts',
    title: 'Intercepts',
    difficulty: 'medium',
    simpleExplanation:
      'An intercept is where a line crosses an axis. The y-intercept is where it crosses ' +
      'the y-axis (where x = 0); the x-intercept is where it crosses the x-axis (where y = 0).',
    whyItMatters:
      'Intercepts are often the easiest, most meaningful points on a line to find and ' +
      'interpret — like a starting value or a break-even point.',
    diagram: {
      id: 'intercepts-diagram',
      title: 'A line and its intercepts',
      altText: 'A coordinate plane showing a line crossing the y-axis at (0, 6) and the x-axis at (4, 0), both marked',
      component: 'CoordinatePlane',
      interactive: false,
      props: {
        pointA: { x: 0, y: 6, label: 'A' },
        pointB: { x: 4, y: 0, label: 'B' },
        showLine: true,
        showIntercepts: true,
      },
    },
    formulaSlug: 'straight-line-equation',
    workedExample: {
      id: 'intercepts-worked-1',
      title: 'Find both intercepts of a line',
      problemStatement: 'Find the x-intercept and y-intercept of the line y = 2x − 8.',
      steps: [
        { step: 1, instruction: 'Find the y-intercept by setting x = 0.', math: 'y = 2(0) − 8 = −8', explanation: 'The y-intercept is where the line crosses the y-axis, so x = 0 there.' },
        { step: 2, instruction: 'Find the x-intercept by setting y = 0.', math: '0 = 2x − 8  →  x = 4', explanation: 'The x-intercept is where the line crosses the x-axis, so y = 0 there.' },
      ],
      finalAnswer: 'y-intercept: (0, −8); x-intercept: (4, 0)',
    },
    whyItWorks:
      'Every point on the y-axis has x = 0, and every point on the x-axis has y = 0 — ' +
      "substituting those fixed values into the line's equation finds exactly where it " +
      'meets each axis.',
    realLifeExample: {
      title: 'Break-even point in a budget',
      scenario: 'A savings graph plots money saved (y) against months (x), starting from an initial debt.',
      explanation: 'The x-intercept shows the exact month the balance reaches zero — a real break-even point, found the same way as a mathematical x-intercept.',
    },
    practiceQuestions: [
      {
        id: 'intercepts-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'What is the y-intercept of the line y = 5x + 9?',
        hints: ['Set x = 0 and see what y equals.', 'y = 5(0) + 9.'],
        correctAnswer: 9,
        explanation: 'y = 5(0) + 9 = 9.',
      },
      {
        id: 'intercepts-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'What is the x-intercept of the line y = 3x − 12? (Give just the x-value.)',
        hints: ['Set y = 0 and solve for x.', '0 = 3x − 12.'],
        correctAnswer: 4,
        explanation: '0 = 3x − 12 → x = 4.',
      },
    ],
    commonMistake:
      "Swapping which coordinate is set to zero — for the x-intercept it is y that's set to 0 (not x), and vice versa for the y-intercept.",
    quickReview: [
      'y-intercept: set x = 0, solve for y.',
      'x-intercept: set y = 0, solve for x.',
      'A non-horizontal, non-vertical line has exactly one x-intercept and one y-intercept.',
    ],
  },

  'parallel-lines': {
    slug: 'parallel-lines',
    title: 'Parallel Lines',
    difficulty: 'medium',
    simpleExplanation:
      'Two lines are parallel if they have exactly the same slope — they point in the ' +
      'same direction and so never meet, no matter how far they are extended.',
    whyItMatters:
      'Recognizing parallel lines from their equations alone, without graphing, is a ' +
      'quick way to check whether two paths or edges will ever cross.',
    formulaSlug: 'slope-formula',
    workedExample: {
      id: 'parallel-worked-1',
      title: 'Check whether two lines are parallel',
      problemStatement: 'Are the lines y = 4x + 1 and y = 4x − 9 parallel?',
      steps: [
        { step: 1, instruction: 'Compare the slopes of both lines.', math: 'm₁ = 4,  m₂ = 4', explanation: 'The slope is the coefficient of x in y = mx + c.' },
        { step: 2, instruction: 'Check whether the slopes are equal.', math: '4 = 4', explanation: 'Equal slopes mean the lines rise at exactly the same rate.' },
      ],
      finalAnswer: 'Yes — both lines have slope 4, so they are parallel.',
    },
    whyItWorks:
      'Slope measures direction. If two lines have identical slopes, they head in ' +
      'exactly the same direction from every point, so the vertical gap between them ' +
      'never changes — they can never meet.',
    realLifeExample: {
      title: 'Railway tracks',
      scenario: 'The two rails of a railway track run side by side, always the same distance apart.',
      explanation: "They're a real-world example of parallel lines — the same direction forever, never converging or crossing.",
    },
    practiceQuestions: [
      {
        id: 'parallel-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which line is parallel to y = -2x + 3?',
        options: [
          { id: 'a', text: 'y = 2x + 3' },
          { id: 'b', text: 'y = -2x + 7' },
          { id: 'c', text: 'y = -3x + 2' },
          { id: 'd', text: 'y = 0.5x + 3' },
        ],
        correctOptionId: 'b',
        hints: ['Parallel lines share the same slope, m.', 'Look only at the number multiplying x.'],
        explanation: 'y = -2x + 7 has slope -2, matching the given line.',
      },
    ],
    commonMistake:
      'Assuming lines with the same y-intercept (c) are parallel — it is the slope (m) ' +
      'that must match, not c. (If both m and c match, it is the same line, not two parallel ones.)',
    quickReview: [
      'Parallel lines have equal slopes: m₁ = m₂.',
      'They usually have different y-intercepts — otherwise they would be the same line.',
      'Parallel lines never intersect.',
    ],
  },

  'perpendicular-lines': {
    slug: 'perpendicular-lines',
    title: 'Perpendicular Lines',
    difficulty: 'hard',
    simpleExplanation:
      "Two lines are perpendicular if they meet at a right angle (90°). This happens " +
      "exactly when one line's slope is the negative reciprocal of the other's — " +
      'multiply the two slopes together and you always get −1.',
    whyItMatters:
      'Perpendicularity shows up anywhere right angles matter — building corners, road ' +
      'intersections, and squared-off designs.',
    formulaSlug: 'slope-formula',
    workedExample: {
      id: 'perpendicular-worked-1',
      title: 'Find a perpendicular slope',
      problemStatement: 'A line has slope 2/3. What is the slope of a line perpendicular to it?',
      steps: [
        { step: 1, instruction: 'Take the reciprocal of the given slope.', math: '2/3 → 3/2', explanation: 'Flip the fraction upside down.' },
        { step: 2, instruction: 'Negate it.', math: '3/2 → −3/2', explanation: 'Perpendicular slopes have opposite signs as well as reciprocal values.' },
      ],
      finalAnswer: 'The perpendicular slope is −3/2.',
    },
    whyItWorks:
      'Multiplying the two slopes must give −1: (2/3) × (−3/2) = −1, confirming the ' +
      'negative reciprocal rule — this specific product is what forces the two lines to ' +
      'meet at exactly 90°.',
    realLifeExample: {
      title: 'Squared wall corners',
      scenario: 'Builders check that two walls meet at a true right angle before finishing a room.',
      explanation: 'Two perpendicular walls have slopes that are negative reciprocals of each other, ensuring the corner is a perfect 90°.',
    },
    practiceQuestions: [
      {
        id: 'perpendicular-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A line has slope 5. What is the slope of a line perpendicular to it? (Give a decimal.)',
        hints: ['Take the reciprocal of 5 (which is 1/5), then negate it.', 'Perpendicular slopes multiply to give -1.'],
        correctAnswer: -0.2,
        tolerance: 0.01,
        explanation: '1/5 negated is -1/5 = -0.2. Check: 5 × (-0.2) = -1.',
      },
      {
        id: 'perpendicular-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which slope is perpendicular to a line with slope -4?',
        options: [
          { id: 'a', text: '4' },
          { id: 'b', text: '-4' },
          { id: 'c', text: '1/4' },
          { id: 'd', text: '-1/4' },
        ],
        correctOptionId: 'c',
        hints: ['m₂ = −1/m₁.', '−1 divided by −4 is positive.'],
        explanation: 'm₂ = −1/(−4) = 1/4.',
      },
    ],
    commonMistake:
      'Only flipping the fraction (finding the reciprocal) without also negating it — ' +
      'perpendicular slopes need both steps, not just one.',
    quickReview: [
      'Perpendicular slopes multiply to −1: m₁ × m₂ = −1.',
      'Equivalently, m₂ is the negative reciprocal of m₁.',
      'A horizontal line (slope 0) is perpendicular to a vertical line (undefined slope) — a special case the multiplication rule does not directly cover.',
    ],
  },

  'coordinate-geometry-in-real-life': {
    slug: 'coordinate-geometry-in-real-life',
    title: 'Coordinate Geometry in Real Life',
    difficulty: 'medium',
    simpleExplanation:
      "Coordinate geometry isn't just abstract graphing — every tool that pinpoints a " +
      'location using two numbers (GPS, maps, screens, even spreadsheets) is built on the ' +
      'ideas from this chapter: coordinates, distance, midpoints, and lines.',
    whyItMatters:
      'Seeing coordinate geometry as the math behind everyday location tools makes it ' +
      'easier to recognize where the same reasoning applies elsewhere — engineering, ' +
      'design, navigation, and computing.',
    workedExample: {
      id: 'applications-worked-1',
      title: 'Distance between two locations on a delivery map',
      problemStatement:
        'A delivery app shows a driver at (2, 5) and a customer at (10, 11) on its city ' +
        'grid, where each unit is 1 km. How far apart are they in a straight line?',
      steps: [
        { step: 1, instruction: 'Recognize this as a distance problem.', explanation: 'A "straight-line distance between two grid points" is exactly the distance formula.' },
        { step: 2, instruction: 'Apply the distance formula.', math: 'd = √[(10−2)² + (11−5)²] = √[8² + 6²]', explanation: 'Substitute the coordinates.' },
        { step: 3, instruction: 'Simplify.', math: 'd = √[64 + 36] = √100 = 10', explanation: '64 + 36 = 100, and √100 = 10.' },
      ],
      finalAnswer: '10 km',
    },
    whyItWorks:
      "The app's map is just a coordinate plane with real-world units attached — the same " +
      'distance formula applies exactly as it does on paper.',
    realLifeExample: {
      title: 'Where coordinate geometry hides in everyday tools',
      scenario:
        'GPS navigation, video game maps, spreadsheet cell references, and website layout ' +
        'code all place things using two-number coordinates.',
      explanation:
        'Whenever something needs to be found, measured, or moved on a flat surface, the ' +
        'ideas from this chapter — coordinates, distance, midpoint, and lines — are doing ' +
        'the work behind the scenes.',
    },
    practiceQuestions: [
      {
        id: 'applications-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two cell towers sit at (0, 0) and (6, 8) on a coordinate map, in kilometres. What is the straight-line distance between them?',
        hints: ['This is a distance-formula problem.', '6² + 8² = 100.'],
        correctAnswer: 10,
        unit: 'km',
        explanation: 'd = √(36 + 64) = √100 = 10 km.',
      },
    ],
    commonMistake:
      'Forgetting to check the units given in a real-world problem (e.g. each grid ' +
      'square = 1 km) and reporting just a bare number without its unit.',
    quickReview: [
      'Real-world location tools (GPS, maps, apps) are built on the same coordinate ideas as this chapter.',
      "The distance formula works the same way whether the units are grid squares or real kilometres.",
      'Recognizing the underlying math helps you solve real-world versions of these problems, not just textbook ones.',
    ],
  },
};
