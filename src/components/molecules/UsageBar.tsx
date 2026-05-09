/**
 * UsageBar shows metered consumption against an entitlement or credit limit.
 * It displays the label, numeric usage, percentage, and a progress indicator.
 */
export function UsageBar({ label, used, limit }: { label: string; used: number; limit: number }) {
  const percentage = Math.min(100, Math.round((used / Math.max(limit, 1)) * 100));

  return (
    <div className="premium-panel w-80 space-y-3 p-4">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted">
          {used.toLocaleString()} / {limit.toLocaleString()}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-zinc-200 shadow-inner">
        <div className="h-full origin-left animate-bar-grow rounded-full bg-gradient-to-r from-brand to-violet shadow-glow" style={{ width: `${percentage}%` }} />
      </div>
      <p className="text-xs font-medium text-muted">{percentage}% used</p>
    </div>
  );
}
