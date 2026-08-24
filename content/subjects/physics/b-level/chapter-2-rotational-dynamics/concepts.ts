import type { Concept } from '@/types/content';

export const chapter2RotationalDynamicsConcepts: Record<string, Concept> = {
  'scalar-product-of-vectors': {
    slug: 'scalar-product-of-vectors',
    title: 'Scalar (Dot) Product of Vectors',
    difficulty: 'medium',
    simpleExplanation:
      'The scalar (dot) product multiplies two vectors together to produce a single number (a scalar), not ' +
      'a new vector. It measures how much one vector "lines up" with the direction of another.',
    whyItMatters:
      'The dot product is how physics defines quantities like work — work is only done by the part of a ' +
      'force that acts along the direction of motion, and the dot product captures exactly that.',
    formulaSlug: 'scalar-product-formula',
    workedExample: {
      id: 'scalar-product-we-1',
      title: 'Calculating a scalar product',
      problemStatement: 'A force of 10 N acts at 60° to the direction of a 5 m displacement. Find the scalar product (which equals the work done).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'A · B = AB cosθ', explanation: 'A = 10 N, B = 5 m, θ = 60°.' },
        { step: 2, instruction: 'Substitute values.', math: '10 × 5 × cos60° = 50 × 0.5', explanation: 'cos60° = 0.5.' },
        { step: 3, instruction: 'Calculate.', math: '= 25', explanation: 'Multiply 50 by 0.5.' },
      ],
      finalAnswer: 'Scalar product = 25 (J, if this represents work done by a force over a displacement).',
    },
    whyItWorks:
      'When θ = 0° (vectors fully aligned), cosθ = 1, so the dot product simply becomes the product of the ' +
      'magnitudes — its maximum possible value. When θ = 90° (perpendicular vectors), cosθ = 0, so the dot ' +
      'product is zero — a force perpendicular to motion does no work, exactly matching physical intuition.',
    realLifeExample: {
      title: 'Carrying a bag while walking',
      scenario: 'A person carries a bag by holding it vertically while walking horizontally.',
      explanation: 'The force holding the bag up is perpendicular (90°) to the horizontal walking direction — since cos90° = 0, the dot product (work done by that lifting force on the horizontal motion) is zero, matching the physical fact that holding a bag steady does no work on its horizontal motion.',
    },
    practiceQuestions: [
      {
        id: 'scalar-product-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two vectors of magnitude 8 and 6 act at 0° to each other (fully aligned). Find their scalar product.',
        hints: ['A · B = AB cosθ.', 'cos0° = 1.'],
        correctAnswer: 48,
        tolerance: 0.5,
        explanation: 'A · B = 8 × 6 × cos0° = 48 × 1 = 48.',
      },
    ],
    commonMistake:
      'Expecting the dot product to give a vector — it always produces a plain NUMBER (scalar), with no ' +
      'direction, unlike the vector (cross) product.',
    quickReview: [
      'A · B = AB cosθ produces a scalar (number), not a vector.',
      'Maximum when vectors are aligned (θ=0°); zero when perpendicular (θ=90°).',
      'Used to define quantities like work done by a force.',
    ],
  },

  'vector-product-of-vectors': {
    slug: 'vector-product-of-vectors',
    title: 'Vector (Cross) Product of Vectors',
    difficulty: 'hard',
    simpleExplanation:
      'The vector (cross) product multiplies two vectors together to produce a NEW vector, perpendicular to ' +
      'both original vectors. Its magnitude depends on how perpendicular the two original vectors are to ' +
      'each other, and its direction follows the right-hand rule.',
    whyItMatters:
      'The cross product is how physics defines torque and angular momentum — both are naturally ' +
      'perpendicular to the plane formed by the two vectors that produce them.',
    formulaSlug: 'vector-product-formula',
    workedExample: {
      id: 'vector-product-we-1',
      title: 'Calculating a vector product magnitude',
      problemStatement: 'A force of 12 N is applied 90° to a 0.4 m lever arm. Find the magnitude of the vector product (torque).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: '|A × B| = AB sinθ', explanation: 'A = 0.4 m, B = 12 N, θ = 90°.' },
        { step: 2, instruction: 'Substitute values.', math: '0.4 × 12 × sin90°', explanation: 'sin90° = 1, the maximum possible value.' },
        { step: 3, instruction: 'Calculate.', math: '= 4.8', explanation: 'Multiply 0.4 × 12 × 1.' },
      ],
      finalAnswer: 'Vector product magnitude = 4.8 (N·m, this is the torque).',
    },
    whyItWorks:
      'When θ = 90° (vectors fully perpendicular), sinθ = 1, so the cross product reaches its maximum ' +
      'possible magnitude. When θ = 0° (vectors parallel), sinθ = 0, so the cross product is zero — a force ' +
      'applied directly along the lever arm produces no turning effect, matching physical intuition.',
    realLifeExample: {
      title: 'Why pushing a door near its hinge is hard',
      scenario: 'Pushing a door open right next to its hinges takes much more force than pushing near the handle, even to produce the same turning effect.',
      explanation: 'Torque is a cross product (r × F) — with a very small r (distance from hinge), a much larger force F is needed to produce the same magnitude of torque, which is exactly why door handles are placed far from the hinge.',
    },
    practiceQuestions: [
      {
        id: 'vector-product-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Two vectors of magnitude 5 and 4 act at 30° to each other (sin30° = 0.5). Find the magnitude of their vector product.',
        hints: ['|A × B| = AB sinθ.'],
        correctAnswer: 10,
        tolerance: 0.2,
        explanation: '|A × B| = 5 × 4 × 0.5 = 10.',
      },
    ],
    commonMistake:
      'Confusing the cross product with the dot product — the cross product uses SINE (maximum at 90°) and ' +
      'produces a VECTOR, while the dot product uses COSINE (maximum at 0°) and produces a scalar.',
    quickReview: [
      '|A × B| = AB sinθ produces a vector, perpendicular to both original vectors.',
      'Maximum when vectors are perpendicular (θ=90°); zero when parallel (θ=0°).',
      'Used to define torque (r × F) and angular momentum.',
    ],
  },

  'torque-and-turning-effect': {
    slug: 'torque-and-turning-effect',
    title: 'Torque and the Turning Effect of Force',
    difficulty: 'medium',
    simpleExplanation:
      "Torque measures how effectively a force causes rotation about a pivot point. It depends on the size " +
      "of the force, how far from the pivot it is applied, and the angle at which it is applied.",
    whyItMatters:
      "Torque is the rotational equivalent of force — just as force causes linear acceleration, torque " +
      "causes angular (rotational) acceleration, and is fundamental to understanding anything that turns, " +
      "spins, or rotates.",
    formulaSlug: 'torque-formula',
    workedExample: {
      id: 'torque-we-1',
      title: 'Calculating torque on a wrench',
      problemStatement: 'A 200 N force is applied perpendicular to a wrench, 0.25 m from the bolt. Find the torque.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'τ = r F sinθ', explanation: 'r = 0.25 m, F = 200 N, θ = 90° (perpendicular).' },
        { step: 2, instruction: 'Substitute values.', math: 'τ = 0.25 × 200 × sin90°', explanation: 'sin90° = 1.' },
        { step: 3, instruction: 'Calculate.', math: 'τ = 50 N·m', explanation: 'Multiply 0.25 × 200 × 1.' },
      ],
      finalAnswer: 'Torque = 50 N·m.',
    },
    whyItWorks:
      "Torque depends on force AND on how far from the pivot (and at what angle) the force acts because " +
      "the same force applied farther from a pivot, or more perpendicular to the lever arm, produces a " +
      "greater rotational effect — this is the basic principle behind levers, wrenches, and spanners.",
    realLifeExample: {
      title: 'Using a longer wrench for a stuck bolt',
      scenario: 'Mechanics often use a longer wrench (or add a pipe extension) to loosen a very tight bolt.',
      explanation: 'Since τ = rF sinθ, increasing r (the effective lever arm length) lets the same applied force produce a larger torque — this is exactly why extending the wrench handle makes loosening a stuck bolt easier.',
    },
    practiceQuestions: [
      {
        id: 'torque-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 50 N force is applied perpendicular to a 0.6 m lever. Find the torque.',
        hints: ['τ = rF sinθ.', 'sin90° = 1.'],
        correctAnswer: 30,
        tolerance: 0.5,
        unit: 'N·m',
        explanation: 'τ = 0.6 × 50 × sin90° = 30 N·m.',
      },
    ],
    commonMistake:
      "Forgetting the angle factor (sinθ) and just multiplying force by distance — torque is maximised " +
      "only when the force is perpendicular to the lever arm (θ=90°); at other angles, only the " +
      "perpendicular component of the force contributes.",
    quickReview: [
      'τ = rF sinθ measures the turning effect of a force about a pivot.',
      'Maximum torque occurs when force is perpendicular to the lever arm.',
      'A longer lever arm (r) means more torque for the same force.',
    ],
  },

  'moment-of-inertia': {
    slug: 'moment-of-inertia',
    title: 'Moment of Inertia',
    difficulty: 'medium',
    simpleExplanation:
      "Moment of inertia is a measure of how much an object resists changes to its rotational motion — it " +
      "depends not just on an object's mass, but on how that mass is distributed relative to the axis of " +
      "rotation. Mass farther from the axis contributes much more to the moment of inertia.",
    whyItMatters:
      "Moment of inertia is the rotational equivalent of mass in Newton's second law — it plays exactly the " +
      "same role for rotation that ordinary mass plays for straight-line motion.",
    formulaSlug: 'moment-of-inertia-formula',
    workedExample: {
      id: 'moment-of-inertia-we-1',
      title: 'Finding moment of inertia of a point mass',
      problemStatement: 'A 0.5 kg mass is attached to a rotating rod at a distance of 0.8 m from the axis. Find its moment of inertia.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'I = mr²', explanation: 'm = 0.5 kg, r = 0.8 m.' },
        { step: 2, instruction: 'Square the radius.', math: 'r² = 0.8² = 0.64 m²', explanation: 'Square the distance from the axis.' },
        { step: 3, instruction: 'Calculate I.', math: 'I = 0.5 × 0.64 = 0.32 kg·m²', explanation: 'Multiply mass by r².' },
      ],
      finalAnswer: 'Moment of inertia = 0.32 kg·m².',
    },
    whyItWorks:
      "Mass located farther from the axis has to travel a larger circle (and therefore a larger linear " +
      "distance and speed) for the same angular velocity, requiring more force to accelerate — the r² " +
      "dependence captures how quickly this resistance to rotational change grows with distance from the " +
      "axis.",
    realLifeExample: {
      title: 'Why a figure skater spins faster with arms pulled in',
      scenario: 'A spinning figure skater speeds up dramatically when they pull their arms close to their body.',
      explanation: 'Pulling the arms in reduces r for that mass, sharply reducing the total moment of inertia (since it depends on r²) — this connects directly to angular momentum conservation, covered later in this chapter.',
    },
    practiceQuestions: [
      {
        id: 'moment-of-inertia-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 2 kg point mass rotates at a radius of 0.3 m. Find its moment of inertia.',
        hints: ['I = mr².'],
        correctAnswer: 0.18,
        tolerance: 0.01,
        unit: 'kg·m²',
        explanation: 'I = 2 × 0.3² = 2 × 0.09 = 0.18 kg·m².',
      },
    ],
    commonMistake:
      "Assuming moment of inertia depends only on mass, like ordinary inertia — it depends on BOTH mass " +
      "and how far that mass is distributed from the axis (r²), so the same mass can have very different " +
      "moments of inertia depending on its distribution.",
    quickReview: [
      'I = mr² for a point mass — moment of inertia depends on mass AND distance from the axis.',
      'Moment of inertia is the rotational equivalent of mass.',
      'Mass farther from the axis contributes disproportionately more (r² dependence).',
    ],
  },

  'torque-moment-of-inertia-relation': {
    slug: 'torque-moment-of-inertia-relation',
    title: 'Relation Between Torque and Moment of Inertia',
    difficulty: 'hard',
    simpleExplanation:
      "Just as Newton's second law relates force to mass and linear acceleration (F = ma), its rotational " +
      "equivalent relates net torque to moment of inertia and angular acceleration: τ = Iα.",
    whyItMatters:
      "This relation is the rotational version of Newton's second law, letting you predict how fast an " +
      "object will spin up or slow down under a known torque, given its moment of inertia.",
    formulaSlug: 'torque-moment-of-inertia-formula',
    workedExample: {
      id: 'torque-moi-we-1',
      title: 'Finding angular acceleration from torque',
      problemStatement: 'A net torque of 12 N·m acts on a wheel with moment of inertia 3 kg·m². Find its angular acceleration.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged.', math: 'α = τ / I', explanation: 'τ = 12 N·m, I = 3 kg·m².' },
        { step: 2, instruction: 'Substitute values.', math: 'α = 12 / 3', explanation: 'Divide torque by moment of inertia.' },
        { step: 3, instruction: 'Calculate.', math: 'α = 4 rad/s²', explanation: 'Divide 12 by 3.' },
      ],
      finalAnswer: 'Angular acceleration = 4 rad/s².',
    },
    whyItWorks:
      "This relation follows directly from applying Newton's second law to every small piece of a rotating " +
      "object and summing the results — the total torque needed to produce a given angular acceleration " +
      "scales exactly with how the object's mass is distributed (its moment of inertia), mirroring how " +
      "force relates to mass and linear acceleration.",
    realLifeExample: {
      title: 'Why heavier flywheels resist speeding up',
      scenario: 'Engineers use large, heavy flywheels in engines specifically to resist rapid changes in rotational speed.',
      explanation: 'A flywheel with a large moment of inertia requires a large torque to produce even a small angular acceleration (α = τ/I) — this resistance to sudden speed changes is exactly why flywheels are used to smooth out engine power delivery.',
    },
    practiceQuestions: [
      {
        id: 'torque-moi-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A disc with moment of inertia 5 kg·m² needs an angular acceleration of 6 rad/s². Find the required torque.',
        hints: ['τ = Iα.'],
        correctAnswer: 30,
        tolerance: 0.5,
        unit: 'N·m',
        explanation: 'τ = 5 × 6 = 30 N·m.',
      },
    ],
    commonMistake:
      "Confusing this rotational relation with F = ma directly — the quantities are analogous (τ↔F, I↔m, " +
      "α↔a) but are NOT interchangeable; always use the correct rotational quantities together, not a mix " +
      "of linear and rotational terms.",
    quickReview: [
      'τ = Iα is the rotational equivalent of F = ma.',
      'Net torque produces angular acceleration, resisted by moment of inertia.',
      'A larger moment of inertia means more torque is needed for the same angular acceleration.',
    ],
  },

  'conditions-for-equilibrium': {
    slug: 'conditions-for-equilibrium',
    title: 'Conditions for Equilibrium',
    difficulty: 'medium',
    simpleExplanation:
      'An object is in complete (static) equilibrium only when it satisfies TWO conditions at once: the net ' +
      'force acting on it is zero (so it does not accelerate linearly), and the net torque acting on it is ' +
      'zero (so it does not begin rotating).',
    whyItMatters:
      "Checking BOTH conditions is essential — an object can have zero net force but still start rotating " +
      "if there's a net torque, or vice versa, so a complete equilibrium analysis always needs both.",
    formulaSlug: 'equilibrium-conditions-formula',
    workedExample: {
      id: 'equilibrium-we-1',
      title: 'Balancing a seesaw',
      problemStatement: 'A 300 N child sits 1.5 m from the pivot of a seesaw. Where must a 450 N adult sit on the other side for balance (net torque = zero)?',
      steps: [
        { step: 1, instruction: 'Apply Στ = 0 about the pivot.', math: '300 × 1.5 = 450 × d', explanation: 'The two torques (clockwise and counterclockwise) must be equal in magnitude.' },
        { step: 2, instruction: 'Simplify.', math: '450 = 450 × d', explanation: '300 × 1.5 = 450.' },
        { step: 3, instruction: 'Solve for d.', math: 'd = 450 / 450 = 1 m', explanation: 'Divide both sides by 450.' },
      ],
      finalAnswer: 'The adult must sit 1 m from the pivot.',
    },
    whyItWorks:
      "Setting the sum of forces to zero prevents any net push in any direction (preventing linear " +
      "acceleration); separately setting the sum of torques (about any chosen pivot) to zero prevents any " +
      "net turning effect — an object satisfying both simply stays still (or moves at constant velocity " +
      "without rotating), which is the definition of complete equilibrium.",
    realLifeExample: {
      title: 'A ladder leaning safely against a wall',
      scenario: 'A ladder leaning against a wall must not slide (net force = 0) or tip over (net torque = 0) to be safe to climb.',
      explanation: 'Engineers and safety guidelines analyse both the force balance (friction at the base versus the ladder\'s weight and the wall\'s push) and the torque balance (about the base) to determine the safe angle and conditions for the ladder to remain in equilibrium.',
    },
    practiceQuestions: [
      {
        id: 'equilibrium-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does an object need BOTH ΣF = 0 AND Στ = 0 to be in complete equilibrium?',
        options: [
          { id: 'a', text: 'Zero net force alone only prevents linear acceleration; zero net torque is separately needed to prevent rotation.' },
          { id: 'b', text: 'Only ΣF = 0 is ever needed.' },
          { id: 'c', text: 'Only Στ = 0 is ever needed.' },
          { id: 'd', text: 'These two conditions always automatically imply each other.' },
        ],
        correctOptionId: 'a',
        hints: ['Think of a seesaw with equal but oppositely-placed forces on each side.'],
        explanation: 'An object could have balanced forces (no net push) yet still experience a net torque that starts it rotating — both conditions must be checked independently.',
      },
    ],
    commonMistake:
      "Checking only the force balance (ΣF = 0) and assuming that's sufficient for equilibrium — an object " +
      "can have zero net force while still experiencing a net torque (for example, two equal, opposite " +
      "forces applied at different points, forming a 'couple'), which would still cause rotation.",
    quickReview: [
      'Complete equilibrium requires BOTH ΣF = 0 and Στ = 0.',
      'ΣF = 0 prevents linear acceleration; Στ = 0 prevents rotation.',
      'Torque can be summed about any chosen pivot point.',
    ],
  },

  'angular-momentum': {
    slug: 'angular-momentum',
    title: 'Angular Momentum',
    difficulty: 'medium',
    simpleExplanation:
      "Angular momentum measures how much rotational motion an object has — it depends on the object's " +
      "moment of inertia and its angular velocity, playing the same role for rotation that ordinary " +
      "(linear) momentum plays for straight-line motion.",
    whyItMatters:
      "Angular momentum is central to understanding why spinning objects behave the way they do, and sets " +
      "up the law of conservation of angular momentum, one of the most powerful principles in rotational " +
      "physics.",
    formulaSlug: 'angular-momentum-formula',
    workedExample: {
      id: 'angular-momentum-we-1',
      title: 'Calculating angular momentum',
      problemStatement: 'A wheel with moment of inertia 4 kg·m² spins at an angular velocity of 5 rad/s. Find its angular momentum.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'L = Iω', explanation: 'I = 4 kg·m², ω = 5 rad/s.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'L = 4 × 5 = 20 kg·m²/s', explanation: 'Multiply moment of inertia by angular velocity.' },
      ],
      finalAnswer: 'Angular momentum = 20 kg·m²/s.',
    },
    whyItWorks:
      'Angular momentum combines how the mass is distributed (moment of inertia, I) with how fast it is ' +
      'rotating (angular velocity, ω) into one quantity — this mirrors how linear momentum (p = mv) ' +
      'combines mass and linear velocity, since both describe the "quantity of motion" in their respective ' +
      'systems.',
    realLifeExample: {
      title: 'A spinning gyroscope resisting tipping over',
      scenario: 'A fast-spinning gyroscope resists being tipped over, staying remarkably stable.',
      explanation: 'A rapidly spinning gyroscope has a large angular momentum — since angular momentum resists changes in the same way linear momentum does, a large angular momentum makes the gyroscope\'s spin axis strongly resist being reoriented.',
    },
    practiceQuestions: [
      {
        id: 'angular-momentum-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A disc with moment of inertia 2.5 kg·m² rotates at 8 rad/s. Find its angular momentum.',
        hints: ['L = Iω.'],
        correctAnswer: 20,
        tolerance: 0.3,
        unit: 'kg·m²/s',
        explanation: 'L = 2.5 × 8 = 20 kg·m²/s.',
      },
    ],
    commonMistake:
      "Confusing angular momentum (L = Iω, for rotating objects) with linear momentum (p = mv, for objects " +
      "moving in a straight line) — they describe fundamentally different kinds of motion and use different " +
      "quantities.",
    quickReview: [
      'L = Iω is the rotational equivalent of linear momentum p = mv.',
      'Depends on both moment of inertia and angular velocity.',
      'A large angular momentum makes an object strongly resist changes to its spin.',
    ],
  },

  'conservation-of-angular-momentum': {
    slug: 'conservation-of-angular-momentum',
    title: 'Law of Conservation of Angular Momentum',
    difficulty: 'hard',
    simpleExplanation:
      'When no external torque acts on a rotating system, its total angular momentum stays exactly constant ' +
      'over time — if the system\'s moment of inertia changes (by redistributing its mass), its angular ' +
      'velocity must change to compensate, keeping L = Iω constant.',
    whyItMatters:
      "This law explains a wide range of rotational phenomena, from figure skating spins to planetary " +
      "orbits, and is one of the most fundamental conservation laws in physics, alongside conservation of " +
      "energy and linear momentum.",
    formulaSlug: 'conservation-of-angular-momentum-formula',
    workedExample: {
      id: 'conservation-angular-momentum-we-1',
      title: "A figure skater's spin",
      problemStatement: 'A skater spinning at 2 rad/s with arms out (I₁ = 4 kg·m²) pulls their arms in, reducing their moment of inertia to 1 kg·m². Find their new angular velocity.',
      steps: [
        { step: 1, instruction: 'Apply conservation of angular momentum.', math: 'I₁ω₁ = I₂ω₂', explanation: 'I₁ = 4 kg·m², ω₁ = 2 rad/s, I₂ = 1 kg·m².' },
        { step: 2, instruction: 'Substitute known values.', math: '4 × 2 = 1 × ω₂', explanation: '8 = ω₂.' },
        { step: 3, instruction: 'Solve for ω₂.', math: 'ω₂ = 8 rad/s', explanation: 'The skater spins four times faster.' },
      ],
      finalAnswer: "The skater's new angular velocity is 8 rad/s — four times faster than before.",
    },
    whyItWorks:
      "With no external torque, there is nothing to change the system's total angular momentum — so if I " +
      "decreases (mass pulled closer to the axis), ω must increase proportionally to keep the product Iω " +
      "constant, and vice versa.",
    realLifeExample: {
      title: 'A collapsing star spinning faster',
      scenario: 'When a massive star collapses into a much smaller, denser neutron star, its rotation speeds up dramatically.',
      explanation: 'As the star\'s radius shrinks dramatically, its moment of inertia decreases sharply — with no significant external torque during the collapse, conservation of angular momentum forces its angular velocity to increase enormously, producing the extremely fast-spinning neutron stars (pulsars) observed in space.',
    },
    practiceQuestions: [
      {
        id: 'conservation-angular-momentum-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A rotating platform with I₁ = 6 kg·m² spins at ω₁ = 3 rad/s. Its moment of inertia is increased to I₂ = 9 kg·m² (no external torque). Find the new angular velocity.',
        hints: ['I₁ω₁ = I₂ω₂.'],
        correctAnswer: 2,
        tolerance: 0.1,
        unit: 'rad/s',
        explanation: '6 × 3 = 9 × ω₂ → 18 = 9ω₂ → ω₂ = 2 rad/s.',
      },
    ],
    commonMistake:
      "Applying conservation of angular momentum when an external torque IS present — this law only holds " +
      "when the net external torque on the system is zero; friction or an external push/twist would " +
      "violate the conditions needed for L to stay constant.",
    quickReview: [
      'With zero external torque, total angular momentum (L = Iω) stays constant.',
      'I₁ω₁ = I₂ω₂ lets you find a new angular velocity after a moment-of-inertia change.',
      'Reducing I (pulling mass inward) increases ω, and vice versa.',
    ],
  },
};
