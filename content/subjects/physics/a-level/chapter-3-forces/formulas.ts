import type { Formula } from '@/types/content';

export const chapter3AForcesFormulas: Record<string, Formula> = {
  'newtons-second-law-formula': {
    slug: 'newtons-second-law-formula',
    name: "Newton's Second Law",
    expression: 'F = ma',
    meaning: 'The net (resultant) force acting on an object equals its mass times its acceleration. A bigger force produces a bigger acceleration; a bigger mass resists acceleration more, for the same force.',
    variables: [
      { symbol: 'F', meaning: 'net force acting on the object, in newtons (N)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'a', meaning: 'acceleration produced, in metres per second squared (m/s²)' },
    ],
    whenToUse: 'Whenever a net force and a mass are known and the resulting acceleration is needed (or any one of the three, given the other two).',
    relatedConceptSlugs: ['newtons-second-law'],
  },
  'newtons-law-of-gravitation-formula': {
    slug: 'newtons-law-of-gravitation-formula',
    name: "Newton's Law of Gravitation",
    expression: 'F = G m₁m₂ / r²',
    meaning: 'Every pair of masses in the universe attracts each other with a force that grows with both masses, and shrinks rapidly (as the inverse square) with the distance between their centres.',
    variables: [
      { symbol: 'F', meaning: 'gravitational force between the two masses, in newtons (N)' },
      { symbol: 'G', meaning: 'the universal gravitational constant, 6.67 × 10⁻¹¹ N·m²/kg²' },
      { symbol: 'm₁, m₂', meaning: 'the two masses, in kilograms (kg)' },
      { symbol: 'r', meaning: 'the distance between the centres of the two masses, in metres (m)' },
    ],
    whenToUse: 'Whenever the gravitational force of attraction between two known masses at a known separation needs to be found.',
    relatedConceptSlugs: ['newtons-law-of-gravitation'],
  },
  'friction-formula': {
    slug: 'friction-formula',
    name: 'Friction Force',
    expression: 'F(friction) = μN',
    meaning: 'The maximum friction force between two surfaces is proportional to how hard the surfaces are pressed together (the normal reaction force); the constant of proportionality depends only on the two materials in contact.',
    variables: [
      { symbol: 'F(friction)', meaning: 'the friction force, in newtons (N)' },
      { symbol: 'μ', meaning: 'the coefficient of friction between the two surfaces (dimensionless — no units)' },
      { symbol: 'N', meaning: 'the normal reaction force pressing the surfaces together, in newtons (N)' },
    ],
    whenToUse: 'Whenever the maximum friction force between two surfaces needs to be found, given the coefficient of friction and the normal force.',
    relatedConceptSlugs: ['contact-forces'],
  },
  'weight-formula': {
    slug: 'weight-formula',
    name: 'Weight',
    expression: 'W = mg',
    meaning: "Weight is the force of gravity pulling on an object's mass. Unlike mass, weight depends on the local gravitational field strength, so the same object weighs less on the Moon than on Earth.",
    variables: [
      { symbol: 'W', meaning: 'weight, in newtons (N)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'g', meaning: "the local gravitational field strength (acceleration due to gravity), in N/kg or m/s² — approximately 9.8 on Earth's surface" },
    ],
    whenToUse: "Whenever an object's weight needs to be found from its mass, at a known location.",
    relatedConceptSlugs: ['mass-and-weight'],
  },
  'momentum-and-impulse-formula': {
    slug: 'momentum-and-impulse-formula',
    name: 'Momentum and Impulse',
    expression: 'p = mv;   impulse J = FΔt = Δp',
    meaning: "Momentum measures how hard it is to stop a moving object — it combines mass and velocity. Impulse is the change in momentum a force produces, and equals that force multiplied by the time it acts for.",
    variables: [
      { symbol: 'p', meaning: 'momentum, in kilogram-metres per second (kg·m/s)' },
      { symbol: 'm', meaning: 'mass, in kilograms (kg)' },
      { symbol: 'v', meaning: 'velocity, in metres per second (m/s)' },
      { symbol: 'J', meaning: 'impulse, in newton-seconds (N·s), numerically equal to kg·m/s' },
      { symbol: 'F', meaning: 'force applied, in newtons (N)' },
      { symbol: 'Δt', meaning: 'the time interval the force acts for, in seconds (s)' },
      { symbol: 'Δp', meaning: 'the resulting change in momentum, in kg·m/s' },
    ],
    whenToUse: "Whenever finding an object's momentum, or the change in momentum (impulse) produced by a force acting for a known time.",
    relatedConceptSlugs: ['momentum-and-impulse'],
  },
};
