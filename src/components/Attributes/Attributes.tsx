import { NumberInput } from 'components/NumberInput/NumberInput'
import { useAttributes } from './Attributes.hooks'
import { Container } from './Attributes.style'

export const Attributes: React.FC<{ coreAttributes?: boolean }> = ({
  coreAttributes
}) => {
  const { inputList, attributeType } = useAttributes({ coreAttributes })
  return (
    <Container coreAttributes={coreAttributes}>
      {inputList.map(({ label, placeholder, id, inputLength }) => (
        <NumberInput
          maxlength={inputLength}
          label={label}
          placeholder={placeholder}
          id={id}
          key={id}
          attributeType={attributeType && attributeType}
        />
      ))}
    </Container>
  )
}
