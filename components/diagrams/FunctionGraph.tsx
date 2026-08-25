// Static curve grapher for quadratic, absolute-value, and arbitrary
// ('custom') functions. Not a duplicate of CoordinatePlane (which only
// ever draws two points and the straight line through them) — this
// samples an actual function y = f(x) and draws it as a path, plus
// optionally marks the vertex, axis of symmetry, roots, y-intercept, or
// (for 'custom') arbitrary labelled points and a second curve (e.g. a
// tangent line at a point, for Chapter 11's differentiation concepts).

export interface FunctionGraphMarkPoint {
  x: number;
  y: number;
  label?: string;
}

export interface FunctionGraphProps {
  min?: number;
  max?: number;
  kind: 'quadratic' | 'absolute-value' | 'custom';
  /** Quadratic: y = a·x² + b·x + c. Absolute value: y = a·|x − h| + k (a defaults to 1). */
  a?: number;
  b?: number;
  c?: number;
  h?: number;
  k?: number;
  /** 'custom' kind: the function to plot. Return NaN at points outside its domain (e.g. sqrt of a negative) — the curve breaks there instead of drawing a false connecting line. */
  fn?: (x: number) => number;
  /** 'custom' kind only: an optional second curve (e.g. a tangent line), drawn dashed in the accent color. */
  fn2?: (x: number) => number;
  /** 'custom' kind only: arbitrary labelled points (e.g. a point of tangency), in place of the vertex/root logic used by the other two kinds. */
  markPoints?: FunctionGraphMarkPoint[];
  showVertex?: boolean;
  showAxisOfSymmetry?: boolean;
  showRoots?: boolean;
  showYIntercept?: boolean;
  xLabel?: string;
  yLabel?: string;
}

const SIZE = 320;
const PADDING = 26;

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function evaluate(kind: 'quadratic' | 'absolute-value', x: number, a: number, b: number, c: number, h: number, k: number): number {
  return kind === 'quadratic' ? a * x * x + b * x + c : a * Math.abs(x - h) + k;
}

/** Samples a function into one-or-more SVG subpaths, breaking (instead of
 * connecting with a false line) wherever the function is NaN or leaves a
 * generous plotting range — the correct behavior for asymptotes like 1/x. */
function samplePath(
  fn: (x: number) => number,
  min: number,
  max: number,
  toPixel: (x: number, y: number) => { px: number; py: number },
  samples = 160
): string {
  const domain = max - min;
  const bound = domain * 3;
  let pathPoints = '';
  let drawing = false;
  for (let i = 0; i <= samples; i++) {
    const x = min + (domain * i) / samples;
    const y = fn(x);
    const valid = Number.isFinite(y) && Math.abs(y) <= bound;
    if (!valid) {
      drawing = false;
      continue;
    }
    const p = toPixel(x, y);
    pathPoints += `${drawing ? 'L' : 'M'} ${p.px} ${p.py} `;
    drawing = true;
  }
  return pathPoints.trim();
}

