/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#00BC4C',
        'secondary' : '#002132',
      }, 
      screens : {
        'xs' : '360px'
      },
    },
  },
  plugins: [],
}

