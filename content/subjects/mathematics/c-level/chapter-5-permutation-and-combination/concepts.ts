import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 5 — Permutation and Combination.
// Matches the textbook preface's description: concepts of permutation
// and combination, with applications to Mathematics, Statistics,
// Science, and Engineering.
export const chapter5CConcepts: Record<string, Concept> = {
  'the-fundamental-counting-principle': {
    slug: 'the-fundamental-counting-principle',
    title: 'The Fundamental Counting Principle',
    difficulty: 'easy',
    simpleExplanation:
      'When a choice involves several independent stages, the total number of possible outcomes is ' +
      'found by MULTIPLYING the number of options at each stage together: if one task can be done in ' +
      'm ways and a second task in n ways, doing both together can be done in m×n ways.',
    whyItMatters:
      'This is the foundation every other counting technique in this chapter builds on — permutations ' +
      'and combinations are really just special, structured applications of this one simple idea.',
    formulaSlug: 'fundamental-counting-principle-formula',
    workedExample: {
      id: 'counting-principle-worked-1',
      title: 'Apply the Fundamental Counting Principle',
      problemStatement: 'A restaurant menu has 4 appetizers, 6 main courses, and 3 desserts. How many different 3-course meals (one from each category) are possible?',
      steps: [
        { step: 1, instruction: 'Identify the number of choices at each stage.', math: '4 appetizers, 6 mains, 3 desserts', explanation: 'Three independent stages.' },
        { step: 2, instruction: 'Multiply the choices together.', math: '4 × 6 × 3', explanation: 'Apply the Fundamental Counting Principle.' },
        { step: 3, instruction: 'Compute the result.', math: '4 × 6 × 3 = 72', explanation: 'Final multiplication.' },
      ],
      finalAnswer: '72 different 3-course meals are possible.',
    },
    whyItWorks:
      'For every single choice of appetizer, there are 6 possible mains, and for every one of those ' +
      '4×6 combinations, there are 3 possible desserts — listing every combination this way naturally ' +
      'produces exactly 4×6×3 total combinations, with no double-counting or gaps.',
    realLifeExample: {
      title: 'Designing a secure password system',
      scenario: 'A password system requires one uppercase letter, followed by one digit, followed by one symbol.',
      explanation: 'The Fundamental Counting Principle gives the total number of possible passwords directly, by multiplying the number of choices at each of the three stages.',
    },
    practiceQuestions: [
      {
        id: 'counting-principle-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A password requires one letter (26 choices) followed by one digit (10 choices). How many different passwords are possible?',
        hints: ['Multiply the number of choices at each stage.'],
        correctAnswer: 260,
        explanation: '26 × 10 = 260.',
      },
    ],
    commonMistake:
      'Adding the number of choices at each stage instead of multiplying them — the Fundamental ' +
      'Counting Principle always requires MULTIPLICATION, never addition, for independent stages.',
    quickReview: [
      'Total ways = (ways for stage 1) × (ways for stage 2) × ... for independent stages.',
      'This is the foundation for every counting technique in this chapter.',
      'Always multiply, never add, the number of choices at each stage.',
    ],
  },

  'factorial-notation': {
    slug: 'factorial-notation',
    title: 'Factorial Notation',
    difficulty: 'easy',
    simpleExplanation:
      'The factorial of a positive integer n, written n!, is the product of every positive integer up ' +
      'to n: n! = n×(n−1)×(n−2)×...×2×1. By definition, 0! = 1.',
    whyItMatters:
      'Factorials show up constantly throughout this chapter — they count the number of ways to fully ' +
      'arrange a set of distinct objects, and they are the building block of every permutation and combination formula.',
    formulaSlug: 'factorial-notation-formula',
    workedExample: {
      id: 'factorial-worked-1',
      title: 'Evaluate a factorial',
      problemStatement: 'Evaluate 6!.',
      steps: [
        { step: 1, instruction: 'Write out the full product.', math: '6! = 6×5×4×3×2×1', explanation: 'Multiply every positive integer from 6 down to 1.' },
        { step: 2, instruction: 'Multiply step by step.', math: '6×5=30,  30×4=120,  120×3=360,  360×2=720,  720×1=720', explanation: 'Compute the running product.' },
      ],
      finalAnswer: '6! = 720.',
    },
    whyItWorks:
      'n! directly counts the number of ways to arrange n distinct objects in a row: there are n ' +
      'choices for the first position, n−1 remaining choices for the second, n−2 for the third, and so ' +
      'on — multiplying these choices together (by the Fundamental Counting Principle) gives exactly n!.',
    realLifeExample: {
      title: 'Counting delivery route orders',
      scenario: 'A delivery driver has 6 different stops to make and wants to know how many different orders they could visit them in.',
      explanation: '6! gives this count directly — a genuinely large number (720) that quickly grows even larger as more stops are added.',
    },
    practiceQuestions: [
      {
        id: 'factorial-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate 5! / 3!.',
        hints: ['5! = 120, 3! = 6.'],
        correctAnswer: 20,
        explanation: '120 / 6 = 20.',
      },
    ],
    commonMistake:
      'Forgetting that 0! is defined to equal 1 (not 0) — this special case comes up often in the ' +
      'permutation and combination formulas later in this chapter.',
    quickReview: [
      'n! = n×(n−1)×...×2×1.',
      '0! = 1, by definition.',
      'n! counts the number of ways to arrange n distinct objects in a row.',
    ],
  },

  'permutations-of-n-distinct-objects': {
    slug: 'permutations-of-n-distinct-objects',
    title: 'Permutations of n Distinct Objects',
    difficulty: 'medium',
    simpleExplanation:
      'A permutation is an ORDERED arrangement. The number of different orders in which ALL n distinct ' +
      'objects can be arranged is simply n! — exactly the factorial just introduced.',
    whyItMatters:
      'This is the simplest, most direct application of factorials — arranging every object in a set, ' +
      'a starting point before the next concept generalizes to arranging only SOME of the objects.',
    formulaSlug: 'permutations-of-n-objects-formula',
    workedExample: {
      id: 'permutations-n-worked-1',
      title: 'Count the arrangements of a full set',
      problemStatement: 'In how many different orders can 5 different books be arranged on a shelf?',
      steps: [
        { step: 1, instruction: 'Apply the formula for arranging n distinct objects.', math: 'P(n,n) = n!', explanation: 'Here, n=5.' },
        { step: 2, instruction: 'Compute 5!.', math: '5×4×3×2×1 = 120', explanation: 'Multiply out the factorial.' },
      ],
      finalAnswer: '120 different orders.',
    },
    whyItWorks:
      'There are 5 choices for which book goes in the first position, 4 remaining choices for the ' +
      'second position, and so on down to exactly 1 choice for the last position — multiplying these ' +
      'choices together (Fundamental Counting Principle) gives 5×4×3×2×1 = 5!.',
    realLifeExample: {
      title: 'Arranging a race\'s finishing order',
      scenario: 'A race has 5 distinct runners, and organizers want to know how many different possible finishing orders exist.',
      explanation: '5! gives every possible complete finishing order directly.',
    },
    practiceQuestions: [
      {
        id: 'permutations-n-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In how many different orders can 4 distinct trophies be arranged on a shelf?',
        hints: ['Compute 4!.'],
        correctAnswer: 24,
        explanation: '4×3×2×1 = 24.',
      },
    ],
    commonMistake:
      'Confusing arranging ALL n objects (n!) with arranging only SOME of them — a different, more ' +
      'general formula (covered next) is needed when only r out of n objects are being arranged.',
    quickReview: [
      'P(n,n) = n! — arranging every one of n distinct objects.',
      'Comes directly from the Fundamental Counting Principle, applied to each position in turn.',
      'A special case of the more general "permutations of r from n" formula, with r=n.',
    ],
  },

  'permutations-of-r-objects-from-n': {
    slug: 'permutations-of-r-objects-from-n',
    title: 'Permutations of r Objects from n',
    difficulty: 'medium',
    simpleExplanation:
      'More generally, the number of ways to choose AND arrange (in order) just r objects out of a ' +
      'total of n distinct objects is P(n,r) = n! / (n−r)!.',
    whyItMatters:
      'Many real counting problems only involve arranging PART of a larger set (like awarding the top ' +
      '3 medals out of many competitors) — this formula handles that general case directly.',
    formulaSlug: 'permutations-formula',
    workedExample: {
      id: 'permutations-r-worked-1',
      title: 'Count ordered selections from a larger set',
      problemStatement: 'In how many ways can 3 medals (gold, silver, bronze) be awarded to 8 runners?',
      steps: [
        { step: 1, instruction: 'Apply the permutations formula.', math: 'P(n,r) = n! / (n−r)!', explanation: 'n=8, r=3.' },
        { step: 2, instruction: 'Substitute the values.', math: 'P(8,3) = 8! / 5!', explanation: '8−3=5.' },
        { step: 3, instruction: 'Simplify by cancelling.', math: '8!/5! = 8×7×6 = 336', explanation: 'The 5! in the denominator cancels the bottom of 8!, leaving just the top three factors.' },
      ],
      finalAnswer: '336 ways.',
    },
    whyItWorks:
      'There are 8 choices for who gets gold, then 7 remaining choices for silver, then 6 remaining for ' +
      'bronze — 8×7×6, by the Fundamental Counting Principle. Dividing 8! by 5! (which is 8×7×6×5×4×3×2×1 ' +
      'divided by 5×4×3×2×1) leaves exactly this same product, 8×7×6.',
    realLifeExample: {
      title: 'Assigning distinct roles from a pool of candidates',
      scenario: 'A company needs to fill 3 different specific roles (manager, assistant, and treasurer) from a pool of 10 qualified candidates.',
      explanation: 'Since each role is distinct (order matters — being manager is different from being treasurer), this is exactly a permutations calculation, P(10,3).',
    },
    practiceQuestions: [
      {
        id: 'permutations-r-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In how many ways can a president and vice-president be chosen from 10 candidates?',
        hints: ['P(10,2) = 10×9.'],
        correctAnswer: 90,
        explanation: '10×9 = 90.',
      },
    ],
    commonMistake:
      'Using combinations instead when order actually matters (like distinct medal positions or job ' +
      'titles) — permutations count arrangements, combinations do not.',
    quickReview: [
      'P(n,r) = n! / (n−r)!.',
      'Use whenever ORDER matters among the r chosen objects.',
      'A special case of this formula (r=n) reduces to the simpler P(n,n)=n! from before.',
    ],
  },

  'permutations-with-repeated-objects': {
    slug: 'permutations-with-repeated-objects',
    title: 'Permutations with Repeated Objects',
    difficulty: 'hard',
    simpleExplanation:
      'When some of the n objects being arranged are actually indistinguishable copies of each other ' +
      '(like repeated letters in a word), the count of DISTINCT arrangements is smaller than n! — ' +
      'divide by the factorial of each repeated group\'s count: n! / (n₁!×n₂!×...×nₖ!).',
    whyItMatters:
      'Plain n! overcounts whenever some objects are identical, since swapping two identical objects ' +
      'does not actually create a new, visibly different arrangement — this formula corrects for that overcounting.',
    formulaSlug: 'permutations-with-repetition-formula',
    workedExample: {
      id: 'permutations-repetition-worked-1',
      title: 'Count distinct arrangements with repeated letters',
      problemStatement: 'How many distinct arrangements are there of the letters in the word "LEVEL"?',
      steps: [
        { step: 1, instruction: 'Count the total letters and identify repeats.', math: 'n=5 letters: L appears 2 times, E appears 2 times, V appears 1 time', explanation: 'LEVEL has 5 letters total.' },
        { step: 2, instruction: 'Apply the repeated-objects formula.', math: '5! / (2!×2!×1!)', explanation: 'Divide by the factorial of each repeat count.' },
        { step: 3, instruction: 'Compute.', math: '120 / (2×2×1) = 120/4 = 30', explanation: '5!=120, and 2!×2!×1!=4.' },
      ],
      finalAnswer: '30 distinct arrangements.',
    },
    whyItWorks:
      'Treating all 5 letters as if they were distinct would give 5!=120 arrangements — but every genuine ' +
      'arrangement is counted 2!×2!=4 times in that total, once for each way the two identical L\'s (2! ' +
      'ways) and the two identical E\'s (2! ways) could be swapped without visibly changing anything. ' +
      'Dividing by that overcounting factor gives the true count of distinct arrangements.',
    realLifeExample: {
      title: 'Counting distinct sequences of colored beads',
      scenario: 'A craftsperson arranges a string of beads that includes several beads of the same color, and wants to know how many visually distinct patterns are possible.',
      explanation: 'Since beads of the same color are indistinguishable from each other, this formula gives the correct count of genuinely different-looking patterns, avoiding the overcounting of plain n!.',
    },
    practiceQuestions: [
      {
        id: 'permutations-repetition-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'How many distinct arrangements are there of the letters in the word "BANANA"?',
        hints: ['n=6: A appears 3 times, N appears 2 times, B appears 1 time.'],
        correctAnswer: 60,
        explanation: '6! / (3!×2!×1!) = 720 / 12 = 60.',
      },
    ],
    commonMistake:
      'Dividing by the factorial of only ONE repeated group when there are multiple repeated groups — ' +
      'every distinct repeated group needs its own factorial in the denominator.',
    quickReview: [
      'n! / (n₁!×n₂!×...×nₖ!), for k groups of repeated objects.',
      'Corrects the overcounting from treating identical objects as if they were distinguishable.',
      'Every repeated group contributes its own factorial to the denominator.',
    ],
  },

  'circular-permutations': {
    slug: 'circular-permutations',
    title: 'Circular Permutations',
    difficulty: 'medium',
    simpleExplanation:
      'When n distinct objects are arranged in a CIRCLE rather than a row, rotating the whole ' +
      'arrangement does not create a genuinely new arrangement — so the count is (n−1)!, not the ' +
      'usual n!.',
    whyItMatters:
      'Circular arrangements (like seating people around a table) are common enough to deserve their ' +
      'own formula, correcting for the rotational symmetry that a straight-line arrangement does not have.',
    formulaSlug: 'circular-permutations-formula',
    workedExample: {
      id: 'circular-permutations-worked-1',
      title: 'Count circular arrangements',
      problemStatement: 'In how many distinct ways can 6 people be seated around a circular table (where rotations of the same arrangement are considered identical)?',
      steps: [
        { step: 1, instruction: 'Apply the circular permutations formula.', math: '(n−1)!', explanation: 'n=6 here.' },
        { step: 2, instruction: 'Substitute and compute.', math: '(6−1)! = 5! = 120', explanation: 'Subtract 1 from n before taking the factorial.' },
      ],
      finalAnswer: '120 distinct seatings.',
    },
    whyItWorks:
      'Fixing one person\'s seat as a reference point removes the rotational duplication entirely — the ' +
      'remaining n−1 people can then be arranged in the remaining n−1 seats in any order, exactly (n−1)! ways.',
    realLifeExample: {
      title: 'Planning a seating chart for a round-table meeting',
      scenario: 'An event planner needs to know how many genuinely different seating arrangements are possible for guests around a circular table.',
      explanation: 'Since rotating everyone by one seat does not create a new arrangement (everyone\'s neighbors stay the same), the circular permutations formula gives the correct count.',
    },
    practiceQuestions: [
      {
        id: 'circular-permutations-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In how many distinct ways can 5 people be seated around a circular table?',
        hints: ['(n−1)! with n=5.'],
        correctAnswer: 24,
        explanation: '(5−1)! = 4! = 24.',
      },
    ],
    commonMistake:
      'Using the regular n! formula instead of (n−1)! for circular arrangements — this forgets that ' +
      'rotations of the same arrangement are considered identical around a circle, unlike in a straight line.',
    quickReview: [
      'Circular permutations of n distinct objects = (n−1)!.',
      'Fixing one object\'s position removes the rotational duplication.',
      'Different from straight-line permutations (n!), which have no such symmetry to correct for.',
    ],
  },

  'combinations-of-r-objects-from-n': {
    slug: 'combinations-of-r-objects-from-n',
    title: 'Combinations of r Objects from n',
    difficulty: 'medium',
    simpleExplanation:
      'A combination is an UNORDERED selection — choosing r objects from n, where the order the ' +
      'objects were chosen in does not matter. The count is C(n,r) = n! / [r!(n−r)!].',
    whyItMatters:
      'Many real selection problems genuinely do not care about order (like choosing a committee, ' +
      'where being "chosen first" carries no special meaning) — combinations are the correct tool for these cases.',
    formulaSlug: 'combinations-formula',
    workedExample: {
      id: 'combinations-worked-1',
      title: 'Count an unordered selection',
      problemStatement: 'In how many ways can a committee of 3 people be chosen from a group of 8 people?',
      steps: [
        { step: 1, instruction: 'Apply the combinations formula.', math: 'C(n,r) = n! / [r!(n−r)!]', explanation: 'n=8, r=3.' },
        { step: 2, instruction: 'Substitute the values.', math: 'C(8,3) = 8! / (3!×5!)', explanation: '8−3=5.' },
        { step: 3, instruction: 'Simplify by cancelling.', math: '(8×7×6) / (3×2×1) = 336/6', explanation: 'Cancel the 5! that appears in both 8! and the denominator.' },
        { step: 4, instruction: 'Compute the final result.', math: '336/6 = 56', explanation: 'Final division.' },
      ],
      finalAnswer: '56 ways.',
    },
    whyItWorks:
      'Starting from P(n,r) (which DOES care about order), each unordered group of r objects has been ' +
      'counted r! times — once for every possible ordering of that same group. Dividing by r! removes ' +
      'this extra overcounting, leaving only the number of genuinely distinct, unordered groups.',
    realLifeExample: {
      title: 'Choosing lottery numbers or a committee',
      scenario: 'A lottery draw selects a set of numbers, or an organization selects a committee — in both cases, the ORDER of selection does not matter, only which items ended up chosen.',
      explanation: 'Combinations give the correct count of possible outcomes in both these common real-world selection scenarios.',
    },
    practiceQuestions: [
      {
        id: 'combinations-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In how many ways can 2 people be chosen from a group of 6 to represent the group at a conference (order does not matter)?',
        hints: ['C(6,2) = 6×5/2.'],
        correctAnswer: 15,
        explanation: '(6×5)/(2×1) = 30/2 = 15.',
      },
    ],
    commonMistake:
      'Applying the permutations formula instead, when order truly does not matter (like choosing a ' +
      'committee, not ranking its members) — this overcounts by a factor of r!.',
    quickReview: [
      'C(n,r) = n! / [r!(n−r)!].',
      'Use whenever ORDER does NOT matter among the r chosen objects.',
      'Related to permutations by dividing out the r! orderings of each group.',
    ],
  },

  'the-relationship-between-permutations-and-combinations': {
    slug: 'the-relationship-between-permutations-and-combinations',
    title: 'The Relationship Between Permutations and Combinations',
    difficulty: 'medium',
    simpleExplanation:
      'Permutations and combinations are directly related: P(n,r) = C(n,r) × r! — the number of ordered ' +
      'arrangements equals the number of unordered selections, multiplied by the r! ways each selected ' +
      'group could itself be ordered.',
    whyItMatters:
      'Understanding this relationship makes clear WHY the combinations formula divides by r! — and lets ' +
      'you convert between the two counts whenever needed.',
    formulaSlug: 'permutations-combinations-relationship-formula',
    workedExample: {
      id: 'perm-comb-relationship-worked-1',
      title: 'Convert a combination count into a permutation count',
      problemStatement: 'Given C(7,3)=35, find P(7,3) using the relationship between permutations and combinations.',
      steps: [
        { step: 1, instruction: 'Apply the relationship.', math: 'P(n,r) = C(n,r) × r!', explanation: 'r=3 here, so multiply by 3!.' },
        { step: 2, instruction: 'Substitute the given value.', math: 'P(7,3) = 35 × 3!', explanation: '3! = 6.' },
        { step: 3, instruction: 'Compute.', math: '35 × 6 = 210', explanation: 'Final multiplication.' },
      ],
      finalAnswer: 'P(7,3) = 210 (which matches computing 7×6×5=210 directly).',
    },
    whyItWorks:
      'Every one of the C(n,r) unordered groups of r objects can itself be internally arranged in r! ' +
      'different orders — multiplying the number of groups by the number of orderings within each ' +
      'group counts every ordered arrangement exactly once, giving P(n,r) directly.',
    realLifeExample: {
      title: 'Converting between "who\'s on the team" and "who plays which position"',
      scenario: 'A coach first decides WHICH 3 players make the starting lineup (a combination), then decides WHO plays which of the 3 distinct positions (adding order).',
      explanation: 'The relationship P(n,r)=C(n,r)×r! directly connects these two related but different counts.',
    },
    practiceQuestions: [
      {
        id: 'perm-comb-relationship-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Given C(9,2)=36, find P(9,2).',
        hints: ['P(n,r) = C(n,r) × r!, with r=2.'],
        correctAnswer: 72,
        explanation: '36 × 2! = 36 × 2 = 72 (matches 9×8=72 directly).',
      },
    ],
    commonMistake:
      'Multiplying by n! or (n−r)! instead of r! when converting a combination count into the ' +
      'corresponding permutation count — only the r! (orderings WITHIN each selected group) belongs here.',
    quickReview: [
      'P(n,r) = C(n,r) × r!.',
      'r! accounts for the internal orderings within each selected group.',
      'This relationship explains exactly why the combinations formula divides by r!.',
    ],
  },

  'applications-to-probability-and-statistics': {
    slug: 'applications-to-probability-and-statistics',
    title: 'Applications to Probability and Statistics',
    difficulty: 'hard',
    simpleExplanation:
      'Permutations and combinations are essential tools for computing probabilities: the probability ' +
      'of a specific outcome is often (favorable outcomes) / (total outcomes), where both counts are ' +
      'found using permutation or combination formulas — consistently, using the SAME method for both.',
    whyItMatters:
      'This connects the abstract counting techniques of this chapter to genuinely practical ' +
      'probability and statistics calculations used across science, engineering, and everyday decision-making.',
    formulaSlug: 'combinations-formula',
    workedExample: {
      id: 'counting-probability-worked-1',
      title: 'Use combinations to find a probability',
      problemStatement: 'A jar has 5 red and 3 blue marbles (8 total). If 2 marbles are drawn at random without replacement, find the probability both are red.',
      steps: [
        { step: 1, instruction: 'Find the total number of ways to draw 2 marbles from 8.', math: 'C(8,2) = 28', explanation: 'Order does not matter when drawing marbles, so use combinations.' },
        { step: 2, instruction: 'Find the number of ways both drawn marbles are red.', math: 'C(5,2) = 10', explanation: 'Choose 2 from the 5 red marbles specifically.' },
        { step: 3, instruction: 'Compute the probability.', math: 'P(both red) = C(5,2)/C(8,2) = 10/28', explanation: 'Favorable outcomes divided by total outcomes.' },
        { step: 4, instruction: 'Simplify.', math: '10/28 = 5/14 ≈ 0.357', explanation: 'Reduce the fraction.' },
      ],
      finalAnswer: 'P(both red) = 5/14 ≈ 0.357.',
    },
    whyItWorks:
      'Since the marbles are drawn without regard to order, EVERY count involved (both the total ways ' +
      'to draw 2 marbles, and the favorable ways to draw 2 red ones) must consistently use combinations ' +
      '— mixing permutations and combinations between the numerator and denominator would give a wrong probability.',
    realLifeExample: {
      title: 'Quality control sampling in manufacturing',
      scenario: 'A quality inspector randomly selects a sample of items from a batch and wants the probability that the sample contains a certain number of defective items.',
      explanation: 'This is exactly the same type of calculation — combinations give both the total number of possible samples and the number of "favorable" samples, from which the probability is computed.',
    },
    practiceQuestions: [
      {
        id: 'counting-probability-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A jar has 4 red and 6 blue marbles (10 total). Find the number of ways to choose 2 blue marbles (order does not matter).',
        hints: ['C(6,2) = 6×5/2.'],
        correctAnswer: 15,
        explanation: '(6×5)/(2×1) = 30/2 = 15.',
      },
    ],
    commonMistake:
      'Mixing permutations and combinations inconsistently between the numerator and denominator of a ' +
      'probability calculation — both must use the SAME counting method throughout.',
    quickReview: [
      'Probability = (favorable outcomes) / (total outcomes), using permutation or combination counts.',
      'Use the SAME counting method (usually combinations, when order does not matter) throughout one calculation.',
      'This connects the chapter\'s counting techniques directly to probability and statistics.',
    ],
  },
};
