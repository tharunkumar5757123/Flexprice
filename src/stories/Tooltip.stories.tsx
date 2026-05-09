import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Tooltip } from '../components/atoms/Tooltip';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  args: {
    label: 'Usage is calculated from accepted metered events.',
    delay: 100,
    children: <button className="rounded border border-line bg-white px-3 py-2">Hover for info</button>
  },
  argTypes: {
    label: { control: 'text' },
    delay: { control: 'number' }
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button', { name: /hover for info/i }));
    await expect(await canvas.findByText(/usage is calculated/i)).toBeInTheDocument();
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Tooltip label="Fast tooltip" delay={50}>
        <button className="rounded border border-line bg-white px-3 py-2">Fast</button>
      </Tooltip>
      <Tooltip label="Slower tooltip" delay={500}>
        <button className="rounded border border-line bg-white px-3 py-2">Slow</button>
      </Tooltip>
    </div>
  )
};
