import type { Concept } from '@/types/content';

export const chapter9ElectricFieldConcepts: Record<string, Concept> = {
  'coulombs-law': {
    slug: 'coulombs-law',
    title: "Coulomb's Law",
    difficulty: 'medium',
    simpleExplanation:
      "Coulomb's law describes the electric force between two charged objects: the force is stronger " +
      "when the charges are larger, and weaker when they are farther apart — specifically, the force " +
      "decreases with the SQUARE of the distance. Like charges repel; opposite charges attract.",
    whyItMatters:
      "Coulomb's law is the foundation of electrostatics, playing the same role for electric charges that " +
      "Newton's law of gravitation plays for masses — nearly everything else in this chapter builds on it.",
    formulaSlug: 'coulombs-law-formula',
    workedExample: {
      id: 'coulombs-law-we-1',
      title: 'Finding the force between two charges',
      problemStatement: 'Two charges of +3 × 10⁻⁶ C and -2 × 10⁻⁶ C are 0.5 m apart. Find the force between them (k = 8.99 × 10⁹ N·m²/C²).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F = kq₁q₂/r²', explanation: 'q₁ = 3×10⁻⁶ C, q₂ = 2×10⁻⁶ C (magnitude), r = 0.5 m.' },
        { step: 2, instruction: 'Substitute values.', math: 'F = (8.99×10⁹ × 3×10⁻⁶ × 2×10⁻⁶)/0.5²', explanation: 'Use the magnitudes of the charges.' },
        { step: 3, instruction: 'Calculate.', math: 'F = (53.94×10⁻³)/0.25 ≈ 0.216 N', explanation: 'This is an attractive force, since the charges have opposite signs.' },
      ],
      finalAnswer: 'Force ≈ 0.216 N (attractive).',
    },
    whyItWorks:
      "The inverse-square dependence on distance reflects how the influence of a charge spreads out over " +
      "an ever-larger area as distance increases (similar to how gravity, light intensity, and other " +
      "point-source effects also follow inverse-square laws) — this is a common geometric feature of any " +
      "influence radiating outward from a point in three-dimensional space.",
    realLifeExample: {
      title: 'Static cling',
      scenario: 'Clothes fresh from a dryer often stick together due to static electricity.',
      explanation: "Friction during drying transfers small amounts of charge between fabric pieces — the resulting attractive Coulomb force between the oppositely-charged surfaces is strong enough at close range (small r) to make the clothes cling together.",
    },
    practiceQuestions: [
      {
        id: 'coulombs-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two charges of magnitude 4 × 10⁻⁶ C each are 0.2 m apart. Find the force between them (k = 8.99 × 10⁹ N·m²/C²).',
        hints: ['F = kq₁q₂/r².'],
        correctAnswer: 3.6,
        tolerance: 0.1,
        unit: 'N',
        explanation: 'F = (8.99×10⁹ × 4×10⁻⁶ × 4×10⁻⁶)/0.2² = (143.84×10⁻³)/0.04 ≈ 3.6 N.',
      },
    ],
    commonMistake:
      "Forgetting the inverse-SQUARE relationship — doubling the distance does not halve the force; it " +
      "reduces the force to one-quarter (since the distance term is squared in the denominator).",
    quickReview: [
      "Coulomb's law: F = kq₁q₂/r² — force between two point charges.",
      'Like charges repel; opposite charges attract.',
      'Force follows an inverse-square relationship with distance.',
    ],
  },

  'electric-field-and-field-intensity': {
    slug: 'electric-field-and-field-intensity',
    title: 'Electric Field and Electric Field Intensity',
    difficulty: 'medium',
    simpleExplanation:
      "An electric field is the region of influence surrounding a charge, where another charge would " +
      "experience a force. Electric field intensity (or field strength) quantifies this influence as the " +
      "force per unit charge — a way of describing the field's strength independent of any particular " +
      "test charge placed in it.",
    whyItMatters:
      "The field concept lets physicists describe the 'influence' surrounding a charge even before another " +
      "charge is placed there to feel a force — this is a powerful, general way of thinking that extends " +
      "to gravitational and magnetic fields too.",
    formulaSlug: 'electric-field-intensity-formula',
    workedExample: {
      id: 'electric-field-we-1',
      title: 'Finding electric field intensity',
      problemStatement: 'A test charge of 2 × 10⁻⁶ C experiences a force of 0.4 N at a point. Find the electric field intensity there.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'E = F/q', explanation: 'F = 0.4 N, q = 2×10⁻⁶ C.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'E = 0.4/(2×10⁻⁶)', explanation: 'Divide force by charge.' },
        { step: 3, instruction: 'Simplify.', math: 'E = 200,000 N/C = 2×10⁵ N/C', explanation: 'This is the field strength at that point.' },
      ],
      finalAnswer: 'Electric field intensity = 2 × 10⁵ N/C.',
    },
    whyItWorks:
      "Dividing the force by the test charge's magnitude removes the test charge's own size from the " +
      "answer, leaving a quantity that describes ONLY the field itself — this means E is a property of " +
      "the source charge and location, useful regardless of what test charge (if any) happens to be " +
      "placed there.",
    realLifeExample: {
      title: 'Lightning and strong electric fields',
      scenario: 'Lightning occurs when the electric field between storm clouds and the ground becomes extremely strong.',
      explanation: "When the electric field intensity in the air becomes strong enough (around 3 million V/m), it overcomes the air's insulating properties and ionises it, allowing a massive discharge of current — lightning — to occur.",
    },
    practiceQuestions: [
      {
        id: 'electric-field-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A charge of 5 × 10⁻⁶ C experiences a force of 0.1 N. Find the electric field intensity.',
        hints: ['E = F/q.'],
        correctAnswer: 20000,
        tolerance: 500,
        unit: 'N/C',
        explanation: 'E = 0.1/(5×10⁻⁶) = 20,000 N/C.',
      },
    ],
    commonMistake:
      "Thinking electric field intensity depends on the test charge used to measure it — E is a property " +
      "of the SOURCE charge and location; dividing by q specifically removes the test charge's influence " +
      "from the result.",
    quickReview: [
      'E = F/q defines electric field intensity as force per unit charge.',
      'The field exists independently of whether a test charge is present.',
      'Very strong fields (like in a storm) can ionise air, causing lightning.',
    ],
  },

  'electric-lines-of-force': {
    slug: 'electric-lines-of-force',
    title: 'Electric Lines of Force',
    difficulty: 'easy',
    simpleExplanation:
      "Electric lines of force (or field lines) are a visual way to represent an electric field: they " +
      "point in the direction a positive test charge would move, start on positive charges and end on " +
      "negative charges, and are drawn closer together where the field is stronger.",
    whyItMatters:
      "Field lines give an intuitive, visual understanding of a field's shape and strength, without " +
      "needing to calculate exact values at every point.",
    whyItWorks:
      "Because field lines represent the direction of force on a positive test charge, and because " +
      "electric field strength weakens with distance from a charge (following the inverse-square law), " +
      "lines naturally spread apart as they move away from a point charge — this spreading directly " +
      "reflects the weakening field, which is why line density is used to represent field strength.",
    realLifeExample: {
      title: 'Visualising a parallel-plate capacitor field',
      scenario: 'Between two oppositely charged parallel plates, field lines are drawn straight and evenly spaced.',
      explanation: 'This visual representation directly shows that the field between the plates is uniform (constant strength and direction) — evenly spaced, parallel lines are the standard way of representing a uniform field, in contrast to the diverging lines around a point charge.',
    },
    practiceQuestions: [
      {
        id: 'lines-of-force-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What does it mean when electric field lines are drawn closer together in a diagram?',
        options: [
          { id: 'a', text: 'The electric field is stronger in that region.' },
          { id: 'b', text: 'The electric field is weaker in that region.' },
          { id: 'c', text: 'Line spacing has no relationship to field strength.' },
          { id: 'd', text: 'The charges in that region are negative.' },
        ],
        correctOptionId: 'a',
        hints: ['Line density represents field strength.'],
        explanation: 'Field lines drawn closer together indicate a stronger electric field in that region.',
      },
    ],
    commonMistake:
      "Thinking field lines are physically real paths that charges travel along — they are a visual " +
      "MODEL representing field direction and relative strength, not literal, physical tracks.",
    quickReview: [
      'Field lines point in the direction a positive test charge would move.',
      'Lines start on positive charges, end on negative charges.',
      'Closer-together lines represent a stronger field.',
    ],
  },

  'electric-charge-distribution': {
    slug: 'electric-charge-distribution',
    title: 'Electric Charge Distribution',
    difficulty: 'medium',
    simpleExplanation:
      "On a charged conductor, charge distributes itself across the surface in a way that depends on the " +
      "conductor's shape — charge tends to concentrate more densely at sharply curved points (like a " +
      "sharp tip) and less densely on flatter regions.",
    whyItMatters:
      "Understanding how charge distributes on real conductors (not idealised point charges) explains " +
      "practical phenomena like why lightning rods have sharp points, and is essential for designing safe " +
      "electrical equipment.",
    whyItWorks:
      "Charges on a conductor repel each other and spread out to minimise their mutual repulsion (reaching " +
      "electrostatic equilibrium) — at a sharp point, the surface curves away rapidly in every direction, " +
      "so charges there have less 'room' from their neighbours along the surface, resulting in a higher " +
      "concentration (charge density) at sharp points compared to flatter regions.",
    realLifeExample: {
      title: 'Why lightning rods have sharp points',
      scenario: 'Lightning rods on buildings are designed with sharp, pointed tips, not flat or rounded ends.',
      explanation: 'The high charge concentration at a sharp point creates a very strong local electric field, which can ionise the surrounding air more easily — this either encourages a controlled, safe discharge to the rod or helps dissipate charge gradually, reducing the risk of a dangerous strike elsewhere on the building.',
    },
    practiceQuestions: [
      {
        id: 'charge-distribution-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does charge concentrate more densely at sharp points on a charged conductor?',
        options: [
          { id: 'a', text: 'Charges repel each other and spread to minimise repulsion, but sharp points offer less surface "room," concentrating charge there.' },
          { id: 'b', text: 'Charge distributes completely evenly regardless of shape.' },
          { id: 'c', text: 'Sharp points repel charge more strongly than flat regions.' },
          { id: 'd', text: 'Charge distribution has no relationship to conductor shape.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about how much surface area is available near a sharp point versus a flat region.'],
        explanation: 'Charges spread to minimise mutual repulsion, but the geometry of a sharp point naturally concentrates charge there more than on flatter regions.',
      },
    ],
    commonMistake:
      "Assuming charge always distributes evenly over any conductor's surface — this is only true for a " +
      "perfectly spherical conductor; for irregularly shaped conductors, charge density varies " +
      "significantly with local curvature.",
    quickReview: [
      'Charge on a conductor spreads to reach electrostatic equilibrium (minimising mutual repulsion).',
      'Charge density is higher at sharply curved points, lower on flatter regions.',
      'This principle explains why lightning rods use sharp points.',
    ],
  },

  'electric-potential-and-potential-difference': {
    slug: 'electric-potential-and-potential-difference',
    title: 'Electric Potential and Potential Difference',
    difficulty: 'hard',
    simpleExplanation:
      "Electric potential at a point is the electric potential energy per unit charge a small positive " +
      "test charge would have there. Potential DIFFERENCE between two points is simply the difference in " +
      "potential between them — it determines how much work is done moving a charge between those points.",
    whyItMatters:
      "Potential difference (commonly called voltage) is one of the most practically important quantities " +
      "in all of electricity — it's what drives current through circuits and is measured directly by a " +
      "voltmeter.",
    formulaSlug: 'electric-potential-formula',
    workedExample: {
      id: 'electric-potential-we-1',
      title: 'Finding electric potential from a point charge',
      problemStatement: 'Find the electric potential at a distance of 0.3 m from a charge of +5 × 10⁻⁶ C (k = 8.99 × 10⁹ N·m²/C²).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'V = kQ/r', explanation: 'Q = 5×10⁻⁶ C, r = 0.3 m.' },
        { step: 2, instruction: 'Substitute values.', math: 'V = (8.99×10⁹ × 5×10⁻⁶)/0.3', explanation: 'Multiply k by Q, then divide by r.' },
        { step: 3, instruction: 'Calculate.', math: 'V ≈ 149,833 V ≈ 1.5×10⁵ V', explanation: 'This is the potential at that point.' },
      ],
      finalAnswer: 'Electric potential ≈ 1.5 × 10⁵ V.',
    },
    whyItWorks:
      "Electric potential accounts for all the accumulated 'work done against the field' to bring a unit " +
      "positive charge from very far away (where potential is defined as zero) to the point in question — " +
      "since potential energy accumulates as you move closer to a source charge, this naturally gives a " +
      "1/r dependence, similar to gravitational potential energy near a mass.",
    realLifeExample: {
      title: 'Battery voltage',
      scenario: 'A 1.5 V battery maintains a fixed potential difference between its two terminals.',
      explanation: "This 1.5 V potential difference is exactly what drives electric current through a connected circuit — it represents the energy given to each unit of charge as it moves from the battery's negative to positive terminal through the external circuit.",
    },
    practiceQuestions: [
      {
        id: 'electric-potential-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the electric potential at 0.5 m from a charge of +2 × 10⁻⁶ C (k = 8.99 × 10⁹ N·m²/C²).',
        hints: ['V = kQ/r.'],
        correctAnswer: 35960,
        tolerance: 500,
        unit: 'V',
        explanation: 'V = (8.99×10⁹ × 2×10⁻⁶)/0.5 ≈ 35,960 V.',
      },
    ],
    commonMistake:
      "Confusing electric potential (a property of a POINT in space, in volts) with electric potential " +
      "ENERGY (a property of a specific charge placed at that point, in joules) — potential energy equals " +
      "charge times potential (PE = qV).",
    quickReview: [
      'V = kQ/r gives the electric potential at a distance from a point charge.',
      'Potential difference (voltage) is what drives current in circuits.',
      'Potential is energy PER UNIT CHARGE; multiply by charge to get actual potential energy.',
    ],
  },

  'equipotential-surfaces': {
    slug: 'equipotential-surfaces',
    title: 'Equipotential Surfaces',
    difficulty: 'medium',
    simpleExplanation:
      "An equipotential surface is an imaginary surface on which every point has the SAME electric " +
      "potential. Because no work is needed to move a charge along a surface of constant potential, " +
      "equipotential surfaces are always perpendicular to electric field lines.",
    whyItMatters:
      "Equipotential surfaces provide another useful way (alongside field lines) to visualise and reason " +
      "about electric fields, and the zero-work property along them has direct practical applications.",
    whyItWorks:
      "Since potential difference determines the work needed to move a charge (W = qΔV), moving along a " +
      "surface where potential never changes requires zero work — and since the electric force always " +
      "does work when there's a component along the direction of motion, a zero-work path must be exactly " +
      "perpendicular to the force (and therefore to the field lines) at every point.",
    realLifeExample: {
      title: "A bird safely perching on a high-voltage power line",
      scenario: 'A bird can perch on a single high-voltage power line without being electrocuted.',
      explanation: "The bird's entire body touches only one wire, which is (approximately) a single equipotential surface — since there is no significant potential DIFFERENCE across the small distance between the bird's feet on the same wire, no meaningful current flows through the bird, keeping it safe.",
    },
    practiceQuestions: [
      {
        id: 'equipotential-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is no work needed to move a charge along an equipotential surface?',
        options: [
          { id: 'a', text: 'Because potential does not change along the surface, so there is no potential difference to do work against.' },
          { id: 'b', text: 'Because equipotential surfaces have no electric field at all.' },
          { id: 'c', text: 'Because charges cannot move along equipotential surfaces.' },
          { id: 'd', text: 'Work is always required regardless of potential.' },
        ],
        correctOptionId: 'a',
        hints: ['W = qΔV — what happens if ΔV = 0?'],
        explanation: 'Since potential is constant along an equipotential surface, ΔV = 0 for any path along it, so no work is done moving a charge along that path.',
      },
    ],
    commonMistake:
      "Assuming equipotential surfaces are parallel to field lines — they are always PERPENDICULAR to " +
      "field lines, a common point of confusion.",
    quickReview: [
      'Equipotential surfaces: every point has the same electric potential.',
      'Always perpendicular to electric field lines.',
      'No work is required to move a charge along an equipotential surface.',
    ],
  },

  'electric-potential-of-the-earth': {
    slug: 'electric-potential-of-the-earth',
    title: 'Electric Potential of the Earth',
    difficulty: 'easy',
    simpleExplanation:
      "The Earth is conventionally taken to have an electric potential of exactly zero, and acts as an " +
      "essentially infinite reservoir of charge — this makes it a convenient, universal reference point " +
      "('ground' or 'earth') against which all other potentials are measured.",
    whyItMatters:
      "Using the Earth as a zero-potential reference makes electrical measurements and circuit design " +
      "practical and standardised — 'grounding' or 'earthing' a device connects it to this universal " +
      "reference, which is also an important electrical safety measure.",
    whyItWorks:
      "Because the Earth is enormous compared to the amount of charge typically added or removed from it " +
      "in any practical situation, its potential barely changes no matter how much charge flows into or " +
      "out of it — this makes it behave as an essentially infinite, stable reference (zero potential) " +
      "that any circuit can be safely connected to.",
    realLifeExample: {
      title: 'Electrical grounding for safety',
      scenario: "Electrical appliances often have a third 'earth' or 'ground' pin on their plug.",
      explanation: "This ground connection provides a safe path for any stray current (e.g. from a fault) to flow directly to the Earth's zero-potential reference, rather than through a person touching the appliance — a direct safety application of the Earth's role as a stable, zero-potential reservoir.",
    },
    practiceQuestions: [
      {
        id: 'earth-potential-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "Why is the Earth commonly used as a reference point (zero potential) in electrical systems?",
        options: [
          { id: 'a', text: "Its enormous size means its potential barely changes regardless of charge added or removed, making it a stable, universal reference." },
          { id: 'b', text: 'The Earth has no electrical properties at all.' },
          { id: 'c', text: 'The Earth always has the highest potential of any object.' },
          { id: 'd', text: 'The Earth cannot conduct electricity.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about the Earth's size compared to typical amounts of charge involved in circuits."],
        explanation: "The Earth's vast size makes it an effectively infinite, stable charge reservoir, so its potential stays essentially constant (taken as zero) regardless of typical charge transfers.",
      },
    ],
    commonMistake:
      "Thinking 'grounding' something removes all its charge instantly and completely — grounding provides " +
      "a path for charge to flow toward equilibrium with the Earth's stable zero-potential reference, not " +
      "an instantaneous, total discharge mechanism.",
    quickReview: [
      "The Earth's potential is conventionally defined as zero, used as a universal reference.",
      "The Earth's enormous size keeps its potential essentially constant.",
      'Grounding/earthing connects a circuit to this stable reference, an important safety measure.',
    ],
  },

  'potential-difference-between-parallel-plates': {
    slug: 'potential-difference-between-parallel-plates',
    title: 'Potential Difference Between Two Parallel Charged Plates',
    difficulty: 'medium',
    simpleExplanation:
      "Between two parallel plates carrying opposite charges, the electric field is uniform (constant " +
      "strength and direction), and the potential difference between the plates is simply the field " +
      "strength multiplied by the separation between them.",
    whyItMatters:
      "This relationship is the basis for how capacitors work, and provides a simple, precisely-controlled " +
      "way to create a known, uniform electric field in the lab.",
    formulaSlug: 'parallel-plate-pd-formula',
    workedExample: {
      id: 'parallel-plate-we-1',
      title: 'Finding the field strength between plates',
      problemStatement: 'Two parallel plates are 0.02 m apart with a potential difference of 240 V between them. Find the electric field strength.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for E.', math: 'E = V/d', explanation: 'V = 240 V, d = 0.02 m.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'E = 240/0.02', explanation: 'Divide voltage by plate separation.' },
        { step: 3, instruction: 'Simplify.', math: 'E = 12,000 V/m', explanation: 'This is the uniform field strength between the plates.' },
      ],
      finalAnswer: 'Electric field strength = 12,000 V/m.',
    },
    whyItWorks:
      "Because the field between parallel plates is uniform (unlike the field around a point charge), the " +
      "relationship between potential difference and distance is a simple direct proportion (rather than " +
      "the inverse relationship seen for a point charge) — the field strength is constant everywhere " +
      "between the plates, so V = Ed applies exactly at any point along the gap.",
    realLifeExample: {
      title: "A cathode ray tube's deflection plates",
      scenario: 'Older television and oscilloscope cathode ray tubes use parallel plates to deflect a beam of electrons.',
      explanation: 'By applying a controlled potential difference across parallel deflection plates, engineers create a precisely known, uniform electric field that predictably steers the electron beam — directly using this relationship between voltage, field strength, and plate separation.',
    },
    practiceQuestions: [
      {
        id: 'parallel-plate-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two parallel plates 0.05 m apart have an electric field strength of 4000 V/m between them. Find the potential difference.',
        hints: ['V = Ed.'],
        correctAnswer: 200,
        tolerance: 5,
        unit: 'V',
        explanation: 'V = 4000 × 0.05 = 200 V.',
      },
    ],
    commonMistake:
      "Applying V = kQ/r (the point-charge potential formula) to a parallel-plate setup — the field between " +
      "parallel plates is UNIFORM, not radiating from a point, so the much simpler V = Ed relationship " +
      "applies instead.",
    quickReview: [
      'V = Ed relates potential difference, field strength, and plate separation for a uniform field.',
      'The field between charged parallel plates is uniform, unlike the field around a point charge.',
      'This relationship underlies capacitors and devices like CRT deflection plates.',
    ],
  },
};
