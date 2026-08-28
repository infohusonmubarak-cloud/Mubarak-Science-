const SIZE_W = 320;
const SIZE_H = 240;

/**
 * Schematic side view of assisting an elderly person from a bed to a
 * wheelchair: helper bends at the knees (not the back), braces close to
 * the person, and supports under the arm and around the waist.
 */
export function MobilityAssistDiagram() {
  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      role="img"
      aria-label="Assisting a person from bed to wheelchair: bend your knees, keep your back straight, support under the arm"
      className="w-full max-w-sm"
    >
      {/* Floor */}
      <line x1={10} y1={215} x2={310} y2={215} stroke="var(--border)" strokeWidth={3} strokeLinecap="round" />

      {/* Wheelchair (simplified) */}
      <g stroke="var(--foreground)" strokeWidth={2.5} fill="none">
        <circle cx={260} cy={190} r={22} />
        <circle cx={225} cy={200} r={10} />
        <path d="M 240 150 L 285 150 L 285 175 M 240 150 L 235 190" />
        <line x1={240} y1={150} x2={240} y2={190} />
      </g>

      {/* Elderly person, seated/rising, supported */}
      <circle cx={165} cy={110} r={18} fill="var(--msmk-elderly-soft)" stroke="var(--msmk-elderly)" strokeWidth={2.5} />
      <path d="M 165 128 L 160 185" stroke="var(--msmk-elderly)" strokeWidth={14} strokeLinecap="round" />
      <path d="M 160 185 L 145 215" stroke="var(--msmk-elderly)" strokeWidth={10} strokeLinecap="round" opacity={0.7} />
      <path d="M 160 185 L 185 210" stroke="var(--msmk-elderly)" strokeWidth={10} strokeLinecap="round" opacity={0.7} />

      {/* Helper — bent knees, supporting under the arm and waist */}
      <circle cx={90} cy={100} r={17} fill="var(--msmk-elderly-soft)" stroke="var(--foreground)" strokeWidth={2.5} />
      <path d="M 90 117 L 95 165" stroke="var(--foreground)" strokeWidth={13} strokeLinecap="round" />
      {/* Bent legs (crouching) */}
      <path d="M 95 165 L 78 190 L 95 215" fill="none" stroke="var(--foreground)" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 95 165 L 115 190 L 100 215" fill="none" stroke="var(--foreground)" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" opacity={0.7} />
      {/* Supporting arm reaching to elderly person's waist */}
      <path d="M 100 130 L 150 150" stroke="var(--foreground)" strokeWidth={9} strokeLinecap="round" />

      <text x={90} y={60} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        Bend knees,
      </text>
      <text x={90} y={73} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        back straight
      </text>
      <text x={200} y={100} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        Support under
      </text>
      <text x={200} y={113} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        the arm
      </text>
    </svg>
  );
}
