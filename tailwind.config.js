/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        tiny: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4.5xl': '2.625rem',
        '5xl': '3rem',
        '5.5xl': '3.875rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },

      colors: {
        primary: '#4A00E0',         // Royal Purple
        accent: '#FF3C38',          // Coral Red-Orange
        background: '#F9FAFB',      // Light Gray-White
        'text-dark': '#1E1E2F',     // Deep Charcoal
        'text-light': '#9CA3AF',    // Cool Gray
      },

      spacing: {
        71: '17.75rem',
        95: '23.5rem',
        192: '48rem',
        1925: '49.5rem',
        193: '51rem',
      },

      margin: {
        '-112': '-28rem',
        '-120': '-30rem',
        '-128': '-32rem',
        '-144': '-36rem',
      },

      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },

      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
};
