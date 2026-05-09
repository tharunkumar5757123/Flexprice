import type { Preview } from '@storybook/react';
import { createElement } from 'react';
import '../src/styles.css';

const preview: Preview = {
  decorators: [
    (Story) => createElement('div', { className: 'min-h-screen w-full bg-transparent p-8' }, createElement(Story))
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'premium',
      values: [
        { name: 'premium', value: '#F8FAFC' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'ink', value: '#092E44' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
