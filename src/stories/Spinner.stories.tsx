import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Spinner } from '../components/atoms/Spinner';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  args: { label: 'Loading invoices' },
  argTypes: { label: { control: 'text' } }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Spinner communicates short loading states in buttons, tables, and panels.
 * The accessible label is visually hidden but available to screen readers.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner />
      <span className="inline-flex items-center gap-2 rounded border border-line bg-white px-3 py-2 text-sm">
        <Spinner /> Loading table
      </span>
    </div>
  )
};
