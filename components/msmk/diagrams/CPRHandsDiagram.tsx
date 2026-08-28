const SIZE_W = 320;
const SIZE_H = 260;

/**
 * Front-view torso showing correct hand placement for chest compressions
 * (center of the chest, on the lower half of the breastbone, heel of one
 * hand with the other stacked on top) plus a pulsing compression-point
 * animation and a metronome dot — both timed to 110 compressions per
 * minute, the middle of the WHO/IFRC-recommended 100-120/min range. The
 * animation is driven by CSS (`.msmk-cpr-pulse` / `.msmk-metronome-dot` in
 * globals.css), which the site's existing `prefers-reduced-motion` rule
 * already neutralizes — no extra handling needed here.
 */
export function CPRHandsDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        viewBox={`0 0 ${SIZE_W} ${SIZE_H}`}
        role="img"
        aria-label="Hand placement for chest compressions: center of the chest, one hand stacked on top of the other"
        className="w-full max-w-xs"
      >
        {/* Torso */}
        <path
          d="M 60 40 Q 160 10, 260 40 L 250 220 Q 160 245, 70 220 Z"
          fill="var(--msmk-firstaid-soft)"
          stroke="var(--msmk-firstaid)"
          strokeWidth={3}
        />
        {/* Collarbone line */}
        <path d="M 80 55 L 240 55" stroke="var(--msmk-firstaid)" strokeWidth={1.5} opacity={0.4} />
        {/* Breastbone (sternum) */}
        <line x1={160} y1={55} x2={160} y2={190} stroke="var(--msmk-firstaid)" strokeWidth={2} opacity={0.5} strokeDasharray="4 4" />

        {/* Compression point pulse (behind hands) */}
        <circle cx={160} cy={135} r={30} fill="var(--accent)" opacity={0.25} className="msmk-cpr-pulse" style={{ transformOrigin: '160px 135px' }} />

        {/* Stacked hands */}
        <ellipse cx={160} cy={140} rx={34} ry={20} fill="var(--foreground)" opacity={0.15} />
        <ellipse cx={160} cy={135} rx={30} ry={17} fill="var(--surface)" stroke="var(--foreground)" strokeWidth={2.5} />
        <ellipse cx={160} cy={130} rx={26} ry={14} fill="var(--surface)" stroke="var(--foreground)" strokeWidth={2} opacity={0.7} />

        <text x={160} y={230} textAnchor="middle" fontSize={11} fill="var(--foreground-muted)">
          Lower half of the breastbone, center of chest
        </text>
      </svg>

      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
        <span className="msmk-metronome-dot h-2.5 w-2.5 rounded-full bg-msmk-firstaid" aria-hidden="true" />
        <span className="text-xs font-medium text-foreground-muted">100–120 compressions / minute</span>
      </div>
    </div>
  );
}
