import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2RotationalDynamicsTopics } from './topics';
import { chapter2RotationalDynamicsQuickRevision } from './quickRevision';
import { chapter2RotationalDynamicsAssessment } from './assessment';

export { chapter2RotationalDynamicsConcepts } from './concepts';
export { chapter2RotationalDynamicsFormulas } from './formulas';
export { chapter2RotationalDynamicsQuickRevision } from './quickRevision';
export { chapter2RotationalDynamicsTopics } from './topics';
export { chapter2RotationalDynamicsAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/rotational-dynamics';

const chapter2RotationalDynamicsConceptMap: ConceptMapNode = {
  label: 'Rotational Dynamics',
  children: [
    {
      label: 'Scalar Product and Vector Product',
      children: [
        { label: 'Scalar (Dot) Product', href: `${BASE}/scalar-product-of-vectors` },
        { label: 'Vector (Cross) Product', href: `${BASE}/vector-product-of-vectors` },
      ],
    },
    {
      label: 'Turning Effect of Force',
      children: [{ label: 'Torque', href: `${BASE}/torque-and-turning-effect` }],
    },
    {
      label: 'Torque and Moment of Inertia',
      children: [
        { label: 'Moment of Inertia', href: `${BASE}/moment-of-inertia` },
        { label: 'Torque-Moment of Inertia Relation', href: `${BASE}/torque-moment-of-inertia-relation` },
      ],
    },
    {
      label: 'Equilibrium',
      children: [{ label: 'Conditions for Equilibrium', href: `${BASE}/conditions-for-equilibrium` }],
    },
    {
      label: 'Angular Momentum',
      children: [
        { label: 'Angular Momentum', href: `${BASE}/angular-momentum` },
        { label: 'Conservation of Angular Momentum', href: `${BASE}/conservation-of-angular-momentum` },
      ],
    },
  ],
};

export const chapter2RotationalDynamics: Chapter = {
  slug: 'rotational-dynamics',
  number: 2,
  title: 'Rotational Dynamics',
  blurb: 'Scalar and vector products, torque, the relation between torque and moment of inertia, equilibrium, and conservation of angular momentum.',
  status: 'available',
  topics: chapter2RotationalDynamicsTopics,
  quickRevision: chapter2RotationalDynamicsQuickRevision,
  assessment: chapter2RotationalDynamicsAssessment,
  conceptMap: chapter2RotationalDynamicsConceptMap,
};
