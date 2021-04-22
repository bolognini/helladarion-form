import { Container } from './TextArea.style'
import { useSaveData } from 'hooks/useSaveData'
import { useLocalStorage } from 'hooks/useLocalStorage'

export const TextArea: React.FC<{
  id: string
  label: string
  size?: string
}> = ({ id, label, size }) => {
  const { updateMonsterData } = useSaveData()
  const { saveOnLocalStorage, defaultValue } = useLocalStorage({ id })

  return (
    <Container size={size}>
      <label>{label}</label>
      <textarea
        defaultValue={defaultValue && defaultValue}
        onKeyUp={event => {
          saveOnLocalStorage({
            value: (event.target as HTMLInputElement).value
          })
          updateMonsterData({
            id,
            value: (event.target as HTMLInputElement).value
          })
        }}
      />
    </Container>
  )
}
