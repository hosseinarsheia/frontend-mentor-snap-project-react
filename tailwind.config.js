/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        my_white: 'hsl(0, 0%, 98%)',
        my_gray: 'hsl(0, 0%, 41%)',
        my_black: 'hsl(0, 0%, 8%)',
        my_bg: '#FAFAFA',
      },

      fontFamily: {
        my_font: ['Epilogue', 'serif'],
      },

      fontSize: {
        my_paragraph: '18px',
      },
    },
  },
  plugins: [],
};
