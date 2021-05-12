import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import useDarkMode from 'use-dark-mode'
import store from '../store'
import { Transition } from 'components/Transition/Transition'

import GlobalStyle from '../styles/GlobalStyle.style'
import { lightTheme, darkTheme } from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { value, toggle } = useDarkMode(false)
  const theme = value ? lightTheme : darkTheme
  const props = { ...pageProps, value, toggle }

  useEffect(() => {
    setMounted(true)
  }, [])

  const app = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Transition transitionKey={router.pathname}>
          <Component {...props} key={router.route} />
        </Transition>
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  )

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{app}</div>
  }

  return app
}

export default App
