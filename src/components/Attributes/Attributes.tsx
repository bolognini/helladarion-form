import { NumberInput } from 'components/NumberInput/NumberInput'
import { useAttributes } from './Attributes.hooks'
import { Container } from './Attributes.style'

export const Attributes: React.FC = () => {
  const { inputList } = useAttributes()
  return (
    <Container>
      {inputList.map(({ label, placeholder, id }) => (
        <NumberInput label={label} placeholder={placeholder} id={id} key={id} />
      ))}
    </Container>
  )
}
