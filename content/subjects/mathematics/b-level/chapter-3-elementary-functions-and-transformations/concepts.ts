import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 3 — Elementary Functions and
// Transformations. Matches sections 3.1-3.2 of the textbook exactly.
export const chapter3BConcepts: Record<string, Concept> = {
  'the-elementary-function-family': {
    slug: 'the-elementary-function-family',
    title: 'The Elementary Function Family',
    difficulty: 'easy',
    simpleExplanation:
      'The "elementary functions" are a small set of core function shapes that show up constantly ' +
      'throughout mathematics: constant and linear functions (straight lines), quadratic and cubic ' +
      'functions (curves with one or two turns), reciprocal functions (two-branch curves with ' +
      'asymptotes), square-root functions (half-parabola shapes), and exponential functions (rapid growth or decay curves).',
    whyItMatters:
      'Recognizing a function\'s family from its equation — before plotting a single point — lets ' +
      'you instantly picture its rough shape, an essential skill for sketching and analyzing new functions quickly.',
    workedExample: {
      id: 'function-family-worked-1',
      title: 'Identify a function\'s family',
      problemStatement: 'Identify the elementary function family of y = 5/x, and describe its expected shape.',
      steps: [
        { step: 1, instruction: 'Compare the equation to each family\'s general form.', explanation: 'y = a/x matches the reciprocal function form.' },
        { step: 2, instruction: 'Recall the reciprocal function\'s shape.', explanation: 'A two-branch curve, approaching but never touching both axes.' },
      ],
      finalAnswer: 'y = 5/x is a reciprocal function, with a two-branch hyperbola-like shape.',
    },
    whyItWorks:
      'Each family is defined by a distinct algebraic pattern (a fixed power of x, x in a ' +
      'denominator, x under a root, or x in an exponent) — that pattern alone determines the general ' +
      'shape of the graph, regardless of the specific coefficients used.',
    realLifeExample: {
      title: 'Recognizing patterns in scientific formulas',
      scenario: 'A scientist sees a new formula relating two quantities and wants to quickly predict how one behaves as the other changes.',
      explanation: 'Recognizing the formula\'s elementary function family (e.g. "this is exponential" or "this is reciprocal") immediately tells them the general shape of the relationship, before any calculation.',
    },
    practiceQuestions: [
      {
        id: 'function-family-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which elementary function family does y = 3ˣ belong to?',
        options: [
          { id: 'a', text: 'Exponential' },
          { id: 'b', text: 'Reciprocal' },
          { id: 'c', text: 'Cubic' },
          { id: 'd', text: 'Square root' },
        ],
        correctOptionId: 'a',
        hints: ['x is in the exponent.'],
        explanation: 'y = 3ˣ has x as an exponent, matching the exponential family, y = a·bˣ.',
      },
    ],
    commonMistake:
      'Confusing quadratic (y=x²) and cubic (y=x³) shapes — a quadratic is a single U-shaped curve, ' +
      'while a cubic has an S-shaped curve with a "flattening" point in the middle.',
    quickReview: [
      'Elementary functions: constant/linear, quadratic, cubic, reciprocal, square root, exponential.',
      'Each family has a distinctive algebraic pattern and a matching graph shape.',
      'Recognizing the family instantly suggests the graph\'s rough shape.',
    ],
  },

  'the-cubic-function': {
    slug: 'the-cubic-function',
    title: 'The Cubic Function',
    difficulty: 'medium',
    simpleExplanation:
      'The basic cubic function, y = x³, has a distinctive S-shaped curve: it passes through the ' +
      'origin, increases everywhere, but flattens out (momentarily levels off) right at the origin ' +
      'before continuing to rise. It is symmetric about the origin — an "odd" function.',
    whyItMatters:
      'Cubic functions model situations with a genuine "point of inflection" — a section that keeps ' +
      'growing but temporarily slows its rate of growth, unlike the simpler always-curving parabola.',
    diagram: {
      id: 'cubic-function-diagram',
      title: 'Graph of y = x³',
      altText: 'An S-shaped cubic curve passing through the origin, flattening briefly there before continuing to rise',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => x * x * x, min: -2.5, max: 2.5, showYIntercept: true, markPoints: [{ x: 0, y: 0, label: '(0,0)' }] },
    },
    formulaSlug: 'cubic-function-form',
    workedExample: {
      id: 'cubic-worked-1',
      title: 'Evaluate a cubic function',
      problemStatement: 'For y = x³, find y when x = −2.',
      steps: [
        { step: 1, instruction: 'Substitute x = −2.', math: 'y = (−2)³', explanation: 'Cube the input value.' },
        { step: 2, instruction: 'Evaluate.', math: '(−2)³ = −8', explanation: '(−2)×(−2)×(−2) = −8.' },
      ],
      finalAnswer: 'y = −8',
    },
    whyItWorks:
      'Cubing preserves the sign of the input (a negative number cubed stays negative), which is ' +
      'exactly why the graph passes through every quadrant it needs to and is symmetric about the origin — f(−x) = −f(x) for every x, the defining property of an odd function.',
    realLifeExample: {
      title: 'Volume of a cube as its side length grows',
      scenario: 'The volume of a cube, V = s³, grows according to exactly this cubic relationship as its side length s increases.',
      explanation: 'Doubling a cube\'s side length multiplies its volume by 2³=8 — a direct real-world instance of the cubic function\'s rapid growth.',
    },
    practiceQuestions: [
      {
        id: 'cubic-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For y = x³, find y when x = 3.',
        hints: ['3³ = 3×3×3.'],
        correctAnswer: 27,
        explanation: '3³ = 27.',
      },
    ],
    commonMistake:
      'Assuming a cubic graph looks the same as a quadratic graph — a cubic has an S-shape with a ' +
      'flattening point, not a single smooth U-shape like a parabola.',
    quickReview: [
      'y = x³ passes through the origin, with an S-shaped curve.',
      'It is an odd function: f(−x) = −f(x).',
      'General form: y = ax³ + bx² + cx + d.',
    ],
  },

  'the-reciprocal-function': {
    slug: 'the-reciprocal-function',
    title: 'The Reciprocal Function',
    difficulty: 'medium',
    simpleExplanation:
      'The basic reciprocal function, y = 1/x, has two separate curved branches — one in the upper- ' +
      'right, one in the lower-left — that both approach the x-axis and y-axis but never touch them. ' +
      'Those two axes are called asymptotes.',
    whyItMatters:
      'Reciprocal functions model inverse-proportion relationships — when one quantity doubles, the ' +
      'other halves — a very common real-world pattern.',
    diagram: {
      id: 'reciprocal-function-diagram',
      title: 'Graph of y = 1/x',
      altText: 'A two-branch hyperbola-like curve, one branch in the upper-right and one in the lower-left, both approaching but never touching the axes',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => 1 / x, min: -4, max: 4 },
    },
    formulaSlug: 'reciprocal-function-form',
    workedExample: {
      id: 'reciprocal-worked-1',
      title: 'Evaluate a reciprocal function',
      problemStatement: 'For y = 4/x, find y when x = 8.',
      steps: [
        { step: 1, instruction: 'Substitute x = 8.', math: 'y = 4/8', explanation: 'Substitute directly.' },
        { step: 2, instruction: 'Simplify.', math: 'y = 0.5', explanation: '4 divided by 8.' },
      ],
      finalAnswer: 'y = 0.5',
    },
    whyItWorks:
      'As x grows larger, 1/x must shrink toward (but never reach) 0, since no finite x makes 1/x ' +
      'exactly 0 — this is exactly why the curve approaches, but never touches, the x-axis. ' +
      'Similarly, x itself can never be 0 (division by zero is undefined), which is why the curve never touches the y-axis either.',
    realLifeExample: {
      title: 'Speed and travel time for a fixed distance',
      scenario: 'For a fixed distance, travel time = distance/speed — as speed increases, travel time decreases proportionally.',
      explanation: 'This inverse relationship between speed and time follows exactly the reciprocal function shape: doubling speed halves the time.',
    },
    practiceQuestions: [
      {
        id: 'reciprocal-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For y = 6/x, find y when x = 3.',
        hints: ['6 divided by 3.'],
        correctAnswer: 2,
        explanation: '6/3 = 2.',
      },
    ],
    commonMistake:
      'Trying to evaluate the reciprocal function at x = 0 — it is undefined there, not equal to ' +
      'zero or any other value; the graph simply has a gap (asymptote) at x=0.',
    quickReview: [
      'y = a/x has two branches and two asymptotes (the x-axis and y-axis).',
      'The function is undefined at x = 0.',
      'Models inverse-proportion relationships.',
    ],
  },

  'the-square-root-function': {
    slug: 'the-square-root-function',
    title: 'The Square Root Function',
    difficulty: 'medium',
    simpleExplanation:
      'The basic square root function, y = √x, traces exactly one half of a sideways parabola, ' +
      'starting at the origin and extending only to the right, since negative numbers have no real square root — its domain is restricted to x ≥ 0.',
    whyItMatters:
      'Recognizing this restricted-domain shape is essential — unlike most other elementary ' +
      'functions, a square root function simply does not exist for part of the number line.',
    diagram: {
      id: 'square-root-function-diagram',
      title: 'Graph of y = √x',
      altText: 'A curve starting at the origin and extending to the right, resembling half of a sideways parabola, with no graph for negative x',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => (x < 0 ? NaN : Math.sqrt(x)), min: -2, max: 9, markPoints: [{ x: 0, y: 0, label: '(0,0)' }] },
    },
    formulaSlug: 'square-root-function-form',
    workedExample: {
      id: 'square-root-worked-1',
      title: 'Find the domain and evaluate a square root function',
      problemStatement: 'For y = √(x − 3), state the domain and find y when x = 12.',
      steps: [
        { step: 1, instruction: 'Find the domain: the expression under the root cannot be negative.', math: 'x − 3 ≥ 0  →  x ≥ 3', explanation: 'The domain is restricted by h = 3.' },
        { step: 2, instruction: 'Substitute x = 12 (which is within the domain).', math: 'y = √(12−3) = √9', explanation: 'Substitute and simplify inside the root first.' },
        { step: 3, instruction: 'Evaluate.', math: 'y = 3', explanation: '√9 = 3.' },
      ],
      finalAnswer: 'Domain: x ≥ 3.  When x=12, y=3.',
    },
    whyItWorks:
      'The square root of a negative number is not a real number, so any x-value that would make ' +
      'the expression under the root negative simply has no valid y-value — this forces the domain restriction, x ≥ h.',
    realLifeExample: {
      title: 'Pendulum period versus length',
      scenario: 'A pendulum\'s swing period depends on the square root of its length: T = 2π√(L/g).',
      explanation: 'Since length L cannot be negative, this formula naturally has the same domain restriction (L ≥ 0) as the basic square root function.',
    },
    practiceQuestions: [
      {
        id: 'square-root-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the domain of y = √(x + 5)?',
        options: [
          { id: 'a', text: 'x ≥ −5' },
          { id: 'b', text: 'x ≥ 5' },
          { id: 'c', text: 'x ≤ −5' },
          { id: 'd', text: 'All real numbers' },
        ],
        correctOptionId: 'a',
        hints: ['Set x + 5 ≥ 0.'],
        explanation: 'x + 5 ≥ 0 gives x ≥ −5.',
      },
    ],
    commonMistake:
      'Assuming a square root function is defined everywhere, like most other elementary functions ' +
      '— always check its domain restriction first.',
    quickReview: [
      'y = a√(x−h)+k starts at (h,k) and extends in one direction only.',
      'Domain: x ≥ h (the expression under the root cannot be negative).',
      'Shaped like half of a sideways parabola.',
    ],
  },

  'the-exponential-function': {
    slug: 'the-exponential-function',
    title: 'The Exponential Function',
    difficulty: 'medium',
    simpleExplanation:
      'An exponential function, y = a·bˣ, has x in the exponent rather than the base. When b > 1, ' +
      'the curve grows increasingly quickly (exponential growth); when 0 < b < 1, it shrinks ' +
      'increasingly quickly toward zero (exponential decay). The x-axis (y=0) is always a horizontal asymptote.',
    whyItMatters:
      'Exponential functions model any quantity that changes by a fixed percentage over equal time ' +
      'periods — population growth, compound interest, and radioactive-style decay all share this shape.',
    diagram: {
      id: 'exponential-function-diagram',
      title: 'Graph of y = 2ˣ',
      altText: 'A curve that starts very close to the x-axis on the left, crosses the y-axis at 1, and rises increasingly steeply to the right',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => Math.pow(2, x), min: -4, max: 4, showYIntercept: true },
    },
    formulaSlug: 'exponential-function-form',
    workedExample: {
      id: 'exponential-worked-1',
      title: 'Evaluate an exponential function',
      problemStatement: 'For y = 3·2ˣ, find y when x = 4.',
      steps: [
        { step: 1, instruction: 'Substitute x = 4.', math: 'y = 3·2⁴', explanation: 'Substitute directly.' },
        { step: 2, instruction: 'Evaluate the power.', math: '2⁴ = 16', explanation: 'Compute the power first.' },
        { step: 3, instruction: 'Multiply.', math: '3 × 16 = 48', explanation: 'Multiply by the coefficient a.' },
      ],
      finalAnswer: 'y = 48',
    },
    whyItWorks:
      'Since bˣ is always positive for b>0, the graph of y=a·bˣ (with a>0) always stays above the ' +
      'x-axis, approaching it (but never reaching it, since bˣ never equals exactly 0) as x becomes very negative — which is exactly why y=0 is a horizontal asymptote.',
    realLifeExample: {
      title: 'Bacterial population growth',
      scenario: 'A bacteria population doubles every hour, starting from an initial count.',
      explanation: 'Population = (initial count) × 2ᵗ is a direct exponential function, with b=2 representing the doubling.',
    },
    practiceQuestions: [
      {
        id: 'exponential-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For y = 5·2ˣ, find y when x = 0.',
        hints: ['2⁰ = 1.'],
        correctAnswer: 5,
        explanation: 'y = 5×1 = 5 (the y-intercept, since bˣ=1 when x=0).',
      },
    ],
    commonMistake:
      'Confusing an exponential function (x in the exponent, e.g. y=2ˣ) with a power function (x as ' +
      'the base, e.g. y=x²) — these have completely different shapes and behaviors.',
    quickReview: [
      'y = a·bˣ, with b>0, b≠1.',
      'b>1: growth. 0<b<1: decay. Always has asymptote y=0.',
      'The y-intercept is always a, since bˣ=1 when x=0.',
    ],
  },

  'translations-of-functions': {
    slug: 'translations-of-functions',
    title: 'Translations of Functions',
    difficulty: 'medium',
    simpleExplanation:
      'A translation slides a graph to a new position without changing its shape at all. ' +
      'y = f(x−h) shifts the graph h units horizontally; y = f(x)+k shifts it k units vertically. ' +
      'Combined, y = f(x−h)+k moves the whole graph to a new location.',
    whyItMatters:
      'Once you know one function\'s shape, translation lets you instantly picture (and write the ' +
      'equation for) the same shape moved anywhere else on the plane — without re-deriving anything.',
    diagram: {
      id: 'translation-diagram',
      title: 'y = x² translated to y = (x−2)² + 3',
      altText: 'A parabola y equals x squared, and a second identical parabola shifted 2 units right and 3 units up',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x,
        fn2: (x: number) => (x - 2) * (x - 2) + 3,
        min: -4,
        max: 6,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }, { x: 2, y: 3, label: '(2,3)' }],
      },
    },
    formulaSlug: 'translation-formula',
    workedExample: {
      id: 'translation-worked-1',
      title: 'Write the equation of a translated function',
      problemStatement: 'The graph of y = x² is shifted 4 units left and 5 units down. Write the new equation.',
      steps: [
        { step: 1, instruction: 'Identify h and k from the shift.', math: '4 left → h = −4;  5 down → k = −5', explanation: 'Left/down shifts are negative in this notation.' },
        { step: 2, instruction: 'Apply the translation formula.', math: 'y = f(x−h)+k = (x−(−4))² + (−5)', explanation: 'Substitute h and k.' },
        { step: 3, instruction: 'Simplify.', math: 'y = (x+4)² − 5', explanation: 'x−(−4) = x+4.' },
      ],
      finalAnswer: 'y = (x + 4)² − 5',
    },
    whyItWorks:
      'Replacing x with (x−h) means every output that used to occur at some x-value now occurs at ' +
      'x+h instead — shifting the whole graph right by h (and left if h is negative). Adding k ' +
      'separately shifts every output value up by k, with no effect on which x-values are used — the two shifts are independent.',
    realLifeExample: {
      title: 'Adjusting a schedule\'s start time',
      scenario: 'A factory\'s production graph over the day is shifted 2 hours later when the shift schedule changes, with no change to the shape of the day\'s pattern.',
      explanation: 'This is exactly a horizontal translation — the same production pattern, just occurring at a shifted time.',
    },
    practiceQuestions: [
      {
        id: 'translation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'The graph of y = √x is shifted 3 units right and 2 units up. What is the new equation?',
        options: [
          { id: 'a', text: 'y = √(x−3) + 2' },
          { id: 'b', text: 'y = √(x+3) + 2' },
          { id: 'c', text: 'y = √(x−3) − 2' },
          { id: 'd', text: 'y = √x − 3 + 2' },
        ],
        correctOptionId: 'a',
        hints: ['Right shift uses (x − h) with h positive.'],
        explanation: 'h=3, k=2, giving y = √(x−3) + 2.',
      },
    ],
    commonMistake:
      'Getting the horizontal shift direction backwards — y=f(x−3) shifts RIGHT (even though it ' +
      'looks like subtraction), while y=f(x+3) shifts LEFT.',
    quickReview: [
      'y = f(x−h) + k: horizontal shift h, vertical shift k.',
      'Horizontal shifts feel "backwards": (x−h) shifts right, (x+h) shifts left.',
      'Vertical shifts are intuitive: +k shifts up, −k shifts down.',
    ],
  },

  'reflections-of-functions': {
    slug: 'reflections-of-functions',
    title: 'Reflections of Functions',
    difficulty: 'medium',
    simpleExplanation:
      'A reflection flips a graph over an axis like a mirror. y = −f(x) flips the graph over the ' +
      'x-axis (upside down); y = f(−x) flips it over the y-axis (left-right mirror image).',
    whyItMatters:
      'Reflections let you instantly picture a "flipped" version of a known shape — useful for ' +
      'recognizing negative-coefficient variants of familiar functions at a glance.',
    diagram: {
      id: 'reflection-diagram',
      title: 'y = x² and its reflection y = −x²',
      altText: 'An upward-opening parabola and its mirror image, an downward-opening parabola, reflected over the x-axis',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => x * x, fn2: (x: number) => -(x * x), min: -4, max: 4 },
    },
    formulaSlug: 'reflection-formula',
    workedExample: {
      id: 'reflection-worked-1',
      title: 'Write the equation of a reflected function',
      problemStatement: 'Write the equation of y = √x reflected over the x-axis.',
      steps: [
        { step: 1, instruction: 'Apply the x-axis reflection rule.', math: 'y = −f(x)', explanation: 'Negate the whole function.' },
        { step: 2, instruction: 'Substitute f(x) = √x.', math: 'y = −√x', explanation: 'Every output is negated.' },
      ],
      finalAnswer: 'y = −√x',
    },
    whyItWorks:
      'Negating the output of every point (x, f(x)) moves it to (x, −f(x)) — the same horizontal ' +
      'position, but flipped vertically across the x-axis, which is exactly what a mirror reflection ' +
      'over that axis does to every point at once.',
    realLifeExample: {
      title: 'Mirrored architectural blueprints',
      scenario: 'An architect designs a building feature, then needs a mirror-image version for the opposite side of a symmetric building.',
      explanation: 'Reflecting the design\'s function over an axis produces the exact mirror-image curve needed, with no need to redesign from scratch.',
    },
    practiceQuestions: [
      {
        id: 'reflection-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is y = x³ reflected over the y-axis?',
        options: [
          { id: 'a', text: 'y = −x³' },
          { id: 'b', text: 'y = x³' },
          { id: 'c', text: 'y = −x' },
          { id: 'd', text: 'y = x⁻³' },
        ],
        correctOptionId: 'a',
        hints: ['y-axis reflection: replace x with −x.', '(−x)³ = −x³.'],
        explanation: 'f(−x) = (−x)³ = −x³.',
      },
    ],
    commonMistake:
      'Mixing up which reflection formula flips over which axis — y=−f(x) flips over the x-axis ' +
      '(negate the output); y=f(−x) flips over the y-axis (negate the input).',
    quickReview: [
      'y = −f(x): reflection over the x-axis (negate the output).',
      'y = f(−x): reflection over the y-axis (negate the input).',
      'Every point (x,y) maps to its mirror image across the chosen axis.',
    ],
  },

  'stretches-and-compressions-of-functions': {
    slug: 'stretches-and-compressions-of-functions',
    title: 'Stretches and Compressions of Functions',
    difficulty: 'hard',
    simpleExplanation:
      'A vertical stretch/compression, y = a·f(x), scales the graph\'s height by a factor of a ' +
      '(taller if |a|>1, flatter if 0<|a|<1). A horizontal stretch/compression, y = f(bx), scales ' +
      'its width — but in the OPPOSITE sense: a larger b actually compresses the graph horizontally, not stretches it.',
    whyItMatters:
      'The horizontal case is genuinely counter-intuitive — recognizing that b works "backwards" ' +
      'compared to a is essential to avoid a very common and persistent error.',
    diagram: {
      id: 'stretch-diagram',
      title: 'y = x² and a vertical compression, y = 0.3x²',
      altText: 'An upward-opening parabola and a wider, flatter version of the same shape',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'custom', fn: (x: number) => x * x, fn2: (x: number) => 0.3 * x * x, min: -4, max: 4 },
    },
    formulaSlug: 'stretch-compression-formula',
    workedExample: {
      id: 'stretch-worked-1',
      title: 'Apply a horizontal compression',
      problemStatement: 'The function y = f(x) has a key point at (4, 5). Find the corresponding point on y = f(2x).',
      steps: [
        { step: 1, instruction: 'Recognize horizontal scaling works inversely.', math: 'y = f(bx), with b=2', explanation: 'A larger b compresses horizontally — points move IN toward the y-axis.' },
        { step: 2, instruction: 'Divide the original x-coordinate by b.', math: 'new x = 4 / 2 = 2', explanation: 'The point that used to require x=4 as input to f now only needs x=2, since 2×2=4.' },
        { step: 3, instruction: 'The y-coordinate is unaffected.', math: 'new y = 5', explanation: 'Horizontal scaling never changes the output value.' },
      ],
      finalAnswer: 'The corresponding point is (2, 5)',
    },
    whyItWorks:
      'y=f(bx) evaluates f at bx instead of x — to reach the same output that f(x) gave at some ' +
      'original input x₀, the new function needs bx = x₀, i.e. x = x₀/b — so every key x-coordinate ' +
      'shrinks by a factor of b (for b>1), which is a compression, not a stretch, despite b appearing to "multiply."',
    realLifeExample: {
      title: 'Adjusting a sound wave\'s amplitude and frequency',
      scenario: 'An audio engineer increases a sound wave\'s volume (a vertical stretch) and separately increases its pitch/frequency (a horizontal compression).',
      explanation: 'These are literally the two transformations covered here — amplitude scaling is vertical (y=a·f(x)), frequency scaling is horizontal (y=f(bx)) and behaves inversely.',
    },
    practiceQuestions: [
      {
        id: 'stretch-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Which transformation makes the graph of y=f(x) narrower (compressed horizontally)?',
        options: [
          { id: 'a', text: 'y = f(3x)' },
          { id: 'b', text: 'y = f(x/3)' },
          { id: 'c', text: 'y = 3f(x)' },
          { id: 'd', text: 'y = f(x)/3' },
        ],
        correctOptionId: 'a',
        hints: ['Horizontal scaling works inversely — a larger multiplier compresses.'],
        explanation: 'y=f(3x) has b=3>1, which compresses the graph horizontally, making it narrower.',
      },
    ],
    commonMistake:
      'Assuming y=f(bx) with b>1 stretches the graph horizontally (matching the intuition from the ' +
      'vertical case, y=a·f(x)) — horizontal scaling is inverted: b>1 compresses, 0<b<1 stretches.',
    quickReview: [
      'y = a·f(x): vertical scale by a. |a|>1 stretches; 0<|a|<1 compresses.',
      'y = f(bx): horizontal scale, but inverted. |b|>1 compresses; 0<|b|<1 stretches.',
      'Horizontal scaling is the one genuinely counter-intuitive transformation — always double-check it.',
    ],
  },

  'combining-transformations': {
    slug: 'combining-transformations',
    title: 'Combining Transformations',
    difficulty: 'hard',
    simpleExplanation:
      'Multiple transformations can be applied to one function at once, written as ' +
      'y = a·f(b(x−h)) + k. Applying them correctly requires a consistent order: handle the ' +
      'horizontal changes (reflection/stretch/shift inside the brackets) and vertical changes ' +
      '(reflection/stretch/shift outside) working from the inside out, closest to x first.',
    whyItMatters:
      'Real transformed functions almost always combine several changes at once — knowing a ' +
      'reliable order to apply them prevents easily-made errors from applying them in a mismatched sequence.',
    diagram: {
      id: 'combining-transformations-diagram',
      title: 'y = x² transformed into y = −2(x+1)² + 4',
      altText: 'An upward-opening parabola and a second, narrower downward-opening parabola shifted left and up',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x,
        fn2: (x: number) => -2 * (x + 1) * (x + 1) + 4,
        min: -5,
        max: 5,
        markPoints: [{ x: -1, y: 4, label: '(-1,4)' }],
      },
    },
    formulaSlug: 'translation-formula',
    workedExample: {
      id: 'combining-worked-1',
      title: 'Describe a combined transformation',
      problemStatement: 'Describe every transformation applied to y = x² to produce y = −2(x + 1)² + 4.',
      steps: [
        { step: 1, instruction: 'Match the equation to y = a·f(x−h)+k, with f(x)=x².', math: 'a = −2,  x−h = x+1 → h = −1,  k = 4', explanation: 'Read off each parameter carefully.' },
        { step: 2, instruction: 'Describe the horizontal shift.', math: 'h = −1', explanation: 'Shift 1 unit LEFT.' },
        { step: 3, instruction: 'Describe the vertical stretch and reflection.', math: 'a = −2', explanation: 'Vertical stretch by factor 2, AND a reflection over the x-axis (since a is negative).' },
        { step: 4, instruction: 'Describe the vertical shift.', math: 'k = 4', explanation: 'Shift 4 units UP.' },
      ],
      finalAnswer: 'Shift 1 left, stretch vertically by 2, reflect over the x-axis, then shift 4 up.',
    },
    whyItWorks:
      'Each transformation modifies a different, independent part of the equation (a scales/flips ' +
      'the whole output, h/b affect the input before f is applied, k shifts the final output) — ' +
      'since they touch different parts of the expression, they can be identified and applied one at a time without interfering with each other, as long as the horizontal changes are handled before reading x into f.',
    realLifeExample: {
      title: 'Adjusting a signal for size, direction, and offset all at once',
      scenario: 'An engineer needs to invert a sensor signal, amplify it, and offset it to match a new reference baseline, all as one combined adjustment.',
      explanation: 'This maps directly onto reflection (invert), stretch (amplify), and translation (offset) — the same three transformations combined, exactly as in this concept.',
    },
    practiceQuestions: [
      {
        id: 'combining-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What is the vertex of y = 3(x − 2)² − 5, viewed as a transformation of y = x²?',
        options: [
          { id: 'a', text: '(2, −5)' },
          { id: 'b', text: '(−2, −5)' },
          { id: 'c', text: '(2, 5)' },
          { id: 'd', text: '(3, −5)' },
        ],
        correctOptionId: 'a',
        hints: ['h=2 (shift right), k=−5 (shift down).', 'The original vertex (0,0) moves to (h,k).'],
        explanation: 'h=2, k=−5, so the vertex (0,0) of y=x² moves to (2,−5).',
      },
    ],
    commonMistake:
      'Applying the vertical shift (k) before the vertical stretch/reflection (a) — always scale ' +
      '(and reflect, if needed) first, then shift, matching the order the parameters appear in y=a·f(x−h)+k.',
    quickReview: [
      'y = a·f(b(x−h)) + k combines reflection, stretch/compression, and translation.',
      'Identify each parameter (a, b, h, k) separately, then describe their combined effect.',
      'Horizontal changes happen to x before f is applied; vertical changes happen to the output afterward.',
    ],
  },
};
