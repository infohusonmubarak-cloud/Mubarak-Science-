interface QuickReviewListProps {
  points: string[];
}

export function QuickReviewList({ points }: QuickReviewListProps) {
  return (
    <ul className="space-y-2">
      {points.map((point) => (
        <li key={point} className="flex gap-2 text-sm text-foreground">
          <span aria-hidden="true" className="text-success">✓</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
