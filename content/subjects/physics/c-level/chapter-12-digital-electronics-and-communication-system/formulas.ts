import type { Formula } from '@/types/content';

export const chapter12CDigitalFormulas: Record<string, Formula> = {
  'binary-decimal-conversion-formula': {
    slug: 'binary-decimal-conversion-formula',
    name: 'Binary-to-Decimal Conversion',
    expression: 'decimal = sum of (bit_i times 2 raised to the power i)',
    meaning: 'A binary number represents a value using only 0s and 1s, where each digit (bit) stands for a power of 2 based on its position — converting to decimal means adding up the value of every position holding a 1.',
    variables: [
      { symbol: 'bit_i', meaning: 'the digit (0 or 1) at position i, counted from the rightmost digit (position 0)' },
      { symbol: '2 raised to the power i', meaning: 'the place value of that position (1, 2, 4, 8, 16, ...)' },
    ],
    whenToUse: 'Whenever a binary number (used internally by digital electronics) needs to be converted into an ordinary decimal number, or vice versa.',
    relatedConceptSlugs: ['analog-and-digital-signals'],
  },
  'logic-gate-equations-formula': {
    slug: 'logic-gate-equations-formula',
    name: 'Basic Logic Gate Equations',
    expression: 'AND: Y = A AND B;   OR: Y = A OR B;   NOT: Y = NOT A',
    meaning: 'Logic gates are the basic building blocks of digital circuits, each following a fixed rule for combining binary (0 or 1) inputs into a binary output.',
    variables: [
      { symbol: 'A, B', meaning: 'binary inputs (0 or 1)' },
      { symbol: 'Y', meaning: 'the binary output (0 or 1)' },
    ],
    whenToUse: 'Whenever the output of a basic logic gate needs to be found for given binary inputs.',
    relatedConceptSlugs: ['logic-gates-and-truth-tables'],
  },
};
