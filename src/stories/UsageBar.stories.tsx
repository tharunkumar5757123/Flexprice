import type { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from '../components/molecules/UsageBar';

const meta = {
  title: 'Molecules/UsageBar',
  component: UsageBar,
  args: { label: 'API calls', used: 68000, limit: 100000 },
  argTypes: {
    label: { control: 'text' },
    used: { control: 'number' },
    limit: { control: 'number' }
  }
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-5">
      <UsageBar label="API calls" used={68000} limit={100000} />
      <UsageBar label="Credits" used={950} limit={1000} />
      <UsageBar label="Seats" used={18} limit={50} />
    </div>
  )
};
