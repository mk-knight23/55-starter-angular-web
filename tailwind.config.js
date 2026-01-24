/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'angular': {
          '50': '#fdf2f2',
          '100': '#fde6e6',
          '200': '#fbd0d0',
          '300': '#f7a9a9',
          '400': '#f07373',
          '500': '#e34343',
          '600': '#d02a2a',
          '700': '#ae1f1f',
          '800': '#901d1d',
          '900': '#781d1d',
          'primary': '#dd0031'
        },
        'canonical': {
          'bg': '#ffffff',
          'dark': '#0f172a',
          'blue': '#3b82f6',
          'accent': '#6366f1'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
