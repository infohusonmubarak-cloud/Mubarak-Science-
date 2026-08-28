const SIZE_W = 280;
const SIZE_H = 260;

/**
 * Schematic baby bottle with numbered callouts for safe formula
 * preparation: boiled-and-cooled water to the line, one level scoop per
 * measurement, then seal and shake.
 */
export function FormulaBottleDiagram() {
  return (
    <svg
      viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
      role="img"
      aria-label="Baby bottle showing the water fill line and where to add formula powder"
      className="w-full max-w-xs"
    >
      {/* Teat */}
      <path d="M 130 18 Q 140 6, 150 18 L 146 34 L 134 34 Z" fill="var(--msmk-infanttoddler-soft)" stroke="var(--msmk-infanttoddler)" strokeWidth={2} />
      {/* Collar */}
      <rect x={120} y={34} width={40} height={10} rx={2} fill="var(--surface)" stroke="var(--msmk-infanttoddler)" strokeWidth={2} />
      {/* Bottle body */}
      <path
        d="M 110 44 L 110 220 Q 110 232, 122 232 L 158 232 Q 170 232, 170 220 L 170 44 Z"
        fill="var(--surface)"
        stroke="var(--msmk-infanttoddler)"
        strokeWidth={3}
      />
      {/* Water fill (boiled, cooled) */}
      <path d="M 113 130 L 113 220 Q 113 229, 122 229 L 158 229 Q 167 229, 167 220 L 167 130 Z" fill="var(--msmk-infanttoddler-soft)" />
      {/* Fill line */}
      <line x1={106} y1={130} x2={174} y2={130} stroke="var(--accent)" strokeWidth={2} strokeDasharray="4 3" />
      {/* Measurement marks */}
      {[70, 100, 160, 190].map((y) => (
        <line key={y} x1={112} y1={y} x2={122} y2={y} stroke="var(--msmk-infanttoddler)" strokeWidth={1.5} opacity={0.5} />
      ))}
      {/* Scoop */}
      <circle cx={210} cy={90} r={14} fill="var(--surface)" stroke="var(--foreground)" strokeWidth={2.5} />
      <line x1={222} y1={78} x2={238} y2={62} stroke="var(--foreground)" strokeWidth={3} strokeLinecap="round" />

      {/* Numbered callouts */}
      <g fontSize={11} fill="var(--foreground)">
        <circle cx={90} cy={130} r={9} fill="var(--accent)" />
        <text x={90} y={134} textAnchor="middle" fill="white" fontWeight="bold">1</text>
        <text x={30} y={134}>Water line</text>

        <circle cx={230} cy={110} r={9} fill="var(--accent)" />
        <text x={230} y={114} textAnchor="middle" fill="white" fontWeight="bold">2</text>
        <text x={200} y={130}>1 level scoop</text>

        <circle cx={90} cy={180} r={9} fill="var(--accent)" />
        <text x={90} y={184} textAnchor="middle" fill="white" fontWeight="bold">3</text>
        <text x={20} y={200}>Seal &amp; shake well</text>
      </g>
    </svg>
  );
}
