import type { Formula } from '@/types/content';

export const chapter3TransportFormulas: Record<string, Formula> = {
  'cardiac-output-formula': {
    slug: 'cardiac-output-formula',
    name: 'Cardiac Output',
    expression: 'CO = HR × SV',
    meaning:
      'Cardiac output is the total volume of blood the heart pumps per minute — it is the product of ' +
      'how fast the heart beats (heart rate) and how much blood it ejects with each beat (stroke volume).',
    variables: [
      { symbol: 'CO', meaning: 'Cardiac output, in millilitres or litres of blood per minute (mL/min or L/min)' },
      { symbol: 'HR', meaning: 'Heart rate, in beats per minute (bpm)' },
      { symbol: 'SV', meaning: 'Stroke volume — the volume of blood ejected by the left ventricle per beat (mL)' },
    ],
    whenToUse:
      'Use this formula whenever you need to calculate how much blood the heart circulates per minute ' +
      '— for example, to compare resting versus exercising blood flow, or to see how heart rate and ' +
      'stroke volume changes each affect total circulation.',
    relatedConceptSlugs: ['cardiac-cycle-and-heartbeat-control', 'structure-of-the-heart'],
  },
};
