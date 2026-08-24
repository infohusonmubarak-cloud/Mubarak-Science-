// Static curve grapher for quadratic and absolute-value functions. Not a
// duplicate of CoordinatePlane (which only ever draws two points and the
// straight line through them) — this samples an actual function y = f(x)
// and draws it as a path, plus optionally marks the vertex, axis of
// symmetry, roots, and y-intercept that Chapters 5 and 6 build worked
// examples around.

export interface FunctionGraphProps {
  min?: number;
  max?: number;
  kind: 'quadratic' | 'absolute-value';
  /** Quadratic: y = a·x² + b·x + c. Absolute value: y = a·|x − h| + k (a defaults to 1). */
  a?: number;
  b?: number;
  c?: number;
  h?: number;
  k?: number;
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

export function FunctionGraph({
  min = -6,
  max = 6,
  kind,
  a = 1,
  b = 0,
  c = 0,
  h = 0,
  k = 0,
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

  // Sample the curve, clamping y so a steep branch doesn't shoot far past
  // the plane before it gets clipped — that would distort the visible slope.
  const clampY = max + domain; // generous headroom, still clipped by clipPath below
  const clampYLow = min - domain;
  const samples = 80;
  const pathPoints: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const x = min + (domain * i) / samples;
    let y = evaluate(kind, x, a, b, c, h, k);
    y = Math.max(clampYLow, Math.min(clampY, y));
    const p = toPixel(x, y);
    pathPoints.push(`${i === 0 ? 'M' : 'L'} ${p.px} ${p.py}`);
  }

  const vertexX = kind === 'quadratic' ? -b / (2 * a) : h;
  const vertexY = evaluate(kind, vertexX, a, b, c, h, k);

  let roots: number[] = [];
  if (kind === 'quadratic') {
    const disc = b * b - 4 * a * c;
    if (disc > 0) {
      const sq = Math.sqrt(disc);
      roots = [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
    } else if (disc === 0) {
      roots = [-b / (2 * a)];
    }
  } else {
    const dist = -k / a;
    if (dist > 0) roots = [h - dist, h + dist];
    else if (dist === 0) roots = [h];
  }

  const yIntercept = evaluate(kind, 0, a, b, c, h, k);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={kind === 'quadratic' ? 'Graph of a quadratic function' : 'Graph of an absolute value function'}
      className="w-full max-w-sm select-none"
    >
      <defs>
        <clipPath id={`fg-clip-${kind}-${a}-${b}-${c}-${h}-${k}`}>
          <rect x={PADDING} y={PADDING} width={SIZE - 2 * PADDING} height={SIZE - 2 * PADDING} />
        </clipPath>
      </defs>

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

      {showAxisOfSymmetry && vertexX >= min && vertexX <= max ? (
        <line
          x1={toPixel(vertexX, min).px} y1={toPixel(vertexX, min).py}
          x2={toPixel(vertexX, max).px} y2={toPixel(vertexX, max).py}
          stroke="var(--accent)" strokeWidth={1} strokeDasharray="3 3"
        />
      ) : null}

      <path
        d={pathPoints.join(' ')}
        fill="none"
        stroke="var(--brand)"
        strokeWidth={2.5}
        clipPath={`url(#fg-clip-${kind}-${a}-${b}-${c}-${h}-${k})`}
      />

      {showRoots
        ? roots
            .filter((r) => r >= min && r <= max)
            .map((r) => (
              <circle key={`root-${r}`} cx={toPixel(r, 0).px} cy={toPixel(r, 0).py} r={4} fill="var(--warning)" />
            ))
        : null}

      {showYIntercept && yIntercept >= min && yIntercept <= max ? (
        <circle cx={toPixel(0, yIntercept).px} cy={toPixel(0, yIntercept).py} r={4} fill="var(--warning)" />
      ) : null}

      {showVertex && vertexX >= min && vertexX <= max && vertexY >= min && vertexY <= max ? (
        <>
          <circle cx={toPixel(vertexX, vertexY).px} cy={toPixel(vertexX, vertexY).py} r={4.5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={1.5} />
          <text x={toPixel(vertexX, vertexY).px} y={toPixel(vertexX, vertexY).py - 9} textAnchor="middle" className="fill-accent text-[9px] font-medium">
            ({round1(vertexX)}, {round1(vertexY)})
          </text>
        </>
      ) : null}
    </svg>
  );
}
