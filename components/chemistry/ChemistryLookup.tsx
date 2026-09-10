'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

interface ChemistryResult {
  cid: number;
  query: string;
  molecularFormula: string | null;
  molecularWeight: string | null;
  iupacName: string | null;
  canonicalSmiles: string | null;
  structureImageUrl: string;
  pubchemUrl: string;
  safetyStatements: string[];
}

const EXAMPLES = ['Aspirin', 'Water', 'Glucose', 'Sodium chloride', 'C6H12O6'];

export function ChemistryLookup() {
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ChemistryResult | null>(null);
  const [cached, setCached] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  async function runSearch(q: string) {
    const trimmed = q.trim();
    if (!trimmed) {
      setError('Type a compound name or formula.');
      return;
    }
    setBusy(true);
    setError(null);
    setResult(null);
    setImageFailed(false);

    try {
      const res = await fetch(`/api/chemistry?q=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }
      setResult(data.result);
      setCached(Boolean(data.cached));
    } catch {
      setError('Could not reach the chemistry lookup — check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    runSearch(query);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-border bg-surface p-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Compound name or formula</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Aspirin, Water, C6H12O6"
            className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-base text-foreground"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setQuery(ex);
                runSearch(ex);
              }}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground-muted hover:bg-surface-muted"
            >
              {ex}
            </button>
          ))}
        </div>

        <Button type="submit" disabled={busy} className="w-full sm:w-auto">
          {busy ? 'Searching…' : 'Search'}
        </Button>
      </form>

      {error && (
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-sm font-medium text-danger">{error}</p>
        </div>
      )}

      {result && (
        <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                {cached ? 'From cache' : 'From PubChem'}
              </p>
              <h2 className="text-lg font-bold text-foreground">{result.iupacName ?? result.query}</h2>
              {result.molecularFormula && <p className="font-mono text-sm text-foreground-muted">{result.molecularFormula}</p>}
            </div>
          </div>

          {!imageFailed && (
            <div className="flex justify-center rounded-lg border border-border bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- external PubChem-served image, not a static asset */}
              <img
                src={result.structureImageUrl}
                alt={`2D chemical structure of ${result.iupacName ?? result.query}`}
                className="max-h-56 max-w-full"
                onError={() => setImageFailed(true)}
              />
            </div>
          )}

          <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-foreground-muted">Molecular weight</dt>
              <dd className="font-medium text-foreground">{result.molecularWeight ? `${result.molecularWeight} g/mol` : '—'}</dd>
            </div>
            <div>
              <dt className="text-foreground-muted">CID</dt>
              <dd className="font-medium text-foreground">{result.cid}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-foreground-muted">SMILES</dt>
              <dd className="break-all font-mono text-xs text-foreground">{result.canonicalSmiles ?? '—'}</dd>
            </div>
          </dl>

          {result.safetyStatements.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                Safety (GHS classification)
              </p>
              <ul className="space-y-1.5">
                {result.safetyStatements.map((s, i) => (
                  <li key={i} className="rounded-lg bg-danger-soft px-3 py-2 text-sm text-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={result.pubchemUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium text-brand hover:underline"
          >
            View full record on PubChem ↗
          </a>
        </div>
      )}

      <p className="text-xs text-foreground-muted">
        Data from{' '}
        <a href="https://pubchem.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="underline">
          PubChem
        </a>
        , a free public chemistry database from the National Library of Medicine (NIH). Results are cached to avoid
        repeated lookups for the same compound.
      </p>
    </div>
  );
}