export function FunctionGraph({
  min = -6,
  max = 6,
  kind,
  a = 1,
  b = 0,
  c = 0,
  h = 0,
  k = 0,
  fn,
  fn2,
  markPoints = [],
  showVertex = true,
  showAxisOfSymmetry = false,
  showRoots = false,
  showYIntercept = false,
  xLabel = 'x',
  yLabel = 'y',
}: FunctionGraphProps) {
  const domain = max - min;
  const scale = (SIZE - 2 * PADDING) / domain;
  const labelStep = domain > 10 ? 2 : 1;

  const toPixel = (x: number, y: number) => ({
    px: PADDING + (x - min) * scale,
    py: PADDING + (max - y) * scale,
  });

  const gridLines: number[] = [];
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) gridLines.push(i);
  const originPixel = toPixel(0, 0);

  const isCustom = kind === 'custom';
  const builtIn = (x: number) => evaluate(kind === 'custom' ? 'quadratic' : kind, x, a, b, c, h, k);
  const primaryFn = isCustom ? (fn ?? (() => NaN)) : builtIn;
  const pathD = samplePath(primaryFn, min, max, toPixel);
  const fn2PathD = isCustom && fn2 ? samplePath(fn2, min, max, toPixel, 40) : null;

  const vertexX = kind === 'quadratic' ? -b / (2 * a) : h;
  const vertexY = isCustom ? NaN : evaluate(kind, vertexX, a, b, c, h, k);

  let roots: number[] = [];
  if (kind === 'quadratic') {
    const disc = b * b - 4 * a * c;
    if (disc > 0) {
      const sq = Math.sqrt(disc);
      roots = [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
    } else if (disc === 0) {
      roots = [-b / (2 * a)];
    }
  } else if (kind === 'absolute-value') {
    const dist = -k / a;
    if (dist > 0) roots = [h - dist, h + dist];
    else if (dist === 0) roots = [h];
  }

  const yIntercept = isCustom ? primaryFn(0) : evaluate(kind, 0, a, b, c, h, k);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={kind === 'quadratic' ? 'Graph of a quadratic function' : kind === 'absolute-value' ? 'Graph of an absolute value function' : 'Graph of a function'}
      className="w-full max-w-sm select-none"
    >
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
      <text x={SIZE - PADDING} y={originPixel.py - 6} textAnchor="end" className="fill-foreground-muted text-[9px] font-medium">{xLabel}</text>
      <text x={originPixel.px + 8} y={PADDING + 2} textAnchor="start" className="fill-foreground-muted text-[9px] font-medium">{yLabel}</text>

      {showAxisOfSymmetry && !isCustom && vertexX >= min && vertexX <= max ? (
        <line
          x1={toPixel(vertexX, min).px} y1={toPixel(vertexX, min).py}
          x2={toPixel(vertexX, max).px} y2={toPixel(vertexX, max).py}
          stroke="var(--accent)" strokeWidth={1} strokeDasharray="3 3"
        />
      ) : null}

      {fn2PathD ? <path d={fn2PathD} fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeDasharray="4 3" /> : null}

      <path d={pathD} fill="none" stroke="var(--brand)" strokeWidth={2.5} />

      {showRoots && !isCustom
        ? roots
            .filter((r) => r >= min && r <= max)
            .map((r) => (
              <circle key={`root-${r}`} cx={toPixel(r, 0).px} cy={toPixel(r, 0).py} r={4} fill="var(--warning)" />
            ))
        : null}

      {showYIntercept && Number.isFinite(yIntercept) && yIntercept >= min && yIntercept <= max ? (
        <circle cx={toPixel(0, yIntercept).px} cy={toPixel(0, yIntercept).py} r={4} fill="var(--warning)" />
      ) : null}

      {showVertex && !isCustom && vertexX >= min && vertexX <= max && vertexY >= min && vertexY <= max ? (
        <>
          <circle cx={toPixel(vertexX, vertexY).px} cy={toPixel(vertexX, vertexY).py} r={4.5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={1.5} />
          <text x={toPixel(vertexX, vertexY).px} y={toPixel(vertexX, vertexY).py - 9} textAnchor="middle" className="fill-accent text-[9px] font-medium">
            ({round1(vertexX)}, {round1(vertexY)})
          </text>
        </>
      ) : null}

      {markPoints.map((mp, i) => {
        if (mp.x < min || mp.x > max || mp.y < min || mp.y > max) return null;
        const p = toPixel(mp.x, mp.y);
        return (
          <g key={`mark-${i}`}>
            <circle cx={p.px} cy={p.py} r={4.5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={1.5} />
            {mp.label ? (
              <text x={p.px} y={p.py - 9} textAnchor="middle" className="fill-accent text-[9px] font-medium">{mp.label}</text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
