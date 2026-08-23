interface ProgressBarProps {
  percent: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ percent, label, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={className}>
      {label ? (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-foreground-muted">{label}</span>
          <span className="font-medium">{clamped}%</span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 w-full overflow-hidden rounded-full bg-surface-muted"
      >
        <div className="h-full rounded-full bg-brand transition-[width]" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
