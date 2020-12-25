import Head from 'next/head'
import { Container } from '../styles/pages/Home.style'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>T20 Monster Builder</title>
      </Head>
      <h1>Bestiário Tormenta 20</h1>
      <p>
        Organize a ficha de seus monstros de T20 em um só lugar. <br />
        Crie novas criaturas, os tornem fortes ou enfraqueça-os quando quiser.
      </p>
    </Container>
  )
}

export default Home
