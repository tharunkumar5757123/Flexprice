import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import invoices from '../data/invoices.json';
import { DataTable, type Column } from '../components/molecules/DataTable';
import { InvoiceStatusBadge } from '../components/molecules/InvoiceStatusBadge';
import { formatCurrency, type BillingStatus } from '../utils/billing';

type Invoice = (typeof invoices)[number];

const columns: Column<Invoice>[] = [
  { key: 'id', header: 'Invoice', sortable: true },
  { key: 'customer', header: 'Customer', sortable: true },
  { key: 'status', header: 'Status', render: (row) => <InvoiceStatusBadge status={row.status as Extract<BillingStatus, 'paid' | 'draft' | 'open' | 'void'>} /> },
  { key: 'amount', header: 'Amount', sortable: true, render: (row) => formatCurrency(row.amount) },
  { key: 'createdAt', header: 'Created', sortable: true }
];

const meta = {
  title: 'Molecules/DataTable',
  component: DataTable<Invoice>,
  args: { rows: invoices, columns, pageSize: 4 },
  argTypes: {
    loading: { control: 'boolean' },
    pageSize: { control: 'number' }
  }
} satisfies Meta<typeof DataTable<Invoice>>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * DataTable renders sortable, paginated tabular data with loading and empty states.
 * Clicking a column header sorts by that column; pagination controls navigate rows.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /customer/i }));
    await expect(canvas.getByText('Acme AI')).toBeInTheDocument();
  }
};

export const Loading: Story = {
  args: { loading: true }
};

export const Empty: Story = {
  args: { rows: [] }
};

export const CustomPageSize: Story = {
  args: { pageSize: 2 }
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4">
      <div>
        <h4 className="mb-2 text-sm font-semibold">Default (4 rows per page)</h4>
        <DataTable rows={invoices} columns={columns} pageSize={4} />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">Loading state</h4>
        <DataTable rows={[]} columns={columns} loading />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">Empty state</h4>
        <DataTable rows={[]} columns={columns} />
      </div>
    </div>
  )
};
