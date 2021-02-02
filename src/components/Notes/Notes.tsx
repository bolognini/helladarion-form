import { Container } from './Notes.style'
import { TextArea } from 'components/TextArea/TextArea'

export const Notes: React.FC = () => {
  return (
    <Container>
      <TextArea size="small" label="Tesouro" />
      <TextArea size="small" label="Anotações Gerais" />
    </Container>
  )
}
