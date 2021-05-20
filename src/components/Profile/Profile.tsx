import { Input } from 'components/Input/Input'
import { TextArea } from 'components/TextArea/TextArea'
import { ImageUploader } from 'components/ImageUploader/ImageUploader'
import { Container, Detail, LeftBox } from './Profile.style'

export const Profile: React.FC<{ theme: boolean }> = ({ theme }) => {
  return (
    <Container>
      <LeftBox>
        <Detail>
          <Input
            id="name"
            maxlength="25"
            label="Nome da Criatura"
            placeholder="Wyvern"
          />
          <Input
            id="level"
            maxlength="3"
            label="Level"
            placeholder="7"
            size="small"
          />
        </Detail>
        <Detail>
          <Input
            id="monsterType"
            maxlength="13"
            label="Tipo"
            placeholder="Monstro"
          />
          <Input
            id="size"
            maxlength="12"
            label="Tamanho"
            placeholder="Grande"
            size="small"
          />
        </Detail>
        <TextArea maxlength="180" id="description" label="Descrição" />
      </LeftBox>
      <ImageUploader theme={theme} />
    </Container>
  )
}
