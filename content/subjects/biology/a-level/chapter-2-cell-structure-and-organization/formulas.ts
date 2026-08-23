import type { Formula } from '@/types/content';

export const chapter2BioFormulas: Record<string, Formula> = {
  'magnification-formula': {
    slug: 'magnification-formula',
    name: 'Magnification Formula',
    expression: 'Magnification = Image size / Actual size',
    meaning: 'How many times larger a microscope image is compared to the real, actual size of the object.',
    variables: [
      { symbol: 'Image size', meaning: 'the measured size of the image under the microscope' },
      { symbol: 'Actual size', meaning: "the object's real, true size" },
    ],
    whenToUse: "Whenever you need to calculate how much a microscope image has been magnified, or work backwards to find an object's real size.",
    relatedConceptSlugs: ['microscopy-and-magnification'],
  },
};
