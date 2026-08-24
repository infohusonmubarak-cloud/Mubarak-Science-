import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9ElectricFieldTopics } from './topics';
import { chapter9ElectricFieldQuickRevision } from './quickRevision';
import { chapter9ElectricFieldAssessment } from './assessment';

export { chapter9ElectricFieldConcepts } from './concepts';
export { chapter9ElectricFieldFormulas } from './formulas';
export { chapter9ElectricFieldQuickRevision } from './quickRevision';
export { chapter9ElectricFieldTopics } from './topics';
export { chapter9ElectricFieldAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/electric-field';

const chapter9ElectricFieldConceptMap: ConceptMapNode = {
  label: 'Electric Field',
  children: [
    {
      label: "Coulomb's Law",
      children: [{ label: "Coulomb's Law", href: `${BASE}/coulombs-law` }],
    },
    {
      label: 'Electric Field, Intensity and Lines of Force',
      children: [
        { label: 'Electric Field and Field Intensity', href: `${BASE}/electric-field-and-field-intensity` },
        { label: 'Electric Lines of Force', href: `${BASE}/electric-lines-of-force` },
        { label: 'Electric Charge Distribution', href: `${BASE}/electric-charge-distribution` },
      ],
    },
    {
      label: 'Electric Potential and Potential Difference',
      children: [
        { label: 'Electric Potential and PD', href: `${BASE}/electric-potential-and-potential-difference` },
        { label: 'Equipotential Surfaces', href: `${BASE}/equipotential-surfaces` },
        { label: 'Electric Potential of the Earth', href: `${BASE}/electric-potential-of-the-earth` },
        { label: 'PD Between Parallel Plates', href: `${BASE}/potential-difference-between-parallel-plates` },
      ],
    },
  ],
};

export const chapter9ElectricField: Chapter = {
  slug: 'electric-field',
  number: 9,
  title: 'Electric Field',
  blurb: "Coulomb's law, electric field intensity, lines of force, charge distribution, electric potential and potential difference, and equipotential surfaces.",
  status: 'available',
  topics: chapter9ElectricFieldTopics,
  quickRevision: chapter9ElectricFieldQuickRevision,
  assessment: chapter9ElectricFieldAssessment,
  conceptMap: chapter9ElectricFieldConceptMap,
};
