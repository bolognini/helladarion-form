import { Input } from 'components/Input/Input'
import { TextArea } from 'components/TextArea/TextArea'
import { ImageUploader } from 'components/ImageUploader/ImageUploader'
import { Container, LeftBox } from './Profile.style'

export const Profile: React.FC = () => {
  return (
    <Container>
      <LeftBox>
        <Input label="Nome da Criatura" placeholder="Wyvern" />
        <TextArea label="Descrição" />
      </LeftBox>
      <ImageUploader />
    </Container>
  )
}
