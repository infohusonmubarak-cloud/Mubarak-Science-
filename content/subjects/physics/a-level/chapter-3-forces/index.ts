import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3AForcesTopics } from './topics';
import { chapter3AForcesQuickRevision } from './quickRevision';
import { chapter3AForcesAssessment } from './assessment';

export { chapter3AForcesConcepts } from './concepts';
export { chapter3AForcesFormulas } from './formulas';
export { chapter3AForcesQuickRevision } from './quickRevision';
export { chapter3AForcesTopics } from './topics';
export { chapter3AForcesAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/forces';

const chapter3AForcesConceptMap: ConceptMapNode = {
  label: 'Forces',
  children: [
    {
      label: "3.1 Newton's Laws of Motion",
      children: [
        { label: "Newton's First Law", href: `${BASE}/newtons-first-law` },
        { label: "Newton's Second Law", href: `${BASE}/newtons-second-law` },
        { label: "Newton's Third Law", href: `${BASE}/newtons-third-law` },
      ],
    },
    { label: "3.2 Gravitational Force and Newton's Law of Gravitation", children: [{ label: "Newton's Law of Gravitation", href: `${BASE}/newtons-law-of-gravitation` }] },
    {
      label: '3.3 Different Kinds of Forces',
      children: [
        { label: 'Contact Forces', href: `${BASE}/contact-forces` },
        { label: 'Resultant Force and Equilibrium', href: `${BASE}/resultant-force-and-equilibrium` },
      ],
    },
    { label: '3.4 Mass and Weight', children: [{ label: 'Mass and Weight', href: `${BASE}/mass-and-weight` }] },
    { label: '3.5 Freely Falling Bodies', children: [{ label: 'Freely Falling Bodies', href: `${BASE}/freely-falling-bodies` }] },
    {
      label: '3.6 Momentum and Law of Conservation of Momentum',
      children: [
        { label: 'Momentum and Impulse', href: `${BASE}/momentum-and-impulse` },
        { label: 'The Law of Conservation of Momentum', href: `${BASE}/conservation-of-momentum` },
      ],
    },
  ],
};

export const chapter3AForces: Chapter = {
  slug: 'forces',
  number: 3,
  title: 'Forces',
  blurb: "Newton's three laws of motion, gravitation, contact forces and equilibrium, mass and weight, freely falling bodies, and momentum and its conservation.",
  status: 'available',
  topics: chapter3AForcesTopics,
  quickRevision: chapter3AForcesQuickRevision,
  assessment: chapter3AForcesAssessment,
  conceptMap: chapter3AForcesConceptMap,
};
