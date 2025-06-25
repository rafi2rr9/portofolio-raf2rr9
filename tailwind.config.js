// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mengatur 'Poppins' sebagai font sans-serif utama,
        // dengan fallback ke font default Tailwind.
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'splash-fade': 'fade-in-out 3s ease-in-out forwards', // <-- BARU DITAMBAHKAN
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in-right': {
            '0%': { opacity: '0', transform: 'translateX(-20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-left': {
            '0%': { opacity: '0', transform: 'translateX(20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-out': { // <-- BARU DITAMBAHKAN
            '0%': { opacity: '0' },
            '20%, 80%': { opacity: '1' },
            '100%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}