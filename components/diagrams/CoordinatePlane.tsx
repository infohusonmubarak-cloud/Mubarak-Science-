'use client';

import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';

export interface CoordinatePlanePoint {
  x: number;
  y: number;
  label?: string;
}

export interface CoordinatePlaneProps {
  min?: number;
  max?: number;
  pointA?: CoordinatePlanePoint;
  pointB?: CoordinatePlanePoint;
  /** Draggable and keyboard-movable points. */
  interactive?: boolean;
  showDistance?: boolean;
  showMidpoint?: boolean;
  showSlope?: boolean;
  /** Draw the line through A and B, extended to the edges of the plane. */
  showLine?: boolean;
  /** Mark and label where that line crosses each axis. Requires `showLine`. */
  showIntercepts?: boolean;
  highlightQuadrants?: boolean;
}

const SIZE = 320;
const PADDING = 26;

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function CoordinatePlane({
  min = -6,
  max = 6,
  pointA: initialA,
  pointB: initialB,
  interactive = false,
  showDistance = false,
  showMidpoint = false,
  showSlope = false,
  showLine = false,
  showIntercepts = false,
  highlightQuadrants = false,
}: CoordinatePlaneProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pointA, setPointA] = useState(initialA ?? { x: -2, y: -2, label: 'A' });
  const [pointB, setPointB] = useState(initialB);
  const [dragging, setDragging] = useState<'A' | 'B' | null>(null);

  const domain = max - min;
  const scale = (SIZE - 2 * PADDING) / domain;
  const labelStep = domain > 10 ? 2 : 1;

  const toPixel = (x: number, y: number) => ({
    px: PADDING + (x - min) * scale,
    py: PADDING + (max - y) * scale,
  });

  const toPlane = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const relX = (clientX - rect.left) / rect.width;
    const relY = (clientY - rect.top) / rect.height;
    const x = min + relX * domain;
    const y = max - relY * domain;
    return {
      x: Math.max(min, Math.min(max, Math.round(x))),
      y: Math.max(min, Math.min(max, Math.round(y))),
    };
  };

  const movePoint = (which: 'A' | 'B', next: { x: number; y: number }) => {
    if (which === 'A') setPointA((p) => ({ ...p, ...next }));
    else setPointB((p) => (p ? { ...p, ...next } : p));
  };

  const handlePointerDown = (which: 'A' | 'B') => (event: PointerEvent<SVGCircleElement>) => {
    if (!interactive) return;
    // Capture is a best-effort enhancement (keeps tracking the pointer if it
    // leaves the circle mid-drag) — some pointer sources reject it, and that
    // must not block the drag itself from starting.
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Ignored — dragging still works via the SVG's own pointermove/pointerup handlers.
    }
    setDragging(which);
  };

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (!dragging) return;
    movePoint(dragging, toPlane(event.clientX, event.clientY));
  };

  const handlePointerUp = () => setDragging(null);

  const handleKeyDown = (which: 'A' | 'B') => (event: KeyboardEvent<SVGCircleElement>) => {
    if (!interactive) return;
    const current = which === 'A' ? pointA : pointB;
    if (!current) return;
    const delta: Record<string, { x: number; y: number }> = {
      ArrowUp: { x: 0, y: 1 },
      ArrowDown: { x: 0, y: -1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
    };
    const d = delta[event.key];
    if (!d) return;
    event.preventDefault();
    movePoint(which, {
      x: Math.max(min, Math.min(max, current.x + d.x)),
      y: Math.max(min, Math.min(max, current.y + d.y)),
    });
  };

  const gridLines = [];
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) {
    gridLines.push(i);
  }

  const originPixel = toPixel(0, 0);
  const hasB = Boolean(pointB);
  const dx = hasB ? pointB!.x - pointA.x : 0;
  const dy = hasB ? pointB!.y - pointA.y : 0;
  const distance = hasB ? Math.sqrt(dx * dx + dy * dy) : 0;
  const midpoint = hasB ? { x: (pointA.x + pointB!.x) / 2, y: (pointA.y + pointB!.y) / 2 } : null;
  const slope = hasB && dx !== 0 ? dy / dx : null;
  const slopeUndefined = hasB && dx === 0;

  // Line through A and B, extended to the plane's horizontal edges (or the
  // vertical edges, for a vertical line), plus where it crosses each axis.
  let lineEndpoints: { x1: number; y1: number; x2: number; y2: number } | null = null;
  let xIntercept: number | null = null;
  let yIntercept: number | null = null;
  if (showLine && hasB) {
    if (dx === 0) {
      lineEndpoints = { x1: pointA.x, y1: min, x2: pointA.x, y2: max };
      xIntercept = pointA.x;
    } else {
      const m = dy / dx;
      const c = pointA.y - m * pointA.x;
      lineEndpoints = { x1: min, y1: m * min + c, x2: max, y2: m * max + c };
      yIntercept = c;
      if (m !== 0) xIntercept = -c / m;
    }
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label="Coordinate plane diagram"
      className="w-full max-w-sm touch-none overflow-hidden select-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {highlightQuadrants ? (
        <>
          <rect x={originPixel.px} y={PADDING} width={SIZE - PADDING - originPixel.px} height={originPixel.py - PADDING} fill="var(--brand-soft)" opacity={0.5} />
          <rect x={PADDING} y={PADDING} width={originPixel.px - PADDING} height={originPixel.py - PADDING} fill="var(--accent-soft)" opacity={0.5} />
          <rect x={PADDING} y={originPixel.py} width={originPixel.px - PADDING} height={SIZE - PADDING - originPixel.py} fill="var(--brand-soft)" opacity={0.5} />
          <rect x={originPixel.px} y={originPixel.py} width={SIZE - PADDING - originPixel.px} height={SIZE - PADDING - originPixel.py} fill="var(--accent-soft)" opacity={0.5} />
          <text x={SIZE - PADDING - 4} y={PADDING + 12} textAnchor="end" className="fill-foreground-muted text-[9px]">I</text>
          <text x={PADDING + 4} y={PADDING + 12} textAnchor="start" className="fill-foreground-muted text-[9px]">II</text>
          <text x={PADDING + 4} y={SIZE - PADDING - 4} textAnchor="start" className="fill-foreground-muted text-[9px]">III</text>
          <text x={SIZE - PADDING - 4} y={SIZE - PADDING - 4} textAnchor="end" className="fill-foreground-muted text-[9px]">IV</text>
        </>
      ) : null}

      {gridLines.map((i) => {
        const p = toPixel(i, 0);
        const isAxis = i === 0;
        return (
          <g key={`grid-${i}`}>
            <line x1={p.px} y1={PADDING} x2={p.px} y2={SIZE - PADDING} stroke="var(--border)" strokeWidth={isAxis ? 1.5 : 1} opacity={isAxis ? 1 : 0.6} />
            <line x1={PADDING} y1={p.py} x2={SIZE - PADDING} y2={p.py} stroke="var(--border)" strokeWidth={isAxis ? 1.5 : 1} opacity={isAxis ? 1 : 0.6} />
            {i !== 0 && i % labelStep === 0 ? (
              <>
                <text x={p.px} y={originPixel.py + 12} textAnchor="middle" className="fill-foreground-muted text-[8px]">{i}</text>
                <text x={originPixel.px - 6} y={p.py + 3} textAnchor="end" className="fill-foreground-muted text-[8px]">{i}</text>
              </>
            ) : null}
          </g>
        );
      })}
      <text x={originPixel.px - 6} y={originPixel.py + 12} textAnchor="end" className="fill-foreground-muted text-[8px]">0</text>

      {lineEndpoints ? (
        <line
          x1={toPixel(lineEndpoints.x1, lineEndpoints.y1).px}
          y1={toPixel(lineEndpoints.x1, lineEndpoints.y1).py}
          x2={toPixel(lineEndpoints.x2, lineEndpoints.y2).px}
          y2={toPixel(lineEndpoints.x2, lineEndpoints.y2).py}
          stroke="var(--accent)"
          strokeWidth={2}
        />
      ) : null}

      {!showLine && hasB ? (
        <line
          x1={toPixel(pointA.x, pointA.y).px}
          y1={toPixel(pointA.x, pointA.y).py}
          x2={toPixel(pointB!.x, pointB!.y).px}
          y2={toPixel(pointB!.x, pointB!.y).py}
          stroke="var(--brand)"
          strokeWidth={2}
          strokeDasharray="4 3"
        />
      ) : null}

      {showIntercepts && xIntercept !== null && xIntercept >= min && xIntercept <= max ? (
        <circle cx={toPixel(xIntercept, 0).px} cy={toPixel(xIntercept, 0).py} r={4} fill="var(--warning)" />
      ) : null}
      {showIntercepts && yIntercept !== null && yIntercept >= min && yIntercept <= max ? (
        <circle cx={toPixel(0, yIntercept).px} cy={toPixel(0, yIntercept).py} r={4} fill="var(--warning)" />
      ) : null}

      {showMidpoint && midpoint ? (
        <>
          <circle cx={toPixel(midpoint.x, midpoint.y).px} cy={toPixel(midpoint.x, midpoint.y).py} r={4} fill="var(--warning)" />
          <text x={toPixel(midpoint.x, midpoint.y).px} y={toPixel(midpoint.x, midpoint.y).py - 8} textAnchor="middle" className="fill-warning text-[9px] font-medium">
            M({round1(midpoint.x)}, {round1(midpoint.y)})
          </text>
        </>
      ) : null}

      {([['A', pointA], ['B', pointB]] as const).map(([which, point]) => {
        if (!point) return null;
        const p = toPixel(point.x, point.y);
        return (
          <g key={which}>
            <circle
              cx={p.px}
              cy={p.py}
              r={7}
              fill="var(--brand)"
              stroke="var(--surface)"
              strokeWidth={2}
              tabIndex={interactive ? 0 : -1}
              role={interactive ? 'slider' : undefined}
              aria-label={interactive ? `Point ${which}, at ${round1(point.x)}, ${round1(point.y)}. Use arrow keys to move.` : undefined}
              aria-valuetext={interactive ? `${round1(point.x)}, ${round1(point.y)}` : undefined}
              className={interactive ? 'cursor-grab focus-visible:outline-2 focus-visible:outline-offset-2' : undefined}
              onPointerDown={handlePointerDown(which)}
              onKeyDown={handleKeyDown(which)}
            />
            <text x={p.px} y={p.py - 12} textAnchor="middle" className="fill-foreground text-[10px] font-medium">
              {point.label ?? which} ({round1(point.x)}, {round1(point.y)})
            </text>
          </g>
        );
      })}

      {(showDistance || showSlope) && hasB ? (
        <foreignObject x={PADDING} y={2} width={SIZE - 2 * PADDING} height={20}>
          <div className="flex justify-center gap-3 text-[10px] font-medium text-foreground-muted">
            {showDistance ? <span>d = {round1(distance)}</span> : null}
            {showSlope ? <span>m = {slopeUndefined ? 'undefined' : round1(slope ?? 0)}</span> : null}
          </div>
        </foreignObject>
      ) : null}
    </svg>
  );
}
