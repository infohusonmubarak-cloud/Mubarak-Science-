// A seeded shuffle so a drag-order question's displayed order is stable
// between the server-rendered HTML and the client hydration pass — using
// Math.random() directly in a 'use client' component's initial render
// would shuffle differently on each side and trigger a hydration mismatch.
// Seeding by the question's own id keeps it deterministic without an
// effect (which would also trip the project's set-state-in-effect lint
// rule for no good reason — this doesn't need to run after mount).

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) || 1;
}

function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

export function deterministicShuffle<T>(items: T[], seed: string): T[] {
  const random = seededRandom(hashString(seed));
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
