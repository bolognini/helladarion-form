import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, ImageHolder } from 'styles/pages/Home.style'
import { Button } from 'components/Button/Button'

const Home: React.FC = () => {
  const router = useRouter()
  return (
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
        <img src="/monster-sheet.png" alt="Ficha digital" />
      </ImageHolder>
      <Button onClick={() => router.push('/form')}>criar</Button>
    </Container>
  )
}

export default Home
