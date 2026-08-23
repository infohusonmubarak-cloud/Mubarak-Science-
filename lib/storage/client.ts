// The only module that touches `window.localStorage` directly. Every read
// is guarded against SSR (no `window`), corrupt JSON, and a stale
// `schemaVersion` (all three fall back to the caller's default shape
// instead of throwing). Writes fan out through a tiny in-module pub-sub so
// components using `useSyncExternalStore` re-render immediately in the
// same tab — the native `storage` event only fires in *other* tabs.
//
// `readJSON` caches the last parsed value per key, keyed by the raw string
// it came from, and returns the *same object reference* when the raw
// string hasn't changed. `useSyncExternalStore` requires that stability —
// without it, a snapshot getter that reparses JSON on every call returns a
// new reference each time even when nothing changed, which React treats as
// "the store changed," triggering a re-render loop.

type Listener = () => void;

const listeners = new Map<string, Set<Listener>>();
const cache = new Map<string, { raw: string | null; value: unknown }>();

function emit(key: string) {
  listeners.get(key)?.forEach((listener) => listener());
}

export function subscribe(key: string, listener: Listener): () => void {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key)!.add(listener);
  return () => listeners.get(key)?.delete(listener);
}

export function readJSON<T extends { schemaVersion: number }>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    return fallback;
  }

  const cached = cache.get(key);
  if (cached && cached.raw === raw) return cached.value as T;

  if (!raw) {
    cache.set(key, { raw, value: fallback });
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw) as T;
    const value = parsed.schemaVersion === fallback.schemaVersion ? parsed : fallback;
    cache.set(key, { raw, value });
    return value;
  } catch {
    cache.set(key, { raw, value: fallback });
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  let raw: string | null = null;
  try {
    raw = JSON.stringify(value);
    window.localStorage.setItem(key, raw);
  } catch {
    // Storage full, disabled, or unavailable (e.g. private browsing) —
    // fail silently rather than surfacing a technical error to the learner.
  }
  cache.set(key, { raw, value });
  emit(key);
}
