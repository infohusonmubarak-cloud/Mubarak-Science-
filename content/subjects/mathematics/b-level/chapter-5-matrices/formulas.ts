import type { Formula } from '@/types/content';

export const chapter5BFormulas: Record<string, Formula> = {
  'matrix-addition-subtraction-rule': {
    slug: 'matrix-addition-subtraction-rule',
    name: 'Matrix Addition and Subtraction',
    expression: '(A ± B)ᵢⱼ = Aᵢⱼ ± Bᵢⱼ',
    meaning: 'To add or subtract two matrices, add or subtract the entries that sit in the exact same position — this only works when both matrices have identical order (same number of rows and columns).',
    variables: [
      { symbol: 'Aᵢⱼ', meaning: 'the entry of matrix A in row i, column j' },
      { symbol: 'Bᵢⱼ', meaning: 'the entry of matrix B in the same position' },
    ],
    whenToUse: 'Whenever you need to add or subtract two matrices of the same order.',
    relatedConceptSlugs: ['matrix-addition-and-subtraction'],
  },
  'scalar-multiplication-rule': {
    slug: 'scalar-multiplication-rule',
    name: 'Scalar Multiplication of a Matrix',
    expression: '(kA)ᵢⱼ = k · Aᵢⱼ',
    meaning: 'To multiply a matrix by a scalar (an ordinary number), multiply every single entry of the matrix by that number.',
    variables: [
      { symbol: 'k', meaning: 'the scalar (a plain number)' },
      { symbol: 'Aᵢⱼ', meaning: 'the entry of matrix A in row i, column j' },
    ],
    whenToUse: 'Whenever a whole matrix needs to be scaled up or down by a constant factor.',
    relatedConceptSlugs: ['scalar-multiplication-of-a-matrix'],
  },
  'matrix-multiplication-rule': {
    slug: 'matrix-multiplication-rule',
    name: 'Matrix Multiplication',
    expression: '(AB)ᵢⱼ = Σₖ Aᵢₖ · Bₖⱼ   (row i of A "dotted" with column j of B)',
    meaning: 'Each entry of the product matrix AB comes from multiplying corresponding entries of a row of A with a column of B, and adding the results — matrix multiplication requires the number of columns of A to equal the number of rows of B.',
    variables: [
      { symbol: '(AB)ᵢⱼ', meaning: 'the entry of the product AB in row i, column j' },
      { symbol: 'Aᵢₖ', meaning: 'the entries along row i of matrix A' },
      { symbol: 'Bₖⱼ', meaning: 'the entries down column j of matrix B' },
    ],
    whenToUse: 'Whenever two compatible matrices (columns of the first = rows of the second) need to be multiplied together.',
    relatedConceptSlugs: ['matrix-multiplication'],
  },
  'determinant-of-2x2-formula': {
    slug: 'determinant-of-2x2-formula',
    name: 'Determinant of a 2×2 Matrix',
    expression: 'For A = [[a, b], [c, d]]:   det(A) = ad − bc',
    meaning: 'A single number computed from a 2×2 matrix that reveals whether the matrix has an inverse — a matrix has an inverse exactly when its determinant is nonzero.',
    variables: [
      { symbol: 'a, b, c, d', meaning: 'the four entries of the 2×2 matrix, read left-to-right, top-to-bottom' },
      { symbol: 'det(A)', meaning: 'the determinant of A, also written |A|' },
    ],
    whenToUse: 'Whenever you need to check if a 2×2 matrix has an inverse, or as the first step of computing that inverse.',
    relatedConceptSlugs: ['the-determinant-of-a-2x2-matrix'],
  },
  'inverse-of-2x2-formula': {
    slug: 'inverse-of-2x2-formula',
    name: 'Inverse of a 2×2 Matrix',
    expression: 'For A = [[a, b], [c, d]]:   A⁻¹ = (1/det(A)) · [[d, −b], [−c, a]]   (det(A) ≠ 0)',
    meaning: 'The inverse of a 2×2 matrix — swap the two diagonal entries, negate the two off-diagonal entries, then divide every entry by the determinant.',
    variables: [
      { symbol: 'A⁻¹', meaning: 'the inverse of A, satisfying A·A⁻¹ = A⁻¹·A = I (the identity matrix)' },
      { symbol: 'det(A)', meaning: 'the determinant, ad − bc (must be nonzero)' },
    ],
    whenToUse: 'Whenever you need to "undo" a 2×2 matrix\'s effect, or solve a matrix equation of the form AX = B.',
    relatedConceptSlugs: ['the-inverse-of-a-2x2-matrix', 'solving-simultaneous-equations-using-matrices'],
  },
};
