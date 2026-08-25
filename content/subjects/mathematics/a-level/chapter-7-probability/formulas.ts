import type { Formula } from '@/types/content';

export const chapter7Formulas: Record<string, Formula> = {
  'probability-formula': {
    slug: 'probability-formula',
    name: 'Probability of an Event',
    expression: 'P(E) = n(E) / n(S)',
    meaning: 'The probability of an event equals the number of favourable outcomes divided by the total number of equally likely outcomes in the sample space.',
    variables: [
      { symbol: 'P(E)', meaning: 'the probability of event E, a number from 0 to 1' },
      { symbol: 'n(E)', meaning: 'the number of outcomes that make up event E (favourable outcomes)' },
      { symbol: 'n(S)', meaning: 'the total number of outcomes in the sample space S' },
    ],
    whenToUse: 'Whenever every outcome in the sample space is equally likely, and you need the probability of a specific event.',
    relatedConceptSlugs: ['meaning-of-probability-and-sample-space'],
  },
  'complement-rule-of-probability': {
    slug: 'complement-rule-of-probability',
    name: 'The Complement Rule',
    expression: "P(E') = 1 − P(E)",
    meaning: 'The probability that an event does NOT happen equals 1 minus the probability that it does happen.',
    variables: [
      { symbol: "P(E')", meaning: 'the probability of the complement of E — E not happening' },
      { symbol: 'P(E)', meaning: 'the probability of E happening' },
    ],
    whenToUse: 'Whenever finding "the probability that something does not happen" is easier than finding the probability that it does.',
    relatedConceptSlugs: ['the-complement-rule'],
  },
  'addition-rule-of-probability': {
    slug: 'addition-rule-of-probability',
    name: 'The Addition Rule',
    expression: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).   If A, B are mutually exclusive: P(A ∪ B) = P(A) + P(B).',
    meaning: 'The probability that A or B happens equals the sum of their individual probabilities, minus the probability they both happen (to avoid double-counting the overlap).',
    variables: [
      { symbol: 'P(A ∪ B)', meaning: 'the probability that A happens, or B happens, or both' },
      { symbol: 'P(A ∩ B)', meaning: 'the probability that both A and B happen' },
      { symbol: 'mutually exclusive', meaning: 'A and B cannot both happen at once, so P(A ∩ B) = 0' },
    ],
    whenToUse: 'Whenever you need the probability that at least one of two events happens.',
    relatedConceptSlugs: ['the-addition-rule-for-combined-events'],
  },
  'multiplication-rule-independent-events': {
    slug: 'multiplication-rule-independent-events',
    name: 'The Multiplication Rule for Independent Events',
    expression: 'P(A ∩ B) = P(A) × P(B)   (A, B independent)',
    meaning: 'When two events do not affect each other\'s outcome, the probability that both happen equals the product of their individual probabilities.',
    variables: [
      { symbol: 'P(A ∩ B)', meaning: 'the probability that both A and B happen' },
      { symbol: 'independent', meaning: 'the outcome of A has no effect on the probability of B, and vice versa' },
    ],
    whenToUse: 'Whenever two events are independent and you need the probability that both occur.',
    relatedConceptSlugs: ['independent-events-and-the-multiplication-rule'],
  },
  'conditional-probability-formula': {
    slug: 'conditional-probability-formula',
    name: 'Conditional Probability',
    expression: 'P(A | B) = P(A ∩ B) / P(B)   (P(B) ≠ 0)',
    meaning: 'The probability that A happens, given that B is already known to have happened — restricting the sample space down to just the outcomes where B occurs.',
    variables: [
      { symbol: 'P(A | B)', meaning: 'the probability of A, given that B has occurred' },
      { symbol: 'P(A ∩ B)', meaning: 'the probability that both A and B happen' },
      { symbol: 'P(B)', meaning: 'the probability that B happens' },
    ],
    whenToUse: 'Whenever extra information (that some other event B has already happened) changes the sample space you should be considering.',
    relatedConceptSlugs: ['conditional-probability'],
  },
  'expected-frequency-formula': {
    slug: 'expected-frequency-formula',
    name: 'Expected Frequency',
    expression: 'E = n × P(event)',
    meaning: 'The number of times an event is predicted to happen if a trial is repeated n times, based on its probability.',
    variables: [
      { symbol: 'E', meaning: 'the expected frequency — the predicted number of occurrences' },
      { symbol: 'n', meaning: 'the number of trials (repetitions)' },
      { symbol: 'P(event)', meaning: "the event's probability on a single trial" },
    ],
    whenToUse: 'Whenever you need to predict how many times an event will occur over many repeated trials.',
    relatedConceptSlugs: ['expected-frequency'],
  },
};
