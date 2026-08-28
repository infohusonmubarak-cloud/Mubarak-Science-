import type { Concept } from '@/types/content';

export const chapter8ALightConcepts: Record<string, Concept> = {
  'sources-of-light-a-level': {
    slug: 'sources-of-light-a-level',
    title: 'Sources of Light',
    difficulty: 'easy',
    simpleExplanation:
      'A luminous object produces its own light (like the Sun, a candle flame, or a light bulb). A ' +
      'non-luminous object does not produce light of its own — it is only visible because it ' +
      'reflects light from a luminous source into our eyes. We see any object at all only because ' +
      'light from it (either its own, or reflected) enters our eyes.',
    whyItMatters:
      'Understanding that most of what we see is REFLECTED light (not self-produced light) is the ' +
      'foundation for everything else in this chapter — reflection, mirrors, and images all depend on this basic idea.',
    workedExample: {
      id: 'sources-light-worked-1',
      title: 'Classify objects as luminous or non-luminous',
      problemStatement: 'Classify each as luminous or non-luminous: (a) the Moon, (b) a lit torch, (c) this page of text.',
      steps: [
        { step: 1, instruction: 'Consider the Moon.', explanation: "The Moon produces no light of its own — it only reflects sunlight, so it is non-luminous (despite looking bright in the night sky)." },
        { step: 2, instruction: 'Consider the lit torch.', explanation: 'A torch actively produces its own light using electrical energy, so it is luminous.' },
        { step: 3, instruction: 'Consider the page of text.', explanation: 'The page produces no light of its own — you can only read it because it reflects light from a lamp, window, or other luminous source, so it is non-luminous.' },
      ],
      finalAnswer: '(a) Non-luminous, (b) Luminous, (c) Non-luminous.',
    },
    whyItWorks:
      'The luminous/non-luminous distinction is really about the ORIGIN of the light reaching your ' +
      "eye — whether it was generated right there at the object, or generated somewhere else and " +
      'simply bounced (reflected) off the object on its way to you.',
    realLifeExample: {
      title: 'Why the Moon appears to "shine"',
      scenario: 'The Moon appears bright in the night sky, leading many people to assume it produces its own light.',
      explanation: 'In reality, the Moon is non-luminous — every bit of moonlight is actually reflected sunlight, which is why the Moon has different visible "phases" as the fraction of sunlit surface facing Earth changes.',
    },
    practiceQuestions: [
      {
        id: 'sources-light-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is a luminous object?',
        hints: ['A luminous object produces its OWN light.'],
        options: [
          { id: 'a', text: 'A mirror' },
          { id: 'b', text: 'A burning candle' },
          { id: 'c', text: 'A book' },
          { id: 'd', text: 'A planet (like Earth, seen from space)' },
        ],
        correctOptionId: 'b',
        explanation: 'A burning candle produces its own light through combustion, making it luminous; the others only reflect light from elsewhere.',
      },
    ],
    commonMistake:
      'Assuming anything bright-looking must be luminous — the Moon and planets look bright but are ' +
      'entirely non-luminous, only reflecting light from the Sun.',
    quickReview: [
      'Luminous: produces its own light (Sun, flames, light bulbs).',
      'Non-luminous: only visible by reflecting light from a luminous source.',
      'We see anything only because light from it enters our eyes.',
    ],
  },

  'reflection-of-light-a-level': {
    slug: 'reflection-of-light-a-level',
    title: 'Reflection of Light',
    difficulty: 'easy',
    simpleExplanation:
      'Reflection happens when light bounces off a surface, obeying the law of reflection: the ' +
      'angle of incidence equals the angle of reflection (both measured from an imaginary line, ' +
      'the normal, drawn perpendicular to the surface). Regular (specular) reflection happens off a ' +
      'smooth surface, where all reflected rays stay parallel — this is what makes a sharp, clear ' +
      'image possible. Diffuse reflection happens off a rough surface, scattering light in many directions.',
    whyItMatters:
      'This single law explains why a mirror gives a sharp, clear reflection while a piece of paper ' +
      "(also reflecting light) does not — it's entirely down to how smooth the reflecting surface is.",
    workedExample: {
      id: 'reflection-worked-1',
      title: 'Apply the law of reflection',
      problemStatement: 'A ray of light strikes a flat mirror, making an angle of 35° with the normal. Find the angle of reflection, and the angle between the incident and reflected rays.',
      steps: [
        { step: 1, instruction: 'Apply the law of reflection.', math: 'angle of reflection = angle of incidence = 35°', explanation: 'By the law of reflection, these two angles are always equal.' },
        { step: 2, instruction: 'Find the angle between the incident and reflected rays.', math: '35° + 35° = 70°', explanation: 'The total angle between the two rays is the sum of the incidence and reflection angles (both measured from the normal).' },
      ],
      finalAnswer: 'Angle of reflection = 35°; angle between the rays = 70°.',
    },
    whyItWorks:
      'The law of reflection is a direct consequence of how light interacts with a surface — it ' +
      'always reflects symmetrically about the normal, which is exactly why the two angles, ' +
      'measured on either side of that same normal line, must be equal.',
    realLifeExample: {
      title: 'Why wet roads are harder to see at night',
      scenario: 'A dry road diffusely scatters headlight beams in many directions, but a wet road can create a bright, distracting glare.',
      explanation: 'A thin layer of water makes the road surface much smoother, shifting the reflection from diffuse toward regular (specular) — concentrating the reflected headlight beam directly back toward the driver\'s eyes as glare.',
    },
    practiceQuestions: [
      {
        id: 'reflection-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A ray of light hits a mirror with an angle of incidence of 50°. Find the angle of reflection.',
        hints: ['The law of reflection: angle of incidence = angle of reflection.'],
        correctAnswer: 50,
        unit: '°',
        explanation: 'By the law of reflection, the angle of reflection equals the angle of incidence: 50°.',
      },
    ],
    commonMistake:
      'Measuring the angle of incidence/reflection from the mirror surface itself, instead of from ' +
      'the NORMAL (the perpendicular line to the surface) — the law of reflection is always defined ' +
      'relative to the normal, not the surface.',
    quickReview: [
      'Law of reflection: angle of incidence = angle of reflection (both from the normal).',
      'Regular reflection: smooth surface, parallel rays stay parallel — sharp images.',
      'Diffuse reflection: rough surface, rays scatter in many directions — no clear image.',
    ],
  },

  'plane-mirror-images-a-level': {
    slug: 'plane-mirror-images-a-level',
    title: 'Image Formation in a Plane Mirror',
    difficulty: 'medium',
    simpleExplanation:
      'A plane (flat) mirror always forms an image that is: virtual (light rays only appear to come ' +
      'from behind the mirror, they don\'t actually meet there), upright, the same size as the ' +
      'object, and exactly as far behind the mirror as the object is in front of it. The image is ' +
      'also laterally inverted — left and right appear swapped.',
    whyItMatters:
      "Understanding exactly how a plane mirror image behaves explains everyday experiences — like " +
      "why text held up to a mirror looks backward, and why you appear to be exactly as far " +
      '"inside" the mirror as you are standing in front of it.',
    diagram: {
      id: 'plane-mirror-diagram',
      title: 'Image formation in a plane mirror',
      altText: 'A diagram showing an object in front of a plane mirror, with its virtual image the same distance behind the mirror, connected by dashed lines representing the apparent light paths',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: -3, y: 0, label: 'Object' },
          { x: 3, y: 0, label: 'Image' },
        ],
        segments: [
          { from: [0, -3], to: [0, 3] },
          { from: [-3, 0], to: [3, 0], dashed: true },
        ],
      },
    },
    workedExample: {
      id: 'plane-mirror-worked-1',
      title: 'Find the position of a plane-mirror image',
      problemStatement: 'A person stands 1.8 m in front of a large plane mirror. Find how far their image appears to be behind the mirror, and their distance from the image.',
      steps: [
        { step: 1, instruction: 'Apply the plane-mirror image rule.', explanation: 'A plane mirror always places the image exactly as far behind the mirror as the object is in front of it.' },
        { step: 2, instruction: 'Find the image distance behind the mirror.', math: '1.8 m', explanation: 'This equals the object distance in front of the mirror.' },
        { step: 3, instruction: 'Find the total distance from the person to their image.', math: '1.8 + 1.8 = 3.6', explanation: 'The total distance is the object distance plus the image distance.' },
      ],
      finalAnswer: 'The image is 1.8 m behind the mirror; the person is 3.6 m from their own image.',
    },
    whyItWorks:
      'This rule follows directly from the law of reflection applied to every ray leaving the ' +
      'object — tracing the reflected rays backward (since they only APPEAR to come from behind the ' +
      'mirror) always shows they meet at a point exactly as far behind the mirror as the object is in front.',
    realLifeExample: {
      title: 'Why text looks backward in a mirror',
      scenario: 'Holding a page of text up to a mirror makes the letters appear reversed left-to-right (though not upside down).',
      explanation: 'This is the lateral inversion of a plane-mirror image — front-to-back is swapped by the reflection, which appears to us as a left-right reversal.',
    },
    practiceQuestions: [
      {
        id: 'plane-mirror-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object is placed 0.6 m in front of a plane mirror. Find the total distance between the object and its image.',
        hints: ['The image forms 0.6 m behind the mirror.', 'Total distance = object distance + image distance.'],
        correctAnswer: 1.2,
        unit: 'm',
        explanation: 'Image distance = 0.6 m (behind mirror). Total distance = 0.6 + 0.6 = 1.2 m.',
      },
      {
        id: 'plane-mirror-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which of these correctly describes a plane-mirror image?',
        hints: ['Recall all four characteristics: virtual, upright, same size, laterally inverted.'],
        options: [
          { id: 'a', text: 'Real, inverted, and magnified' },
          { id: 'b', text: 'Virtual, upright, same size, and laterally inverted' },
          { id: 'c', text: 'Real, upright, and diminished' },
          { id: 'd', text: 'Virtual, inverted, and magnified' },
        ],
        correctOptionId: 'b',
        explanation: 'A plane mirror always forms a virtual, upright, same-size, laterally inverted image.',
      },
    ],
    commonMistake:
      'Calling a plane-mirror image "real" — since the light rays only APPEAR to come from behind ' +
      'the mirror (and never actually pass through that point), the image is always virtual, never real.',
    quickReview: [
      'A plane-mirror image is: virtual, upright, same size, and laterally inverted.',
      'The image is exactly as far behind the mirror as the object is in front.',
      'The image can never be projected onto a screen, since it is virtual.',
    ],
  },

  'curved-mirrors-a-level': {
    slug: 'curved-mirrors-a-level',
    title: 'Curved Mirrors',
    difficulty: 'medium',
    simpleExplanation:
      'A concave mirror curves inward (like the inside of a spoon) and can form either real or ' +
      'virtual images, depending on the object\'s position — it converges (brings together) ' +
      'reflected parallel rays at a real focal point. A convex mirror curves outward (like the back ' +
      'of a spoon) and always forms a virtual, upright, diminished image — it diverges (spreads ' +
      'out) reflected parallel rays, which only appear to come from a virtual focal point behind the mirror.',
    whyItMatters:
      'The type of curved mirror used depends entirely on the job needed — concave mirrors can ' +
      'magnify (like a shaving or makeup mirror), while convex mirrors give a wider field of view, ' +
      'always showing an upright (never confusingly inverted) image.',
    workedExample: {
      id: 'curved-mirrors-worked-1',
      title: 'Choose the right type of curved mirror',
      problemStatement: 'A car needs a wing mirror that shows the widest possible field of view behind the car, always upright. Explain which type of curved mirror should be used, and why.',
      steps: [
        { step: 1, instruction: "Consider what a convex mirror's shape does to reflected rays.", explanation: "A convex mirror's outward curve spreads out (diverges) reflected rays, effectively showing a wider area than a flat mirror of the same size." },
        { step: 2, instruction: "Consider the type of image a convex mirror always forms.", explanation: "A convex mirror always forms a virtual, upright image, for objects at any distance — never an inverted one." },
        { step: 3, instruction: 'Conclude.', explanation: 'A convex mirror is the right choice, since it gives both the wider field of view AND the always-upright image needed for a car wing mirror.' },
      ],
      finalAnswer: 'A convex mirror should be used, since it gives a wider field of view and always forms an upright image.',
    },
    whyItWorks:
      "The behavior of each mirror type comes directly from its curvature — a concave (inward-curving) " +
      'surface focuses parallel rays toward a real point in front of the mirror, while a convex ' +
      '(outward-curving) surface spreads them apart, so they only ever appear to meet behind the mirror.',
    realLifeExample: {
      title: 'Concave mirrors in torches and telescopes',
      scenario: 'A flashlight or torch uses a curved mirror behind its bulb to produce a strong, directional beam.',
      explanation: "Placing the bulb at the concave mirror's focal point makes the reflected rays travel out as a parallel, concentrated beam, rather than spreading out uselessly in every direction.",
    },
    practiceQuestions: [
      {
        id: 'curved-mirrors-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which type of curved mirror always forms a virtual, upright, diminished image, no matter the object\'s distance?',
        hints: ['Think about which mirror type spreads (diverges) reflected rays.'],
        options: [
          { id: 'a', text: 'Concave mirror' },
          { id: 'b', text: 'Convex mirror' },
          { id: 'c', text: 'Plane mirror' },
          { id: 'd', text: 'None of these' },
        ],
        correctOptionId: 'b',
        explanation: 'A convex mirror always diverges reflected rays, producing a virtual, upright, diminished image regardless of object distance.',
      },
    ],
    commonMistake:
      'Assuming a concave mirror always magnifies — a concave mirror\'s image depends on the ' +
      "object's position: it can be magnified, the same size, or diminished, and either real (inverted) " +
      'or virtual (upright), unlike a convex mirror which always behaves the same way.',
    quickReview: [
      'Concave: converges rays, can form real or virtual images depending on object distance.',
      'Convex: diverges rays, always forms virtual, upright, diminished images.',
      'Convex mirrors give a wider field of view — used for car mirrors and security mirrors.',
    ],
  },

  'mirror-formula-a-level': {
    slug: 'mirror-formula-a-level',
    title: 'The Mirror Formula and Magnification',
    difficulty: 'hard',
    simpleExplanation:
      'The mirror formula, 1/f = 1/v + 1/u, relates the focal length (f), image distance (v), and ' +
      'object distance (u) for a curved mirror, letting you calculate exactly where an image will ' +
      'form. Magnification, m = −v/u, tells you the image\'s size relative to the object, and ' +
      'whether it is upright (positive m) or inverted (negative m).',
    whyItMatters:
      'This formula turns curved-mirror optics from a qualitative sketch into an exact calculation ' +
      '— essential for designing anything from telescopes to dental mirrors to precise specifications.',
    formulaSlug: 'mirror-equation-and-magnification-formula',
    workedExample: {
      id: 'mirror-formula-worked-1',
      title: 'Find the image position and magnification for a concave mirror',
      problemStatement: 'A concave mirror has a focal length of 15 cm. An object is placed 30 cm in front of it. Find the image distance and magnification. (Using the sign convention: concave f is negative, object distance u is negative.)',
      steps: [
        { step: 1, instruction: 'Assign signs to the known values.', math: 'f = −15 cm, u = −30 cm', explanation: 'Concave mirror: f is negative. Object is always in front: u is negative.' },
        { step: 2, instruction: 'Write the mirror formula and rearrange for v.', math: '1/v = 1/f − 1/u', explanation: 'Rearranging 1/f = 1/v + 1/u to solve for 1/v.' },
        { step: 3, instruction: 'Substitute and calculate.', math: '1/v = 1/(−15) − 1/(−30) = −1/15 + 1/30 = −1/30', explanation: '−1/15 + 1/30 = −2/30 + 1/30 = −1/30.' },
        { step: 4, instruction: 'Find v, then the magnification.', math: 'v = −30 cm;  m = −v/u = −(−30)/(−30) = −1', explanation: 'The image forms 30 cm in front of the mirror (real); magnification −1 means the same size, but inverted.' },
      ],
      finalAnswer: 'v = −30 cm (real image, 30 cm in front of the mirror); m = −1 (same size, inverted).',
    },
    whyItWorks:
      "This particular result (object at 2f, image also at 2f, magnification exactly −1) is a " +
      "well-known special case: placing an object at the mirror's centre of curvature (twice the " +
      'focal length) always produces a real, inverted image of exactly the same size, at the same distance.',
    realLifeExample: {
      title: 'Dentist\'s mirror',
      scenario: 'A dentist uses a small concave mirror held very close to a tooth to see a magnified, upright view.',
      explanation: 'By keeping the object (the tooth) closer to the mirror than its focal length, the mirror formula predicts a virtual, upright, MAGNIFIED image — exactly the enlarged view a dentist needs.',
    },
    practiceQuestions: [
      {
        id: 'mirror-formula-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A concave mirror has a focal length of 20 cm. An object is placed 50 cm in front of it. Find the image distance v. (Use f = −20 cm, u = −50 cm.)',
        hints: ['1/v = 1/f − 1/u.', '1/(−20) − 1/(−50).'],
        correctAnswer: -33.33,
        tolerance: 0.5,
        unit: 'cm',
        explanation: '1/v = 1/(−20) − 1/(−50) = −0.05 + 0.02 = −0.03, so v = 1/(−0.03) ≈ −33.33 cm.',
      },
    ],
    commonMistake:
      'Forgetting to apply the sign convention consistently — mixing positive and negative signs ' +
      'for u, v, and f leads to an image position or magnification with the wrong sign, giving a ' +
      'completely wrong description of the image (real vs. virtual, upright vs. inverted).',
    quickReview: [
      '1/f = 1/v + 1/u',
      'm = −v/u = h(i)/h(o)',
      'Object distance u is always negative; concave f is negative, convex f is positive.',
    ],
  },
};
