'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CopyButton } from '@/components/solver/CopyButton';

// KaTeX (~280KB) is only fetched once a result actually needs rendering, not
// as part of the initial /solver page load — important on slow connections.
const MathBlock = dynamic(() => import('@/components/solver/MathBlock').then((m) => m.MathBlock), {
  ssr: false,
  loading: () => <span className="font-mono text-sm text-foreground-muted">…</span>,
});
const MathDisplay = dynamic(() => import('@/components/solver/MathBlock').then((m) => m.MathDisplay), {
  ssr: false,
  loading: () => <span className="font-mono text-sm text-foreground-muted">…</span>,
});

type Operation =
  | 'solve_equation'
  | 'differentiate'
  | 'integrate'
  | 'limit'
  | 'matrix_determinant'
  | 'matrix_multiply'
  | 'matrix_inverse'
  | 'trig_evaluate';

interface OperationDef {
  id: Operation;
  label: string;
  placeholder: string;
  example: string;
  needsVariable?: boolean;
  needsPoint?: boolean;
  needsDefiniteBounds?: boolean;
  needsMatrix?: 'single' | 'pair';
}

const OPERATIONS: OperationDef[] = [
  { id: 'solve_equation', label: 'Solve equation', placeholder: 'e.g. 2*x + 3 = 11 or x**2 - 5*x + 6 = 0', example: 'x**2 - 5*x + 6 = 0', needsVariable: true },
  { id: 'differentiate', label: 'Differentiate', placeholder: 'e.g. x**3 + 2*x**2 - 5*x', example: 'sin(3*x + 1)', needsVariable: true },
  { id: 'integrate', label: 'Integrate', placeholder: 'e.g. x**2 + 3*x', example: 'x**2 + 3*x', needsVariable: true, needsDefiniteBounds: true },
  { id: 'limit', label: 'Limit', placeholder: 'e.g. (x**2 - 1)/(x - 1)', example: '(x**2 - 1)/(x - 1)', needsVariable: true, needsPoint: true },
  { id: 'trig_evaluate', label: 'Trigonometry', placeholder: 'e.g. sin(pi/6) + cos(pi/3)', example: 'sin(pi/6) + cos(pi/3)' },
  { id: 'matrix_determinant', label: 'Matrix — determinant', placeholder: '', example: '', needsMatrix: 'single' },
  { id: 'matrix_inverse', label: 'Matrix — inverse', placeholder: '', example: '', needsMatrix: 'single' },
  { id: 'matrix_multiply', label: 'Matrix — multiply', placeholder: '', example: '', needsMatrix: 'pair' },
];

interface SolveResult {
  ok: boolean;
  error?: string;
  input_latex?: string;
  result_latex?: string;
  result_str?: string;
  steps?: string[];
  chapter?: { subject: string; level: string; chapter: string; title: string };
}

function parseMatrixText(text: string): number[][] | null {
  const rows = text
    .trim()
    .split('\n')
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) => r.split(/[,\s]+/).map(Number));
  if (rows.length === 0 || rows.some((r) => r.some((n) => Number.isNaN(n)))) return null;
  return rows;
}

