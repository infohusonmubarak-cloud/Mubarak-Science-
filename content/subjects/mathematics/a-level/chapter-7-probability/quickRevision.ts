import type { QuickRevision } from '@/types/content';

export const chapter7QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'meaning-of-probability-and-sample-space',
      keyPoint: 'P(E) = n(E)/n(S), when outcomes are equally likely.',
      formulaSlug: 'probability-formula',
      miniExample: 'P(even, 1 die) = 3/6 = 1/2.',
    },
    {
      conceptSlug: 'the-addition-rule-for-combined-events',
      keyPoint: 'P(A∪B) = P(A)+P(B)−P(A∩B).',
      formulaSlug: 'addition-rule-of-probability',
      miniExample: 'P(king or heart) = 16/52.',
    },
    {
      conceptSlug: 'independent-events-and-the-multiplication-rule',
      keyPoint: 'Independent events: P(A∩B) = P(A)×P(B).',
      formulaSlug: 'multiplication-rule-independent-events',
      miniExample: 'P(2 heads) = 1/2×1/2 = 1/4.',
    },
    {
      conceptSlug: 'expected-frequency',
      keyPoint: 'E = n × P(event).',
      formulaSlug: 'expected-frequency-formula',
      miniExample: '120 rolls, P(5)=1/6 → E=20.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-probability-and-sample-space',
      keyPoint: 'P(E) = n(E)/n(S). Sample space = all outcomes; event = a chosen subset.',
      formulaSlug: 'probability-formula',
      miniExample: 'P(red ball, 4 of 10) = 0.4.',
    },
    {
      conceptSlug: 'the-complement-rule',
      keyPoint: "P(E') = 1 − P(E) — useful when the opposite is easier to find.",
      formulaSlug: 'complement-rule-of-probability',
      miniExample: '3 coins: P(≥1 head) = 1 − 1/8 = 7/8.',
    },
    {
      conceptSlug: 'the-addition-rule-for-combined-events',
      keyPoint: 'P(A∪B) = P(A)+P(B)−P(A∩B); mutually exclusive drops the overlap term.',
      formulaSlug: 'addition-rule-of-probability',
      miniExample: 'Mutually exclusive: P(A)=0.5, P(B)=0.3 → P(A∪B)=0.8.',
    },
    {
      conceptSlug: 'independent-events-and-the-multiplication-rule',
      keyPoint: 'Independent: outcome of one does not affect the other. P(A∩B)=P(A)P(B).',
      formulaSlug: 'multiplication-rule-independent-events',
      miniExample: 'Coin + die: P(heads and 6) = 1/12.',
    },
    {
      conceptSlug: 'conditional-probability',
      keyPoint: 'P(A|B) = P(A∩B)/P(B) — probability of A within the reduced sample space B.',
      formulaSlug: 'conditional-probability-formula',
      miniExample: 'P(king|face card) = 1/3.',
    },
    {
      conceptSlug: 'expected-frequency',
      keyPoint: 'E = n × P(event) — a prediction, not a guarantee.',
      formulaSlug: 'expected-frequency-formula',
      miniExample: '80 spins, P(red)=1/4 → E=20.',
    },
  ],
};
