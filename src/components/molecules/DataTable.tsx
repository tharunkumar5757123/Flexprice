import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '../atoms/Button';
import { Spinner } from '../atoms/Spinner';

export type Column<T> = {
  key: keyof T & string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
};

/**
 * DataTable renders sortable, paginated tabular data with loading and empty states.
 * It is intentionally small so invoice and customer examples remain easy to understand.
 */
export function DataTable<T extends { id: string }>({
  rows,
  columns,
  loading = false,
  pageSize = 4
}: {
  rows: T[];
  columns: Column<T>[];
  loading?: boolean;
  pageSize?: number;
}) {
  const [sortKey, setSortKey] = useState<keyof T & string>();
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(1);

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    return [...rows].sort((a, b) => {
      const left = String(a[sortKey] ?? '');
      const right = String(b[sortKey] ?? '');
      return direction === 'asc' ? left.localeCompare(right) : right.localeCompare(left);
    });
  }, [direction, rows, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const visibleRows = sortedRows.slice((page - 1) * pageSize, page * pageSize);

  const changeSort = (key: keyof T & string) => {
    setSortKey(key);
    setDirection((current) => (sortKey === key && current === 'asc' ? 'desc' : 'asc'));
  };

  if (loading) {
    return (
      <div className="premium-panel grid min-h-48 w-[720px] place-items-center">
        <Spinner label="Loading table" />
      </div>
    );
  }

  if (rows.length === 0) {
    return <div className="premium-panel soft-grid w-[720px] border-dashed p-8 text-center text-sm font-medium text-muted">No records found.</div>;
  }

  return (
    <div className="premium-panel w-[720px]">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-50/80 text-xs uppercase tracking-wide text-muted">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-3 py-2">
                {column.sortable ? (
                  <button className="premium-focus rounded px-1 font-semibold transition hover:text-ink" type="button" onClick={() => changeSort(column.key)}>
                    {column.header} sort
                  </button>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row) => (
            <tr key={row.id} className="border-t border-line transition duration-200 hover:bg-brandSoft/60">
              {columns.map((column) => (
                <td key={column.key} className="px-3 py-3">
                  {column.render ? column.render(row) : String(row[column.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-line bg-zinc-50/60 px-3 py-2">
        <span className="text-sm font-medium text-muted">
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" disabled={page === 1} onClick={() => setPage((current) => current - 1)}>
            Previous
          </Button>
          <Button variant="secondary" size="sm" disabled={page === totalPages} onClick={() => setPage((current) => current + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
