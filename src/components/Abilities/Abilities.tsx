import { Input } from 'components/Input/Input'
import { PlusButton } from 'components/PlusButton/PlusButton'
import { Container, Table, InputContainer } from './Abilities.style'
import { useAbilities } from './Abilities.hooks'

export const Abilities: React.FC = () => {
  const { abilitiesList, onAddAbility } = useAbilities()

  return (
    <Container>
      <Table>
        {abilitiesList.map((item, index) => (
          <InputContainer key={index}>
            {item.map(({ id, label, placeholder = '-', size, maxlength }) => (
              <Input
                id={id}
                localStorageId={`${id}-${index}`}
                key={id}
                index={index}
                saveType="UPDATE_ABILITIES"
                label={label}
                placeholder={placeholder}
                size={size}
                maxlength={maxlength}
              />
            ))}
          </InputContainer>
        ))}
      </Table>
      <PlusButton onClick={onAddAbility} />
    </Container>
  )
}
