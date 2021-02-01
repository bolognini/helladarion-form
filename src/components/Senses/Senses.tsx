import { Input } from 'components/Input/Input'
import { PlusButton } from 'components/PlusButton/PlusButton'
import { useSenses } from './Senses.hooks'
import { Container, InputList, InputContainer } from './Senses.style'

export const Senses: React.FC = () => {
  const { inputList, onAddInput } = useSenses()

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
