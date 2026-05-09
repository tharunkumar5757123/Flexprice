/**
 * Spinner communicates short loading states in buttons, tables, and panels.
 * The accessible label is visually hidden but available to assistive technology.
 */
export function Spinner({ label = 'Loading' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-muted" role="status">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent drop-shadow-sm" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
