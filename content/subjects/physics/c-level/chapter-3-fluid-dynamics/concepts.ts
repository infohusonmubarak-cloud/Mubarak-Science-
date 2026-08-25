import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 3 — Fluid Dynamics. Matches the
// textbook's section list: laminar and turbulent flow; the equation of
// continuity; Bernoulli's equation and its manifestations; viscosity;
// surface tension and capillarity. The continuity and Bernoulli worked
// examples deliberately share the same numbers (v₁=2 m/s, v₂=8 m/s) for
// pedagogical continuity, the way earlier chapters reuse one running example.
export const chapter3CFluidConcepts: Record<string, Concept> = {
  'laminar-and-turbulent-flow': {
    slug: 'laminar-and-turbulent-flow',
    title: 'Laminar and Turbulent Flow',
    difficulty: 'medium',
    simpleExplanation:
      'In laminar flow, a fluid moves in smooth, parallel layers that do not mix. In turbulent flow, the fluid ' +
      'moves chaotically, with swirling eddies and mixing between layers. Whether a flow is laminar or ' +
      'turbulent is predicted by a dimensionless number called the Reynolds number (Re).',
    whyItMatters:
      'Whether a flow is laminar or turbulent completely changes how it behaves — turbulent flow causes far ' +
      'more resistance and mixing, which matters enormously in designing pipes, aircraft, and blood vessels alike.',
    formulaSlug: 'reynolds-number-formula',
    workedExample: {
      id: 'laminar-turbulent-worked-1',
      title: 'Classify a flow using the Reynolds number',
      problemStatement: 'Water (ρ=1000 kg/m³, η=0.001 Pa·s) flows through a pipe of diameter 0.02 m at 0.5 m/s. Classify the flow.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'ρ=1000 kg/m³, v=0.5 m/s, d=0.02 m, η=0.001 Pa·s', explanation: 'All four quantities are needed for the Reynolds number.' },
        { step: 2, instruction: 'Apply the Reynolds number formula.', math: 'Re = ρvd/η = (1000)(0.5)(0.02)/0.001', explanation: 'Substitute all four values.' },
        { step: 3, instruction: 'Compute the result.', math: 'Re = 10/0.001 = 10000', explanation: 'Multiply the numerator, then divide by η.' },
        { step: 4, instruction: 'Classify the flow.', math: 'Re = 10000 > 4000', explanation: 'A Reynolds number above about 4000 indicates turbulent flow.' },
      ],
      finalAnswer: 'Re = 10000 — the flow is turbulent.',
    },
    whyItWorks:
      'The Reynolds number compares the fluid\'s inertia (which tends to keep it moving in a disorderly way once ' +
      'disturbed) to its viscosity (which tends to smooth out and damp disturbances) — when inertia dominates ' +
      '(high Re), disturbances grow into turbulence; when viscosity dominates (low Re), disturbances die out and the flow stays smooth.',
    realLifeExample: {
      title: 'Smoke rising from a candle',
      scenario: 'Smoke from a candle rises smoothly in a thin column near the flame, then suddenly breaks into ' +
        'swirling, chaotic patterns higher up.',
      explanation: 'The smooth column is laminar flow (low Reynolds number, near the source); as the smoke ' +
        'speeds up and spreads, the Reynolds number rises past the threshold and the flow becomes turbulent.',
    },
    practiceQuestions: [
      {
        id: 'laminar-turbulent-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Water (ρ=1000 kg/m³, η=0.001 Pa·s) flows through a pipe of diameter 0.01 m at 0.1 m/s. Find the Reynolds number.',
        hints: ['Re = ρvd/η.'],
        correctAnswer: 1000,
        explanation: 'Re = (1000)(0.1)(0.01)/0.001 = 1/0.001 = 1000.',
      },
    ],
    commonMistake:
      'Assuming turbulent flow is simply "fast" flow — it is really about the Reynolds number, which combines ' +
      'speed with density, viscosity, and pipe size; a slow flow in a very wide pipe of low-viscosity fluid can still be turbulent.',
    quickReview: [
      'Laminar: smooth, parallel layers. Turbulent: chaotic, mixing eddies.',
      'Re = ρvd/η — dimensionless, predicts which regime applies.',
      'Re below ~2000: laminar. Re above ~4000: turbulent. Between: transitional.',
    ],
  },

  'equation-of-continuity': {
    slug: 'equation-of-continuity',
    title: 'Equation of Continuity',
    difficulty: 'medium',
    simpleExplanation:
      'For an incompressible fluid flowing through a pipe, the equation of continuity — A₁v₁=A₂v₂ — says the ' +
      'same volume of fluid must pass every cross-section each second, so the fluid speeds up wherever the pipe narrows.',
    whyItMatters:
      'This single conservation principle explains why water shoots out faster when you cover part of a hose ' +
      'nozzle, and it is the essential first step before applying Bernoulli\'s equation to any pipe of varying width.',
    diagram: {
      id: 'continuity-diagram',
      title: 'Fluid speeding up as a pipe narrows',
      altText: 'A pipe that starts wide and narrows to a smaller cross-section, with A1 v1 labelled in the wide section and A2 v2 labelled in the narrow section, and arrows showing the flow direction',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [0, 1], to: [2, 1] }, { from: [2, 1], to: [3, 0.4] }, { from: [3, 0.4], to: [5, 0.4] },
          { from: [0, -1], to: [2, -1] }, { from: [2, -1], to: [3, -0.4] }, { from: [3, -0.4], to: [5, -0.4] },
          { from: [0.2, 0], to: [1.6, 0], arrow: true },
          { from: [3.4, 0], to: [4.8, 0], arrow: true },
        ],
        points: [
          { x: 1, y: 0, label: 'A₁, v₁', labelDx: 0, labelDy: -18 },
          { x: 4, y: 0, label: 'A₂, v₂', labelDx: 0, labelDy: -18 },
        ],
      },
    },
    formulaSlug: 'equation-of-continuity-formula',
    workedExample: {
      id: 'continuity-worked-1',
      title: "Find a fluid's speed using the equation of continuity",
      problemStatement: 'A pipe narrows from A₁=0.02 m² (where v₁=2 m/s) to A₂=0.005 m². Find the speed v₂ in the narrow section.',
      steps: [
        { step: 1, instruction: 'Write down the equation of continuity.', math: 'A₁v₁ = A₂v₂', explanation: 'The volume flow rate must be the same at both points.' },
        { step: 2, instruction: 'Solve for v₂.', math: 'v₂ = A₁v₁/A₂ = (0.02)(2)/0.005', explanation: 'Rearrange to isolate v₂.' },
        { step: 3, instruction: 'Compute the result.', math: 'v₂ = 0.04/0.005 = 8 m/s', explanation: 'The fluid moves four times faster in the narrower section.' },
      ],
      finalAnswer: 'v₂ = 8 m/s.',
    },
    whyItWorks:
      'The volume of fluid passing any cross-section per second is Av (area times speed) — since the fluid is ' +
      'incompressible, it cannot pile up or vanish anywhere along the pipe, so this volume flow rate must be ' +
      'identical everywhere along the pipe, giving A₁v₁=A₂v₂.',
    realLifeExample: {
      title: "Covering part of a garden hose's nozzle",
      scenario: 'Partially covering the end of a garden hose with a thumb makes the water shoot out much faster and farther.',
      explanation: 'Covering the opening reduces its cross-sectional area — by the equation of continuity, the ' +
        'same volume of water must now pass through a smaller area every second, so its speed increases.',
    },
    practiceQuestions: [
      {
        id: 'continuity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A pipe narrows from A₁=0.03 m² (v₁=1.5 m/s) to A₂=0.01 m². Find v₂.',
        hints: ['v₂ = A₁v₁/A₂.'],
        correctAnswer: 4.5,
        explanation: 'v₂ = (0.03)(1.5)/0.01 = 0.045/0.01 = 4.5 m/s.',
      },
    ],
    commonMistake:
      'Assuming a narrower pipe means slower flow (like a traffic jam) — for an incompressible fluid, it is the ' +
      'opposite: a smaller area forces the same volume through faster, not slower.',
    quickReview: [
      'A₁v₁ = A₂v₂ — volume flow rate stays constant along a pipe.',
      'A narrower section means faster flow.',
      'Only valid for an incompressible fluid.',
    ],
  },

  'bernoullis-equation': {
    slug: 'bernoullis-equation',
    title: "Bernoulli's Equation",
    difficulty: 'hard',
    simpleExplanation:
      "Bernoulli's equation — P+½ρv²+ρgh=constant — says that along a flow, pressure energy, kinetic energy, " +
      'and gravitational potential energy (all per unit volume) trade off against each other, but their total stays the same.',
    whyItMatters:
      'This is the central law of fluid dynamics — it explains why fast-flowing fluid has lower pressure, and ' +
      'underlies everything from aircraft lift to how a drinking straw works.',
    diagram: {
      id: 'bernoulli-diagram',
      title: "Pressure and speed trading off as a pipe narrows",
      altText: 'A pipe that starts wide and narrows to a smaller cross-section, with P1 v1 labelled in the wide, slower, higher-pressure section, and P2 v2 labelled in the narrow, faster, lower-pressure section',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [0, 1], to: [2, 1] }, { from: [2, 1], to: [3, 0.4] }, { from: [3, 0.4], to: [5, 0.4] },
          { from: [0, -1], to: [2, -1] }, { from: [2, -1], to: [3, -0.4] }, { from: [3, -0.4], to: [5, -0.4] },
        ],
        points: [
          { x: 1, y: 0, label: 'P₁, v₁ (wide)', labelDx: 0, labelDy: -18 },
          { x: 4, y: 0, label: 'P₂, v₂ (narrow)', labelDx: 0, labelDy: -18 },
        ],
      },
    },
    formulaSlug: 'bernoullis-equation-formula',
    workedExample: {
      id: 'bernoulli-worked-1',
      title: "Find pressure using Bernoulli's equation",
      problemStatement: 'Water (ρ=1000 kg/m³) flows through a horizontal pipe (constant height) at P₁=200000 Pa and v₁=2 m/s in a wide section, speeding up to v₂=8 m/s in a narrow section. Find P₂.',
      steps: [
        { step: 1, instruction: "Write Bernoulli's equation for the two points.", math: 'P₁+½ρv₁² = P₂+½ρv₂²', explanation: 'The height term ρgh cancels since the pipe is horizontal (h₁=h₂).' },
        { step: 2, instruction: 'Substitute the known values.', math: '200000+0.5(1000)(2²) = P₂+0.5(1000)(8²)', explanation: 'Plug in P₁, v₁, and v₂.' },
        { step: 3, instruction: 'Simplify both kinetic energy terms.', math: '200000+2000 = P₂+32000', explanation: '0.5(1000)(4)=2000 and 0.5(1000)(64)=32000.' },
        { step: 4, instruction: 'Solve for P₂.', math: 'P₂ = 202000−32000 = 170000 Pa', explanation: 'Combine the constants and subtract.' },
      ],
      finalAnswer: 'P₂ = 170000 Pa.',
    },
    whyItWorks:
      "Bernoulli's equation is really a statement of energy conservation applied to a flowing fluid — as the " +
      'fluid speeds up (gaining kinetic energy) in the narrow section, it must lose an equal amount of pressure ' +
      'energy to keep the total constant, exactly as the narrow section\'s lower P₂ shows here.',
    realLifeExample: {
      title: 'Why a shower curtain gets pulled inward',
      scenario: 'Running a shower on a windy day, the shower curtain sometimes billows inward toward the fast-moving stream of water and air.',
      explanation: 'The fast-moving air inside the shower stream has lower pressure than the still air outside ' +
        'the curtain, by Bernoulli\'s equation — the higher outside pressure pushes the curtain inward.',
    },
    practiceQuestions: [
      {
        id: 'bernoulli-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Water (ρ=1000 kg/m³) flows through a horizontal pipe at P₁=180000 Pa and v₁=1 m/s, speeding up to v₂=5 m/s. Find P₂.',
        hints: ['P₁+½ρv₁² = P₂+½ρv₂², with the height terms cancelling.'],
        correctAnswer: 168000,
        explanation: '180000+500 = P₂+12500. P₂ = 180500−12500 = 168000 Pa.',
      },
    ],
    commonMistake:
      "Forgetting that Bernoulli's equation (in this simple form) assumes non-viscous, incompressible, steady " +
      'flow along a single streamline — applying it across turbulent or highly viscous flow gives an inaccurate result.',
    quickReview: [
      'P+½ρv²+ρgh = constant along a streamline.',
      'Faster flow ⟹ lower pressure (at the same height).',
      'A statement of energy conservation for a flowing fluid.',
    ],
  },

  'bernoulli-theorem-applications': {
    slug: 'bernoulli-theorem-applications',
    title: "Manifestations of Bernoulli's Theorem",
    difficulty: 'medium',
    simpleExplanation:
      "Bernoulli's principle — faster flow means lower pressure — shows up in many familiar situations: an " +
      "airplane wing's lift, a perfume atomizer's spray, and the Venturi meter used to measure flow speed.",
    whyItMatters:
      'Recognizing the same underlying principle across such different-looking devices and phenomena is what ' +
      'makes Bernoulli\'s equation genuinely powerful — one idea explains flight, spray bottles, and industrial flow meters alike.',
    diagram: {
      id: 'bernoulli-lift-diagram',
      title: 'Faster air over the top of a wing creates lower pressure and lift',
      altText: 'A wing cross-section with an arrow above it labelled faster air, lower pressure, and an arrow below it labelled slower air, higher pressure, together producing an upward lift force',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        polygons: [{ points: [[0, 0], [3, 0.6], [6, 0], [3, -0.15]] }],
        segments: [
          { from: [-1, 1.1], to: [7, 1.1], arrow: true, label: 'faster air — lower pressure', labelDx: 0, labelDy: -10 },
          { from: [-1, -1.1], to: [7, -1.1], arrow: true, label: 'slower air — higher pressure', labelDx: 0, labelDy: 12 },
        ],
      },
    },
    formulaSlug: 'bernoulli-lift-formula',
    workedExample: {
      id: 'bernoulli-applications-worked-1',
      title: 'Find the lift force on a wing',
      problemStatement: 'Air (ρ=1.2 kg/m³) flows over the top of a wing at 250 m/s and under it at 200 m/s. The wing has area 20 m². Find the lift force.',
      steps: [
        { step: 1, instruction: 'Find the pressure difference using the Bernoulli-derived formula.', math: 'ΔP = ½ρ(v_top²−v_bottom²) = 0.5(1.2)(250²−200²)', explanation: 'Faster flow (top) corresponds to lower pressure; ΔP here is (bottom pressure) − (top pressure).' },
        { step: 2, instruction: 'Simplify the speeds squared.', math: '250²−200² = 62500−40000 = 22500', explanation: 'Compute the difference of squares.' },
        { step: 3, instruction: 'Compute the pressure difference.', math: 'ΔP = 0.6 × 22500 = 13500 Pa', explanation: 'Multiply by ½ρ=0.6.' },
        { step: 4, instruction: 'Find the lift force.', math: 'F_lift = ΔP × A = 13500 × 20', explanation: 'Multiply the pressure difference by the wing area.' },
        { step: 5, instruction: 'Compute the result.', math: 'F_lift = 270000 N', explanation: 'This upward force supports the aircraft\'s weight.' },
      ],
      finalAnswer: 'F_lift = 270000 N (270 kN).',
    },
    whyItWorks:
      "A wing's curved upper surface forces air to travel faster over the top than underneath. By Bernoulli's " +
      'equation, that faster-moving air has lower pressure — and the resulting pressure difference between the ' +
      'higher-pressure bottom and lower-pressure top pushes the wing upward.',
    realLifeExample: {
      title: 'A perfume atomizer',
      scenario: 'Squeezing the bulb of a perfume atomizer blows air rapidly across the top of a narrow tube dipped into the perfume.',
      explanation: 'The fast-moving air creates a region of low pressure at the top of the tube — the higher ' +
        'pressure in the perfume bottle below then pushes the liquid up the tube, where it is caught by the airstream and sprayed.',
    },
    practiceQuestions: [
      {
        id: 'bernoulli-applications-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Air (ρ=1.2 kg/m³) flows over the top of a wing at 100 m/s and under it at 80 m/s. The wing has area 10 m². Find the lift force.',
        hints: ['ΔP = ½ρ(v_top²−v_bottom²), then F=ΔP×A.'],
        correctAnswer: 21600,
        explanation: 'ΔP = 0.6(100²−80²) = 0.6(3600) = 2160 Pa. F = 2160 × 10 = 21600 N.',
      },
    ],
    commonMistake:
      "Thinking air takes longer over the curved top so it must be slower — the opposite is true: the top air " +
      "is forced to move FASTER to keep pace, which is exactly why the pressure there is lower.",
    quickReview: [
      'Faster flow ⟹ lower pressure (Bernoulli).',
      'Wing lift, atomizers, and Venturi meters all use this same principle.',
      'ΔP=½ρ(v₁²−v₂²), and force = ΔP × area.',
    ],
  },

  'viscosity-and-fluid-friction': {
    slug: 'viscosity-and-fluid-friction',
    title: 'Viscosity (Fluid Friction)',
    difficulty: 'medium',
    simpleExplanation:
      'Viscosity is a fluid\'s internal friction — its resistance to flowing or to layers of it sliding past ' +
      'each other. A highly viscous fluid (like honey) resists flow much more than a low-viscosity fluid (like water).',
    whyItMatters:
      'Viscosity determines how much force is needed to pump a fluid through a pipe, how fast an object sinks ' +
      'through a fluid, and why some fluids feel "thick" while others feel "thin."',
    formulaSlug: 'viscosity-formula',
    workedExample: {
      id: 'viscosity-worked-1',
      title: 'Find a viscous force',
      problemStatement: 'A layer of water (η=0.001 Pa·s) of area 0.5 m² is dragged across a fixed layer 0.002 m below it, at a relative speed of 0.3 m/s. Find the viscous force.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'η=0.001 Pa·s,  A=0.5 m²,  v=0.3 m/s,  d=0.002 m', explanation: 'All four quantities needed for the viscosity formula.' },
        { step: 2, instruction: "Apply Newton's law of viscosity.", math: 'F = ηA(v/d) = (0.001)(0.5)(0.3/0.002)', explanation: 'Substitute all four values.' },
        { step: 3, instruction: 'Compute the result.', math: 'F = (0.001)(0.5)(150) = 0.075 N', explanation: '0.3/0.002=150, then multiply through.' },
      ],
      finalAnswer: 'F = 0.075 N.',
    },
    whyItWorks:
      'Adjacent layers of fluid moving at different speeds drag on each other — the faster layer tends to speed ' +
      'up the slower one, and vice versa — and this drag force grows with the area in contact, the speed ' +
      'difference, and the fluid\'s own "stickiness" (η), while shrinking as the layers are spaced farther apart.',
    realLifeExample: {
      title: 'Why honey pours more slowly than water',
      scenario: 'Pouring honey from a jar takes much longer than pouring an equal amount of water.',
      explanation: 'Honey has a far higher viscosity than water, so its internal layers resist sliding past each ' +
        'other much more strongly — the same principle behind this formula\'s dependence on η.',
    },
    practiceQuestions: [
      {
        id: 'viscosity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A fluid layer (η=0.0008 Pa·s) of area 0.2 m² moves at 0.5 m/s relative to a fixed layer 0.001 m away. Find the viscous force.',
        hints: ['F = ηA(v/d).'],
        correctAnswer: 0.08,
        explanation: 'F = (0.0008)(0.2)(0.5/0.001) = (0.0008)(0.2)(500) = 0.08 N.',
      },
    ],
    commonMistake:
      'Confusing viscosity (a fluid\'s own internal resistance to flow) with density (how much mass a fluid ' +
      'packs into a given volume) — a fluid can be dense but not very viscous (like mercury), or viscous but not dense (like a thin oil).',
    quickReview: [
      'F = ηA(v/d) — the tangential force to drag one fluid layer over another.',
      'Higher η means "thicker," more resistant flow.',
      'Different from density — the two are independent properties.',
    ],
  },

  'surface-tension': {
    slug: 'surface-tension',
    title: 'Surface Tension',
    difficulty: 'medium',
    simpleExplanation:
      'Surface tension is the tendency of a liquid\'s surface to behave like a stretched elastic membrane, ' +
      'caused by molecules at the surface being pulled inward more strongly than they are pulled outward — measured as γ=F/L.',
    whyItMatters:
      'Surface tension is why small water droplets are round, why some insects can walk on water, and why soap ' +
      'bubbles hold their shape — it is a genuinely everyday force with a precise quantitative description.',
    formulaSlug: 'surface-tension-formula',
    workedExample: {
      id: 'surface-tension-worked-1',
      title: 'Find the force needed to stretch a soap film',
      problemStatement: 'A wire loop of length 0.1 m is dipped in soap solution (γ=0.025 N/m), forming a film with two surfaces (front and back). Find the force needed to hold the film in place.',
      steps: [
        { step: 1, instruction: 'Note that a soap film has two surfaces.', math: 'Total length = 2L = 2(0.1) = 0.2 m', explanation: 'A thin film has liquid surface on both sides, doubling the effective contact length.' },
        { step: 2, instruction: 'Apply the surface tension formula.', math: 'F = γ × (2L) = 0.025 × 0.2', explanation: 'Multiply the surface tension coefficient by the total contact length.' },
        { step: 3, instruction: 'Compute the result.', math: 'F = 0.005 N', explanation: 'This is the force the surface tension exerts on the wire.' },
      ],
      finalAnswer: 'F = 0.005 N.',
    },
    whyItWorks:
      'Molecules deep inside a liquid are pulled equally in every direction by their neighbors, but molecules at ' +
      'the surface have no liquid neighbors above them — the resulting net inward pull makes the surface behave ' +
      'like it is under tension, resisting any increase in its area.',
    realLifeExample: {
      title: 'A water strider walking on water',
      scenario: 'Certain insects can stand and walk on the surface of a pond without breaking through.',
      explanation: "The insect's weight, spread across its thin legs, is supported entirely by the water's " +
        "surface tension — the surface behaves like a taut membrane strong enough to hold the insect's small weight.",
    },
    practiceQuestions: [
      {
        id: 'surface-tension-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A liquid surface with γ=0.03 N/m acts along a single contact line of length 0.05 m. Find the force.',
        hints: ['F = γL (single surface, no factor of 2).'],
        correctAnswer: 0.0015,
        explanation: 'F = 0.03 × 0.05 = 0.0015 N.',
      },
    ],
    commonMistake:
      'Forgetting to double the length for a thin film (like a soap film) that has two surfaces — a single ' +
      'liquid surface (like the top of a glass of water) only has one.',
    quickReview: [
      'γ = F/L, in newtons per metre.',
      'Caused by unbalanced molecular attraction at the surface.',
      'A film has two surfaces; a simple liquid surface has one.',
    ],
  },

  'capillarity': {
    slug: 'capillarity',
    title: 'Capillarity',
    difficulty: 'medium',
    simpleExplanation:
      'Capillarity is the rise (or fall) of a liquid inside a narrow tube, caused by the balance between ' +
      'surface tension pulling the liquid up the tube walls and gravity pulling it back down: h=2γcosθ/(ρgr).',
    whyItMatters:
      'Capillary action moves water up through soil into plant roots and stems, draws ink through a fountain ' +
      "pen's tip, and lets a paper towel soak up a spill — all from the same balance of forces.",
    diagram: {
      id: 'capillarity-diagram',
      title: 'Liquid rising inside a narrow capillary tube',
      altText: 'A narrow vertical tube dipped into a wide liquid reservoir, with the liquid level inside the tube risen higher than the reservoir surface, and the height difference h marked',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-0.3, 0], to: [-0.3, 4] },
          { from: [0.3, 0], to: [0.3, 4] },
          { from: [-2, 0], to: [2, 0] },
          { from: [-0.3, 1.5], to: [0.3, 1.5], dashed: true },
          { from: [0.7, 0], to: [0.7, 1.5], dashed: true, label: 'h', labelDx: 12, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'capillary-rise-formula',
    workedExample: {
      id: 'capillarity-worked-1',
      title: 'Find the height of capillary rise',
      problemStatement: 'Water (γ=0.072 N/m, ρ=1000 kg/m³, θ≈0°) rises in a glass capillary tube of radius 0.0005 m. Find the height of the rise.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'γ=0.072 N/m,  ρ=1000 kg/m³,  r=0.0005 m,  g=9.8 m/s²,  cosθ≈1', explanation: 'For water fully wetting glass, the contact angle is close to 0°.' },
        { step: 2, instruction: 'Apply the capillary rise formula.', math: 'h = 2γcosθ/(ρgr) = 2(0.072)(1)/[(1000)(9.8)(0.0005)]', explanation: 'Substitute all the values.' },
        { step: 3, instruction: 'Compute the denominator.', math: '(1000)(9.8)(0.0005) = 4.9', explanation: 'Multiply the three denominator terms together.' },
        { step: 4, instruction: 'Compute the result.', math: 'h = 0.144/4.9 ≈ 0.0294 m', explanation: 'Divide the numerator by the denominator.' },
      ],
      finalAnswer: 'h ≈ 0.0294 m (about 2.94 cm).',
    },
    whyItWorks:
      'Surface tension pulls the liquid up along the tube\'s inner wall; as the liquid column rises, its ' +
      'increasing weight pulls back down — the liquid keeps rising until the upward surface-tension force ' +
      'exactly balances the downward weight of the risen column, which is exactly the condition this formula expresses.',
    realLifeExample: {
      title: 'Water moving up through a paper towel',
      scenario: 'Dipping the corner of a paper towel into a spill causes the liquid to visibly climb upward through the fibers.',
      explanation: "The tiny gaps between the paper towel's fibers act like a network of capillary tubes, " +
        "drawing the liquid upward by exactly the same surface-tension-versus-gravity balance.",
    },
    practiceQuestions: [
      {
        id: 'capillarity-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Water (γ=0.072 N/m, ρ=1000 kg/m³, θ≈0°) rises in a capillary tube of radius 0.001 m. Find the height of the rise.',
        hints: ['h = 2γcosθ/(ρgr).'],
        correctAnswer: 0.0147,
        tolerance: 0.0005,
        explanation: 'h = 2(0.072)/[(1000)(9.8)(0.001)] = 0.144/9.8 ≈ 0.0147 m.',
      },
    ],
    commonMistake:
      "Forgetting that a SMALLER tube radius causes a GREATER capillary rise (since r is in the denominator) — " +
      "it is easy to assume a wider tube would let more liquid rise higher, but the opposite is true.",
    quickReview: [
      'h = 2γcosθ/(ρgr).',
      'A narrower tube produces a greater rise.',
      'Caused by the balance between surface tension and the weight of the risen liquid.',
    ],
  },
};
