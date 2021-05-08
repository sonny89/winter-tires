module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          DEFAULT: '#418ef6',
          darker: '#3a82e3',
        },
        gray: {
          lighter: '#aeafae',
          DEFAULT: '#a6a6a6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
