export type BillingStatus =
  | 'active'
  | 'archived'
  | 'paid'
  | 'draft'
  | 'void'
  | 'open'
  | 'paused'
  | 'canceled';

export type PricingTier = {
  from: number;
  to?: number;
  unitPrice: number;
  note?: string;
};

const statusLabels: Record<string, string> = {
  active: 'Active',
  archived: 'Archived',
  paid: 'Paid',
  draft: 'Draft',
  void: 'Void',
  open: 'Open',
  paused: 'Paused',
  canceled: 'Canceled'
};

export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2
  }).format(amount);
}

export function getStatusLabel(status: string) {
  return statusLabels[status] ?? status.replace(/[-_]/g, ' ');
}

export function calculateTieredPrice(quantity: number, tiers: PricingTier[]) {
  return tiers.reduce((total, tier) => {
    if (quantity < tier.from) return total;
    const upper = tier.to ?? quantity;
    const units = Math.max(0, Math.min(quantity, upper) - tier.from + 1);
    return total + units * tier.unitPrice;
  }, 0);
}
