import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <span aria-hidden="true" className="text-4xl">🔍</span>
      <h1 className="text-xl font-bold text-foreground">Page not found</h1>
      <p className="max-w-sm text-sm text-foreground-muted">
        We couldn&rsquo;t find that page. It may not have been written yet, or the link might be out of date.
      </p>
      <div className="flex gap-2">
        <Button href="/">Go to Home</Button>
        <Button href="/subjects" variant="secondary">Browse Subjects</Button>
      </div>
    </div>
  );
}
