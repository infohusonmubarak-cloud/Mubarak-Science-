import type { Chapter } from '@/types/content';
import { chapter2EnergyTopics } from './topics';
import { chapter2EnergyQuickRevision } from './quickRevision';
import { chapter2EnergyAssessment } from './assessment';

export { chapter2EnergyConcepts } from './concepts';
export { chapter2EnergyFormulas } from './formulas';
export { chapter2EnergyQuickRevision } from './quickRevision';
export { chapter2EnergyTopics } from './topics';
export { chapter2EnergyAssessment } from './assessment';

export const chapter2Energy: Chapter = {
  slug: 'energy-changes-in-chemical-reactions',
  number: 2,
  title: 'Energy Changes in Chemical Reactions',
  blurb:
    "Energy changes, exothermic and endothermic reactions, enthalpy diagrams, standard enthalpy, and " +
    "using Hess's law to calculate enthalpy changes indirectly.",
  status: 'available',
  topics: chapter2EnergyTopics,
  quickRevision: chapter2EnergyQuickRevision,
  assessment: chapter2EnergyAssessment,
};
