export interface CalculatorVariable {
  symbol: string;
  label: string;
  unit: string;
}

export interface CalculatorSolver {
  /** Display string for the formula rearranged to solve this variable, e.g. "a = F / m". */
  rearranged: string;
  /** Computes this variable's value from the other variables' known numeric values. */
  compute: (known: Record<string, number>) => number;
  /** Human-readable substitution steps, given the known values and the computed result. */
  steps: (known: Record<string, number>, result: number) => string[];
}

export interface CalculatorFormula {
  id: string;
  name: string;
  chapterLabel: string;
  /** Display string of the formula in its most common form, e.g. "F = ma". */
  expression: string;
  variables: CalculatorVariable[];
  /** One solver per variable that can be legally isolated — a variable that would
   *  require a quadratic/ambiguous-sign solve to isolate is simply omitted rather
   *  than guessed at. */
  solvers: Record<string, CalculatorSolver>;
  chapterLink?: { subject: string; level: string; chapter: string; title: string };
}
