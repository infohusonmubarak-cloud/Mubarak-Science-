import type { QuickRevision } from '@/types/content';

export const chapter8CInterferenceQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'huygens-principle',
      keyPoint: 'Every point on a wavefront is a source of secondary wavelets.',
      miniExample: 'Explains why waves bend around obstacles and through gaps.',
    },
    {
      conceptSlug: 'interference-of-light',
      keyPoint: 'Δy = λL/d — fringe spacing in a double-slit pattern.',
      formulaSlug: 'fringe-spacing-formula',
      miniExample: 'λ=600nm,d=0.5mm,L=2m → Δy=2.4mm.',
    },
    {
      conceptSlug: 'diffraction-of-light',
      keyPoint: 'a sinθ = mλ — dark bands from a single slit.',
      formulaSlug: 'single-slit-diffraction-formula',
      miniExample: 'a=0.2mm,λ=500nm → θ≈0.143°.',
    },
    {
      conceptSlug: 'diffraction-grating',
      keyPoint: 'd sinθ = mλ — sharp bright bands from many slits.',
      formulaSlug: 'diffraction-grating-equation-formula',
      miniExample: '600 lines/mm, m=2, λ=550nm → θ≈41.3°.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'huygens-principle',
      keyPoint: 'The new wavefront is the envelope of all the wavelets.',
      miniExample: 'Light diffracts too, just less noticeably than sound.',
    },
    {
      conceptSlug: 'interference-of-light',
      keyPoint: 'Direct evidence that light behaves as a wave.',
      formulaSlug: 'fringe-spacing-formula',
      miniExample: "Young's 1801 double-slit experiment.",
    },
    {
      conceptSlug: 'diffraction-of-light',
      keyPoint: 'Sets a fundamental resolution limit for any optical instrument.',
      formulaSlug: 'single-slit-diffraction-formula',
      miniExample: 'Caused by wavelets from different parts of the slit canceling.',
    },
    {
      conceptSlug: 'diffraction-grating',
      keyPoint: 'A diffraction order does not exist if mλ/d>1.',
      formulaSlug: 'diffraction-grating-equation-formula',
      miniExample: "A CD's rainbow reflection is a diffraction grating effect.",
    },
  ],
};
