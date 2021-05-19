import { Input } from 'components/Input/Input'
import { TextArea } from 'components/TextArea/TextArea'
import { ImageUploader } from 'components/ImageUploader/ImageUploader'
import { Container, LeftBox } from './Profile.style'

export const Profile: React.FC<{ theme: boolean }> = ({ theme }) => {
  return (
    <Container>
      <LeftBox>
        <Input
          id="name"
          maxlength="25"
          label="Nome da Criatura"
          placeholder="Wyvern"
        />
        <TextArea maxlength="180" id="description" label="Descrição" />
      </LeftBox>
      <ImageUploader theme={theme} />
    </Container>
  )
}
