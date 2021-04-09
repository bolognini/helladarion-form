import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from '../styles/GlobalStyle.style'
import { lightTheme, darkTheme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false)
  const { value, toggle } = useDarkMode(false)
  const theme = value ? lightTheme : darkTheme
  const props = { ...pageProps, value, toggle }

  useEffect(() => {
    setMounted(true)
  }, [])

  const app = (
    <ThemeProvider theme={theme}>
      <Component {...props} />
      <GlobalStyle />
    </ThemeProvider>
  )

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{app}</div>
  }

  return app
}

export default MyApp
