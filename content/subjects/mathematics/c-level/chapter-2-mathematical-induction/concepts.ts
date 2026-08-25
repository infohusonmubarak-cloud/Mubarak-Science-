import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 2 — Mathematical Induction. Matches
// the textbook preface's description: the principle of mathematical
// induction; proving mathematical statements using it.
export const chapter2CConcepts: Record<string, Concept> = {
  'the-principle-of-mathematical-induction': {
    slug: 'the-principle-of-mathematical-induction',
    title: 'The Principle of Mathematical Induction',
    difficulty: 'medium',
    simpleExplanation:
      'To prove a statement P(n) is true for every integer n from some starting value onward, ' +
      'mathematical induction uses two steps: the BASE CASE, showing P(1) (or the actual starting ' +
      'value) is true directly, and the INDUCTIVE STEP, assuming P(k) is true for some arbitrary k ' +
      '(the "inductive hypothesis"), then using that assumption to prove P(k+1) is also true. If both ' +
      'steps succeed, P(n) is true for every n in the range.',
    whyItMatters:
      'Induction is the standard, rigorous way to prove a statement about every positive integer — ' +
      'there are infinitely many of them, so checking each one individually is simply impossible.',
    formulaSlug: 'principle-of-mathematical-induction-statement',
    workedExample: {
      id: 'induction-principle-worked-1',
      title: 'Prove a simple inequality using induction',
      problemStatement: 'Prove that n < 2ⁿ for all positive integers n ≥ 1, using mathematical induction.',
      steps: [
        { step: 1, instruction: 'Verify the base case, n=1.', math: '1 < 2¹ = 2', explanation: 'True, so the base case holds.' },
        { step: 2, instruction: 'State the inductive hypothesis.', math: 'Assume k < 2ᵏ for some k ≥ 1', explanation: 'This is what may be assumed true for the current step.' },
        { step: 3, instruction: 'Show P(k+1): k+1 < 2^(k+1).', math: 'Since k ≥ 1, 1 ≤ 2ᵏ, so k+1 ≤ k+2ᵏ', explanation: 'Add 2ᵏ (which is at least 1) to both sides of k ≥ 1... actually add the inequality pieces together.' },
        { step: 4, instruction: 'Combine with the inductive hypothesis.', math: 'k+2ᵏ < 2ᵏ+2ᵏ = 2·2ᵏ = 2^(k+1)   (using k < 2ᵏ)', explanation: 'Substitute the inductive hypothesis into the middle term.' },
        { step: 5, instruction: 'Conclude.', math: 'k+1 ≤ k+2ᵏ < 2^(k+1),   so k+1 < 2^(k+1)', explanation: 'P(k+1) holds, completing the inductive step.' },
      ],
      finalAnswer: 'n < 2ⁿ is true for every positive integer n ≥ 1, by mathematical induction.',
    },
    whyItWorks:
      'This is often explained with a domino analogy: the base case is knocking over the very first ' +
      'domino, and the inductive step is the guarantee that "if any domino falls, it knocks over the ' +
      'next one." Together, these two facts guarantee every single domino in the entire line falls, no ' +
      'matter how long the line is — exactly mirroring how the two steps guarantee P(n) for every n.',
    realLifeExample: {
      title: 'Verifying a computer algorithm works for any input size',
      scenario: 'A computer scientist needs to prove an algorithm produces the correct result no matter how large the input size n is, not just for the few sizes that were tested.',
      explanation: 'Mathematical induction is exactly the tool used to rigorously prove such a claim holds for every possible input size, not merely the ones checked by hand.',
    },
    practiceQuestions: [
      {
        id: 'induction-principle-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What are the two required steps of a mathematical induction proof?',
        options: [
          { id: 'a', text: 'Base case, then inductive step' },
          { id: 'b', text: 'Direct proof, then contradiction' },
          { id: 'c', text: 'Substitution, then factoring' },
          { id: 'd', text: 'Base case only, repeated for every n' },
        ],
        correctOptionId: 'a',
        hints: ['One step verifies a starting point; the other carries the truth forward.'],
        explanation: 'A complete induction proof always needs both the base case and the inductive step.',
      },
    ],
    commonMistake:
      'Skipping the base case, or not explicitly stating the inductive hypothesis (assuming P(k) is ' +
      'true) before trying to prove P(k+1) — both steps are required, and the inductive step must ' +
      'clearly make use of that assumption.',
    quickReview: [
      'Base case: verify P(starting value) directly.',
      'Inductive step: assume P(k) is true, then prove P(k+1) follows from it.',
      'The domino analogy: the first domino falls, and each domino knocks over the next — so all of them fall.',
    ],
  },

  'proving-summation-formulas-by-induction': {
    slug: 'proving-summation-formulas-by-induction',
    title: 'Proving Summation Formulas by Induction',
    difficulty: 'medium',
    simpleExplanation:
      'Many formulas that add up a pattern of numbers (like 1+2+...+n) can be proved correct for every ' +
      'n using induction — the inductive step typically involves adding the NEW term (the (k+1)th term) ' +
      'to both sides of the assumed formula at n=k.',
    whyItMatters:
      'Summation formulas let you add up huge numbers of terms instantly instead of one at a time, and ' +
      'induction is how these formulas are actually verified as correct, not just guessed.',
    formulaSlug: 'sum-of-first-n-integers-formula',
    workedExample: {
      id: 'summation-induction-worked-1',
      title: 'Prove the formula for the sum of the first n positive integers',
      problemStatement: 'Prove that 1+2+3+...+n = n(n+1)/2 for all positive integers n ≥ 1.',
      steps: [
        { step: 1, instruction: 'Verify the base case, n=1.', math: 'LHS = 1.   RHS = 1(2)/2 = 1', explanation: 'Both sides match, so the base case holds.' },
        { step: 2, instruction: 'State the inductive hypothesis.', math: '1+2+...+k = k(k+1)/2', explanation: 'Assume this formula holds for some k.' },
        { step: 3, instruction: 'Add the next term, (k+1), to both sides.', math: '1+2+...+k+(k+1) = k(k+1)/2 + (k+1)', explanation: 'This is what P(k+1) actually claims on the left side.' },
        { step: 4, instruction: 'Simplify the right side.', math: 'k(k+1)/2 + (k+1) = (k+1)[k/2+1] = (k+1)(k+2)/2', explanation: 'Factor out (k+1), then combine the remaining terms.' },
        { step: 5, instruction: 'Compare with the formula at n=k+1.', math: '(k+1)((k+1)+1)/2 = (k+1)(k+2)/2', explanation: 'This matches exactly what was just derived, so P(k+1) holds.' },
      ],
      finalAnswer: '1+2+...+n = n(n+1)/2 is true for all positive integers n, by mathematical induction.',
    },
    whyItWorks:
      'The inductive hypothesis gives the sum of the first k terms; adding exactly the next term, ' +
      '(k+1), to both sides of that equation is what correctly extends the claim to n=k+1 — the right ' +
      'side then just needs ordinary algebra (factoring) to be reshaped into the form the formula ' +
      'predicts for n=k+1.',
    realLifeExample: {
      title: 'Computing the total number of unique connections in a growing network',
      scenario: 'A network engineer needs a formula for the total number of unique cable connections needed to directly connect every pair among n junction boxes.',
      explanation: 'A summation formula (related to 1+2+...+(n-1)) gives this instantly for any n — and induction is exactly how such a formula gets rigorously verified as correct for every possible n.',
    },
    practiceQuestions: [
      {
        id: 'summation-induction-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Using 1+2+...+n = n(n+1)/2, find the sum of the first 10 positive integers.',
        hints: ['Substitute n=10 into the formula.'],
        correctAnswer: 55,
        explanation: '10(11)/2 = 55.',
      },
    ],
    commonMistake:
      'In the inductive step, forgetting to explicitly add the NEW term (k+1) to both sides — simply ' +
      'substituting n=k+1 into the formula without connecting it back to the inductive hypothesis is not a valid proof.',
    quickReview: [
      'Add the (k+1)th term to both sides of the inductive hypothesis.',
      'Then use algebra (usually factoring) to match the formula\'s predicted form at n=k+1.',
      '1+2+...+n = n(n+1)/2 is a classic example, provable this way.',
    ],
  },

  'proving-divisibility-statements-by-induction': {
    slug: 'proving-divisibility-statements-by-induction',
    title: 'Proving Divisibility Statements by Induction',
    difficulty: 'hard',
    simpleExplanation:
      'To prove an expression f(n) is always divisible by a fixed number d, verify the base case ' +
      'directly, then assume f(k) = d·m for some integer m (the inductive hypothesis), and use ' +
      'algebra to rewrite f(k+1) so it is ALSO clearly d times some integer.',
    whyItMatters:
      'Divisibility properties come up constantly in number theory and cryptography, and induction is ' +
      'the standard way to prove such a property holds for every single positive integer, not just the ones checked by hand.',
    formulaSlug: 'divisibility-induction-technique',
    workedExample: {
      id: 'divisibility-induction-worked-1',
      title: 'Prove a divisibility statement using induction',
      problemStatement: 'Prove that 3ⁿ − 1 is divisible by 2, for all positive integers n ≥ 1.',
      steps: [
        { step: 1, instruction: 'Verify the base case, n=1.', math: '3¹ − 1 = 2', explanation: '2 is divisible by 2, so the base case holds.' },
        { step: 2, instruction: 'State the inductive hypothesis.', math: '3ᵏ − 1 = 2m,   for some integer m', explanation: 'Assume 3ᵏ−1 is divisible by 2, and rewrite as 3ᵏ = 2m+1.' },
        { step: 3, instruction: 'Rewrite 3^(k+1) in terms of 3ᵏ.', math: '3^(k+1) − 1 = 3·3ᵏ − 1', explanation: 'Separate out one extra factor of 3.' },
        { step: 4, instruction: 'Substitute the inductive hypothesis.', math: '3(2m+1) − 1 = 6m+3−1 = 6m+2', explanation: 'Replace 3ᵏ with 2m+1.' },
        { step: 5, instruction: 'Factor to show divisibility by 2.', math: '6m+2 = 2(3m+1)', explanation: '2(3m+1) is clearly 2 times an integer, so it is divisible by 2.' },
      ],
      finalAnswer: '3ⁿ − 1 is divisible by 2 for all positive integers n, by mathematical induction.',
    },
    whyItWorks:
      'Rewriting 3^(k+1) as 3·3ᵏ is the key algebraic move that lets the inductive hypothesis (a fact ' +
      'about 3ᵏ) actually get substituted in — from there, it is just algebra to show the result still ' +
      'has a factor of 2, exactly the pattern needed to complete the inductive step.',
    realLifeExample: {
      title: 'Verifying a cryptographic sequence property',
      scenario: 'A cryptography engineer needs to guarantee that a computed value at every step of an unbounded process is always divisible by a fixed number, a property the security of the scheme depends on.',
      explanation: 'A divisibility induction proof rigorously confirms this holds at every single step, not merely the first several checked by hand.',
    },
    practiceQuestions: [
      {
        id: 'divisibility-induction-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Verify the base case for "5ⁿ − 1 is divisible by 4" at n=1: what is 5¹ − 1?',
        hints: ['Substitute n=1 directly.'],
        correctAnswer: 4,
        explanation: '5¹ − 1 = 4, which is indeed divisible by 4.',
      },
    ],
    commonMistake:
      'Forgetting to explicitly rewrite 3^(k+1) in terms of 3ᵏ (using 3^(k+1) = 3·3ᵏ) before ' +
      'substituting the inductive hypothesis — without this rewriting step, the hypothesis cannot be applied at all.',
    quickReview: [
      'Base case: verify f(1) is divisible by d directly.',
      'Inductive hypothesis: assume f(k) = d·m for some integer m.',
      'Rewrite f(k+1) in terms of f(k), substitute, then factor out d.',
    ],
  },

  'proving-inequalities-by-induction': {
    slug: 'proving-inequalities-by-induction',
    title: 'Proving Inequalities by Induction',
    difficulty: 'hard',
    simpleExplanation:
      'Induction can also prove inequalities, not just equations — the base case and inductive step ' +
      'work the same way, but the inductive step uses the assumed inequality (rather than an equation) ' +
      'together with algebra to derive the next inequality. The base case does not have to start at ' +
      'n=1 — it can start at whatever integer the inequality first becomes true.',
    whyItMatters:
      'Many important results in analysis and computer science (like comparing the growth rates of ' +
      'different functions) are inequalities, not equations — induction is essential for proving these hold for every n.',
    formulaSlug: 'inequality-induction-technique',
    workedExample: {
      id: 'inequality-induction-worked-1',
      title: 'Prove an inequality using induction, starting from a later base case',
      problemStatement: 'Prove that n! > 2ⁿ for all integers n ≥ 4.',
      steps: [
        { step: 1, instruction: 'Verify the base case, n=4 (not n=1, since the statement is false for smaller n).', math: '4! = 24,   2⁴ = 16,   24 > 16', explanation: 'True, so the base case at n=4 holds.' },
        { step: 2, instruction: 'State the inductive hypothesis.', math: 'k! > 2ᵏ,   for some k ≥ 4', explanation: 'Assume the inequality holds at k.' },
        { step: 3, instruction: 'Relate (k+1)! to k!.', math: '(k+1)! = (k+1)·k!', explanation: 'Factor out the extra (k+1).' },
        { step: 4, instruction: 'Apply the inductive hypothesis.', math: '(k+1)·k! > (k+1)·2ᵏ', explanation: 'Since k! > 2ᵏ, multiplying both sides by the positive number (k+1) preserves the inequality.' },
        { step: 5, instruction: 'Compare with 2^(k+1).', math: '(k+1)·2ᵏ ≥ 2·2ᵏ = 2^(k+1),   since k+1 ≥ 5 > 2', explanation: 'Because k+1 is at least 5, it is certainly greater than 2.' },
      ],
      finalAnswer: 'n! > 2ⁿ is true for all integers n ≥ 4, by mathematical induction.',
    },
    whyItWorks:
      'Multiplying both sides of a true inequality by the same POSITIVE number always preserves the ' +
      'inequality\'s direction — this is exactly what justifies going from k! > 2ᵏ to ' +
      '(k+1)·k! > (k+1)·2ᵏ, and the rest is just comparing (k+1) to 2 to finish the chain of inequalities.',
    realLifeExample: {
      title: 'Comparing the growth rates of two algorithms',
      scenario: 'A computer scientist wants to prove that one algorithm\'s running time (proportional to n!) eventually always exceeds another\'s (proportional to 2ⁿ), for large enough input sizes.',
      explanation: 'An inequality induction proof, starting from the first input size where it becomes true, rigorously confirms this growth-rate comparison holds forever afterward.',
    },
    practiceQuestions: [
      {
        id: 'inequality-induction-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Verify the base case for "n! > 3ⁿ for n≥7" at n=7: what is 7! ?',
        hints: ['7! = 7×6×5×4×3×2×1.'],
        correctAnswer: 5040,
        explanation: '7! = 5040, and indeed 5040 > 3⁷ = 2187.',
      },
    ],
    commonMistake:
      'Assuming induction must always start at n=1 — the base case can start at any appropriate ' +
      'integer (like n=4 or n=7 above), as long as the inductive step still correctly carries the truth forward from there.',
    quickReview: [
      'The base case does not need to be n=1 — start wherever the inequality first becomes true.',
      'Multiplying both sides of a true inequality by a positive number preserves its direction.',
      'Use the inductive hypothesis plus algebra to build up to the inequality at k+1.',
    ],
  },
};
