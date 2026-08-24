import type { Concept } from '@/types/content';

export const chapter3PressureConcepts: Record<string, Concept> = {
  'atmospheric-pressure-explained': {
    slug: 'atmospheric-pressure-explained',
    title: 'Atmospheric Pressure',
    difficulty: 'medium',
    simpleExplanation:
      "Atmospheric pressure is the force per unit area exerted by the weight of the air in Earth's " +
      "atmosphere pressing down on everything at the surface. At sea level, it averages about 101,325 Pa " +
      "(roughly 100,000 Pa).",
    whyItMatters:
      "Atmospheric pressure affects countless everyday phenomena, from why drinking straws work to why " +
      "high-altitude cooking takes longer — understanding it as a real, measurable force is the foundation " +
      "for the rest of this chapter.",
    formulaSlug: 'pressure-definition-formula',
    workedExample: {
      id: 'atm-pressure-we-1',
      title: 'Finding force from atmospheric pressure',
      problemStatement: 'Atmospheric pressure is about 100,000 Pa. Find the total downward force it exerts on a table surface of area 1.5 m².',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for force.', math: 'F = P × A', explanation: 'P = 100,000 Pa, A = 1.5 m².' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'F = 100,000 × 1.5', explanation: 'Multiply pressure by area.' },
        { step: 3, instruction: 'Simplify.', math: 'F = 150,000 N', explanation: 'This is the total force from the air pressing on the table.' },
      ],
      finalAnswer: 'The atmosphere presses down on the table with a force of 150,000 N (about 15 tonnes-force).',
    },
    whyItWorks:
      "The air above us has weight, and that weight, spread over the entire surface of the Earth, produces " +
      "a continuous downward (and, since air is a fluid, also sideways and upward) pressure — we don't " +
      "notice it because it acts equally in all directions and our bodies are adapted to it.",
    realLifeExample: {
      title: 'Why a drinking straw works',
      scenario: 'Sucking on a straw draws liquid up into your mouth.',
      explanation: "Sucking reduces the air pressure inside the straw — since atmospheric pressure on the liquid's surface outside the straw is now greater than the pressure inside, it pushes the liquid up the straw and into your mouth. The liquid isn't being 'pulled'; it's being pushed by the now-unbalanced atmospheric pressure.",
    },
    practiceQuestions: [
      {
        id: 'atm-pressure-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Atmospheric pressure is 100,000 Pa. Find the force it exerts on a window of area 2 m².',
        hints: ['F = P × A.'],
        correctAnswer: 200000,
        tolerance: 2000,
        unit: 'N',
        explanation: 'F = 100,000 × 2 = 200,000 N.',
      },
    ],
    commonMistake:
      "Thinking we would feel crushed by atmospheric pressure — since it acts equally in all directions " +
      "(including from inside our bodies, which contain gases and fluids at similar pressure), the net " +
      "effect on us is balanced, which is why we don't notice it under normal conditions.",
    quickReview: [
      'Atmospheric pressure ≈ 100,000 Pa at sea level, from the weight of the air above.',
      'P = F/A relates pressure, force, and area.',
      'We don\'t feel crushed because pressure acts equally in all directions, balanced from inside and out.',
    ],
  },

  'the-mercury-barometer': {
    slug: 'the-mercury-barometer',
    title: 'The Barometer',
    difficulty: 'medium',
    simpleExplanation:
      'A barometer measures atmospheric pressure using a column of mercury: a tube filled with mercury is ' +
      'inverted into a mercury reservoir, and atmospheric pressure pushes mercury up the tube until the ' +
      'height of the column balances that pressure. At sea level, this height is about 760 mm.',
    whyItMatters:
      'The barometer was historically the primary instrument for measuring atmospheric pressure, and its ' +
      'design directly demonstrates the relationship between pressure, liquid column height, and density.',
    formulaSlug: 'barometric-pressure-formula',
    workedExample: {
      id: 'barometer-we-1',
      title: "Finding atmospheric pressure from a barometer's mercury height",
      problemStatement: 'A mercury barometer shows a column height of 0.76 m. Find atmospheric pressure (mercury density = 13,600 kg/m³, g = 9.8 m/s²).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = hρg', explanation: 'h = 0.76 m, ρ = 13,600 kg/m³, g = 9.8 m/s².' },
        { step: 2, instruction: 'Substitute values.', math: 'P = 0.76 × 13,600 × 9.8', explanation: 'Multiply all three values.' },
        { step: 3, instruction: 'Calculate.', math: 'P ≈ 101,293 Pa', explanation: 'This closely matches the standard atmospheric pressure of 101,325 Pa.' },
      ],
      finalAnswer: 'Atmospheric pressure ≈ 101,293 Pa.',
    },
    whyItWorks:
      "The mercury column rises until the pressure it exerts at its base (hρg) exactly balances the " +
      "atmospheric pressure pushing on the mercury reservoir below — mercury is used specifically because " +
      "its high density keeps the column height manageable (about 76 cm, versus over 10 m if water were " +
      "used instead).",
    realLifeExample: {
      title: 'Predicting weather with barometric pressure',
      scenario: 'Weather forecasters track changes in barometric (atmospheric) pressure to predict incoming weather.',
      explanation: 'A falling barometer reading (dropping mercury column height) typically signals an approaching low-pressure system, often bringing storms — this practical application relies directly on the barometer accurately measuring changes in atmospheric pressure.',
    },
    practiceQuestions: [
      {
        id: 'barometer-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A mercury barometer at high altitude shows a column height of only 0.60 m. Find the atmospheric pressure there (ρ = 13,600 kg/m³, g = 9.8 m/s²).',
        hints: ['P = hρg.'],
        correctAnswer: 79968,
        tolerance: 1000,
        unit: 'Pa',
        explanation: 'P = 0.60 × 13,600 × 9.8 ≈ 79,968 Pa — lower than sea level, as expected at altitude.',
      },
    ],
    commonMistake:
      "Assuming a wider barometer tube would give a different (higher) reading — the column HEIGHT depends " +
      "only on the pressure and the liquid's density, not on the tube's width; a wider tube simply holds " +
      "more mercury at the same height.",
    quickReview: [
      'A barometer measures atmospheric pressure from a supported mercury column height (~760 mm at sea level).',
      'P = hρg: the column rises until it balances atmospheric pressure.',
      'Mercury is used for its high density, keeping the column a manageable height.',
    ],
  },

  'pressure-in-a-liquid-b-level': {
    slug: 'pressure-in-a-liquid-b-level',
    title: 'Pressure in a Liquid',
    difficulty: 'medium',
    simpleExplanation:
      "Pressure in a liquid increases with depth, because deeper points must support the weight of all the " +
      "liquid above them (plus any pressure already at the surface, such as the atmosphere). This pressure " +
      "acts equally in all directions at a given depth.",
    whyItMatters:
      "Understanding how pressure varies with depth in a liquid explains phenomena from why deep-sea " +
      "submarines need reinforced hulls to why dams are built thicker at the base.",
    formulaSlug: 'liquid-pressure-formula',
    workedExample: {
      id: 'liquid-pressure-we-1',
      title: 'Finding pressure at a depth in water',
      problemStatement: 'Find the total pressure at a depth of 10 m in water (ρ = 1000 kg/m³, g = 9.8 m/s², atmospheric pressure P₀ = 100,000 Pa).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = P₀ + hρg', explanation: 'P₀ = 100,000 Pa, h = 10 m, ρ = 1000 kg/m³, g = 9.8 m/s².' },
        { step: 2, instruction: 'Calculate hρg.', math: 'hρg = 10 × 1000 × 9.8 = 98,000 Pa', explanation: 'This is the extra pressure from the water above.' },
        { step: 3, instruction: 'Add to atmospheric pressure.', math: 'P = 100,000 + 98,000 = 198,000 Pa', explanation: 'Total pressure at that depth.' },
      ],
      finalAnswer: 'Total pressure at 10 m depth ≈ 198,000 Pa (nearly double atmospheric pressure).',
    },
    whyItWorks:
      "Pressure at a given depth results from the accumulated weight of all the liquid stacked above that " +
      "point — the deeper the point, the more liquid weight is pressing down on it, so pressure increases " +
      "linearly with depth (for a liquid of constant density).",
    realLifeExample: {
      title: 'Why dams are built thicker at the base',
      scenario: 'Dam walls are noticeably thicker at the bottom than at the top.',
      explanation: 'Since water pressure increases with depth, the base of a dam experiences far greater pressure from the water than the top does — engineers design dams thicker at the base specifically to withstand this much larger pressure.',
    },
    practiceQuestions: [
      {
        id: 'liquid-pressure-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the additional pressure (beyond atmospheric) at a depth of 5 m in water (ρ = 1000 kg/m³, g = 9.8 m/s²).',
        hints: ['Extra pressure = hρg.'],
        correctAnswer: 49000,
        tolerance: 500,
        unit: 'Pa',
        explanation: 'hρg = 5 × 1000 × 9.8 = 49,000 Pa.',
      },
    ],
    commonMistake:
      "Forgetting to add atmospheric pressure (P₀) when finding the TOTAL pressure at a depth — hρg alone " +
      "gives only the additional pressure due to the liquid, not the full pressure including the " +
      "atmosphere pressing on the surface above.",
    quickReview: [
      'Pressure increases with depth: P = P₀ + hρg.',
      'Pressure at a given depth acts equally in all directions.',
      'Deeper structures (dam bases, submarine hulls) must withstand much greater pressure.',
    ],
  },

  'the-manometer': {
    slug: 'the-manometer',
    title: 'The Manometer',
    difficulty: 'medium',
    simpleExplanation:
      "A manometer is a U-shaped tube containing liquid, used to measure the pressure of a gas by comparing " +
      "it to atmospheric pressure. The gas is connected to one side of the tube; the height difference " +
      "between the liquid levels in the two arms directly indicates the pressure difference.",
    whyItMatters:
      "Manometers provide a simple, direct, and highly visual way to measure gas pressure, widely used in " +
      "laboratories and industrial settings where a precise pressure reading is needed.",
    formulaSlug: 'manometer-pressure-difference-formula',
    workedExample: {
      id: 'manometer-we-1',
      title: 'Finding gas pressure from a manometer reading',
      problemStatement: 'A manometer connected to a gas supply shows the liquid on the gas side is 0.15 m LOWER than the open side (mercury, ρ = 13,600 kg/m³, g = 9.8 m/s², atmospheric pressure = 101,300 Pa).',
      steps: [
        { step: 1, instruction: 'Calculate the pressure difference from the height difference.', math: 'ΔP = hρg = 0.15 × 13,600 × 9.8', explanation: 'h = 0.15 m is the height difference between the two arms.' },
        { step: 2, instruction: 'Calculate ΔP.', math: 'ΔP ≈ 19,992 Pa', explanation: 'This is how much higher the gas pressure is than atmospheric.' },
        { step: 3, instruction: 'Add to atmospheric pressure (since the gas side is lower, the gas pressure is higher).', math: 'P_gas = 101,300 + 19,992 ≈ 121,292 Pa', explanation: 'Gas pushed the liquid down on its side, so gas pressure exceeds atmospheric.' },
      ],
      finalAnswer: 'Gas pressure ≈ 121,292 Pa.',
    },
    whyItWorks:
      "If the gas pressure exceeds atmospheric pressure, it pushes the liquid down on the gas side and up " +
      "on the open side; the resulting height difference directly balances (and therefore measures) the " +
      "pressure difference, following the same hρg relationship used for a barometer.",
    realLifeExample: {
      title: 'Checking blood pressure with a mercury sphygmomanometer',
      scenario: 'Traditional blood pressure measurement devices use a mercury column (a form of manometer).',
      explanation: 'The height of mercury the cuff pressure can support directly indicates blood pressure — this is a direct medical application of the same manometer principle used to measure gas pressure in a laboratory.',
    },
    practiceQuestions: [
      {
        id: 'manometer-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A water manometer (ρ = 1000 kg/m³, g = 9.8 m/s²) shows a height difference of 0.20 m. Find the pressure difference this represents.',
        hints: ['ΔP = hρg.'],
        correctAnswer: 1960,
        tolerance: 20,
        unit: 'Pa',
        explanation: 'ΔP = 0.20 × 1000 × 9.8 = 1960 Pa.',
      },
    ],
    commonMistake:
      "Forgetting to determine whether the gas pressure is above or below atmospheric based on which side " +
      "of the manometer is lower — the height difference alone only gives the MAGNITUDE of the pressure " +
      "difference, not whether to add or subtract it from atmospheric pressure.",
    quickReview: [
      'A manometer measures gas pressure by comparing liquid column heights in a U-tube.',
      'ΔP = hρg gives the pressure difference from the observed height difference.',
      'Determine from which side is lower whether the gas pressure is above or below atmospheric.',
    ],
  },

  'archimedes-principle': {
    slug: 'archimedes-principle',
    title: "Archimedes' Principle",
    difficulty: 'medium',
    simpleExplanation:
      "Archimedes' principle states that any object submerged (fully or partly) in a fluid experiences an " +
      "upward buoyant force equal to the weight of the fluid the object displaces.",
    whyItMatters:
      "This principle explains why objects float or sink, and is essential for designing ships, " +
      "submarines, hot air balloons, and anything else meant to float or control its buoyancy.",
    formulaSlug: 'buoyant-force-formula',
    workedExample: {
      id: 'archimedes-we-1',
      title: 'Finding buoyant force',
      problemStatement: 'An object displaces 0.02 m³ of water when submerged. Find the buoyant force acting on it (ρ_water = 1000 kg/m³, g = 9.8 m/s²).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Fᵦ = ρVg', explanation: 'ρ = 1000 kg/m³, V = 0.02 m³, g = 9.8 m/s².' },
        { step: 2, instruction: 'Substitute values.', math: 'Fᵦ = 1000 × 0.02 × 9.8', explanation: 'Multiply the three values together.' },
        { step: 3, instruction: 'Calculate.', math: 'Fᵦ = 196 N', explanation: 'This is the upward buoyant force.' },
      ],
      finalAnswer: 'Buoyant force = 196 N.',
    },
    whyItWorks:
      "Fluid pressure increases with depth, so the fluid pushes upward on the bottom of a submerged object " +
      "with more pressure than it pushes downward on the top — this net upward pressure difference, summed " +
      "over the object's surface, is exactly equal to the weight of the fluid displaced.",
    realLifeExample: {
      title: 'Why massive steel ships float',
      scenario: 'A steel ship, despite being made of a material far denser than water, floats easily.',
      explanation: "The ship's hollow hull shape displaces a huge volume of water — since the buoyant force depends on the volume of water displaced (not the material the ship is made of), the ship's overall shape displaces enough water that the buoyant force equals the ship's total weight, allowing it to float.",
    },
    practiceQuestions: [
      {
        id: 'archimedes-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object displaces 0.005 m³ of water. Find the buoyant force (ρ = 1000 kg/m³, g = 9.8 m/s²).',
        hints: ['Fᵦ = ρVg.'],
        correctAnswer: 49,
        tolerance: 1,
        unit: 'N',
        explanation: 'Fᵦ = 1000 × 0.005 × 9.8 = 49 N.',
      },
    ],
    commonMistake:
      "Thinking buoyant force depends on the object's own weight or density — it depends only on the " +
      "VOLUME OF FLUID DISPLACED and the fluid's density; a heavy, dense object displacing little fluid " +
      "gets little buoyant force (and sinks), while a light object shaped to displace a lot of fluid " +
      "(like a ship's hull) gets a large buoyant force (and floats).",
    quickReview: [
      "Buoyant force Fᵦ = ρVg equals the weight of fluid displaced.",
      'Depends on the volume of fluid displaced, not the object\'s own material or weight.',
      "Ships float because their hull shape displaces enough water to equal the ship's weight.",
    ],
  },

  'pascals-law': {
    slug: 'pascals-law',
    title: "Pascal's Law",
    difficulty: 'medium',
    simpleExplanation:
      "Pascal's law states that pressure applied to an enclosed fluid is transmitted equally, undiminished, " +
      "throughout the fluid in all directions. This is the principle behind hydraulic systems, where a " +
      "small force on a small piston can produce a much larger force on a larger piston.",
    whyItMatters:
      "Pascal's law is the working principle behind hydraulic brakes, car jacks, hydraulic presses, and " +
      "countless other machines that multiply force using fluids.",
    formulaSlug: 'pascals-law-formula',
    workedExample: {
      id: 'pascals-law-we-1',
      title: 'Finding output force in a hydraulic press',
      problemStatement: 'A hydraulic press has a small piston of area 0.02 m² and a large piston of area 0.5 m². A force of 100 N is applied to the small piston. Find the force produced on the large piston.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F₁/A₁ = F₂/A₂', explanation: 'F₁ = 100 N, A₁ = 0.02 m², A₂ = 0.5 m².' },
        { step: 2, instruction: 'Rearrange for F₂.', math: 'F₂ = F₁ × (A₂/A₁) = 100 × (0.5/0.02)', explanation: 'Solve for the unknown output force.' },
        { step: 3, instruction: 'Calculate.', math: 'F₂ = 100 × 25 = 2500 N', explanation: 'The output force is 25 times larger than the input.' },
      ],
      finalAnswer: 'The large piston produces a force of 2500 N.',
    },
    whyItWorks:
      "Since pressure (P = F/A) is transmitted equally throughout the enclosed fluid, the pressure at both " +
      "pistons must be the same — this forces F₁/A₁ to equal F₂/A₂, meaning a larger piston area must " +
      "correspondingly produce a larger output force to maintain that equal pressure.",
    realLifeExample: {
      title: 'Hydraulic car jacks',
      scenario: 'A hydraulic car jack lets one person lift a car weighing over a tonne using only modest hand force on a lever.',
      explanation: "The jack's small piston (pumped by hand) has a much smaller area than its large piston (supporting the car) — Pascal's law means the small force is multiplied in proportion to the ratio of piston areas, making it possible to lift the heavy car with modest effort.",
    },
    practiceQuestions: [
      {
        id: 'pascals-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A hydraulic system has a small piston of area 0.01 m² and large piston of area 0.3 m². A force of 50 N is applied to the small piston. Find the force on the large piston.',
        hints: ['F₁/A₁ = F₂/A₂.'],
        correctAnswer: 1500,
        tolerance: 20,
        unit: 'N',
        explanation: 'F₂ = 50 × (0.3/0.01) = 50 × 30 = 1500 N.',
      },
    ],
    commonMistake:
      "Thinking a hydraulic system creates energy from nothing — it multiplies FORCE, but the large piston " +
      "moves a proportionally smaller distance than the small piston, so the work done (force × distance) " +
      "is conserved, not increased.",
    quickReview: [
      "Pascal's law: pressure in an enclosed fluid is transmitted equally in all directions.",
      'F₁/A₁ = F₂/A₂ — a larger output piston area means a proportionally larger output force.',
      'Force is multiplied, but the large piston moves a smaller distance (work is conserved).',
    ],
  },
};
