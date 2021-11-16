module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        light: '#FFFFFF',
        main: '#F7F9FC',
        dark: '#E2E8F0',
      },
      secondary: {
        green: '#71BF6A',
        yellow: '#FDCF2E',
      },
      third: {
        main: '#404040',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
