import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNav } from '../components/organisms/SidebarNav';

const meta = {
  title: 'Organisms/SidebarNav',
  component: SidebarNav,
  args: { active: 'Plans', collapsed: false },
  argTypes: {
    active: { control: 'select', options: ['Dashboard', 'Plans', 'Customers', 'Subscriptions', 'Invoices', 'Usage'] },
    collapsed: { control: 'boolean' }
  }
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-5">
      <SidebarNav active="Dashboard" />
      <SidebarNav active="Invoices" collapsed />
    </div>
  )
};
