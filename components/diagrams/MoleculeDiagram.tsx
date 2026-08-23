export interface MoleculeAtom {
  element: string;
  x: number;
  y: number;
}

export interface MoleculeDiagramProps {
  label: string;
  atoms: MoleculeAtom[];
  /** Pairs of indices into `atoms` that are bonded. */
  bonds: [number, number][];
}

const SIZE = 220;
const SCALE = 26;

// Standard CPK-style element colors — enough coverage for the simple
// molecules this pass needs (water, carbon dioxide); extend as needed.
const ELEMENT_COLOR: Record<string, string> = {
  H: '#e5e9f5',
  O: 'var(--danger)',
  C: '#475569',
  N: 'var(--brand)',
};

const ELEMENT_TEXT: Record<string, string> = {
  H: '#0f172a',
  O: 'white',
  C: 'white',
  N: 'white',
};

function toPixel(x: number, y: number) {
  return { px: SIZE / 2 + x * SCALE, py: SIZE / 2 + y * SCALE };
}

/**
 * A static ball-and-stick molecule sketch — schematic, not to scale.
 * `atoms` are laid out in simple local units (e.g. `{x:-1,y:0}`); `bonds`
 * connects them by index.
 */
export function MoleculeDiagram({ label, atoms, bonds }: MoleculeDiagramProps) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={`${label} molecule diagram`} className="w-full max-w-xs">
      {bonds.map(([i, j]) => {
        const a = toPixel(atoms[i].x, atoms[i].y);
        const b = toPixel(atoms[j].x, atoms[j].y);
        return <line key={`${i}-${j}`} x1={a.px} y1={a.py} x2={b.px} y2={b.py} stroke="var(--foreground-muted)" strokeWidth={4} />;
      })}
      {atoms.map((atom, index) => {
        const p = toPixel(atom.x, atom.y);
        const isHydrogen = atom.element === 'H';
        const radius = isHydrogen ? 12 : 18;
        return (
          <g key={index}>
            <circle
              cx={p.px}
              cy={p.py}
              r={radius}
              fill={ELEMENT_COLOR[atom.element] ?? 'var(--foreground-muted)'}
              stroke="var(--surface)"
              strokeWidth={2}
            />
            <text x={p.px} y={p.py + 4} textAnchor="middle" className="text-[11px] font-semibold" fill={ELEMENT_TEXT[atom.element] ?? 'white'}>
              {atom.element}
            </text>
          </g>
        );
      })}
      <text x={SIZE / 2} y={SIZE - 10} textAnchor="middle" className="fill-foreground-muted text-[10px] font-medium">
        {label}
      </text>
    </svg>
  );
}
