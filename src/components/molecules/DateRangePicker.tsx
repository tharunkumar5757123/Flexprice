import { Input } from '../atoms/Input';

/**
 * DateRangePicker captures a start and end date for analytics filtering.
 * It uses native date inputs to stay accessible and lightweight.
 */
export function DateRangePicker({
  from,
  to,
  onChange
}: {
  from?: string;
  to?: string;
  onChange?: (range: { from: string; to: string }) => void;
}) {
  return (
    <div className="premium-panel flex gap-3 p-4">
      <Input label="From" type="date" defaultValue={from} onChange={(event) => onChange?.({ from: event.currentTarget.value, to: to ?? '' })} />
      <Input label="To" type="date" defaultValue={to} onChange={(event) => onChange?.({ from: from ?? '', to: event.currentTarget.value })} />
    </div>
  );
}
