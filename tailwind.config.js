module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        secondary: '#3A4750',
        accent: '#303841',
        light: '#EEEEEE',
        dark: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
