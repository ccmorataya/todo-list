/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    colors: {
      blue: {
        'hyper': '#005fa0',
      },
      white: {
        'smoke': '##f6f6f6',
      },
    },
    },
  },
  plugins: [],
}

