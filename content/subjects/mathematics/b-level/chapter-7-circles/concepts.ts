import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 7 — Circles (an advanced extension of
// Math A-Level's circle geometry). Matches sections 7.1-7.2 of the
// textbook exactly, including simply-stated proofs.
export const chapter7BConcepts: Record<string, Concept> = {
  'the-tangent-radius-perpendicularity-theorem': {
    slug: 'the-tangent-radius-perpendicularity-theorem',
    title: 'The Tangent-Radius Perpendicularity Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'A tangent line touches a circle at exactly one point. At that point of tangency, the tangent ' +
      'line is always exactly perpendicular (at a right angle) to the radius drawn to that same point.',
    whyItMatters:
      'This is the single most useful fact about tangents — it instantly creates a right angle ' +
      'wherever a tangent meets a radius, unlocking the Pythagorean theorem and trigonometry for tangent-related problems.',
    diagram: {
      id: 'tangent-radius-diagram',
      title: 'A tangent line, perpendicular to the radius at T',
      altText: 'A circle with centre O, a radius to point T, and a tangent line through T meeting the radius at a right angle',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 4.33, y: 2.5, label: 'T', labelDx: 8, labelDy: 4 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [0, 0], to: [4.33, 2.5] },
          { from: [2.33, 5.96], to: [6.33, -0.96] },
        ],
        angleMarks: [{ at: [4.33, 2.5], from: [0, 0], to: [6.33, -0.96], rightAngle: true }],
      },
    },
    formulaSlug: 'tangent-radius-perpendicularity',
    workedExample: {
      id: 'tangent-radius-worked-1',
      title: 'Use tangent-radius perpendicularity to find a length',
      problemStatement: 'A circle has centre O and radius 6. A tangent from external point P touches the circle at T, with OP = 10. Find PT.',
      steps: [
        { step: 1, instruction: 'Recognize the right angle at T.', explanation: 'OT ⊥ PT, by the tangent-radius theorem.' },
        { step: 2, instruction: 'Apply the Pythagorean theorem to right triangle OTP.', math: 'OT² + PT² = OP²', explanation: 'OT and PT are the legs; OP is the hypotenuse.' },
        { step: 3, instruction: 'Substitute known values.', math: '6² + PT² = 10²  →  36 + PT² = 100', explanation: 'OT=6 (radius), OP=10.' },
        { step: 4, instruction: 'Solve for PT.', math: 'PT² = 64  →  PT = 8', explanation: 'Take the square root.' },
      ],
      finalAnswer: 'PT = 8',
    },
    whyItWorks:
      'Stated simply: suppose the tangent line met the radius OT at some angle other than 90°. Then ' +
      'the shortest distance from O to the tangent line would be shorter than OT — but the tangent ' +
      'line only touches the circle at the single point T, and every OTHER point on the tangent line ' +
      'must be OUTSIDE the circle (farther from O than the radius). The only way OT can be the ' +
      'shortest possible distance from O to the line is if OT meets the line at exactly a right angle.',
    realLifeExample: {
      title: 'Designing a satellite dish support strut',
      scenario: 'An engineer needs a support strut that touches a circular dish at exactly one point, meeting it as cleanly (perpendicular to the dish\'s radius) as possible.',
      explanation: 'Tangent-radius perpendicularity is exactly the geometric principle behind designing such a clean, single-point-of-contact strut.',
    },
    practiceQuestions: [
      {
        id: 'tangent-radius-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A circle has radius 5. A tangent from external point P touches the circle at T, with PT = 12. Find OP.',
        hints: ['OT² + PT² = OP².', '5² + 12² = OP².'],
        correctAnswer: 13,
        explanation: '25 + 144 = 169, √169 = 13.',
      },
    ],
    commonMistake:
      'Assuming any line touching a circle at one point is automatically a tangent — a line could ' +
      'cross through a curved section at a single point without being perpendicular to the radius there; the perpendicularity is what specifically defines a true tangent.',
    quickReview: [
      'A tangent is always perpendicular to the radius at the point of tangency.',
      'This right angle unlocks the Pythagorean theorem for tangent-length problems.',
      'Proof idea: any other angle would place points of the tangent line inside the circle, contradicting "touches at one point only."',
    ],
  },

  'the-two-tangent-theorem': {
    slug: 'the-two-tangent-theorem',
    title: 'The Two-Tangent Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'From any point outside a circle, exactly two tangent lines can be drawn to the circle, and ' +
      'their two tangent segments — from the external point to each point of tangency — are always exactly equal in length.',
    whyItMatters:
      'This symmetry is a genuinely useful shortcut, instantly giving you a second known length ' +
      'whenever you find one tangent length from an external point.',
    diagram: {
      id: 'two-tangent-diagram',
      title: 'Two equal tangents from external point P',
      altText: 'A circle with centre O, an external point P, and two tangent segments from P touching the circle at A and B, of equal length',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: 0 },
          { x: 9, y: 0, label: 'P', labelDx: 8, labelDy: 0 },
          { x: 1.75, y: 3.6, label: 'A', labelDx: -4, labelDy: 8 },
          { x: 1.75, y: -3.6, label: 'B', labelDx: -4, labelDy: -8 },
        ],
        circles: [{ cx: 0, cy: 0, r: 4 }],
        segments: [
          { from: [9, 0], to: [1.75, 3.6], label: 'PA' },
          { from: [9, 0], to: [1.75, -3.6], label: 'PB' },
          { from: [0, 0], to: [1.75, 3.6], dashed: true },
          { from: [0, 0], to: [1.75, -3.6], dashed: true },
        ],
      },
    },
    formulaSlug: 'two-tangent-lengths-equal',
    workedExample: {
      id: 'two-tangent-worked-1',
      title: 'Use the two-tangent theorem',
      problemStatement: 'Two tangents are drawn from external point P to a circle, touching it at A and B. If PA = 14, find PB.',
      steps: [
        { step: 1, instruction: 'Apply the two-tangent theorem.', math: 'PA = PB', explanation: 'Both tangents from the same external point are equal.' },
        { step: 2, instruction: 'Substitute the known value.', math: 'PB = 14', explanation: 'PB equals PA directly.' },
      ],
      finalAnswer: 'PB = 14',
    },
    whyItWorks:
      'Stated simply: triangles OAP and OBP are congruent by RHS (right angle at A and B from the ' +
      'tangent-radius theorem, equal hypotenuse OP shared by both, and equal radii OA=OB) — ' +
      'congruent triangles have all corresponding sides equal, so PA must equal PB.',
    realLifeExample: {
      title: 'Symmetric belt tension around a pulley',
      scenario: 'A belt or cable is pulled taut from a single anchor point to two tangent contact points on a circular pulley.',
      explanation: 'The two-tangent theorem guarantees both straight sections of belt from the anchor to the pulley are exactly the same length, a useful design certainty.',
    },
    practiceQuestions: [
      {
        id: 'two-tangent-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two tangents from external point Q touch a circle at C and D. If QC = 3x+2 and QD = 5x−6, find x. (Using PA=PB.)',
        hints: ['3x+2 = 5x−6.'],
        correctAnswer: 4,
        explanation: '3x+2=5x−6 → 8=2x → x=4.',
      },
    ],
    commonMistake:
      'Applying the two-tangent theorem to tangents drawn from two DIFFERENT external points — the ' +
      'equal-length guarantee only applies to two tangents sharing the exact same external point.',
    quickReview: [
      'PA = PB, for tangents from the same external point P.',
      'Proof idea: congruent right triangles (RHS), using two equal radii and a shared hypotenuse.',
      'A quick way to find a second tangent length once one is known.',
    ],
  },

  'the-tangent-chord-angle-theorem': {
    slug: 'the-tangent-chord-angle-theorem',
    title: 'The Tangent-Chord Angle Theorem',
    difficulty: 'hard',
    simpleExplanation:
      'Also called the Alternate Segment Theorem: the angle between a tangent line and a chord drawn ' +
      'from the point of tangency always equals the inscribed angle that same chord makes in the ' +
      '"alternate segment" — the arc on the opposite side of the chord.',
    whyItMatters:
      'This surprising equality connects an angle at the circle\'s edge (tangent-chord) to an angle ' +
      'deep inside the circle (inscribed) — a powerful tool for finding otherwise hard-to-reach angles.',
    diagram: {
      id: 'tangent-chord-diagram',
      title: 'The tangent-chord angle equals the inscribed angle in the alternate segment',
      altText: 'A circle with a tangent line at T, a chord TC, and the tangent-chord angle at T matching the inscribed angle at a point D on the far arc',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 4.33, y: -2.5, label: 'T', labelDx: 8, labelDy: -6 },
          { x: -4.33, y: 2.5, label: 'C', labelDx: -8, labelDy: 6 },
          { x: 0, y: 5, label: 'D', labelDx: 0, labelDy: 10 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [4.33, -2.5], to: [-4.33, 2.5] },
          { from: [2.33, -5.96], to: [6.33, 0.96] },
          { from: [0, 5], to: [4.33, -2.5], dashed: true },
          { from: [0, 5], to: [-4.33, 2.5], dashed: true },
        ],
        angleMarks: [
          { at: [4.33, -2.5], from: [6.33, 0.96], to: [-4.33, 2.5], label: 'θ', radius: 1.2 },
          { at: [0, 5], from: [4.33, -2.5], to: [-4.33, 2.5], label: 'θ', radius: 1.5 },
        ],
      },
    },
    formulaSlug: 'tangent-chord-angle-theorem',
    workedExample: {
      id: 'tangent-chord-worked-1',
      title: 'Apply the tangent-chord angle theorem',
      problemStatement: 'A tangent meets a chord at a point of tangency, forming a tangent-chord angle of 65°. Find the inscribed angle in the alternate segment.',
      steps: [
        { step: 1, instruction: 'Apply the theorem directly.', explanation: 'The tangent-chord angle equals the inscribed angle in the alternate segment.' },
        { step: 2, instruction: 'State the result.', math: 'Inscribed angle = 65°', explanation: 'The two angles are equal, by the theorem.' },
      ],
      finalAnswer: 'The inscribed angle in the alternate segment is 65°',
    },
    whyItWorks:
      'Stated simply: let the tangent-chord angle at T be θ, and draw the diameter from T. Since a ' +
      'tangent is perpendicular to the radius (and hence the diameter) at T, the angle between the ' +
      'chord and that diameter is 90°−θ. The angle in the semicircle formed is 90° (angle in a ' +
      'semicircle), so the remaining angle of that right triangle is θ — and this angle turns out to ' +
      'be an inscribed angle subtending the same chord as the alternate segment\'s inscribed angle, so by the inscribed angle theorem, they must be equal.',
    realLifeExample: {
      title: 'Billiard ball rebound angles',
      scenario: 'A ball rolling along a curved cushion at the exact point where a straight cushion meets it tangentially reflects at a predictable angle related to the curve.',
      explanation: 'Understanding tangent-chord relationships helps predict and analyze such rebound angles in curved-boundary physics and engineering problems.',
    },
    practiceQuestions: [
      {
        id: 'tangent-chord-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A tangent-chord angle measures 48°. Find the inscribed angle in the alternate segment.',
        hints: ['They are equal by the theorem.'],
        correctAnswer: 48,
        explanation: 'The tangent-chord angle always equals the inscribed angle in the alternate segment: 48°.',
      },
    ],
    commonMistake:
      'Matching the tangent-chord angle to the inscribed angle in the SAME segment (the near arc) ' +
      'instead of the alternate (opposite) segment — the equality specifically holds with the far, alternate segment.',
    quickReview: [
      'Tangent-chord angle = inscribed angle in the alternate (opposite) segment.',
      'Also called the Alternate Segment Theorem.',
      'Proof idea: uses the angle-in-a-semicircle theorem via the diameter from the point of tangency.',
    ],
  },

  'meaning-and-conditions-for-concyclic-points': {
    slug: 'meaning-and-conditions-for-concyclic-points',
    title: 'Meaning and Conditions for Concyclic Points',
    difficulty: 'medium',
    simpleExplanation:
      'Points are concyclic if they all lie on one common circle. A useful test: if two points, C ' +
      'and D, on the SAME side of a segment AB, both see AB under the exact same angle (∠ACB = ∠ADB), ' +
      'then A, B, C, and D must all be concyclic.',
    whyItMatters:
      'This gives a purely angle-based way to test whether four points lie on a circle, without ' +
      'needing to know the circle\'s centre or radius at all.',
    diagram: {
      id: 'concyclic-points-diagram',
      title: 'Equal angles from C and D subtending the same chord AB',
      altText: 'A circle with four points A, B, C, D, where the angles at C and D subtending chord AB are equal, confirming they are concyclic',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -4.7, y: -1.71, label: 'A', labelDx: -8, labelDy: -6 },
          { x: 4.7, y: -1.71, label: 'B', labelDx: 8, labelDy: -6 },
          { x: 2.5, y: 4.33, label: 'C', labelDx: 8, labelDy: 4 },
          { x: -2.5, y: 4.33, label: 'D', labelDx: -8, labelDy: 4 },
        ],
        circles: [{ cx: 0, cy: 0, r: 5 }],
        segments: [
          { from: [-4.7, -1.71], to: [4.7, -1.71] },
          { from: [-4.7, -1.71], to: [2.5, 4.33] },
          { from: [4.7, -1.71], to: [2.5, 4.33] },
          { from: [-4.7, -1.71], to: [-2.5, 4.33] },
          { from: [4.7, -1.71], to: [-2.5, 4.33] },
        ],
        angleMarks: [
          { at: [2.5, 4.33], from: [-4.7, -1.71], to: [4.7, -1.71], label: 'θ', radius: 1.1 },
          { at: [-2.5, 4.33], from: [-4.7, -1.71], to: [4.7, -1.71], label: 'θ', radius: 1.1 },
        ],
      },
    },
    formulaSlug: 'concyclic-points-condition',
    workedExample: {
      id: 'concyclic-meaning-worked-1',
      title: 'Decide whether points are concyclic',
      problemStatement: 'Points C and D lie on the same side of segment AB. ∠ACB = 72° and ∠ADB = 72°. Are A, B, C, D concyclic?',
      steps: [
        { step: 1, instruction: 'Compare the two angles.', math: '∠ACB = ∠ADB = 72°', explanation: 'Both angles subtend AB from the same side, and are equal.' },
        { step: 2, instruction: 'Apply the concyclic points condition.', explanation: 'Equal angles subtending the same segment, from the same side, means concyclic.' },
      ],
      finalAnswer: 'Yes, A, B, C, D are concyclic.',
    },
    whyItWorks:
      'This is the converse of the inscribed angle theorem: if C and D both see AB at the same angle, ' +
      'then C and D must lie on the SAME arc of the unique circle through A, B, and C — because any ' +
      'point on that arc, by the inscribed angle theorem, sees AB at exactly that one specific angle, ' +
      'and moving to a different arc or a different circle entirely would change that angle.',
    realLifeExample: {
      title: 'Confirming survey points lie on a circular boundary',
      scenario: 'A land surveyor has marked several boundary points and wants to confirm they truly lie along a single circular arc, without direct access to the centre.',
      explanation: 'Measuring angles from pairs of points to a shared baseline and checking for equality is a practical, centre-free way to confirm concyclic points, exactly as in this theorem.',
    },
    practiceQuestions: [
      {
        id: 'concyclic-meaning-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Points E and F are on the same side of segment GH. ∠GEH = 55° and ∠GFH = 60°. Are G, H, E, F concyclic?',
        options: [
          { id: 'a', text: 'No, since the angles are not equal' },
          { id: 'b', text: 'Yes, since both angles are acute' },
          { id: 'c', text: 'Yes, since E and F are on the same side' },
          { id: 'd', text: 'Cannot be determined' },
        ],
        correctOptionId: 'a',
        hints: ['The concyclic test specifically requires the angles to be EQUAL.'],
        explanation: '55° ≠ 60°, so the equal-angle condition fails — the four points are not (necessarily) concyclic.',
      },
    ],
    commonMistake:
      'Forgetting the "same side" requirement — if C and D are on OPPOSITE sides of AB, equal angles ' +
      'do not by themselves guarantee concyclic points in the same simple way (that\'s actually the cyclic quadrilateral supplementary-angle case instead).',
    quickReview: [
      'Concyclic points all lie on one common circle.',
      'Equal angles subtending the same segment, from the same side, ⇒ concyclic (converse of the inscribed angle theorem).',
      'A purely angle-based test — no need to know the circle\'s centre.',
    ],
  },

  'proving-four-points-are-concyclic': {
    slug: 'proving-four-points-are-concyclic',
    title: 'Proving Four Points Are Concyclic',
    difficulty: 'hard',
    simpleExplanation:
      'To formally prove four points are concyclic, identify a shared segment, compute (or use given ' +
      'information to find) the two relevant angles subtending it from the other two points, and show they are equal (or, for a quadrilateral, that opposite angles sum to 180°).',
    whyItMatters:
      'This combines the concyclic point conditions into a complete, exam-ready proof technique — ' +
      'showing not just recognizing the pattern, but constructing a rigorous argument.',
    formulaSlug: 'concyclic-points-condition',
    workedExample: {
      id: 'proving-concyclic-worked-1',
      title: 'Prove four points are concyclic using angle calculation',
      problemStatement: 'In quadrilateral WXYZ, ∠W = 110° and ∠Y = 70°. Prove W, X, Y, Z are concyclic.',
      steps: [
        { step: 1, instruction: 'Recall the cyclic quadrilateral condition.', explanation: 'A quadrilateral is cyclic (its four vertices concyclic) if opposite angles sum to 180°.' },
        { step: 2, instruction: 'Check whether ∠W and ∠Y (opposite angles) sum to 180°.', math: '110° + 70° = 180°', explanation: 'Add the two opposite angles.' },
        { step: 3, instruction: 'Conclude.', explanation: 'Since the opposite angles sum to exactly 180°, the converse of the cyclic quadrilateral theorem confirms all four points are concyclic.' },
      ],
      finalAnswer: 'W, X, Y, Z are concyclic, since ∠W + ∠Y = 180°.',
    },
    whyItWorks:
      'This uses the CONVERSE of the cyclic quadrilateral angle-sum theorem: if opposite angles of a ' +
      'quadrilateral sum to 180°, then a circle must pass through all four vertices — a fact provable ' +
      'by supposing a circle passes through three of the points and showing the fourth angle ' +
      'condition forces the last point onto that same circle too.',
    realLifeExample: {
      title: 'Verifying an engineering component fits a circular template',
      scenario: 'A quality-control engineer measures four corner angles of a manufactured part and needs to confirm it matches its intended circular design.',
      explanation: 'Checking the opposite-angle-sum condition (or an equal-angle condition) gives a fast confirmation the four measured points are consistent with lying on one true circle.',
    },
    practiceQuestions: [
      {
        id: 'proving-concyclic-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'In quadrilateral PQRS, ∠P = 95° and ∠R = 84°. Are P, Q, R, S concyclic?',
        options: [
          { id: 'a', text: 'No, since 95° + 84° = 179° ≠ 180°' },
          { id: 'b', text: 'Yes, since both angles are less than 180°' },
          { id: 'c', text: 'Yes, since the difference is small' },
          { id: 'd', text: 'Cannot be determined without more information' },
        ],
        correctOptionId: 'a',
        hints: ['Check if the opposite angles sum to exactly 180°.'],
        explanation: '95°+84°=179°, not exactly 180°, so the four points are not concyclic (at least not with this quadrilateral shape).',
      },
    ],
    commonMistake:
      'Accepting an angle sum that is "close to" 180° as sufficient proof — mathematical concyclic ' +
      'proofs require the condition to hold EXACTLY, not approximately.',
    quickReview: [
      'For a quadrilateral: opposite angles summing to exactly 180° proves concyclic vertices.',
      'For two points seeing a segment: equal angles (same side) proves concyclic.',
      'Always check the condition holds exactly, not just approximately.',
    ],
  },
};
