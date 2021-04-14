import { Container } from './NumberInput.style'
import { useSaveData } from 'hooks/useSaveData'

export const NumberInput: React.FC<{
  label: string
  placeholder: string
  id: string
  attributeType: string
}> = ({ label, placeholder, id, attributeType }) => {
  const { updateMonsterData } = useSaveData()
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        onKeyUp={event => {
          if (attributeType) {
            updateMonsterData({
              type: 'UPDATE_ATTRIBUTES',
              id,
              value: (event.target as HTMLInputElement).value
            })
          } else {
            updateMonsterData({
              type: 'UPDATE_DATA',
              id,
              value: (event.target as HTMLInputElement).value
            })
          }
        }}
      />
    </Container>
  )
}
