// MSMK's language preference (English / Rohingya / Both) — same
// useSyncExternalStore-friendly pub-sub idiom as lib/theme/themeStore.ts,
// simplified because a primitive string snapshot is trivially stable
// (unlike the JSON blobs lib/storage/client.ts has to cache by raw string).

export type MSMKLanguage = 'en' | 'rhg' | 'both';

const STORAGE_KEY = 'msmk:lang';
const listeners = new Set<() => void>();
let cached: MSMKLanguage | null = null;

function readStored(): MSMKLanguage {
  if (typeof window === 'undefined') return 'both';
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === 'en' || raw === 'rhg' || raw === 'both') return raw;
  } catch {
    // localStorage unavailable (private browsing, disabled) — fall through to default.
  }
  return 'both';
}

export function getLanguage(): MSMKLanguage {
  if (cached === null) cached = readStored();
  return cached;
}

/** Default's always 'both' server-side so SSR/CSR markup matches before hydration reads the real preference. */
export function getLanguageServerSnapshot(): MSMKLanguage {
  return 'both';
}

export function setLanguage(next: MSMKLanguage): void {
  cached = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore — preference just won't persist across visits.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeLanguage(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
