import { StatusChip } from '../atoms/StatusChip';
import type { BillingStatus } from '../../utils/billing';

const iconByStatus: Record<string, string> = {
  paid: 'ok',
  draft: '..',
  open: '!',
  void: 'x'
};

/**
 * InvoiceStatusBadge pairs an invoice status with a small visual icon.
 * It keeps invoice tables scannable without requiring users to memorize colors.
 */
export function InvoiceStatusBadge({ status }: { status: Extract<BillingStatus, 'paid' | 'draft' | 'open' | 'void'> }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="grid h-6 min-w-6 place-items-center rounded-full bg-white text-[10px] font-bold uppercase text-ink shadow-sm ring-1 ring-line">{iconByStatus[status]}</span>
      <StatusChip status={status} />
    </span>
  );
}
