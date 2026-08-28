import type { Concept } from '@/types/content';

export const chapter1AUnitsConcepts: Record<string, Concept> = {
  'basic-and-derived-units': {
    slug: 'basic-and-derived-units',
    title: 'Basic and Derived Units',
    difficulty: 'easy',
    simpleExplanation:
      'A basic (or base) unit measures one of the handful of fundamental physical quantities that ' +
      "cannot be broken down into anything simpler — length, mass, time, electric current, " +
      'temperature, amount of substance, and luminous intensity. A derived unit is built by ' +
      'combining base units through multiplication or division — for example, speed (metres per ' +
      'second) is length divided by time.',
    whyItMatters:
      'Every physical quantity in science, no matter how complicated, can be expressed using just ' +
      'these seven base units combined together — this is what lets physicists check whether an ' +
      'equation even makes sense, before checking whether the numbers are right.',
    workedExample: {
      id: 'basic-derived-worked-1',
      title: 'Find the base units that make up the newton (the unit of force)',
      problemStatement: 'Force is defined by F = ma (mass × acceleration). Express the newton in terms of base units.',
      steps: [
        { step: 1, instruction: 'Write the base unit of mass.', math: 'mass → kg', explanation: 'Mass is one of the seven base quantities, with base unit the kilogram.' },
        { step: 2, instruction: 'Write acceleration as change in velocity per unit time, then break velocity down further.', math: 'acceleration → (m/s)/s = m/s²', explanation: 'Velocity is length/time (m/s); acceleration is velocity/time, so length/time².' },
        { step: 3, instruction: 'Multiply mass by acceleration to get the derived unit.', math: 'newton (N) = kg × m/s² = kg·m/s²', explanation: 'Combining the two base-unit expressions gives the newton entirely in terms of base units.' },
      ],
      finalAnswer: '1 N = 1 kg·m/s²',
    },
    whyItWorks:
      'Because every derived quantity is defined by a mathematical relationship (like F = ma), ' +
      'substituting the base units for each quantity in that relationship automatically gives the ' +
      'correct combination of base units for the derived unit — this is called dimensional consistency.',
    realLifeExample: {
      title: 'Checking an engineering formula by its units',
      scenario: 'An engineer derives a new formula and wants to sanity-check it before using it.',
      explanation: 'If the units on both sides of the formula do not reduce to the same combination of base units, the formula must be wrong — this quick check catches many algebra mistakes before they cause real problems.',
    },
    practiceQuestions: [
      {
        id: 'basic-derived-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is a base (basic) quantity, not a derived one?',
        hints: ['A base quantity cannot be broken down into other quantities.'],
        options: [
          { id: 'a', text: 'Speed' },
          { id: 'b', text: 'Force' },
          { id: 'c', text: 'Time' },
          { id: 'd', text: 'Pressure' },
        ],
        correctOptionId: 'c',
        explanation: 'Time is one of the seven base quantities; speed, force and pressure are all derived from combinations of base quantities.',
      },
      {
        id: 'basic-derived-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Pressure is defined as force divided by area. In base units, what is the unit of pressure?',
        hints: ['Force in base units is kg·m/s². Area is m².', 'Divide the units of force by the units of area.'],
        options: [
          { id: 'a', text: 'kg/(m·s²)' },
          { id: 'b', text: 'kg·m²/s²' },
          { id: 'c', text: 'kg·m/s' },
          { id: 'd', text: 'kg/(m²·s)' },
        ],
        correctOptionId: 'a',
        explanation: 'pressure = force/area = (kg·m/s²)/m² = kg/(m·s²), which is exactly the base-unit expansion of the pascal.',
      },
    ],
    commonMistake:
      "Treating a derived unit (like the newton or the pascal) as though it were fundamental — " +
      'every named derived unit is really just a shorthand for a specific combination of the seven base units.',
    quickReview: [
      'Base units measure the seven fundamental quantities: length, mass, time, current, temperature, amount of substance, luminous intensity.',
      'Derived units are built by combining base units (e.g. speed = length/time).',
      'Checking that units match on both sides of an equation is a fast way to catch mistakes.',
    ],
  },

  'systems-of-units': {
    slug: 'systems-of-units',
    title: 'System of Units',
    difficulty: 'easy',
    simpleExplanation:
      'A system of units is a complete, agreed-upon set of units for every physical quantity. The ' +
      'International System of Units (SI) — built on the metre, kilogram and second — is the ' +
      'system used almost everywhere in science today. Older systems include the CGS system ' +
      '(centimetre-gram-second) and the FPS system (foot-pound-second).',
    whyItMatters:
      "Using one shared system worldwide means a measurement made in one country means exactly the " +
      'same thing in every other country — essential for science, trade, medicine, and engineering ' +
      'to all work together safely.',
    workedExample: {
      id: 'systems-worked-1',
      title: 'Convert a CGS measurement into SI units',
      problemStatement: 'A length is measured as 250 cm in the CGS system. Express it in the SI unit of length (metres).',
      steps: [
        { step: 1, instruction: 'Recall the conversion factor between centimetres and metres.', math: '1 m = 100 cm', explanation: 'The metre is the SI base unit of length; the centimetre is one-hundredth of a metre.' },
        { step: 2, instruction: 'Divide the CGS value by 100 to convert to metres.', math: '250 cm ÷ 100 = 2.5', explanation: 'Dividing by the same factor that relates the two units converts correctly between them.' },
      ],
      finalAnswer: '250 cm = 2.5 m',
    },
    whyItWorks:
      'Every system of units is internally consistent, so converting between systems is always just ' +
      'a matter of multiplying or dividing by the fixed ratio that relates the two units for the ' +
      'same quantity.',
    realLifeExample: {
      title: 'A 1999 spacecraft mix-up',
      scenario: "NASA's Mars Climate Orbiter was lost in 1999 partly because one engineering team used pound-force units (an old imperial system) while another used SI newtons for the same calculation.",
      explanation: 'The unnoticed mismatch between the two systems threw off a critical navigation calculation, showing how essential it is for everyone working together to use the same system of units.',
    },
    practiceQuestions: [
      {
        id: 'systems-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which system of units is now used almost universally in science?',
        hints: ['Its base units are the metre, kilogram and second.'],
        options: [
          { id: 'a', text: 'CGS system' },
          { id: 'b', text: 'FPS system' },
          { id: 'c', text: 'SI (International System of Units)' },
          { id: 'd', text: 'MTS system' },
        ],
        correctOptionId: 'c',
        explanation: 'The SI system, built on the metre, kilogram and second, is the internationally agreed system used throughout modern science.',
      },
      {
        id: 'systems-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A mass is measured as 3.2 kg in SI units. Express this mass in grams (the CGS unit of mass).',
        hints: ['1 kg = 1000 g.', '3.2 × 1000.'],
        correctAnswer: 3200,
        unit: 'g',
        explanation: '3.2 kg = 3.2 × 1000 = 3200 g.',
      },
    ],
    commonMistake:
      'Mixing units from two different systems within the same calculation (like using centimetres ' +
      'in a formula that expects metres) without converting first — this is one of the most common ' +
      'sources of wrong answers in physics.',
    quickReview: [
      'SI (metre, kilogram, second) is the internationally agreed system of units used in modern science.',
      'CGS (centimetre-gram-second) and FPS (foot-pound-second) are older systems, still occasionally seen.',
      'Always convert every quantity into one consistent system before calculating.',
    ],
  },

  'si-prefixes': {
    slug: 'si-prefixes',
    title: 'Prefixes',
    difficulty: 'easy',
    simpleExplanation:
      'SI prefixes are small words (or symbols) added in front of a unit to represent it multiplied ' +
      'by a power of ten — for example, "kilo" means × 1000, and "milli" means × 0.001. They let very ' +
      'large or very small quantities be written with manageable numbers.',
    whyItMatters:
      'Prefixes avoid writing out long strings of zeros — a wavelength of light is far easier to ' +
      'read as 500 nanometres than as 0.0000005 metres.',
    workedExample: {
      id: 'prefixes-worked-1',
      title: 'Convert between a prefixed unit and the base unit',
      problemStatement: 'A capacitor is rated at 4.7 microfarads (μF). Express this value in farads (F), the base SI unit.',
      steps: [
        { step: 1, instruction: 'Recall the meaning of the prefix "micro" (μ).', math: '1 μ = 10⁻⁶ = 0.000001', explanation: 'Micro means one-millionth.' },
        { step: 2, instruction: 'Multiply the given value by this factor.', math: '4.7 × 10⁻⁶ F', explanation: 'Substituting the prefix\'s meaning converts the value into the base unit.' },
      ],
      finalAnswer: '4.7 μF = 0.0000047 F = 4.7 × 10⁻⁶ F',
    },
    whyItWorks:
      'Because each prefix is defined as an exact power of ten, converting a prefixed unit into its ' +
      'base unit is always just multiplying by that power of ten — no other adjustment is needed.',
    realLifeExample: {
      title: 'Reading a food nutrition label',
      scenario: 'A nutrition label lists vitamin content in micrograms (μg) and mineral content in milligrams (mg).',
      explanation: 'Using the right prefix for each nutrient keeps the numbers on the label small and readable, instead of listing amounts as tiny fractions of a gram.',
    },
    practiceQuestions: [
      {
        id: 'prefixes-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A distance is 5 kilometres (km). Express this in metres.',
        hints: ['kilo means × 1000.', '5 × 1000.'],
        correctAnswer: 5000,
        unit: 'm',
        explanation: '5 km = 5 × 1000 = 5000 m.',
      },
      {
        id: 'prefixes-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A signal has a wavelength of 650 nanometres (nm). Express this in metres, in scientific notation. (Enter just the coefficient, e.g. for 6.5 × 10⁻⁷, enter 6.5.)',
        hints: ['nano means × 10⁻⁹.', '650 × 10⁻⁹ = 6.5 × 10⁻⁷.'],
        correctAnswer: 6.5,
        explanation: '650 nm = 650 × 10⁻⁹ m = 6.5 × 10⁻⁷ m.',
      },
    ],
    commonMistake:
      'Confusing similar-looking prefixes — especially "milli" (× 10⁻³) with "micro" (× 10⁻⁶), or ' +
      '"mega" (× 10⁶) with "milli" — a single mixed-up prefix changes an answer by a factor of a ' +
      'thousand or more.',
    quickReview: [
      'Common prefixes: giga (10⁹), mega (10⁶), kilo (10³), centi (10⁻²), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹).',
      'A prefix always means "multiply the base unit by this power of ten."',
      'Always double-check which prefix is meant — mixing up milli and micro is a common error.',
    ],
  },

  'standards-of-measurement': {
    slug: 'standards-of-measurement',
    title: 'Standards and Units',
    difficulty: 'medium',
    simpleExplanation:
      'A standard is the fixed, universally agreed reference that gives a unit its exact meaning. ' +
      'Modern SI standards are defined using fundamental constants of nature rather than physical ' +
      'objects — the second is defined by a specific number of vibrations of a caesium atom, the ' +
      'metre is defined using the speed of light, and the kilogram is now defined using the Planck constant.',
    whyItMatters:
      'Defining units from unchanging constants of nature (instead of a single physical object kept ' +
      'in a vault) means every laboratory in the world can reproduce the exact same standard ' +
      'independently, without needing to compare against one original object.',
    workedExample: {
      id: 'standards-worked-1',
      title: 'Use the modern definition of the metre',
      problemStatement: 'The metre is defined as the distance light travels in a vacuum in exactly 1/299,792,458 of a second. Use this to find how far light travels in exactly 2 metres worth of time.',
      steps: [
        { step: 1, instruction: 'Recall the time for light to travel exactly 1 metre.', math: 't₁ = 1/299,792,458 s', explanation: 'This is the defining relationship for the metre.' },
        { step: 2, instruction: 'Multiply by 2 for the time to travel 2 metres.', math: 't₂ = 2/299,792,458 ≈ 6.67 × 10⁻⁹ s', explanation: 'Since light travels at a constant speed, doubling the distance doubles the time.' },
      ],
      finalAnswer: 'Light takes about 6.67 nanoseconds to travel 2 metres.',
    },
    whyItWorks:
      'Because the speed of light in a vacuum is a fixed constant of nature, defining the metre in ' +
      'terms of a time interval and this constant fixes the metre exactly, with no ambiguity, ' +
      'anywhere in the universe.',
    realLifeExample: {
      title: 'Retiring "Le Grand K"',
      scenario: 'Until 2019, the kilogram was defined by a single platinum-iridium cylinder kept in a vault in France, nicknamed "Le Grand K."',
      explanation: 'Because that one physical object could very slightly change mass over time (through cleaning or contamination), the kilogram was redefined in 2019 using the Planck constant instead — a fixed number that never changes.',
    },
    practiceQuestions: [
      {
        id: 'standards-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'The SI second is defined using which of the following?',
        hints: ['Think about what provides an extremely stable, repeatable "tick."'],
        options: [
          { id: 'a', text: 'The rotation of the Earth' },
          { id: 'b', text: 'A specific number of vibrations of a caesium atom' },
          { id: 'c', text: 'The swing of a specific pendulum kept in France' },
          { id: 'd', text: 'The speed of sound in air' },
        ],
        correctOptionId: 'b',
        explanation: 'The second is defined as a fixed number of vibrations of a caesium-133 atom — a far more stable and reproducible standard than the (slowly changing) rotation of the Earth.',
      },
    ],
    commonMistake:
      'Assuming units are defined by a single physical object kept somewhere — modern SI standards ' +
      'are deliberately defined by unchanging constants of nature instead, precisely so no single ' +
      'physical object needs to be protected or compared against.',
    quickReview: [
      'A standard is the fixed reference that gives a unit its exact meaning.',
      'Modern SI units are defined using fundamental constants of nature (speed of light, caesium vibrations, the Planck constant).',
      'This makes the standards reproducible anywhere, without relying on one physical object.',
    ],
  },

  'vernier-caliper': {
    slug: 'vernier-caliper',
    title: 'The Vernier Caliper',
    difficulty: 'medium',
    simpleExplanation:
      'A vernier caliper measures length more precisely than a plain ruler by using two scales: a ' +
      'fixed main scale, and a sliding vernier scale whose divisions are very slightly smaller than ' +
      'the main scale\'s. The main scale gives a rough reading, and whichever vernier division lines ' +
      'up exactly with a main scale division gives a small, precise correction.',
    whyItMatters:
      'A vernier caliper can measure to a precision of about 0.01–0.02 cm — far finer than the ' +
      '0.1 cm a plain ruler allows — making it essential for measuring small objects, diameters, ' +
      'and depths accurately in a school or engineering lab.',
    formulaSlug: 'vernier-caliper-formula',
    workedExample: {
      id: 'vernier-worked-1',
      title: 'Read a vernier caliper measurement',
      problemStatement: 'A vernier caliper has a least count of 0.01 cm. The main scale reads 2.3 cm, and the 6th vernier division coincides exactly with a main scale line. Find the total reading.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Total reading = MSR + (VC × LC)', explanation: 'The main scale reading plus a small correction from the vernier scale.' },
        { step: 2, instruction: 'Substitute the values.', math: 'Total reading = 2.3 + (6 × 0.01)', explanation: 'MSR = 2.3 cm, VC = 6, LC = 0.01 cm.' },
        { step: 3, instruction: 'Calculate.', math: 'Total reading = 2.3 + 0.06 = 2.36', explanation: '6 × 0.01 = 0.06, then 2.3 + 0.06 = 2.36.' },
      ],
      finalAnswer: 'Total reading = 2.36 cm',
    },
    whyItWorks:
      "Since the vernier scale's divisions are deliberately made slightly smaller than the main " +
      "scale's, exactly one vernier line will align with a main scale line at a position that " +
      'reveals the fractional part of the measurement the main scale alone could not show.',
    realLifeExample: {
      title: 'Quality control in manufacturing',
      scenario: 'A factory checks that machined metal parts meet a required diameter to within a fraction of a millimetre.',
      explanation: 'A vernier caliper (or its digital equivalent) is the standard tool for this kind of precise dimensional check on a factory floor.',
    },
    practiceQuestions: [
      {
        id: 'vernier-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A vernier caliper (least count 0.01 cm) has a main scale reading of 4.1 cm, with the 3rd vernier division coinciding. Find the total reading.',
        hints: ['Total reading = MSR + (VC × LC).', '4.1 + (3 × 0.01).'],
        correctAnswer: 4.13,
        unit: 'cm',
        explanation: 'Total reading = 4.1 + (3×0.01) = 4.1 + 0.03 = 4.13 cm.',
      },
    ],
    commonMistake:
      'Reading the main scale value from the wrong line (the zero of the vernier scale, not the ' +
      'coinciding division) — the main scale reading is always taken from where the vernier scale\'s ' +
      'zero mark sits, then the coinciding division only adds the small correction.',
    quickReview: [
      'Total reading = MSR + (VC × LC), with LC = 1 MSD − 1 VSD.',
      'A vernier caliper typically has a least count of 0.01 cm.',
      'Used for external length, internal diameter, and depth measurements.',
    ],
  },

  'micrometer-screw-gauge': {
    slug: 'micrometer-screw-gauge',
    title: 'The Micrometer Screw Gauge',
    difficulty: 'medium',
    simpleExplanation:
      'A micrometer screw gauge measures very small lengths — like the diameter of a wire — using a ' +
      'finely threaded screw. Turning the screw by one full rotation advances it by a tiny, exactly ' +
      'known distance (the pitch); a scale on the rotating thimble shows fractions of that turn.',
    whyItMatters:
      'A micrometer typically measures to a precision of about 0.001 cm — ten times finer than a ' +
      'vernier caliper — making it the tool of choice for measuring genuinely tiny lengths, like the ' +
      'thickness of a sheet of paper or a strand of wire.',
    formulaSlug: 'micrometer-screw-gauge-formula',
    workedExample: {
      id: 'micrometer-worked-1',
      title: 'Read a micrometer screw gauge measurement',
      problemStatement: 'A micrometer has a pitch of 0.05 cm and 50 circular scale divisions, giving a least count of 0.001 cm. The main scale reads 0.5 cm, and the circular scale reading is 20. Find the total reading.',
      steps: [
        { step: 1, instruction: 'Confirm the least count.', math: 'LC = pitch / divisions = 0.05 / 50 = 0.001', explanation: 'The pitch is spread over 50 divisions on the thimble.' },
        { step: 2, instruction: 'Write the formula.', math: 'Total reading = MSR + (CSR × LC)', explanation: 'The main scale reading plus the fine correction from the circular scale.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'Total reading = 0.5 + (20 × 0.001) = 0.5 + 0.02', explanation: 'CSR = 20, LC = 0.001 cm.' },
      ],
      finalAnswer: 'Total reading = 0.52 cm',
    },
    whyItWorks:
      "Because the screw's pitch is precisely known and evenly divided across the thimble's " +
      "circular scale, each division on the thimble corresponds to an exact, tiny fraction of the " +
      "screw's forward motion — reading that division converts directly into a length.",
    realLifeExample: {
      title: 'Measuring wire diameter',
      scenario: 'An electronics workshop needs to confirm that a spool of wire matches its rated diameter (e.g. exactly 0.5 mm) before using it in a precision circuit.',
      explanation: 'A micrometer screw gauge is the standard tool for this kind of sub-millimetre precision check.',
    },
    practiceQuestions: [
      {
        id: 'micrometer-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A micrometer (least count 0.001 cm) has a main scale reading of 0.3 cm and a circular scale reading of 15. Find the total reading.',
        hints: ['Total reading = MSR + (CSR × LC).', '0.3 + (15 × 0.001).'],
        correctAnswer: 0.315,
        unit: 'cm',
        explanation: 'Total reading = 0.3 + (15×0.001) = 0.3 + 0.015 = 0.315 cm.',
      },
    ],
    commonMistake:
      "Forgetting to check for (and subtract) any zero error — if the reading isn't exactly zero " +
      'when the jaws are fully closed, that offset must be subtracted from every later measurement.',
    quickReview: [
      'Total reading = MSR + (CSR × LC), with LC = pitch / number of circular divisions.',
      'A micrometer is about ten times more precise than a vernier caliper.',
      'Always check for zero error before taking a measurement.',
    ],
  },

  'measurement-of-mass': {
    slug: 'measurement-of-mass',
    title: 'Measurement of Mass',
    difficulty: 'easy',
    simpleExplanation:
      'Mass is measured by comparing an unknown mass against known standard masses, using a balance. ' +
      'A beam balance compares two masses directly by seeing when they balance each other; a modern ' +
      'electronic balance instead measures the force needed to support the object and converts that ' +
      'into a mass reading.',
    whyItMatters:
      "Accurate mass measurement underlies everything from a pharmacy weighing out a precise dose " +
      'of medicine, to a jeweller weighing gold, to a chemist measuring reactants for an experiment.',
    workedExample: {
      id: 'mass-worked-1',
      title: 'Find an unknown mass using a beam balance',
      problemStatement: 'A beam balance balances exactly when an object is placed on one pan and standard masses of 200 g, 50 g, and 5 g are placed on the other pan. Find the mass of the object.',
      steps: [
        { step: 1, instruction: 'Recognize that a balanced beam means both pans have equal mass.', explanation: 'The beam balance is designed to be level only when the masses on both sides are exactly equal.' },
        { step: 2, instruction: 'Add up the standard masses used.', math: '200 + 50 + 5 = 255', explanation: 'The total of the known masses on the other pan equals the unknown mass.' },
      ],
      finalAnswer: 'Mass of the object = 255 g',
    },
    whyItWorks:
      'A beam balance works by comparing torques (turning effects) on either side of a central ' +
      'pivot — it only settles level when the two masses (and hence the two turning effects) are ' +
      'exactly equal, which is why matching the pans with known masses gives the unknown mass directly.',
    realLifeExample: {
      title: 'A pharmacy weighing a dose',
      scenario: 'A pharmacist needs to measure out an exact quantity of a powdered medicine.',
      explanation: 'A precise balance (traditionally a beam balance, now usually electronic) ensures the patient receives exactly the prescribed dose — a real safety requirement, not just a formality.',
    },
    practiceQuestions: [
      {
        id: 'mass-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A beam balance balances when an object is compared against standard masses of 100 g, 20 g, and 2 g. Find the mass of the object.',
        hints: ['Add up all the standard masses used.', '100 + 20 + 2.'],
        correctAnswer: 122,
        unit: 'g',
        explanation: 'Mass = 100 + 20 + 2 = 122 g.',
      },
    ],
    commonMistake:
      "Confusing mass with weight — mass (measured in kilograms) is the amount of matter in an " +
      'object and stays the same everywhere, while weight is the force of gravity on that mass and ' +
      'changes from place to place.',
    quickReview: [
      'Mass is measured by comparison against known standard masses, using a balance.',
      'A beam balance compares two masses directly; an electronic balance measures a supporting force.',
      'Mass (kg) is not the same as weight (a force, in newtons).',
    ],
  },

  'measurement-of-time': {
    slug: 'measurement-of-time',
    title: 'Measurement of Time',
    difficulty: 'medium',
    simpleExplanation:
      'Time is measured by counting a repeating, regular event — historically the swing of a ' +
      'pendulum, and today the extremely stable vibrations of a caesium atom inside an atomic clock. ' +
      'A simple pendulum\'s period (the time for one complete swing) depends only on its length and ' +
      'the local gravitational acceleration, which is what makes it useful as a timekeeping standard.',
    whyItMatters:
      'A reliable time standard is just as essential as a reliable length or mass standard — GPS ' +
      'navigation, scientific experiments, and international commerce all depend on everyone sharing ' +
      'exactly the same definition of a second.',
    formulaSlug: 'simple-pendulum-period-formula',
    workedExample: {
      id: 'time-worked-1',
      title: "Find a pendulum's period",
      problemStatement: 'A simple pendulum has a length of 1.0 m. Using g = 9.8 m/s², find its period.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'T = 2π√(L/g)', explanation: 'The period depends on the length and on local gravity.' },
        { step: 2, instruction: 'Substitute the values.', math: 'T = 2π√(1.0/9.8)', explanation: 'L = 1.0 m, g = 9.8 m/s².' },
        { step: 3, instruction: 'Calculate inside the square root, then finish.', math: 'T = 2π√(0.102) ≈ 2π × 0.319 ≈ 2.01', explanation: '1.0/9.8 ≈ 0.102; √0.102 ≈ 0.319; 2π × 0.319 ≈ 2.01.' },
      ],
      finalAnswer: 'T ≈ 2.0 s',
    },
    whyItWorks:
      'A pendulum converts gravitational potential energy into motion and back again in a cycle ' +
      "whose timing depends only on how far the bob has to swing (set by its length) and how " +
      'strongly gravity pulls it back — not on its mass or the width of the swing, for small angles.',
    realLifeExample: {
      title: 'Grandfather clocks',
      scenario: 'Traditional pendulum (grandfather) clocks kept time for centuries using exactly this principle.',
      explanation: "Adjusting the pendulum's length very slightly is how these clocks were fine-tuned to keep accurate time — a longer pendulum swings slower, a shorter one faster.",
    },
    practiceQuestions: [
      {
        id: 'time-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A simple pendulum has a length of 2.5 m. Using g = 9.8 m/s², find its period. (Round to 1 decimal place.)',
        hints: ['T = 2π√(L/g).', '2π√(2.5/9.8).'],
        correctAnswer: 3.2,
        tolerance: 0.1,
        unit: 's',
        explanation: 'T = 2π√(2.5/9.8) = 2π√(0.255) ≈ 2π×0.505 ≈ 3.2 s.',
      },
    ],
    commonMistake:
      "Assuming a heavier pendulum bob swings with a different period — the period of a simple " +
      'pendulum does not depend on its mass at all, only on its length and on g.',
    quickReview: [
      'T = 2π√(L/g) for a simple pendulum.',
      'A pendulum\'s period depends only on its length and on local gravity, not on its mass.',
      'Modern time standards use caesium atomic clocks, far more stable than any pendulum.',
    ],
  },
};
