import { NumberInput } from 'components/NumberInput/NumberInput'
import { useAttributes } from './Attributes.hooks'
import { Container } from './Attributes.style'

export const Attributes: React.FC<{ simple?: boolean }> = ({ simple }) => {
  const { inputList } = useAttributes({ simple })
  return (
    <Container simple={simple}>
      {inputList.map(({ label, placeholder, id }) => (
        <NumberInput label={label} placeholder={placeholder} id={id} key={id} />
      ))}
    </Container>
  )
}
