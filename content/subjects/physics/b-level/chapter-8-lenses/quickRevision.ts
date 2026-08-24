import type { QuickRevision } from '@/types/content';

export const chapter8LensesQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-lens-equation',
      keyPoint: '1/v − 1/u = 1/f relates object distance, image distance, and focal length.',
      formulaSlug: 'lens-equation-formula',
      miniExample: 'An object at u=-30 cm with f=10 cm forms an image at v=15 cm.',
    },
    {
      conceptSlug: 'refraction-through-lenses',
      keyPoint: 'm = v/u; negative m means inverted image, |m|>1 means enlarged.',
      formulaSlug: 'magnification-formula-lens',
      miniExample: 'v=15 cm, u=-30 cm gives m=-0.5 (half-size, inverted).',
    },
    {
      conceptSlug: 'power-of-a-lens',
      keyPoint: 'P = 1/f (in dioptres, f in metres); shorter f means more powerful lens.',
      formulaSlug: 'lens-power-formula',
      miniExample: 'f = 0.25 m gives P = 4 D.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'refraction-at-a-curved-surface',
      keyPoint: 'The local normal varies across a curved surface, letting it focus or defocus light.',
      miniExample: 'A water droplet focuses sunlight like a simple convex lens.',
    },
  ],
};
