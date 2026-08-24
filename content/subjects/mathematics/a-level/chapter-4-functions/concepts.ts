import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 4 — Functions. Matches sections 4.1-4.3
// of the textbook exactly.
export const chapter4Concepts: Record<string, Concept> = {
  'meaning-of-a-product-set': {
    slug: 'meaning-of-a-product-set',
    title: 'Meaning of a Product Set',
    difficulty: 'easy',
    simpleExplanation:
      'The product set (or Cartesian product) of two sets A and B, written A × B, is the set of ' +
      'every possible ordered pair (a, b), where a comes from A and b comes from B. Order matters: ' +
      '(a, b) is generally different from (b, a).',
    whyItMatters:
      'Product sets are the formal foundation behind the coordinate plane itself (ℝ × ℝ), and ' +
      'behind every relation and function you will study — a relation is simply a chosen subset of a product set.',
    workedExample: {
      id: 'product-set-worked-1',
      title: 'List the elements of a product set',
      problemStatement: 'Let A = {1, 2} and B = {x, y}. List all elements of A × B.',
      steps: [
        { step: 1, instruction: 'Pair the first element of A with every element of B.', math: '(1, x), (1, y)', explanation: 'Take a = 1 and pair it with each value of b in turn.' },
        { step: 2, instruction: 'Pair the second element of A with every element of B.', math: '(2, x), (2, y)', explanation: 'Take a = 2 and repeat.' },
        { step: 3, instruction: 'Combine all the ordered pairs into one set.', math: 'A × B = {(1,x), (1,y), (2,x), (2,y)}', explanation: 'Every combination of an A-element with a B-element appears exactly once.' },
      ],
      finalAnswer: 'A × B = {(1,x), (1,y), (2,x), (2,y)}',
    },
    whyItWorks:
      'A × B is defined to contain exactly one ordered pair for every possible combination of an ' +
      'element from A with an element from B — systematically pairing each A-element with every ' +
      'B-element in turn guarantees every combination is listed exactly once.',
    realLifeExample: {
      title: 'A restaurant\'s combo menu',
      scenario: 'A restaurant offers 3 main dishes and 2 drinks, and wants to list every possible main-and-drink combo.',
      explanation: 'The set of all combos is exactly the product set (mains) × (drinks) — every valid pairing of one main with one drink.',
    },
    practiceQuestions: [
      {
        id: 'product-set-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'If A = {a} and B = {1, 2, 3}, what is A × B?',
        options: [
          { id: 'a', text: '{(a,1), (a,2), (a,3)}' },
          { id: 'b', text: '{a, 1, 2, 3}' },
          { id: 'c', text: '{(1,a), (2,a), (3,a)}' },
          { id: 'd', text: '{(a,a), (1,1), (2,2), (3,3)}' },
        ],
        correctOptionId: 'a',
        hints: ['A × B pairs each element of A (first) with each element of B (second).'],
        explanation: 'A has only one element, a, so it pairs with each of 1, 2, 3 in turn: {(a,1), (a,2), (a,3)}.',
      },
    ],
    commonMistake:
      'Writing pairs in the wrong order, or treating A × B as the same set as B × A — in a product ' +
      'set, order matters, so (a,b) and (b,a) are different elements unless a = b.',
    quickReview: [
      'A × B is the set of all ordered pairs (a, b) with a ∈ A and b ∈ B.',
      'Order matters: A × B is generally not the same as B × A.',
      'Every relation and function is built from a chosen subset of a product set.',
    ],
  },

  'cardinality-of-a-product-set': {
    slug: 'cardinality-of-a-product-set',
    title: 'Cardinality of a Product Set',
    difficulty: 'medium',
    simpleExplanation:
      'The number of ordered pairs in A × B, written n(A × B), always equals n(A) × n(B) — the ' +
      'number of elements in A multiplied by the number of elements in B.',
    whyItMatters:
      'This counting shortcut means you never have to list out every pair just to know how many ' +
      'there are — a useful skill whenever you need to count combinations quickly.',
    formulaSlug: 'product-set-cardinality',
    workedExample: {
      id: 'cardinality-worked-1',
      title: 'Count the elements of a product set',
      problemStatement: 'Set A has 5 elements and set B has 4 elements. How many elements does A × B have?',
      steps: [
        { step: 1, instruction: 'Identify n(A) and n(B).', math: 'n(A) = 5, n(B) = 4', explanation: 'Read the given sizes of each set.' },
        { step: 2, instruction: 'Apply the cardinality formula.', math: 'n(A × B) = 5 × 4', explanation: 'Multiply the two sizes together.' },
        { step: 3, instruction: 'Evaluate.', math: '5 × 4 = 20', explanation: 'This is the total number of ordered pairs.' },
      ],
      finalAnswer: 'n(A × B) = 20',
    },
    whyItWorks:
      'Every one of the n(A) elements of A can be paired with each of the n(B) elements of B, ' +
      'independently — this is the same "independent choices multiply" counting principle used ' +
      'anywhere a first choice and a second choice combine freely.',
    realLifeExample: {
      title: 'Counting outfit combinations',
      scenario: 'A person has 6 shirts and 3 pairs of trousers and wants to know how many different outfits are possible.',
      explanation: 'Without listing every outfit, n(shirts × trousers) = 6 × 3 = 18 possible outfit combinations.',
    },
    practiceQuestions: [
      {
        id: 'cardinality-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'If n(A) = 7 and n(B) = 6, what is n(A × B)?',
        hints: ['Multiply the two set sizes.'],
        correctAnswer: 42,
        explanation: 'n(A × B) = 7 × 6 = 42.',
      },
    ],
    commonMistake:
      'Adding the set sizes instead of multiplying them — n(A × B) = n(A) × n(B), not n(A) + n(B).',
    quickReview: [
      'n(A × B) = n(A) × n(B).',
      'This counts every ordered pair without needing to list them.',
      'It is the same counting principle behind counting combinations of independent choices.',
    ],
  },

  'meaning-of-a-relation': {
    slug: 'meaning-of-a-relation',
    title: 'Meaning of a Relation',
    difficulty: 'medium',
    simpleExplanation:
      'A relation from set A to set B is any subset of the product set A × B — in other words, any ' +
      'chosen collection of ordered pairs linking elements of A to elements of B. The domain is the ' +
      'set of all first elements (from A) actually used; the range is the set of all second elements (from B) actually used.',
    whyItMatters:
      'Relations are the general category that functions belong to — understanding what makes a ' +
      'relation lets you later recognize exactly what extra condition makes a relation a function.',
    workedExample: {
      id: 'relation-worked-1',
      title: 'Find the domain and range of a relation',
      problemStatement: 'A relation is given by R = {(1,2), (2,4), (3,4), (4,6)}. Find its domain and range.',
      steps: [
        { step: 1, instruction: 'Collect all first coordinates for the domain.', math: 'Domain = {1, 2, 3, 4}', explanation: 'These are every first element that appears in a pair.' },
        { step: 2, instruction: 'Collect all second coordinates for the range.', math: 'Range = {2, 4, 6}', explanation: 'These are every second element that appears (4 is listed once, even though it appears twice).' },
      ],
      finalAnswer: 'Domain = {1, 2, 3, 4}, Range = {2, 4, 6}',
    },
    whyItWorks:
      'A relation is defined purely by which ordered pairs it contains, so scanning every pair for ' +
      'its first and second entries — without duplicating repeated values, since sets don\'t repeat elements — directly gives the domain and range.',
    realLifeExample: {
      title: 'Student-to-club sign-up sheet',
      scenario: 'A sign-up sheet lists which students belong to which after-school clubs, with a student possibly joining more than one.',
      explanation: 'That whole sign-up list is a relation from the set of students to the set of clubs — one that is not necessarily a function, since one student can pair with several clubs.',
    },
    practiceQuestions: [
      {
        id: 'relation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the range of the relation {(2,5), (3,5), (4,7)}?',
        options: [
          { id: 'a', text: '{5, 7}' },
          { id: 'b', text: '{2, 3, 4}' },
          { id: 'c', text: '{5, 5, 7}' },
          { id: 'd', text: '{2, 3, 4, 5, 7}' },
        ],
        correctOptionId: 'a',
        hints: ['The range is the set of second coordinates, listed without repeats.'],
        explanation: 'The second coordinates are 5, 5, 7 — as a set (no repeats), the range is {5, 7}.',
      },
    ],
    commonMistake:
      'Listing the range with repeated values (e.g. {5, 5, 7}) — a set never lists the same value twice, even if it comes from two different pairs.',
    quickReview: [
      'A relation is any subset of a product set A × B — a chosen collection of ordered pairs.',
      'The domain is the set of all first coordinates used; the range is the set of all second coordinates used.',
      'Every function is a relation, but not every relation is a function.',
    ],
  },

  'representing-a-relation': {
    slug: 'representing-a-relation',
    title: 'Representing a Relation',
    difficulty: 'medium',
    simpleExplanation:
      'The same relation can be shown in several equivalent ways: as a set of ordered pairs, as a ' +
      'table of values, as an arrow diagram connecting elements of A to elements of B, or as a graph of points on the coordinate plane.',
    whyItMatters:
      'Being able to translate between these representations is essential — a real-world relation ' +
      'is often given as a table or a graph, and recognizing it as the same underlying set of ' +
      'ordered pairs is what allows you to analyze it mathematically.',
    diagram: {
      id: 'relation-graph-diagram',
      title: 'A relation shown as points on the coordinate plane',
      altText: 'A coordinate plane showing two points from a relation, illustrating how ordered pairs become a graph',
      component: 'CoordinatePlane',
      interactive: false,
      props: {
        pointA: { x: 1, y: 2, label: '(1,2)' },
        pointB: { x: 3, y: 4, label: '(3,4)' },
      },
    },
    workedExample: {
      id: 'representing-relation-worked-1',
      title: 'Convert a table to a set of ordered pairs',
      problemStatement: 'A table lists x-values 1, 2, 3 with corresponding y-values 5, 7, 9. Write this relation as a set of ordered pairs.',
      steps: [
        { step: 1, instruction: 'Match each x-value with its corresponding y-value.', math: 'x=1→y=5,  x=2→y=7,  x=3→y=9', explanation: 'Read across each row of the table.' },
        { step: 2, instruction: 'Write each match as an ordered pair (x, y).', math: '(1,5), (2,7), (3,9)', explanation: 'x always comes first, y second.' },
        { step: 3, instruction: 'Collect all pairs into one relation.', math: 'R = {(1,5), (2,7), (3,9)}', explanation: 'This set of pairs is the same relation, in a different notation.' },
      ],
      finalAnswer: 'R = {(1,5), (2,7), (3,9)}',
    },
    whyItWorks:
      'Every representation — table, arrow diagram, graph, or set of pairs — encodes exactly the ' +
      'same information: which element of A is linked to which element of B. Translating between ' +
      'them just changes the notation, not the underlying relation.',
    realLifeExample: {
      title: 'A weather app\'s temperature graph',
      scenario: 'A weather app can show the day\'s temperatures either as a table (time, temperature) or as a line graph.',
      explanation: 'Both are the exact same relation between time and temperature — just presented in table form versus graph form.',
    },
    practiceQuestions: [
      {
        id: 'representing-relation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A relation is graphed with points at (0,1), (1,3), (2,5). Which set of ordered pairs matches this graph?',
        options: [
          { id: 'a', text: '{(0,1), (1,3), (2,5)}' },
          { id: 'b', text: '{(1,0), (3,1), (5,2)}' },
          { id: 'c', text: '{0,1,1,3,2,5}' },
          { id: 'd', text: '{(0,0), (1,1), (2,2)}' },
        ],
        correctOptionId: 'a',
        hints: ['Each plotted point (x, y) becomes one ordered pair, in the same order.'],
        explanation: 'Each graphed point directly becomes an ordered pair with matching coordinates: {(0,1), (1,3), (2,5)}.',
      },
    ],
    commonMistake:
      'Assuming a table, graph, and set of ordered pairs are somehow different mathematical ' +
      'objects — they are just different ways of displaying the exact same relation.',
    quickReview: [
      'A relation can be shown as a set of pairs, a table, an arrow diagram, or a graph.',
      'All representations describe the exact same underlying set of ordered pairs.',
      'Being fluent in converting between them is essential for reading real-world data.',
    ],
  },

  'meaning-of-a-function': {
    slug: 'meaning-of-a-function',
    title: 'Meaning of a Function',
    difficulty: 'medium',
    simpleExplanation:
      'A function is a special kind of relation where every element of the domain is paired with ' +
      'exactly one element of the range — no input is ever linked to two different outputs.',
    whyItMatters:
      'This "exactly one output per input" rule is what makes functions predictable and useful — ' +
      'it is the reason a formula like y = f(x) always gives a single, well-defined answer for any given x.',
    workedExample: {
      id: 'meaning-function-worked-1',
      title: 'Decide whether a relation is a function',
      problemStatement: 'Is R = {(1,2), (2,3), (1,5), (3,4)} a function?',
      steps: [
        { step: 1, instruction: 'Look for repeated first coordinates.', math: '(1,2) and (1,5) both have x = 1', explanation: 'Check whether any x-value appears more than once.' },
        { step: 2, instruction: 'Check whether they map to the same or different outputs.', math: '1 → 2 and 1 → 5 (different outputs)', explanation: 'The input 1 is linked to two different outputs, 2 and 5.' },
        { step: 3, instruction: 'Conclude.', explanation: 'Since one input has two different outputs, this relation fails the function rule.' },
      ],
      finalAnswer: 'No, R is not a function — the input 1 maps to both 2 and 5.',
    },
    whyItWorks:
      'The function definition is precisely the rule "no repeated first coordinate with a different ' +
      'second coordinate" — scanning the pairs for exactly that situation directly tests the definition.',
    realLifeExample: {
      title: 'A vending machine',
      scenario: 'Pressing a specific button on a vending machine always dispenses the exact same item, every time.',
      explanation: 'This is a function: each input (button) has exactly one output (item) — a machine that sometimes gave a different item for the same button would not be a function.',
    },
    practiceQuestions: [
      {
        id: 'meaning-function-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which relation is a function?',
        options: [
          { id: 'a', text: '{(1,4), (2,4), (3,5)}' },
          { id: 'b', text: '{(1,4), (1,5), (3,6)}' },
          { id: 'c', text: '{(2,3), (2,4), (2,5)}' },
          { id: 'd', text: '{(1,2), (1,3), (2,4)}' },
        ],
        correctOptionId: 'a',
        hints: ['Check whether any input (first coordinate) repeats with a different output.'],
        explanation: 'In {(1,4), (2,4), (3,5)}, every input (1, 2, 3) is different, so each has exactly one output — it is a function. (Repeated outputs, like 4 appearing twice, are fine.)',
      },
    ],
    commonMistake:
      'Rejecting a relation as "not a function" just because an output value repeats — repeated ' +
      'outputs are fine; only a repeated input with two different outputs breaks the function rule.',
    quickReview: [
      'A function is a relation where every input has exactly one output.',
      'Repeated outputs are allowed; repeated inputs with different outputs are not.',
      'Every function is a relation, but not every relation is a function.',
    ],
  },

  'the-vertical-line-test': {
    slug: 'the-vertical-line-test',
    title: 'The Vertical Line Test',
    difficulty: 'medium',
    simpleExplanation:
      'The vertical line test is a graphical shortcut for checking whether a graph represents a ' +
      'function: if any vertical line drawn on the graph crosses the curve more than once, the graph is not a function.',
    whyItMatters:
      'This test lets you check the function rule visually, directly from a graph, without needing ' +
      'to inspect a list of ordered pairs by hand.',
    workedExample: {
      id: 'vertical-line-worked-1',
      title: 'Apply the vertical line test',
      problemStatement: 'A circle is graphed on the coordinate plane. Is it the graph of a function?',
      steps: [
        { step: 1, instruction: 'Imagine a vertical line drawn through the middle of the circle.', explanation: 'Pick an x-value that passes through the circle\'s interior.' },
        { step: 2, instruction: 'Count how many times that line crosses the circle.', math: '2 crossings (top and bottom of the circle)', explanation: 'A vertical line through the centre crosses the circle at two points.' },
        { step: 3, instruction: 'Apply the test.', explanation: 'Since a vertical line crosses the graph more than once, the graph fails the test.' },
      ],
      finalAnswer: 'No — a circle is not the graph of a function, since a vertical line crosses it twice.',
    },
    whyItWorks:
      'Every point on a vertical line at a fixed x shares that same x-value, so if a vertical line ' +
      'crosses the graph twice, that one x-value is paired with two different y-values — exactly the situation the function definition forbids.',
    realLifeExample: {
      title: 'Checking a sensor reading graph',
      scenario: 'An engineer graphs a sensor\'s output against time and needs to confirm the sensor never reports two different readings at the same instant.',
      explanation: 'Applying the vertical line test to the time-vs-reading graph confirms whether the data behaves as a true function of time.',
    },
    practiceQuestions: [
      {
        id: 'vertical-line-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A graph is a straight, non-vertical line. Does it pass the vertical line test?',
        options: [
          { id: 'a', text: 'Yes — any vertical line crosses it exactly once.' },
          { id: 'b', text: 'No — vertical lines never cross a straight line.' },
          { id: 'c', text: 'No — every vertical line crosses it twice.' },
          { id: 'd', text: 'It depends on the line\'s slope.' },
        ],
        correctOptionId: 'a',
        hints: ['A non-vertical straight line crosses each vertical line exactly once.'],
        explanation: 'A non-vertical straight line meets every vertical line at exactly one point, so it passes the test and is a function.',
      },
    ],
    commonMistake:
      'Applying the test with a horizontal line instead of a vertical one — the test specifically ' +
      'checks for repeated y-values at the same x, which requires a vertical (not horizontal) test line.',
    quickReview: [
      'If any vertical line crosses a graph more than once, the graph is not a function.',
      'A vertical line represents a single fixed x-value — multiple crossings mean multiple y-values for that x.',
      'This is a fast, visual way to apply the function definition to a graph.',
    ],
  },

  'domain-and-range-of-a-function': {
    slug: 'domain-and-range-of-a-function',
    title: 'Domain and Range of a Function',
    difficulty: 'medium',
    simpleExplanation:
      'The domain of a function is the complete set of allowed input values (x-values); the range ' +
      'is the complete set of output values (y-values) the function actually produces.',
    whyItMatters:
      'Knowing a function\'s domain tells you which inputs are valid to use — plugging in a value ' +
      'outside the domain (like dividing by zero, or taking the square root of a negative number) produces an undefined result.',
    workedExample: {
      id: 'domain-range-worked-1',
      title: 'Find the domain of a function with a restriction',
      problemStatement: 'Find the domain of f(x) = 1 / (x − 3).',
      steps: [
        { step: 1, instruction: 'Identify what would make the function undefined.', explanation: 'Division by zero is undefined, so the denominator can never equal zero.' },
        { step: 2, instruction: 'Set the denominator equal to zero and solve.', math: 'x − 3 = 0  →  x = 3', explanation: 'This is the one value that must be excluded.' },
        { step: 3, instruction: 'State the domain.', math: 'All real numbers except x = 3', explanation: 'Every other real number is a valid input.' },
      ],
      finalAnswer: 'Domain: all real numbers x such that x ≠ 3',
    },
    whyItWorks:
      'The domain must exclude exactly the inputs that break the function\'s definition (like ' +
      'division by zero) — checking for those specific trouble spots (zero denominators, negative ' +
      'numbers under an even root) reliably finds every value that must be excluded.',
    realLifeExample: {
      title: 'A parking fee function',
      scenario: 'A parking garage charges by the hour, and its fee function is only defined for a non-negative number of hours parked.',
      explanation: 'The domain of that fee function is naturally restricted to hours ≥ 0 — negative time parked does not make sense, just as it would not be part of the function\'s domain.',
    },
    practiceQuestions: [
      {
        id: 'domain-range-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What must be excluded from the domain of g(x) = 1/(x + 5)?',
        options: [
          { id: 'a', text: 'x = -5' },
          { id: 'b', text: 'x = 5' },
          { id: 'c', text: 'x = 0' },
          { id: 'd', text: 'Nothing needs to be excluded' },
        ],
        correctOptionId: 'a',
        hints: ['Set the denominator equal to zero and solve.'],
        explanation: 'x + 5 = 0 gives x = -5, which must be excluded to avoid dividing by zero.',
      },
    ],
    commonMistake:
      'Forgetting to check for domain restrictions on functions involving fractions or roots — ' +
      'not every function has "all real numbers" as its domain.',
    quickReview: [
      'Domain = the set of all valid inputs; range = the set of all resulting outputs.',
      'Exclude any input that causes division by zero or an even root of a negative number.',
      'Always check for these restrictions before assuming the domain is all real numbers.',
    ],
  },

  'function-notation-and-evaluating-functions': {
    slug: 'function-notation-and-evaluating-functions',
    title: 'Function Notation and Evaluating Functions',
    difficulty: 'medium',
    simpleExplanation:
      'Function notation, f(x), names a function f and shows what it does to an input x. To ' +
      '"evaluate" f at a specific number, substitute that number everywhere x appears in the function\'s rule, then simplify.',
    whyItMatters:
      'f(x) notation is used throughout mathematics and science to name and apply functions ' +
      'precisely — reading and evaluating it correctly is a foundational skill for every function-based topic that follows.',
    workedExample: {
      id: 'function-notation-worked-1',
      title: 'Evaluate a function at a given input',
      problemStatement: 'If f(x) = 2x² − 3x + 1, find f(4).',
      steps: [
        { step: 1, instruction: 'Substitute x = 4 everywhere x appears.', math: 'f(4) = 2(4)² − 3(4) + 1', explanation: 'Replace every x in the rule with 4.' },
        { step: 2, instruction: 'Evaluate the power first.', math: '2(16) − 3(4) + 1', explanation: '4² = 16.' },
        { step: 3, instruction: 'Multiply.', math: '32 − 12 + 1', explanation: '2×16=32 and 3×4=12.' },
        { step: 4, instruction: 'Add and subtract left to right.', math: '32 − 12 + 1 = 21', explanation: 'Combine the remaining terms.' },
      ],
      finalAnswer: 'f(4) = 21',
    },
    whyItWorks:
      'f(x) is just a name for "the output the rule produces from input x" — substituting a ' +
      'specific number for x and carrying out the arithmetic directly computes that output, by the definition of the notation.',
    realLifeExample: {
      title: 'A currency conversion function',
      scenario: 'A currency converter can be written as a function C(d), giving the local-currency value of d US dollars.',
      explanation: 'Evaluating C(50) means substituting d = 50 into the conversion rule — exactly the same substitution process used for any function notation.',
    },
    practiceQuestions: [
      {
        id: 'function-notation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'If f(x) = 5x − 2, find f(6).',
        hints: ['Substitute x = 6 into the rule.'],
        correctAnswer: 28,
        explanation: 'f(6) = 5(6) − 2 = 30 − 2 = 28.',
      },
      {
        id: 'function-notation-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'If g(x) = x² + 2x, find g(-3).',
        hints: ['Substitute x = -3, remembering (-3)² = 9.'],
        correctAnswer: 3,
        explanation: 'g(-3) = (-3)² + 2(-3) = 9 − 6 = 3.',
      },
    ],
    commonMistake:
      'Misreading f(x) as "f multiplied by x" — f(x) is function notation, naming an output, not a ' +
      'multiplication; f(4) means "the output of f when the input is 4", not "f times 4".',
    quickReview: [
      'f(x) names the output that function f produces from input x.',
      'Evaluate f at a number by substituting it for every x in the rule, then simplifying.',
      'f(x) is notation for a function\'s output, never a multiplication of f and x.',
    ],
  },
};
