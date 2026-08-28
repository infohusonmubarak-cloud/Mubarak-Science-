interface Label {
  x: number;
  y: number;
  text: string;
  anchor?: 'start' | 'middle' | 'end';
}

const SIZE_W = 360;
const SIZE_H = 240;

/**
 * Schematic side-on view of the recovery position — a person lying on
 * their side, top leg bent for support, top arm bent to hold the head
 * tilted back so the airway stays clear. Clarity over anatomical realism,
 * matching the style of the Science app's CellDiagram/MoleculeDiagram.
 */
export function RecoveryPositionDiagram() {
  const labels: Label[] = [
    { x: 60, y: 32, text: 'Head tilted back — keeps airway open', anchor: 'middle' },
    { x: 300, y: 210, text: 'Bottom arm out in front, for balance', anchor: 'end' },
    { x: 210, y: 40, text: 'Top hand under cheek', anchor: 'middle' },
    { x: 150, y: 220, text: 'Top leg bent — stops rolling forward', anchor: 'middle' },
  ];

  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      role="img"
      aria-label="Recovery position: person on their side, head tilted back, top leg bent for support"
      className="w-full max-w-md"
    >
      {/* Ground line */}
      <line x1={20} y1={205} x2={340} y2={205} stroke="var(--border)" strokeWidth={3} strokeLinecap="round" />

      {/* Bottom (straight) leg */}
      <path d="M 130 175 L 60 195" stroke="var(--msmk-firstaid)" strokeWidth={14} strokeLinecap="round" opacity={0.55} />
      {/* Bottom arm, out in front for balance */}
      <path d="M 150 130 L 260 170" stroke="var(--msmk-firstaid)" strokeWidth={12} strokeLinecap="round" opacity={0.55} />

      {/* Torso */}
      <ellipse cx={160} cy={135} rx={80} ry={34} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} />

      {/* Top leg — bent forward for support */}
      <path
        d="M 130 172 L 175 205 L 150 218"
        fill="none"
        stroke="var(--msmk-firstaid)"
        strokeWidth={16}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top arm — bent, hand supporting the cheek */}
      <path
        d="M 90 118 L 60 90 L 68 60"
        fill="none"
        stroke="var(--msmk-firstaid)"
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Head, tilted back */}
      <circle cx={60} cy={70} r={26} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} />

      {/* Airway direction arrow */}
      <path d="M 40 48 Q 20 30, 8 34" fill="none" stroke="var(--accent)" strokeWidth={2.5} markerEnd="url(#msmk-arrow)" />

      <defs>
        <marker id="msmk-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
        </marker>
      </defs>

      {labels.map((label) => (
        <text
          key={label.text}
          x={label.x}
          y={label.y}
          textAnchor={label.anchor ?? 'start'}
          fontSize={11}
          fill="var(--foreground-muted)"
        >
          {label.text}
        </text>
      ))}
    </svg>
  );
}
