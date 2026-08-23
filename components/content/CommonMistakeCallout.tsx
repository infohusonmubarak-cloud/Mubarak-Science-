interface CommonMistakeCalloutProps {
  mistake: string;
}

export function CommonMistakeCallout({ mistake }: CommonMistakeCalloutProps) {
  return (
    <div role="note" className="flex gap-3 rounded-xl border border-warning/30 bg-warning-soft p-4">
      <span aria-hidden="true" className="text-lg leading-none text-warning">⚠</span>
      <div>
        <p className="text-sm font-semibold text-warning">Common mistake</p>
        <p className="mt-1 text-sm text-foreground">{mistake}</p>
      </div>
    </div>
  );
}
