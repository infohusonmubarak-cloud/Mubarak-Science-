'use client';

import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTabId, className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);
  const baseId = useId();
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div className={className}>
      <div role="tablist" className="flex gap-1 rounded-lg bg-surface-muted p-1">
        {tabs.map((tab) => {
          const selected = tab.id === active?.id;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                'flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                selected ? 'bg-surface text-brand shadow-sm' : 'text-foreground-muted hover:text-foreground'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active?.id}
          className="pt-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
