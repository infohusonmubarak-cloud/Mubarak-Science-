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

  // Module 1 — Workplace Communication
  'phone-call': { emoji: '📞', label: 'Phone call' },
  'written-note': { emoji: '📝', label: 'Written note or message' },
  'listening': { emoji: '👂', label: 'Listening carefully' },
  'nodding': { emoji: '🙂', label: 'Confirming you understood' },
  'report-writing': { emoji: '📋', label: 'Writing a report' },
  'radio-handset': { emoji: '📻', label: 'Radio / walkie-talkie' },
  'confused-face': { emoji: '😕', label: 'Confused, did not understand' },
  'thumbs-up': { emoji: '👍', label: 'Confirmed / understood' },

  // Module 2 — Housekeeping
  'sorting-items': { emoji: '🗂️', label: 'Sorting items' },
  'sweeping': { emoji: '🧹', label: 'Sweeping' },
  'arranging-tools': { emoji: '🧰', label: 'Arranging tools' },
  'clean-surface': { emoji: '✨', label: 'Clean surface' },
  'trash-removal': { emoji: '🗑️', label: 'Removing trash' },
  'messy-area': { emoji: '📦', label: 'Cluttered, unsafe area' },
  'tidy-area': { emoji: '🧺', label: 'Tidy, organized area' },

  // Module 4 — Patient Services
  'greeting-patient': { emoji: '🤝', label: 'Greeting the patient' },
  'active-listening': { emoji: '👂', label: 'Active listening' },
  'privacy-curtain': { emoji: '🚪', label: 'Respecting privacy' },
  'patient-comfort': { emoji: '🛏️', label: 'Making the patient comfortable' },
  'respectful-care': { emoji: '🙏', label: 'Respectful, patient care' },
  'rude-behavior': { emoji: '🙅', label: 'Rude or dismissive behavior' },

  // Module 5 — Infant & Toddler Care
  'formula-bottle': { emoji: '🍼', label: 'Formula bottle' },
  'burping-baby': { emoji: '👶', label: 'Burping the baby' },
  'safe-sleep': { emoji: '😴', label: 'Safe sleep position' },
  'diaper-change': { emoji: '🧷', label: 'Changing a diaper' },
  'baby-bath': { emoji: '🛁', label: 'Bathing a baby' },
  'boiling-water': { emoji: '♨️', label: 'Boiled, cooled water' },
  'clean-hands-baby': { emoji: '🧼', label: 'Clean hands before feeding' },

  // Module 6 — Child Care
  'handwashing': { emoji: '🧼', label: 'Washing hands' },
  'toothbrushing': { emoji: '🪥', label: 'Brushing teeth' },
  'clean-clothes': { emoji: '👕', label: 'Clean clothes' },
  'nail-care': { emoji: '💅', label: 'Trimming nails' },
  'bath-time': { emoji: '🛁', label: 'Bath time' },

  // Module 7 — Social, Intellectual, Creative, Emotional Development
  'praise-child': { emoji: '⭐', label: 'Praising the child' },
  'encouragement': { emoji: '💪', label: 'Encouragement' },
  'group-play': { emoji: '🧑‍🤝‍🧑', label: 'Playing together' },
  'storytelling': { emoji: '📖', label: 'Storytelling' },
  'creative-art': { emoji: '🎨', label: 'Creative art / drawing' },
  'harsh-criticism': { emoji: '😠', label: 'Harsh criticism' },

  // Module 8 — Physical Development
  'stretching': { emoji: '🤸', label: 'Stretching / movement' },
  'ball-play': { emoji: '⚽', label: 'Ball play' },
  'climbing': { emoji: '🧗', label: 'Climbing, supervised' },
  'balance-walk': { emoji: '🚶', label: 'Balance walking' },
  'outdoor-play': { emoji: '🌳', label: 'Outdoor play' },

  // Module 9 — Elderly Care
  'wheelchair-transfer': { emoji: '♿', label: 'Wheelchair transfer' },
  'feeding-assist': { emoji: '🥄', label: 'Assisting with feeding' },
  'medication-reminder': { emoji: '💊', label: 'Medication reminder' },
  'mobility-walker': { emoji: '🚶‍♂️', label: 'Walking aid / walker' },
  'bathing-assist': { emoji: '🛁', label: 'Assisting with bathing' },
  'pressure-sore-check': { emoji: '🔍', label: 'Checking skin for pressure sores' },

  // Module 10 — Special Needs Care
  'sign-language': { emoji: '🤟', label: 'Sign language / clear gestures' },
  'wheelchair-ramp': { emoji: '♿', label: 'Wheelchair ramp access' },
  'patience-icon': { emoji: '🕊️', label: 'Patience and calm' },
  'adaptive-tool': { emoji: '🛠️', label: 'Adaptive tool' },
  'inclusive-play': { emoji: '🧩', label: 'Inclusive activity' },

  // Module 11 — Respond to Emergency
  'fire-hazard': { emoji: '🔥', label: 'Fire' },
  'flood-water': { emoji: '🌊', label: 'Flood water' },
  'evacuation-route': { emoji: '🚪', label: 'Evacuation route' },
  'emergency-kit': { emoji: '🧰', label: 'Emergency kit' },
  'accident-scene': { emoji: '🚧', label: 'Accident scene' },
  'gas-leak': { emoji: '💨', label: 'Gas leak / smell of gas' },
};

export function getVisual(key: string): VisualEntry {
  return VISUAL_REGISTRY[key] ?? { emoji: '❓', label: key };
}
