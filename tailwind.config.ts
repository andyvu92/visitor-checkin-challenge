import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D3C34',
        secondary: '#00B388',
        cream: '#FFF0D8',
        dark: '#111928',
        grey: '#637381',
        'light-grey': '#DFE4EA',
        'success': '#22AD5C',
        'success-dark': '#004434',
      },
      spacing: {
        '22': '5.5rem',
        '25': '6.25rem',
        '50': '12.5rem',
        'icon-large': '4.25rem',
      },
      fontSize: {
        '2xl': ['1.5rem', '3rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.5rem', '3rem'],
        'button': ['0.875rem]', '1.5rem'],
      },
      borderRadius: {
        'lg-1': '0.625rem',
      },
      gridTemplateColumns: {
        'section-heading': '24px 1fr',
      },
      container: {
        center: true,
      },
      minWidth: {
        'select': '250px',
        'name-value-group': '150px',
      },
      maxWidth: {
        'visit-details-review': '550px',
        'notification': '620px',
      },
      ringWidth: {
        '3': '3px',
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { 'opacity': '0' },
          to: { 'opacity': '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
