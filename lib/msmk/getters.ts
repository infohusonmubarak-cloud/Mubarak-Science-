import { MODULE_SUMMARIES } from '@/content/msmk/modules';
import type { ModuleId, ModuleSummary } from '@/types/msmk';

export function getModuleSummaries(): ModuleSummary[] {
  return [...MODULE_SUMMARIES].sort((a, b) => a.order - b.order);
}

export function getModuleSummary(id: ModuleId): ModuleSummary | undefined {
  return MODULE_SUMMARIES.find((module) => module.id === id);
}
