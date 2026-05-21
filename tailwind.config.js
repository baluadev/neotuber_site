/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5fff4',
          100: '#ccffe9',
          200: '#99ffd3',
          300: '#66ffbd',
          400: '#33ffa8',
          500: '#00ffa3', // Electric Neon Green
          600: '#00cc82',
          700: '#009962',
          800: '#006641',
          900: '#003321',
        },
        secondary: {
          50: '#fffcf0',
          100: '#fff7d6',
          200: '#ffefad',
          300: '#ffe683',
          400: '#ffdb5a',
          500: '#FFD54F', // Warm Yellow/Gold from custom theme
          600: '#e6bc3b',
          700: '#b39029',
          800: '#806518',
          900: '#4c3b09',
        },
        charcoal: {
          DEFAULT: '#121212',
          dark: '#0A0A0A',
          light: '#1E1E1E',
          lighter: '#2A2A2A',
        }
      },
    },
  },
  plugins: [],
}
