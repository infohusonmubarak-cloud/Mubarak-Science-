import type { ComponentType } from 'react';
import { RecoveryPositionDiagram } from './RecoveryPositionDiagram';
import { CPRHandsDiagram } from './CPRHandsDiagram';
import { ChokingResponseDiagram } from './ChokingResponseDiagram';

function ChokingBackBlows() {
  return <ChokingResponseDiagram variant="back-blows" />;
}
function ChokingAbdominalThrusts() {
  return <ChokingResponseDiagram variant="abdominal-thrusts" />;
}

// Plain object indexing at each call site (`MSMK_DIAGRAM_REGISTRY[key]`)
// rather than a `getDiagram(key)` wrapper function — matches
// components/diagrams/registry.ts, and keeps the new
// react-hooks/static-components lint rule happy: it flags a function call
// assigned to a capitalized variable as "creating a component during
// render" (it can't prove the call is a stable lookup), but doesn't flag
// direct object/array indexing.
export const MSMK_DIAGRAM_REGISTRY: Record<string, ComponentType> = {
  'recovery-position': RecoveryPositionDiagram,
  'cpr-hands': CPRHandsDiagram,
  'choking-back-blows': ChokingBackBlows,
  'choking-abdominal-thrusts': ChokingAbdominalThrusts,
};
