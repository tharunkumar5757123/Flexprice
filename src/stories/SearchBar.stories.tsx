import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SearchBar } from '../components/molecules/SearchBar';

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  args: { placeholder: 'Search customers', debounceMs: 0 },
  argTypes: {
    placeholder: { control: 'text' },
    debounceMs: { control: 'number' }
  }
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/search customers/i), 'acme');
    await expect(canvas.getByDisplayValue('acme')).toBeInTheDocument();
    await userEvent.click(canvas.getByLabelText(/clear search/i));
    await expect(canvas.getByPlaceholderText(/search customers/i)).toHaveValue('');
  }
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-3">
      <SearchBar placeholder="Search invoices" />
      <SearchBar placeholder="Search plans" debounceMs={500} />
    </div>
  )
};
