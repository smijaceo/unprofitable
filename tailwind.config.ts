import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        bone: '#f4f4f0',
        iron: '#a6a6a6',
        smoke: '#737373',
        coal: '#050505',
        graphite: '#101010',
        graphite2: '#181818'
      },
      boxShadow: {
        editorial: '0 34px 120px rgba(0,0,0,.72)',
        rim: '0 0 0 1px rgba(255,255,255,.12), 0 28px 90px rgba(0,0,0,.68)'
      },
      letterSpacing: {
        brand: '.18em'
      }
    }
  },
  plugins: []
};

export default config;
