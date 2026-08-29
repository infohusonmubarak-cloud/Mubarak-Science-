export function NotAuthorized({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="mx-auto max-w-sm space-y-4 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Not authorized</h1>
      <p className="text-sm text-foreground-muted">
        This Supabase account isn&apos;t on the admin list, so it can&apos;t access the staff dashboard. Ask
        whoever manages the site to add your email to the <code className="font-mono">admins</code> table.
      </p>
      <button type="button" onClick={onSignOut} className="text-sm font-medium text-brand underline">
        Sign out
      </button>
    </div>
  );
}
