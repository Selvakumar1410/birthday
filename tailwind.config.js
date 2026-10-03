/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#f9f5f6',
          100: '#f4ebec',
          200: '#e5d1d4',
          300: '#d1acb2',
          400: '#b87f88',
          500: '#a35d68',
          600: '#8c4852',
          700: '#753941',
          800: '#613138',
          900: '#3a1a1f',
          950: '#2b1115',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          100: '#FDFBF7',
          200: '#F9F5EC',
          300: '#F2E9D8',
          400: '#EAE0C9',
          500: '#D5C3A1',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

