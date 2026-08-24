import type { Formula } from '@/types/content';

export const chapter2CForcesFormulas: Record<string, Formula> = {
  'centripetal-force-formula': {
    slug: 'centripetal-force-formula',
    name: 'Centripetal Force (from speed)',
    expression: 'Fc = mv² / r',
    meaning: 'The net force needed to keep a mass moving on a circular path of radius r at speed v.',
    variables: [
      { symbol: 'Fc', meaning: 'centripetal force, in newtons (N)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'v', meaning: 'linear (tangential) speed, in metres per second (m/s)' },
      { symbol: 'r', meaning: 'radius of the circular path, in metres (m)' },
    ],
    whenToUse: 'Whenever you know an object\'s linear speed and the radius it curves around, and need the net inward force.',
    relatedConceptSlugs: ['centripetal-force', 'friction-as-centripetal-force', 'gravity-as-centripetal-force', 'vertical-circular-motion'],
  },
  'centripetal-force-formula-angular': {
    slug: 'centripetal-force-formula-angular',
    name: 'Centripetal Force (from angular velocity)',
    expression: 'Fc = mrω²',
    meaning: 'The same centripetal force, written using angular velocity instead of linear speed — useful whenever rotation rate (rad/s) is what you are given.',
    variables: [
      { symbol: 'Fc', meaning: 'centripetal force, in newtons (N)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'r', meaning: 'radius of the circular path, in metres (m)' },
      { symbol: 'ω', meaning: 'angular velocity, in radians per second (rad/s)' },
    ],
    whenToUse: 'Whenever you know how fast something is rotating in radians per second (rather than its linear speed) — substitute v = rω into Fc = mv²/r to get this form.',
    relatedConceptSlugs: ['tension-as-centripetal-force'],
  },
};
