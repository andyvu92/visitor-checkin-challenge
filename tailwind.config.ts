import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: '#1D3C34',
        secondary: '#00B388',
        cream: '#FFF0D8',
        dark: '#111928',
      },
      spacing: {
        ...defaultTheme.spacing,
        '22': '5.5rem',
      },
      fontSize: {
        ...defaultTheme.fontSize,
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.5rem', '3rem'],
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        'lg-1': '0.625rem',
      },
      gridTemplateColumns: {
        ...defaultTheme.gridTemplateColumns,
        'section-heading': '24px 1fr',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
export default config
