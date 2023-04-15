/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Lexend Deca"', 'sans-serif'],
        'cursive': ['"Big Shoulders Display"', 'cursive'],
      },
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',
      },
      fontSize: {
        'body': ['15px', {
          lineHeight: '1.625',
          fontWeight: '500',
        }],
      },
    }
  },
  plugins: [],
}

