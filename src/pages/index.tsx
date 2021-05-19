import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, ImageHolder } from 'styles/pages/Home.style'
import { ThemeButton } from 'components/ThemeButton/ThemeButton'
import { Button } from 'components/Button/Button'
import { ResponsiveFallback } from 'components/ResponsiveFallback/ResponsiveFallback'
interface IHome {
  value: boolean
  toggle: () => void
}

const Home: React.FC<IHome> = pageProps => {
  const router = useRouter()
  return (
    <section>
      <ResponsiveFallback />
      <Container>
        <Head>
          <title>Helladarion</title>
        </Head>
        <h1>Helladarion</h1>
        <p>
          Crie fichas digitais dos inimigos de sua campanha de T20 RPG <br />
          Edite quanto quiser. Fortaleça e enfraqueça as criaturas como preferir
        </p>
        <ImageHolder>
          <img src="/sheet.png" alt="Ficha digital" />
        </ImageHolder>
        <Button onClick={() => router.push('/form')}>criar</Button>
        <ThemeButton value={pageProps.value} toggle={pageProps.toggle} />
      </Container>
    </section>
  )
}

export default Home
