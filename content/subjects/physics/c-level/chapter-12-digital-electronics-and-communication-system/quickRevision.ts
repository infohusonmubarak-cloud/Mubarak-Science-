import type { QuickRevision } from '@/types/content';

export const chapter12CDigitalQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'electronic-systems',
      keyPoint: 'Every system: input, process, output.',
      miniExample: 'A smoke detector: sensor, comparator, alarm.',
    },
    {
      conceptSlug: 'analog-and-digital-signals',
      keyPoint: 'Binary place values: 1, 2, 4, 8, 16 (powers of 2).',
      formulaSlug: 'binary-decimal-conversion-formula',
      miniExample: '1011 (binary) = 11 (decimal).',
    },
    {
      conceptSlug: 'logic-gates-and-truth-tables',
      keyPoint: 'AND: all inputs 1. OR: at least one input 1.',
      formulaSlug: 'logic-gate-equations-formula',
      miniExample: 'AND with A=1,B=0 gives Y=0.',
    },
    {
      conceptSlug: 'communication-systems-basics',
      keyPoint: 'Transmitter -> channel -> receiver.',
      miniExample: 'A radio station broadcasts through the air to a car radio.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'electronic-systems',
      keyPoint: 'Applies to devices of any internal complexity.',
      miniExample: 'A streetlight: light sensor, control circuit, relay.',
    },
    {
      conceptSlug: 'analog-and-digital-signals',
      keyPoint: 'Digital signals resist noise far better than analog.',
      formulaSlug: 'binary-decimal-conversion-formula',
      miniExample: 'The rightmost bit is always the smallest place value.',
    },
    {
      conceptSlug: 'logic-gates-and-truth-tables',
      keyPoint: 'Every digital circuit is built from combinations of basic gates.',
      formulaSlug: 'logic-gate-equations-formula',
      miniExample: 'A seatbelt-AND-brake interlock is exactly an AND gate.',
    },
    {
      conceptSlug: 'communication-systems-basics',
      keyPoint: 'Modulation encodes information onto a carrier wave.',
      miniExample: 'FM resists noise better than AM.',
    },
  ],
};
