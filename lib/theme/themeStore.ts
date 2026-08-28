// A minimal external store for the light/dark toggle, following the same
// subscribe/getSnapshot/getServerSnapshot shape as `lib/storage/*` so it
// plays correctly with `useSyncExternalStore` (no direct `setState` inside
// an effect, and a stable default on the server so hydration never
// mismatches — the server and the pre-hydration client always agree on
// 'light', with the real theme applied instantly by the no-flash inline
// script in <head> before React ever runs).

type Listener = () => void;
type Theme = 'light' | 'dark';

const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: Listener): () => void {
  listeners.add(listener);
  if (typeof window !== 'undefined') {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', listener);
    return () => {
      listeners.delete(listener);
      media.removeEventListener('change', listener);
    };
  }
  return () => listeners.delete(listener);
}

export function getTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'dark' || explicit === 'light') return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getThemeServerSnapshot(): Theme {
  return 'light';
}

export function setTheme(next: Theme): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Private browsing / storage disabled — the toggle still works for this session.
  }
  emit();
}
