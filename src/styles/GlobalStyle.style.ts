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

    &::-webkit-scrollbar {
      width: 4px;
      background-color: ${({ theme }) => theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 16px Montserrat, sans-serif;
  }

  textarea {
    font: 400 16px Montserrat, sans-serif;
  }

  a, button, input, label, textarea {
    &:focus {
      outline: 1.5px solid ${({ theme }) => theme.colors.text};
    }
  }
`
