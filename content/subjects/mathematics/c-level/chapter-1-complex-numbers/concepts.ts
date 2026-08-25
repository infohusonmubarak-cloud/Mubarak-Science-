import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 1 — Complex Numbers. Matches the
// textbook preface's description exactly: the new number system;
// complex numbers and their operations; trigonometric forms; roots.
export const chapter1CConcepts: Record<string, Concept> = {
  'the-imaginary-unit-and-i-squared': {
    slug: 'the-imaginary-unit-and-i-squared',
    title: 'The Imaginary Unit and i²',
    difficulty: 'easy',
    simpleExplanation:
      'No real number squares to a negative number — squaring anything real always gives zero or a ' +
      'positive result. To solve equations like x²=−1 anyway, mathematicians defined a brand-new ' +
      'number, i, specifically so that i² = −1. Every other imaginary and complex number is built from this one definition.',
    whyItMatters:
      'This single definition opens up an entire new number system that can solve equations the real ' +
      'numbers alone cannot — and it turns out to be genuinely essential in electrical engineering, ' +
      'physics, and signal processing, not just an abstract curiosity.',
    formulaSlug: 'imaginary-unit-definition',
    workedExample: {
      id: 'imaginary-unit-worked-1',
      title: 'Simplify a high power of i',
      problemStatement: 'Simplify i⁷.',
      steps: [
        { step: 1, instruction: 'Recall the 4-cycle of powers of i.', math: 'i¹=i,  i²=−1,  i³=−i,  i⁴=1,  then it repeats', explanation: 'Every 4th power returns to 1.' },
        { step: 2, instruction: 'Divide the exponent by 4 and find the remainder.', math: '7 ÷ 4 = 1 remainder 3', explanation: 'The remainder tells you where in the cycle i⁷ lands.' },
        { step: 3, instruction: 'Match the remainder to the cycle.', explanation: 'A remainder of 3 means i⁷ has the same value as i³.' },
        { step: 4, instruction: 'State the value.', math: 'i³ = −i', explanation: 'From the cycle above.' },
      ],
      finalAnswer: 'i⁷ = −i.',
    },
    whyItWorks:
      'Since i²=−1 by definition, i³=i²·i=−1·i=−i, and i⁴=i²·i²=(−1)(−1)=1 — and once a power returns ' +
      'to exactly 1, multiplying by i again just restarts the same sequence. This is why the pattern ' +
      'repeats forever in blocks of 4.',
    realLifeExample: {
      title: 'Alternating current (AC) circuit analysis',
      scenario: 'Electrical engineers need to solve equations describing AC circuits that have no solution using real numbers alone.',
      explanation: 'The imaginary unit i (often written j in electrical engineering, to avoid confusion with electric current) is the essential building block that makes these circuit calculations possible.',
    },
    practiceQuestions: [
      {
        id: 'imaginary-unit-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is i¹⁰?',
        options: [
          { id: 'a', text: '−1' },
          { id: 'b', text: '1' },
          { id: 'c', text: 'i' },
          { id: 'd', text: '−i' },
        ],
        correctOptionId: 'a',
        hints: ['10 ÷ 4 = 2 remainder 2.', 'A remainder of 2 matches i².'],
        explanation: '10 ÷ 4 leaves remainder 2, so i¹⁰ = i² = −1.',
      },
    ],
    commonMistake:
      'Assuming i² equals +1 out of habit from ordinary square roots — by definition, i² = −1, never +1.',
    quickReview: [
      'i is defined so that i² = −1.',
      'Powers of i cycle every 4 values: i, −1, −i, 1, ...',
      'To simplify iⁿ, use the remainder of n divided by 4.',
    ],
  },

  'complex-numbers-in-standard-form': {
    slug: 'complex-numbers-in-standard-form',
    title: 'Complex Numbers in Standard Form',
    difficulty: 'easy',
    simpleExplanation:
      'A complex number combines a real part and an imaginary part into one number, written in ' +
      'standard form z = a + bi, where a and b are ordinary real numbers and i is the imaginary unit.',
    whyItMatters:
      'Standard form is the universal way complex numbers are written — every operation (addition, ' +
      'multiplication, division) in this chapter is defined directly in terms of this a+bi structure.',
    formulaSlug: 'standard-form-of-a-complex-number',
    workedExample: {
      id: 'standard-form-worked-1',
      title: 'Identify the real and imaginary parts',
      problemStatement: 'Identify the real part and imaginary part of z = 5 − 3i.',
      steps: [
        { step: 1, instruction: 'Compare z to the standard form a+bi.', explanation: 'Match up the corresponding pieces.' },
        { step: 2, instruction: 'Identify a.', math: 'a = 5', explanation: 'The real part.' },
        { step: 3, instruction: 'Identify b.', math: 'b = −3', explanation: 'The imaginary part is the real COEFFICIENT of i, so it\'s −3, not −3i.' },
      ],
      finalAnswer: 'Re(z) = 5, Im(z) = −3.',
    },
    whyItWorks:
      'Defining Im(z) as a plain real number (the coefficient of i, not the term "bi" itself) keeps it ' +
      'consistent with Re(z) — both parts of a complex number are ordinary real numbers, which is what ' +
      'lets a+bi be plotted as an ordinary point (a,b) on a plane later in this chapter.',
    realLifeExample: {
      title: 'Representing electrical impedance',
      scenario: 'An engineer describes a circuit component\'s impedance using both a resistive part and a reactive part.',
      explanation: 'These two physically different quantities are naturally combined into one complex number in standard form, with resistance as the real part and reactance as the imaginary part.',
    },
    practiceQuestions: [
      {
        id: 'standard-form-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'For z = −7 + 2i, find Im(z).',
        hints: ['Im(z) is the real coefficient of i.'],
        correctAnswer: 2,
        explanation: 'Im(z) = 2 (the coefficient of i, not "2i").',
      },
    ],
    commonMistake:
      'Writing Im(z) as "2i" instead of just "2" — the imaginary part is defined as the real ' +
      'coefficient of i, not the whole term including i.',
    quickReview: [
      'z = a + bi is standard form, with a and b both real numbers.',
      'Re(z) = a is the real part.',
      'Im(z) = b is the imaginary part — a real number, the coefficient of i.',
    ],
  },

  'adding-and-subtracting-complex-numbers': {
    slug: 'adding-and-subtracting-complex-numbers',
    title: 'Adding and Subtracting Complex Numbers',
    difficulty: 'medium',
    simpleExplanation:
      'Add or subtract complex numbers by combining their real parts together, and separately ' +
      'combining their imaginary parts together — just like combining like terms in algebra.',
    whyItMatters:
      'This is the most basic operation on complex numbers, and it is needed constantly whenever ' +
      'complex quantities (like impedances or signal components) are combined.',
    formulaSlug: 'complex-number-addition-subtraction-rule',
    workedExample: {
      id: 'complex-addition-worked-1',
      title: 'Add two complex numbers',
      problemStatement: 'Add (3+4i) and (1−6i).',
      steps: [
        { step: 1, instruction: 'Combine the real parts.', math: '3 + 1 = 4', explanation: 'Add the two real parts together.' },
        { step: 2, instruction: 'Combine the imaginary parts.', math: '4 + (−6) = −2', explanation: 'Add the two imaginary coefficients together.' },
        { step: 3, instruction: 'Write the result in standard form.', math: '4 + (−2)i = 4 − 2i', explanation: 'Combine both results.' },
      ],
      finalAnswer: '(3+4i) + (1−6i) = 4 − 2i.',
    },
    whyItWorks:
      'Since a+bi is really a sum of two DIFFERENT kinds of quantities (a real number and "b copies of ' +
      'i"), adding two complex numbers works exactly like adding two algebraic expressions with ' +
      'different variables (e.g. combining 3x+4y and x−6y) — like terms combine, unlike terms don\'t mix.',
    realLifeExample: {
      title: 'Combining two AC circuit impedances in series',
      scenario: 'Two circuit components, each with their own complex impedance, are connected in series.',
      explanation: 'The total impedance of the series combination is found by simply adding the two complex impedances — real parts with real parts, imaginary parts with imaginary parts.',
    },
    practiceQuestions: [
      {
        id: 'complex-addition-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Compute (6−3i) + (−2+5i).',
        options: [
          { id: 'a', text: '4 + 2i' },
          { id: 'b', text: '4 − 2i' },
          { id: 'c', text: '8 + 2i' },
          { id: 'd', text: '8 − 8i' },
        ],
        correctOptionId: 'a',
        hints: ['Combine real parts: 6+(−2). Combine imaginary parts: −3+5.'],
        explanation: '6+(−2)=4, and −3+5=2, giving 4+2i.',
      },
    ],
    commonMistake:
      'When subtracting, forgetting to distribute the minus sign to BOTH the real and imaginary parts ' +
      'of the second number — e.g. (5−2i)−(3+7i) needs both the 3 AND the 7i subtracted, not just the 3.',
    quickReview: [
      '(a+bi) ± (c+di) = (a±c) + (b±d)i.',
      'Combine real parts together, and imaginary parts together, separately.',
      'When subtracting, distribute the minus sign to both parts of the second number.',
    ],
  },

  'multiplying-complex-numbers': {
    slug: 'multiplying-complex-numbers',
    title: 'Multiplying Complex Numbers',
    difficulty: 'medium',
    simpleExplanation:
      'Multiply complex numbers using the distributive property (FOIL), exactly like multiplying two ' +
      'binomials — but then replace every i² that appears with −1, and combine like terms.',
    whyItMatters:
      'Multiplication is essential for later topics in this chapter (like De Moivre\'s Theorem), and ' +
      'appears constantly in applications combining complex quantities like AC circuit impedances.',
    formulaSlug: 'complex-number-multiplication-rule',
    workedExample: {
      id: 'complex-multiplication-worked-1',
      title: 'Multiply two complex numbers',
      problemStatement: 'Multiply (2+3i)(1−4i).',
      steps: [
        { step: 1, instruction: 'Expand using FOIL.', math: '(2)(1) + (2)(−4i) + (3i)(1) + (3i)(−4i)', explanation: 'First, Outer, Inner, Last.' },
        { step: 2, instruction: 'Simplify each term.', math: '2 − 8i + 3i − 12i²', explanation: 'Multiply out each pair.' },
        { step: 3, instruction: 'Replace i² with −1.', math: '−12i² = −12(−1) = 12', explanation: 'This is the key step that makes complex multiplication different from ordinary binomial multiplication.' },
        { step: 4, instruction: 'Combine like terms.', math: '(2+12) + (−8+3)i = 14 − 5i', explanation: 'Combine the real terms and the imaginary terms separately.' },
      ],
      finalAnswer: '(2+3i)(1−4i) = 14 − 5i.',
    },
    whyItWorks:
      'FOIL is just the distributive property applied twice, which works for ANY two binomial-shaped ' +
      'expressions — the only genuinely new step for complex numbers is substituting i²=−1 afterward, ' +
      'which is exactly what makes the result "collapse" back into standard a+bi form instead of ' +
      'staying as an expression with i².',
    realLifeExample: {
      title: 'Combining impedances in parallel circuits',
      scenario: 'Calculating combined impedance for components in parallel in an AC circuit requires multiplying (and dividing) complex impedance values.',
      explanation: 'Correctly multiplying complex numbers — including handling i² — is essential to getting the right combined impedance value.',
    },
    practiceQuestions: [
      {
        id: 'complex-multiplication-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Multiply (1+i)(1−i).',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '2i' },
          { id: 'c', text: '0' },
          { id: 'd', text: '1 + i²' },
        ],
        correctOptionId: 'a',
        hints: ['(1+i)(1−i) = 1 − i².', 'Substitute i²=−1.'],
        explanation: '1 − i² = 1 − (−1) = 2 — notice the result is purely real, since these two factors are complex conjugates (the next concept explores exactly this).',
      },
    ],
    commonMistake:
      'Forgetting to replace i² with −1 after expanding — leaving i² sitting in the final answer is ' +
      'incomplete; it must always be simplified.',
    quickReview: [
      '(a+bi)(c+di) = (ac−bd) + (ad+bc)i.',
      'Expand with FOIL, then replace every i² with −1.',
      'A complex number times its own conjugate always gives a purely real result.',
    ],
  },

  'dividing-complex-numbers-using-conjugates': {
    slug: 'dividing-complex-numbers-using-conjugates',
    title: 'Dividing Complex Numbers Using Conjugates',
    difficulty: 'medium',
    simpleExplanation:
      'To divide by a complex number, multiply both the numerator and denominator by the ' +
      'denominator\'s complex conjugate (same real part, opposite sign on the imaginary part). This ' +
      'clears the imaginary part out of the denominator entirely, since a number times its own ' +
      'conjugate is always a real number.',
    whyItMatters:
      'Division would otherwise leave an "i" sitting in the denominator, which isn\'t standard form — ' +
      'the conjugate trick is the standard, reliable way to fix that.',
    formulaSlug: 'complex-conjugate-and-division-rule',
    workedExample: {
      id: 'complex-division-worked-1',
      title: 'Divide two complex numbers using the conjugate',
      problemStatement: 'Divide (4+2i) by (1−i).',
      steps: [
        { step: 1, instruction: 'Multiply top and bottom by the conjugate of the denominator.', math: '[(4+2i)(1+i)] / [(1−i)(1+i)]', explanation: 'The conjugate of 1−i is 1+i.' },
        { step: 2, instruction: 'Expand the denominator.', math: '(1−i)(1+i) = 1 − i² = 1+1 = 2', explanation: 'This is now a real number.' },
        { step: 3, instruction: 'Expand the numerator.', math: '(4+2i)(1+i) = 4+4i+2i+2i² = 4+6i−2 = 2+6i', explanation: 'Use FOIL and substitute i²=−1.' },
        { step: 4, instruction: 'Divide each part by the real denominator.', math: '(2+6i)/2 = 1+3i', explanation: 'Divide both the real and imaginary parts by 2.' },
      ],
      finalAnswer: '(4+2i) / (1−i) = 1 + 3i.',
    },
    whyItWorks:
      'For any complex number c+di, its conjugate is c−di, and (c+di)(c−di) = c²+d² — always a real, ' +
      'non-negative number, since it\'s a sum of two squares. Multiplying both the top and bottom of a ' +
      'fraction by the same quantity never changes its value, so this trick legally clears i from the denominator.',
    realLifeExample: {
      title: 'Finding current from voltage and impedance',
      scenario: 'In an AC circuit, current equals voltage divided by impedance — both are complex numbers.',
      explanation: 'The conjugate technique is exactly how engineers compute this division to find the actual current, in proper standard form.',
    },
    practiceQuestions: [
      {
        id: 'complex-division-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Divide (3+i) by (1+i).',
        options: [
          { id: 'a', text: '2 − i' },
          { id: 'b', text: '2 + i' },
          { id: 'c', text: '4 − 2i' },
          { id: 'd', text: '1 − i' },
        ],
        correctOptionId: 'a',
        hints: ['Multiply top and bottom by the conjugate, 1−i.'],
        explanation: 'Numerator: (3+i)(1−i)=3−3i+i−i²=4−2i. Denominator: (1+i)(1−i)=2. Result: (4−2i)/2=2−i.',
      },
    ],
    commonMistake:
      'Multiplying only the numerator by the conjugate and forgetting the denominator — both must be ' +
      'multiplied by the same conjugate to keep the fraction\'s value unchanged.',
    quickReview: [
      '(a+bi)/(c+di) = [(a+bi)(c−di)] / (c²+d²).',
      'Multiply top and bottom by the denominator\'s conjugate.',
      'A number times its own conjugate is always a real number.',
    ],
  },

  'the-complex-plane-and-modulus': {
    slug: 'the-complex-plane-and-modulus',
    title: 'The Complex Plane and Modulus',
    difficulty: 'medium',
    simpleExplanation:
      'A complex number z = a+bi can be plotted as a point (a,b) on the "complex plane" — the real ' +
      'part along a horizontal axis, the imaginary part along a vertical axis. The modulus |z| is the ' +
      'distance from the origin to this point: |z| = √(a²+b²).',
    whyItMatters:
      'Visualizing complex numbers as points (or arrows) gives geometric meaning to algebra that would ' +
      'otherwise feel abstract, and the modulus is the foundation for the trigonometric form coming up next.',
    diagram: {
      id: 'complex-plane-modulus-diagram',
      title: 'z = 3+4i on the complex plane, with modulus |z|=5',
      altText: 'A point at (3,4) on the complex plane, labelled z = 3+4i, with an arrow from the origin showing its modulus of 5, and dashed lines showing the real and imaginary components',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 3, y: 4, label: 'z = 3+4i', labelDx: 16, labelDy: -4 },
        ],
        segments: [
          { from: [0, 0], to: [5, 0], dashed: true, label: 'Re' },
          { from: [0, 0], to: [0, 5], dashed: true, label: 'Im' },
          { from: [0, 0], to: [3, 4], arrow: true, label: '|z|=5', labelDx: -18, labelDy: -6 },
          { from: [3, 0], to: [3, 4], dashed: true },
        ],
      },
    },
    formulaSlug: 'modulus-of-a-complex-number-formula',
    workedExample: {
      id: 'modulus-worked-1',
      title: 'Find the modulus of a complex number',
      problemStatement: 'Find the modulus of z = 3+4i.',
      steps: [
        { step: 1, instruction: 'Apply the modulus formula.', math: '|z| = √(a² + b²)', explanation: 'a and b are the real and imaginary parts.' },
        { step: 2, instruction: 'Substitute a=3, b=4.', math: '√(3² + 4²) = √(9+16)', explanation: 'Square both parts.' },
        { step: 3, instruction: 'Simplify.', math: '√25 = 5', explanation: 'Take the square root.' },
      ],
      finalAnswer: '|z| = 5.',
    },
    whyItWorks:
      'Plotting z=a+bi as the point (a,b), the segment from the origin to that point, together with the ' +
      'horizontal segment of length a and vertical segment of length b, forms a right triangle — the ' +
      'modulus |z| is exactly the hypotenuse of that triangle, so the Pythagorean theorem gives |z|=√(a²+b²) directly.',
    realLifeExample: {
      title: 'The magnitude of an AC voltage or current',
      scenario: 'An electrical engineer represents an AC voltage as a complex number, but ultimately needs its actual measurable magnitude.',
      explanation: 'The modulus of that complex number gives exactly the physically meaningful magnitude of the voltage, independent of its phase.',
    },
    practiceQuestions: [
      {
        id: 'modulus-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find |z| for z = −6+8i.',
        hints: ['|z| = √(a²+b²), regardless of the signs of a and b.'],
        correctAnswer: 10,
        explanation: '√((−6)² + 8²) = √(36+64) = √100 = 10.',
      },
    ],
    commonMistake:
      'Forgetting that the modulus formula always uses the SQUARES of both parts (which are always ' +
      'non-negative) — |z| is never found by simply adding or subtracting a and b directly.',
    quickReview: [
      'z = a+bi plots as the point (a,b) on the complex plane.',
      '|z| = √(a²+b²) — the distance from the origin, via the Pythagorean theorem.',
      'The modulus is always a non-negative real number.',
    ],
  },

  'the-trigonometric-form-of-a-complex-number': {
    slug: 'the-trigonometric-form-of-a-complex-number',
    title: 'The Trigonometric (Polar) Form of a Complex Number',
    difficulty: 'medium',
    simpleExplanation:
      'Instead of writing a complex number by its real and imaginary parts, it can be written using its ' +
      'modulus r and its argument θ (the angle from the positive real axis): z = r(cos θ + i sin θ).',
    whyItMatters:
      'Trigonometric form makes multiplying, dividing, and raising complex numbers to powers dramatically ' +
      'simpler than working directly with a+bi — this is the form De Moivre\'s Theorem is built on.',
    diagram: {
      id: 'trigonometric-form-diagram',
      title: 'z = 3+4i in trigonometric form, with argument θ',
      altText: 'A point representing z=3+4i on the complex plane, with the angle theta marked between the positive real axis and the line to z',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 3, y: 4, label: 'z', labelDx: 10, labelDy: -6 },
        ],
        segments: [
          { from: [0, 0], to: [5, 0], dashed: true },
          { from: [0, 0], to: [3, 4], arrow: true, label: 'r' },
        ],
        angleMarks: [{ at: [0, 0], from: [5, 0], to: [3, 4], label: 'θ', radius: 1.5 }],
      },
    },
    formulaSlug: 'trigonometric-form-of-a-complex-number-formula',
    workedExample: {
      id: 'trigonometric-form-worked-1',
      title: 'Convert a complex number to trigonometric form',
      problemStatement: 'Write z = 3+4i in trigonometric (polar) form.',
      steps: [
        { step: 1, instruction: 'Find the modulus r.', math: 'r = √(3²+4²) = 5', explanation: 'Same modulus formula as before.' },
        { step: 2, instruction: 'Find the argument θ.', math: 'θ = arctan(4/3) ≈ 53.13°', explanation: 'z is in Quadrant I (both parts positive), so this angle needs no adjustment.' },
        { step: 3, instruction: 'Write in trigonometric form.', math: 'z = 5(cos 53.13° + i sin 53.13°)', explanation: 'Combine r and θ into the trigonometric form.' },
      ],
      finalAnswer: 'z ≈ 5(cos 53.13° + i sin 53.13°).',
    },
    whyItWorks:
      'Since z=a+bi plots as the point (a,b), and r(cosθ) and r(sinθ) are exactly the horizontal and ' +
      'vertical coordinates of a point at distance r and angle θ from the origin (the same general trig ' +
      'ratio definition used for angles of any size), a=r cosθ and b=r sinθ — substituting these into ' +
      'a+bi gives r cosθ + i(r sinθ) = r(cosθ + i sinθ) directly.',
    realLifeExample: {
      title: 'Representing a rotating phasor in electrical engineering',
      scenario: 'An AC signal\'s magnitude and phase (timing offset) are both physically meaningful quantities.',
      explanation: 'Trigonometric form directly separates these — r is the signal\'s magnitude, θ is its phase — matching exactly how engineers think about AC signals as rotating "phasors."',
    },
    practiceQuestions: [
      {
        id: 'trigonometric-form-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the modulus r needed to write z = 6+8i in trigonometric form.',
        hints: ['r = √(a²+b²).'],
        correctAnswer: 10,
        explanation: '√(36+64) = √100 = 10.',
      },
    ],
    commonMistake:
      'Using arctan alone without checking the actual quadrant of a+bi — arctan doesn\'t distinguish ' +
      'quadrants by itself, so θ must be adjusted to match where a+bi actually sits (the same basic ' +
      'acute angle idea used for trigonometric ratios of any angle).',
    quickReview: [
      'z = r(cosθ + i sinθ), where r=|z| and θ=arg(z).',
      'a = r cosθ and b = r sinθ.',
      'Always check the quadrant of a+bi when finding θ from arctan(b/a).',
    ],
  },

  'de-moivres-theorem': {
    slug: 'de-moivres-theorem',
    title: "De Moivre's Theorem",
    difficulty: 'hard',
    simpleExplanation:
      'De Moivre\'s Theorem gives a direct shortcut for raising a complex number in trigonometric form ' +
      'to a power n: [r(cosθ+isinθ)]ⁿ = rⁿ(cos(nθ)+isin(nθ)) — raise the modulus to the power n, and ' +
      'multiply the angle by n.',
    whyItMatters:
      'Without this theorem, raising a complex number to a high power would mean multiplying it out by ' +
      'itself repeatedly — De Moivre\'s Theorem turns that into two simple steps.',
    formulaSlug: 'de-moivres-theorem-formula',
    workedExample: {
      id: 'de-moivre-worked-1',
      title: "Apply De Moivre's Theorem",
      problemStatement: 'Use De Moivre\'s Theorem to find [2(cos30°+isin30°)]³.',
      steps: [
        { step: 1, instruction: "Apply De Moivre's Theorem.", math: 'rⁿ(cos(nθ)+isin(nθ))', explanation: 'r=2, θ=30°, n=3.' },
        { step: 2, instruction: 'Raise the modulus to the power n.', math: '2³ = 8', explanation: 'The modulus part.' },
        { step: 3, instruction: 'Multiply the angle by n.', math: 'nθ = 3×30° = 90°', explanation: 'The angle part.' },
        { step: 4, instruction: 'Combine and evaluate.', math: '8(cos90° + isin90°) = 8(0 + i(1)) = 8i', explanation: 'cos90°=0, sin90°=1.' },
      ],
      finalAnswer: '[2(cos30°+isin30°)]³ = 8i.',
    },
    whyItWorks:
      'Multiplying two complex numbers in trigonometric form, r₁(cosα+isinα) and r₂(cosβ+isinβ), gives ' +
      'r₁r₂(cos(α+β)+isin(α+β)) — the moduli multiply, and the angles ADD. Raising to the nth power is ' +
      'just multiplying the same number by itself n times, so the modulus multiplies by itself n times ' +
      '(giving rⁿ) and the angle adds to itself n times (giving nθ).',
    realLifeExample: {
      title: 'Analyzing repeated signal transformations',
      scenario: 'A signal processing system applies the same complex transformation repeatedly, many times in a row.',
      explanation: "De Moivre's Theorem computes the combined effect of many repeated applications directly, without simulating each step one at a time.",
    },
    practiceQuestions: [
      {
        id: 'de-moivre-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: "Using De Moivre's Theorem, find the modulus of [3(cos40°+isin40°)]².",
        hints: ['The modulus is raised to the power n.'],
        correctAnswer: 9,
        explanation: '3² = 9.',
      },
    ],
    commonMistake:
      'Multiplying the modulus by n instead of raising it to the power n (e.g. computing 2×3=6 instead ' +
      'of 2³=8) — only the ANGLE is multiplied by n; the modulus is raised to the nth power.',
    quickReview: [
      '[r(cosθ+isinθ)]ⁿ = rⁿ(cos(nθ)+isin(nθ)).',
      'Modulus is raised to the power n; angle is multiplied by n.',
      'Comes from repeatedly applying the rule for multiplying two complex numbers in trig form.',
    ],
  },

  'finding-nth-roots-of-a-complex-number': {
    slug: 'finding-nth-roots-of-a-complex-number',
    title: 'Finding nth Roots of a Complex Number',
    difficulty: 'hard',
    simpleExplanation:
      'Every nonzero complex number has exactly n distinct nth roots. Written in trigonometric form ' +
      'r(cosθ+isinθ), its n roots all share the same modulus r^(1/n), but their angles are ' +
      '(θ+360°k)/n for k=0,1,...,n−1 — evenly spaced 360°/n apart around a circle.',
    whyItMatters:
      'This is a genuine surprise compared to real numbers (where, say, 8 has only ONE real cube root) — ' +
      'in the complex numbers, every nonzero number has exactly n nth roots, no more and no fewer.',
    diagram: {
      id: 'nth-roots-diagram',
      title: 'The three cube roots of 8, evenly spaced around a circle of radius 2',
      altText: 'Three points evenly spaced 120 degrees apart on a circle of radius 2, representing the three cube roots of the complex number 8',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 2 }],
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 2, y: 0, label: 'w₀ = 2', labelDx: 14, labelDy: 6 },
          { x: -1, y: 1.73, label: 'w₁', labelDx: -10, labelDy: -10 },
          { x: -1, y: -1.73, label: 'w₂', labelDx: -10, labelDy: 10 },
        ],
        segments: [
          { from: [0, 0], to: [2, 0], arrow: true },
          { from: [0, 0], to: [-1, 1.73], arrow: true },
          { from: [0, 0], to: [-1, -1.73], arrow: true },
        ],
      },
    },
    formulaSlug: 'nth-root-formula-for-complex-numbers',
    workedExample: {
      id: 'nth-roots-worked-1',
      title: 'Find all cube roots of a complex number',
      problemStatement: 'Find all cube roots of 8 (that is, solve z³=8).',
      steps: [
        { step: 1, instruction: 'Write 8 in trigonometric form.', math: '8 = 8(cos0° + isin0°)', explanation: 'r=8, θ=0°, since 8 is a positive real number.' },
        { step: 2, instruction: 'Find the modulus of each root.', math: '8^(1/3) = 2', explanation: 'The same for all three roots.' },
        { step: 3, instruction: 'Find each root\'s angle, for k=0,1,2 (since n=3).', math: '(0°+360°k)/3 → 0°, 120°, 240°', explanation: 'Substitute k=0, 1, 2 in turn.' },
        { step: 4, instruction: 'Write out each root.', math: 'w₀=2(cos0°+isin0°)=2.   w₁=2(cos120°+isin120°)=−1+1.73i.   w₂=2(cos240°+isin240°)=−1−1.73i.', explanation: 'Evaluate the cosine and sine at each angle.' },
      ],
      finalAnswer: 'The three cube roots of 8 are 2, −1+1.73i, and −1−1.73i.',
    },
    whyItWorks:
      'Raising any of these three roots to the 3rd power, by De Moivre\'s Theorem, gives modulus ' +
      '2³=8 (correct) and angle 3×(0°,120°, or 240°) = 0°, 360°, or 720° — all of which are the SAME ' +
      'direction as 0° (since angles that differ by a full 360° describe the same point), confirming ' +
      'every one of these three roots genuinely cubes back to 8.',
    realLifeExample: {
      title: 'Finding all stable states in a rotational system',
      scenario: 'An engineer analyzing a system with rotational symmetry (like a signal that repeats every 1/n of a cycle) needs every equally-valid solution, not just one.',
      explanation: 'Finding all n complex roots directly captures every one of these physically distinct but equally valid states, evenly distributed around a cycle.',
    },
    practiceQuestions: [
      {
        id: 'nth-roots-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the modulus of each of the four 4th roots of 16.',
        hints: ['Every root shares the same modulus, r^(1/n).', '16^(1/4) = ?'],
        correctAnswer: 2,
        explanation: '16 = 16(cos0°+isin0°), and 16^(1/4) = 2 — the modulus of every one of the four roots.',
      },
    ],
    commonMistake:
      'Finding only ONE root and stopping — every nonzero complex number has exactly n distinct nth ' +
      'roots, evenly spaced 360°/n apart, and all of them must be listed for a complete answer.',
    quickReview: [
      'Every nonzero complex number has exactly n distinct nth roots.',
      'All n roots share the same modulus, r^(1/n).',
      'The roots\' angles are (θ+360°k)/n for k=0,1,...,n−1 — evenly spaced around a circle.',
    ],
  },
};
