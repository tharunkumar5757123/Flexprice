import type { SelectHTMLAttributes } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: SelectOption[];
};

/**
 * Select renders a simple single-choice dropdown used in forms and filters.
 * The native select keeps the component small, keyboard-friendly, and easy to explain.
 */
export function Select({ label, options, ...props }: SelectProps) {
  return (
    <label className="block w-full space-y-1 text-sm">
      {label && <span className="font-medium text-zinc-800">{label}</span>}
      <select className="h-9 w-full rounded border border-line bg-white/90 px-3 text-sm shadow-sm outline-none transition-all duration-200 hover:border-lineStrong focus:-translate-y-0.5 focus:border-brand focus:bg-white focus:shadow-glow focus:ring-2 focus:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-60" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
