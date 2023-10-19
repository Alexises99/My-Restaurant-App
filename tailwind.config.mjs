/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secundary-color': 'var(--secundary-color)',
        'background-color': 'var(--background-color)',
        'dark-gray': 'var(--dark-gray)',
      },
    },
    fontFamily: {
      display: ['Saria', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
