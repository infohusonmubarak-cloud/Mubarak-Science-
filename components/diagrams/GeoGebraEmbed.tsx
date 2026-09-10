'use client';

import { useEffect, useId, useRef, useState } from 'react';

// Click-to-load, same reasoning as components/simulations/PhetEmbed.tsx: the
// GeoGebra applet (deployggb.js + its own asset bundle) is heavy, so it's
// not fetched until the visitor asks for it — keeps the chapter page itself
// fast on slow connections, matching the "lazy-load all embeds" brief.

interface GgbApi {
  evalCommand: (command: string) => boolean;
}

interface GgbAppletParams {
  appName: string;
  width: number;
  height: number;
  showToolBar: boolean;
  showAlgebraInput: boolean;
  showMenuBar: boolean;
  showResetIcon: boolean;
  enableRightClick: boolean;
  scaleContainerClass?: string;
  appletOnLoad?: (api: GgbApi) => void;
}

declare global {
  interface Window {
    GGBApplet?: new (params: GgbAppletParams, useBrowserForJS: boolean) => { inject: (elementId: string) => void };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadGeoGebraScript(): Promise<void> {
  if (window.GGBApplet) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://www.geogebra.org/apps/deployggb.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null; // allow retrying on a later mount
        reject(new Error('Failed to load GeoGebra'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

export interface GeoGebraEmbedProps {
  /** 'graphing' for a function plotter, 'geometry' for compass/straightedge constructions. */
  appName?: 'graphing' | 'geometry';
  /** GeoGebra input-bar commands run once the applet is ready, e.g. "f(x)=x^2-5x+6". */
  commands?: string[];
  height?: number;
  /** Shows GeoGebra's own input bar so a learner can type their own function —
   *  on for a free-form grapher, off for a chapter widget that pre-sets its
   *  own function via `commands` and wants a clean, distraction-free view. */
  showInput?: boolean;
  /** Passed through by DiagramContainer for every diagram; GeoGebra applets
   *  are inherently interactive regardless of this flag, so it's unused here. */
  interactive?: boolean;
}

export function GeoGebraEmbed({ appName = 'graphing', commands = [], height = 380, showInput = false }: GeoGebraEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const rawId = useId();
  const containerId = `ggb-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const injectedRef = useRef(false);

  useEffect(() => {
    if (!loaded || injectedRef.current) return;
    injectedRef.current = true;
    setStatus('loading');

    loadGeoGebraScript()
      .then(() => {
        if (!window.GGBApplet) throw new Error('GGBApplet unavailable after script load');
        const applet = new window.GGBApplet(
          {
            appName,
            width: 700,
            height,
            showToolBar: appName === 'geometry',
            showAlgebraInput: showInput,
            showMenuBar: false,
            showResetIcon: true,
            enableRightClick: false,
            scaleContainerClass: containerId,
            appletOnLoad: (api) => {
              for (const command of commands) {
                try {
                  api.evalCommand(command);
                } catch {
                  // A bad command shouldn't take down an otherwise-working applet.
                }
              }
              setStatus('ready');
            },
          },
          true
        );
        applet.inject(containerId);
      })
      .catch(() => setStatus('error'));
  }, [loaded, appName, commands, height, containerId, showInput]);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
      {!loaded ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="flex w-full flex-col items-center justify-center gap-2 py-16 text-center transition-colors hover:bg-surface-muted"
          style={{ minHeight: height }}
        >
          <span aria-hidden="true" className="text-3xl">📈</span>
          <span className="font-medium text-foreground">Load interactive graph</span>
          <span className="max-w-xs text-xs text-foreground-muted">
            Loads the GeoGebra applet — uses some mobile data.
          </span>
        </button>
      ) : (
        <>
          {status === 'error' && (
            <p className="px-4 py-16 text-center text-sm text-danger">
              Could not load GeoGebra. Check your connection and reload the page.
            </p>
          )}
          <div id={containerId} className={containerId} style={{ minHeight: status === 'error' ? 0 : height }} />
        </>
      )}
      <p className="border-t border-border px-3 py-2 text-xs text-foreground-muted">
        Powered by{' '}
        <a href="https://www.geogebra.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
          GeoGebra
        </a>
      </p>
    </div>
  );
}
