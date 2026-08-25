import type { QuickRevision } from '@/types/content';

export const chapter5BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'matrix-addition-and-subtraction',
      keyPoint: 'Add/subtract matching entries. Requires same order.',
      formulaSlug: 'matrix-addition-subtraction-rule',
      miniExample: '[[1,2],[3,4]]+[[5,6],[7,8]]=[[6,8],[10,12]].',
    },
    {
      conceptSlug: 'matrix-multiplication',
      keyPoint: '(AB)ᵢⱼ = row i of A · column j of B.',
      formulaSlug: 'matrix-multiplication-rule',
      miniExample: '[[1,2],[3,4]]×[[5,6],[7,8]]=[[19,22],[43,50]].',
    },
    {
      conceptSlug: 'the-determinant-of-a-2x2-matrix',
      keyPoint: 'det(A) = ad − bc.',
      formulaSlug: 'determinant-of-2x2-formula',
      miniExample: '[[3,4],[2,5]] → det=7.',
    },
    {
      conceptSlug: 'the-inverse-of-a-2x2-matrix',
      keyPoint: 'A⁻¹ = (1/det A)[[d,−b],[−c,a]].',
      formulaSlug: 'inverse-of-2x2-formula',
      miniExample: '[[4,7],[2,6]] → A⁻¹=(1/10)[[6,−7],[−2,4]].',
    },
    {
      conceptSlug: 'solving-simultaneous-equations-using-matrices',
      keyPoint: 'AX=B → X=A⁻¹B.',
      formulaSlug: 'inverse-of-2x2-formula',
      miniExample: 'x+2y=4, 3x+5y=11 → x=2,y=1.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'matrix-notation-and-definitions',
      keyPoint: 'Order = rows×columns. aᵢⱼ addresses row i, column j.',
      miniExample: '2×3 matrix, a₂₃ = last entry of row 2.',
    },
    {
      conceptSlug: 'matrix-addition-and-subtraction',
      keyPoint: 'Only defined for matrices of the same order.',
      formulaSlug: 'matrix-addition-subtraction-rule',
      miniExample: '[[8,3],[2,6]]−[[5,1],[4,2]]=[[3,2],[−2,4]].',
    },
    {
      conceptSlug: 'scalar-multiplication-of-a-matrix',
      keyPoint: 'Multiply every entry by the scalar.',
      formulaSlug: 'scalar-multiplication-rule',
      miniExample: '3×[[2,−1],[3,4]]=[[6,−3],[9,12]].',
    },
    {
      conceptSlug: 'matrix-multiplication',
      keyPoint: 'Columns of A must equal rows of B. AB ≠ BA generally.',
      formulaSlug: 'matrix-multiplication-rule',
      miniExample: '(AB)₁₁ = row1·col1.',
    },
    {
      conceptSlug: 'the-determinant-of-a-2x2-matrix',
      keyPoint: 'Nonzero det ⇔ matrix has an inverse.',
      formulaSlug: 'determinant-of-2x2-formula',
      miniExample: '[[6,2],[5,3]] → det=8.',
    },
    {
      conceptSlug: 'the-inverse-of-a-2x2-matrix',
      keyPoint: 'Swap diagonal, negate off-diagonal, divide by det.',
      formulaSlug: 'inverse-of-2x2-formula',
      miniExample: '[[2,3],[1,4]] → (1/5)[[4,−3],[−1,2]].',
    },
    {
      conceptSlug: 'solving-simultaneous-equations-using-matrices',
      keyPoint: 'X=A⁻¹B works because A⁻¹A=I.',
      formulaSlug: 'inverse-of-2x2-formula',
      miniExample: '2x+y=7, x+3y=11 → x=2, y=3.',
    },
  ],
};
