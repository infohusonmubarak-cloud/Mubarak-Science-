import { useSyncExternalStore } from 'react';

// Nothing ever changes here — `subscribe` is a no-op — so this isn't a
// real external store. The point is `useSyncExternalStore`'s documented
// hydration contract: React uses `getServerSnapshot` (false) for both the
// server render AND the client's first hydration pass, then immediately
// re-renders with `getSnapshot` (true) once hydration is done. That's the
// safe way to defer client-only rendering (like a portal, which needs
// `document`) without a mismatch — `typeof document !== 'undefined'`
// looks like it should work but doesn't: `document` already exists during
// the client's hydration pass, so it diverges from the server's render
// immediately and throws a hydration error instead of avoiding one.
function subscribe() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

export function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
