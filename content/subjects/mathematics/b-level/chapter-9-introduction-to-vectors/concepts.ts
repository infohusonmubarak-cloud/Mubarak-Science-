import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 9 — Introduction to Vectors. Matches
// sections 9.1-9.4 of the textbook exactly, including a simply-stated
// vector proof of the midpoint theorem.
export const chapter9BConcepts: Record<string, Concept> = {
  'scalar-and-vector-quantities': {
    slug: 'scalar-and-vector-quantities',
    title: 'Scalar and Vector Quantities',
    difficulty: 'easy',
    simpleExplanation:
      'A scalar is a quantity that has only a size (magnitude) — like temperature or mass. A vector ' +
      'is a quantity that has both a size (magnitude) AND a direction — like a force pushing a certain ' +
      'way, or a displacement from one place to another.',
    whyItMatters:
      'Recognizing which real-world quantities need a direction (vectors) and which don\'t (scalars) ' +
      'is the essential first step before doing any vector mathematics.',
    workedExample: {
      id: 'scalar-vector-worked-1',
      title: 'Classify a quantity as a scalar or a vector',
      problemStatement: 'A car travels 60 km. State whether "60 km" alone describes a scalar or a vector quantity, and explain what\'s missing to make it the other type.',
      steps: [
        { step: 1, instruction: 'Identify what information is given.', explanation: '"60 km" is a size only — no direction is stated.' },
        { step: 2, instruction: 'Classify it.', explanation: 'A quantity with magnitude only is a scalar. Here, "60 km" is a scalar (a distance).' },
        { step: 3, instruction: 'State what would make it a vector instead.', explanation: 'Adding a direction, e.g. "60 km due north," turns it into a vector (a displacement).' },
      ],
      finalAnswer: '60 km alone is a scalar (distance); "60 km due north" would be the corresponding vector (displacement).',
    },
    whyItWorks:
      'This distinction matters mathematically because addition rules differ: scalars combine by ' +
      'ordinary arithmetic, but vectors must combine geometrically, accounting for direction. Two ' +
      'forces of equal magnitude pulling in exactly opposite directions cancel out to a net force of ' +
      'zero — a result that only makes sense once direction is tracked; plain arithmetic (20+20=40) ' +
      'cannot capture that cancellation.',
    realLifeExample: {
      title: 'Distance walked versus displacement achieved',
      scenario: 'A jogger runs all the way around a 500 m circular track and returns to the exact starting point.',
      explanation: 'The distance covered (a scalar) is 500 m — but the displacement (a vector, from start to finish) is 0 m, since the jogger ended up back where they started. The two quantities genuinely disagree.',
    },
    practiceQuestions: [
      {
        id: 'scalar-vector-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of the following is a vector quantity?',
        options: [
          { id: 'a', text: 'Temperature of 25°C' },
          { id: 'b', text: 'Mass of 10 kg' },
          { id: 'c', text: 'A force of 20 N acting downward' },
          { id: 'd', text: 'Speed of 40 km/h' },
        ],
        correctOptionId: 'c',
        hints: ['Look for the option that states BOTH a size and a direction.'],
        explanation: 'A force of 20 N downward has both magnitude (20 N) and direction (downward), making it a vector. The others are magnitude-only scalars.',
      },
    ],
    commonMistake:
      'Using "speed" and "velocity" interchangeably — speed is a scalar (magnitude only), while ' +
      'velocity is its vector counterpart (magnitude AND direction).',
    quickReview: [
      'Scalars have magnitude only; vectors have magnitude AND direction.',
      'Mass, temperature, speed, distance = scalars. Force, displacement, velocity = vectors.',
      'Direction matters mathematically: equal-and-opposite vectors can cancel to zero, unlike scalars.',
    ],
  },

  'representing-and-naming-vectors': {
    slug: 'representing-and-naming-vectors',
    title: 'Representing and Naming Vectors',
    difficulty: 'easy',
    simpleExplanation:
      'A vector is represented geometrically by an arrow: the arrow\'s length shows the vector\'s ' +
      'magnitude, and the arrow\'s direction shows the vector\'s direction. It can be named by its two ' +
      'endpoint letters with an arrow on top — →AB, read "vector AB," running FROM A TO B — or by a ' +
      'single bold lowercase letter, e.g. a.',
    whyItMatters:
      'Reading and writing vector notation correctly is essential before combining vectors in any ' +
      'calculation — mixing up →AB and →BA (which point in exactly opposite directions) is one of the ' +
      'most common early errors.',
    diagram: {
      id: 'vector-notation-diagram',
      title: 'Vector a, running from A to B',
      altText: 'An arrow starting at point A and ending at point B, labelled vector a',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 6 },
          { x: 5, y: 3, label: 'B', labelDx: 10, labelDy: 0 },
        ],
        segments: [{ from: [0, 0], to: [5, 3], arrow: true, label: 'a', labelDx: -8, labelDy: -8 }],
      },
    },
    workedExample: {
      id: 'vector-notation-worked-1',
      title: 'Reverse the direction of a named vector',
      problemStatement: 'Vector →PQ is 8 units long, pointing due east. Describe vector →QP.',
      steps: [
        { step: 1, instruction: 'Recall what reversing the letters means.', explanation: 'Swapping the start and end letters reverses the vector\'s direction, keeping the same magnitude.' },
        { step: 2, instruction: 'Apply this to →QP.', explanation: '→QP has the same length as →PQ, but points the opposite way.' },
      ],
      finalAnswer: '→QP has magnitude 8 units, pointing due west — the exact opposite direction of →PQ.',
    },
    whyItWorks:
      'Reversing a vector\'s start and end letters moves the arrowhead to the other endpoint, which by ' +
      'definition reverses the direction while leaving the length (magnitude) unchanged. This is ' +
      'exactly what "the negative of a vector" means, and it\'s the idea behind vector subtraction.',
    realLifeExample: {
      title: 'Walking directions between two landmarks',
      scenario: 'Instructions say "walk from the library to the park" versus "walk from the park to the library."',
      explanation: 'Both journeys cover the same path length, but →LP (library to park) and →PL (park to library) point in exactly opposite directions — just like reversing vector notation.',
    },
    practiceQuestions: [
      {
        id: 'vector-notation-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Vector a has magnitude 6 and points due north. What is true of vector −a?',
        options: [
          { id: 'a', text: 'Magnitude 6, pointing due south' },
          { id: 'b', text: 'Magnitude 6, pointing due north' },
          { id: 'c', text: 'Magnitude −6, pointing due north' },
          { id: 'd', text: 'Magnitude 12, pointing due south' },
        ],
        correctOptionId: 'a',
        hints: ['The negative of a vector keeps the same magnitude, but reverses direction.'],
        explanation: '−a has the same magnitude (6) as a, but points in the exact opposite direction (south instead of north).',
      },
    ],
    commonMistake:
      'Writing →AB when →BA is meant (or vice versa) — always read vector notation as "from the ' +
      'first letter to the second letter."',
    quickReview: [
      'A vector is drawn as an arrow: length = magnitude, direction = direction.',
      '→AB runs from A to B; →BA is its reverse (same length, opposite direction).',
      'Vectors can also be named with a single bold lowercase letter, e.g. a.',
    ],
  },

  'adding-and-subtracting-vectors-geometrically': {
    slug: 'adding-and-subtracting-vectors-geometrically',
    title: 'Adding and Subtracting Vectors Geometrically',
    difficulty: 'medium',
    simpleExplanation:
      'To add two vectors geometrically, draw them "tip-to-tail" — place the tail of the second vector ' +
      'at the head (tip) of the first. The sum (resultant) is the single vector from the very first ' +
      'tail to the very last head (the Triangle Law). To subtract a vector, add its negative (reverse) instead.',
    whyItMatters:
      'Vector addition and subtraction are the single most-used operations in the rest of this chapter ' +
      '— every later idea (geometric proofs, position vectors, ratios) is built directly on top of them.',
    diagram: {
      id: 'triangle-law-diagram',
      title: 'The Triangle Law: a then b, tip-to-tail, gives resultant a+b',
      altText: 'Vector a from A to B, vector b from B to C drawn tip-to-tail, and the resultant vector a+b drawn directly from A to C',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 6 },
          { x: 4, y: 1, label: 'B', labelDx: 0, labelDy: 10 },
          { x: 6, y: 4, label: 'C', labelDx: 10, labelDy: 0 },
        ],
        segments: [
          { from: [0, 0], to: [4, 1], arrow: true, label: 'a', labelDx: 0, labelDy: 12 },
          { from: [4, 1], to: [6, 4], arrow: true, label: 'b', labelDx: 14, labelDy: 0 },
          { from: [0, 0], to: [6, 4], arrow: true, dashed: true, label: 'a+b', labelDx: -14, labelDy: -6 },
        ],
      },
    },
    formulaSlug: 'vector-addition-triangle-law',
    workedExample: {
      id: 'vector-addition-worked-1',
      title: 'Add two perpendicular vectors using the Triangle Law',
      problemStatement: 'A hiker walks vector a: 3 km east, then vector b: 4 km north. Use the Triangle Law to find the magnitude of the resultant displacement a+b.',
      steps: [
        { step: 1, instruction: 'Draw a then b, tip-to-tail.', explanation: '3 km east, then 4 km north from where a ended.' },
        { step: 2, instruction: 'Identify the resultant.', explanation: 'By the Triangle Law, a+b is the direct vector from the start point to the final position.' },
        { step: 3, instruction: 'Since a and b are perpendicular, apply the Pythagorean theorem.', math: '|a+b| = √(3² + 4²) = √25', explanation: 'a and b form the two legs of a right triangle.' },
        { step: 4, instruction: 'Compute the result.', math: '√25 = 5', explanation: 'Take the square root.' },
      ],
      finalAnswer: 'The resultant displacement a+b has magnitude 5 km.',
    },
    whyItWorks:
      'A vector represents a displacement. Moving by a and then by b, tail-to-head, physically ends at ' +
      'the exact same final position as a single direct displacement straight from the start to that ' +
      'end point — and that direct displacement is, by definition, the sum a+b. The Triangle Law is ' +
      'just this physical fact drawn as a diagram.',
    realLifeExample: {
      title: 'A pilot combining airspeed and wind velocity',
      scenario: 'A plane has its own airspeed vector, but the wind blowing past it has a separate velocity vector.',
      explanation: 'Adding the two vectors (airspeed + wind) using the Triangle Law gives the plane\'s actual resultant velocity over the ground — essential for accurate flight navigation.',
    },
    practiceQuestions: [
      {
        id: 'vector-addition-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A boat\'s own velocity vector is 6 km/h east; the current\'s velocity vector is 8 km/h north. Find the magnitude of the resultant velocity, in km/h.',
        hints: ['The two vectors are perpendicular.', '|resultant| = √(6² + 8²).'],
        correctAnswer: 10,
        explanation: '√(36+64) = √100 = 10 km/h.',
      },
    ],
    commonMistake:
      'Adding the magnitudes directly (e.g. 3+4=7) instead of combining them geometrically — vectors ' +
      'only add like plain numbers when they point in exactly the same (or exactly opposite) direction.',
    quickReview: [
      'Triangle Law: draw vectors tip-to-tail; the resultant runs from the first tail to the last head.',
      'Subtraction: a−b = a+(−b) — reverse b\'s direction, then add.',
      'Perpendicular vectors combine via the Pythagorean theorem for the resultant\'s magnitude.',
    ],
  },

  'using-vectors-to-prove-geometric-results': {
    slug: 'using-vectors-to-prove-geometric-results',
    title: 'Using Vectors to Prove Geometric Results',
    difficulty: 'hard',
    simpleExplanation:
      'Vectors give a powerful alternative way to prove classic geometry results, like the Midpoint ' +
      'Theorem — instead of angle-chasing or congruent triangles, you express the key segments as ' +
      'vectors and use vector algebra (addition, subtraction, scalar multiplication) to show they must ' +
      'be parallel and/or in a specific length ratio.',
    whyItMatters:
      'Many geometry theorems that are painstaking to prove with angles become short, clean algebraic ' +
      'arguments once written as vectors — a genuinely different and often faster proof technique.',
    diagram: {
      id: 'vector-midpoint-proof-diagram',
      title: 'Vector proof that MN ∥ BC and MN = ½BC',
      altText: 'Triangle ABC with M the midpoint of AB and N the midpoint of AC, showing segment MN parallel to and half the length of BC',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 6, y: 0, label: 'B', labelDx: 8, labelDy: 6 },
          { x: 2, y: 5, label: 'C', labelDx: 6, labelDy: 6 },
          { x: 3, y: 0, label: 'M', labelDx: 0, labelDy: -12 },
          { x: 1, y: 2.5, label: 'N', labelDx: -14, labelDy: 0 },
        ],
        segments: [
          { from: [0, 0], to: [6, 0], dashed: true },
          { from: [0, 0], to: [2, 5], dashed: true },
          { from: [6, 0], to: [2, 5], label: 'BC' },
          { from: [3, 0], to: [1, 2.5], label: 'MN' },
        ],
      },
    },
    formulaSlug: 'scalar-multiplication-of-a-vector',
    workedExample: {
      id: 'vector-midpoint-proof-worked-1',
      title: 'Prove the Midpoint Theorem using vectors',
      problemStatement: 'In triangle ABC, M is the midpoint of AB and N is the midpoint of AC. Prove, using vectors, that MN is parallel to BC and that MN = ½BC.',
      steps: [
        { step: 1, instruction: 'Let AB and AC be vectors from A.', math: 'AB = b,  AC = c', explanation: 'Name the two sides touching vertex A.' },
        { step: 2, instruction: 'Express AM and AN using the midpoints.', math: 'AM = ½b,  AN = ½c', explanation: 'M and N are midpoints, so each is exactly halfway along its side.' },
        { step: 3, instruction: 'Find MN using vector subtraction.', math: 'MN = AN − AM = ½c − ½b = ½(c−b)', explanation: 'The vector from M to N is N\'s position minus M\'s position, measured from A.' },
        { step: 4, instruction: 'Compare with BC.', math: 'BC = AC − AB = c − b', explanation: 'So MN = ½BC exactly.' },
      ],
      finalAnswer: 'MN = ½BC, so MN is parallel to BC and exactly half its length — the Midpoint Theorem, proved using vectors.',
    },
    whyItWorks:
      'Because MN turned out to be a positive scalar multiple (½) of BC, and scalar multiplication of a ' +
      'vector by a positive number never changes its direction (only its magnitude), MN must point in ' +
      'exactly the same direction as BC. That is precisely what "parallel" means here — plus the ' +
      'scalar ½ tells you MN is exactly half as long.',
    realLifeExample: {
      title: 'Verifying a structural brace in an engineering frame',
      scenario: 'An engineer wants to confirm that a brace connecting the midpoints of two beams of a triangular frame is exactly half the length of, and parallel to, the base beam.',
      explanation: 'A quick vector proof (as above) verifies this exactly, without needing to physically measure any angles on the frame.',
    },
    practiceQuestions: [
      {
        id: 'vector-midpoint-proof-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In triangle PQR, M is the midpoint of PQ and N is the midpoint of PR. If QR has length 18, find the length of MN.',
        hints: ['MN = ½QR, by the vector proof of the Midpoint Theorem.'],
        correctAnswer: 9,
        explanation: 'MN = ½ × 18 = 9.',
      },
    ],
    commonMistake:
      'Assuming MN = ½AB or ½AC (the sides touching the midpoints themselves) instead of ½BC — the ' +
      'Midpoint Theorem specifically relates MN to the side opposite the two midpoints.',
    quickReview: [
      'Express the relevant sides as vectors from a common vertex, then use vector algebra.',
      'MN = AN − AM = ½c − ½b = ½(c−b) = ½BC — a scalar multiple, so MN ∥ BC and half its length.',
      'Vector proofs replace angle-chasing with pure algebra.',
    ],
  },

  'ratio-and-division-of-a-line-segment-using-vectors': {
    slug: 'ratio-and-division-of-a-line-segment-using-vectors',
    title: 'Ratio and Division of a Line Segment Using Vectors',
    difficulty: 'hard',
    simpleExplanation:
      'This extends the midpoint idea: if a point P divides segment AB in the ratio m:n (measured from ' +
      'A to B), then P\'s position vector from any fixed origin O is a specific weighted combination of ' +
      'A and B\'s position vectors: OP = (n·OA + m·OB) / (m+n).',
    whyItMatters:
      'This lets you find the exact location of ANY point along a segment (not just the midpoint) ' +
      'purely with vector arithmetic — essential for later coordinate geometry and mechanics problems.',
    diagram: {
      id: 'ratio-division-diagram',
      title: 'Point P dividing segment AB in the ratio 2:3',
      altText: 'A line segment from A to B, with point P marked dividing it so that AP is 2 parts and PB is 3 parts',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: -8 },
          { x: 4, y: 0, label: 'P', labelDx: 0, labelDy: -12 },
          { x: 10, y: 0, label: 'B', labelDx: 8, labelDy: -8 },
        ],
        segments: [
          { from: [0, 0], to: [4, 0], label: '2', labelDx: 0, labelDy: 12 },
          { from: [4, 0], to: [10, 0], label: '3', labelDx: 0, labelDy: 12 },
        ],
      },
    },
    formulaSlug: 'section-formula-for-a-line-segment',
    workedExample: {
      id: 'ratio-division-worked-1',
      title: 'Express a dividing point\'s position vector using the section formula',
      problemStatement: 'Point P divides segment AB such that AP:PB = 2:3. If OA and OB are the position vectors of A and B from origin O, express OP in terms of OA and OB.',
      steps: [
        { step: 1, instruction: 'Identify m and n.', math: 'm = 2,  n = 3', explanation: 'AP:PB = m:n.' },
        { step: 2, instruction: 'Apply the section formula.', math: 'OP = (n·OA + m·OB) / (m+n)', explanation: 'The weight on each point comes from the OTHER segment\'s ratio number.' },
        { step: 3, instruction: 'Substitute the values.', math: 'OP = (3·OA + 2·OB) / 5', explanation: 'n=3 weights OA; m=2 weights OB; divide by m+n=5.' },
      ],
      finalAnswer: 'OP = (3OA + 2OB) / 5.',
    },
    whyItWorks:
      'Starting from OP = OA + AP: since P divides AB in the ratio m:n, AP is the fraction m/(m+n) of ' +
      'the whole segment AB, so AP = (m/(m+n))·(OB−OA). Substituting and collecting terms gives ' +
      'OP = OA·(n/(m+n)) + OB·(m/(m+n)), which is exactly (n·OA + m·OB)/(m+n).',
    realLifeExample: {
      title: 'Animating smooth movement between two waypoints',
      scenario: 'A computer animation needs to place an object at a specific percentage of the way along a path between two fixed points.',
      explanation: 'This is exactly the ratio (section) formula in action — often called "lerp" (linear interpolation) by animators and game programmers.',
    },
    practiceQuestions: [
      {
        id: 'ratio-division-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Point P divides segment AB such that AP:PB = 1:4. If OP = (a·OA + b·OB) / 5, find the value of a.',
        hints: ['m=1, n=4 here.', 'OP = (n·OA + m·OB)/(m+n).'],
        correctAnswer: 4,
        explanation: 'm=1, n=4, so OP = (4·OA + 1·OB)/5, giving a=4.',
      },
    ],
    commonMistake:
      'Swapping m and n in the formula (using m·OA + n·OB instead of n·OA + m·OB) — the weight on ' +
      'each point comes from the ratio number of the OPPOSITE segment, not its own.',
    quickReview: [
      'OP = (n·OA + m·OB) / (m+n), when AP:PB = m:n.',
      'The midpoint is the special case m=n=1: OP = (OA+OB)/2.',
      'The weight on each point is the ratio number from the OPPOSITE segment.',
    ],
  },

  'position-vectors-and-the-origin': {
    slug: 'position-vectors-and-the-origin',
    title: 'Position Vectors and the Origin',
    difficulty: 'medium',
    simpleExplanation:
      'A position vector is a special vector that starts at a fixed origin O and ends at a particular ' +
      'point — it describes exactly where that point is, relative to O. Every point in a plane has ' +
      'exactly one position vector.',
    whyItMatters:
      'Position vectors let every point be treated as a vector, which is what makes it possible to do ' +
      'vector algebra (like the ratio formula) directly with locations, not just displacements.',
    diagram: {
      id: 'position-vectors-diagram',
      title: 'Position vectors OA and OB from a common origin O',
      altText: 'Origin O with two arrows, one to point A and one to point B, representing their position vectors',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: 8 },
          { x: 4, y: 3, label: 'A', labelDx: 0, labelDy: -10 },
          { x: 7, y: -1, label: 'B', labelDx: 8, labelDy: 4 },
        ],
        segments: [
          { from: [0, 0], to: [4, 3], arrow: true, label: 'a', labelDx: -6, labelDy: -6 },
          { from: [0, 0], to: [7, -1], arrow: true, label: 'b', labelDx: 0, labelDy: 12 },
        ],
      },
    },
    workedExample: {
      id: 'position-vectors-worked-1',
      title: 'Decide whether two position vectors are equal',
      problemStatement: 'The origin O is fixed. Point A is located 4 units from O in one direction, and point C is located 4 units from O in a different direction. Are OA and OC the same vector?',
      steps: [
        { step: 1, instruction: 'Compare the magnitudes.', math: '|OA| = |OC| = 4', explanation: 'Both position vectors have equal length.' },
        { step: 2, instruction: 'Compare the directions.', explanation: 'A and C are in different directions from O, so the vectors point differently.' },
        { step: 3, instruction: 'Apply the definition of vector equality.', explanation: 'Two vectors are equal only if BOTH their magnitude and direction match.' },
      ],
      finalAnswer: 'No — even though |OA| = |OC| = 4, OA ≠ OC, because they point in different directions.',
    },
    whyItWorks:
      'This follows directly from the definition of vector equality (matching magnitude AND direction), ' +
      'combined with the fact that each point has exactly one position vector from a fixed O — so two ' +
      'position vectors are equal precisely when the two points they describe are actually the same point.',
    realLifeExample: {
      title: 'GPS coordinates as position vectors',
      scenario: 'A mapping system measures every location as a distance and direction from one fixed reference point.',
      explanation: 'Two places at the same distance from that reference point, but in different directions, are clearly different locations — exactly like two position vectors with equal magnitude but different direction.',
    },
    practiceQuestions: [
      {
        id: 'position-vectors-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Point A has position vector OA with magnitude 7. A new point A\' is placed so that OA\' = 2·OA (same direction, doubled). Find |OA\'|.',
        hints: ['Scalar multiplication by 2 doubles the magnitude, keeping the direction the same.'],
        correctAnswer: 14,
        explanation: '|OA\'| = 2 × |OA| = 2 × 7 = 14.',
      },
    ],
    commonMistake:
      'Assuming two points are different just because they\'re labeled differently — if their position ' +
      'vectors from O genuinely match in both magnitude and direction, they are literally the same point.',
    quickReview: [
      'A position vector runs from the fixed origin O to a specific point.',
      'Every point has exactly one position vector.',
      'Two position vectors are equal only when magnitude AND direction both match — meaning the same point.',
    ],
  },

  'finding-a-vector-between-two-points': {
    slug: 'finding-a-vector-between-two-points',
    title: 'Finding a Vector Between Two Points',
    difficulty: 'medium',
    simpleExplanation:
      'Once you know the position vectors of two points A and B (from a fixed origin O), the vector ' +
      'that runs directly from A to B is found by subtracting: AB = OB − OA.',
    whyItMatters:
      'This is the crucial bridge that lets you compute the vector connecting any two points as soon ' +
      'as you know both their position vectors — the basis of nearly every later vector calculation.',
    diagram: {
      id: 'vector-between-points-diagram',
      title: 'AB = OB − OA',
      altText: 'Origin O with dashed arrows to A and B (their position vectors), and a solid arrow directly from A to B',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: 8 },
          { x: 4, y: 3, label: 'A', labelDx: 0, labelDy: -10 },
          { x: 7, y: -1, label: 'B', labelDx: 8, labelDy: 4 },
        ],
        segments: [
          { from: [0, 0], to: [4, 3], arrow: true, dashed: true, label: 'a', labelDx: -6, labelDy: -6 },
          { from: [0, 0], to: [7, -1], arrow: true, dashed: true, label: 'b', labelDx: 0, labelDy: 12 },
          { from: [4, 3], to: [7, -1], arrow: true, label: 'AB', labelDx: 10, labelDy: 4 },
        ],
      },
    },
    formulaSlug: 'vector-between-two-points-formula',
    workedExample: {
      id: 'vector-between-points-worked-1',
      title: 'Derive the formula for the vector between two points',
      problemStatement: 'Points A and B have position vectors OA and OB from origin O. Given that OA + AB = OB (by the Triangle Law), rearrange to express AB in terms of OA and OB.',
      steps: [
        { step: 1, instruction: 'Start from the Triangle Law relationship.', math: 'OA + AB = OB', explanation: 'Going O to A then A to B is the same overall journey as going O to B directly.' },
        { step: 2, instruction: 'Subtract OA from both sides.', math: 'AB = OB − OA', explanation: 'Isolate AB by rearranging.' },
      ],
      finalAnswer: 'AB = OB − OA.',
    },
    whyItWorks:
      'This is the same Triangle Law logic used for vector addition: travelling from O to A, then A to ' +
      'B, is the same overall journey as travelling directly from O to B, so OA + AB = OB. Rearranging ' +
      'that equation to isolate AB gives the formula directly.',
    realLifeExample: {
      title: 'A robot arm computing the path to a target',
      scenario: 'A robot arm knows its base position (O), its current gripper position (A), and a target location (B).',
      explanation: 'Computing AB = OB − OA gives exactly the vector the arm needs to move along to reach the target from its current position.',
    },
    practiceQuestions: [
      {
        id: 'vector-between-points-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'OA has magnitude 10, and OB points in exactly the opposite direction to OA with the same magnitude (so OB = −OA). Find the magnitude of AB.',
        hints: ['AB = OB − OA.', 'Substitute OB = −OA.'],
        correctAnswer: 20,
        explanation: 'AB = OB − OA = (−OA) − OA = −2·OA, so |AB| = 2 × 10 = 20.',
      },
    ],
    commonMistake:
      'Computing AB as OA − OB instead of OB − OA — remember the order is "destination minus start."',
    quickReview: [
      'AB = OB − OA — destination\'s position vector minus the start\'s.',
      'Derived directly from the Triangle Law: OA + AB = OB.',
      'Always subtract in the order (destination − start).',
    ],
  },

  'column-vector-notation-and-components': {
    slug: 'column-vector-notation-and-components',
    title: 'Column Vector Notation and Components',
    difficulty: 'medium',
    simpleExplanation:
      'A two-dimensional vector can be written in "column" (or component) form, showing exactly how ' +
      'far it goes horizontally and vertically: v = (x, y), where x is the horizontal component and y ' +
      'is the vertical component.',
    whyItMatters:
      'Component form turns vector geometry into pure arithmetic — instead of drawing arrows, vectors ' +
      'can be added, subtracted, and scaled just by combining their components directly.',
    diagram: {
      id: 'column-vector-diagram',
      title: 'Vector v = (5, 3), broken into its components',
      altText: 'An arrow from the origin to the point (5,3), with a dashed horizontal segment of length 5 and a dashed vertical segment of length 3 showing the components',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 5, y: 3, label: '(5, 3)', labelDx: 12, labelDy: -4 },
        ],
        segments: [
          { from: [0, 0], to: [5, 3], arrow: true, label: 'v', labelDx: -10, labelDy: -6 },
          { from: [0, 0], to: [5, 0], dashed: true, label: 'x = 5', labelDx: 0, labelDy: 12 },
          { from: [5, 0], to: [5, 3], dashed: true, label: 'y = 3', labelDx: 14, labelDy: 0 },
        ],
        angleMarks: [{ at: [5, 0], from: [0, 0], to: [5, 3], rightAngle: true }],
      },
    },
    workedExample: {
      id: 'column-vector-worked-1',
      title: 'Write a vector in column (component) form',
      problemStatement: 'Write the vector that goes from the origin O to the point (5, 3) in column vector form, and state its horizontal and vertical components.',
      steps: [
        { step: 1, instruction: 'Identify the horizontal displacement.', math: 'x = 5', explanation: '5 units in the x-direction.' },
        { step: 2, instruction: 'Identify the vertical displacement.', math: 'y = 3', explanation: '3 units in the y-direction.' },
        { step: 3, instruction: 'Write in column form.', math: 'v = (5, 3)', explanation: 'x-component first, then y-component.' },
      ],
      finalAnswer: 'v = (5, 3): horizontal component 5, vertical component 3.',
    },
    whyItWorks:
      'Component form works because any 2D displacement can be uniquely broken into a purely ' +
      'horizontal step and a purely vertical step (like walking east, then north, to reach the same ' +
      'destination) — this is really just the Triangle Law applied to two perpendicular direction vectors.',
    realLifeExample: {
      title: 'Joystick input in a video game',
      scenario: 'A game processes a joystick tilt as an (x, y) column vector each frame.',
      explanation: 'The x-component controls how far the character moves left/right, and the y-component controls up/down — exactly the horizontal and vertical components of a vector.',
    },
    practiceQuestions: [
      {
        id: 'column-vector-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A vector goes from the origin to the point (−3, 6). State its y-component.',
        hints: ['The y-component is the second number in (x, y).'],
        correctAnswer: 6,
        explanation: 'For (−3, 6), the y-component is 6.',
      },
    ],
    commonMistake:
      'Swapping the order of the components (writing (y, x) instead of (x, y)) — the convention is ' +
      'always horizontal component first, then vertical.',
    quickReview: [
      'v = (x, y): x is the horizontal component, y is the vertical component.',
      'Component form turns vector geometry into simple arithmetic.',
      'Always write the horizontal component first, vertical second.',
    ],
  },

  'magnitude-of-a-two-dimensional-vector': {
    slug: 'magnitude-of-a-two-dimensional-vector',
    title: 'Magnitude of a Two-Dimensional Vector',
    difficulty: 'medium',
    simpleExplanation:
      'The magnitude (length) of a column vector v = (x, y) is found using the Pythagorean theorem: ' +
      '|v| = √(x² + y²).',
    whyItMatters:
      'This converts a vector\'s abstract component form back into a concrete, measurable length — ' +
      'essential whenever an actual real-world size (like a distance or speed) is needed from column vector data.',
    diagram: {
      id: 'vector-magnitude-diagram',
      title: 'The magnitude of v = (4, 3) via the Pythagorean theorem',
      altText: 'An arrow from the origin to the point (4,3), with dashed horizontal and vertical component segments of length 4 and 3 forming a right triangle',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 4, y: 3, label: '(4, 3)', labelDx: 12, labelDy: -4 },
        ],
        segments: [
          { from: [0, 0], to: [4, 3], arrow: true, label: 'v', labelDx: -10, labelDy: -6 },
          { from: [0, 0], to: [4, 0], dashed: true, label: '4', labelDx: 0, labelDy: 12 },
          { from: [4, 0], to: [4, 3], dashed: true, label: '3', labelDx: 14, labelDy: 0 },
        ],
        angleMarks: [{ at: [4, 0], from: [0, 0], to: [4, 3], rightAngle: true }],
      },
    },
    formulaSlug: 'column-vector-magnitude-formula',
    workedExample: {
      id: 'vector-magnitude-worked-1',
      title: 'Find the magnitude of a column vector',
      problemStatement: 'Find the magnitude of the vector v = (4, 3).',
      steps: [
        { step: 1, instruction: 'Identify the components.', math: 'x = 4,  y = 3', explanation: 'Read off the column vector\'s two entries.' },
        { step: 2, instruction: 'Apply the magnitude formula.', math: '|v| = √(4² + 3²) = √(16+9)', explanation: 'Square each component and add.' },
        { step: 3, instruction: 'Compute the result.', math: '√25 = 5', explanation: 'Take the square root.' },
      ],
      finalAnswer: '|v| = 5.',
    },
    whyItWorks:
      'The vector\'s x and y components form the two legs of a right triangle, since they are ' +
      'perpendicular (horizontal versus vertical). The vector itself — the straight-line arrow from the ' +
      'origin to (x, y) — is exactly the hypotenuse of that triangle, so its length follows directly ' +
      'from the Pythagorean theorem.',
    realLifeExample: {
      title: 'A hiker\'s straight-line distance from camp',
      scenario: 'A hiker walks 4 km east, then 3 km north, from their campsite.',
      explanation: 'Even though 7 km were actually walked, the hiker\'s direct (straight-line) distance from camp is the magnitude of the resultant vector (4,3), which is only 5 km.',
    },
    practiceQuestions: [
      {
        id: 'vector-magnitude-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the magnitude of the vector w = (6, 8).',
        hints: ['|w| = √(6² + 8²).'],
        correctAnswer: 10,
        explanation: '√(36+64) = √100 = 10.',
      },
    ],
    commonMistake:
      'Adding the components directly (x+y) instead of squaring each, summing, and taking the square ' +
      'root — magnitude is almost never just x+y.',
    quickReview: [
      '|v| = √(x² + y²), from the Pythagorean theorem.',
      'x and y are the legs of a right triangle; |v| is the hypotenuse.',
      'v=(4,3) → |v|=5 and v=(6,8) → |v|=10 are useful reference triangles.',
    ],
  },
};
