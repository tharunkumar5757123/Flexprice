import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatusBadge } from '../components/molecules/InvoiceStatusBadge';

const meta = {
  title: 'Molecules/InvoiceStatusBadge',
  component: InvoiceStatusBadge,
  args: { status: 'paid' },
  argTypes: { status: { control: 'select', options: ['paid', 'draft', 'open', 'void'] } }
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(['paid', 'draft', 'open', 'void'] as const).map((status) => (
        <InvoiceStatusBadge key={status} status={status} />
      ))}
    </div>
  )
};
