import { Container } from './Input.style'
import { useSaveData } from 'hooks/useSaveData'

type Props = {
  id: string
  label: string
  placeholder: string
  index?: number
  size?: string
  listType?: string
  saveType?: string
}

export const Input: React.FC<Props> = ({
  id,
  index,
  label,
  placeholder,
  size,
  listType,
  saveType = 'UPDATE_DATA'
}) => {
  const { updateMonsterData } = useSaveData()

  return (
    <Container size={size}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onKeyUp={event =>
          updateMonsterData({
            type: saveType,
            listType,
            index,
            id,
            value: (event.target as HTMLInputElement).value
          })
        }
      />
    </Container>
  )
}
