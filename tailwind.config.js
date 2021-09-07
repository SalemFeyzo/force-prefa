module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      arial: ['Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'main-background-image': "url('/images/background.svg')",
        'factory-image': "url('/images/factory.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
