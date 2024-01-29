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
      'light-yellow': '#d9cc36',
      'dark-yellow': '#c8cc5c',
      'red': '#ff0000',
      'ocean-blue': '#0059b3',
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
      '5xl': '1.75rem',
      '6xl': '2rem',
      '7xl': '2.25rem',
      '8xl': '2.5rem',
      '9xl': '3rem',

    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {
      spacing: {
        '196': '12.25rem',
        '104': '6.5rem',
        '100': '6.25rem',
        '73': '4.563rem',
        '50': '3.125rem',
        '30': '1.875rem',
        '13': '0.813rem',
        'percent-28': '28%',
        'percent-48': '48%',
        'percent-73': '73%',
      },
      screens: {
        '4k': '2560px',
      },
      borderRadius: {}
    }
  },
  plugins: [
    // require('@tailwindcss/forms')({
    //   strategy: 'class',
    // }),
  ],
} satisfies Config

