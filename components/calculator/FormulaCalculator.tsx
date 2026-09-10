'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CopyButton } from '@/components/calculator/CopyButton';
import { CALCULATOR_FORMULAS } from '@/lib/calculator/formulas';

const CHAPTERS = Array.from(new Set(CALCULATOR_FORMULAS.map((f) => f.chapterLabel)));

export function FormulaCalculator() {
  const [chapterLabel, setChapterLabel] = useState(CHAPTERS[0]);
  const chapterFormulas = useMemo(
    () => CALCULATOR_FORMULAS.filter((f) => f.chapterLabel === chapterLabel),
    [chapterLabel]
  );

  const [formulaId, setFormulaId] = useState(chapterFormulas[0].id);
  const formula = CALCULATOR_FORMULAS.find((f) => f.id === formulaId) ?? chapterFormulas[0];
  const solvableVars = formula.variables.filter((v) => formula.solvers[v.symbol]);

  const [target, setTarget] = useState(solvableVars[0].symbol);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ value: number; steps: string[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function selectChapter(next: string) {
    setChapterLabel(next);
    const firstFormula = CALCULATOR_FORMULAS.find((f) => f.chapterLabel === next)!;
    selectFormula(firstFormula.id);
  }

  function selectFormula(nextId: string) {
    const next = CALCULATOR_FORMULAS.find((f) => f.id === nextId)!;
    setFormulaId(nextId);
    const nextSolvable = next.variables.filter((v) => next.solvers[v.symbol]);
    setTarget(nextSolvable[0].symbol);
    setInputs({});
    setResult(null);
    setError(null);
  }

  function selectTarget(symbol: string) {
    setTarget(symbol);
    setResult(null);
    setError(null);
  }

  function onCalculate() {
    setError(null);
    const knownVars = formula.variables.filter((v) => v.symbol !== target);
    const known: Record<string, number> = {};
    for (const v of knownVars) {
      const raw = inputs[v.symbol];
      const num = raw === undefined || raw.trim() === '' ? NaN : Number(raw);
      if (Number.isNaN(num)) {
        setError(`Enter a number for ${v.label} (${v.symbol}).`);
        return;
      }
      known[v.symbol] = num;
    }
    const solver = formula.solvers[target];
    const value = solver.compute(known);
    if (!Number.isFinite(value)) {
      setError("That combination of values doesn't give a valid result (check for division by zero).");
      return;
    }
    setResult({ value, steps: solver.steps(known, value) });
  }

  const knownVars = formula.variables.filter((v) => v.symbol !== target);
  const targetVar = formula.variables.find((v) => v.symbol === target)!;

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-medium text-foreground">Chapter</p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {CHAPTERS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectChapter(c)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                chapterLabel === c
                  ? 'border-brand bg-brand-soft text-brand-strong'
                  : 'border-border text-foreground-muted hover:bg-surface-muted'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-1.5 text-sm font-medium text-foreground">Formula</p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {chapterFormulas.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => selectFormula(f.id)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                formulaId === f.id
                  ? 'border-brand bg-brand-soft text-brand-strong'
                  : 'border-border text-foreground-muted hover:bg-surface-muted'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">Formula</p>
          <p className="mt-1 font-mono text-lg text-foreground">{formula.expression}</p>
        </div>

        <div>
          <p className="mb-1.5 text-sm font-medium text-foreground">What do you want to find?</p>
          <div className="flex flex-wrap gap-2">
            {solvableVars.map((v) => (
              <button
                key={v.symbol}
                type="button"
                onClick={() => selectTarget(v.symbol)}
                className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                  target === v.symbol
                    ? 'border-brand bg-brand-soft text-brand-strong'
                    : 'border-border text-foreground-muted hover:bg-surface-muted'
                }`}
              >
                {v.label} ({v.symbol})
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {knownVars.map((v) => (
            <div key={v.symbol}>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                {v.label} ({v.symbol}) — {v.unit}
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={inputs[v.symbol] ?? ''}
                onChange={(e) => setInputs((prev) => ({ ...prev, [v.symbol]: e.target.value }))}
                placeholder={`Enter ${v.symbol}`}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
              />
            </div>
          ))}
        </div>

        {error && <p className="text-sm font-medium text-danger">{error}</p>}

        <Button type="button" onClick={onCalculate} className="w-full sm:w-auto">
          Calculate
        </Button>
      </div>

      {result && (
        <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">Answer</p>
            <p className="text-2xl font-bold text-foreground">
              {targetVar.symbol} = {result.value} {targetVar.unit}
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">Rearranged formula</p>
            <p className="font-mono text-base text-foreground">{formula.solvers[target].rearranged}</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">Step by step</p>
            <ol className="space-y-2">
              {result.steps.map((step, i) => (
                <li key={i} className="flex gap-3 rounded-lg bg-surface-muted p-3 text-sm">
                  <span className="shrink-0 font-mono text-xs text-foreground-muted">{i + 1}.</span>
                  <span className="font-mono text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <CopyButton text={`${targetVar.symbol} = ${result.value} ${targetVar.unit}`} />
            {formula.chapterLink && (
              <Link
                href={`/subjects/${formula.chapterLink.subject}/${formula.chapterLink.level}/${formula.chapterLink.chapter}`}
                className="text-sm font-medium text-brand hover:underline"
              >
                Read the theory in {formula.chapterLink.title} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
