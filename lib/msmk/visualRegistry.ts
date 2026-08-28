// Lightweight lookup for assessment-option visuals (`imageKey` on
// ImageChoiceOption / TrueFalsePictureQuestion). Deliberately simple —
// emoji + label — separate from components/msmk/diagrams/registry.tsx,
// which holds the genuinely hand-drawn SVG procedure diagrams used in
// information sheets and tap-spot questions. Extend this as new modules
// need new option visuals.

export interface VisualEntry {
  emoji: string;
  label: string;
}

export const VISUAL_REGISTRY: Record<string, VisualEntry> = {
  'recovery-position': { emoji: '🧍‍♂️➡️🛌', label: 'Recovery position' },
  'call-for-help': { emoji: '📞', label: 'Call for help' },
  'check-breathing': { emoji: '👂', label: 'Check breathing' },
  'chest-compressions': { emoji: '🤲', label: 'Chest compressions' },
  'rescue-breaths': { emoji: '💨', label: 'Rescue breaths' },
  'heimlich-maneuver': { emoji: '🤗', label: 'Abdominal thrusts' },
  'back-blows': { emoji: '✋', label: 'Back blows' },
  'wound-pressure': { emoji: '🩹', label: 'Apply pressure to wound' },
  'elevate-limb': { emoji: '⬆️', label: 'Raise the injured limb' },
  'wash-hands': { emoji: '🧼', label: 'Wash hands' },
  'gloves': { emoji: '🧤', label: 'Wear gloves' },
  'ambulance': { emoji: '🚑', label: 'Call an ambulance' },
  'unsafe-scene': { emoji: '⚠️', label: 'Unsafe — do not approach' },
  'safe-scene': { emoji: '✅', label: 'Safe to approach' },
  'ice-pack': { emoji: '🧊', label: 'Cold pack' },
  'bandage': { emoji: '🩹', label: 'Bandage' },
  'unconscious-person': { emoji: '😵', label: 'Unconscious person' },
  'choking-person': { emoji: '😨', label: 'Choking, clutching throat' },
};

export function getVisual(key: string): VisualEntry {
  return VISUAL_REGISTRY[key] ?? { emoji: '❓', label: key };
}
