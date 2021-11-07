module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '172A50': '#172A50',
        '1A1A1A': '#1A1A1A',
        F4F7FB: '#F4F7FB',
      },
      boxShadow: {
        '4px': '4px 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
