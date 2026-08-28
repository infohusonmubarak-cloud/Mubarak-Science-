import type { Formula } from '@/types/content';

export const chapter1AUnitsFormulas: Record<string, Formula> = {
  'vernier-caliper-formula': {
    slug: 'vernier-caliper-formula',
    name: 'Vernier Caliper Reading',
    expression: 'Total reading = MSR + (VC × LC),   where LC = 1 MSD − 1 VSD',
    meaning: 'A vernier caliper reads a length more precisely than a plain ruler by adding a small correction from its sliding vernier scale to the main scale reading.',
    variables: [
      { symbol: 'MSR', meaning: 'main scale reading — the whole-division reading on the fixed main scale, in millimetres (mm)' },
      { symbol: 'VC', meaning: 'vernier coincidence — the number of the vernier division that lines up exactly with a main scale division' },
      { symbol: 'LC', meaning: 'least count — the smallest length the instrument can measure, in millimetres (mm)' },
      { symbol: 'MSD, VSD', meaning: 'the size of one main scale division and one vernier scale division, in millimetres (mm)' },
    ],
    whenToUse: 'Whenever measuring a length, diameter, or depth more precisely than a plain ruler allows, using a vernier caliper.',
    relatedConceptSlugs: ['vernier-caliper'],
  },
  'micrometer-screw-gauge-formula': {
    slug: 'micrometer-screw-gauge-formula',
    name: 'Micrometer Screw Gauge Reading',
    expression: 'Total reading = MSR + (CSR × LC),   where LC = pitch / number of circular scale divisions',
    meaning: 'A micrometer screw gauge measures very small lengths (like wire diameters) by converting a full turn of a fine screw into a tiny, precisely known linear distance.',
    variables: [
      { symbol: 'MSR', meaning: 'main scale reading — the reading on the linear scale on the sleeve, in millimetres (mm)' },
      { symbol: 'CSR', meaning: 'circular scale reading — the division on the rotating thimble that lines up with the main scale\'s reference line' },
      { symbol: 'LC', meaning: 'least count — the smallest length the instrument can measure, in millimetres (mm)' },
      { symbol: 'pitch', meaning: 'the linear distance the spindle advances in one full turn of the thimble, in millimetres (mm)' },
    ],
    whenToUse: 'Whenever measuring a very small length — such as the diameter of a wire or the thickness of a sheet — more precisely than a vernier caliper allows.',
    relatedConceptSlugs: ['micrometer-screw-gauge'],
  },
  'simple-pendulum-period-formula': {
    slug: 'simple-pendulum-period-formula',
    name: 'Period of a Simple Pendulum',
    expression: 'T = 2π√(L / g)',
    meaning: 'A simple pendulum swings back and forth with a period that depends only on its length and the local gravitational acceleration — not on its mass or how wide it swings (for small angles). This steady, repeatable period is exactly what makes a pendulum useful as a time standard.',
    variables: [
      { symbol: 'T', meaning: 'the period — the time for one complete swing (there and back), in seconds (s)' },
      { symbol: 'L', meaning: 'the length of the pendulum, from the pivot to the centre of the bob, in metres (m)' },
      { symbol: 'g', meaning: 'the acceleration due to gravity, approximately 9.8 m/s²' },
    ],
    whenToUse: 'Whenever finding the period of a swinging pendulum, or using a pendulum\'s period to measure time or find g.',
    relatedConceptSlugs: ['measurement-of-time'],
  },
};
