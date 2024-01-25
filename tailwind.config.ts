import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'dark-swamp': '#233342',
      'blue-grey': '#3a536a',
      'grey': '#ced4da',
      'light-grey': '#9a9a9a',
      'dark-grey': '#293d50',
      'yellow': '#DFB331',
    },
    fontSize: {
      'xsm': '0.5rem',
      'sm-custom': '0.563rem',
      'sm': '0.625rem',
      'md': '0.75rem',
      'lg': '0.875rem',
      'xl': '1rem',
      '2xl': '1.125rem',
      '3xl': '1.25rem',
      '4xl': '1.5rem',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {
      spacing: {
        '196': '12.25rem',
        '100': '6.25rem',
        '50': '3.125rem',
        '13': '0.813rem',
      },
      borderRadius: {}
    }
  },
  plugins: [],
} satisfies Config

