/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        primary: {
          light: '#4f46e5',
          dark: '#6366f1',
        },
        background: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
};
