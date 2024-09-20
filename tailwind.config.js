module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'perejil': '#134545',
        'primary': '#216f6f',
        'secondary': '#F7E7E9',
        'tertiary': '#ada42a',
        'cyprus': {
        '50': '#f0fdfb',
        '100': '#cef9f3',
        '200': '#9cf3e8',
        '300': '#63e5da',
        '400': '#33cec6',
        '500': '#19b3ac',
        '600': '#11908d',
        '700': '#127372',
        '800': '#145a5b',
        '900': '#134545',
        '950': '#052c2e',
    },
        'lemon-ginger': {
        '50': '#edf3ce',
        '100': '#dfe99f',
        '200': '#d1dc68',
        '300': '#c8d03f',
        '400': '#bfc131',
        '500': '#ada42a',
        '600': '#857623',
        '700': '#6f5f24',
        '800': '#605023',
        '900': '#372b11',
    },
    
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

