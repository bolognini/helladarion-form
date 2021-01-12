import Head from 'next/head'
import { Container, ImageHolder } from '../styles/pages/Home.style'
import { Button } from '../components/Button/Button'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>T20 Monster Builder</title>
      </Head>
      <h1>Bestiário Tormenta 20</h1>
      <p>
        Crie fichas digitais dos inimigos de sua campanha de T20 RPG <br />
        Edite quanto quiser. Fortaleça e enfraqueça as criaturas como preferir
      </p>
      <ImageHolder>
        <img src="/monster-sheet.png" alt="Ficha digital" />
      </ImageHolder>
      <Button>criar</Button>
    </Container>
  )
}

export default Home
