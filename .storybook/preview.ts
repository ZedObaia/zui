// .storybook/preview.ts
import '../src/output.css';
import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
import { fn } from '@storybook/test';

setup((app) => {
  app.use(PrimeVue, {
      unstyled: true,
  });
});

const preview: Preview = {
  parameters: {
    actions: { argTypes: { onClick: fn() } }, // Explicit action assignment
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;