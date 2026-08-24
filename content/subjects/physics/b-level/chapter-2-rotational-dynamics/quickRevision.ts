import type { QuickRevision } from '@/types/content';

export const chapter2RotationalDynamicsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'torque-and-turning-effect',
      keyPoint: 'τ = rF sinθ; maximum turning effect when force is perpendicular to the lever arm.',
      formulaSlug: 'torque-formula',
      miniExample: 'A longer wrench needs less force for the same torque on a bolt.',
    },
    {
      conceptSlug: 'moment-of-inertia',
      keyPoint: 'I = mr² for a point mass — mass farther from the axis matters much more.',
      formulaSlug: 'moment-of-inertia-formula',
      miniExample: 'Pulling arms in reduces r and sharply cuts a skater\'s moment of inertia.',
    },
    {
      conceptSlug: 'conditions-for-equilibrium',
      keyPoint: 'Complete equilibrium needs BOTH ΣF = 0 and Στ = 0.',
      formulaSlug: 'equilibrium-conditions-formula',
      miniExample: 'A 300 N child 1.5 m out balances a 450 N adult 1 m out on a seesaw.',
    },
    {
      conceptSlug: 'angular-momentum',
      keyPoint: 'L = Iω is the rotational equivalent of linear momentum p = mv.',
      formulaSlug: 'angular-momentum-formula',
      miniExample: 'A 4 kg·m² wheel at 5 rad/s has L = 20 kg·m²/s.',
    },
    {
      conceptSlug: 'conservation-of-angular-momentum',
      keyPoint: 'With zero external torque, I₁ω₁ = I₂ω₂ — angular momentum stays constant.',
      formulaSlug: 'conservation-of-angular-momentum-formula',
      miniExample: 'A skater pulling in their arms spins up from 2 to 8 rad/s.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'scalar-product-of-vectors',
      keyPoint: 'A · B = AB cosθ gives a scalar; maximum when vectors are aligned.',
      formulaSlug: 'scalar-product-formula',
      miniExample: '10 N at 60° to a 5 m displacement gives a dot product of 25.',
    },
    {
      conceptSlug: 'vector-product-of-vectors',
      keyPoint: '|A × B| = AB sinθ gives a vector, perpendicular to both; maximum when perpendicular.',
      formulaSlug: 'vector-product-formula',
      miniExample: '12 N perpendicular to a 0.4 m arm gives a cross product of 4.8.',
    },
    {
      conceptSlug: 'torque-moment-of-inertia-relation',
      keyPoint: 'τ = Iα is the rotational version of F = ma.',
      formulaSlug: 'torque-moment-of-inertia-formula',
      miniExample: '12 N·m on a 3 kg·m² wheel gives α = 4 rad/s².',
    },
  ],
};
