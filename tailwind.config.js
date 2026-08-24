/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background':     '#09090B',
        'background-alt': '#111113',
        'surface':        '#18181B',
        // accent — indigo, professional
        'neon-blue':      '#6366F1',
        'neon-purple':    '#818CF8',
        'neon-green':     '#10B981',
        'neon-red':       '#EF4444',
        'text-primary':   '#F8FAFC',
        'text-muted':     '#71717A',
        'border-subtle':  '#27272A',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter':   ['Inter', 'sans-serif'],
        'code':    ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
