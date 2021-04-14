import { Input } from 'components/Input/Input'
import { PlusButton } from 'components/PlusButton/PlusButton'
import { usePerks } from './Perks.hooks'
import { Container, InputList, InputContainer } from './Perks.style'

export const Perks: React.FC<{ secondary?: boolean }> = ({ secondary }) => {
  const { listType, inputList, onAddInput } = usePerks({ secondary })

  return (
    <Container>
      <InputList>
        {inputList.map(({ largePlaceholder, smallPlaceholder }, index) => (
          <InputContainer key={index}>
            <Input
              id="name"
              index={index}
              listType={listType}
              saveType="UPDATE_PERKS"
              label="Título"
              placeholder={largePlaceholder}
            />
            <Input
              id="rolling"
              index={index}
              listType={listType}
              saveType="UPDATE_PERKS"
              label="Rolagem"
              placeholder={smallPlaceholder}
              size="small"
            />
          </InputContainer>
        ))}
      </InputList>
      <PlusButton onClick={onAddInput}>+</PlusButton>
    </Container>
  )
}
