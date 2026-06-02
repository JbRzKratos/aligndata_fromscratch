import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6'
        },
        cyan: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          light: '#22D3EE'
        },
        navy: {
          900: '#040D1A',
          800: '#071428',
          700: '#0B1A35',
          600: '#0F2347',
          500: '#152D5A'
        },
        slate: {
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0'
        },
        success: '#10B981',
        warning: '#F59E0B'
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.2) 0%, transparent 70%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
