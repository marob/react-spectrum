/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    respectDefaultRingColorOpacity: true
  },
  darkMode: 'class',
  theme: {
    screens: {
      xs: "304px",
      sm: "768px",
      md: "1280px",
      lg: "1768px",
      xl: "2160px"
    },
    colors: {
      white: "var(--spectrum-global-color-static-white)",
      black: "var(--spectrum-global-color-static-black)",
      transparent: "var(--spectrum-alias-global-color-transparent)",
      gray: {
        50: "var(--spectrum-gray-50)",
        75: "var(--spectrum-gray-75)",
        100: "var(--spectrum-gray-100)",
        200: "var(--spectrum-gray-200)",
        300: "var(--spectrum-gray-300)",
        400: "var(--spectrum-gray-400)",
        500: "var(--spectrum-gray-500)",
        600: "var(--spectrum-gray-600)",
        700: "var(--spectrum-gray-700)",
        800: "var(--spectrum-gray-800)",
        900: "var(--spectrum-gray-900)",
      },
      blue: {
        100: "var(--spectrum-blue-100)",
        200: "var(--spectrum-blue-200)",
        300: "var(--spectrum-blue-300)",
        400: "var(--spectrum-blue-400)",
        500: "var(--spectrum-blue-500)",
        600: "var(--spectrum-blue-600)",
        700: "var(--spectrum-blue-700)",
        800: "var(--spectrum-blue-800)",
        900: "var(--spectrum-blue-900)",
        1000: "var(--spectrum-blue-1000)",
        1100: "var(--spectrum-blue-1100)",
        1200: "var(--spectrum-blue-1200)",
        1300: "var(--spectrum-blue-1300)",
        1400: "var(--spectrum-blue-1400)",
      },
      green: {
        100: "var(--spectrum-green-100)",
        200: "var(--spectrum-green-200)",
        300: "var(--spectrum-green-300)",
        400: "var(--spectrum-green-400)",
        500: "var(--spectrum-green-500)",
        600: "var(--spectrum-green-600)",
        700: "var(--spectrum-green-700)",
        800: "var(--spectrum-green-800)",
        900: "var(--spectrum-green-900)",
        1000: "var(--spectrum-green-1000)",
        1100: "var(--spectrum-green-1100)",
        1200: "var(--spectrum-green-1200)",
        1300: "var(--spectrum-green-1300)",
        1400: "var(--spectrum-green-1400)"
      },
      orange: {
        100: "var(--spectrum-orange-100)",
        200: "var(--spectrum-orange-200)",
        300: "var(--spectrum-orange-300)",
        400: "var(--spectrum-orange-400)",
        500: "var(--spectrum-orange-500)",
        600: "var(--spectrum-orange-600)",
        700: "var(--spectrum-orange-700)",
        800: "var(--spectrum-orange-800)",
        900: "var(--spectrum-orange-900)",
        1000: "var(--spectrum-orange-1000)",
        1100: "var(--spectrum-orange-1100)",
        1200: "var(--spectrum-orange-1200)",
        1300: "var(--spectrum-orange-1300)",
        1400: "var(--spectrum-orange-1400)"
      },
      red: {
        100: "var(--spectrum-red-100)",
        200: "var(--spectrum-red-200)",
        300: "var(--spectrum-red-300)",
        400: "var(--spectrum-red-400)",
        500: "var(--spectrum-red-500)",
        600: "var(--spectrum-red-600)",
        700: "var(--spectrum-red-700)",
        800: "var(--spectrum-red-800)",
        900: "var(--spectrum-red-900)",
        1000: "var(--spectrum-red-1000)",
        1100: "var(--spectrum-red-1100)",
        1200: "var(--spectrum-red-1200)",
        1300: "var(--spectrum-red-1300)",
        1400: "var(--spectrum-red-1400)"
      },
      celery: {
        100: "var(--spectrum-celery-100)",
        200: "var(--spectrum-celery-200)",
        300: "var(--spectrum-celery-300)",
        400: "var(--spectrum-celery-400)",
        500: "var(--spectrum-celery-500)",
        600: "var(--spectrum-celery-600)",
        700: "var(--spectrum-celery-700)",
        800: "var(--spectrum-celery-800)",
        900: "var(--spectrum-celery-900)",
        1000: "var(--spectrum-celery-1000)",
        1100: "var(--spectrum-celery-1100)",
        1200: "var(--spectrum-celery-1200)",
        1300: "var(--spectrum-celery-1300)",
        1400: "var(--spectrum-celery-1400)"
      },
      chartreuse: {
        100: "var(--spectrum-chartreuse-100)",
        200: "var(--spectrum-chartreuse-200)",
        300: "var(--spectrum-chartreuse-300)",
        400: "var(--spectrum-chartreuse-400)",
        500: "var(--spectrum-chartreuse-500)",
        600: "var(--spectrum-chartreuse-600)",
        700: "var(--spectrum-chartreuse-700)",
        800: "var(--spectrum-chartreuse-800)",
        900: "var(--spectrum-chartreuse-900)",
        1000: "var(--spectrum-chartreuse-1000)",
        1100: "var(--spectrum-chartreuse-1100)",
        1200: "var(--spectrum-chartreuse-1200)",
        1300: "var(--spectrum-chartreuse-1300)",
        1400: "var(--spectrum-chartreuse-1400)"
      },
      cyan: {
        100: "var(--spectrum-cyan-100)",
        200: "var(--spectrum-cyan-200)",
        300: "var(--spectrum-cyan-300)",
        400: "var(--spectrum-cyan-400)",
        500: "var(--spectrum-cyan-500)",
        600: "var(--spectrum-cyan-600)",
        700: "var(--spectrum-cyan-700)",
        800: "var(--spectrum-cyan-800)",
        900: "var(--spectrum-cyan-900)",
        1000: "var(--spectrum-cyan-1000)",
        1100: "var(--spectrum-cyan-1100)",
        1200: "var(--spectrum-cyan-1200)",
        1300: "var(--spectrum-cyan-1300)",
        1400: "var(--spectrum-cyan-1400)"
      },
      fuchsia: {
        100: "var(--spectrum-fuchsia-100)",
        200: "var(--spectrum-fuchsia-200)",
        300: "var(--spectrum-fuchsia-300)",
        400: "var(--spectrum-fuchsia-400)",
        500: "var(--spectrum-fuchsia-500)",
        600: "var(--spectrum-fuchsia-600)",
        700: "var(--spectrum-fuchsia-700)",
        800: "var(--spectrum-fuchsia-800)",
        900: "var(--spectrum-fuchsia-900)",
        1000: "var(--spectrum-fuchsia-1000)",
        1100: "var(--spectrum-fuchsia-1100)",
        1200: "var(--spectrum-fuchsia-1200)",
        1300: "var(--spectrum-fuchsia-1300)",
        1400: "var(--spectrum-fuchsia-1400)"
      },
      indigo: {
        100: "var(--spectrum-indigo-100)",
        200: "var(--spectrum-indigo-200)",
        300: "var(--spectrum-indigo-300)",
        400: "var(--spectrum-indigo-400)",
        500: "var(--spectrum-indigo-500)",
        600: "var(--spectrum-indigo-600)",
        700: "var(--spectrum-indigo-700)",
        800: "var(--spectrum-indigo-800)",
        900: "var(--spectrum-indigo-900)",
        1000: "var(--spectrum-indigo-1000)",
        1100: "var(--spectrum-indigo-1100)",
        1200: "var(--spectrum-indigo-1200)",
        1300: "var(--spectrum-indigo-1300)",
        1400: "var(--spectrum-indigo-1400)"
      },
      magenta: {
        100: "var(--spectrum-magenta-100)",
        200: "var(--spectrum-magenta-200)",
        300: "var(--spectrum-magenta-300)",
        400: "var(--spectrum-magenta-400)",
        500: "var(--spectrum-magenta-500)",
        600: "var(--spectrum-magenta-600)",
        700: "var(--spectrum-magenta-700)",
        800: "var(--spectrum-magenta-800)",
        900: "var(--spectrum-magenta-900)",
        1000: "var(--spectrum-magenta-1000)",
        1100: "var(--spectrum-magenta-1100)",
        1200: "var(--spectrum-magenta-1200)",
        1300: "var(--spectrum-magenta-1300)",
        1400: "var(--spectrum-magenta-1400)"
      },
      purple: {
        100: "var(--spectrum-purple-100)",
        200: "var(--spectrum-purple-200)",
        300: "var(--spectrum-purple-300)",
        400: "var(--spectrum-purple-400)",
        500: "var(--spectrum-purple-500)",
        600: "var(--spectrum-purple-600)",
        700: "var(--spectrum-purple-700)",
        800: "var(--spectrum-purple-800)",
        900: "var(--spectrum-purple-900)",
        1000: "var(--spectrum-purple-1000)",
        1100: "var(--spectrum-purple-1100)",
        1200: "var(--spectrum-purple-1200)",
        1300: "var(--spectrum-purple-1300)",
        1400: "var(--spectrum-purple-1400)"
      },
      seafoam: {
        100: "var(--spectrum-seafoam-100)",
        200: "var(--spectrum-seafoam-200)",
        300: "var(--spectrum-seafoam-300)",
        400: "var(--spectrum-seafoam-400)",
        500: "var(--spectrum-seafoam-500)",
        600: "var(--spectrum-seafoam-600)",
        700: "var(--spectrum-seafoam-700)",
        800: "var(--spectrum-seafoam-800)",
        900: "var(--spectrum-seafoam-900)",
        1000: "var(--spectrum-seafoam-1000)",
        1100: "var(--spectrum-seafoam-1100)",
        1200: "var(--spectrum-seafoam-1200)",
        1300: "var(--spectrum-seafoam-1300)",
        1400: "var(--spectrum-seafoam-1400)"
      },
      yellow: {
        100: "var(--spectrum-yellow-100)",
        200: "var(--spectrum-yellow-200)",
        300: "var(--spectrum-yellow-300)",
        400: "var(--spectrum-yellow-400)",
        500: "var(--spectrum-yellow-500)",
        600: "var(--spectrum-yellow-600)",
        700: "var(--spectrum-yellow-700)",
        800: "var(--spectrum-yellow-800)",
        900: "var(--spectrum-yellow-900)",
        1000: "var(--spectrum-yellow-1000)",
        1100: "var(--spectrum-yellow-1100)",
        1200: "var(--spectrum-yellow-1200)",
        1300: "var(--spectrum-yellow-1300)",
        1400: "var(--spectrum-yellow-1400)"
      },
      negative: {
        DEFAULT: "var(--spectrum-red-900)",
        background: "var(--spectrum-negative-background-color-default)",
        hover: "var(--spectrum-red-1000)",
        dark: "var(--spectrum-red-1000)",
        border: "var(--spectrum-red-800)",
        icon: "var(--spectrum-negative-visual-color)",
        status: "var(--spectrum-negative-visual-color)",
        textLarge: "var(--spectrum-red-900)",
        textSmall: "var(--spectrum-red-900)",
        down: "var(--spectrum-red-1100)",
        focus: "var(--spectrum-red-1100)",
      },
      notice: {
        DEFAULT: "var(--spectrum-orange-700)",
        background: "var(--spectrum-orange-800)",
        hover: "var(--spectrum-orange-600)",
        dark: "var(--spectrum-orange-800)",
        border: "var(--spectrum-orange-600)",
        icon: "var(--spectrum-notice-visual-color)",
        status: "var(--spectrum-notice-visual-color)",
        textLarge: "var(--spectrum-orange-700)",
        textSmall: "var(--spectrum-orange-800)",
        down: "var(--spectrum-orange-900)",
        focus: "var(--spectrum-orange-600)",
      },
      positive: {
        DEFAULT: "var(--spectrum-green-900)",
        background: "var(--spectrum-positive-background-color-default)",
        // hover: "var(--spectrum-green-1000)",
        dark: "var(--spectrum-green-1000)",
        border: "var(--spectrum-green-800)",
        icon: "var(--spectrum-positive-visual-color)",
        status: "var(--spectrum-positive-visual-color)",
        textLarge: "var(--spectrum-green-900)",
        textSmall: "var(--spectrum-green-1000)",
        down: "var(--spectrum-green-1100)",
        focus: "var(--spectrum-green-800)",
      },
      informative: {
        DEFAULT: "var(--spectrum-blue-900)",
        background: "var(--spectrum-informative-background-color-default)",
        // hover: "var(--spectrum-blue-1000)",
        dark: "var(--spectrum-blue-1000)",
        border: "var(--spectrum-blue-800)",
        icon: "var(--spectrum-informative-visual-color)",
        status: "var(--spectrum-informative-visual-color)",
        textLarge: "var(--spectrum-blue-900)",
        textSmall: "var(--spectrum-blue-1000)",
        down: "var(--spectrum-blue-1100)",
        focus: "var(--spectrum-blue-800)",
      },
      cta: {
        background: {
          DEFAULT: "var(--spectrum-accent-background-color-default)",
          hover: "var(--spectrum-accent-background-color-hover)",
          down: "var(--spectrum-accent-background-color-down)",
          keyFocus: "var(--spectrum-accent-background-color-key-focus)",
        }
      },
      accent: {
        100: "var(--spectrum-blue-100)",
        200: "var(--spectrum-blue-200)",
        300: "var(--spectrum-blue-300)",
        400: "var(--spectrum-blue-400)",
        500: "var(--spectrum-blue-500)",
        600: "var(--spectrum-blue-600)",
        700: "var(--spectrum-blue-700)",
        800: "var(--spectrum-blue-800)",
        900: "var(--spectrum-blue-900)",
        1000: "var(--spectrum-blue-1000)",
        1100: "var(--spectrum-blue-1100)",
        1200: "var(--spectrum-blue-1200)",
        1300: "var(--spectrum-blue-1300)",
        1400: "var(--spectrum-blue-1400)"
      }
    },
    ringColor: {
      DEFAULT: "var(--spectrum-alias-focus-ring-color)",
    },
    ringOpacity: {
      DEFAULT: "1",
    },
    ringWidth: {
      DEFAULT: "var(--spectrum-alias-focus-ring-size)",
    },
    ringOffsetWidth: {
      DEFAULT: "var(--spectrum-alias-focus-ring-gap)",
    },
    // TODO: Transparent offset isn't possible?
    // ringOffsetColor: {
    //   DEFAULT: "transparent",
    // },
    dropShadow: {
      DEFAULT: "0 var(--spectrum-alias-dropshadow-offset-y) var(--spectrum-alias-dropshadow-blur) var(--spectrum-alias-dropshadow-color)"
    },
    borderWidth: {
      DEFAULT: 'var(--spectrum-alias-border-size-thin)',
      none: '0',
      thin: 'var(--spectrum-alias-border-size-thin)',
      thick: 'var(--spectrum-alias-border-size-thick)',
      thicker: 'var(--spectrum-alias-border-size-thicker)',
      thickest: 'var(--spectrum-alias-border-size-thickest)',
    },
    borderRadius: {
      DEFAULT: "var(--spectrum-alias-border-radius-regular)",
      xsmall: "var(--spectrum-alias-border-radius-xsmall)",
      small: "var(--spectrum-alias-border-radius-small)",
      regular: "var(--spectrum-alias-border-radius-regular)",
      medium: "var(--spectrum-alias-border-radius-medium)",
      large: "var(--spectrum-alias-border-radius-large)",
      full: "9999px"
    },
    /** https://spectrum.adobe.com/page/typography/#Font-sizes */
    fontSize: {
      DEFAULT: "var(--spectrum-alias-font-size-default)",
      xs: 'var(--spectrum-global-dimension-font-size-50)',
      sm: 'var(--spectrum-global-dimension-font-size-75)',
      base: 'var(--spectrum-alias-font-size-default)',
      lg: 'var(--spectrum-global-dimension-font-size-200)',
      xl: 'var(--spectrum-global-dimension-font-size-300)',
      '2xl': 'var(--spectrum-global-dimension-font-size-400)',
      '3xl': 'var(--spectrum-global-dimension-font-size-500)',
      '4xl': 'var(--spectrum-global-dimension-font-size-600)',
      '5xl': 'var(--spectrum-global-dimension-font-size-700)',
      '6xl': 'var(--spectrum-global-dimension-font-size-800)',
      '7xl': 'var(--spectrum-global-dimension-font-size-900)',
      '8xl': 'var(--spectrum-global-dimension-font-size-1000)',
      '9xl': 'var(--spectrum-global-dimension-font-size-1100)',
      '10xl': 'var(--spectrum-global-dimension-font-size-1200)',
      '11xl': 'var(--spectrum-global-dimension-font-size-1300)',
    },
    fontWeight: {
      DEFAULT: 'var(--spectrum-global-font-weight-regular)',
      thin: 'var(--spectrum-global-font-weight-thin)',
      'ultra-light': 'var(--spectrum-global-font-weight-ultra-light)',
      light: 'var(--spectrum-global-font-weight-light)',
      regular: 'var(--spectrum-global-font-weight-regular)',
      medium: 'var(--spectrum-global-font-weight-medium)',
      semibold: 'var(--spectrum-global-font-weight-semi-bold)',
      bold: 'var(--spectrum-global-font-weight-bold)',
      'extra-bold': 'var(--spectrum-global-font-weight-extra-bold)',
      black: 'var(--spectrum-global-font-weight-black)',
    },
    letterSpacing: {
      DEFAULT: 'var(--spectrum-global-font-letter-spacing-medium)',
      none: 'var(--spectrum-global-font-letter-spacing-none)',
      small: 'var(--spectrum-global-font-letter-spacing-small)',
      hand: 'var(--spectrum-global-font-letter-spacing-han)',
      medium: 'var(--spectrum-global-font-letter-spacing-medium)'
    },
    lineHeight: {
      DEFAULT: 'var(--spectrum-global-font-line-height-medium)',
      small: 'var(--spectrum-global-font-line-height-small)',
      medium: 'var(--spectrum-global-font-line-height-medium)',
      large: 'var(--spectrum-global-font-line-height-large)',
    },
    /** https://spectrum.adobe.com/page/motion/ */
    transitionTimingFunction: {
      'ease-in-out': 'cubic-bezier(.45, 0, .40, 1)',
      'ease-in': 'cubic-bezier(.50, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.40, 1)',
      'linear': 'cubic-bezier(0, 0, 1, 1)',
    },
    transitionDuration: {
      none: 'var(--spectrum-global-animation-duration-0)',
      0: 'var(--spectrum-global-animation-duration-0)',
      100: 'var(--spectrum-global-animation-duration-100)',
      200: 'var(--spectrum-global-animation-duration-200)',
      300: 'var(--spectrum-global-animation-duration-300)',
      400: 'var(--spectrum-global-animation-duration-400)',
      500: 'var(--spectrum-global-animation-duration-500)',
      600: 'var(--spectrum-global-animation-duration-600)',
      700: 'var(--spectrum-global-animation-duration-700)',
      800: 'var(--spectrum-global-animation-duration-800)',
      900: 'var(--spectrum-global-animation-duration-900)',
      1000: 'var(--spectrum-global-animation-duration-1000)',
      2000: 'var(--spectrum-global-animation-duration-2000)',
      4000: 'var(--spectrum-global-animation-duration-4000)',
    },
    spacing: {
      0: 'var(--spectrum-global-dimension-size-0)',
      10: 'var(--spectrum-global-dimension-size-10)',
      25: 'var(--spectrum-global-dimension-size-25)',
      40: 'var(--spectrum-global-dimension-size-40)',
      50: 'var(--spectrum-global-dimension-size-50)',
      65: 'var(--spectrum-global-dimension-size-65)',
      75: 'var(--spectrum-global-dimension-size-75)',
      85: 'var(--spectrum-global-dimension-size-85)',
      100: 'var(--spectrum-global-dimension-size-100)',
      115: 'var(--spectrum-global-dimension-size-115)',
      125: 'var(--spectrum-global-dimension-size-125)',
      130: 'var(--spectrum-global-dimension-size-130)',
      150: 'var(--spectrum-global-dimension-size-150)',
      160: 'var(--spectrum-global-dimension-size-160)',
      175: 'var(--spectrum-global-dimension-size-175)',
      200: 'var(--spectrum-global-dimension-size-200)',
      225: 'var(--spectrum-global-dimension-size-225)',
      250: 'var(--spectrum-global-dimension-size-250)',
      275: 'var(--spectrum-global-dimension-size-275)',
      300: 'var(--spectrum-global-dimension-size-300)',
      325: 'var(--spectrum-global-dimension-size-325)',
      350: 'var(--spectrum-global-dimension-size-350)',
      400: 'var(--spectrum-global-dimension-size-400)',
      450: 'var(--spectrum-global-dimension-size-450)',
      500: 'var(--spectrum-global-dimension-size-500)',
      550: 'var(--spectrum-global-dimension-size-550)',
      600: 'var(--spectrum-global-dimension-size-600)',
      675: 'var(--spectrum-global-dimension-size-675)',
      700: 'var(--spectrum-global-dimension-size-700)',
      800: 'var(--spectrum-global-dimension-size-800)',
      900: 'var(--spectrum-global-dimension-size-900)',
      1000: 'var(--spectrum-global-dimension-size-1000)',
      1200: 'var(--spectrum-global-dimension-size-1200)',
      1250: 'var(--spectrum-global-dimension-size-1250)',
      1600: 'var(--spectrum-global-dimension-size-1600)',
      1700: 'var(--spectrum-global-dimension-size-1700)',
      2000: 'var(--spectrum-global-dimension-size-2000)',
      2400: 'var(--spectrum-global-dimension-size-2400)',
      3000: 'var(--spectrum-global-dimension-size-3000)',
      3400: 'var(--spectrum-global-dimension-size-3400)',
      3600: 'var( --spectrum-global-dimension-size-3600)',
      4600: 'var(--spectrum-global-dimension-size-4600)',
      5000: 'var(--spectrum-global-dimension-size-5000)',
      6000: 'var(--spectrum-global-dimension-size-6000)',
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
}