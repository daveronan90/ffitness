module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize:{
      'xxxs':'.33rem',
      'xxs':'.40rem',
      'xss':'.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors:{
        'base-yellow' : "#df640d"
      },
      gridTemplateRows: {
        "layout": "auto 1fr",
      },
      fontFamily:{
        barlow:['barlow', 'sans-serif']
      },
      boxShadow:{
        '3xl':'0 0 4px 4px black inset',
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
};
