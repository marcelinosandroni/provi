import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Century Gothic';
    src: url('/fonts/CenturyGothic.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Century Gothic';
  }

  body {
    font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;
    color: ${theme.text.secondary};
    background-color: ${theme.background.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
