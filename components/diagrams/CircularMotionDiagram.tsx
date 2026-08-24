// Static schematic diagram of an object moving on a circular path: the
// path itself, the object, the radius, an inward-pointing centripetal
// force arrow (labelled per use — tension, friction, gravity, or a
// generic Fc), and an optional tangential velocity arrow. Reused across
// every "what supplies the centripetal force" concept rather than
// building a one-off diagram per force type.

const SIZE = 260;
const CENTER = { x: 130, y: 130 };
const RADIUS = 82;
// Object sits at -40° (measured from +x axis, y-down screen space) so the
// inward force arrow and tangential velocity arrow both have clear room.
const ANGLE_DEG = -40;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = toRad(angleDeg);
  return { x: CENTER.x + radius * Math.cos(rad), y: CENTER.y + radius * Math.sin(rad) };
}

interface CircularMotionDiagramProps {
  forceLabel: string;
  showVelocityVector?: boolean;
}

export function CircularMotionDiagram({ forceLabel, showVelocityVector = true }: CircularMotionDiagramProps) {
  const object = pointOnCircle(ANGLE_DEG, RADIUS);

  // Inward force arrow: from the object toward the centre, stopping short
  // of the object's own marker.
  const inwardDir = { x: CENTER.x - object.x, y: CENTER.y - object.y };
  const inwardLen = Math.hypot(inwardDir.x, inwardDir.y);
  const inwardUnit = { x: inwardDir.x / inwardLen, y: inwardDir.y / inwardLen };
  const forceArrowEnd = { x: object.x + inwardUnit.x * (inwardLen - 34), y: object.y + inwardUnit.y * (inwardLen - 34) };
  const forceLabelPos = { x: (object.x + forceArrowEnd.x) / 2 + inwardUnit.y * 14, y: (object.y + forceArrowEnd.y) / 2 - inwardUnit.x * 14 };

  // Tangential velocity: perpendicular to the radius, in the direction of
  // travel (counter-clockwise here).
  const tangentUnit = { x: inwardUnit.y, y: -inwardUnit.x };
  const velocityEnd = { x: object.x + tangentUnit.x * 44, y: object.y + tangentUnit.y * 44 };
  const velocityLabelPos = { x: velocityEnd.x + tangentUnit.x * 12, y: velocityEnd.y + tangentUnit.y * 12 };

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto w-full max-w-xs" role="img">
      <defs>
        <marker id="cmd-arrow-force" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-danger" />
        </marker>
        <marker id="cmd-arrow-velocity" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-accent" />
        </marker>
      </defs>

      {/* orbital path */}
      <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} className="fill-none stroke-border" strokeWidth={1.5} strokeDasharray="4 4" />

      {/* radius */}
      <line x1={CENTER.x} y1={CENTER.y} x2={object.x} y2={object.y} className="stroke-foreground-muted" strokeWidth={1} strokeDasharray="2 3" />
      <circle cx={CENTER.x} cy={CENTER.y} r={2.5} className="fill-foreground-muted" />
      <text x={CENTER.x} y={CENTER.y - 10} textAnchor="middle" className="fill-foreground-muted text-[9px]">
        centre
      </text>

      {/* the orbiting object */}
      <circle cx={object.x} cy={object.y} r={9} className="fill-brand stroke-surface" strokeWidth={2} />

      {/* inward centripetal force arrow */}
      <line
        x1={object.x}
        y1={object.y}
        x2={forceArrowEnd.x}
        y2={forceArrowEnd.y}
        className="stroke-danger"
        strokeWidth={2.5}
        markerEnd="url(#cmd-arrow-force)"
      />
      <text x={forceLabelPos.x} y={forceLabelPos.y} textAnchor="middle" className="fill-danger text-[10px] font-semibold">
        {forceLabel}
      </text>

      {/* tangential velocity arrow */}
      {showVelocityVector ? (
        <>
          <line
            x1={object.x}
            y1={object.y}
            x2={velocityEnd.x}
            y2={velocityEnd.y}
            className="stroke-accent"
            strokeWidth={2.5}
            markerEnd="url(#cmd-arrow-velocity)"
          />
          <text x={velocityLabelPos.x} y={velocityLabelPos.y} textAnchor="middle" className="fill-accent text-[10px] font-semibold">
            v
          </text>
        </>
      ) : null}
    </svg>
  );
}
