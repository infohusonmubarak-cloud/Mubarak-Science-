import type { QuickRevision } from '@/types/content';

export const chapter7COpticsQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-camera',
      keyPoint: '1/f = 1/v + 1/u — forms a real, inverted image.',
      formulaSlug: 'camera-lens-formula',
      miniExample: 'f=0.05m, u=3m → v≈0.0508m.',
    },
    {
      conceptSlug: 'the-human-eye',
      keyPoint: 'P = 1/f. Myopia: negative P. Hyperopia: positive P.',
      formulaSlug: 'eye-correction-formula',
      miniExample: 'Far point 2m → P=−0.5D.',
    },
    {
      conceptSlug: 'compound-microscope',
      keyPoint: 'M ≈ (L/f₀)(D/fₑ) — two magnifications multiply.',
      formulaSlug: 'microscope-magnification-formula',
      miniExample: 'L=0.18,f₀=0.005,fₑ=0.025 → M=360.',
    },
    {
      conceptSlug: 'astronomical-telescope',
      keyPoint: 'M = f₀/fₑ.',
      formulaSlug: 'telescope-magnification-formula',
      miniExample: 'f₀=1.0m,fₑ=0.02m → M=50.',
    },
    {
      conceptSlug: 'laser-light',
      keyPoint: 'E = hf = hc/λ. Coherent, monochromatic, directional.',
      formulaSlug: 'photon-energy-formula',
      miniExample: 'λ=632.8nm (He-Ne) → E≈3.14×10⁻¹⁹J.',
    },
    {
      conceptSlug: 'fibre-optics-and-total-internal-reflection',
      keyPoint: 'θc = sin⁻¹(1/n) — total internal reflection beyond θc.',
      formulaSlug: 'fibre-critical-angle-formula',
      miniExample: 'n=1.5 → θc≈41.8°.',
    },
    {
      conceptSlug: 'spectrometer',
      keyPoint: 'd sinθ = mλ.',
      formulaSlug: 'spectrometer-grating-formula',
      miniExample: '500 lines/mm, λ=600nm → θ≈17.5°.',
    },
    {
      conceptSlug: 'photometry-and-light-intensity',
      keyPoint: 'E = I/d² — inverse-square law.',
      formulaSlug: 'illuminance-formula',
      miniExample: 'I=100cd, d=2m → E=25 lux.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-camera',
      keyPoint: 'Autofocus moves the lens to solve the lens equation live.',
      formulaSlug: 'camera-lens-formula',
      miniExample: 'The foundation for every instrument in this chapter.',
    },
    {
      conceptSlug: 'the-human-eye',
      keyPoint: 'Myopia focuses in front of the retina; hyperopia behind it.',
      formulaSlug: 'eye-correction-formula',
      miniExample: 'Reading glasses use converging lenses (opposite of myopia).',
    },
    {
      conceptSlug: 'compound-microscope',
      keyPoint: 'Objective forms a magnified real image; eyepiece magnifies it again.',
      formulaSlug: 'microscope-magnification-formula',
      miniExample: 'A shorter objective focal length boosts magnification.',
    },
    {
      conceptSlug: 'astronomical-telescope',
      keyPoint: 'A larger objective mainly improves brightness, not just magnification.',
      formulaSlug: 'telescope-magnification-formula',
      miniExample: 'Swapping eyepieces changes the zoom level.',
    },
    {
      conceptSlug: 'laser-light',
      keyPoint: 'Comes from stimulated emission of one exact photon energy.',
      formulaSlug: 'photon-energy-formula',
      miniExample: 'Always convert nm to m before substituting.',
    },
    {
      conceptSlug: 'fibre-optics-and-total-internal-reflection',
      keyPoint: 'Below θc, light refracts out and is lost instead.',
      formulaSlug: 'fibre-critical-angle-formula',
      miniExample: 'Endoscopes bundle fibres to see inside the body.',
    },
    {
      conceptSlug: 'spectrometer',
      keyPoint: 'd is the reciprocal of lines-per-unit-length, not the line count.',
      formulaSlug: 'spectrometer-grating-formula',
      miniExample: 'Identifies elements from a star\'s light.',
    },
    {
      conceptSlug: 'photometry-and-light-intensity',
      keyPoint: 'Comes from a sphere\'s surface area growing with radius squared.',
      formulaSlug: 'illuminance-formula',
      miniExample: 'Doubling distance cuts illuminance to one-quarter.',
    },
  ],
};
