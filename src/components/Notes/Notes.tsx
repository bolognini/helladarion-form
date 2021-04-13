import { Container } from './Notes.style'
import { TextArea } from 'components/TextArea/TextArea'

export const Notes: React.FC = () => {
  return (
    <Container>
      <TextArea id="treasury" size="small" label="Tesouro" />
      <TextArea id="notes" size="small" label="Anotações Gerais" />
    </Container>
  )
}
