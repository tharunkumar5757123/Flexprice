import { useEffect, useState } from 'react';

/**
 * SearchBar captures table search text and debounces updates to the parent.
 * It includes a clear button so users can quickly reset list filters.
 */
export function SearchBar({
  placeholder = 'Search',
  debounceMs = 250,
  onSearch
}: {
  placeholder?: string;
  debounceMs?: number;
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => onSearch?.(query), debounceMs);
    return () => window.clearTimeout(timer);
  }, [debounceMs, onSearch, query]);

  return (
    <div className="premium-focus flex h-10 w-72 items-center gap-2 rounded border border-line bg-white/90 px-3 shadow-soft transition-all duration-200 focus-within:-translate-y-0.5 focus-within:border-brand focus-within:shadow-glow">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">Search</span>
      <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} />
      {query && (
        <button className="grid h-6 w-6 place-items-center rounded-full text-muted transition hover:bg-zinc-100 hover:text-zinc-900" type="button" aria-label="Clear search" onClick={() => setQuery('')}>
          x
        </button>
      )}
    </div>
  );
}
