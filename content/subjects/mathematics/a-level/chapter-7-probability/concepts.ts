import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 7 — Probability. Matches sections
// 7.1-7.3 of the textbook exactly.
export const chapter7Concepts: Record<string, Concept> = {
  'meaning-of-probability-and-sample-space': {
    slug: 'meaning-of-probability-and-sample-space',
    title: 'Meaning of Probability and Sample Space',
    difficulty: 'easy',
    simpleExplanation:
      'The sample space (S) is the set of every possible outcome of an experiment. An event (E) is ' +
      'any subset of outcomes you care about. When every outcome is equally likely, the probability ' +
      'of an event is P(E) = n(E)/n(S) — the fraction of the sample space the event covers.',
    whyItMatters:
      'Probability gives a precise number (between 0 and 1) for how likely something is, replacing ' +
      'vague words like "likely" or "unlikely" with an exact, comparable value.',
    formulaSlug: 'probability-formula',
    workedExample: {
      id: 'probability-meaning-worked-1',
      title: 'Find the probability of rolling an even number',
      problemStatement: 'A fair six-sided die is rolled. Find the probability of rolling an even number.',
      steps: [
        { step: 1, instruction: 'Write out the sample space.', math: 'S = {1,2,3,4,5,6},  n(S) = 6', explanation: 'Every possible outcome of one roll.' },
        { step: 2, instruction: 'Identify the favourable outcomes.', math: 'E = {2,4,6},  n(E) = 3', explanation: 'The even numbers on the die.' },
        { step: 3, instruction: 'Apply the probability formula.', math: 'P(E) = 3/6 = 1/2', explanation: 'Divide favourable outcomes by total outcomes.' },
      ],
      finalAnswer: 'P(even) = 1/2',
    },
    whyItWorks:
      'When every outcome is equally likely, each outcome contributes an equal "share" of the ' +
      'total probability — so the fraction of outcomes belonging to the event is exactly the fraction of the total probability the event represents.',
    realLifeExample: {
      title: 'Weather forecasts',
      scenario: 'A weather forecast reporting "a 30% chance of rain" is stating a probability.',
      explanation: 'That percentage comes from analyzing many past days with similar conditions — the fraction of those days ("the sample space") that actually saw rain ("the event").',
    },
    practiceQuestions: [
      {
        id: 'probability-meaning-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A bag has 4 red balls and 6 blue balls. What is the probability of drawing a red ball? (Give as a decimal.)',
        hints: ['Total balls = 4 + 6 = 10.', 'P(red) = 4/10.'],
        correctAnswer: 0.4,
        explanation: 'P(red) = 4/10 = 0.4.',
      },
    ],
    commonMistake:
      'Using the number of favourable outcomes as the denominator instead of the total sample ' +
      'space size — the probability formula always divides by the TOTAL number of outcomes, not the number of favourable ones.',
    quickReview: [
      'P(E) = n(E) / n(S), when all outcomes are equally likely.',
      'The sample space S is every possible outcome; an event E is a chosen subset of them.',
      'Probability is always a number between 0 (impossible) and 1 (certain).',
    ],
  },

  'the-complement-rule': {
    slug: 'the-complement-rule',
    title: 'The Complement Rule',
    difficulty: 'medium',
    simpleExplanation:
      'The complement of an event E, written E\', is "E does not happen." Since an event either ' +
      'happens or does not (there is no third option), P(E) and P(E\') must always add up to 1: P(E\') = 1 − P(E).',
    whyItMatters:
      'Sometimes the complement of an event is much easier to calculate than the event itself — ' +
      'the complement rule lets you solve the easy version and subtract from 1, instead of tackling the hard version directly.',
    formulaSlug: 'complement-rule-of-probability',
    workedExample: {
      id: 'complement-worked-1',
      title: 'Use the complement rule',
      problemStatement: 'Three coins are tossed. Find the probability of getting at least one head.',
      steps: [
        { step: 1, instruction: 'Identify the complement of "at least one head."', math: "E' = \"no heads at all\" = all tails", explanation: 'The opposite of "at least one head" is "zero heads."' },
        { step: 2, instruction: 'Find the probability of the complement.', math: "P(E') = (1/2)³ = 1/8", explanation: 'Each coin independently shows tails with probability 1/2.' },
        { step: 3, instruction: 'Apply the complement rule.', math: "P(E) = 1 − P(E') = 1 − 1/8 = 7/8", explanation: 'Subtract from 1 to find the original event.' },
      ],
      finalAnswer: 'P(at least one head) = 7/8',
    },
    whyItWorks:
      'An event and its complement together cover every single possible outcome in the sample ' +
      'space exactly once, with no overlap — so their probabilities, which are fractions of the same whole sample space, must add to exactly 1.',
    realLifeExample: {
      title: 'Quality control "at least one defect" checks',
      scenario: 'A factory wants the probability that a batch of 10 items has at least one defective item.',
      explanation: 'Computing "no defects at all" directly is far simpler than checking every possible combination with at least one defect, so the complement rule (1 − P(no defects)) is the practical approach.',
    },
    practiceQuestions: [
      {
        id: 'complement-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'The probability that it rains tomorrow is 0.35. What is the probability it does NOT rain?',
        hints: ["P(not rain) = 1 − P(rain)."],
        correctAnswer: 0.65,
        explanation: '1 − 0.35 = 0.65.',
      },
    ],
    commonMistake:
      'Forgetting that P(E) + P(E\') must equal exactly 1 — trying to compute both directly and ' +
      'getting numbers that do not add to 1 signals a calculation error somewhere.',
    quickReview: [
      "P(E') = 1 − P(E). An event and its complement always add to 1.",
      'Useful when the complement (opposite) is easier to calculate directly.',
      '"At least one" problems are a classic case where the complement ("none at all") is simpler.',
    ],
  },

  'the-addition-rule-for-combined-events': {
    slug: 'the-addition-rule-for-combined-events',
    title: 'The Addition Rule for Combined Events',
    difficulty: 'medium',
    simpleExplanation:
      'To find the probability that A or B happens (or both), add their individual probabilities ' +
      'and subtract the probability that both happen, to avoid double-counting: P(A∪B) = P(A) + P(B) − P(A∩B). If A and B can never happen together (mutually exclusive), P(A∩B) = 0, simplifying it to just P(A) + P(B).',
    whyItMatters:
      'This rule correctly combines the probabilities of two events without over-counting outcomes ' +
      'that belong to both — a mistake that is easy to make if you simply add probabilities without checking for overlap.',
    formulaSlug: 'addition-rule-of-probability',
    workedExample: {
      id: 'addition-rule-worked-1',
      title: 'Apply the addition rule with overlap',
      problemStatement: 'A card is drawn from a standard deck. Find P(king or heart).',
      steps: [
        { step: 1, instruction: 'Find each individual probability.', math: 'P(king) = 4/52,  P(heart) = 13/52', explanation: '4 kings and 13 hearts in a 52-card deck.' },
        { step: 2, instruction: 'Find the overlap — the king of hearts.', math: 'P(king ∩ heart) = 1/52', explanation: 'Exactly one card is both a king and a heart.' },
        { step: 3, instruction: 'Apply the addition rule.', math: 'P(king ∪ heart) = 4/52 + 13/52 − 1/52 = 16/52', explanation: 'Subtract the overlap to avoid double-counting the king of hearts.' },
      ],
      finalAnswer: 'P(king or heart) = 16/52 = 4/13',
    },
    whyItWorks:
      'Simply adding P(A) + P(B) counts every outcome in the overlap A∩B twice — once as part of ' +
      'A, once as part of B — so subtracting P(A∩B) once corrects the count back to exactly right.',
    realLifeExample: {
      title: 'Membership in two clubs',
      scenario: 'A school wants to know the probability that a randomly chosen student is in the chess club or the debate club, when some students are in both.',
      explanation: 'Simply adding the two clubs\' membership fractions would double-count students in both clubs — the addition rule\'s subtraction step corrects for exactly that overlap.',
    },
    practiceQuestions: [
      {
        id: 'addition-rule-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'P(A) = 0.5, P(B) = 0.3, and A, B are mutually exclusive. Find P(A or B).',
        hints: ['Mutually exclusive means P(A∩B) = 0.'],
        correctAnswer: 0.8,
        explanation: 'Mutually exclusive: P(A∪B) = P(A) + P(B) = 0.5 + 0.3 = 0.8.',
      },
      {
        id: 'addition-rule-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'P(A) = 0.6, P(B) = 0.4, P(A∩B) = 0.2. Find P(A or B).',
        hints: ['P(A∪B) = P(A) + P(B) − P(A∩B).'],
        correctAnswer: 0.8,
        explanation: '0.6 + 0.4 − 0.2 = 0.8.',
      },
    ],
    commonMistake:
      'Always subtracting P(A∩B) even when the events are mutually exclusive (where it is already ' +
      'zero) is harmless, but forgetting to subtract it when events DO overlap leads to an answer that is too high.',
    quickReview: [
      'P(A∪B) = P(A) + P(B) − P(A∩B) in general.',
      'Mutually exclusive events: P(A∩B) = 0, so P(A∪B) = P(A) + P(B).',
      'Always check for overlap before simply adding two probabilities.',
    ],
  },

  'independent-events-and-the-multiplication-rule': {
    slug: 'independent-events-and-the-multiplication-rule',
    title: 'Independent Events and the Multiplication Rule',
    difficulty: 'medium',
    simpleExplanation:
      'Two events are independent if the outcome of one has no effect on the probability of the ' +
      'other. For independent events, the probability that both happen is the product of their ' +
      'individual probabilities: P(A∩B) = P(A) × P(B).',
    whyItMatters:
      'Many real situations involve repeated or unrelated events (like separate coin flips or dice ' +
      'rolls) — recognizing independence lets you find combined probabilities with simple multiplication.',
    formulaSlug: 'multiplication-rule-independent-events',
    workedExample: {
      id: 'multiplication-rule-worked-1',
      title: 'Find the probability of two independent events',
      problemStatement: 'A coin is tossed and a die is rolled. Find the probability of getting heads AND rolling a 6.',
      steps: [
        { step: 1, instruction: 'Confirm the events are independent.', explanation: 'The coin toss has no effect on the die roll, and vice versa.' },
        { step: 2, instruction: 'Find each individual probability.', math: 'P(heads) = 1/2,  P(6) = 1/6', explanation: 'Standard probabilities for a fair coin and fair die.' },
        { step: 3, instruction: 'Apply the multiplication rule.', math: 'P(heads ∩ 6) = 1/2 × 1/6 = 1/12', explanation: 'Multiply the two independent probabilities.' },
      ],
      finalAnswer: 'P(heads and 6) = 1/12',
    },
    whyItWorks:
      'If A and B are independent, then B occurring within the reduced sample space "given A" is ' +
      'exactly as likely as B occurring overall — so the fraction of A\'s outcomes that also satisfy B is just P(B), which is why multiplying the two whole-sample-space probabilities gives the correct joint probability.',
    realLifeExample: {
      title: 'Independent quality checks',
      scenario: 'A factory has two independent inspection machines, each catching a defect with a known probability.',
      explanation: 'The probability that both machines catch the same defect (if they operate independently) is the product of their individual detection probabilities — an application of the multiplication rule to system reliability.',
    },
    practiceQuestions: [
      {
        id: 'multiplication-rule-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two fair coins are tossed. Find the probability that both show heads.',
        hints: ['P(heads) = 1/2 for each coin, and the tosses are independent.'],
        correctAnswer: 0.25,
        explanation: 'P(both heads) = 1/2 × 1/2 = 1/4 = 0.25.',
      },
    ],
    commonMistake:
      'Applying the multiplication rule (P(A)×P(B)) to events that are NOT actually independent — ' +
      'first always confirm whether one event affects the other before multiplying their raw probabilities.',
    quickReview: [
      'Independent events: the outcome of one has no effect on the other.',
      'P(A∩B) = P(A) × P(B), for independent events only.',
      'Always confirm independence before applying this rule.',
    ],
  },

  'conditional-probability': {
    slug: 'conditional-probability',
    title: 'Conditional Probability',
    difficulty: 'hard',
    simpleExplanation:
      'Conditional probability, P(A|B), is the probability of A happening given that B is already ' +
      'known to have happened. Knowing B occurred narrows the sample space down to just B\'s outcomes, ' +
      'and P(A|B) = P(A∩B) / P(B) measures A\'s share of that narrowed space.',
    whyItMatters:
      'Real information often arrives partially — conditional probability is how you correctly ' +
      'update a probability once you learn that something else has already happened.',
    formulaSlug: 'conditional-probability-formula',
    workedExample: {
      id: 'conditional-worked-1',
      title: 'Find a conditional probability',
      problemStatement: 'A card is drawn from a standard deck. Given that it is a face card (J, Q, K), find the probability it is a king.',
      steps: [
        { step: 1, instruction: 'Identify the given condition (B) and the event (A).', math: 'B = face card,  A = king', explanation: 'We already know the card is a face card.' },
        { step: 2, instruction: 'Find P(A∩B) — being both a king and a face card.', math: 'P(king ∩ face) = 4/52', explanation: 'All 4 kings are face cards, so this is just P(king).' },
        { step: 3, instruction: 'Find P(B) — being a face card.', math: 'P(face) = 12/52', explanation: '3 face cards (J,Q,K) × 4 suits = 12.' },
        { step: 4, instruction: 'Apply the conditional probability formula.', math: 'P(king|face) = (4/52) / (12/52) = 4/12 = 1/3', explanation: 'Divide the joint probability by the condition\'s probability.' },
      ],
      finalAnswer: 'P(king | face card) = 1/3',
    },
    whyItWorks:
      'Once B is known to have happened, only outcomes within B remain relevant — dividing by P(B) ' +
      're-normalizes A∩B\'s probability as a fraction of this new, smaller sample space, rather than the original full sample space.',
    realLifeExample: {
      title: 'Medical test results',
      scenario: 'A doctor wants to know the probability a patient has a disease, given that their test result came back positive.',
      explanation: 'P(disease | positive test) is a conditional probability — using known information (a positive test) to update the probability of the actual condition (having the disease), rather than the plain unconditional disease rate.',
    },
    practiceQuestions: [
      {
        id: 'conditional-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'P(A∩B) = 0.15 and P(B) = 0.3. Find P(A|B).',
        hints: ['P(A|B) = P(A∩B) / P(B).'],
        correctAnswer: 0.5,
        explanation: '0.15 / 0.3 = 0.5.',
      },
    ],
    commonMistake:
      'Confusing P(A|B) with P(B|A) — these are generally different values; "probability of A given ' +
      'B" is not the same as "probability of B given A" unless P(A) happens to equal P(B).',
    quickReview: [
      'P(A|B) = P(A∩B) / P(B) — the probability of A within the reduced sample space where B is true.',
      'Conditional probability updates a probability based on new information.',
      'P(A|B) and P(B|A) are generally different — do not mix them up.',
    ],
  },

  'expected-frequency': {
    slug: 'expected-frequency',
    title: 'Expected Frequency',
    difficulty: 'medium',
    simpleExplanation:
      'Expected frequency predicts how many times an event should occur if a trial is repeated n ' +
      'times, based on its probability: E = n × P(event). It is a prediction based on probability, not a guaranteed exact outcome.',
    whyItMatters:
      'Expected frequency turns an abstract probability into a concrete, practical prediction — ' +
      'useful for planning resources, comparing predictions to real data, and checking whether results are unusual.',
    formulaSlug: 'expected-frequency-formula',
    workedExample: {
      id: 'expected-frequency-worked-1',
      title: 'Calculate an expected frequency',
      problemStatement: 'A fair die is rolled 120 times. How many times would you expect to roll a 5?',
      steps: [
        { step: 1, instruction: 'Find the probability of the event on one trial.', math: 'P(5) = 1/6', explanation: 'One favourable outcome out of six equally likely outcomes.' },
        { step: 2, instruction: 'Apply the expected frequency formula.', math: 'E = n × P(event) = 120 × 1/6', explanation: 'Multiply the number of trials by the single-trial probability.' },
        { step: 3, instruction: 'Evaluate.', math: '120 × 1/6 = 20', explanation: 'Divide 120 by 6.' },
      ],
      finalAnswer: 'Expected frequency = 20 times',
    },
    whyItWorks:
      'If each trial independently has probability P(event) of the event occurring, then over n ' +
      'trials the event is expected to occur in that same fraction, P(event), of the trials on ' +
      'average — multiplying by n converts that fraction into an expected count.',
    realLifeExample: {
      title: 'Predicting insurance claims',
      scenario: 'An insurance company knows the probability that any one policyholder files a claim in a year, and has 10,000 policyholders.',
      explanation: 'Multiplying the claim probability by 10,000 gives the expected number of claims — a direct real-world use of expected frequency for financial planning.',
    },
    practiceQuestions: [
      {
        id: 'expected-frequency-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A spinner has a 1/4 chance of landing on red. If spun 80 times, how many times is it expected to land on red?',
        hints: ['E = n × P(event) = 80 × 1/4.'],
        correctAnswer: 20,
        explanation: '80 × 1/4 = 20.',
      },
    ],
    commonMistake:
      'Treating expected frequency as a guaranteed exact result rather than a prediction — actual ' +
      'results from real trials will typically vary somewhat around the expected value, especially for a small number of trials.',
    quickReview: [
      'E = n × P(event).',
      'Expected frequency is a prediction, not a guarantee — actual results can vary.',
      'Useful for comparing predicted outcomes to observed real-world data.',
    ],
  },
};