export function SolverForm() {
  const [opId, setOpId] = useState<Operation>('solve_equation');
  const op = OPERATIONS.find((o) => o.id === opId)!;

  const [expression, setExpression] = useState('');
  const [variable, setVariable] = useState('x');
  const [point, setPoint] = useState('');
  const [lowerBound, setLowerBound] = useState('');
  const [upperBound, setUpperBound] = useState('');
  const [matrixText, setMatrixText] = useState('1, 2\n3, 4');
  const [matrixBText, setMatrixBText] = useState('5, 6\n7, 8');

  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<SolveResult | null>(null);

  function selectOperation(next: Operation) {
    setOpId(next);
    setResult(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setResult(null);

    try {
      const body: Record<string, unknown> = { operation: opId };
      if (op.needsMatrix === 'single') {
        const matrix = parseMatrixText(matrixText);
        if (!matrix) {
          setResult({ ok: false, error: 'Enter matrix rows as numbers separated by commas or spaces, one row per line.' });
          setBusy(false);
          return;
        }
        body.matrix = matrix;
      } else if (op.needsMatrix === 'pair') {
        const matrixA = parseMatrixText(matrixText);
        const matrixB = parseMatrixText(matrixBText);
        if (!matrixA || !matrixB) {
          setResult({ ok: false, error: 'Enter both matrices as numbers separated by commas or spaces, one row per line.' });
          setBusy(false);
          return;
        }
        body.matrix_a = matrixA;
        body.matrix_b = matrixB;
      } else {
        if (!expression.trim()) {
          setResult({ ok: false, error: 'Enter an expression first.' });
          setBusy(false);
          return;
        }
        body.expression = expression.trim();
        if (op.needsVariable) body.variable = variable.trim() || 'x';
        if (op.needsPoint) body.point = point.trim() || '0';
        if (op.needsDefiniteBounds && lowerBound.trim() && upperBound.trim()) {
          body.definite = [lowerBound.trim(), upperBound.trim()];
        }
      }

      const res = await fetch('/api/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data: SolveResult = await res.json();
      setResult(data);
    } catch {
      setResult({ ok: false, error: 'Could not reach the solver — check your connection and try again.' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {OPERATIONS.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => selectOperation(o.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              opId === o.id
                ? 'border-brand bg-brand-soft text-brand-strong'
                : 'border-border text-foreground-muted hover:bg-surface-muted'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-5">
        {op.needsMatrix ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                {op.needsMatrix === 'pair' ? 'Matrix A' : 'Matrix'}
              </label>
              <textarea
                value={matrixText}
                onChange={(e) => setMatrixText(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 font-mono text-base text-foreground"
                placeholder="1, 2&#10;3, 4"
              />
            </div>
            {op.needsMatrix === 'pair' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Matrix B</label>
                <textarea
                  value={matrixBText}
                  onChange={(e) => setMatrixBText(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 font-mono text-base text-foreground"
                  placeholder="5, 6&#10;7, 8"
                />
              </div>
            )}
            <p className="text-xs text-foreground-muted sm:col-span-2">
              One row per line, numbers separated by commas or spaces.
            </p>
          </div>
        ) : (
          <>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Expression</label>
              <input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder={op.placeholder}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
                inputMode="text"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => setExpression(op.example)}
                className="mt-1.5 text-xs font-medium text-brand hover:underline"
              >
                Try an example: {op.example}
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {op.needsVariable && (
                <div className="w-24">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Variable</label>
                  <input
                    value={variable}
                    onChange={(e) => setVariable(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
                  />
                </div>
              )}
              {op.needsPoint && (
                <div className="w-32">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Approaches</label>
                  <input
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    placeholder="e.g. 1"
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
                  />
                </div>
              )}
              {op.needsDefiniteBounds && (
                <>
                  <div className="w-28">
                    <label className="mb-1.5 block text-sm font-medium text-foreground">From (optional)</label>
                    <input
                      value={lowerBound}
                      onChange={(e) => setLowerBound(e.target.value)}
                      placeholder="e.g. 0"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
                    />
                  </div>
                  <div className="w-28">
                    <label className="mb-1.5 block text-sm font-medium text-foreground">To (optional)</label>
                    <input
                      value={upperBound}
                      onChange={(e) => setUpperBound(e.target.value)}
                      placeholder="e.g. 2"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <Button type="submit" disabled={busy} className="w-full sm:w-auto">
          {busy ? 'Solving…' : 'Solve'}
        </Button>
      </form>

      {result && (
        <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
          {!result.ok ? (
            <p className="text-sm font-medium text-danger">{result.error}</p>
          ) : (
            <>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">Answer</p>
                <MathDisplay latex={result.result_latex ?? ''} className="overflow-x-auto text-lg" />
              </div>

              {result.steps && result.steps.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    Step by step
                  </p>
                  <ol className="space-y-2">
                    {result.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 rounded-lg bg-surface-muted p-3 text-sm">
                        <span className="shrink-0 font-mono text-xs text-foreground-muted">{i + 1}.</span>
                        <MathBlock text={step} className="min-w-0 leading-relaxed text-foreground [&_.katex]:text-[1.05em]" />
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <CopyButton text={result.result_str ?? ''} />
                {result.chapter && (
                  <Link
                    href={`/subjects/${result.chapter.subject}/${result.chapter.level}/${result.chapter.chapter}`}
                    className="text-sm font-medium text-brand hover:underline"
                  >
                    Read the theory in {result.chapter.title} →
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
