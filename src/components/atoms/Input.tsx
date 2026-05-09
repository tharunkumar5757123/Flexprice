import type { InputHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  error?: string;
  prefix?: ReactNode;
};

/**
 * Input is a labelled form control for text and numeric billing values.
 * It includes optional prefix content for currencies and a visible validation error state.
 */
export function Input({ label, error, prefix, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <label className="block w-full space-y-1 text-sm">
      {label && <span className="font-medium text-zinc-800">{label}</span>}
      <span
        className={classNames(
          'flex h-9 items-center rounded border bg-white/90 px-3 shadow-sm transition-all duration-200 focus-within:-translate-y-0.5 focus-within:border-brand focus-within:bg-white focus-within:shadow-glow focus-within:ring-2 focus-within:ring-brand/15',
          error ? 'border-danger ring-2 ring-danger/10' : 'border-line',
          className,
        )}
      >
        {prefix && <span className="mr-2 text-muted">{prefix}</span>}
        <input id={inputId} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:text-zinc-400" {...props} />
      </span>
      {error && <span className="text-xs text-danger">{error}</span>}
    </label>
  );
}
