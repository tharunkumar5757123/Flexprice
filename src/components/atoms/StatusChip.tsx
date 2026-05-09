import { classNames } from '../../lib/classNames';
import { getStatusLabel, type BillingStatus } from '../../utils/billing';

type Tone = 'green' | 'gray' | 'blue' | 'yellow' | 'red';

const toneByStatus: Record<BillingStatus, Tone> = {
  active: 'green',
  paid: 'green',
  archived: 'gray',
  draft: 'gray',
  open: 'yellow',
  paused: 'yellow',
  void: 'red',
  canceled: 'red'
};

const toneStyles: Record<Tone, string> = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  gray: 'border-zinc-200 bg-zinc-50 text-zinc-700',
  blue: 'border-sky-200 bg-sky-50 text-sky-700',
  yellow: 'border-amber-200 bg-amber-50 text-amber-700',
  red: 'border-red-200 bg-red-50 text-red-700'
};

/**
 * StatusChip displays compact billing states for plans, invoices, and subscriptions.
 * The component maps status strings to readable labels and consistent color treatments.
 */
export function StatusChip({ status }: { status: BillingStatus }) {
  return (
    <span className={classNames('inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-medium shadow-sm transition duration-200 hover:-translate-y-0.5', toneStyles[toneByStatus[status]])}>
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
      {getStatusLabel(status)}
    </span>
  );
}
