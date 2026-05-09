import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Input } from '../components/atoms/Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  args: { label: 'Plan name', placeholder: 'Growth plan' },
  argTypes: {
    type: { control: 'select', options: ['text', 'number', 'date'] },
    error: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(/plan name/i), 'Starter');
    await expect(canvas.getByDisplayValue('Starter')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <Input label="Text" placeholder="Customer name" />
      <Input label="Amount" type="number" prefix="$" defaultValue={99} />
      <Input label="With error" defaultValue="0" error="Amount must be greater than zero" />
      <Input label="Disabled" defaultValue="Locked" disabled />
    </div>
  )
};
