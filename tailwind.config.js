/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Lexend Deca"', 'sans-serif'],
        'cursive': ['"Big Shoulders Display"', 'cursive'],
      },
      colors: {
        'brightOrange': 'hsl(31, 77%, 52%)',
        'darkCyan': 'hsl(184, 100%, 22%)',
        'veryDarkCyan': 'hsl(179, 100%, 13%)',
        'veryLightGray': 'hsl(0, 0%, 95%)',
      },
    }
  },
  plugins: [],
}

