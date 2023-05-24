/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem',
      }
    },
    colors: {
      "transparent": "rgba(0,0,0,0.4)",
      "blue": "#132e3e",
      "white": "#f2f2f2",
      "green": "#73ff73",
      "red": "#9f5962"
    },
    fontFamily: {
      "sans": ["Merriweather"],
    },
    extend: {},
  },
  plugins: [],
}

