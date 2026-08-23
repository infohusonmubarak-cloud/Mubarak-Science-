import { ImageResponse } from 'next/og';

/**
 * Renders the placeholder Mubarek Science app icon (a bold "M" on an
 * indigo square) at the given size, for the PWA manifest's icon entries.
 * `maskable` adds inner padding so OS icon masks (a circle on some
 * Android launchers) don't clip the mark — the background still fills
 * edge-to-edge so the mask has something to crop into.
 */
export function renderIconResponse(sizePx: number, maskable = false) {
  const fontSize = maskable ? sizePx * 0.34 : sizePx * 0.5;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4338ca',
          color: 'white',
          fontSize,
          fontWeight: 700,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        M
      </div>
    ),
    { width: sizePx, height: sizePx }
  );
}
