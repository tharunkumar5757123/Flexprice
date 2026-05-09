import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { DateRangePicker } from '../components/molecules/DateRangePicker';

const meta = {
  title: 'Molecules/DateRangePicker',
  component: DateRangePicker,
  args: { from: '2026-05-01', to: '2026-05-09' },
  argTypes: {
    from: { control: 'text' },
    to: { control: 'text' }
  }
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(canvas.getByLabelText(/from/i));
    await userEvent.type(canvas.getByLabelText(/from/i), '2026-05-02');
    await expect(canvas.getByDisplayValue('2026-05-02')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => <DateRangePicker from="2026-04-01" to="2026-04-30" />
};
