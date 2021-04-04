import { Container } from './NumberInput.style'
import { useSaveData } from 'hooks/useSaveData'

export const NumberInput: React.FC<{
  label: string
  placeholder: string
  id: string
  attributeType: string
}> = ({ label, placeholder, id, attributeType }) => {
  const { onSaveData, onSaveDataAsObject } = useSaveData()
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        onKeyUp={event => {
          if (attributeType) {
            onSaveDataAsObject({
              layer: attributeType,
              id,
              value: (event.target as HTMLInputElement).value
            })
          } else {
            onSaveData({
              id,
              value: (event.target as HTMLInputElement).value
            })
          }
        }}
      />
    </Container>
  )
}
