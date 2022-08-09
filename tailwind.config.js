module.exports = {
  content: [
    "./index.html",
    "./src/**/*.njk",
    "./src/**/*.html",
  ],
  theme: {
    screens: {
      xs: '416px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '1441px',
      xxxxl: '2000px'
    },
    colors: {
      red: {
        500: '#942308'
      },
      gold: {
        600: '#83755E'
      },
      cream: {
        400: '#FCFAF8',
        500: '#EADFD7'
      },
      black: {
        800: '#413B2F',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontSize: {
      '0': '0px',
      '2xs': '10px',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      'h1-init': ['72px', '1.1'],
      'h2-init': ['64px', '1.1'],
      'h3-init': ['48px', '1.5'],
      'h4-init': ['32px', '1.2'],
      'p-init': ['20px', '1.2'],
      'sm-p-init': ['16px', '1.2'],
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '88rem',
      '9xl': '96rem',
      '10xl': '104rem',
      '12xl': '120rem',
      full: '100%',
    },
    extend: {},
  },
  plugins: [],
}
