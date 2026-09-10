import type { Metadata } from 'next';
import { ChemistryLookup } from '@/components/chemistry/ChemistryLookup';

export const metadata: Metadata = { title: 'Chemistry Lookup' };

export default function ChemistryLookupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Chemistry Lookup</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Search any compound by name or formula to see its structure, molecular weight, and safety information —
          powered by PubChem, the free public chemistry database from the U.S. National Library of Medicine.
        </p>
      </div>
      <ChemistryLookup />
    </div>
  );
}
