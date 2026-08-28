// Per-module accent theme lookup — mirrors lib/theme/subjectTheme.ts.
// Every class name below is written out literally, never built by string
// interpolation: Tailwind's build-time scanner matches literal source
// text, so a helper that assembled `bg-msmk-${key}` would compile away to
// nothing — no CSS would ever be generated for it.

export type ModuleAccentKey =
  | 'communication'
  | 'housekeeping'
  | 'firstaid'
  | 'patientcare'
  | 'infanttoddler'
  | 'childcare'
  | 'childdev'
  | 'childphysical'
  | 'elderly'
  | 'specialneeds'
  | 'emergency';

export interface ModuleTheme {
  text: string;
  bg: string;
  border: string;
  soft: string;
  ring: string;
  gradientFrom: string;
  gradientTo: string;
}

export const MODULE_THEMES: Record<ModuleAccentKey, ModuleTheme> = {
  communication: {
    text: 'text-msmk-communication',
    bg: 'bg-msmk-communication',
    border: 'border-msmk-communication',
    soft: 'bg-msmk-communication-soft',
    ring: 'ring-msmk-communication',
    gradientFrom: 'from-msmk-communication',
    gradientTo: 'to-msmk-communication-soft',
  },
  housekeeping: {
    text: 'text-msmk-housekeeping',
    bg: 'bg-msmk-housekeeping',
    border: 'border-msmk-housekeeping',
    soft: 'bg-msmk-housekeeping-soft',
    ring: 'ring-msmk-housekeeping',
    gradientFrom: 'from-msmk-housekeeping',
    gradientTo: 'to-msmk-housekeeping-soft',
  },
  firstaid: {
    text: 'text-msmk-firstaid',
    bg: 'bg-msmk-firstaid',
    border: 'border-msmk-firstaid',
    soft: 'bg-msmk-firstaid-soft',
    ring: 'ring-msmk-firstaid',
    gradientFrom: 'from-msmk-firstaid',
    gradientTo: 'to-msmk-firstaid-soft',
  },
  patientcare: {
    text: 'text-msmk-patientcare',
    bg: 'bg-msmk-patientcare',
    border: 'border-msmk-patientcare',
    soft: 'bg-msmk-patientcare-soft',
    ring: 'ring-msmk-patientcare',
    gradientFrom: 'from-msmk-patientcare',
    gradientTo: 'to-msmk-patientcare-soft',
  },
  infanttoddler: {
    text: 'text-msmk-infanttoddler',
    bg: 'bg-msmk-infanttoddler',
    border: 'border-msmk-infanttoddler',
    soft: 'bg-msmk-infanttoddler-soft',
    ring: 'ring-msmk-infanttoddler',
    gradientFrom: 'from-msmk-infanttoddler',
    gradientTo: 'to-msmk-infanttoddler-soft',
  },
  childcare: {
    text: 'text-msmk-childcare',
    bg: 'bg-msmk-childcare',
    border: 'border-msmk-childcare',
    soft: 'bg-msmk-childcare-soft',
    ring: 'ring-msmk-childcare',
    gradientFrom: 'from-msmk-childcare',
    gradientTo: 'to-msmk-childcare-soft',
  },
  childdev: {
    text: 'text-msmk-childdev',
    bg: 'bg-msmk-childdev',
    border: 'border-msmk-childdev',
    soft: 'bg-msmk-childdev-soft',
    ring: 'ring-msmk-childdev',
    gradientFrom: 'from-msmk-childdev',
    gradientTo: 'to-msmk-childdev-soft',
  },
  childphysical: {
    text: 'text-msmk-childphysical',
    bg: 'bg-msmk-childphysical',
    border: 'border-msmk-childphysical',
    soft: 'bg-msmk-childphysical-soft',
    ring: 'ring-msmk-childphysical',
    gradientFrom: 'from-msmk-childphysical',
    gradientTo: 'to-msmk-childphysical-soft',
  },
  elderly: {
    text: 'text-msmk-elderly',
    bg: 'bg-msmk-elderly',
    border: 'border-msmk-elderly',
    soft: 'bg-msmk-elderly-soft',
    ring: 'ring-msmk-elderly',
    gradientFrom: 'from-msmk-elderly',
    gradientTo: 'to-msmk-elderly-soft',
  },
  specialneeds: {
    text: 'text-msmk-specialneeds',
    bg: 'bg-msmk-specialneeds',
    border: 'border-msmk-specialneeds',
    soft: 'bg-msmk-specialneeds-soft',
    ring: 'ring-msmk-specialneeds',
    gradientFrom: 'from-msmk-specialneeds',
    gradientTo: 'to-msmk-specialneeds-soft',
  },
  emergency: {
    text: 'text-msmk-emergency',
    bg: 'bg-msmk-emergency',
    border: 'border-msmk-emergency',
    soft: 'bg-msmk-emergency-soft',
    ring: 'ring-msmk-emergency',
    gradientFrom: 'from-msmk-emergency',
    gradientTo: 'to-msmk-emergency-soft',
  },
};

export function getModuleTheme(accentKey: string): ModuleTheme {
  return MODULE_THEMES[accentKey as ModuleAccentKey] ?? MODULE_THEMES.firstaid;
}
