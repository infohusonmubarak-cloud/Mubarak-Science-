import type { Chapter } from '@/types/content';
import { chapter1BondingTopics } from './topics';
import { chapter1BondingQuickRevision } from './quickRevision';
import { chapter1BondingAssessment } from './assessment';

export { chapter1BondingConcepts } from './concepts';
export { chapter1BondingFormulas } from './formulas';
export { chapter1BondingQuickRevision } from './quickRevision';
export { chapter1BondingTopics } from './topics';
export { chapter1BondingAssessment } from './assessment';

export const chapter1Bonding: Chapter = {
  slug: 'chemical-bonding-and-intermolecular-forces',
  number: 1,
  title: 'Chemical Bonding and Intermolecular Forces',
  blurb:
    'How and why atoms bond — ionic, covalent, and metallic bonding, electronegativity and bond ' +
    'polarity, and the intermolecular forces (van der Waals, hydrogen bonding) that act between molecules.',
  status: 'available',
  topics: chapter1BondingTopics,
  quickRevision: chapter1BondingQuickRevision,
  assessment: chapter1BondingAssessment,
};
