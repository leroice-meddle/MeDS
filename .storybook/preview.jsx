import { useEffect } from 'react';

/** @type { import('@storybook/nextjs-vite').Preview } */
const STYLESHEET_ID = 'meddle-light-tokens';

const withGlobalStyles = (Story) => {
  useEffect(() => {
    if (document.getElementById(STYLESHEET_ID)) return;

    const link = document.createElement('link');
    link.id = STYLESHEET_ID;
    link.rel = 'stylesheet';
    link.href = '/css/light.css';
    document.head.appendChild(link);
  }, []);

  return <Story />;
};

const preview = {
  decorators: [withGlobalStyles],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;
