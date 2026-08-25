import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 5 — Matrices. Matches sections 5.1-5.4
// of the textbook exactly.
export const chapter5BConcepts: Record<string, Concept> = {
  'matrix-notation-and-definitions': {
    slug: 'matrix-notation-and-definitions',
    title: 'Matrix Notation and Definitions',
    difficulty: 'easy',
    simpleExplanation:
      'A matrix is a rectangular array of numbers arranged in rows and columns. Its order (or size) ' +
      'is written m×n, meaning m rows and n columns. Each number is called an entry (or element), ' +
      'identified by its row and column position, aᵢⱼ. Special types include the square matrix ' +
      '(same number of rows and columns), the zero matrix (every entry 0), and the identity matrix ' +
      '(1s down the main diagonal, 0s elsewhere).',
    whyItMatters:
      'Matrices organize large amounts of related numbers into one single object — the foundation ' +
      'for every operation and application covered in the rest of this chapter.',
    workedExample: {
      id: 'matrix-notation-worked-1',
      title: 'Identify a matrix\'s order and a specific entry',
      problemStatement: 'For the matrix A = [[3, 7, 1], [5, 2, 9]], state its order and find the entry a₂₃.',
      steps: [
        { step: 1, instruction: 'Count the rows and columns.', math: '2 rows, 3 columns', explanation: 'A has 2 rows and 3 columns.' },
        { step: 2, instruction: 'State the order.', math: 'Order: 2×3', explanation: 'Rows × columns, in that order.' },
        { step: 3, instruction: 'Find a₂₃ (row 2, column 3).', math: 'a₂₃ = 9', explanation: 'Row 2 is [5, 2, 9]; its 3rd entry is 9.' },
      ],
      finalAnswer: 'Order 2×3; a₂₃ = 9',
    },
    whyItWorks:
      'Matrix notation is simply a precise addressing system — writing aᵢⱼ unambiguously specifies ' +
      'exactly one entry, since every entry has a unique (row, column) position.',
    realLifeExample: {
      title: 'A spreadsheet of sales figures',
      scenario: 'A company records monthly sales for several products in a spreadsheet grid — rows for products, columns for months.',
      explanation: 'That spreadsheet grid is exactly a matrix — each cell is an entry addressed by its row and column, just like aᵢⱼ.',
    },
    practiceQuestions: [
      {
        id: 'matrix-notation-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the order of the matrix [[1,2],[3,4],[5,6]]?',
        options: [
          { id: 'a', text: '3×2' },
          { id: 'b', text: '2×3' },
          { id: 'c', text: '3×3' },
          { id: 'd', text: '6×1' },
        ],
        correctOptionId: 'a',
        hints: ['Count rows first, then columns.'],
        explanation: 'It has 3 rows and 2 columns, so its order is 3×2.',
      },
    ],
    commonMistake:
      'Reversing rows and columns in the order notation — m×n always means m ROWS first, then n ' +
      'COLUMNS, never the other way around.',
    quickReview: [
      'A matrix is a rectangular array of numbers; its order is (rows)×(columns).',
      'aᵢⱼ addresses the entry in row i, column j.',
      'Special types: square, zero, and identity matrices.',
    ],
  },

  'matrix-addition-and-subtraction': {
    slug: 'matrix-addition-and-subtraction',
    title: 'Matrix Addition and Subtraction',
    difficulty: 'medium',
    simpleExplanation:
      'To add or subtract two matrices, add or subtract the entries in matching positions. This ' +
      'only works when both matrices have exactly the same order — you cannot add matrices of different sizes.',
    whyItMatters:
      'Matrix addition combines data stored in matrix form directly and simply, without needing to ' +
      'track individual values separately.',
    formulaSlug: 'matrix-addition-subtraction-rule',
    workedExample: {
      id: 'matrix-addition-worked-1',
      title: 'Add two matrices',
      problemStatement: 'Find A + B, where A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].',
      steps: [
        { step: 1, instruction: 'Confirm both matrices have the same order.', math: 'Both are 2×2', explanation: 'Addition is only defined for matrices of matching order.' },
        { step: 2, instruction: 'Add entries in matching positions.', math: '1+5, 2+6, 3+7, 4+8', explanation: 'Add each pair of corresponding entries.' },
        { step: 3, instruction: 'Write the result.', math: 'A+B = [[6, 8], [10, 12]]', explanation: 'Collect the sums into the result matrix.' },
      ],
      finalAnswer: 'A + B = [[6, 8], [10, 12]]',
    },
    whyItWorks:
      'Since a matrix is simply a labeled collection of individually-positioned numbers, adding two ' +
      'matrices of the same order is defined to mean adding the numbers that share the exact same label (position) — there is no other sensible way to combine two grids of numbers position-for-position.',
    realLifeExample: {
      title: 'Combining two months\' sales figures',
      scenario: 'A company has one matrix of sales figures for January and another, same-shaped matrix for February.',
      explanation: 'Adding the two matrices gives the combined two-month sales for every product, entry by entry, in one operation.',
    },
    practiceQuestions: [
      {
        id: 'matrix-addition-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Find A − B, where A = [[8, 3], [2, 6]] and B = [[5, 1], [4, 2]].',
        options: [
          { id: 'a', text: '[[3, 2], [−2, 4]]' },
          { id: 'b', text: '[[13, 4], [6, 8]]' },
          { id: 'c', text: '[[3, 2], [2, 4]]' },
          { id: 'd', text: '[[−3, −2], [2, −4]]' },
        ],
        correctOptionId: 'a',
        hints: ['Subtract matching entries: 8−5, 3−1, 2−4, 6−2.'],
        explanation: 'A−B = [[8−5, 3−1], [2−4, 6−2]] = [[3, 2], [−2, 4]].',
      },
    ],
    commonMistake:
      'Trying to add matrices of different orders — matrix addition is undefined unless both ' +
      'matrices have exactly the same number of rows and the same number of columns.',
    quickReview: [
      '(A±B)ᵢⱼ = Aᵢⱼ ± Bᵢⱼ.',
      'Only defined for matrices of the exact same order.',
      'Add/subtract entries in matching positions.',
    ],
  },

  'scalar-multiplication-of-a-matrix': {
    slug: 'scalar-multiplication-of-a-matrix',
    title: 'Scalar Multiplication of a Matrix',
    difficulty: 'medium',
    simpleExplanation:
      'To multiply a matrix by a scalar (an ordinary number, not another matrix), multiply every ' +
      'single entry by that number.',
    whyItMatters:
      'Scalar multiplication lets you scale an entire matrix of data uniformly — useful whenever ' +
      'every value in a dataset needs to be adjusted by the same factor.',
    formulaSlug: 'scalar-multiplication-rule',
    workedExample: {
      id: 'scalar-mult-worked-1',
      title: 'Multiply a matrix by a scalar',
      problemStatement: 'Find 3A, where A = [[2, −1], [3, 4]].',
      steps: [
        { step: 1, instruction: 'Multiply every entry by 3.', math: '3×2, 3×(−1), 3×3, 3×4', explanation: 'The scalar multiplies each entry individually.' },
        { step: 2, instruction: 'Evaluate each product.', math: '6, −3, 9, 12', explanation: 'Compute each multiplication.' },
        { step: 3, instruction: 'Write the result.', math: '3A = [[6, −3], [9, 12]]', explanation: 'Collect the results into the scaled matrix.' },
      ],
      finalAnswer: '3A = [[6, −3], [9, 12]]',
    },
    whyItWorks:
      'Scalar multiplication is defined entry-by-entry so that it matches the natural idea of ' +
      '"doubling" or "scaling" a whole dataset uniformly — every value grows (or shrinks) by exactly the same factor.',
    realLifeExample: {
      title: 'Applying a uniform tax rate across all figures',
      scenario: 'A finance team needs to apply a fixed percentage adjustment to every value in a matrix of budget figures.',
      explanation: 'Multiplying the whole matrix by the scale factor applies the adjustment to every entry simultaneously, in one operation.',
    },
    practiceQuestions: [
      {
        id: 'scalar-mult-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Find −2B, where B = [[1, 5], [−3, 0]].',
        options: [
          { id: 'a', text: '[[−2, −10], [6, 0]]' },
          { id: 'b', text: '[[2, 10], [−6, 0]]' },
          { id: 'c', text: '[[−2, −10], [−6, 0]]' },
          { id: 'd', text: '[[−2, 10], [6, 0]]' },
        ],
        correctOptionId: 'a',
        hints: ['Multiply every entry by −2.'],
        explanation: '−2×1=−2, −2×5=−10, −2×(−3)=6, −2×0=0.',
      },
    ],
    commonMistake:
      'Only multiplying some of the entries (like just the first row) instead of every single entry ' +
      'in the matrix — scalar multiplication always applies to the entire matrix.',
    quickReview: [
      '(kA)ᵢⱼ = k·Aᵢⱼ.',
      'Multiply every entry of the matrix by the scalar.',
      'Useful for uniformly scaling an entire dataset.',
    ],
  },

  'matrix-multiplication': {
    slug: 'matrix-multiplication',
    title: 'Matrix Multiplication',
    difficulty: 'hard',
    simpleExplanation:
      'Multiplying two matrices is not done entry-by-entry like addition. Instead, each entry of ' +
      'the product AB comes from "dotting" a row of A with a column of B — multiplying corresponding ' +
      'entries and adding the results. Matrix multiplication is only defined when the number of ' +
      'columns of A equals the number of rows of B.',
    whyItMatters:
      'Matrix multiplication is the operation behind solving systems of equations, transforming ' +
      'coordinates (rotations, scalings), and combining sequences of linear operations — genuinely ' +
      'different, and far more powerful, than simply multiplying corresponding entries.',
    formulaSlug: 'matrix-multiplication-rule',
    workedExample: {
      id: 'matrix-mult-worked-1',
      title: 'Multiply two 2×2 matrices',
      problemStatement: 'Find AB, where A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].',
      steps: [
        { step: 1, instruction: 'Confirm compatibility.', math: 'A is 2×2, B is 2×2', explanation: 'Columns of A (2) = rows of B (2) — multiplication is defined.' },
        { step: 2, instruction: 'Find entry (1,1): row 1 of A dotted with column 1 of B.', math: '(1×5) + (2×7) = 5+14 = 19', explanation: 'Multiply and add.' },
        { step: 3, instruction: 'Find entry (1,2): row 1 of A dotted with column 2 of B.', math: '(1×6) + (2×8) = 6+16 = 22', explanation: 'Same row, next column.' },
        { step: 4, instruction: 'Find entries (2,1) and (2,2) the same way.', math: '(3×5)+(4×7)=43;  (3×6)+(4×8)=50', explanation: 'Row 2 of A with each column of B.' },
      ],
      finalAnswer: 'AB = [[19, 22], [43, 50]]',
    },
    whyItWorks:
      'This "row-dotted-with-column" rule is defined precisely because it mirrors how a system of ' +
      'linear equations transforms one set of variables into another — each output entry combines ' +
      'a full row\'s worth of one matrix\'s coefficients with a full column\'s worth of the other\'s ' +
      'values, exactly matching how substituting one linear expression into another combines terms.',
    realLifeExample: {
      title: 'Combining ingredient costs across recipes',
      scenario: 'One matrix lists how much of each ingredient several recipes need; another lists the cost of each ingredient. Multiplying them gives the total cost of each recipe.',
      explanation: 'Each recipe\'s total cost is exactly a "row dotted with a column" — quantities matched with costs and summed — precisely matrix multiplication.',
    },
    practiceQuestions: [
      {
        id: 'matrix-mult-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For A = [[2, 0], [1, 3]] and B = [[4, 1], [2, 5]], find the (1,1) entry of AB.',
        hints: ['Row 1 of A: [2, 0]. Column 1 of B: [4, 2].', '(2×4) + (0×2).'],
        correctAnswer: 8,
        explanation: '(2×4) + (0×2) = 8 + 0 = 8.',
      },
    ],
    commonMistake:
      'Multiplying matrices entry-by-entry (like addition) instead of using the row-times-column ' +
      'rule — matrix multiplication is a fundamentally different operation from addition, not just "addition with × instead of +."',
    quickReview: [
      '(AB)ᵢⱼ = row i of A "dotted" with column j of B.',
      'Only defined when columns of A = rows of B.',
      'AB generally does NOT equal BA — matrix multiplication is not commutative.',
    ],
  },

  'the-determinant-of-a-2x2-matrix': {
    slug: 'the-determinant-of-a-2x2-matrix',
    title: 'The Determinant of a 2×2 Matrix',
    difficulty: 'medium',
    simpleExplanation:
      'The determinant of a 2×2 matrix A = [[a,b],[c,d]] is the single number ad − bc, written ' +
      'det(A) or |A|. A matrix has an inverse exactly when its determinant is nonzero.',
    whyItMatters:
      'The determinant is a fast diagnostic check for whether a matrix can be inverted at all, and ' +
      'it is the key ingredient in the inverse formula itself.',
    formulaSlug: 'determinant-of-2x2-formula',
    workedExample: {
      id: 'determinant-worked-1',
      title: 'Evaluate a determinant',
      problemStatement: 'Find the determinant of A = [[3, 4], [2, 5]].',
      steps: [
        { step: 1, instruction: 'Identify a, b, c, d.', math: 'a=3, b=4, c=2, d=5', explanation: 'Read the entries in order.' },
        { step: 2, instruction: 'Apply the determinant formula.', math: 'det(A) = ad − bc = (3)(5) − (4)(2)', explanation: 'Multiply the diagonal pairs.' },
        { step: 3, instruction: 'Evaluate.', math: '15 − 8 = 7', explanation: 'Subtract.' },
      ],
      finalAnswer: 'det(A) = 7',
    },
    whyItWorks:
      'The determinant measures how a matrix scales area when used as a geometric transformation — ' +
      'when det(A)=0, the transformation squashes every shape down to a line or a point (losing a ' +
      'dimension), which is exactly the situation where the transformation cannot be undone (no inverse exists).',
    realLifeExample: {
      title: 'Checking whether a system of equations has a unique solution',
      scenario: 'Before attempting to solve a system of two linear equations using matrices, it helps to know in advance whether a unique solution even exists.',
      explanation: 'Computing the determinant of the coefficient matrix instantly reveals this — nonzero means a unique solution exists; zero means it does not (no solution, or infinitely many).',
    },
    practiceQuestions: [
      {
        id: 'determinant-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the determinant of [[6, 2], [5, 3]].',
        hints: ['det = (6)(3) − (2)(5).'],
        correctAnswer: 8,
        explanation: '18 − 10 = 8.',
      },
    ],
    commonMistake:
      'Computing bc − ad instead of ad − bc — the order matters; always multiply the main diagonal ' +
      '(top-left × bottom-right) first, then subtract the off-diagonal product.',
    quickReview: [
      'det(A) = ad − bc, for A = [[a,b],[c,d]].',
      'A matrix has an inverse exactly when det(A) ≠ 0.',
      'The first step in finding a 2×2 matrix\'s inverse.',
    ],
  },

  'the-inverse-of-a-2x2-matrix': {
    slug: 'the-inverse-of-a-2x2-matrix',
    title: 'The Inverse of a 2×2 Matrix',
    difficulty: 'hard',
    simpleExplanation:
      'The inverse of a matrix A, written A⁻¹, is the matrix that "undoes" A — multiplying A by A⁻¹ ' +
      '(in either order) gives the identity matrix. For a 2×2 matrix, A⁻¹ is found by swapping the ' +
      'main diagonal entries, negating the other two, and dividing everything by the determinant.',
    whyItMatters:
      'The inverse plays the same role for matrices that reciprocals play for ordinary numbers — it ' +
      'is the key tool for "dividing" by a matrix, most importantly to solve matrix equations.',
    formulaSlug: 'inverse-of-2x2-formula',
    workedExample: {
      id: 'inverse-worked-1',
      title: 'Find the inverse of a 2×2 matrix',
      problemStatement: 'Find the inverse of A = [[4, 7], [2, 6]].',
      steps: [
        { step: 1, instruction: 'Compute the determinant.', math: 'det(A) = (4)(6) − (7)(2) = 24 − 14 = 10', explanation: 'Apply the determinant formula first.' },
        { step: 2, instruction: 'Swap the diagonal entries and negate the off-diagonal entries.', math: '[[6, −7], [−2, 4]]', explanation: 'This is the "adjugate" matrix.' },
        { step: 3, instruction: 'Divide every entry by the determinant.', math: 'A⁻¹ = (1/10)[[6, −7], [−2, 4]]', explanation: 'Scalar-multiply by 1/det(A).' },
        { step: 4, instruction: 'Write out the final entries.', math: 'A⁻¹ = [[0.6, −0.7], [−0.2, 0.4]]', explanation: 'Divide each entry by 10.' },
      ],
      finalAnswer: 'A⁻¹ = [[0.6, −0.7], [−0.2, 0.4]]',
    },
    whyItWorks:
      'Multiplying the original matrix by this constructed inverse, A · A⁻¹, can be checked directly ' +
      'to always produce the identity matrix [[1,0],[0,1]] — the swap-and-negate pattern combined with ' +
      'dividing by ad−bc is specifically engineered so that the row-times-column products cancel out to exactly this result.',
    realLifeExample: {
      title: 'Decoding an encrypted message',
      scenario: 'Simple matrix-based encryption multiplies a message by a matrix to scramble it; decoding requires the inverse matrix.',
      explanation: 'Multiplying the scrambled message by the encryption matrix\'s inverse exactly reverses the encryption, recovering the original message.',
    },
    practiceQuestions: [
      {
        id: 'inverse-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Find the inverse of [[2, 3], [1, 4]]. (det = 8−3 = 5.)',
        options: [
          { id: 'a', text: '(1/5)[[4, −3], [−1, 2]]' },
          { id: 'b', text: '(1/5)[[4, 3], [1, 2]]' },
          { id: 'c', text: '(1/5)[[2, −3], [−1, 4]]' },
          { id: 'd', text: '5[[4, −3], [−1, 2]]' },
        ],
        correctOptionId: 'a',
        hints: ['Swap the diagonal (2 and 4), negate the off-diagonal (3 and 1), divide by det=5.'],
        explanation: 'Swap 2↔4, negate 3 and 1: [[4,−3],[−1,2]], then divide by det=5.',
      },
    ],
    commonMistake:
      'Forgetting that a matrix with det(A) = 0 has NO inverse at all — always check the determinant ' +
      'is nonzero before attempting to find an inverse.',
    quickReview: [
      'A⁻¹ = (1/det(A)) · [[d,−b],[−c,a]], for A=[[a,b],[c,d]].',
      'Swap the diagonal entries, negate the off-diagonal entries, divide by det(A).',
      'Only exists when det(A) ≠ 0.',
    ],
  },

  'solving-simultaneous-equations-using-matrices': {
    slug: 'solving-simultaneous-equations-using-matrices',
    title: 'Solving Simultaneous Equations Using Matrices',
    difficulty: 'hard',
    simpleExplanation:
      'A system of two linear equations can be written as a single matrix equation, AX = B, where A ' +
      'holds the coefficients, X holds the unknowns, and B holds the constants. Multiplying both ' +
      'sides by A⁻¹ solves the whole system at once: X = A⁻¹B.',
    whyItMatters:
      'This method solves an entire system of equations — potentially with many variables — using ' +
      'exactly the same two steps (find A⁻¹, then multiply) every time, rather than needing a ' +
      'different elimination or substitution strategy for each new system.',
    formulaSlug: 'inverse-of-2x2-formula',
    workedExample: {
      id: 'matrix-equations-worked-1',
      title: 'Solve a system of equations using matrices',
      problemStatement: 'Solve the system x + 2y = 4 and 3x + 5y = 11 using matrices.',
      steps: [
        { step: 1, instruction: 'Write the system as a matrix equation, AX = B.', math: 'A=[[1,2],[3,5]],  X=[[x],[y]],  B=[[4],[11]]', explanation: 'A holds the coefficients, B the constants.' },
        { step: 2, instruction: 'Find A⁻¹.', math: 'det(A) = 5−6 = −1;  A⁻¹ = (1/−1)[[5,−2],[−3,1]] = [[−5,2],[3,−1]]', explanation: 'Apply the inverse formula.' },
        { step: 3, instruction: 'Compute X = A⁻¹B.', math: 'x = (−5)(4)+(2)(11) = −20+22 = 2', explanation: 'Row 1 of A⁻¹ dotted with B.' },
        { step: 4, instruction: 'Compute the second entry.', math: 'y = (3)(4)+(−1)(11) = 12−11 = 1', explanation: 'Row 2 of A⁻¹ dotted with B.' },
      ],
      finalAnswer: 'x = 2, y = 1',
    },
    whyItWorks:
      'Multiplying both sides of AX=B by A⁻¹ on the left gives A⁻¹AX = A⁻¹B — and since A⁻¹A is ' +
      'always the identity matrix I (by definition of the inverse), and IX = X for any matrix X, ' +
      'this simplifies directly to X = A⁻¹B, isolating the unknowns in one step.',
    realLifeExample: {
      title: 'Balancing a mixture recipe',
      scenario: 'A chemist needs to find the exact amounts of two solutions to mix to hit two separate target concentrations, described by two simultaneous equations.',
      explanation: 'Writing the constraints as a matrix equation and solving with X=A⁻¹B gives the exact required amounts directly, especially useful when scaled up to many simultaneous constraints.',
    },
    practiceQuestions: [
      {
        id: 'matrix-equations-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Solve 2x + y = 7 and x + 3y = 11 using matrices. Find x. (Hint: A=[[2,1],[1,3]], det=5.)',
        hints: ['A⁻¹ = (1/5)[[3,−1],[−1,2]].', 'x = (1/5)[(3)(7) + (−1)(11)].'],
        correctAnswer: 2,
        explanation: 'x = (1/5)(21−11) = 10/5 = 2. (And y=3, checking: 2(2)+3=7 ✓, 2+3(3)=11 ✓.)',
      },
    ],
    commonMistake:
      'Multiplying by A⁻¹ on the wrong side, or in the wrong order (BA⁻¹ instead of A⁻¹B) — matrix ' +
      'multiplication is not commutative, so A⁻¹ must be multiplied on the LEFT of both sides, consistently.',
    quickReview: [
      'Write the system as AX = B, then solve with X = A⁻¹B.',
      'Works because A⁻¹A = I, the identity matrix, which leaves X unchanged.',
      'Multiply A⁻¹ on the same side (left) of both A and B, consistently.',
    ],
  },
};
