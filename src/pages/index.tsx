import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, ImageHolder } from 'styles/pages/Home.style'
import { LanguageButton } from 'components/LanguageButton/LanguageButton'
import { ThemeButton } from 'components/ThemeButton/ThemeButton'
import { Button } from 'components/Button/Button'
import { ResponsiveFallback } from 'components/ResponsiveFallback/ResponsiveFallback'
interface IHome {
  value: boolean
  toggle: () => void
}

const Home: React.FC<IHome> = pageProps => {
  const router = useRouter()
  const dispatch = useDispatch()
  const language = useSelector(({ language }) => language)

  useEffect(() => {
    const loadedLanguage = localStorage.getItem('language') || 'ENGLISH'
    dispatch({ type: loadedLanguage })
  }, [])

  const changeLanguage = language => {
    dispatch({ type: language })
  }

  return (
    <section>
      <ResponsiveFallback />
      <Container>
        <Head>
          <title>Helladarion</title>
        </Head>
        <h1>Helladarion</h1>
        <p>{language.home}</p>
        <ImageHolder>
          <img src="/sheet.png" alt="Ficha digital" />
        </ImageHolder>
        <Button onClick={() => router.push('/form')}>
          {language.button.home}
        </Button>
        <LanguageButton changeLanguage={changeLanguage} />
        <ThemeButton value={pageProps.value} toggle={pageProps.toggle} />
      </Container>
    </section>
  )
}

export default Home
