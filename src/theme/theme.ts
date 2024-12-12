import { DefaultTheme } from 'styled-components'

interface Breakpoints {
  mobile: string
  tablet: string
  laptop: string
  desktop: string
}

const breakpoints: Breakpoints = {
  mobile: '425px',
  tablet: '780px',
  laptop: '992px',
  desktop: '1240px',
}

export const theme: DefaultTheme = {
  breakpoints: {
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
  },

  palette: {
    common: {
      background: '#f7f7f7',
      white: '#fff',
      black: '#1a1a1a',
      grey: '#ccc',
    },

    primary: {
      main: '#003a46',
      text: '#fff',
    },
  },
}
