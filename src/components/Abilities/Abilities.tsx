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
            {item.map(({ label, placeholder = '-', size }) => (
              <Input
                key={label}
                label={label}
                placeholder={placeholder}
                size={size}
              />
            ))}
          </InputContainer>
        ))}
      </Table>
      <PlusButton onClick={onAddAbility} />
    </Container>
  )
}
