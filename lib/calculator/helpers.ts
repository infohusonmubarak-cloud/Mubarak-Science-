import type { CalculatorSolver, CalculatorVariable } from './types';

/** Builds the three solvers for a y = a × b relationship (e.g. F = ma, W = Fd, V = IR) —
 *  covers most of this batch's formulas, so the algebra is written and verified once. */
export function makeProductSolvers(
  y: CalculatorVariable,
  a: CalculatorVariable,
  b: CalculatorVariable
): Record<string, CalculatorSolver> {
  return {
    [y.symbol]: {
      rearranged: `${y.symbol} = ${a.symbol} × ${b.symbol}`,
      compute: (known) => known[a.symbol] * known[b.symbol],
      steps: (known, result) => [
        `${y.symbol} = ${a.symbol} × ${b.symbol}`,
        `${y.symbol} = ${known[a.symbol]} × ${known[b.symbol]}`,
        `${y.symbol} = ${result} ${y.unit}`,
      ],
    },
    [a.symbol]: {
      rearranged: `${a.symbol} = ${y.symbol} / ${b.symbol}`,
      compute: (known) => known[y.symbol] / known[b.symbol],
      steps: (known, result) => [
        `${a.symbol} = ${y.symbol} / ${b.symbol}`,
        `${a.symbol} = ${known[y.symbol]} / ${known[b.symbol]}`,
        `${a.symbol} = ${result} ${a.unit}`,
      ],
    },
    [b.symbol]: {
      rearranged: `${b.symbol} = ${y.symbol} / ${a.symbol}`,
      compute: (known) => known[y.symbol] / known[a.symbol],
      steps: (known, result) => [
        `${b.symbol} = ${y.symbol} / ${a.symbol}`,
        `${b.symbol} = ${known[y.symbol]} / ${known[a.symbol]}`,
        `${b.symbol} = ${result} ${b.unit}`,
      ],
    },
  };
}
