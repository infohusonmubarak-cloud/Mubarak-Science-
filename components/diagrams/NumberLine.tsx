export interface NumberLinePoint {
  value: number;
  label?: string;
}

export interface NumberLineProps {
  min?: number;
  max?: number;
  points?: NumberLinePoint[];
}

const WIDTH = 320;
const HEIGHT = 60;
const PADDING = 20;

export function NumberLine({ min = -6, max = 6, points = [] }: NumberLineProps) {
  const domain = max - min;
  const scale = (WIDTH - 2 * PADDING) / domain;
  const toX = (value: number) => PADDING + (value - min) * scale;
  const y = HEIGHT / 2;

  const ticks = [];
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) ticks.push(i);

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="Number line" className="w-full max-w-sm">
      <line x1={PADDING} y1={y} x2={WIDTH - PADDING} y2={y} stroke="var(--border)" strokeWidth={1.5} />
      {ticks.map((i) => (
        <g key={i}>
          <line x1={toX(i)} y1={y - 4} x2={toX(i)} y2={y + 4} stroke="var(--border)" strokeWidth={1} />
          <text x={toX(i)} y={y + 16} textAnchor="middle" className="fill-foreground-muted text-[8px]">{i}</text>
        </g>
      ))}
      {points.map((point) => (
        <g key={point.value}>
          <circle cx={toX(point.value)} cy={y} r={5} fill="var(--brand)" stroke="var(--surface)" strokeWidth={1.5} />
          {point.label ? (
            <text x={toX(point.value)} y={y - 10} textAnchor="middle" className="fill-foreground text-[9px] font-medium">
              {point.label}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}
