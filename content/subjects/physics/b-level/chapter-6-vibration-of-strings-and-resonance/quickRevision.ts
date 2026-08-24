import type { QuickRevision } from '@/types/content';

export const chapter6VibrationQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'stationary-waves',
      keyPoint: 'Nodes (zero displacement) and antinodes (max displacement) are fixed, spaced λ/2 apart.',
      formulaSlug: 'node-antinode-spacing-formula',
      miniExample: '0.3 m between adjacent nodes gives λ = 0.6 m.',
    },
    {
      conceptSlug: 'resonance-column',
      keyPoint: 'Closed pipe: first resonance at L = λ/4 (node at closed end, antinode at open end).',
      formulaSlug: 'closed-pipe-resonance-formula',
      miniExample: '512 Hz resonating at L = 0.16 m gives v ≈ 327.7 m/s.',
    },
    {
      conceptSlug: 'organ-pipes',
      keyPoint: 'Open pipe: fundamental at L = λ/2 (antinode at both ends) — an octave above a closed pipe of the same length.',
      formulaSlug: 'open-pipe-frequency-formula',
      miniExample: 'A 1.2 m open pipe has a fundamental of ≈ 141.7 Hz.',
    },
    {
      conceptSlug: 'intensity-of-waves',
      keyPoint: 'I = P/A; intensity falls off as a wave\'s power spreads over a larger area.',
      formulaSlug: 'wave-intensity-formula',
      miniExample: '0.5 W over 10 m² gives an intensity of 0.05 W/m².',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'vibrating-strings',
      keyPoint: 'f = (1/2L)√(T/μ): shorter, tighter, lighter strings vibrate at higher frequency.',
      formulaSlug: 'vibrating-string-frequency-formula',
      miniExample: 'Tightening a guitar string raises its pitch by increasing T.',
    },
  ],
};
