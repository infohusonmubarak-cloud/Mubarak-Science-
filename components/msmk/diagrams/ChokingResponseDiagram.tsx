interface ChokingResponseDiagramProps {
  variant: 'back-blows' | 'abdominal-thrusts';
}

const SIZE_W = 300;
const SIZE_H = 260;

/**
 * Two-panel schematic (rendered one variant at a time) for choking
 * response: back blows between the shoulder blades, or abdominal thrusts
 * (a closed fist above the navel, pulled sharply inward and upward).
 */
export function ChokingResponseDiagram({ variant }: ChokingResponseDiagramProps) {
  if (variant === 'back-blows') {
    return (
      <svg
        viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
        role="img"
        aria-label="Back blows: lean the person forward and strike firmly between the shoulder blades with the heel of your hand"
        className="w-full max-w-xs"
      >
        {/* Choking person, leaning forward */}
        <ellipse cx={120} cy={140} rx={55} ry={70} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} transform="rotate(18 120 140)" />
        <circle cx={80} cy={78} r={22} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} />

        {/* Helper's hand striking between shoulder blades */}
        <ellipse cx={165} cy={110} rx={20} ry={13} fill="var(--surface)" stroke="var(--foreground)" strokeWidth={2.5} transform="rotate(-25 165 110)" />
        <path d="M 195 90 L 170 105" stroke="var(--accent)" strokeWidth={2.5} markerEnd="url(#msmk-strike-arrow)" fill="none" />

        <defs>
          <marker id="msmk-strike-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
          </marker>
        </defs>

        <text x={150} y={230} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
          Lean them forward, strike between the shoulder blades
        </text>
        <text x={150} y={246} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
          Up to 5 firm blows with the heel of your hand
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      role="img"
      aria-label="Abdominal thrusts: stand behind the person, make a fist above the navel, and pull sharply inward and upward"
      className="w-full max-w-xs"
    >
      {/* Choking person, front view */}
      <ellipse cx={150} cy={140} rx={48} ry={72} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} />
      <circle cx={150} cy={62} r={22} fill="var(--msmk-firstaid-soft)" stroke="var(--msmk-firstaid)" strokeWidth={3} />

      {/* Navel reference */}
      <circle cx={150} cy={155} r={2.5} fill="var(--foreground-muted)" />

      {/* Fist above navel */}
      <circle cx={150} cy={128} r={16} fill="var(--surface)" stroke="var(--foreground)" strokeWidth={2.5} />
      {/* Second hand wrapping the fist */}
      <path d="M 130 128 Q 150 108, 170 128" fill="none" stroke="var(--foreground)" strokeWidth={2.5} opacity={0.6} />

      {/* Inward-and-upward thrust arrow */}
      <path d="M 150 128 L 150 90" stroke="var(--accent)" strokeWidth={2.5} markerEnd="url(#msmk-thrust-arrow)" fill="none" />

      <defs>
        <marker id="msmk-thrust-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
        </marker>
      </defs>

      <text x={150} y={230} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        Fist just above the navel, thumb side in
      </text>
      <text x={150} y={246} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
        Pull sharply inward and upward
      </text>
    </svg>
  );
}
