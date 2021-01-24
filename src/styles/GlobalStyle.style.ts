import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Tormenta';
    src: url('/fonts/Tormenta.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font: 400 16px Montserrat, sans-serif;
  }

  textarea {
    font: 400 16px Montserrat, sans-serif;
  }

  a, button, input, label, textarea {
    &:focus {
      outline: 1.5px solid ${({ theme }) => theme.colors.white};
    }
  }
`
