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
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'scale-smooth': 'scale-smooth 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(74, 222, 128, 0.3), 0 0 40px rgba(74, 222, 128, 0.15)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(74, 222, 128, 0.5), 0 0 60px rgba(74, 222, 128, 0.25)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'scale-smooth': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(74, 222, 128, 0.3)',
        'glow-md': '0 0 30px rgba(74, 222, 128, 0.4)',
        'glow-lg': '0 0 40px rgba(74, 222, 128, 0.5)',
        'glow-linkedin': '0 0 30px rgba(0, 119, 181, 0.4)',
        'glow-github': '0 0 30px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
