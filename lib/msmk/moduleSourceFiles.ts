// Maps each module id to the content file it's authored in — shown on
// the doctor review page (/msmk/review) so feedback ("Module 3, the CPR
// compression rate is wrong") can be routed straight to the right file
// without the reviewer needing to know the codebase.
import type { ModuleId } from '@/types/msmk';

export const MODULE_SOURCE_FILES: Record<ModuleId, string> = {
  m01: 'content/msmk/full/m01-communication.ts',
  m02: 'content/msmk/full/m02-housekeeping.ts',
  m03: 'content/msmk/full/m03-first-aid.ts',
  m04: 'content/msmk/full/m04-patient-services.ts',
  m05: 'content/msmk/full/m05-infant-toddler.ts',
  m06: 'content/msmk/full/m06-child-care.ts',
  m07: 'content/msmk/full/m07-child-development.ts',
  m08: 'content/msmk/full/m08-physical-development.ts',
  m09: 'content/msmk/full/m09-elderly-care.ts',
  m10: 'content/msmk/full/m10-special-needs.ts',
  m11: 'content/msmk/full/m11-emergency-response.ts',
};
