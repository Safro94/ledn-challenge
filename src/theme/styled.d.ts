import 'styled-components'

import type { Breakpoints } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints
    radius: {
      small: string
      medium: string
      large: string
    }
    palette: {
      common: {
        background: string
        white: string
        black: string
        grey: string
      }
      primary: {
        main: string
        text: string
      }
    }
  }
}
