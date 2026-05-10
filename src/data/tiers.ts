export type PricingTier = {
  from: number;
  to?: number;
  unitPrice: number;
  note?: string;
};

export const tiers: PricingTier[] = [
  { from: 1, to: 10000, unitPrice: 0.02, note: 'Included starter band' },
  { from: 10001, to: 100000, unitPrice: 0.015, note: 'Growth usage' },
  { from: 100001, unitPrice: 0.01, note: 'Volume discount' }
];