import { theme } from '../theme'

describe('Theme', () => {
  it('should return a theme with breakpoints and palette', () => {
    const expectedTheme = {
      breakpoints: {
        mobile: `(min-width: 425px)`,
        tablet: `(min-width: 780px)`,
        laptop: `(min-width: 992px)`,
        desktop: `(min-width: 1240px)`,
      },

      radius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '1rem',
      },

      fontSize: {
        small: '0.75rem',
        medium: '1rem',
        large: '1.25rem',
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

    expect(theme).toStrictEqual(expectedTheme)
  })
})
