import { Container } from './TextArea.style'
import { useSaveData } from 'hooks/useSaveData'

export const TextArea: React.FC<{
  id: string
  label: string
  size?: string
}> = ({ id, label, size }) => {
  const { onSaveData } = useSaveData()
  return (
    <Container size={size}>
      <label>{label}</label>
      <textarea
        onKeyUp={event =>
          onSaveData({ id, value: (event.target as HTMLTextAreaElement).value })
        }
      />
    </Container>
  )
}
