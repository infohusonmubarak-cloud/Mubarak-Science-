import type { QuickRevision } from '@/types/content';

export const chapter11ElectronicsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'semiconductors',
      keyPoint: 'Semiconductors have controllable conductivity, often via doping (n-type/p-type).',
      miniExample: 'Silicon computer chips rely on precisely doped semiconductor regions.',
    },
    {
      conceptSlug: 'the-transistor',
      keyPoint: 'β = I_C/I_B; a small base current controls a much larger collector current.',
      formulaSlug: 'transistor-current-gain-formula',
      miniExample: 'β=100 and I_B=0.02 mA gives I_C = 2 mA.',
    },
    {
      conceptSlug: 'logic-gates-b-level',
      keyPoint: 'AND: all inputs HIGH → HIGH output. OR: at least one input HIGH → HIGH output.',
      miniExample: 'An alarm triggered only when BOTH sensors detect something uses an AND gate.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-integrated-circuit',
      keyPoint: 'An IC packs many components onto one chip, enabling small, cheap, reliable electronics.',
      miniExample: 'A smartphone processor holds billions of transistors on one chip.',
    },
  ],
};
