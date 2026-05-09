import { classNames } from '../../lib/classNames';

const items = ['Dashboard', 'Plans', 'Customers', 'Subscriptions', 'Invoices', 'Usage'];

/**
 * SidebarNav is a collapsible navigation rail with active route highlighting.
 * It uses simple symbols and labels to model a billing admin workspace.
 */
export function SidebarNav({ active = 'Dashboard', collapsed = false }: { active?: string; collapsed?: boolean }) {
  return (
    <nav className={classNames('premium-panel p-2 transition-all duration-300', collapsed ? 'w-14' : 'w-60')} aria-label="Primary">
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className={classNames(
            'premium-focus mb-1 flex h-9 items-center gap-3 rounded px-3 text-sm font-medium transition-all duration-200 hover:translate-x-0.5',
            item === active ? 'shine bg-ink text-white shadow-glow' : 'text-zinc-700 hover:bg-white hover:shadow-sm',
          )}
        >
          <span className={classNames('grid h-6 w-6 place-items-center rounded text-xs', item === active ? 'bg-white/15 text-white' : 'bg-zinc-100 text-ink')}>{item.slice(0, 1)}</span>
          {!collapsed && <span>{item}</span>}
        </a>
      ))}
    </nav>
  );
}
