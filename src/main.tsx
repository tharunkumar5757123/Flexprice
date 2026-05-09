import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { EmptyState } from './components/organisms/EmptyState';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="p-8">
      <EmptyState
        icon="FP"
        headline="FlexPrice Storybook"
        subtext="Run npm run storybook to review the original component library."
        ctaLabel="Ready"
        onCta={() => window.location.assign('http://localhost:6006')}
      />
    </main>
  </React.StrictMode>,
);
