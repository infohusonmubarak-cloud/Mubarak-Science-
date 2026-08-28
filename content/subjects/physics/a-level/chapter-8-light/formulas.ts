import type { Formula } from '@/types/content';

export const chapter8ALightFormulas: Record<string, Formula> = {
  'mirror-equation-and-magnification-formula': {
    slug: 'mirror-equation-and-magnification-formula',
    name: 'The Mirror Equation and Magnification',
    expression: '1/f = 1/v + 1/u;   magnification m = −v/u = h(i)/h(o)',
    meaning: 'The mirror equation relates the distances of the object, the image, and the focal point for a curved mirror. Magnification compares the size of the image to the size of the object, and also reveals whether the image is upright or inverted.',
    variables: [
      { symbol: 'f', meaning: "the mirror's focal length, in metres or centimetres (negative for a concave mirror, positive for a convex mirror, using the sign convention where the object side is negative)" },
      { symbol: 'u', meaning: 'object distance from the mirror (always negative, since the object is always in front of the mirror)' },
      { symbol: 'v', meaning: 'image distance from the mirror (negative for a real image in front of the mirror, positive for a virtual image behind it)' },
      { symbol: 'm', meaning: 'magnification (dimensionless) — a negative value means an inverted image, positive means upright; |m| > 1 means enlarged, |m| < 1 means diminished' },
      { symbol: 'h(i), h(o)', meaning: 'image height and object height, in the same units' },
    ],
    whenToUse: 'Whenever the image distance, object distance, focal length, or magnification for a curved mirror needs to be found, given the other relevant quantities.',
    relatedConceptSlugs: ['mirror-formula-a-level'],
  },
};
