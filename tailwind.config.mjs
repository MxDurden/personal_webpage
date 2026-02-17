/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'darker': '#0a0a0a',
        'dark': '#111111',
        'carbon': '#1a1a1a',
        'steel': {
          900: '#222222',
          800: '#2a2a2a',
          700: '#333333',
          600: '#444444',
          500: '#666666',
          400: '#888888',
          300: '#aaaaaa',
          200: '#cccccc',
          100: '#e0e0e0',
        },
        'silver': '#c0c0c0',
        'chrome': '#e8e8e8',
        'accent': '#10b981',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'typing': 'typing 2s steps(20) forwards, blink 0.75s step-end infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#10b981' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-sm': '0 0 10px rgba(16, 185, 129, 0.2)',
        'steel': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'steel-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
