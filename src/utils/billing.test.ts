import { describe, it, expect } from 'vitest';
import { formatCurrency, getStatusLabel, calculateTieredPrice, type PricingTier } from '../utils/billing';

describe('billing utilities', () => {
  describe('formatCurrency', () => {
    it('formats USD amounts correctly', () => {
      expect(formatCurrency(100)).toBe('$100');
      expect(formatCurrency(1000)).toBe('$1,000');
      expect(formatCurrency(99.99)).toBe('$99.99');
    });

    it('handles zero and negative values', () => {
      expect(formatCurrency(0)).toBe('$0');
      expect(formatCurrency(-50)).toBe('-$50');
    });

    it('supports different currencies', () => {
      expect(formatCurrency(1000, 'EUR')).toContain('1,000');
      expect(formatCurrency(1000, 'GBP')).toContain('1,000');
      expect(formatCurrency(1000, 'INR')).toContain('1,000');
    });

    it('removes decimal places for whole numbers', () => {
      const result = formatCurrency(100);
      expect(result).not.toContain('.00');
    });
  });

  describe('getStatusLabel', () => {
    it('maps status strings to human-readable labels', () => {
      expect(getStatusLabel('active')).toBe('Active');
      expect(getStatusLabel('archived')).toBe('Archived');
      expect(getStatusLabel('paid')).toBe('Paid');
      expect(getStatusLabel('draft')).toBe('Draft');
      expect(getStatusLabel('void')).toBe('Void');
      expect(getStatusLabel('open')).toBe('Open');
      expect(getStatusLabel('paused')).toBe('Paused');
      expect(getStatusLabel('canceled')).toBe('Canceled');
    });

    it('handles unknown statuses gracefully', () => {
      expect(getStatusLabel('unknown_status')).toBe('unknown status');
      expect(getStatusLabel('new-status')).toBe('new status');
    });

    it('returns fallback for unmapped values', () => {
      const result = getStatusLabel('custom_status');
      expect(result).toBe('custom status');
    });
  });

  describe('calculateTieredPrice', () => {
    const simpleTiers: PricingTier[] = [
      { from: 1, to: 1000, unitPrice: 1.0 },
      { from: 1001, to: 10000, unitPrice: 0.8 },
      { from: 10001, unitPrice: 0.5 }
    ];

    it('calculates price for first tier', () => {
      expect(calculateTieredPrice(500, simpleTiers)).toBe(500);
    });

    it('calculates price across multiple tiers', () => {
      const expected = (1000 * 1.0) + (5000 * 0.8);
      expect(calculateTieredPrice(6000, simpleTiers)).toBe(expected);
    });

    it('calculates price for quantities in highest tier', () => {
      const expected = (1000 * 1.0) + (9000 * 0.8) + (10000 * 0.5);
      expect(calculateTieredPrice(20000, simpleTiers)).toBe(expected);
    });

    it('returns 0 for zero quantity', () => {
      expect(calculateTieredPrice(0, simpleTiers)).toBe(0);
    });

    it('handles single-tier pricing', () => {
      const flatTier = [{ from: 1, unitPrice: 10 }];
      expect(calculateTieredPrice(100, flatTier)).toBe(1000);
    });

    it('handles graduated pricing model', () => {
      const graduatedTiers: PricingTier[] = [
        { from: 1, to: 10, unitPrice: 10 },
        { from: 11, to: 100, unitPrice: 8 },
        { from: 101, unitPrice: 5 }
      ];
      // 10 units at $10, 90 units at $8, 100 units at $5
      const expected = (10 * 10) + (90 * 8) + (100 * 5);
      expect(calculateTieredPrice(200, graduatedTiers)).toBe(expected);
    });
  });
});
