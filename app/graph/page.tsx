'use client';

import { useState } from 'react';
import { GeoGebraEmbed } from '@/components/diagrams/GeoGebraEmbed';

const PRESETS = [
  { id: 'blank', label: 'Blank grapher', commands: [] as string[] },
  { id: 'quadratic', label: 'Quadratic', commands: ['f(x)=x^2-4x+3', 'a=Slider(-3,3,0.1)', 'b=Slider(-6,6,0.1)', 'c=Slider(-6,6,0.1)', 'g(x)=a x^2+b x+c'] },
  { id: 'absolute-value', label: 'Absolute value', commands: ['f(x)=abs(x)', 'a=Slider(-3,3,0.1)', 'h=Slider(-5,5,0.1)', 'k=Slider(-5,5,0.1)', 'g(x)=a abs(x-h)+k'] },
  { id: 'trigonometry', label: 'Trigonometry', commands: ['f(x)=sin(x)', 'a=Slider(-3,3,0.1)', 'b=Slider(0.1,4,0.1)', 'g(x)=a sin(b x)'] },
] as const;

export default function GraphPage() {
  const [presetId, setPresetId] = useState<(typeof PRESETS)[number]['id']>('blank');
  const preset = PRESETS.find((p) => p.id === presetId)!;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Graphing Tool</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Plot functions and explore how changing a graph&apos;s numbers changes its shape. Powered by{' '}
          <a href="https://www.geogebra.org" target="_blank" rel="noreferrer" className="underline">
            GeoGebra
          </a>
          , a free graphing and geometry tool.
        </p>
      </div>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPresetId(p.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              presetId === p.id
                ? 'border-brand bg-brand-soft text-brand-strong'
                : 'border-border text-foreground-muted hover:bg-surface-muted'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {preset.id !== 'blank' && (
        <p className="rounded-lg bg-surface-muted p-3 text-sm text-foreground-muted">
          Drag the slider dots on screen (or tap a slider and use the arrow keys) to see how each number changes
          the graph. Type your own function into the input bar too.
        </p>
      )}

      <GeoGebraEmbed key={preset.id} appName="graphing" commands={[...preset.commands]} showInput height={420} />
    </div>
  );
}
