import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 9 — Circles. Matches sections 9.1-9.2 of
// the textbook exactly, including simply-stated proofs for the theorems
// the textbook gives.
export const chapter9Concepts: Record<string, Concept> = {
  'central-and-inscribed-angles': {
    slug: 'central-and-inscribed-angles',
    title: 'Central and Inscribed Angles',
    difficulty: 'medium',
    simpleExplanation:
      'A central angle has its vertex at the centre of the circle; an inscribed angle has its ' +
      'vertex on the circle itself. The Inscribed Angle Theorem states that when both angles look ' +
      'at (subtend) the exact same arc, the inscribed angle is always exactly half the central angle.',
    whyItMatters:
      'This relationship connects two very different-looking angles through the same arc — the ' +
      'foundation for almost every other circle-angle theorem in this chapter.',
    diagram: {
      id: 'central-inscribed-angle-diagram',
      title: 'A central angle and an inscribed angle subtending the same arc',
      altText: 'A circle with a central angle at O and an inscribed angle at C, both looking at the same arc AB, with the inscribed angle exactly half the central angle',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: 0, labelDy: -8 },
          { x: -4.33, y: 2.5, label: 'A', labelDx: -8, labelDy: 6 },
          { x: 4.33, y: 2.5, label: 'B', labelDx: 8, labelDy: 6 },
          { x: 0, y: -5, label: 'C', labelDx: 0, labelDy: -8 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [0, 0], to: [-4.33, 2.5] },
          { from: [0, 0], to: [4.33, 2.5] },
          { from: [0, -5], to: [-4.33, 2.5] },
          { from: [0, -5], to: [4.33, 2.5] },
        ],
        angleMarks: [
          { at: [0, 0], from: [-4.33, 2.5], to: [4.33, 2.5], label: '2θ', radius: 0.9 },
          { at: [0, -5], from: [-4.33, 2.5], to: [4.33, 2.5], label: 'θ', radius: 1.5 },
        ],
      },
    },
    formulaSlug: 'inscribed-angle-theorem',
    workedExample: {
      id: 'central-inscribed-worked-1',
      title: 'Find an inscribed angle from a central angle',
      problemStatement: 'A central angle subtending arc AB measures 80°. Find the inscribed angle at point C on the major arc, subtending the same arc AB.',
      steps: [
        { step: 1, instruction: 'Apply the inscribed angle theorem.', math: 'inscribed angle = (1/2) × central angle', explanation: 'Both angles subtend the same arc AB.' },
        { step: 2, instruction: 'Substitute the given central angle.', math: '(1/2) × 80°', explanation: 'Half of the central angle.' },
        { step: 3, instruction: 'Evaluate.', math: '= 40°', explanation: 'Divide 80 by 2.' },
      ],
      finalAnswer: '∠ACB = 40°',
    },
    whyItWorks:
      'Stated simply: draw the radius OC and extend it. In the resulting isosceles triangles (each ' +
      'formed by two radii), base angles are equal — using the exterior angle theorem (an exterior ' +
      'angle of a triangle equals the sum of the two remote interior angles) on each of these ' +
      'isosceles triangles shows that the central angle splits into two parts, each exactly double the corresponding part of the inscribed angle, giving central = 2 × inscribed overall.',
    realLifeExample: {
      title: 'Camera field-of-view geometry',
      scenario: 'Photographers and architects use circle geometry to reason about sightlines and viewing angles from different positions around a curved space.',
      explanation: 'The inscribed angle theorem explains why viewers at different points around a circular room see the same wall segment under a predictably related angle, depending on where the "central" reference point is.',
    },
    practiceQuestions: [
      {
        id: 'central-inscribed-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An inscribed angle measures 35°. Find the central angle subtending the same arc.',
        hints: ['central = 2 × inscribed.'],
        correctAnswer: 70,
        explanation: 'central angle = 2 × 35° = 70°.',
      },
    ],
    commonMistake:
      'Forgetting that both angles must subtend the exact same arc — an inscribed angle and a ' +
      'central angle looking at different arcs of the same circle have no such fixed relationship.',
    quickReview: [
      'Inscribed angle = (1/2) × central angle, when both subtend the same arc.',
      'Central angle: vertex at the centre. Inscribed angle: vertex on the circle.',
      'Proof idea: uses the exterior angle theorem on isosceles triangles formed by radii.',
    ],
  },

  'angle-in-a-semicircle': {
    slug: 'angle-in-a-semicircle',
    title: 'Angle in a Semicircle',
    difficulty: 'medium',
    simpleExplanation:
      'Any angle inscribed in a semicircle — with its vertex on the circle and the two chords ' +
      'reaching to the ends of a diameter — is always exactly 90°.',
    whyItMatters:
      'This is a fast, reliable way to construct or check a right angle using only a circle and a ' +
      'straightedge, and it comes up constantly in circle-geometry proofs.',
    diagram: {
      id: 'angle-in-semicircle-diagram',
      title: 'An angle inscribed in a semicircle is always 90°',
      altText: 'A circle with a diameter AB and a point C on the circle, forming a right angle at C',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -5, y: 0, label: 'A', labelDx: -8, labelDy: 0 },
          { x: 5, y: 0, label: 'B', labelDx: 8, labelDy: 0 },
          { x: 2.5, y: 4.33, label: 'C', labelDx: 6, labelDy: 6 },
          { x: 0, y: 0, label: 'O', labelDx: 0, labelDy: -10 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [-5, 0], to: [5, 0], dashed: true },
          { from: [-5, 0], to: [2.5, 4.33] },
          { from: [2.5, 4.33], to: [5, 0] },
        ],
        angleMarks: [{ at: [2.5, 4.33], from: [-5, 0], to: [5, 0], rightAngle: true }],
      },
    },
    formulaSlug: 'inscribed-angle-theorem',
    workedExample: {
      id: 'semicircle-angle-worked-1',
      title: 'Use the semicircle angle to find a missing angle',
      problemStatement: 'In a semicircle, ∠ACB = 90° with C on the circle. If ∠CAB = 35°, find ∠CBA.',
      steps: [
        { step: 1, instruction: 'Recall the semicircle rule.', math: '∠ACB = 90°', explanation: 'C is on the circle, AB is a diameter.' },
        { step: 2, instruction: 'Use the triangle angle sum.', math: '∠CAB + ∠CBA + ∠ACB = 180°', explanation: 'Angles in any triangle sum to 180°.' },
        { step: 3, instruction: 'Solve for the missing angle.', math: '35° + ∠CBA + 90° = 180°  →  ∠CBA = 55°', explanation: 'Subtract the two known angles from 180°.' },
      ],
      finalAnswer: '∠CBA = 55°',
    },
    whyItWorks:
      'This is a direct corollary of the inscribed angle theorem: a diameter is itself an arc of ' +
      '180° as seen from the centre (a straight line through it), so the central angle for that arc ' +
      'is 180° — making the inscribed angle exactly half of that, 90°, no matter where C sits on the semicircle.',
    realLifeExample: {
      title: 'Thales\' theorem in carpentry',
      scenario: 'A carpenter needs to find a point that forms a perfect right angle relative to two fixed points (the ends of a beam).',
      explanation: 'Drawing a circle with the beam as diameter guarantees any point marked on that circle forms a 90° angle with the beam\'s ends — a practical use of the semicircle angle rule.',
    },
    practiceQuestions: [
      {
        id: 'semicircle-angle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In a semicircle with diameter AB, C is on the circle. If ∠ABC = 62°, find ∠BAC.',
        hints: ['∠ACB = 90°.', 'Angles in a triangle sum to 180°.'],
        correctAnswer: 28,
        explanation: '180 − 90 − 62 = 28°.',
      },
    ],
    commonMistake:
      'Applying the 90° rule to any triangle inscribed in a circle — it only holds when one side of ' +
      'the triangle is specifically a diameter, not for an arbitrary chord.',
    quickReview: [
      'Any angle inscribed in a semicircle (subtending a diameter) is exactly 90°.',
      'This is the special case of the inscribed angle theorem where the central angle is 180°.',
      'A fast way to construct or verify a right angle using a circle.',
    ],
  },

  'cyclic-quadrilateral-angles': {
    slug: 'cyclic-quadrilateral-angles',
    title: 'Angles of a Cyclic Quadrilateral',
    difficulty: 'hard',
    simpleExplanation:
      'A cyclic quadrilateral is a four-sided figure whose vertices all lie on a single circle. In ' +
      'any cyclic quadrilateral, each pair of opposite angles adds up to exactly 180° (they are supplementary).',
    whyItMatters:
      'This lets you find a missing angle in a cyclic quadrilateral instantly from its opposite ' +
      'angle, without any further measurement.',
    diagram: {
      id: 'cyclic-quadrilateral-diagram',
      title: 'A cyclic quadrilateral, with opposite angles summing to 180°',
      altText: 'A four-sided figure ABCD inscribed in a circle, with opposite angles at B and D marked',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 4.7, y: 1.71, label: 'A', labelDx: 8, labelDy: 4 },
          { x: -0.87, y: 4.92, label: 'B', labelDx: 0, labelDy: 8 },
          { x: -4.92, y: -0.87, label: 'C', labelDx: -8, labelDy: -4 },
          { x: 1.71, y: -4.7, label: 'D', labelDx: 4, labelDy: -8 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [4.7, 1.71], to: [-0.87, 4.92] },
          { from: [-0.87, 4.92], to: [-4.92, -0.87] },
          { from: [-4.92, -0.87], to: [1.71, -4.7] },
          { from: [1.71, -4.7], to: [4.7, 1.71] },
        ],
        angleMarks: [
          { at: [-0.87, 4.92], from: [4.7, 1.71], to: [-4.92, -0.87], label: 'β', radius: 1.2 },
          { at: [1.71, -4.7], from: [-4.92, -0.87], to: [4.7, 1.71], label: 'δ', radius: 1.2 },
        ],
      },
    },
    formulaSlug: 'cyclic-quadrilateral-angle-sum',
    workedExample: {
      id: 'cyclic-quad-worked-1',
      title: 'Find a missing angle in a cyclic quadrilateral',
      problemStatement: 'In cyclic quadrilateral ABCD, ∠A = 105°. Find ∠C.',
      steps: [
        { step: 1, instruction: 'Recall which angles are opposite.', math: '∠A and ∠C are opposite', explanation: 'In quadrilateral ABCD, A and C sit diagonally across from each other.' },
        { step: 2, instruction: 'Apply the cyclic quadrilateral rule.', math: '∠A + ∠C = 180°', explanation: 'Opposite angles of a cyclic quadrilateral are supplementary.' },
        { step: 3, instruction: 'Solve for ∠C.', math: '105° + ∠C = 180°  →  ∠C = 75°', explanation: 'Subtract 105° from 180°.' },
      ],
      finalAnswer: '∠C = 75°',
    },
    whyItWorks:
      'Stated simply: draw the two diagonals from the centre O to each vertex (or use the ' +
      'inscribed angle theorem directly). Angle B is an inscribed angle subtending the arc ADC ' +
      '(the arc NOT containing B), and angle D is an inscribed angle subtending the arc ABC (the ' +
      'arc not containing D) — together, these two arcs make up the entire circle, 360°. Since each ' +
      'inscribed angle is half its arc, ∠B + ∠D = (1/2)(arc ADC + arc ABC) = (1/2)(360°) = 180°.',
    realLifeExample: {
      title: 'Designing four-sided structures around a circular plaza',
      scenario: 'An architect designs a four-cornered walkway with all four corner posts placed on the boundary of a circular plaza.',
      explanation: 'Knowing the cyclic quadrilateral angle rule, the architect can verify or design the corner angles so opposite corners always sum to exactly 180°.',
    },
    practiceQuestions: [
      {
        id: 'cyclic-quad-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In cyclic quadrilateral PQRS, ∠Q = 98°. Find ∠S.',
        hints: ['∠Q and ∠S are opposite angles.'],
        correctAnswer: 82,
        explanation: '180 − 98 = 82°.',
      },
    ],
    commonMistake:
      'Adding adjacent angles instead of opposite angles — the 180° rule applies specifically to ' +
      'opposite pairs (A&C, B&D), not to angles that share a side.',
    quickReview: [
      'Opposite angles of a cyclic quadrilateral sum to 180°: ∠A+∠C=180°, ∠B+∠D=180°.',
      'Proof idea: opposite angles are inscribed angles subtending arcs that together make the whole circle (360°).',
      'Only applies when all four vertices lie on the same circle.',
    ],
  },

  'equal-chords-and-equal-arcs': {
    slug: 'equal-chords-and-equal-arcs',
    title: 'Equal Chords and Equal Arcs',
    difficulty: 'medium',
    simpleExplanation:
      'In the same circle (or in circles of equal radius), equal chords are always the same ' +
      'distance from the centre, and they always cut off equal arcs. Any one of "equal chords," ' +
      '"equal distance from centre," or "equal arcs" implies the other two.',
    whyItMatters:
      'This three-way link between chord length, distance from centre, and arc size is a recurring ' +
      'tool for proving other circle facts and for solving chord-length problems.',
    diagram: {
      id: 'equal-chords-diagram',
      title: 'Two equal chords, equidistant from the centre',
      altText: 'A circle with two chords of equal length, one horizontal and one vertical, both the same distance from the centre',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -4, y: 3, label: 'A', labelDx: -8, labelDy: 4 },
          { x: 4, y: 3, label: 'B', labelDx: 8, labelDy: 4 },
          { x: -3, y: 4, label: 'C', labelDx: -8, labelDy: 6 },
          { x: -3, y: -4, label: 'D', labelDx: -8, labelDy: -6 },
          { x: 0, y: 0, label: 'O', labelDx: 6, labelDy: 0 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [-4, 3], to: [4, 3], label: 'chord AB' },
          { from: [-3, 4], to: [-3, -4], label: 'chord CD' },
        ],
      },
    },
    formulaSlug: 'equal-chords-equal-distance-theorem',
    workedExample: {
      id: 'equal-chords-worked-1',
      title: 'Use equal chords to find an arc',
      problemStatement: 'In a circle, chord AB = chord CD, and arc AB = 74°. Find arc CD.',
      steps: [
        { step: 1, instruction: 'Recall the equal chords rule.', explanation: 'Equal chords always cut off equal arcs, in the same circle.' },
        { step: 2, instruction: 'Apply it directly.', math: 'arc CD = arc AB = 74°', explanation: 'Since chord AB = chord CD.' },
      ],
      finalAnswer: 'arc CD = 74°',
    },
    whyItWorks:
      'Stated simply: draw radii to the four chord endpoints. The two triangles formed (each with ' +
      'two radii and a chord) are congruent by SSS (equal radii, equal chords) — so their central ' +
      'angles are equal, which means the corresponding arcs are equal, and the perpendicular ' +
      'distances from the centre (heights of these congruent triangles) are equal too.',
    realLifeExample: {
      title: 'Designing a circular gear with evenly matched teeth',
      scenario: 'An engineer designs slots around a circular gear so that certain groups of slots are the same size and placed the same distance from the centre.',
      explanation: 'Confirming the chords (slot openings) are equal automatically confirms the arcs (spacing) and centre-distances match too — the same three-way equivalence used in circle geometry.',
    },
    practiceQuestions: [
      {
        id: 'equal-chords-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Chord PQ is 8 cm from the centre, and chord RS is also 8 cm from the centre of the same circle. What can you conclude?',
        options: [
          { id: 'a', text: 'PQ = RS' },
          { id: 'b', text: 'PQ is twice as long as RS' },
          { id: 'c', text: 'PQ and RS must be parallel' },
          { id: 'd', text: 'Nothing can be concluded' },
        ],
        correctOptionId: 'a',
        hints: ['Equal distance from the centre implies equal chord length.'],
        explanation: 'Equal distance from the centre (in the same circle) always means equal chord length.',
      },
    ],
    commonMistake:
      'Assuming this three-way rule applies across circles of different sizes — it only holds ' +
      'within the same circle, or between circles that have exactly the same radius.',
    quickReview: [
      'Equal chords ⇔ equal distance from centre ⇔ equal arcs (same circle, or equal circles).',
      'Proof idea: congruent triangles (SSS, using two radii and the chord) formed for each chord.',
      'Any one of the three conditions guarantees the other two.',
    ],
  },

  'perpendicular-from-centre-to-a-chord': {
    slug: 'perpendicular-from-centre-to-a-chord',
    title: 'The Perpendicular from the Centre to a Chord',
    difficulty: 'medium',
    simpleExplanation:
      'If a perpendicular line is drawn from a circle\'s centre to a chord, it always bisects that ' +
      'chord — cutting it into two exactly equal halves.',
    whyItMatters:
      'This theorem is the standard tool for finding a chord\'s length (or the distance from the ' +
      'centre) using the Pythagorean theorem, by turning the situation into a right triangle with known radius.',
    diagram: {
      id: 'perpendicular-chord-diagram',
      title: 'The perpendicular from O bisects chord AB at M',
      altText: 'A circle with centre O, a chord AB, and a perpendicular segment from O meeting the chord at its midpoint M',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -4, y: 3, label: 'A', labelDx: -8, labelDy: 4 },
          { x: 4, y: 3, label: 'B', labelDx: 8, labelDy: 4 },
          { x: 0, y: 3, label: 'M', labelDx: 0, labelDy: 8 },
          { x: 0, y: 0, label: 'O', labelDx: 8, labelDy: -4 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [-4, 3], to: [4, 3] },
          { from: [0, 0], to: [0, 3], dashed: true },
          { from: [0, 0], to: [-4, 3] },
        ],
        angleMarks: [{ at: [0, 3], from: [0, 0], to: [-4, 3], rightAngle: true }],
      },
    },
    formulaSlug: 'perpendicular-bisector-of-chord',
    workedExample: {
      id: 'perpendicular-chord-worked-1',
      title: 'Find a chord\'s length using the perpendicular distance',
      problemStatement: 'A circle has radius 13. A chord is 5 units from the centre. Find the chord\'s length.',
      steps: [
        { step: 1, instruction: 'Draw the perpendicular from O to the chord, meeting it at M.', explanation: 'OM = 5 (the given distance), and OM bisects the chord.' },
        { step: 2, instruction: 'Use the right triangle OMA, where A is one chord endpoint.', math: 'OA = 13 (radius),  OM = 5', explanation: 'OA is the hypotenuse of right triangle OMA.' },
        { step: 3, instruction: 'Apply the Pythagorean theorem to find MA.', math: 'MA² = 13² − 5² = 169 − 25 = 144  →  MA = 12', explanation: 'Solve for the missing leg.' },
        { step: 4, instruction: 'Double MA to get the full chord.', math: 'chord = 2 × 12 = 24', explanation: 'M is the midpoint, so the full chord is twice MA.' },
      ],
      finalAnswer: 'Chord length = 24',
    },
    whyItWorks:
      'Stated simply: OA and OB are both radii, so OA = OB. Triangles OMA and OMB share the side ' +
      'OM and have equal hypotenuses (OA = OB) and both contain a right angle at M — this makes them ' +
      'congruent (RHS: right angle, hypotenuse, shared side), so AM = MB, meaning M truly bisects the chord.',
    realLifeExample: {
      title: 'Finding the width of a circular tunnel opening',
      scenario: 'An engineer measures the distance from a circular tunnel\'s centre to a straight support beam (a chord of the circular cross-section) and needs the beam\'s full length.',
      explanation: 'Using the known radius and the perpendicular distance, the same right-triangle method as this theorem instantly gives the beam\'s exact length.',
    },
    practiceQuestions: [
      {
        id: 'perpendicular-chord-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A circle has radius 10. A chord is 6 units from the centre. Find the chord\'s length.',
        hints: ['Half-chord² = 10² − 6².', 'Double the result.'],
        correctAnswer: 16,
        explanation: '√(100−36) = √64 = 8. Full chord = 2×8 = 16.',
      },
    ],
    commonMistake:
      'Forgetting to double the half-chord length found from the right triangle — the Pythagorean ' +
      'theorem step only finds HALF the chord (from the centre-foot M to one endpoint); the full chord is twice that.',
    quickReview: [
      'A perpendicular from the centre to a chord always bisects the chord.',
      'Proof idea: congruent right triangles (RHS), using two equal radii.',
      'Sets up a right triangle: radius² = (distance from centre)² + (half-chord)².',
    ],
  },

  'the-intersecting-chords-theorem': {
    slug: 'the-intersecting-chords-theorem',
    title: 'The Intersecting Chords Theorem',
    difficulty: 'hard',
    simpleExplanation:
      'When two chords of a circle intersect inside the circle at a point P, the two chords are ' +
      'each split into two segments — and the product of one chord\'s two segments always equals the product of the other chord\'s two segments: PA × PC = PB × PD.',
    whyItMatters:
      'This theorem lets you find an unknown chord segment length whenever two chords cross, ' +
      'without needing any angle information at all.',
    diagram: {
      id: 'intersecting-chords-diagram',
      title: 'Two chords intersecting inside a circle at P',
      altText: 'A circle with two chords, AC and BD, crossing at an interior point P',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -5, y: 0, label: 'A', labelDx: -8, labelDy: 0 },
          { x: -4, y: 3, label: 'B', labelDx: -8, labelDy: 4 },
          { x: 4, y: 3, label: 'C', labelDx: 8, labelDy: 4 },
          { x: 3, y: -4, label: 'D', labelDx: 6, labelDy: -6 },
          { x: -2, y: 1, label: 'P', labelDx: 8, labelDy: 4 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [-5, 0], to: [4, 3] },
          { from: [-4, 3], to: [3, -4] },
        ],
      },
    },
    formulaSlug: 'intersecting-chords-theorem',
    workedExample: {
      id: 'intersecting-chords-worked-1',
      title: 'Find a missing chord segment',
      problemStatement: 'Chords AC and BD intersect at P inside a circle. PA=6, PC=8, PB=4. Find PD.',
      steps: [
        { step: 1, instruction: 'Apply the intersecting chords theorem.', math: 'PA × PC = PB × PD', explanation: 'The products of each chord\'s two segments are equal.' },
        { step: 2, instruction: 'Substitute the known values.', math: '6 × 8 = 4 × PD', explanation: 'Fill in PA, PC, and PB.' },
        { step: 3, instruction: 'Solve for PD.', math: '48 = 4 × PD  →  PD = 12', explanation: 'Divide both sides by 4.' },
      ],
      finalAnswer: 'PD = 12',
    },
    whyItWorks:
      'Stated simply: triangles PAB and PDC are similar. ∠APB = ∠DPC (vertical angles), and ' +
      '∠PAB = ∠PDC (both are inscribed angles subtending the same arc BC) — giving AA similarity. ' +
      'Similar triangles have proportional sides: PA/PD = PB/PC, which rearranges by cross-multiplication into exactly PA × PC = PB × PD.',
    realLifeExample: {
      title: 'Locating a point inside a circular arena',
      scenario: 'Two straight sightlines across a circular stadium floor cross at an interior point, and the distances to some of the four endpoints are already known.',
      explanation: 'The intersecting chords theorem lets an engineer or event planner find the one remaining unknown distance using only simple multiplication.',
    },
    practiceQuestions: [
      {
        id: 'intersecting-chords-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Chords intersect at P. PA=5, PC=9, PD=15. Find PB.',
        hints: ['PA × PC = PB × PD.', '5×9 = PB×15.'],
        correctAnswer: 3,
        explanation: '45 = PB × 15 → PB = 3.',
      },
    ],
    commonMistake:
      'Adding the segment lengths instead of multiplying them — the theorem is specifically about ' +
      'the PRODUCT of each chord\'s two segments, not their sum.',
    quickReview: [
      'PA × PC = PB × PD, for chords AC and BD meeting at interior point P.',
      'Proof idea: △PAB ~ △PDC by AA (vertical angles + equal inscribed angles on the same arc).',
      'Only applies when the chords intersect INSIDE the circle.',
    ],
  },
};
