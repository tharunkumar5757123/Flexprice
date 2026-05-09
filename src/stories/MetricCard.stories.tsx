import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { MetricCard } from '../components/molecules/MetricCard';

const meta = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  args: { label: 'Monthly recurring revenue', value: '$84,240', trend: '12.4%', trendDirection: 'up' },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    trend: { control: 'text' },
    trendDirection: { control: 'select', options: ['up', 'down'] }
  }
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * MetricCard displays a KPI with a value, trend indicator, and descriptive label.
 * Useful for dashboards and analytics overviews.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Monthly recurring revenue')).toBeInTheDocument();
    await expect(canvas.getByText('$84,240')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard label="Revenue" value="$84,240" trend="12.4%" />
      <MetricCard label="Failed invoices" value="18" trend="4.1%" trendDirection="down" />
      <MetricCard label="Usage events" value="2.4M" />
    </div>
  )
};

export const WithoutTrend: Story = {
  args: { trend: undefined, trendDirection: undefined }
};
