const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'Noto Sans JP'", ...defaultTheme.fontFamily.sans],
      oswald: 'Oswald',
    },
  },
  variants: {},
  plugins: [],
}
