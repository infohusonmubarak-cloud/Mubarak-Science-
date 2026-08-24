import type { Concept } from '@/types/content';

export const chapter7RefractionConcepts: Record<string, Concept> = {
  'the-nature-of-light': {
    slug: 'the-nature-of-light',
    title: 'The Nature of Light',
    difficulty: 'easy',
    simpleExplanation:
      "Light is a form of electromagnetic radiation that behaves as both a wave and a stream of particles " +
      "(photons) — this dual nature (wave-particle duality) is one of the most important discoveries in " +
      "physics. Visible light is just a small part of the wider electromagnetic spectrum.",
    whyItMatters:
      "Understanding light's true nature is the foundation for everything else in optics — how it " +
      "reflects, refracts, and interacts with matter all trace back to its wave and particle properties.",
    whyItWorks:
      "Light's wave-like behaviour (interference, diffraction) and particle-like behaviour (the " +
      "photoelectric effect, covered later) both have strong experimental support — rather than being " +
      "purely one or the other, light exhibits whichever behaviour is most relevant to the specific " +
      "phenomenon being observed.",
    realLifeExample: {
      title: 'Rainbows and prisms',
      scenario: 'White light passing through a glass prism splits into a rainbow of colours.',
      explanation: "This happens because white light is actually a mixture of many different wavelengths (colours), and the glass refracts each wavelength by a slightly different amount — a direct demonstration of light's wave nature and the electromagnetic spectrum within visible light.",
    },
    practiceQuestions: [
      {
        id: 'nature-of-light-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What does "wave-particle duality" mean for light?',
        options: [
          { id: 'a', text: 'Light exhibits both wave-like and particle-like behaviour, depending on the phenomenon being observed.' },
          { id: 'b', text: 'Light is purely a wave, with no particle behaviour at all.' },
          { id: 'c', text: 'Light is purely a stream of particles, with no wave behaviour at all.' },
          { id: 'd', text: 'Light has no physical properties at all.' },
        ],
        correctOptionId: 'a',
        hints: ['Both interference (wave) and the photoelectric effect (particle) have experimental support.'],
        explanation: 'Wave-particle duality means light shows wave-like behaviour in some situations and particle-like behaviour in others.',
      },
    ],
    commonMistake:
      "Thinking light is 'either a wave or a particle' and must be one or the other exclusively — modern " +
      "physics treats light as having genuinely both wave and particle characteristics simultaneously, not " +
      "as switching between two separate identities.",
    quickReview: [
      'Light is electromagnetic radiation with both wave and particle properties.',
      'Visible light is a small part of the electromagnetic spectrum.',
      'Wave behaviour (interference) and particle behaviour (photoelectric effect) both have experimental support.',
    ],
  },

  'velocity-of-light': {
    slug: 'velocity-of-light',
    title: 'Velocity of Light',
    difficulty: 'medium',
    simpleExplanation:
      'Light travels at approximately 3 × 10⁸ m/s in a vacuum — the fastest speed at which any information ' +
      'or matter can travel, according to modern physics. Like any wave, its speed relates to its ' +
      'frequency and wavelength.',
    whyItMatters:
      "The speed of light is a fundamental constant of the universe, underlying not just optics but also " +
      "modern physics topics like special relativity (covered in a later chapter).",
    formulaSlug: 'wave-speed-relation-light-formula',
    workedExample: {
      id: 'velocity-of-light-we-1',
      title: "Finding a light wave's wavelength",
      problemStatement: 'Red light has a frequency of 4.5 × 10¹⁴ Hz. Find its wavelength in a vacuum (c = 3 × 10⁸ m/s).',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for λ.', math: 'λ = c/f', explanation: 'c = 3 × 10⁸ m/s, f = 4.5 × 10¹⁴ Hz.' },
        { step: 2, instruction: 'Substitute values.', math: 'λ = (3 × 10⁸)/(4.5 × 10¹⁴)', explanation: 'Divide speed by frequency.' },
        { step: 3, instruction: 'Calculate.', math: 'λ ≈ 6.67 × 10⁻⁷ m = 667 nm', explanation: 'This falls within the visible red light range.' },
      ],
      finalAnswer: 'Wavelength ≈ 667 nm (nanometres).',
    },
    whyItWorks:
      "Light, like all electromagnetic waves, obeys the universal wave relationship v = fλ — since c (the " +
      "speed of light in vacuum) is constant, frequency and wavelength are inversely related: higher " +
      "frequency light has a shorter wavelength, and vice versa.",
    realLifeExample: {
      title: 'The delay in seeing distant events',
      scenario: 'We see the Sun as it was about 8 minutes ago, not as it is right now.',
      explanation: "Because light travels at a finite (though extremely fast) speed, and the Sun is about 150 million km away, sunlight takes roughly 8 minutes to reach Earth — a direct, real consequence of light's finite velocity.",
    },
    practiceQuestions: [
      {
        id: 'velocity-of-light-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the frequency of light with a wavelength of 500 nm (5 × 10⁻⁷ m) in a vacuum (c = 3 × 10⁸ m/s).',
        hints: ['f = c/λ.'],
        correctAnswer: 6e14,
        tolerance: 0.1e14,
        unit: 'Hz',
        explanation: 'f = (3 × 10⁸)/(5 × 10⁻⁷) = 6 × 10¹⁴ Hz.',
      },
    ],
    commonMistake:
      "Assuming light travels at the same speed in every material — light's speed of 3 × 10⁸ m/s applies " +
      "specifically to a VACUUM; it travels more slowly in any medium (glass, water, air), which is the " +
      "basis of refraction, covered next.",
    quickReview: [
      'Speed of light in vacuum, c ≈ 3 × 10⁸ m/s.',
      'c = fλ relates speed, frequency, and wavelength for light.',
      'Light travels more slowly in any medium than in a vacuum.',
    ],
  },

  'refraction-at-a-boundary': {
    slug: 'refraction-at-a-boundary',
    title: 'Refraction of Light',
    difficulty: 'medium',
    simpleExplanation:
      "Refraction is the bending of light as it passes from one medium into another (e.g. air into glass), " +
      "caused by light changing speed at the boundary. Light bends toward the normal when slowing down " +
      "(entering a denser medium) and away from the normal when speeding up (entering a less dense medium).",
    whyItMatters:
      "Refraction is the basic phenomenon underlying lenses, prisms, and countless optical instruments — " +
      "understanding why and how light bends is essential before quantifying it with laws and formulas.",
    whyItWorks:
      "When light enters a new medium at an angle, one 'edge' of the light wavefront reaches the new, " +
      "slower (or faster) medium before the rest — this causes the wavefront to pivot, changing the " +
      "direction of travel, similar to how a car's wheels turn if one side rolls onto a rougher (slower) " +
      "surface before the other.",
    realLifeExample: {
      title: 'A straw appearing bent in a glass of water',
      scenario: 'A straw placed in a glass of water appears to bend sharply at the water\'s surface.',
      explanation: "Light from the submerged part of the straw refracts (bends) as it exits the water and enters the air, changing direction at the surface — this bending distorts the apparent position of the submerged part, making the straw look bent, even though it is perfectly straight.",
    },
    practiceQuestions: [
      {
        id: 'refraction-basics-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What causes light to bend when it enters a new medium at an angle?',
        options: [
          { id: 'a', text: 'The light changes speed at the boundary, causing the wavefront to pivot.' },
          { id: 'b', text: 'Light always travels in a perfectly straight line, with no bending possible.' },
          { id: 'c', text: 'Refraction only happens with coloured light.' },
          { id: 'd', text: 'The light\'s frequency changes, causing it to bend.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about a wavefront crossing a boundary at an angle, not straight on.'],
        explanation: 'The change in speed at the boundary causes the wavefront to pivot, producing the characteristic bending of refraction.',
      },
    ],
    commonMistake:
      "Assuming light always bends toward the normal — it only bends toward the normal when entering a " +
      "DENSER (slower) medium; it bends AWAY from the normal when entering a LESS DENSE (faster) medium.",
    quickReview: [
      'Refraction: bending of light at a boundary between media, due to a change in speed.',
      'Denser medium (slower light) → bends toward the normal.',
      'Less dense medium (faster light) → bends away from the normal.',
    ],
  },

  'laws-of-refraction': {
    slug: 'laws-of-refraction',
    title: 'Laws of Refraction',
    difficulty: 'medium',
    simpleExplanation:
      "The laws of refraction precisely describe how light bends at a boundary: (1) the incident ray, " +
      "refracted ray, and normal all lie in the same plane, and (2) Snell's law relates the angles of " +
      "incidence and refraction to the refractive indices of the two media.",
    whyItMatters:
      "Snell's law is the quantitative tool that lets you actually calculate refraction angles, rather " +
      "than just qualitatively describing that light bends.",
    formulaSlug: 'snells-law-formula',
    workedExample: {
      id: 'laws-of-refraction-we-1',
      title: 'Finding the angle of refraction',
      problemStatement: 'Light travels from air (n₁ = 1.00) into glass (n₂ = 1.50) at an angle of incidence of 40° (sin40° ≈ 0.643). Find the angle of refraction.',
      steps: [
        { step: 1, instruction: "Write Snell's law.", math: 'n₁ sinθ₁ = n₂ sinθ₂', explanation: 'n₁ = 1.00, θ₁ = 40°, n₂ = 1.50.' },
        { step: 2, instruction: 'Substitute known values.', math: '1.00 × 0.643 = 1.50 × sinθ₂', explanation: 'Substitute sin40° ≈ 0.643.' },
        { step: 3, instruction: 'Solve for sinθ₂.', math: 'sinθ₂ = 0.643/1.50 ≈ 0.429', explanation: 'Divide both sides by 1.50.' },
        { step: 4, instruction: 'Find θ₂.', math: 'θ₂ = sin⁻¹(0.429) ≈ 25.4°', explanation: 'Take the inverse sine.' },
      ],
      finalAnswer: 'Angle of refraction ≈ 25.4°.',
    },
    whyItWorks:
      "Snell's law follows directly from the wave nature of light: as a wavefront crosses the boundary, " +
      "its frequency stays constant, but its speed (and therefore wavelength) changes in the new medium " +
      "— working through the geometry of this speed change produces the sine relationship exactly.",
    realLifeExample: {
      title: 'Designing camera lenses',
      scenario: 'Camera lens designers use precise calculations to control exactly how light bends through each lens element.',
      explanation: "Snell's law lets engineers precisely predict and control how light refracts through each lens surface, which is essential for designing lenses that focus light accurately and minimise distortion.",
    },
    practiceQuestions: [
      {
        id: 'laws-of-refraction-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Light travels from air (n₁ = 1.00) into water (n₂ = 1.33) at an angle of incidence of 50° (sin50° ≈ 0.766). Find sinθ₂.',
        hints: ['n₁ sinθ₁ = n₂ sinθ₂, rearranged: sinθ₂ = (n₁ sinθ₁)/n₂.'],
        correctAnswer: 0.576,
        tolerance: 0.02,
        explanation: 'sinθ₂ = (1.00 × 0.766)/1.33 ≈ 0.576.',
      },
    ],
    commonMistake:
      "Mixing up which medium's refractive index and angle go where in the formula — always match n₁ with " +
      "θ₁ (the medium and angle the light is COMING FROM) and n₂ with θ₂ (the medium and angle the light " +
      "is ENTERING).",
    quickReview: [
      "Snell's law: n₁ sinθ₁ = n₂ sinθ₂.",
      'The incident ray, refracted ray, and normal all lie in the same plane.',
      "Snell's law lets you calculate unknown angles or refractive indices precisely.",
    ],
  },

  'refractive-index-b-level': {
    slug: 'refractive-index-b-level',
    title: 'Refractive Index',
    difficulty: 'medium',
    simpleExplanation:
      "A medium's refractive index (n) is a number that measures how much slower light travels in that " +
      "medium compared to in a vacuum. A higher refractive index means light travels more slowly (and " +
      "bends more) in that medium.",
    whyItMatters:
      "Refractive index is the key material property that determines how strongly a substance refracts " +
      "light, and is essential for designing lenses, prisms, and optical fibres.",
    formulaSlug: 'refractive-index-definition-formula',
    workedExample: {
      id: 'refractive-index-we-1',
      title: 'Finding the speed of light in a medium',
      problemStatement: 'Diamond has a refractive index of 2.42. Find the speed of light inside diamond (c = 3 × 10⁸ m/s).',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for v.', math: 'v = c/n', explanation: 'c = 3 × 10⁸ m/s, n = 2.42.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'v = (3 × 10⁸)/2.42', explanation: 'Divide speed of light in vacuum by refractive index.' },
        { step: 3, instruction: 'Simplify.', math: 'v ≈ 1.24 × 10⁸ m/s', explanation: 'This is roughly 41% of the speed of light in a vacuum.' },
      ],
      finalAnswer: 'Speed of light in diamond ≈ 1.24 × 10⁸ m/s.',
    },
    whyItWorks:
      "Light slows down in a medium because it continuously interacts with the medium's atoms (being " +
      "absorbed and re-emitted, or interacting with electron clouds) — denser materials, or materials with " +
      "more strongly interacting electrons, slow light down more, giving them a higher refractive index.",
    realLifeExample: {
      title: "Diamond's brilliant sparkle",
      scenario: "Diamonds are famous for their bright, sparkling appearance compared to glass imitations.",
      explanation: "Diamond has an unusually high refractive index (2.42, versus about 1.5 for glass) — this causes light to bend and reflect much more dramatically inside the diamond, contributing significantly to its characteristic sparkle and brilliance.",
    },
    practiceQuestions: [
      {
        id: 'refractive-index-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Light travels at 2 × 10⁸ m/s inside a medium. Find its refractive index (c = 3 × 10⁸ m/s).',
        hints: ['n = c/v.'],
        correctAnswer: 1.5,
        tolerance: 0.02,
        explanation: 'n = (3 × 10⁸)/(2 × 10⁸) = 1.5.',
      },
    ],
    commonMistake:
      "Thinking a higher refractive index means light travels FASTER in that medium — it is the opposite: " +
      "a higher n means light travels SLOWER (n = c/v, so larger n means smaller v for a fixed c).",
    quickReview: [
      'n = c/v: refractive index compares light\'s speed in vacuum to its speed in a medium.',
      'Higher refractive index means light travels more slowly (and bends more) in that medium.',
      "Diamond's very high refractive index contributes to its characteristic sparkle.",
    ],
  },

  'critical-angle-and-total-internal-reflection': {
    slug: 'critical-angle-and-total-internal-reflection',
    title: 'Critical Angle and Total Internal Reflection',
    difficulty: 'hard',
    simpleExplanation:
      "When light travels from a denser medium toward a less dense one, at a specific angle (the critical " +
      "angle), the refracted ray travels exactly along the boundary (90° from the normal). At angles " +
      "greater than this critical angle, no light refracts out at all — instead, ALL of it reflects back " +
      "into the denser medium, a phenomenon called total internal reflection.",
    whyItMatters:
      "Total internal reflection is the working principle behind optical fibres, which carry internet and " +
      "telephone signals as light pulses across huge distances with minimal loss.",
    formulaSlug: 'critical-angle-formula',
    workedExample: {
      id: 'critical-angle-we-1',
      title: 'Finding the critical angle for glass',
      problemStatement: 'Glass has a refractive index of 1.5. Find the critical angle for light travelling from glass into air.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'sinθc = 1/n', explanation: 'n = 1.5 (the denser medium, glass).' },
        { step: 2, instruction: 'Substitute and calculate sinθc.', math: 'sinθc = 1/1.5 ≈ 0.667', explanation: 'Divide 1 by the refractive index.' },
        { step: 3, instruction: 'Find θc.', math: 'θc = sin⁻¹(0.667) ≈ 41.8°', explanation: 'Take the inverse sine.' },
      ],
      finalAnswer: 'Critical angle ≈ 41.8°.',
    },
    whyItWorks:
      "As the angle of incidence increases (from a denser to a less dense medium), the angle of refraction " +
      "increases even faster (following Snell's law) — at the critical angle, the refraction angle reaches " +
      "exactly 90°; beyond this, Snell's law would require sinθ₂ to exceed 1, which is impossible, so " +
      "instead all the light reflects internally rather than refracting out.",
    realLifeExample: {
      title: 'Optical fibres carrying internet data',
      scenario: 'Optical fibre cables carry light signals across vast distances (undersea cables span entire oceans) with minimal signal loss.',
      explanation: 'Light inside the fibre core repeatedly strikes the core-cladding boundary at an angle greater than the critical angle, undergoing total internal reflection over and over — this keeps the light signal trapped inside the fibre core, travelling huge distances with very little loss.',
    },
    practiceQuestions: [
      {
        id: 'critical-angle-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A medium has a refractive index of 1.33 (water). Find its critical angle for light travelling from water into air.',
        hints: ['sinθc = 1/n.'],
        correctAnswer: 48.8,
        tolerance: 0.5,
        unit: '°',
        explanation: 'sinθc = 1/1.33 ≈ 0.752. θc = sin⁻¹(0.752) ≈ 48.8°.',
      },
    ],
    commonMistake:
      "Applying the critical angle formula when light travels from a LESS dense medium into a denser one " +
      "— total internal reflection and the critical angle only apply when light travels from denser to " +
      "less dense; light entering a denser medium always refracts (never totally internally reflects).",
    quickReview: [
      'sinθc = 1/n gives the critical angle for light in a denser medium (n) approaching a less dense one.',
      'Beyond the critical angle, total internal reflection occurs — no light refracts out.',
      'Optical fibres use repeated total internal reflection to carry light signals over long distances.',
    ],
  },
};
