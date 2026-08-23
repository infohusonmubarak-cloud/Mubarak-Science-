import type { ComponentType } from 'react';
import type { DiagramComponentKey } from '@/types/content';
import { CoordinatePlane } from './CoordinatePlane';
import { NumberLine } from './NumberLine';
import { StaticImage } from './StaticImage';
import { CellDiagram } from './CellDiagram';
import { MoleculeDiagram } from './MoleculeDiagram';
import { CircularMotionDiagram } from './CircularMotionDiagram';

// Maps a `Diagram.component` key to its implementation. Adding a new
// diagram type (TriangleDiagram, CircleDiagram, ParabolaGraph, ...) later
// is additive: write the component, add one line here, extend
// `DiagramComponentKey` in types/content.ts.
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- each entry's real props type is narrowed at the call site in DiagramContainer
export const diagramRegistry: Record<DiagramComponentKey, ComponentType<any>> = {
  CoordinatePlane,
  NumberLine,
  StaticImage,
  CellDiagram,
  MoleculeDiagram,
  CircularMotionDiagram,
};
