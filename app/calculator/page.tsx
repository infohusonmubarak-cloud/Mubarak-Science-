import type { Metadata } from 'next';
import { FormulaCalculator } from '@/components/calculator/FormulaCalculator';

export const metadata: Metadata = { title: 'Physics Calculator' };

export default function CalculatorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Physics Formula Calculator</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Pick a formula, enter the values you know, and get the answer with units — plus the rearranged formula
          and every substitution step, so you can see exactly how it was worked out.
        </p>
      </div>
      <FormulaCalculator />
    </div>
  );
}
