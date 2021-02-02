import { Container, Info, ImageHolder, Image } from './Resume.style'

export const Resume: React.FC = () => {
  return (
    <Container>
      <Info>
        <h2>nd 5</h2>
        <p>
          ”Muitas vezes confundidos com dragões, estes monstros reptilianos
          alados são apenas feras com pouca inteligência e sem poderes mágicos.”
        </p>
      </Info>
      <ImageHolder>
        <Image url="/wyvern.png" />
      </ImageHolder>
    </Container>
  )
}
