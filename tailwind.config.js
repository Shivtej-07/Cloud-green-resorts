/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f4',
          100: '#e1ede7',
          200: '#c5dcd0',
          300: '#9bc2b0',
          400: '#6ea48d',
          500: '#48856f',
          600: '#356a57',
          700: '#2a5546',
          800: '#1F4D3A', // Primary deep forest green
          900: '#193f30',
          950: '#0d231b',
        },
        sage: {
          50: '#f6f9f5',
          100: '#eaf1e8',
          200: '#d5e4d2',
          300: '#bed5b9',
          400: '#A8C3A0', // Soft sage
          500: '#8cae83',
          600: '#6e8f66',
          700: '#567151',
          800: '#465b42',
          900: '#3a4c37',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfcf9',
          200: '#FAF7F0', // Warm cream background
          300: '#f2ece0',
          400: '#e8dcce',
          500: '#dac7b2',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f6eed6',
          200: '#eddcae',
          300: '#e1c47d',
          400: '#d6b057',
          500: '#C9A24B', // Gold accent
          600: '#b08738',
          700: '#8c662e',
          800: '#73522b',
          900: '#614429',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(31, 77, 58, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(31, 77, 58, 0.12)',
        'soft-xl': '0 20px 40px -6px rgba(31, 77, 58, 0.16)',
        'gold-glow': '0 0 25px rgba(201, 162, 75, 0.35)',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle, rgba(31,77,58,0.06) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
