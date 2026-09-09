import type { Metadata } from 'next';
import { SolverForm } from '@/components/solver/SolverForm';

export const metadata: Metadata = { title: 'Solver' };

export default function SolverPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Math Solver</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Solve equations, differentiate, integrate, and more — every answer shows its full
          working, not just the final result. Powered by{' '}
          <a href="https://www.sympy.org/" target="_blank" rel="noreferrer" className="underline">
            SymPy
          </a>
          , a free and open-source symbolic maths library.
        </p>
      </div>
      <SolverForm />
    </div>
  );
}
