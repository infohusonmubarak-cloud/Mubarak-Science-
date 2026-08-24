import type { Concept } from '@/types/content';

export const chapter8LensesConcepts: Record<string, Concept> = {
  'refraction-at-a-curved-surface': {
    slug: 'refraction-at-a-curved-surface',
    title: 'Refraction at a Curved Surface',
    difficulty: 'medium',
    simpleExplanation:
      "When light refracts at a curved surface (like the surface of a lens), the curvature causes " +
      "parallel rays to converge toward a point (for a convex surface) or spread apart as if diverging " +
      "from a point (for a concave surface) — this bending-and-focusing behaviour is what makes lenses " +
      "possible in the first place.",
    whyItMatters:
      "Understanding refraction at a single curved surface is the conceptual building block for " +
      "understanding lenses, which are essentially two curved refracting surfaces working together.",
    whyItWorks:
      "At each point on a curved surface, the normal (perpendicular reference line) points in a slightly " +
      "different direction — since each incoming ray refracts according to Snell's law relative to the " +
      "LOCAL normal at the point it strikes, different rays bend by different specific amounts, and a " +
      "properly shaped curve makes them all converge to (or appear to diverge from) a single focus point.",
    realLifeExample: {
      title: 'A water droplet acting as a lens',
      scenario: 'A curved droplet of water can focus sunlight into a small, intense spot.',
      explanation: "The droplet's curved surface refracts parallel sunlight rays toward a common focus point, exactly like a simple convex lens — this is the same basic physics used intentionally in manufactured lenses, just occurring naturally in a water droplet's curved shape.",
    },
    practiceQuestions: [
      {
        id: 'refraction-curved-surface-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do parallel light rays converge to a point after refracting through a convex surface?',
        options: [
          { id: 'a', text: 'Each ray refracts relative to the local normal at the point it strikes, and the curve\'s shape is designed so all these individually-bent rays meet at one point.' },
          { id: 'b', text: 'All rays refract by exactly the same fixed angle regardless of where they strike.' },
          { id: 'c', text: 'Curved surfaces do not actually refract light differently from flat ones.' },
          { id: 'd', text: 'Convergence has nothing to do with the surface\'s curvature.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about how the normal direction changes across a curved surface.'],
        explanation: 'Because the normal direction varies across a curved surface, each ray refracts by a different amount, and a properly shaped curve makes all the refracted rays converge to a single point.',
      },
    ],
    commonMistake:
      "Assuming a curved surface refracts light the same way at every point, like a flat surface would — " +
      "the LOCAL normal direction differs across a curved surface, which is exactly what allows it to " +
      "focus (converge) or defocus (diverge) light, unlike a flat surface.",
    quickReview: [
      'Refraction at a curved surface bends light differently at different points, following the local normal.',
      'A convex surface can make parallel rays converge to a focus point.',
      'This principle is the foundation for how lenses work.',
    ],
  },

  'the-lens-equation': {
    slug: 'the-lens-equation',
    title: 'The Lens Equation',
    difficulty: 'medium',
    simpleExplanation:
      "The lens equation relates an object's distance from a lens, the resulting image distance, and the " +
      "lens's focal length. It lets you calculate exactly where an image will form, given the object's " +
      "position and the lens being used.",
    whyItMatters:
      "The lens equation is the essential quantitative tool for designing and predicting how any optical " +
      "system with lenses — cameras, telescopes, microscopes, eyeglasses — will actually form images.",
    formulaSlug: 'lens-equation-formula',
    workedExample: {
      id: 'lens-equation-we-1',
      title: 'Finding image distance',
      problemStatement: 'An object is placed 30 cm from a converging lens with a focal length of 10 cm. Find the image distance (u = -30 cm, f = +10 cm, using the sign convention).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: '1/v − 1/u = 1/f', explanation: 'u = -30 cm, f = 10 cm.' },
        { step: 2, instruction: 'Substitute values.', math: '1/v − 1/(-30) = 1/10', explanation: 'Subtracting a negative becomes addition.' },
        { step: 3, instruction: 'Simplify.', math: '1/v + 1/30 = 1/10', explanation: 'Rearrange to isolate 1/v.' },
        { step: 4, instruction: 'Solve for 1/v, then v.', math: '1/v = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 = 1/15 → v = 15 cm', explanation: 'Find a common denominator and simplify.' },
      ],
      finalAnswer: 'Image distance = 15 cm (a real image, since v is positive).',
    },
    whyItWorks:
      "This formula follows from carefully applying refraction (Snell's law) at each of the lens's two " +
      "curved surfaces and combining the results — the specific form (1/v − 1/u = 1/f) reflects a " +
      "consistent sign convention where distances are measured from the lens, with the direction light " +
      "travels taken as positive.",
    realLifeExample: {
      title: 'Focusing a camera lens',
      scenario: 'A camera automatically adjusts its lens position to keep a subject in sharp focus at different distances.',
      explanation: "The camera's autofocus system essentially solves the lens equation in real time, adjusting the lens (and thus the effective object/image distance relationship) so the image forms precisely on the camera's sensor.",
    },
    practiceQuestions: [
      {
        id: 'lens-equation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object is placed 20 cm from a converging lens with a focal length of 5 cm (u = -20 cm, f = 5 cm). Find the image distance v.',
        hints: ['1/v − 1/u = 1/f.', '1/v = 1/f + 1/u.'],
        correctAnswer: 6.67,
        tolerance: 0.2,
        unit: 'cm',
        explanation: '1/v = 1/5 + 1/(-20) = 4/20 − 1/20 = 3/20 → v = 20/3 ≈ 6.67 cm.',
      },
    ],
    commonMistake:
      "Forgetting to apply the correct sign convention consistently — object distances, image distances, " +
      "and focal lengths must all follow the same sign rules (e.g. object distance is conventionally " +
      "negative), or the equation gives an incorrect result.",
    quickReview: [
      '1/v − 1/u = 1/f relates object distance, image distance, and focal length.',
      'Consistent sign convention is essential (u is typically negative).',
      'Solving for v tells you exactly where the image forms.',
    ],
  },

  'refraction-through-lenses': {
    slug: 'refraction-through-lenses',
    title: 'Refraction Through Lenses',
    difficulty: 'medium',
    simpleExplanation:
      "As light passes through a lens, it refracts at both curved surfaces, ultimately forming an image " +
      "that can be real or virtual, and larger, smaller, or the same size as the object — the magnification " +
      "formula quantifies exactly how much larger or smaller the image is.",
    whyItMatters:
      "Understanding image formation — not just WHERE an image forms (the lens equation) but also its " +
      "SIZE and orientation (magnification) — is essential for fully predicting what a lens does to an " +
      "object being viewed or projected.",
    formulaSlug: 'magnification-formula-lens',
    workedExample: {
      id: 'refraction-lenses-we-1',
      title: 'Finding magnification',
      problemStatement: 'A lens forms an image at v = 15 cm from an object at u = -30 cm. Find the magnification.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'm = v/u', explanation: 'v = 15 cm, u = -30 cm.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'm = 15/(-30) = -0.5', explanation: 'Divide image distance by object distance.' },
      ],
      finalAnswer: 'Magnification = -0.5 (the image is half the size of the object, and the negative sign indicates it is inverted).',
    },
    whyItWorks:
      "Magnification directly compares how far the image forms from the lens to how far the object is " +
      "from the lens — this ratio captures the geometric similarity between the triangles formed by the " +
      "object, image, and the lens's optical centre, which is why it directly gives the image-to-object " +
      "size ratio.",
    realLifeExample: {
      title: 'A magnifying glass',
      scenario: 'Holding a magnifying glass close to small text makes it appear much larger.',
      explanation: "When the object is closer to the lens than its focal length, the lens produces a virtual, upright, and magnified (|m| > 1) image — this is exactly the configuration used when reading with a magnifying glass.",
    },
    practiceQuestions: [
      {
        id: 'refraction-lenses-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A lens forms an image at v = 40 cm from an object at u = -10 cm. Find the magnification.',
        hints: ['m = v/u.'],
        correctAnswer: -4,
        tolerance: 0.1,
        explanation: 'm = 40/(-10) = -4 (image is 4 times larger and inverted).',
      },
    ],
    commonMistake:
      "Ignoring the SIGN of the magnification, only considering its size — a negative magnification " +
      "indicates an inverted image, while a positive magnification indicates an upright image; both the " +
      "magnitude and sign carry important information.",
    quickReview: [
      'm = v/u gives the magnification (image size relative to object size).',
      '|m| > 1 means enlarged; |m| < 1 means reduced.',
      'Negative m means inverted image; positive m means upright image.',
    ],
  },

  'power-of-a-lens': {
    slug: 'power-of-a-lens',
    title: 'Power of a Lens',
    difficulty: 'easy',
    simpleExplanation:
      "A lens's power measures how strongly it bends (converges or diverges) light, defined as the " +
      "reciprocal of its focal length. Power is measured in dioptres (D) — a more powerful lens has a " +
      "shorter focal length.",
    whyItMatters:
      "Lens power is the practical unit used by opticians when prescribing eyeglasses and contact lenses, " +
      "and is essential for combining multiple lenses in optical instruments.",
    formulaSlug: 'lens-power-formula',
    workedExample: {
      id: 'lens-power-we-1',
      title: "Finding a lens's power",
      problemStatement: 'A converging lens has a focal length of 0.25 m. Find its power.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = 1/f', explanation: 'f = 0.25 m.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'P = 1/0.25 = 4 D', explanation: 'Divide 1 by the focal length in metres.' },
      ],
      finalAnswer: 'Power = 4 dioptres (D).',
    },
    whyItWorks:
      "A shorter focal length means light converges to a focus point closer to the lens, which requires " +
      "stronger (more dramatic) bending of the light rays — defining power as the reciprocal of focal " +
      "length directly captures this: smaller f gives larger P, matching the intuition that a 'more " +
      "powerful' lens bends light more strongly.",
    realLifeExample: {
      title: 'Eyeglass prescriptions',
      scenario: 'An eyeglass prescription specifies lens power in dioptres, such as -2.5 D for short-sightedness.',
      explanation: 'Opticians use dioptres directly because lens powers ADD when lenses are combined (unlike focal lengths, which do not simply add) — this makes dioptres the practical unit for prescribing and combining corrective lenses.',
    },
    practiceQuestions: [
      {
        id: 'lens-power-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A lens has a focal length of 0.5 m. Find its power.',
        hints: ['P = 1/f.'],
        correctAnswer: 2,
        tolerance: 0.05,
        unit: 'D',
        explanation: 'P = 1/0.5 = 2 D.',
      },
    ],
    commonMistake:
      "Forgetting to convert focal length to METRES before calculating power — dioptres are specifically " +
      "defined using focal length in metres; using centimetres directly gives a result off by a factor " +
      "of 100.",
    quickReview: [
      'P = 1/f: power is the reciprocal of focal length, in dioptres (D) when f is in metres.',
      'A shorter focal length means a more powerful (stronger-bending) lens.',
      'Lens powers add when lenses are combined, making dioptres practical for prescriptions.',
    ],
  },
};
