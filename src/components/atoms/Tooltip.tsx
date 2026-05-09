import { useState, type ReactNode } from 'react';

/**
 * Tooltip reveals short supporting information after hover or focus.
 * A delay can be configured to avoid distracting users during normal scanning.
 */
export function Tooltip({ label, delay = 250, children }: { label: string; delay?: number; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<number | undefined>();

  const show = () => setTimer(window.setTimeout(() => setOpen(true), delay));
  const hide = () => {
    window.clearTimeout(timer);
    setOpen(false);
  };

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {open && <span className="absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-ink px-3 py-2 text-xs text-white shadow-lift animate-fade-up">{label}</span>}
    </span>
  );
}
