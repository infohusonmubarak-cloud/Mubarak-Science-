// Static, data-driven geometry figure — labelled triangles, circles, chords
// and angle marks for Chapters 8-10 (Similarity, Circles, Trigonometry).
// Deliberately generic (points/segments/arcs as plain data) rather than a
// fixed set of named "kinds", so every concept's figure is just content —
// no new component needed for the next triangle or circle diagram.

export interface GDPoint {
  x: number;
  y: number;
  label?: string;
  /** Label offset in local units, away from the point (defaults to a small outward nudge). */
  labelDx?: number;
  labelDy?: number;
  hidden?: boolean;
}

export interface GDSegment {
  from: [number, number];
  to: [number, number];
  dashed?: boolean;
  label?: string;
  labelDx?: number;
  labelDy?: number;
  /** Draw an arrowhead at the 'to' end — for vectors (Chapter 9, Math B-Level). */
  arrow?: boolean;
}

export interface GDAngleMark {
  /** Vertex of the angle. */
  at: [number, number];
  /** The two points forming the angle's rays. */
  from: [number, number];
  to: [number, number];
  label?: string;
  rightAngle?: boolean;
  radius?: number;
}

export interface GDCircle {
  cx: number;
  cy: number;
  r: number;
  dashed?: boolean;
}

export interface GDArc {
  cx: number;
  cy: number;
  r: number;
  /** Degrees, measured counterclockwise from the positive x-axis in data space. */
  startDeg: number;
  endDeg: number;
  label?: string;
  labelRadiusScale?: number;
}

export interface GDPolygon {
  points: [number, number][];
  fill?: string;
}

export interface GeometryDiagramProps {
  points?: GDPoint[];
  segments?: GDSegment[];
  angleMarks?: GDAngleMark[];
  circles?: GDCircle[];
  arcs?: GDArc[];
  polygons?: GDPolygon[];
}

