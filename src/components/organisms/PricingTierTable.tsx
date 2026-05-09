import { formatCurrency, type PricingTier } from '../../utils/billing';

/**
 * PricingTierTable displays tiered or graduated usage pricing in a readable table.
 * Each row communicates the usage range, unit price, and plain-language note.
 */
export function PricingTierTable({ tiers, currency = 'USD' }: { tiers: PricingTier[]; currency?: string }) {
  return (
    <div className="premium-panel w-[640px]">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-50/80 text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="px-3 py-2">Usage range</th>
            <th className="px-3 py-2">Unit price</th>
            <th className="px-3 py-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier) => (
            <tr key={`${tier.from}-${tier.to ?? 'unlimited'}`} className="border-t border-line transition duration-200 hover:bg-brandSoft/60">
              <td className="px-3 py-3">
                {tier.from.toLocaleString()} - {tier.to?.toLocaleString() ?? 'Unlimited'}
              </td>
              <td className="px-3 py-3 font-semibold text-ink">{formatCurrency(tier.unitPrice, currency)}</td>
              <td className="px-3 py-3 text-muted">{tier.note ?? 'Metered usage'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
