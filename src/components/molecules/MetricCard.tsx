import { classNames } from '../../lib/classNames';

/**
 * MetricCard summarizes one dashboard KPI with a label, value, and optional trend.
 * It is useful for revenue, usage, active subscriptions, and invoice health.
 */
export function MetricCard({
  label,
  value,
  trend,
  trendDirection = 'up'
}: {
  label: string;
  value: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
}) {
  return (
    <section className="premium-panel premium-hover w-64 p-4 animate-fade-up">
      <p className="text-sm font-medium text-muted">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <strong className="text-2xl font-semibold text-zinc-950">{value}</strong>
        {trend && (
          <span className={classNames('rounded-full px-2 py-1 text-xs font-semibold shadow-sm', trendDirection === 'up' ? 'bg-emerald-50 text-success' : 'bg-red-50 text-danger')}>
            {trendDirection === 'up' ? 'up' : 'down'} {trend}
          </span>
        )}
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-100">
        <div className={classNames('h-full origin-left animate-bar-grow rounded-full', trendDirection === 'up' ? 'bg-success' : 'bg-danger')} style={{ width: trendDirection === 'up' ? '74%' : '42%' }} />
      </div>
    </section>
  );
}
