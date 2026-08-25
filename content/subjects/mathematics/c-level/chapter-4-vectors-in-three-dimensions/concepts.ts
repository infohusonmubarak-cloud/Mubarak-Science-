import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 4 — Vectors in Three Dimensions.
// Matches the textbook preface's description: scalar product, vector
// product, lines and planes in three-dimensional space.
export const chapter4CConcepts: Record<string, Concept> = {
  'vectors-in-three-dimensions-and-their-magnitude': {
    slug: 'vectors-in-three-dimensions-and-their-magnitude',
    title: 'Vectors in Three Dimensions and Their Magnitude',
    difficulty: 'easy',
    simpleExplanation:
      'A vector in 3D is written as v=(x,y,z), extending the familiar 2D vector with a third ' +
      'component. Its magnitude (length) is |v| = √(x²+y²+z²) — the direct 3D extension of the ' +
      'Pythagorean theorem.',
    whyItMatters:
      'Three-dimensional vectors are the essential building block for the rest of this chapter — the ' +
      'dot product, cross product, and vector equations of lines and planes are all defined in terms of them.',
    diagram: {
      id: 'vector-3d-diagram',
      title: 'The vector v = (3, 2, 4) in 3D space',
      altText: 'A sketch of three perpendicular axes labelled x, y, and z, with an arrow from the origin representing the vector v=(3,2,4)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 }],
        segments: [
          { from: [0, 0], to: [-2.5, -2.5], arrow: true, label: 'x', labelDx: -10, labelDy: -6 },
          { from: [0, 0], to: [5, 0], arrow: true, label: 'y', labelDx: 10, labelDy: 4 },
          { from: [0, 0], to: [0, 5], arrow: true, label: 'z', labelDx: 0, labelDy: -10 },
          { from: [0, 0], to: [0.5, 2.5], arrow: true, label: 'v=(3,2,4)', labelDx: 20, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'vector-magnitude-3d-formula',
    workedExample: {
      id: 'vector-3d-worked-1',
      title: 'Find the magnitude of a 3D vector',
      problemStatement: 'Find the magnitude of v=(2,3,6).',
      steps: [
        { step: 1, instruction: 'Apply the 3D magnitude formula.', math: '|v| = √(x²+y²+z²)', explanation: 'Extend the familiar 2D formula with a third term.' },
        { step: 2, instruction: 'Substitute the components.', math: '√(2²+3²+6²) = √(4+9+36)', explanation: 'Square each component.' },
        { step: 3, instruction: 'Simplify and take the square root.', math: '√49 = 7', explanation: 'Add the squares, then take the root.' },
      ],
      finalAnswer: '|v| = 7.',
    },
    whyItWorks:
      'Exactly as with the 3D distance formula in the previous chapter, the vector\'s length is found ' +
      'by applying the Pythagorean theorem twice — once within the (x,y) plane, and once more ' +
      'combining that result with the z-component.',
    realLifeExample: {
      title: 'Describing a force acting in three directions at once',
      scenario: 'A force on a structural beam pushes simultaneously sideways, forward, and upward.',
      explanation: 'This combined force is naturally represented as a 3D vector, and its magnitude gives the actual overall strength of the push, regardless of direction.',
    },
    practiceQuestions: [
      {
        id: 'vector-3d-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the magnitude of v=(1,4,8).',
        hints: ['|v| = √(1²+4²+8²).'],
        correctAnswer: 9,
        explanation: '√(1+16+64) = √81 = 9.',
      },
    ],
    commonMistake:
      'Forgetting the z-component entirely when computing the magnitude — treating the vector as if it ' +
      'were only two-dimensional.',
    quickReview: [
      'A 3D vector is written v = (x, y, z).',
      '|v| = √(x²+y²+z²).',
      'This directly extends the 2D magnitude formula with a third term.',
    ],
  },

  'the-dot-product-of-two-vectors': {
    slug: 'the-dot-product-of-two-vectors',
    title: 'The Dot Product of Two Vectors',
    difficulty: 'medium',
    simpleExplanation:
      'The dot product (or scalar product) combines two vectors into a single number: multiply their ' +
      'corresponding components together, then add the results. a·b = a₁b₁ + a₂b₂ + a₃b₃.',
    whyItMatters:
      'The dot product is the key tool for finding the angle between two vectors, and for testing ' +
      'whether two vectors are perpendicular (their dot product is exactly zero).',
    formulaSlug: 'dot-product-formula',
    workedExample: {
      id: 'dot-product-worked-1',
      title: 'Find the dot product of two vectors',
      problemStatement: 'Find the dot product of a=(1,2,3) and b=(4,−5,6).',
      steps: [
        { step: 1, instruction: 'Apply the dot product formula.', math: 'a·b = a₁b₁ + a₂b₂ + a₃b₃', explanation: 'Multiply corresponding components.' },
        { step: 2, instruction: 'Substitute the components.', math: '1(4) + 2(−5) + 3(6)', explanation: 'Pair up each component.' },
        { step: 3, instruction: 'Simplify.', math: '4 − 10 + 18 = 12', explanation: 'Add the three products.' },
      ],
      finalAnswer: 'a·b = 12.',
    },
    whyItWorks:
      'The dot product can be shown (using the Law of Cosines applied to the triangle formed by a, b, ' +
      'and a−b) to equal |a||b|cosθ — this is exactly why it is the key ingredient for finding the ' +
      'angle θ between two vectors, and why it equals zero precisely when θ=90° (since cos90°=0).',
    realLifeExample: {
      title: 'Calculating work done by a force',
      scenario: 'A force pushes an object in a direction that is not exactly the same as the object\'s displacement.',
      explanation: 'The work actually done is the dot product of the force vector and the displacement vector — accounting exactly for how much of the force acts along the direction of motion.',
    },
    practiceQuestions: [
      {
        id: 'dot-product-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the dot product of a=(2,0,3) and b=(−1,4,2).',
        hints: ['a·b = a₁b₁+a₂b₂+a₃b₃.'],
        correctAnswer: 4,
        explanation: '2(−1)+0(4)+3(2) = −2+0+6 = 4.',
      },
    ],
    commonMistake:
      'Forgetting that the dot product\'s result is a single SCALAR (a plain number), not another ' +
      'vector — it should never be written as a triple like the inputs.',
    quickReview: [
      'a·b = a₁b₁ + a₂b₂ + a₃b₃.',
      'The result is always a scalar (single number), never a vector.',
      'a·b = 0 exactly when a and b are perpendicular.',
    ],
  },

  'the-angle-between-two-vectors': {
    slug: 'the-angle-between-two-vectors',
    title: 'The Angle Between Two Vectors',
    difficulty: 'medium',
    simpleExplanation:
      'The angle θ between two vectors a and b can be found directly from their dot product: ' +
      'cos θ = (a·b) / (|a||b|).',
    whyItMatters:
      'This connects the abstract dot product back to an intuitive, measurable geometric quantity — ' +
      'the actual angle between two directions in space.',
    diagram: {
      id: 'vector-angle-diagram',
      title: 'The 90° angle between a=(0,3,0) and b=(0,0,3)',
      altText: 'Two arrows from a common origin, one pointing along the y-axis and one along the z-axis, with a right angle marked between them',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 }],
        segments: [
          { from: [0, 0], to: [3, 0], arrow: true, label: 'a', labelDx: 10, labelDy: 4 },
          { from: [0, 0], to: [0, 3], arrow: true, label: 'b', labelDx: 0, labelDy: -10 },
        ],
        angleMarks: [{ at: [0, 0], from: [3, 0], to: [0, 3], rightAngle: true }],
      },
    },
    formulaSlug: 'angle-between-vectors-formula',
    workedExample: {
      id: 'vector-angle-worked-1',
      title: 'Find the angle between two vectors',
      problemStatement: 'Find the angle between a=(1,0,0) and b=(1,1,0).',
      steps: [
        { step: 1, instruction: 'Find the dot product.', math: 'a·b = 1(1)+0(1)+0(0) = 1', explanation: 'Multiply and add corresponding components.' },
        { step: 2, instruction: 'Find the magnitudes.', math: '|a| = 1,   |b| = √(1²+1²+0²) = √2', explanation: 'Magnitude of each vector.' },
        { step: 3, instruction: 'Apply the angle formula.', math: 'cos θ = 1 / (1·√2) = 1/√2 ≈ 0.7071', explanation: 'Divide the dot product by the product of the magnitudes.' },
        { step: 4, instruction: 'Take the inverse cosine.', math: 'θ = arccos(0.7071) = 45°', explanation: 'Solve for θ.' },
      ],
      finalAnswer: 'θ = 45°.',
    },
    whyItWorks:
      'This formula is simply the identity a·b=|a||b|cosθ, rearranged to solve for cosθ directly — ' +
      'once cosθ is known, the angle itself follows by taking the inverse cosine (arccos).',
    realLifeExample: {
      title: 'Measuring the angle between two structural beams',
      scenario: 'An engineer knows the direction vectors of two beams meeting at a joint, and needs the actual angle between them.',
      explanation: 'The angle-between-vectors formula computes this directly from the two direction vectors, without needing a physical protractor.',
    },
    practiceQuestions: [
      {
        id: 'vector-angle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the angle (in degrees) between a=(3,4,0) and b=(0,0,5).',
        hints: ['Find a·b first — notice it is 0.'],
        correctAnswer: 90,
        explanation: 'a·b = 3(0)+4(0)+0(5) = 0, so cosθ=0, meaning θ=90°.',
      },
    ],
    commonMistake:
      'Forgetting to divide by BOTH magnitudes (or forgetting the magnitudes entirely) before taking ' +
      'the inverse cosine — cosθ specifically needs the dot product scaled down by |a||b|.',
    quickReview: [
      'cos θ = (a·b) / (|a||b|).',
      'θ = 90° exactly when a·b = 0.',
      'Comes directly from rearranging a·b = |a||b|cosθ.',
    ],
  },

  'the-cross-product-of-two-vectors': {
    slug: 'the-cross-product-of-two-vectors',
    title: 'The Cross Product of Two Vectors',
    difficulty: 'hard',
    simpleExplanation:
      'The cross product (or vector product) combines two vectors into a NEW vector, perpendicular to ' +
      'both of the original vectors: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).',
    whyItMatters:
      'Unlike the dot product (which gives a number), the cross product gives a genuinely new vector — ' +
      'essential whenever a direction perpendicular to two known directions is needed, such as a surface\'s normal vector.',
    diagram: {
      id: 'cross-product-diagram',
      title: 'a=(3,0,0), b=(0,3,0), and their cross product a×b, pointing straight up',
      altText: 'Two arrows from a common origin along the x-axis and y-axis directions, with a third dashed arrow pointing straight up representing their cross product',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 }],
        segments: [
          { from: [0, 0], to: [-1.5, -1.5], arrow: true, label: 'a', labelDx: -12, labelDy: -4 },
          { from: [0, 0], to: [3, 0], arrow: true, label: 'b', labelDx: 10, labelDy: 4 },
          { from: [0, 0], to: [0, 3], arrow: true, dashed: true, label: 'a×b', labelDx: 0, labelDy: -12 },
        ],
      },
    },
    formulaSlug: 'cross-product-formula',
    workedExample: {
      id: 'cross-product-worked-1',
      title: 'Find the cross product of two vectors',
      problemStatement: 'Find a×b for a=(1,0,0) and b=(0,1,0).',
      steps: [
        { step: 1, instruction: 'Apply the cross product formula for the first component.', math: 'a₂b₃−a₃b₂ = (0)(0)−(0)(1) = 0', explanation: 'First component.' },
        { step: 2, instruction: 'Find the second component.', math: 'a₃b₁−a₁b₃ = (0)(0)−(1)(0) = 0', explanation: 'Second component.' },
        { step: 3, instruction: 'Find the third component.', math: 'a₁b₂−a₂b₁ = (1)(1)−(0)(0) = 1', explanation: 'Third component.' },
      ],
      finalAnswer: 'a×b = (0, 0, 1).',
    },
    whyItWorks:
      'This particular result — that the vector along x, crossed with the vector along y, gives exactly ' +
      'the vector along z — is precisely the geometric meaning of the cross product: it always produces ' +
      'a vector perpendicular to both original vectors, following a consistent "right-hand rule" direction.',
    realLifeExample: {
      title: 'Finding the direction perpendicular to a surface',
      scenario: 'A computer graphics program knows two direction vectors lying flat within a surface (like a 3D model\'s face) and needs the surface\'s normal direction for lighting calculations.',
      explanation: 'The cross product of the two in-surface vectors gives exactly the perpendicular (normal) direction needed.',
    },
    practiceQuestions: [
      {
        id: 'cross-product-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the z-component of a×b for a=(2,1,0) and b=(1,3,0).',
        hints: ['The z-component is a₁b₂−a₂b₁.'],
        correctAnswer: 5,
        explanation: '(2)(3)−(1)(1) = 6−1 = 5.',
      },
    ],
    commonMistake:
      'Mixing up the cyclic index pattern of the cross product formula (e.g. computing a₁b₃−a₃b₁ for ' +
      'the wrong component) — each component follows a specific cyclic pattern that must be applied exactly.',
    quickReview: [
      'a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).',
      'The result is a NEW vector, perpendicular to both a and b.',
      'i×j=k is the classic example of this pattern.',
    ],
  },

  'the-cross-product-and-area-of-a-parallelogram': {
    slug: 'the-cross-product-and-area-of-a-parallelogram',
    title: 'The Cross Product and Area of a Parallelogram',
    difficulty: 'medium',
    simpleExplanation:
      'The magnitude of the cross product of two vectors equals the area of the parallelogram they form: ' +
      'Area = |a×b|.',
    whyItMatters:
      'This is a genuinely useful shortcut for finding areas in 3D, where a simple base-times-height ' +
      'calculation is much harder to set up directly.',
    formulaSlug: 'cross-product-area-formula',
    workedExample: {
      id: 'cross-product-area-worked-1',
      title: 'Find the area of a parallelogram using the cross product',
      problemStatement: 'Find the area of the parallelogram formed by a=(3,0,0) and b=(0,4,0).',
      steps: [
        { step: 1, instruction: 'Find the cross product a×b.', math: 'a×b = (0·0−0·4,  0·0−3·0,  3·4−0·0) = (0,0,12)', explanation: 'Apply the cross product formula.' },
        { step: 2, instruction: 'Find the magnitude of the cross product.', math: '|a×b| = √(0²+0²+12²) = 12', explanation: 'This magnitude IS the area.' },
      ],
      finalAnswer: 'Area = 12 square units.',
    },
    whyItWorks:
      'The magnitude of the cross product can be shown to equal |a||b|sinθ, where θ is the angle ' +
      'between a and b — and |a||b|sinθ is exactly the standard base-times-height formula for a ' +
      'parallelogram\'s area (base |a|, height |b|sinθ).',
    realLifeExample: {
      title: 'Computing the surface area of a tilted solar panel',
      scenario: 'A solar panel is described by two edge vectors that are not perpendicular to each other, at some angle due to the panel\'s installation.',
      explanation: 'The cross product magnitude gives the panel\'s actual area directly from the two edge vectors, without needing to first find the angle between them.',
    },
    practiceQuestions: [
      {
        id: 'cross-product-area-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the area of the parallelogram formed by a=(5,0,0) and b=(0,2,0).',
        hints: ['a×b = (0,0,10).'],
        correctAnswer: 10,
        explanation: '|a×b| = √(0+0+100) = 10 (matches the simple 5×2 rectangle check).',
      },
    ],
    commonMistake:
      'Forgetting to take the MAGNITUDE of the cross product — the cross product itself is a vector, ' +
      'but the area is its length (a scalar).',
    quickReview: [
      'Area of the parallelogram formed by a and b = |a×b|.',
      'Comes from |a×b| = |a||b|sinθ, the standard area formula in disguise.',
      'Half of this gives the area of the triangle formed by a and b instead.',
    ],
  },

  'the-vector-equation-of-a-line-in-space': {
    slug: 'the-vector-equation-of-a-line-in-space',
    title: 'The Vector Equation of a Line in Space',
    difficulty: 'medium',
    simpleExplanation:
      'A line through a known point (with position vector r₀) in the direction of vector v can be ' +
      'written compactly as r = r₀ + t·v, where r is the position vector of any point on the line and ' +
      't is a parameter.',
    whyItMatters:
      'This is the vector-notation counterpart of the parametric equations from the previous chapter — ' +
      'often a cleaner, more compact way to work with lines, especially in vector-based calculations.',
    formulaSlug: 'vector-equation-of-a-line-formula',
    workedExample: {
      id: 'vector-line-worked-1',
      title: 'Write a line\'s vector equation',
      problemStatement: 'Write the vector equation of the line through the point with position vector r₀=(1,2,3), in the direction of v=(2,−1,4).',
      steps: [
        { step: 1, instruction: 'Apply the vector equation of a line.', math: 'r = r₀ + t·v', explanation: 'Substitute the known point and direction.' },
        { step: 2, instruction: 'Substitute the values.', math: 'r = (1,2,3) + t(2,−1,4)', explanation: 'Combine into one vector equation.' },
        { step: 3, instruction: 'Write out the components.', math: 'r = (1+2t, 2−t, 3+4t)', explanation: 'Distribute t into each component.' },
      ],
      finalAnswer: 'r = (1+2t, 2−t, 3+4t).',
    },
    whyItWorks:
      'Starting at the known point r₀ and adding t·v for different values of t traces out every point ' +
      'on the line — positive t moves in the direction of v, negative t moves the opposite way, and ' +
      't=0 gives back the starting point exactly.',
    realLifeExample: {
      title: 'Modeling a laser beam\'s straight-line path',
      scenario: 'A laser starts at a known position and travels in a fixed direction through space.',
      explanation: 'The vector equation of a line gives the laser\'s exact position at any "time" t along its path.',
    },
    practiceQuestions: [
      {
        id: 'vector-line-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For the line r=(1+2t, 2−t, 3+4t), find the y-coordinate at t=5.',
        hints: ['Substitute t=5 into the y-component.'],
        correctAnswer: -3,
        explanation: '2−5 = −3.',
      },
    ],
    commonMistake:
      'Confusing r₀ (a fixed point the line passes through) with v (the direction the line travels) — ' +
      'they play very different roles in the equation.',
    quickReview: [
      'r = r₀ + t·v.',
      'r₀ is a known point on the line; v is the direction vector.',
      'Each value of t gives one specific point on the line.',
    ],
  },

  'the-vector-equation-of-a-plane-in-space': {
    slug: 'the-vector-equation-of-a-plane-in-space',
    title: 'The Vector Equation of a Plane in Space',
    difficulty: 'medium',
    simpleExplanation:
      'A plane through a known point (position vector r₀), with normal vector n, is described by the ' +
      'vector equation n·(r−r₀) = 0 — every point r in the plane forms a vector (r−r₀) that is ' +
      'perpendicular to n.',
    whyItMatters:
      'This is the vector-notation version of the point-normal plane equation from the previous ' +
      'chapter — the same idea, expressed compactly using the dot product.',
    formulaSlug: 'vector-equation-of-a-plane-formula',
    workedExample: {
      id: 'vector-plane-worked-1',
      title: 'Write a plane\'s vector equation, then convert to component form',
      problemStatement: 'Write the vector equation of the plane through r₀=(1,0,2) with normal vector n=(3,1,−2), then convert to component (ax+by+cz=d) form.',
      steps: [
        { step: 1, instruction: 'Write the vector equation.', math: 'n·(r−r₀) = 0', explanation: 'Substitute the normal vector and known point.' },
        { step: 2, instruction: 'Expand using components.', math: '3(x−1) + 1(y−0) − 2(z−2) = 0', explanation: 'Distribute the dot product over each coordinate.' },
        { step: 3, instruction: 'Simplify.', math: '3x−3 + y − 2z+4 = 0  →  3x+y−2z+1=0', explanation: 'Combine the constants: −3+4=1.' },
        { step: 4, instruction: 'Write in standard form.', math: '3x+y−2z = −1', explanation: 'Move the constant to the right side.' },
      ],
      finalAnswer: '3x + y − 2z = −1.',
    },
    whyItWorks:
      'n·(r−r₀)=0 literally states that (r−r₀), the vector from the known point to any other point on ' +
      'the plane, is perpendicular to the normal — expanding this dot product using components gives ' +
      'exactly the same a(x−x₀)+b(y−y₀)+c(z−z₀)=0 equation as before, just derived using vector notation this time.',
    realLifeExample: {
      title: 'Programming a flat virtual surface in a 3D engine',
      scenario: 'A game engine needs a compact, efficient mathematical test for whether a point lies on a flat surface, given the surface\'s normal and one known point.',
      explanation: 'The vector equation n·(r−r₀)=0 is exactly the compact test used — it evaluates to zero precisely for points on the plane.',
    },
    practiceQuestions: [
      {
        id: 'vector-plane-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For a plane through r₀=(2,1,0) with normal n=(1,1,1), find d in the equation x+y+z=d.',
        hints: ['d = n·r₀.'],
        correctAnswer: 3,
        explanation: 'd = 1(2)+1(1)+1(0) = 3.',
      },
    ],
    commonMistake:
      'Treating this as a completely new, unrelated technique — it is really the same point-normal ' +
      'plane equation from before, just written compactly with the dot product.',
    quickReview: [
      'n·(r−r₀) = 0.',
      'Expands directly into the familiar a(x−x₀)+b(y−y₀)+c(z−z₀)=0 form.',
      'n is the normal vector; r₀ is a known point on the plane.',
    ],
  },

  'the-scalar-triple-product-and-volume': {
    slug: 'the-scalar-triple-product-and-volume',
    title: 'The Scalar Triple Product and Volume',
    difficulty: 'hard',
    simpleExplanation:
      'Combining the dot and cross products, the scalar triple product a·(b×c) gives (up to a sign) the ' +
      'volume of the parallelepiped (a "slanted box") formed by three vectors sharing a common vertex: ' +
      'Volume = |a·(b×c)|.',
    whyItMatters:
      'This is the natural 3D extension of using the cross product for area — extending from a flat ' +
      '2D shape (a parallelogram) to a full 3D solid (a parallelepiped).',
    formulaSlug: 'scalar-triple-product-volume-formula',
    workedExample: {
      id: 'triple-product-worked-1',
      title: 'Find a volume using the scalar triple product',
      problemStatement: 'Find the volume of the parallelepiped formed by a=(1,0,0), b=(0,1,0), and c=(0,0,1).',
      steps: [
        { step: 1, instruction: 'Find b×c first.', math: 'b×c = (1·1−0·0,  0·0−0·1,  0·0−1·0) = (1,0,0)', explanation: 'Apply the cross product formula to b and c.' },
        { step: 2, instruction: 'Find a·(b×c).', math: 'a·(b×c) = 1(1)+0(0)+0(0) = 1', explanation: 'Dot a with the result from step 1.' },
        { step: 3, instruction: 'Take the absolute value.', math: '|1| = 1', explanation: 'Volume is always non-negative.' },
      ],
      finalAnswer: 'Volume = 1 cubic unit (this checks out — these three vectors form a unit cube).',
    },
    whyItWorks:
      '|b×c| gives the area of the base parallelogram formed by b and c, and the direction of b×c is ' +
      'perpendicular to that base — so a·(b×c) essentially measures (base area) × (a\'s component ' +
      'perpendicular to the base), which is exactly base area × height, the formula for the volume of a ' +
      'parallelepiped.',
    realLifeExample: {
      title: 'Finding the volume of a slanted storage container',
      scenario: 'An engineer describes a storage tank shaped like a parallelepiped (a "slanted box") using three edge vectors from one corner.',
      explanation: 'The scalar triple product gives the tank\'s actual volume directly from these three edge vectors.',
    },
    practiceQuestions: [
      {
        id: 'triple-product-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the volume of the parallelepiped formed by a=(2,0,0), b=(0,3,0), and c=(0,0,4).',
        hints: ['b×c = (12,0,0).', 'a·(b×c) = 2(12).'],
        correctAnswer: 24,
        explanation: 'b×c=(12,0,0); a·(b×c)=2(12)+0+0=24 (matches the simple 2×3×4 box volume check).',
      },
    ],
    commonMistake:
      'Forgetting to take the absolute value — the scalar triple product can come out negative ' +
      'depending on the vectors\' orientation, but a volume must always be non-negative.',
    quickReview: [
      'Volume = |a·(b×c)|.',
      'Combines the cross product (base area) with the dot product (accounting for height).',
      'The 3D extension of using the cross product for a parallelogram\'s area.',
    ],
  },
};
