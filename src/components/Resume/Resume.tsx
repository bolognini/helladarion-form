import { useSelector } from 'react-redux'
import { Container, Info, ImageHolder, Image } from './Resume.style'

export const Resume: React.FC = () => {
  const monsterData = useSelector(state => state.data)

  return (
    <Container>
      <Info>
        <h2>{`nd ${monsterData.level}`}</h2>
        <p>{`”${monsterData.description}”`}</p>
      </Info>
      <ImageHolder>
        <Image url="/wyvern.png" />
      </ImageHolder>
    </Container>
  )
}
