import type { Formula } from '@/types/content';

export const chapter8LensesFormulas: Record<string, Formula> = {
  'lens-equation-formula': {
    slug: 'lens-equation-formula',
    name: 'The Lens Equation',
    expression: '1/v − 1/u = 1/f',
    meaning: 'Relates an object\'s distance from a lens, the resulting image distance, and the lens\'s focal length (using the convention that distances are measured from the lens, with light travelling in the positive direction).',
    variables: [
      { symbol: 'v', meaning: 'Image distance from the lens' },
      { symbol: 'u', meaning: 'Object distance from the lens (negative, since the object is on the incoming side)' },
      { symbol: 'f', meaning: 'Focal length of the lens (positive for a converging lens, negative for a diverging lens)' },
    ],
    whenToUse: 'Use to find the image distance, object distance, or focal length of a lens, given the other two.',
    relatedConceptSlugs: ['the-lens-equation'],
  },
  'magnification-formula-lens': {
    slug: 'magnification-formula-lens',
    name: 'Linear Magnification (Lens)',
    expression: 'm = v/u',
    meaning: 'Magnification compares the size of the image produced by a lens to the size of the original object, using the ratio of image distance to object distance.',
    variables: [
      { symbol: 'm', meaning: 'Magnification (no units) — |m| > 1 means the image is larger than the object' },
      { symbol: 'v', meaning: 'Image distance from the lens' },
      { symbol: 'u', meaning: 'Object distance from the lens' },
    ],
    whenToUse: 'Use to find how much larger or smaller an image is compared to the original object, once v and u are known.',
    relatedConceptSlugs: ['refraction-through-lenses'],
  },
  'lens-power-formula': {
    slug: 'lens-power-formula',
    name: 'Power of a Lens',
    expression: 'P = 1/f',
    meaning: "A lens's power measures how strongly it converges (or diverges) light — a shorter focal length means a more powerful lens.",
    variables: [
      { symbol: 'P', meaning: 'Power of the lens, in dioptres (D), where 1 D = 1 m⁻¹' },
      { symbol: 'f', meaning: 'Focal length of the lens, in metres (positive for converging, negative for diverging)' },
    ],
    whenToUse: 'Use to find the optical power of a lens (as prescribed for glasses, for instance) from its focal length, or vice versa.',
    relatedConceptSlugs: ['power-of-a-lens'],
  },
};
