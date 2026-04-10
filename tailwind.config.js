/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary:  { DEFAULT: '#0B2E24', light: '#174D3E' },
        secondary: { DEFAULT: '#1E7A5F', light: '#2AA87F' },
        accent:   { DEFAULT: '#D4A96A', light: '#EDD5A8', soft: '#F7EDD8' },
      },
    },
  },
  plugins: [],
}
 
