import { MODULE_SUMMARIES } from '@/content/msmk/modules';
import { MODULE_M03 } from '@/content/msmk/full/m03-first-aid';
import type { Module, ModuleId, ModuleSummary } from '@/types/msmk';

const FULL_MODULES: Partial<Record<ModuleId, Module>> = {
  m03: MODULE_M03,
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
