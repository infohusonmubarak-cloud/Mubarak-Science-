import type { Topic } from '@/types/content';

// Navigation outline for Chapter 3, matching the textbook's section
// list: laminar and turbulent flow; the equation of continuity;
// Bernoulli's equation and its manifestations; viscosity; surface
// tension and capillarity.
export const chapter3CFluidTopics: Topic[] = [
  {
    slug: 'laminar-and-turbulent-flow-topic',
    title: '3.1 Laminar and Turbulent Flow',
    concepts: [{ slug: 'laminar-and-turbulent-flow', title: 'Laminar and Turbulent Flow', difficulty: 'medium' }],
  },
  {
    slug: 'equation-of-continuity-topic',
    title: '3.2 Equation of Continuity for Fluids',
    concepts: [{ slug: 'equation-of-continuity', title: 'Equation of Continuity', difficulty: 'medium' }],
  },
  {
    slug: 'bernoullis-equation-topic',
    title: "3.3 Bernoulli's Equation",
    concepts: [{ slug: 'bernoullis-equation', title: "Bernoulli's Equation", difficulty: 'hard' }],
  },
  {
    slug: 'bernoulli-theorem-applications-topic',
    title: "3.4 Manifestations of Bernoulli's Theorem",
    concepts: [{ slug: 'bernoulli-theorem-applications', title: "Manifestations of Bernoulli's Theorem", difficulty: 'medium' }],
  },
  {
    slug: 'viscosity-topic',
    title: '3.5 Viscosity (Fluid Friction)',
    concepts: [{ slug: 'viscosity-and-fluid-friction', title: 'Viscosity (Fluid Friction)', difficulty: 'medium' }],
  },
  {
    slug: 'surface-tension-and-capillarity-topic',
    title: '3.6 Surface Tension and Capillarity',
    concepts: [
      { slug: 'surface-tension', title: 'Surface Tension', difficulty: 'medium' },
      { slug: 'capillarity', title: 'Capillarity', difficulty: 'medium' },
    ],
  },
];
