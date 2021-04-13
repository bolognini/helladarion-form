import { Container } from './TextArea.style'
import { useSaveData } from 'hooks/useSaveData'

export const TextArea: React.FC<{
  id: string
  label: string
  size?: string
}> = ({ id, label, size }) => {
  const { updateMonsterData } = useSaveData()

  return (
    <Container size={size}>
      <label>{label}</label>
      <textarea
        onKeyUp={event =>
          updateMonsterData({
            id,
            value: (event.target as HTMLInputElement).value
          })
        }
      />
    </Container>
  )
}
