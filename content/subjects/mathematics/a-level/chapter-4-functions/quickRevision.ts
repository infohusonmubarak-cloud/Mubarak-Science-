import type { QuickRevision } from '@/types/content';

export const chapter4QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'meaning-of-a-product-set',
      keyPoint: 'A × B = every ordered pair (a, b) with a ∈ A, b ∈ B.',
      miniExample: '{1,2} × {x,y} = {(1,x),(1,y),(2,x),(2,y)}.',
    },
    {
      conceptSlug: 'meaning-of-a-relation',
      keyPoint: 'A relation is any subset of A × B — domain = first coordinates, range = second.',
      miniExample: '{(1,2),(2,4)} has domain {1,2}, range {2,4}.',
    },
    {
      conceptSlug: 'meaning-of-a-function',
      keyPoint: 'A function: every input has exactly one output.',
      miniExample: '{(1,4),(1,5)} is not a function — 1 has two outputs.',
    },
    {
      conceptSlug: 'the-vertical-line-test',
      keyPoint: 'A graph is a function if no vertical line crosses it more than once.',
      miniExample: 'A circle fails the test — a vertical line crosses it twice.',
    },
    {
      conceptSlug: 'function-notation-and-evaluating-functions',
      keyPoint: 'f(x) is the output of f at input x — substitute and simplify.',
      miniExample: 'f(x)=2x²−3x+1 → f(4) = 21.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-a-product-set',
      keyPoint: 'A × B is the set of ordered pairs (a,b); order matters.',
      miniExample: '{1,2} × {x,y} = {(1,x),(1,y),(2,x),(2,y)}.',
    },
    {
      conceptSlug: 'cardinality-of-a-product-set',
      keyPoint: 'n(A × B) = n(A) × n(B).',
      formulaSlug: 'product-set-cardinality',
      miniExample: 'n(A)=5, n(B)=4 → n(A×B)=20.',
    },
    {
      conceptSlug: 'meaning-of-a-relation',
      keyPoint: 'A relation is any subset of A × B; domain/range come from the pairs used.',
      miniExample: '{(1,2),(2,4),(3,4)} → domain {1,2,3}, range {2,4}.',
    },
    {
      conceptSlug: 'representing-a-relation',
      keyPoint: 'The same relation can be a set of pairs, a table, an arrow diagram, or a graph.',
      miniExample: 'Table (1,5),(2,7),(3,9) → R={(1,5),(2,7),(3,9)}.',
    },
    {
      conceptSlug: 'meaning-of-a-function',
      keyPoint: 'A function: no input repeats with a different output.',
      miniExample: '{(1,4),(2,4),(3,5)} is a function.',
    },
    {
      conceptSlug: 'the-vertical-line-test',
      keyPoint: 'More than one crossing on any vertical line means it is not a function.',
      miniExample: 'A non-vertical straight line always passes the test.',
    },
    {
      conceptSlug: 'domain-and-range-of-a-function',
      keyPoint: 'Domain = valid inputs; range = resulting outputs. Watch for zero denominators.',
      miniExample: 'f(x)=1/(x−3) → domain excludes x=3.',
    },
    {
      conceptSlug: 'function-notation-and-evaluating-functions',
      keyPoint: 'f(x) names an output — substitute the input value for every x.',
      miniExample: 'g(x)=x²+2x → g(-3) = 3.',
    },
  ],
};
