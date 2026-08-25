import type { QuickRevision } from '@/types/content';

export const chapter6CSoundQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'propagation-of-sound',
      keyPoint: 'v = 331+0.6T — sound needs a medium, cannot travel through a vacuum.',
      formulaSlug: 'speed-of-sound-in-air-formula',
      miniExample: 'T=20°C → v=343 m/s.',
    },
    {
      conceptSlug: 'echo',
      keyPoint: 'd = vt/2 — divide by 2 for the round trip.',
      formulaSlug: 'echo-distance-formula',
      miniExample: 'v=340,t=0.6s → d=102m.',
    },
    {
      conceptSlug: 'audibility-and-hearing-range',
      keyPoint: 'Human range: 20Hz–20kHz. d_min=(v×0.1)/2.',
      formulaSlug: 'minimum-echo-distance-formula',
      miniExample: 'In air: d_min=17m.',
    },
    {
      conceptSlug: 'doppler-effect',
      keyPoint: "f' = f(v±v₀)/(v∓v_s). Approaching: higher pitch.",
      formulaSlug: 'doppler-effect-formula',
      miniExample: 'f=500Hz, source approaching at 20m/s → f\'≈531Hz.',
    },
    {
      conceptSlug: 'properties-of-sound-waves',
      keyPoint: 'v = fλ.',
      formulaSlug: 'wave-equation-formula',
      miniExample: 'v=340,f=170Hz → λ=2m.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'propagation-of-sound',
      keyPoint: 'Fastest in solids, slower in liquids, slowest in gases.',
      formulaSlug: 'speed-of-sound-in-air-formula',
      miniExample: 'Pressing an ear to a wall hears sound more clearly.',
    },
    {
      conceptSlug: 'echo',
      keyPoint: 'Sonar and radar use the same round-trip timing principle.',
      formulaSlug: 'echo-distance-formula',
      miniExample: 'Ships use sonar to measure ocean depth.',
    },
    {
      conceptSlug: 'audibility-and-hearing-range',
      keyPoint: 'Below d_min, reflected sound blends into the original.',
      formulaSlug: 'minimum-echo-distance-formula',
      miniExample: 'Small rooms produce reverberation, not distinct echoes.',
    },
    {
      conceptSlug: 'doppler-effect',
      keyPoint: 'Caused by wave crests crowding together or spreading apart.',
      formulaSlug: 'doppler-effect-formula',
      miniExample: 'An ambulance siren drops in pitch right after passing.',
    },
    {
      conceptSlug: 'properties-of-sound-waves',
      keyPoint: 'Amplitude (loudness) is independent of wavelength/frequency (pitch).',
      formulaSlug: 'wave-equation-formula',
      miniExample: 'Bass notes need larger speakers for their long wavelengths.',
    },
  ],
};
