import { DefaultTheme } from 'styled-components'

export interface Breakpoints {
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

  radius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },

  palette: {
    common: {
      background: '#f7f7f7',
      white: '#fff',
      black: '#1a1a1a',
      grey: '#ccc',
    },

    primary: {
      main: 'rgb(2, 61, 75)',
      text: '#fff',
    },
  },
}
