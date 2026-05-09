import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { StatusChip } from '../components/atoms/StatusChip';

const meta = {
  title: 'Atoms/StatusChip',
  component: StatusChip,
  args: { status: 'active' },
  argTypes: {
    status: { control: 'select', options: ['active', 'archived', 'paid', 'draft', 'open', 'void', 'paused', 'canceled'] }
  }
} satisfies Meta<typeof StatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * StatusChip renders a labelled badge for billing statuses (plan, invoice, subscription).
 * Each status has a unique color and label mapping.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Active')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['active', 'archived', 'paid', 'draft', 'open', 'void', 'paused', 'canceled'] as const).map((status) => (
        <StatusChip key={status} status={status} />
      ))}
    </div>
  )
};
