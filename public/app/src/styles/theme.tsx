import { GlobalStyle } from './global'
import { ThemeProvider } from 'styled-components'
import * as mixins from './mixins'
import * as animations from './animations'

const SPACE_SCALE = 8

export const theme = {
  primary: 'rgb(222, 12, 75)',
  secondary: 'rgb(0, 11, 60)',
  contrast: '#c20018',
  text: {
    primary: '#fff',
    secondary: 'rgb(0, 11, 60)',
    contrast: 'rgb(205,205,205)',
  },
  background: {
    primary: '#fff',
    secondary: 'rgb(0, 11, 60)',
    contrast: '#dddddd',
  },
  space: (multiple: number) => `${multiple * SPACE_SCALE}px`,
  rem: (pixel: number) => `${pixel / 16}rem`,
  mixins,
  animations,
} as const

export const ProviTheme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)
