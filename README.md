# FlexPrice Storybook Component Library

A comprehensive Storybook component library built for the FlexPrice take-home assignment. This project showcases 15+ reusable React components organized by complexity (atoms, molecules, organisms), complete with Storybook stories, unit tests, and interaction tests.

**Live Storybook:** [Coming soon after deployment]

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Storybook locally (http://localhost:6006)
npm run storybook

# Run unit tests
npm test

# Build Storybook for production
npm run build-storybook

# Type check
npm run typecheck
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Input, Select, Tooltip, etc.)
│   ├── molecules/      # Composed units (DataTable, MetricCard, SearchBar, etc.)
│   └── organisms/      # Feature-level sections (SidebarNav, PricingTierTable, EmptyState)
├── stories/            # Storybook story files for each component
├── utils/              # Utility functions (currency formatting, pricing calculations)
├── data/               # Mock JSON data
├── styles.css          # Global Tailwind styles
├── lib/                # Helper libraries
└── main.tsx            # Vite app entry point
```

## 🎨 Component Coverage

### Atoms (6)
- **Button** — Multiple variants (primary, secondary, ghost, danger), sizes (sm, md, lg), states (loading, disabled)
- **Input** — With label, error state, prefix (currency), disabled state
- **Select** — Single-select dropdown with native HTML
- **Tooltip** — Hover reveal with configurable delay
- **Spinner** — Loading indicator with accessible label
- **StatusChip** — Colored badges for billing statuses (active, archived, paid, draft, open, void, paused, canceled)

### Molecules (6)
- **DataTable** — Sortable, paginated with loading/empty states
- **MetricCard** — KPI display with trend indicators
- **SearchBar** — Debounced input with clear button
- **InvoiceStatusBadge** — Status-specific badge renderer
- **UsageBar** — Progress bar for usage tracking
- **DateRangePicker** — Date range inputs

### Organisms (3)
- **SidebarNav** — Collapsible navigation with active highlighting
- **PricingTierTable** — Tiered pricing display
- **EmptyState** — Full-page empty state with CTA

## ✅ Testing

### Unit Tests (Vitest + React Testing Library)
- **Utilities:** `formatCurrency()`, `getStatusLabel()`, `calculateTieredPrice()`
- **Components:** Button and Input render, interaction, and state tests
- **Coverage:** 28 tests across billing utilities and components

Run tests:
```bash
npm test              # Watch mode
npm test -- run       # Single run
npm run test:ui       # UI dashboard
```

### Storybook Interaction Tests
Every interactive component includes:
- Click handlers with `@storybook/test`
- Form input validation
- Hover/focus states
- Accessible assertions (roles, labels)

## 🛠️ Built With

- **React 18** — UI library
- **TypeScript** — Type safety
- **Storybook 8** — Component documentation
- **Tailwind CSS** — Utility-first styling
- **Vite 6** — Build tool
- **Vitest** — Unit testing framework
- **React Testing Library** — Component testing
- **PostCSS** — CSS processing

## 📝 Stories & Controls

Every component story includes:
1. **Default Story** — Happy-path usage with interaction test
2. **Variants Story** — All visual states in one view
3. **Controls** — Live prop editing in Storybook UI
4. **Documentation** — JSDoc comments explaining usage
5. **Interaction Tests** — `play()` functions validating behavior

Example: Button story has controls for variant, size, loading, and disabled states.

## 🔍 Code Quality

- **Type Safety:** Full TypeScript with strict mode
- **Naming:** Clear, semantic component and prop names
- **Styling:** Consistent Tailwind design tokens from `tailwind.config.js`
- **Reusability:** Composable component hierarchy (atoms → molecules → organisms)

## 🚢 Deployment

Deployed to Vercel with automatic builds from the Storybook build output.

```bash
# Build for production
npm run build-storybook
# Output in: storybook-static/
```

## 📊 Assignment Checklist

- ✅ 15+ components (atoms, molecules, organisms)
- ✅ Storybook stories with controls and variants
- ✅ Interaction tests using `@storybook/test`
- ✅ Component documentation (JSDoc)
- ✅ Unit tests (Vitest + React Testing Library)
- ✅ Utility function tests
- ✅ TypeScript type safety
- ✅ Design consistency (Tailwind + custom design tokens)
- ✅ Mock data (JSON)
- ✅ No copy-paste from FlexPrice source (original implementations)

## 💡 Notes

- Components are simplified, production-ready versions inspired by billing UI patterns
- All components use controlled props and render pure based on inputs
- Storybook provides interactive documentation and visual regression prevention
- Unit tests ensure utility accuracy and component behavior
- Deployment ready with zero configuration needed

## 📄 License

Take-home assignment for FlexPrice — 2025

