/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        surface2: '#161616',
        surface3: '#1a1a1a',
        border: 'rgba(255,255,255,0.07)',
        'border-2': 'rgba(255,255,255,0.12)',
        porto: '#f0ede8',
        muted: '#8a887e',
        accent: '#e8e0d0',
        green: {
          DEFAULT: '#4ade80',
          dim: 'rgba(74,222,128,0.12)',
        },
        amber: {
          DEFAULT: '#fbbf24',
          dim: 'rgba(251,191,36,0.1)',
        },
        blue: {
          DEFAULT: '#60a5fa',
          dim: 'rgba(96,165,250,0.1)',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
