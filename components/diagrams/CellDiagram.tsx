export interface CellDiagramProps {
  type: 'animal' | 'plant';
}

interface Label {
  x: number;
  y: number;
  text: string;
  anchor?: 'start' | 'middle' | 'end';
}

const SIZE = 320;

/**
 * A static, schematic (not photorealistic) labelled cell diagram — clarity
 * over anatomical accuracy, matching how a textbook diagram works. Shared
 * organelles are drawn for both cell types; `type: 'plant'` layers on the
 * cell wall, chloroplasts, and a large central vacuole.
 */
export function CellDiagram({ type }: CellDiagramProps) {
  const isPlant = type === 'plant';
  const labels: Label[] = [
    { x: 160, y: 26, text: isPlant ? 'Cell wall' : 'Cell membrane', anchor: 'middle' },
    { x: 160, y: 118, text: 'Nucleus', anchor: 'middle' },
    { x: 246, y: 92, text: 'Mitochondria', anchor: 'start' },
    { x: 60, y: 176, text: 'Ribosomes', anchor: 'end' },
    { x: 246, y: 150, text: 'Endoplasmic reticulum', anchor: 'start' },
    { x: 60, y: 232, text: 'Golgi apparatus', anchor: 'end' },
  ];
  if (isPlant) {
    labels.push({ x: 160, y: 300, text: 'Vacuole', anchor: 'middle' });
    labels.push({ x: 246, y: 210, text: 'Chloroplast', anchor: 'start' });
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      role="img"
      aria-label={`${isPlant ? 'Plant' : 'Animal'} cell diagram`}
      className="w-full max-w-sm"
    >
      {isPlant ? (
        <rect x={22} y={22} width={276} height={276} rx={18} fill="none" stroke="var(--foreground)" strokeWidth={4} />
      ) : null}

      {/* Membrane / cytoplasm boundary */}
      {isPlant ? (
        <rect x={34} y={34} width={252} height={252} rx={12} fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth={2} />
      ) : (
        <ellipse cx={160} cy={168} rx={140} ry={128} fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth={2} />
      )}

      {/* Vacuole (plant only) — drawn early so other organelles sit on top */}
      {isPlant ? <ellipse cx={160} cy={196} rx={90} ry={78} fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth={1.5} /> : null}

      {/* Nucleus */}
      <circle cx={160} cy={118} r={34} fill="var(--brand)" opacity={0.85} />
      <circle cx={168} cy={112} r={9} fill="var(--surface)" opacity={0.8} />

      {/* Mitochondria */}
      <ellipse cx={222} cy={100} rx={16} ry={9} fill="var(--warning)" transform="rotate(-20 222 100)" />
      <ellipse cx={90} cy={132} rx={16} ry={9} fill="var(--warning)" transform="rotate(25 90 132)" />

      {/* Ribosomes — small dots */}
      <circle cx={82} cy={172} r={2.5} fill="var(--foreground)" />
      <circle cx={94} cy={182} r={2.5} fill="var(--foreground)" />
      <circle cx={78} cy={190} r={2.5} fill="var(--foreground)" />
      <circle cx={100} cy={168} r={2.5} fill="var(--foreground)" />

      {/* Endoplasmic reticulum — squiggle near the nucleus */}
      <path
        d="M 196 150 Q 210 140, 220 150 T 240 150 Q 248 158, 240 166 T 220 172"
        fill="none"
        stroke="var(--success)"
        strokeWidth={2.5}
      />

      {/* Golgi apparatus — stacked curves */}
      <path d="M 60 220 Q 78 214, 96 220" fill="none" stroke="var(--danger)" strokeWidth={2.5} />
      <path d="M 62 228 Q 80 222, 98 228" fill="none" stroke="var(--danger)" strokeWidth={2.5} />
      <path d="M 64 236 Q 82 230, 100 236" fill="none" stroke="var(--danger)" strokeWidth={2.5} />

      {/* Chloroplasts (plant only) */}
      {isPlant ? (
        <>
          <ellipse cx={220} cy={200} rx={14} ry={8} fill="var(--success)" transform="rotate(15 220 200)" />
          <ellipse cx={200} cy={230} rx={14} ry={8} fill="var(--success)" transform="rotate(-10 200 230)" />
        </>
      ) : null}

      {labels.map((label) => (
        <text
          key={label.text}
          x={label.x}
          y={label.y}
          textAnchor={label.anchor ?? 'start'}
          className="fill-foreground text-[9px] font-medium"
        >
          {label.text}
        </text>
      ))}
    </svg>
  );
}
