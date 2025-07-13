/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0A0E17',
        'background-alt': '#111827',
        'neon-blue': '#00E5FF',
        'neon-purple': '#9A4DFF',
        'neon-green': '#00FF9D',
        'neon-red': '#FF3E3E',
        'cyber-yellow': '#FFD600',
        'text-primary': '#EAECEF',
        'terminal-green': '#0CFF70',
        'matrix-green': '#00FF41',
        'dark-blue': '#0B1021',
        'grid-line': 'rgba(0, 229, 255, 0.1)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, var(--tw-gradient-stops)), linear-gradient(to bottom, var(--tw-gradient-stops))',
        'matrix-rain': 'url("/backgrounds/matrix-rain.svg")',
        'circuit-pattern': 'url("/backgrounds/circuit-pattern.svg")',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(0, 229, 255, 0.5), 0 0 10px rgba(0, 229, 255, 0.3)' },
          '100%': { textShadow: '0 0 10px rgba(0, 229, 255, 0.8), 0 0 20px rgba(0, 229, 255, 0.5), 0 0 30px rgba(0, 229, 255, 0.3)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00E5FF' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}