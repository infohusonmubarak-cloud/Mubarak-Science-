import { MODULE_SUMMARIES } from '@/content/msmk/modules';
import { MODULE_M01 } from '@/content/msmk/full/m01-communication';
import { MODULE_M02 } from '@/content/msmk/full/m02-housekeeping';
import { MODULE_M03 } from '@/content/msmk/full/m03-first-aid';
import { MODULE_M04 } from '@/content/msmk/full/m04-patient-services';
import { MODULE_M05 } from '@/content/msmk/full/m05-infant-toddler';
import { MODULE_M06 } from '@/content/msmk/full/m06-child-care';
import { MODULE_M07 } from '@/content/msmk/full/m07-child-development';
import { MODULE_M08 } from '@/content/msmk/full/m08-physical-development';
import { MODULE_M09 } from '@/content/msmk/full/m09-elderly-care';
import { MODULE_M10 } from '@/content/msmk/full/m10-special-needs';
import { MODULE_M11 } from '@/content/msmk/full/m11-emergency-response';
import type { Module, ModuleId, ModuleSummary } from '@/types/msmk';

const FULL_MODULES: Partial<Record<ModuleId, Module>> = {
  m01: MODULE_M01,
  m02: MODULE_M02,
  m03: MODULE_M03,
  m04: MODULE_M04,
  m05: MODULE_M05,
  m06: MODULE_M06,
  m07: MODULE_M07,
  m08: MODULE_M08,
  m09: MODULE_M09,
  m10: MODULE_M10,
  m11: MODULE_M11,
};

export function getModuleSummaries(): ModuleSummary[] {
  return [...MODULE_SUMMARIES].sort((a, b) => a.order - b.order);
}

export function getModuleSummary(id: ModuleId): ModuleSummary | undefined {
  return MODULE_SUMMARIES.find((module) => module.id === id);
}

export function getFullModule(id: string): Module | undefined {
  return FULL_MODULES[id as ModuleId];
}

/** Every module with full content, in module order — used by the doctor review page. */
export function getAllFullModules(): Module[] {
  return getModuleSummaries()
    .map((summary) => FULL_MODULES[summary.id])
    .filter((module): module is Module => Boolean(module));
}
