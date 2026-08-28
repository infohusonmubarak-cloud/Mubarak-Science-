const SIZE_W = 320;
const SIZE_H = 180;

/** Three simple child poses showing gross-motor movement: reaching, balancing, jumping. */
export function PhysicalActivityDiagram() {
  const poses = [
    { cx: 60, label: 'Reach' },
    { cx: 160, label: 'Balance' },
    { cx: 260, label: 'Jump' },
  ];

  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      role="img"
      aria-label="Children practicing reaching, balancing, and jumping movements"
      className="w-full max-w-sm"
    >
      <line x1={10} y1={150} x2={310} y2={150} stroke="var(--border)" strokeWidth={3} strokeLinecap="round" />

      {/* Reach pose */}
      <g stroke="var(--msmk-childphysical)" strokeWidth={7} strokeLinecap="round" fill="none">
        <circle cx={60} cy={55} r={14} fill="var(--msmk-childphysical-soft)" strokeWidth={3} />
        <line x1={60} y1={69} x2={60} y2={110} />
        <path d="M 60 80 L 30 50" />
        <path d="M 60 80 L 90 55" />
        <path d="M 60 110 L 45 150" />
        <path d="M 60 110 L 75 150" />
      </g>

      {/* Balance pose (one leg up) */}
      <g stroke="var(--msmk-childphysical)" strokeWidth={7} strokeLinecap="round" fill="none">
        <circle cx={160} cy={55} r={14} fill="var(--msmk-childphysical-soft)" strokeWidth={3} />
        <line x1={160} y1={69} x2={160} y2={110} />
        <path d="M 160 80 L 135 95" />
        <path d="M 160 80 L 185 65" />
        <path d="M 160 110 L 150 150" />
        <path d="M 160 110 L 180 120" />
      </g>

      {/* Jump pose (arms/legs spread) */}
      <g stroke="var(--msmk-childphysical)" strokeWidth={7} strokeLinecap="round" fill="none">
        <circle cx={260} cy={45} r={14} fill="var(--msmk-childphysical-soft)" strokeWidth={3} />
        <line x1={260} y1={59} x2={260} y2={95} />
        <path d="M 260 68 L 232 45" />
        <path d="M 260 68 L 288 45" />
        <path d="M 260 95 L 235 130" />
        <path d="M 260 95 L 285 130" />
      </g>

      {poses.map((pose) => (
        <text key={pose.label} x={pose.cx} y={168} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
          {pose.label}
        </text>
      ))}
    </svg>
  );
}
