import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#dce9ff',
          200: '#bdd6ff',
          300: '#93bbff',
          400: '#6095ff',
          500: '#356bff',
          600: '#1c4cff',
          700: '#1337cc',
          800: '#132f9b',
          900: '#152a74'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