const SIZE = 320;
const PADDING = 34;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function GeometryDiagram({
  points = [],
  segments = [],
  angleMarks = [],
  circles = [],
  arcs = [],
  polygons = [],
}: GeometryDiagramProps) {
  // Auto-fit: gather every coordinate that will actually be drawn (points,
  // segment endpoints, circle/arc extents) into one bounding box, then
  // scale+flip (data y-up → screen y-down) so authors can write plain,
  // intuitive geometry coordinates without hand-computing pixel positions.
  const xs: number[] = [];
  const ys: number[] = [];
  const addXY = (x: number, y: number) => { xs.push(x); ys.push(y); };
  points.forEach((p) => addXY(p.x, p.y));
  segments.forEach((s) => { addXY(s.from[0], s.from[1]); addXY(s.to[0], s.to[1]); });
  circles.forEach((c) => { addXY(c.cx - c.r, c.cy - c.r); addXY(c.cx + c.r, c.cy + c.r); });
  arcs.forEach((a) => { addXY(a.cx - a.r, a.cy - a.r); addXY(a.cx + a.r, a.cy + a.r); });
  polygons.forEach((poly) => poly.points.forEach(([x, y]) => addXY(x, y)));

  const minX = xs.length ? Math.min(...xs) : 0;
  const maxX = xs.length ? Math.max(...xs) : 1;
  const minY = ys.length ? Math.min(...ys) : 0;
  const maxY = ys.length ? Math.max(...ys) : 1;
  const spanX = Math.max(maxX - minX, 0.001);
  const spanY = Math.max(maxY - minY, 0.001);
  const drawable = SIZE - 2 * PADDING;
  const scale = Math.min(drawable / spanX, drawable / spanY);
  const offsetX = PADDING + (drawable - spanX * scale) / 2;
  const offsetY = PADDING + (drawable - spanY * scale) / 2;

  const toPixel = (x: number, y: number) => ({
    px: offsetX + (x - minX) * scale,
    py: SIZE - offsetY - (y - minY) * scale,
  });

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="Geometry diagram" className="w-full max-w-sm select-none">
      {polygons.map((poly, i) => (
        <polygon
          key={`poly-${i}`}
          points={poly.points.map(([x, y]) => { const p = toPixel(x, y); return `${p.px},${p.py}`; }).join(' ')}
          fill={poly.fill ?? 'var(--brand-soft)'}
          opacity={0.5}
        />
      ))}

      {circles.map((c, i) => {
        const center = toPixel(c.cx, c.cy);
        return (
          <circle
            key={`circle-${i}`}
            cx={center.px}
            cy={center.py}
            r={c.r * scale}
            fill="none"
            stroke="var(--border)"
            strokeWidth={1.5}
            strokeDasharray={c.dashed ? '4 3' : undefined}
          />
        );
      })}

      {arcs.map((arc, i) => {
        const center = toPixel(arc.cx, arc.cy);
        const r = arc.r * scale;
        // Flip angle sign: data uses standard (y-up, counterclockwise)
        // convention, screen space is y-down, so counterclockwise in data
        // is clockwise on screen — negate before the trig.
        const start = { px: center.px + r * Math.cos(-toRad(arc.startDeg)), py: center.py + r * Math.sin(-toRad(arc.startDeg)) };
        const end = { px: center.px + r * Math.cos(-toRad(arc.endDeg)), py: center.py + r * Math.sin(-toRad(arc.endDeg)) };
        const sweep = ((arc.endDeg - arc.startDeg) % 360 + 360) % 360;
        const largeArc = sweep > 180 ? 1 : 0;
        const midDeg = arc.startDeg + sweep / 2;
        const labelR = r * (arc.labelRadiusScale ?? 1.35);
        const labelPos = { px: center.px + labelR * Math.cos(-toRad(midDeg)), py: center.py + labelR * Math.sin(-toRad(midDeg)) };
        return (
          <g key={`arc-${i}`}>
            <path
              d={`M ${start.px} ${start.py} A ${r} ${r} 0 ${largeArc} 0 ${end.px} ${end.py}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1.5}
            />
            {arc.label ? (
              <text x={labelPos.px} y={labelPos.py} textAnchor="middle" className="fill-accent text-[9px] font-medium">{arc.label}</text>
            ) : null}
          </g>
        );
      })}

      {segments.map((s, i) => {
        const from = toPixel(s.from[0], s.from[1]);
        const to = toPixel(s.to[0], s.to[1]);
        const midX = (from.px + to.px) / 2 + (s.labelDx ?? 0);
        const midY = (from.py + to.py) / 2 + (s.labelDy ?? 0);
        const angle = Math.atan2(to.py - from.py, to.px - from.px);
        const headLen = 9;
        const headSpread = 0.45;
        const arrowP1 = { px: to.px - headLen * Math.cos(angle - headSpread), py: to.py - headLen * Math.sin(angle - headSpread) };
        const arrowP2 = { px: to.px - headLen * Math.cos(angle + headSpread), py: to.py - headLen * Math.sin(angle + headSpread) };
        return (
          <g key={`seg-${i}`}>
            <line
              x1={from.px} y1={from.py} x2={to.px} y2={to.py}
              stroke="var(--brand)" strokeWidth={2}
              strokeDasharray={s.dashed ? '4 3' : undefined}
            />
            {s.arrow ? (
              <polygon
                points={`${to.px},${to.py} ${arrowP1.px},${arrowP1.py} ${arrowP2.px},${arrowP2.py}`}
                fill="var(--brand)"
              />
            ) : null}
            {s.label ? (
              <text x={midX} y={midY} textAnchor="middle" className="fill-foreground text-[9px] font-medium">{s.label}</text>
            ) : null}
          </g>
        );
      })}

      {angleMarks.map((mark, i) => {
        const at = toPixel(mark.at[0], mark.at[1]);
        const radius = (mark.radius ?? 0.6) * scale;
        const angleTo = (target: [number, number]) => Math.atan2(-(toPixel(target[0], target[1]).py - at.py), toPixel(target[0], target[1]).px - at.px);
        const a1 = angleTo(mark.from);
        const a2 = angleTo(mark.to);

        if (mark.rightAngle) {
          const size = radius * 0.7;
          const p1 = { px: at.px + size * Math.cos(a1), py: at.py - size * Math.sin(a1) };
          const p2 = { px: at.px + size * Math.cos(a2), py: at.py - size * Math.sin(a2) };
          const p3 = { px: p1.px + (p2.px - at.px), py: p1.py + (p2.py - at.py) };
          return (
            <polyline
              key={`angle-${i}`}
              points={`${p1.px},${p1.py} ${p3.px},${p3.py} ${p2.px},${p2.py}`}
              fill="none"
              stroke="var(--foreground-muted)"
              strokeWidth={1.2}
            />
          );
        }

        let sweep = a2 - a1;
        while (sweep <= -Math.PI) sweep += 2 * Math.PI;
        while (sweep > Math.PI) sweep -= 2 * Math.PI;
        const startPx = { px: at.px + radius * Math.cos(a1), py: at.py - radius * Math.sin(a1) };
        const endPx = { px: at.px + radius * Math.cos(a1 + sweep), py: at.py - radius * Math.sin(a1 + sweep) };
        const largeArc = Math.abs(sweep) > Math.PI ? 1 : 0;
        const sweepFlag = sweep > 0 ? 0 : 1;
        const midAngle = a1 + sweep / 2;
        const labelR = radius * 1.5;
        const labelPos = { px: at.px + labelR * Math.cos(midAngle), py: at.py - labelR * Math.sin(midAngle) };
        return (
          <g key={`angle-${i}`}>
            <path
              d={`M ${startPx.px} ${startPx.py} A ${radius} ${radius} 0 ${largeArc} ${sweepFlag} ${endPx.px} ${endPx.py}`}
              fill="none"
              stroke="var(--warning)"
              strokeWidth={1.5}
            />
            {mark.label ? (
              <text x={labelPos.px} y={labelPos.py} textAnchor="middle" className="fill-warning text-[9px] font-medium">{mark.label}</text>
            ) : null}
          </g>
        );
      })}

      {points.filter((p) => !p.hidden).map((p, i) => {
        const px = toPixel(p.x, p.y);
        return (
          <g key={`pt-${i}`}>
            <circle cx={px.px} cy={px.py} r={3} fill="var(--foreground)" />
            {p.label ? (
              <text
                x={px.px + (p.labelDx ?? 8)}
                y={px.py + (p.labelDy ?? -8)}
                textAnchor="middle"
                className="fill-foreground text-[10px] font-medium"
              >
                {p.label}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
