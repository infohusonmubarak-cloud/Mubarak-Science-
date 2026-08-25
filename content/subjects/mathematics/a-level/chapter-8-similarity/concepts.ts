import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 8 — Similarity. Matches sections 8.1-8.6
// of the textbook exactly, including simply-stated proofs for the
// theorems the textbook gives.
export const chapter8Concepts: Record<string, Concept> = {
  'meaning-of-similar-figures-and-similar-triangles': {
    slug: 'meaning-of-similar-figures-and-similar-triangles',
    title: 'Meaning of Similar Figures and Similar Triangles',
    difficulty: 'easy',
    simpleExplanation:
      'Two figures are similar if they have exactly the same shape, though possibly different ' +
      'sizes — one is an enlargement or reduction of the other. For triangles specifically, this ' +
      'means corresponding angles are equal and corresponding sides are all in the same fixed ratio (the scale factor).',
    whyItMatters:
      'Similarity is how mathematics captures the everyday idea of "same shape, different size" — ' +
      'the foundation for scale models, maps, photo enlargements, and every theorem in this chapter.',
    diagram: {
      id: 'similar-triangles-diagram',
      title: 'Two similar triangles',
      altText: 'Triangle ABC and a larger triangle A-prime B-prime C-prime with the same shape, showing corresponding vertices',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 4, y: 0, label: 'B', labelDx: 4, labelDy: 10 },
          { x: 1, y: 3, label: 'C', labelDx: -4, labelDy: -6 },
          { x: 6, y: 0, label: "A'", labelDx: -8, labelDy: 8 },
          { x: 12, y: 0, label: "B'", labelDx: 8, labelDy: 10 },
          { x: 7.5, y: 4.5, label: "C'", labelDx: 0, labelDy: -8 },
        ],
        segments: [
          { from: [0, 0], to: [4, 0] },
          { from: [4, 0], to: [1, 3] },
          { from: [1, 3], to: [0, 0] },
          { from: [6, 0], to: [12, 0] },
          { from: [12, 0], to: [7.5, 4.5] },
          { from: [7.5, 4.5], to: [6, 0] },
        ],
      },
    },
    formulaSlug: 'similarity-ratio-formula',
    workedExample: {
      id: 'similar-figures-worked-1',
      title: 'Find a missing side using similarity',
      problemStatement: '△ABC ~ △DEF (read "is similar to"), with AB=4, BC=6, and DE=6. Find EF.',
      steps: [
        { step: 1, instruction: 'Write the similarity ratio using the known corresponding sides.', math: 'AB/DE = BC/EF', explanation: 'AB corresponds to DE, and BC corresponds to EF.' },
        { step: 2, instruction: 'Substitute known values.', math: '4/6 = 6/EF', explanation: 'Set up the proportion.' },
        { step: 3, instruction: 'Cross-multiply and solve for EF.', math: '4·EF = 36  →  EF = 9', explanation: 'Solve the resulting equation.' },
      ],
      finalAnswer: 'EF = 9',
    },
    whyItWorks:
      'Similarity means every length in one figure is scaled by the exact same factor k to produce ' +
      'the other figure — so any two corresponding sides must be in that same ratio k, which is why setting corresponding side ratios equal to each other always gives a correct proportion.',
    realLifeExample: {
      title: 'Scale models and maps',
      scenario: 'An architect\'s scale model of a building, or a road map of a city, are both smaller similar copies of the real thing.',
      explanation: 'Every real-world distance is shrunk by the same scale factor in the model or map — exactly the mathematical definition of similarity in action.',
    },
    practiceQuestions: [
      {
        id: 'similar-figures-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What must be true for two triangles to be similar?',
        options: [
          { id: 'a', text: 'Corresponding angles equal AND corresponding sides in the same ratio' },
          { id: 'b', text: 'Corresponding sides must be exactly equal' },
          { id: 'c', text: 'They must have the same area' },
          { id: 'd', text: 'They must have the same perimeter' },
        ],
        correctOptionId: 'a',
        hints: ['Similar means "same shape" — angles match exactly, sizes can scale.'],
        explanation: 'Similar triangles have equal corresponding angles and proportional (not necessarily equal) corresponding sides.',
      },
    ],
    commonMistake:
      'Confusing similar (same shape, possibly different size) with congruent (same shape AND ' +
      'same size) — congruent figures are always similar with scale factor 1, but similar figures are not always congruent.',
    quickReview: [
      'Similar figures have the same shape; corresponding angles are equal, corresponding sides share one common ratio.',
      "AB/A'B' = BC/B'C' = CA/C'A' — this common ratio is the scale factor.",
      'Congruent is a special case of similar, with scale factor exactly 1.',
    ],
  },

  'the-basic-proportionality-theorem': {
    slug: 'the-basic-proportionality-theorem',
    title: 'The Basic Proportionality Theorem',
    difficulty: 'hard',
    simpleExplanation:
      "Also known as Thales' theorem: if a line is drawn parallel to one side of a triangle, " +
      'cutting the other two sides, it divides those two sides in exactly the same ratio: AD/DB = AE/EC.',
    whyItMatters:
      'This theorem is the key tool for proving many other results about similar triangles, and it ' +
      'directly explains why parallel cuts always create proportional pieces.',
    diagram: {
      id: 'basic-proportionality-diagram',
      title: 'A line parallel to BC cutting the other two sides',
      altText: 'Triangle ABC with a line segment DE parallel to BC, D on AB and E on AC',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 3, y: 6, label: 'A', labelDx: 0, labelDy: 10 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 8, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
          { x: 1.5, y: 3, label: 'D', labelDx: -10, labelDy: 0 },
          { x: 5.5, y: 3, label: 'E', labelDx: 10, labelDy: 0 },
        ],
        segments: [
          { from: [3, 6], to: [0, 0] },
          { from: [0, 0], to: [8, 0] },
          { from: [8, 0], to: [3, 6] },
          { from: [1.5, 3], to: [5.5, 3], dashed: true, label: 'DE ∥ BC' },
        ],
      },
    },
    formulaSlug: 'basic-proportionality-theorem-formula',
    workedExample: {
      id: 'basic-proportionality-worked-1',
      title: 'Apply the basic proportionality theorem',
      problemStatement: 'In △ABC, DE ∥ BC, with D on AB and E on AC. If AD=4, DB=6, and AE=6, find EC.',
      steps: [
        { step: 1, instruction: 'Write the theorem\'s proportion.', math: 'AD/DB = AE/EC', explanation: 'DE ∥ BC guarantees this ratio holds.' },
        { step: 2, instruction: 'Substitute the known values.', math: '4/6 = 6/EC', explanation: 'Fill in AD, DB, and AE.' },
        { step: 3, instruction: 'Cross-multiply and solve.', math: '4·EC = 36  →  EC = 9', explanation: 'Solve the proportion for EC.' },
      ],
      finalAnswer: 'EC = 9',
    },
    whyItWorks:
      'Stated simply: since DE ∥ BC, △ADE and △ABC share the same angle at A, and DE ∥ BC makes ' +
      'the angles at D and B equal (corresponding angles on parallel lines) — so △ADE ~ △ABC by AA ' +
      'similarity. Their sides are proportional: AD/AB = AE/AC. Since AB = AD + DB and AC = AE + EC, ' +
      'this proportion rearranges algebraically into exactly AD/DB = AE/EC.',
    realLifeExample: {
      title: 'Evenly spaced shelf supports',
      scenario: 'A carpenter cuts parallel shelf supports at fixed angles inside a triangular bracket frame.',
      explanation: 'The basic proportionality theorem guarantees each parallel cut divides the frame\'s slanted edges in the same fixed ratio, letting the carpenter predict every measurement in advance.',
    },
    practiceQuestions: [
      {
        id: 'basic-proportionality-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In △ABC, DE ∥ BC. AD=3, DB=9, AE=5. Find EC.',
        hints: ['AD/DB = AE/EC.', '3/9 = 5/EC.'],
        correctAnswer: 15,
        explanation: '3/9 = 5/EC → 3·EC = 45 → EC = 15.',
      },
    ],
    commonMistake:
      'Using AD/AB = AE/EC (mixing a whole side with a partial segment) instead of the correct ' +
      'AD/DB = AE/EC (comparing the two partial segments on each side to each other).',
    quickReview: [
      'If DE ∥ BC in △ABC, then AD/DB = AE/EC.',
      'Proof idea: DE ∥ BC makes △ADE ~ △ABC (AA), and algebraic rearrangement gives the segment ratio.',
      'Also called Thales\' theorem.',
    ],
  },

  'similarity-tests-for-triangles': {
    slug: 'similarity-tests-for-triangles',
    title: 'Similarity Tests for Triangles (AA, SAS, SSS)',
    difficulty: 'hard',
    simpleExplanation:
      'You do not need to check all three angles and all three sides to prove triangles are ' +
      'similar. Three shortcuts suffice: AA (two pairs of equal angles), SAS (two pairs of ' +
      'proportional sides with the included angle equal), or SSS (all three pairs of sides proportional).',
    whyItMatters:
      'These shortcuts make proving similarity practical — checking just two angles (AA) is far ' +
      'faster than measuring every side and angle of both triangles.',
    diagram: {
      id: 'aa-similarity-diagram',
      title: 'AA similarity — two triangles with two matching angle pairs',
      altText: 'Two triangles of different sizes with matching angle marks at two corresponding vertices, illustrating the AA similarity test',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 6 },
          { x: 5, y: 0, label: 'B', labelDx: 8, labelDy: 6 },
          { x: 1, y: 3, label: 'C', labelDx: -2, labelDy: 8 },
          { x: 7, y: 0, label: 'D', labelDx: -8, labelDy: 6 },
          { x: 11, y: 0, label: 'E', labelDx: 8, labelDy: 6 },
          { x: 7.8, y: 2.4, label: 'F', labelDx: 0, labelDy: 8 },
        ],
        segments: [
          { from: [0, 0], to: [5, 0] },
          { from: [5, 0], to: [1, 3] },
          { from: [1, 3], to: [0, 0] },
          { from: [7, 0], to: [11, 0] },
          { from: [11, 0], to: [7.8, 2.4] },
          { from: [7.8, 2.4], to: [7, 0] },
        ],
        angleMarks: [
          { at: [0, 0], from: [5, 0], to: [1, 3], label: 'x°' },
          { at: [7, 0], from: [11, 0], to: [7.8, 2.4], label: 'x°' },
          { at: [5, 0], from: [0, 0], to: [1, 3], label: 'y°' },
          { at: [11, 0], from: [7, 0], to: [7.8, 2.4], label: 'y°' },
        ],
      },
    },
    formulaSlug: 'similarity-ratio-formula',
    workedExample: {
      id: 'similarity-tests-worked-1',
      title: 'Prove two triangles similar using AA',
      problemStatement: 'In △ABC and △DEF, ∠A = ∠D = 50° and ∠B = ∠E = 70°. Are the triangles similar?',
      steps: [
        { step: 1, instruction: 'Check the given angle pairs.', math: '∠A = ∠D = 50°,  ∠B = ∠E = 70°', explanation: 'Two pairs of corresponding angles are already equal.' },
        { step: 2, instruction: 'Apply the AA similarity test.', explanation: 'Two equal angle pairs are enough — the third pair must also match, since a triangle\'s angles always sum to 180°.' },
        { step: 3, instruction: 'Conclude.', math: '∠C = 180 − 50 − 70 = 60° = ∠F', explanation: 'The third angles automatically match too, confirming AA similarity.' },
      ],
      finalAnswer: 'Yes, △ABC ~ △DEF by AA similarity.',
    },
    whyItWorks:
      'AA is enough because a triangle\'s three angles always sum to 180° — once two angles match, ' +
      'the third is forced to match too, so all three angle pairs are automatically equal, which is ' +
      'the defining condition for similarity. SAS and SSS work because, together with the triangle\'s rigidity, matching those specific combinations of proportional sides and angles is enough to force every other angle and side ratio to match as well.',
    realLifeExample: {
      title: 'Measuring height using shadows',
      scenario: 'A person\'s height and shadow length form a triangle similar to a tree\'s height and shadow, since both make the same angle with the sun\'s rays (AA — the right angle with the ground, and the shared sun angle).',
      explanation: 'Surveyors and students use exactly this AA similarity to measure a tall object\'s height indirectly, using only shadow lengths and a known height.',
    },
    practiceQuestions: [
      {
        id: 'similarity-tests-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which similarity test needs only two pieces of angle information?',
        options: [
          { id: 'a', text: 'AA' },
          { id: 'b', text: 'SSS' },
          { id: 'c', text: 'SAS' },
          { id: 'd', text: 'None — all three sides must always be checked' },
        ],
        correctOptionId: 'a',
        hints: ['AA stands for Angle-Angle.'],
        explanation: 'AA only requires two pairs of equal corresponding angles.',
      },
    ],
    commonMistake:
      'Checking only one pair of equal angles and assuming that is enough — a single equal angle ' +
      'does not guarantee similarity; AA specifically needs two independent equal angle pairs.',
    quickReview: [
      'AA: two pairs of equal corresponding angles.',
      'SAS: two pairs of proportional sides with the included angle equal.',
      'SSS: all three pairs of corresponding sides proportional.',
    ],
  },

  'the-angle-bisector-theorem': {
    slug: 'the-angle-bisector-theorem',
    title: 'The Angle Bisector Theorem',
    difficulty: 'hard',
    simpleExplanation:
      'When a triangle\'s angle is bisected (cut into two equal angles) by a segment reaching the ' +
      'opposite side, that segment divides the opposite side into two pieces whose ratio equals the ' +
      'ratio of the two sides forming the bisected angle: BD/DC = AB/AC.',
    whyItMatters:
      'This theorem connects an angle-splitting construction to a length ratio, letting you find ' +
      'segment lengths from angle information (or vice versa) without measuring the angle directly.',
    diagram: {
      id: 'angle-bisector-diagram',
      title: 'The angle bisector from A meeting BC at D',
      altText: 'Triangle ABC with a bisector from vertex A splitting the angle at A into two equal parts and meeting side BC at point D',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 2, y: 5, label: 'A', labelDx: 0, labelDy: 10 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 7, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
          { x: 3, y: 0, label: 'D', labelDx: 0, labelDy: -10 },
        ],
        segments: [
          { from: [2, 5], to: [0, 0] },
          { from: [0, 0], to: [7, 0] },
          { from: [7, 0], to: [2, 5] },
          { from: [2, 5], to: [3, 0], dashed: true },
        ],
        angleMarks: [
          { at: [2, 5], from: [0, 0], to: [3, 0], label: 'θ', radius: 0.7 },
          { at: [2, 5], from: [3, 0], to: [7, 0], label: 'θ', radius: 0.7 },
        ],
      },
    },
    formulaSlug: 'angle-bisector-theorem-formula',
    workedExample: {
      id: 'angle-bisector-worked-1',
      title: 'Apply the angle bisector theorem',
      problemStatement: 'In △ABC, AD bisects ∠A, with D on BC. If AB=6, AC=9, and BC=15, find BD and DC.',
      steps: [
        { step: 1, instruction: 'Write the theorem\'s proportion.', math: 'BD/DC = AB/AC = 6/9 = 2/3', explanation: 'The bisector splits BC in the same ratio as the two sides forming the angle.' },
        { step: 2, instruction: 'Use the ratio to split BC=15 into 2+3=5 parts.', math: '15 / 5 = 3 (one part)', explanation: 'Each "part" of the 2:3 ratio is 3 units long.' },
        { step: 3, instruction: 'Compute BD and DC.', math: 'BD = 2×3 = 6,  DC = 3×3 = 9', explanation: 'Multiply each ratio number by the size of one part.' },
      ],
      finalAnswer: 'BD = 6, DC = 9',
    },
    whyItWorks:
      'Stated simply: draw a line through C parallel to AD, meeting the extension of BA at a point ' +
      'E. Since AD ∥ CE, alternate and corresponding angles show △AEC is isosceles with AE = AC. Then ' +
      'in △BCE, AD ∥ CE means BD/DC = BA/AE (basic proportionality theorem) — and since AE = AC, this ' +
      'is exactly BD/DC = AB/AC.',
    realLifeExample: {
      title: 'Dividing land fairly along a bisecting boundary',
      scenario: 'A triangular plot of land is divided by a straight boundary line from one corner that bisects that corner\'s angle.',
      explanation: 'The angle bisector theorem tells surveyors exactly how that boundary divides the opposite edge, in the same ratio as the two adjacent side lengths.',
    },
    practiceQuestions: [
      {
        id: 'angle-bisector-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In △ABC, AD bisects ∠A. AB=4, AC=6, BC=20. Find BD.',
        hints: ['BD/DC = 4/6 = 2/3.', 'BD+DC=20, split into 2+3=5 parts.'],
        correctAnswer: 8,
        explanation: 'Each part = 20/5 = 4. BD = 2×4 = 8.',
      },
    ],
    commonMistake:
      'Mixing up which side of the ratio BD and DC belong to — BD (closer to B) corresponds to AB, ' +
      'and DC (closer to C) corresponds to AC; swapping them reverses the ratio.',
    quickReview: [
      'BD/DC = AB/AC, when AD bisects ∠A in △ABC.',
      'Proof idea: draw CE ∥ AD through C to create an isosceles triangle, then apply the basic proportionality theorem.',
      'Match BD to AB and DC to AC by which vertex (B or C) each segment is nearest to.',
    ],
  },

  'the-pythagoras-theorem': {
    slug: 'the-pythagoras-theorem',
    title: 'The Pythagoras Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'In any right triangle, the square of the hypotenuse (the side opposite the right angle) ' +
      'equals the sum of the squares of the other two sides: a² + b² = c².',
    whyItMatters:
      'This is one of the most-used results in all of mathematics — it connects the three sides of ' +
      'any right triangle, letting you find any one side from the other two.',
    diagram: {
      id: 'pythagoras-diagram',
      title: 'A 3-4-5 right triangle',
      altText: 'A right triangle with legs of length 3 and 4 and hypotenuse of length 5, with the right angle marked',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 4, label: 'A', labelDx: -6, labelDy: 6 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 3, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
        ],
        segments: [
          { from: [0, 4], to: [0, 0], label: '4' },
          { from: [0, 0], to: [3, 0], label: '3' },
          { from: [3, 0], to: [0, 4], label: '5' },
        ],
        angleMarks: [{ at: [0, 0], from: [0, 4], to: [3, 0], rightAngle: true }],
      },
    },
    formulaSlug: 'pythagorean-theorem',
    workedExample: {
      id: 'pythagoras-worked-1',
      title: 'Find the hypotenuse of a right triangle',
      problemStatement: 'A right triangle has legs of length 6 and 8. Find the hypotenuse.',
      steps: [
        { step: 1, instruction: 'Apply the Pythagorean theorem.', math: 'a² + b² = c²', explanation: 'a=6, b=8 are the legs; c is the hypotenuse.' },
        { step: 2, instruction: 'Substitute and square.', math: '6² + 8² = c²  →  36 + 64 = c²', explanation: 'Square each leg.' },
        { step: 3, instruction: 'Add and take the square root.', math: 'c² = 100  →  c = 10', explanation: '√100 = 10.' },
      ],
      finalAnswer: 'c = 10',
    },
    whyItWorks:
      'Stated simply, using similar triangles (connecting back to this chapter\'s theme): drop an ' +
      'altitude from the right angle to the hypotenuse, splitting the triangle into two smaller ' +
      'triangles, each similar to the original (by AA — they share an acute angle and both have a ' +
      'right angle). Writing the resulting similarity ratios and adding them together algebraically produces exactly a² + b² = c².',
    realLifeExample: {
      title: 'Checking a square corner in construction',
      scenario: 'Builders check that a wall meets the floor at a true right angle by measuring 3 units along one edge, 4 units along the other, and confirming the diagonal is exactly 5 units.',
      explanation: 'This "3-4-5 rule" is a direct, practical application of the Pythagorean theorem to verify a right angle without a protractor.',
    },
    practiceQuestions: [
      {
        id: 'pythagoras-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A right triangle has a leg of 5 and a hypotenuse of 13. Find the other leg.',
        hints: ['5² + b² = 13².', '169 − 25 = b².'],
        correctAnswer: 12,
        explanation: '5² + b² = 13² → 25 + b² = 169 → b² = 144 → b = 12.',
      },
    ],
    commonMistake:
      'Applying a² + b² = c² to a triangle that is not a right triangle — this theorem only holds ' +
      'for right triangles, and c must specifically be the side opposite the right angle.',
    quickReview: [
      'a² + b² = c², where c is the hypotenuse (opposite the right angle).',
      'Proof idea: an altitude to the hypotenuse creates two smaller similar triangles whose ratios combine into this result.',
      'Only applies to right triangles.',
    ],
  },

  'special-right-triangles': {
    slug: 'special-right-triangles',
    title: 'Special Right Triangles (45-45-90 and 30-60-90)',
    difficulty: 'medium',
    simpleExplanation:
      'Two right triangles have fixed, memorizable side ratios: a 45-45-90 triangle (an isosceles ' +
      'right triangle) has sides in the ratio x : x : x√2, and a 30-60-90 triangle has sides in the ratio x : x√3 : 2x.',
    whyItMatters:
      'Knowing these ratios lets you find every side of these specific, very common triangles from ' +
      'just one known length, instantly, without needing the Pythagorean theorem each time.',
    diagram: {
      id: 'special-right-triangle-diagram',
      title: 'A 45-45-90 right triangle',
      altText: 'An isosceles right triangle with two equal legs of length x and a hypotenuse of length x times the square root of 2',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 4, label: 'A', labelDx: -6, labelDy: 6 },
          { x: 0, y: 0, label: 'B', labelDx: -8, labelDy: -6 },
          { x: 4, y: 0, label: 'C', labelDx: 8, labelDy: -6 },
        ],
        segments: [
          { from: [0, 4], to: [0, 0], label: 'x' },
          { from: [0, 0], to: [4, 0], label: 'x' },
          { from: [4, 0], to: [0, 4], label: 'x√2' },
        ],
        angleMarks: [{ at: [0, 0], from: [0, 4], to: [4, 0], rightAngle: true }],
      },
    },
    formulaSlug: 'special-right-triangle-ratios',
    workedExample: {
      id: 'special-right-triangle-worked-1',
      title: 'Use the 30-60-90 ratio',
      problemStatement: 'A 30-60-90 triangle has its shortest side (opposite the 30° angle) equal to 5. Find the other two sides.',
      steps: [
        { step: 1, instruction: 'Identify x from the given shortest side.', math: 'x = 5', explanation: 'The shortest side always corresponds to x in the ratio x : x√3 : 2x.' },
        { step: 2, instruction: 'Find the longer leg.', math: 'x√3 = 5√3 ≈ 8.66', explanation: 'Multiply x by √3.' },
        { step: 3, instruction: 'Find the hypotenuse.', math: '2x = 10', explanation: 'Multiply x by 2.' },
      ],
      finalAnswer: 'Sides: 5, 5√3 ≈ 8.66, and 10',
    },
    whyItWorks:
      'For 45-45-90: the two legs are equal (isosceles), so if each leg is x, the Pythagorean ' +
      'theorem gives hypotenuse = √(x²+x²) = x√2. For 30-60-90: this triangle is exactly half of an ' +
      'equilateral triangle (cut along an altitude) — the equilateral side becomes the hypotenuse ' +
      '(2x), half its base becomes the short leg (x), and the altitude (found via the Pythagorean theorem) becomes the long leg, x√3.',
    realLifeExample: {
      title: 'Roof pitch and ramp angles',
      scenario: 'A roof truss or wheelchair ramp built at a standard 30° or 45° angle forms one of these special right triangles.',
      explanation: 'Builders use the fixed side ratios to instantly calculate material lengths for a given height or base, without recomputing the Pythagorean theorem for every job.',
    },
    practiceQuestions: [
      {
        id: 'special-right-triangle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 45-45-90 triangle has a leg of length 7. Find the hypotenuse. (Give as a decimal, 2 d.p.)',
        hints: ['Hypotenuse = x√2 = 7√2.'],
        correctAnswer: 9.90,
        tolerance: 0.02,
        explanation: '7√2 ≈ 9.90.',
      },
    ],
    commonMistake:
      'Mixing up which side gets multiplied by √3 in a 30-60-90 triangle — it is always the LONG ' +
      'leg (opposite the 60° angle) that equals x√3; the hypotenuse is simply 2x, with no square root involved.',
    quickReview: [
      '45-45-90: legs x, x; hypotenuse x√2.',
      '30-60-90: short leg x; long leg x√3; hypotenuse 2x.',
      'A 30-60-90 triangle is half of an equilateral triangle, split along its altitude.',
    ],
  },
};
