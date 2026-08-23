'use client';

import { useEffect } from 'react';

export function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Registration failing (e.g. unsupported browser, blocked by settings)
      // shouldn't break the app — it just runs without offline caching.
    });
  }, []);

  return null;
}
