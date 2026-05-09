import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Select } from '../components/atoms/Select';

const options = [
  { label: 'Active', value: 'active' },
  { label: 'Archived', value: 'archived' },
  { label: 'Draft', value: 'draft' }
];

const meta = {
  title: 'Atoms/Select',
  component: Select,
  args: { label: 'Plan status', options },
  argTypes: {
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.selectOptions(canvas.getByLabelText(/plan status/i), 'archived');
    await expect(canvas.getByDisplayValue('Archived')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid w-72 gap-4">
      <Select label="Status" options={options} defaultValue="active" />
      <Select label="Disabled" options={options} disabled />
    </div>
  )
};
