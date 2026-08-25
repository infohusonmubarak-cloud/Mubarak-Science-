import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3CFluidTopics } from './topics';
import { chapter3CFluidQuickRevision } from './quickRevision';
import { chapter3CFluidAssessment } from './assessment';

export { chapter3CFluidConcepts } from './concepts';
export { chapter3CFluidFormulas } from './formulas';
export { chapter3CFluidQuickRevision } from './quickRevision';
export { chapter3CFluidTopics } from './topics';
export { chapter3CFluidAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/fluid-dynamics';

const chapter3CFluidConceptMap: ConceptMapNode = {
  label: 'Fluid Dynamics',
  children: [
    {
      label: '3.1 Laminar and Turbulent Flow',
      children: [{ label: 'Laminar and Turbulent Flow', href: `${BASE}/laminar-and-turbulent-flow` }],
    },
    {
      label: '3.2 Equation of Continuity for Fluids',
      children: [{ label: 'Equation of Continuity', href: `${BASE}/equation-of-continuity` }],
    },
    {
      label: "3.3 Bernoulli's Equation",
      children: [{ label: "Bernoulli's Equation", href: `${BASE}/bernoullis-equation` }],
    },
    {
      label: "3.4 Manifestations of Bernoulli's Theorem",
      children: [{ label: "Manifestations of Bernoulli's Theorem", href: `${BASE}/bernoulli-theorem-applications` }],
    },
    {
      label: '3.5 Viscosity (Fluid Friction)',
      children: [{ label: 'Viscosity (Fluid Friction)', href: `${BASE}/viscosity-and-fluid-friction` }],
    },
    {
      label: '3.6 Surface Tension and Capillarity',
      children: [
        { label: 'Surface Tension', href: `${BASE}/surface-tension` },
        { label: 'Capillarity', href: `${BASE}/capillarity` },
      ],
    },
  ],
};

export const chapter3CFluid: Chapter = {
  slug: 'fluid-dynamics',
  number: 3,
  title: 'Fluid Dynamics',
  blurb: "Laminar vs. turbulent flow, the continuity equation, Bernoulli's equation and its applications, viscosity, and surface tension.",
  status: 'available',
  topics: chapter3CFluidTopics,
  quickRevision: chapter3CFluidQuickRevision,
  assessment: chapter3CFluidAssessment,
  conceptMap: chapter3CFluidConceptMap,
};
