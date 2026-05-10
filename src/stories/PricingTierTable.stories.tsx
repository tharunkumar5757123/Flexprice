import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { tiers } from '../data/tiers';
import { PricingTierTable } from '../components/organisms/PricingTierTable';

const meta = {
  title: 'Organisms/PricingTierTable',
  component: PricingTierTable,
  args: { tiers, currency: 'USD' },
  argTypes: {
    currency: { control: 'text' }
  }
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * PricingTierTable displays tiered pricing rows with ranges and per-unit costs.
 * Supports multiple currencies and pricing models (e.g., graduated, tiered).
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/USD/i)).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4">
      <div>
        <h4 className="mb-2 text-sm font-semibold">USD Pricing</h4>
        <PricingTierTable tiers={tiers} currency="USD" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">INR Pricing (Custom Tiers)</h4>
        <PricingTierTable
          currency="INR"
          tiers={[
            { from: 1, to: 5000, unitPrice: 1.25, note: 'Launch plan' },
            { from: 5001, unitPrice: 0.75, note: 'Scale discount' }
          ]}
        />
      </div>
    </div>
  )
};
