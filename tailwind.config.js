/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false,
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


      // 🔵 Primary (Navy Blue #0A2540)
      // 🟠 Accent (Orange #FF6B00)
      // ⚫ Dark Grey Text (#374151)
      // ⚪ Light Grey (#9CA3AF)
      // ⚪ Background (#FFFFFF / Light Grey sections)

      colors: {
        primary: '#0A2540',         // Primary – nav, header, footer, etc.
        accent: '#FF6B00',          // Accent – CTA buttons, icons, hover
        background: '#FFFFFF',      // Main background for cards, sections
        'text-dark': '#374151',     // Paragraph, descriptions
        'text-light': '#000000',    // Placeholder text, disabled states
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
