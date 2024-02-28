import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-t': 'inset 0 6px 4px -4px rgb(0 0 0 / 0.05)',
        'inner-b': 'inset 0 -6px 4px -4px rgb(0 0 0 / 0.05)',
        'inner-y':
          'inset 0 6px 4px -4px rgb(0 0 0 / 0.05), inset 0 -6px 4px -4px rgb(0 0 0 / 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
