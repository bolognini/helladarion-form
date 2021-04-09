import { Input } from 'components/Input/Input'
import { PlusButton } from 'components/PlusButton/PlusButton'
import { usePerks } from './Perks.hooks'
import { Container, InputList, InputContainer } from './Perks.style'

export const Perks: React.FC<{ secondary?: boolean }> = ({ secondary }) => {
  const { inputList, onAddInput } = usePerks({ secondary })

  return (
    <Container>
      <InputList>
        {inputList.map(({ largePlaceholder, smallPlaceholder }, index) => (
          <InputContainer key={index}>
            <Input label="Título" placeholder={largePlaceholder} />
            <Input
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
