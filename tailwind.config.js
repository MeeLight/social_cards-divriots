/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Open Sans'
      },
      width: {
        82: '22rem'
      },
      colors: {
        'discord': '#5865F2',
        'twitter': '#007ac4',
        'linkedIn': '#005786'
      },
      scale: {
        riots: '1.01'
      }
    }
  },
  plugins: []
}
