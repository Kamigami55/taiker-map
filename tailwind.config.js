module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '172A50': '#172A50',
        191919: '#191919',
        '1A1A1A': '#1A1A1A',
        F4F7FB: '#F4F7FB',
        '2D4575': '#2D4575',
      },
      boxShadow: {
        '4px': '4px 4px 10px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'material-icons': 'Material Icons',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
