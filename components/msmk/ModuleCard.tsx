import Link from 'next/link';
import { BilingualText } from '@/components/msmk/BilingualText';
import { Badge } from '@/components/ui/Badge';
import { getModuleTheme } from '@/lib/msmk/moduleTheme';
import { cn } from '@/lib/utils/cn';
import type { ModuleSummary } from '@/types/msmk';

export function ModuleCard({ module: mod, href }: { module: ModuleSummary; href?: string }) {
  const theme = getModuleTheme(mod.accentKey);
  const available = mod.status === 'available';
  const content = (
    <div
      className={cn(
        'card-hover flex h-full flex-col gap-3 rounded-xl border bg-surface p-5',
        available ? theme.border + '/30' : 'border-border'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl', theme.soft)}
        >
          {mod.icon}
        </span>
        <Badge tone={available ? 'success' : 'neutral'}>{available ? 'Available' : 'Coming soon'}</Badge>
      </div>
      <div>
        <p className={cn('text-xs font-semibold uppercase tracking-wide', theme.text)}>{mod.code}</p>
        <BilingualText text={mod.title} as="h3" className="mt-1 font-[family-name:var(--font-display)] text-base font-bold text-foreground" />
      </div>
      <BilingualText text={mod.shortDescription} as="p" className="text-sm leading-relaxed text-foreground-muted" />
    </div>
  );

  if (!href || !available) return content;

  return (
    <Link href={href} className="block h-full" aria-label={`${mod.code}: ${mod.title.en}`}>
      {content}
    </Link>
  );
}
