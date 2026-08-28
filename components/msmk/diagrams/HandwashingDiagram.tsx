const SIZE_W = 280;
const SIZE_H = 220;

/** Schematic hands being scrubbed with soap under running water, with a 20-second timer callout. */
export function HandwashingDiagram() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
        role="img"
        aria-label="Washing hands with soap under running water for at least 20 seconds"
        className="w-full max-w-xs"
      >
        {/* Tap */}
        <rect x={120} y={10} width={16} height={22} rx={3} fill="var(--foreground)" opacity={0.6} />
        {/* Water stream */}
        <line x1={128} y1={32} x2={128} y2={80} stroke="var(--accent)" strokeWidth={4} strokeLinecap="round" opacity={0.6} className="msmk-cpr-pulse" style={{ transformOrigin: '128px 55px' }} />

        {/* Hands (two overlapping ovals, rubbing) */}
        <ellipse cx={110} cy={130} rx={48} ry={26} fill="var(--msmk-childcare-soft)" stroke="var(--msmk-childcare)" strokeWidth={2.5} transform="rotate(-12 110 130)" />
        <ellipse cx={150} cy={130} rx={48} ry={26} fill="var(--msmk-childcare-soft)" stroke="var(--msmk-childcare)" strokeWidth={2.5} transform="rotate(12 150 130)" />

        {/* Soap bubbles */}
        {[[80, 105], [140, 100], [175, 118], [100, 155], [160, 150]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={5} fill="var(--surface)" stroke="var(--accent)" strokeWidth={1.5} opacity={0.9} />
        ))}

        {/* Timer callout */}
        <g>
          <circle cx={220} cy={175} r={26} fill="var(--surface)" stroke="var(--msmk-childcare)" strokeWidth={2.5} />
          <text x={220} y={172} textAnchor="middle" fontSize={14} fontWeight="bold" fill="var(--msmk-childcare)">
            20
          </text>
          <text x={220} y={185} textAnchor="middle" fontSize={8} fill="var(--foreground-muted)">
            seconds
          </text>
        </g>
      </svg>
    </div>
  );
}
