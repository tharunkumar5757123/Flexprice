import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { EmptyState } from '../components/organisms/EmptyState';

const meta = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  args: {
    icon: 'FP',
    headline: 'No plans yet',
    subtext: 'Create a pricing plan before attaching subscriptions to customers.',
    ctaLabel: 'Create plan',
    onCta: fn()
  },
  argTypes: {
    icon: { control: 'text' },
    headline: { control: 'text' },
    subtext: { control: 'text' },
    ctaLabel: { control: 'text' }
  }
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /create plan/i }));
    await expect(args.onCta).toHaveBeenCalled();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4">
      <EmptyState icon="PL" headline="No plans yet" subtext="Create pricing packages for your customers." ctaLabel="Create plan" />
      <EmptyState icon="$" headline="No invoices found" subtext="Invoices will appear after a billing period closes." />
    </div>
  )
};
