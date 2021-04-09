import { Container } from './Input.style'
import { useSaveData } from 'hooks/useSaveData'

type Props = {
  id: string
  label: string
  placeholder: string
  size?: string
}

export const Input: React.FC<Props> = ({ id, label, placeholder, size }) => {
  const { onSaveData } = useSaveData()
  return (
    <Container size={size}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onKeyUp={event =>
          onSaveData({ id, value: (event.target as HTMLInputElement).value })
        }
      />
    </Container>
  )
}
