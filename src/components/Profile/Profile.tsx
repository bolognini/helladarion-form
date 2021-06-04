import { Input } from 'components/Input/Input'
import { TextArea } from 'components/TextArea/TextArea'
import { ImageUploader } from 'components/ImageUploader/ImageUploader'
import { Container, Detail, LeftBox } from './Profile.style'

interface IConstants {
  [key: string]: {
    [key: string]: string
  }
}

export const Profile: React.FC<{
  theme: boolean
  constants: IConstants
}> = ({ theme, constants }) => {
  const { label, placeholder } = constants

  return (
    <Container>
      <LeftBox>
        <Detail>
          <Input
            id="name"
            maxlength="25"
            label={label.name}
            placeholder="Wyvern"
          />
          <Input
            id="level"
            maxlength="3"
            label={label.level}
            placeholder="7"
            size="small"
          />
        </Detail>
        <Detail>
          <Input
            id="monsterType"
            maxlength="13"
            label={label.type}
            placeholder={placeholder.type}
          />
          <Input
            id="size"
            maxlength="12"
            label={label.size}
            placeholder={placeholder.size}
            size="small"
          />
        </Detail>
        <TextArea maxlength="180" id="description" label={label.description} />
      </LeftBox>
      <ImageUploader label={label.image} theme={theme} />
    </Container>
  )
}
