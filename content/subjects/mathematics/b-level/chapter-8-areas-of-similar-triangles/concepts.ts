import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 8 — Areas of Similar Triangles. Matches
// section 8.1 of the textbook exactly, including a simply-stated proof.
export const chapter8BConcepts: Record<string, Concept> = {
  'the-area-ratio-theorem-for-similar-triangles': {
    slug: 'the-area-ratio-theorem-for-similar-triangles',
    title: 'The Area Ratio Theorem for Similar Triangles',
    difficulty: 'medium',
    simpleExplanation:
      'If two triangles are similar, the ratio of their areas is not the same as the ratio of their ' +
      'sides — it equals the SQUARE of that ratio. So if every side of a triangle is scaled by a ' +
      'factor k, the area is scaled by k².',
    whyItMatters:
      'This is a genuinely surprising and useful shortcut: it lets you compare the areas of similar ' +
      'triangles instantly from a single side-length ratio, without recomputing either area from scratch.',
    diagram: {
      id: 'area-ratio-diagram',
      title: 'Two similar 3-4-5 triangles, scale factor 2',
      altText: 'A small right triangle with legs 3 and 4 and hypotenuse 5, next to a larger similar triangle with legs 6 and 8 and hypotenuse 10, both shaded to compare area',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 4, y: 0, label: 'B', labelDx: 6, labelDy: 6 },
          { x: 0, y: 3, label: 'C', labelDx: -8, labelDy: -4 },
          { x: 7, y: 0, label: "A'", labelDx: -8, labelDy: 8 },
          { x: 15, y: 0, label: "B'", labelDx: 6, labelDy: 6 },
          { x: 7, y: 6, label: "C'", labelDx: -10, labelDy: -6 },
        ],
        polygons: [
          { points: [[0, 0], [4, 0], [0, 3]] },
          { points: [[7, 0], [15, 0], [7, 6]] },
        ],
        segments: [
          { from: [0, 0], to: [4, 0], label: '4' },
          { from: [0, 0], to: [0, 3], label: '3' },
          { from: [4, 0], to: [0, 3], label: '5' },
          { from: [7, 0], to: [15, 0], label: '8' },
          { from: [7, 0], to: [7, 6], label: '6' },
          { from: [15, 0], to: [7, 6], label: '10' },
        ],
      },
    },
    formulaSlug: 'area-ratio-of-similar-triangles',
    workedExample: {
      id: 'area-ratio-worked-1',
      title: 'Find an unknown area using the area ratio theorem',
      problemStatement: 'Two similar triangles have corresponding sides of length 5 and 15. The smaller triangle has area 20. Find the area of the larger triangle.',
      steps: [
        { step: 1, instruction: 'Find the linear scale factor.', math: 'k = 15 / 5 = 3', explanation: 'The larger triangle\'s corresponding side is 3 times the smaller one\'s.' },
        { step: 2, instruction: 'Square the scale factor to get the area ratio.', math: 'k² = 3² = 9', explanation: 'Area scales with the square of the linear scale factor.' },
        { step: 3, instruction: 'Multiply the smaller area by the area ratio.', math: 'Area(large) = 20 × 9 = 180', explanation: 'The larger triangle\'s area is 9 times the smaller one\'s.' },
      ],
      finalAnswer: 'The larger triangle has area 180.',
    },
    whyItWorks:
      'Stated simply: let the small triangle have base b and height h, so its area is ½bh. Because the ' +
      'triangles are similar, every length scales by the same factor k — including the height, since ' +
      'the height is itself a length inside the triangle\'s own scaled copy. So the large triangle has ' +
      'base kb and height kh, giving area ½(kb)(kh) = k²(½bh) — exactly k² times the small triangle\'s ' +
      'area.',
    realLifeExample: {
      title: 'Estimating mulch for a scaled-up flower bed',
      scenario: 'A garden designer doubles every side length of a triangular flower bed to make it look grander.',
      explanation: 'Because area scales with the square of the linear scale factor, doubling every side (k=2) means the bed needs 2²=4 times as much mulch to cover it — not just twice as much, a common and costly mistake.',
    },
    practiceQuestions: [
      {
        id: 'area-ratio-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two similar triangles have corresponding sides 6 and 9. The larger triangle has area 81. Find the area of the smaller triangle.',
        hints: ['Scale factor = 9/6 = 3/2.', 'Area ratio = (3/2)² = 9/4.', 'Smaller area = 81 ÷ (9/4).'],
        correctAnswer: 36,
        explanation: 'k = 9/6 = 3/2, so k² = 9/4. Smaller area = 81 ÷ 9/4 = 81 × 4/9 = 36.',
      },
    ],
    commonMistake:
      'Applying the side-length ratio directly to the areas (e.g. assuming doubling every side doubles ' +
      'the area) instead of squaring it first — area scaling is always the SQUARE of the linear scale factor.',
    quickReview: [
      'Area₁/Area₂ = (s₁/s₂)², for corresponding sides s₁ and s₂.',
      'Proof idea: both base and height scale by the same factor k, so area (½ × base × height) scales by k².',
      'Doubling every side (k=2) quadruples the area (k²=4), not doubles it.',
    ],
  },

  'applying-the-area-ratio-theorem': {
    slug: 'applying-the-area-ratio-theorem',
    title: 'Applying the Area Ratio Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'The area ratio theorem also works in reverse: if you\'re given the ratio of two similar ' +
      'triangles\' areas, you can find the ratio of their corresponding sides by taking the SQUARE ' +
      'ROOT of the area ratio.',
    whyItMatters:
      'Exam and design problems just as often hand you the area ratio and ask for the side ratio as ' +
      'the other way around — recognizing when to square and when to take a square root is the real skill.',
    formulaSlug: 'area-ratio-of-similar-triangles',
    workedExample: {
      id: 'applying-area-ratio-worked-1',
      title: 'Find the side ratio from a given area ratio',
      problemStatement: 'Two similar triangles have areas 50 and 98. Find the ratio of their corresponding sides, in simplest form.',
      steps: [
        { step: 1, instruction: 'Write the area ratio as a fraction.', math: '50/98 = 25/49', explanation: 'Simplify by dividing both by 2.' },
        { step: 2, instruction: 'Take the square root of the area ratio.', math: '√(25/49) = 5/7', explanation: 'The side ratio is the square root of the area ratio.' },
      ],
      finalAnswer: 'The corresponding sides are in the ratio 5 : 7.',
    },
    whyItWorks:
      'Since Area₁/Area₂ = (s₁/s₂)², solving for the side ratio just means undoing the squaring — take ' +
      'the square root of both sides of the equation, giving s₁/s₂ = √(Area₁/Area₂). This is valid ' +
      'because all lengths and areas here are positive.',
    realLifeExample: {
      title: 'Scaling a boat sail to match a target wind-catching area',
      scenario: 'A sailmaker knows the wind-catching area a new, larger triangular sail needs relative to an existing one, and must find how much bigger to make each edge.',
      explanation: 'Taking the square root of the target area ratio gives the exact linear scale factor to enlarge every edge of the sail pattern by.',
    },
    practiceQuestions: [
      {
        id: 'applying-area-ratio-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two similar triangles have areas 36 and 121. Find the ratio of their corresponding sides, expressed as the smaller side\'s number in a ratio out of 11 (i.e. find the numerator, if the ratio is written as x : 11).',
        hints: ['Take the square root of 36/121.', '√36 = 6, √121 = 11.'],
        correctAnswer: 6,
        explanation: '√(36/121) = 6/11, so the ratio is 6 : 11.',
      },
    ],
    commonMistake:
      'Forgetting to take the square root when going from an area ratio to a side ratio — using the ' +
      'area ratio itself as if it were the side ratio.',
    quickReview: [
      's₁/s₂ = √(Area₁/Area₂) — the reverse direction of the area ratio theorem.',
      'Given areas, simplify the fraction first, then take the square root.',
      'Squaring goes side ratio → area ratio; square-rooting goes area ratio → side ratio.',
    ],
  },

  'perimeter-and-area-ratios-together': {
    slug: 'perimeter-and-area-ratios-together',
    title: 'Perimeter and Area Ratios Together',
    difficulty: 'medium',
    simpleExplanation:
      'Perimeter behaves differently from area: for similar triangles, corresponding perimeters scale ' +
      'in DIRECT proportion to the sides (the same linear scale factor k) — not squared. Only area ' +
      '(and other genuinely two-dimensional quantities) scale with k².',
    whyItMatters:
      'Mixing these two up is one of the most common errors in similarity problems — this concept ' +
      'exists specifically to keep the linear (perimeter) and squared (area) scaling rules separate.',
    diagram: {
      id: 'perimeter-vs-area-diagram',
      title: 'Same two triangles, viewed by their outlines (perimeter)',
      altText: 'The same small and large similar triangles as before, shown as outlines only, with all six side lengths labelled to compare total perimeter',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 4, y: 0, label: 'B', labelDx: 6, labelDy: 6 },
          { x: 0, y: 3, label: 'C', labelDx: -8, labelDy: -4 },
          { x: 7, y: 0, label: "A'", labelDx: -8, labelDy: 8 },
          { x: 15, y: 0, label: "B'", labelDx: 6, labelDy: 6 },
          { x: 7, y: 6, label: "C'", labelDx: -10, labelDy: -6 },
        ],
        polygons: [
          { points: [[0, 0], [4, 0], [0, 3]], fill: 'none' },
          { points: [[7, 0], [15, 0], [7, 6]], fill: 'none' },
        ],
        segments: [
          { from: [0, 0], to: [4, 0], label: '4' },
          { from: [0, 0], to: [0, 3], label: '3' },
          { from: [4, 0], to: [0, 3], label: '5' },
          { from: [7, 0], to: [15, 0], label: '8' },
          { from: [7, 0], to: [7, 6], label: '6' },
          { from: [15, 0], to: [7, 6], label: '10' },
        ],
      },
    },
    formulaSlug: 'perimeter-ratio-of-similar-triangles',
    workedExample: {
      id: 'perimeter-area-worked-1',
      title: 'Contrast perimeter scaling with area scaling',
      problemStatement: 'Two similar triangles have corresponding sides in the ratio 2 : 5. The smaller triangle has perimeter 18. Find the larger triangle\'s perimeter, and state how the area ratio compares.',
      steps: [
        { step: 1, instruction: 'Apply the perimeter ratio directly (linear, not squared).', math: 'Perimeter(large) = 18 × (5/2) = 45', explanation: 'Perimeter scales with the same factor as the sides.' },
        { step: 2, instruction: 'Compare with the area ratio.', math: 'Area ratio = (5/2)² = 25/4', explanation: 'Area, unlike perimeter, scales with the SQUARE of the side ratio.' },
      ],
      finalAnswer: 'The larger triangle\'s perimeter is 45; its area is 25/4 times the smaller triangle\'s area.',
    },
    whyItWorks:
      'A perimeter is just a sum of side lengths. If every side scales by the same factor k, the sum of ' +
      'those sides also scales by k (adding k times each of several numbers gives k times their total). ' +
      'Area, by contrast, comes from a PRODUCT of two linear dimensions (base × height), and multiplying ' +
      'two quantities that have each scaled by k multiplies the result by k × k = k².',
    realLifeExample: {
      title: 'Fencing versus sod for a resized triangular yard',
      scenario: 'A landscaper triples every side length of a triangular yard.',
      explanation: 'The fencing needed (which follows the perimeter) simply triples — but the sod needed to cover the yard (which follows the area) increases ninefold (3²), a distinction that directly affects material costs.',
    },
    practiceQuestions: [
      {
        id: 'perimeter-area-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two similar triangles have a side ratio of 3 : 7. The smaller triangle\'s perimeter is 24. Find the larger triangle\'s perimeter.',
        hints: ['Perimeter scales the same way as the sides — no squaring.', 'Perimeter(large) = 24 × (7/3).'],
        correctAnswer: 56,
        explanation: '24 × 7/3 = 56.',
      },
    ],
    commonMistake:
      'Squaring the scale factor for perimeter, the way you would for area — perimeter is a linear ' +
      'quantity and always scales directly with the side ratio, with no squaring involved.',
    quickReview: [
      'Perimeter₁/Perimeter₂ = s₁/s₂ — direct, linear scaling (no squaring).',
      'Area₁/Area₂ = (s₁/s₂)² — squared scaling, because area is a product of two linear dimensions.',
      'Perimeter is a sum of sides (scales by k); area is a product of two lengths (scales by k²).',
    ],
  },
};
