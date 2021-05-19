/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from './TextArea.style'
import { useSaveData } from 'hooks/useSaveData'
import { useLocalStorage } from 'hooks/useLocalStorage'

export const TextArea: React.FC<{
  id: string
  label: string
  size?: string
  maxlength?: any
}> = ({ id, label, size, maxlength }) => {
  const { updateMonsterData } = useSaveData()
  const { saveOnLocalStorage, defaultValue } = useLocalStorage({ id })

  return (
    <Container size={size}>
      <label>{label}</label>
      <textarea
        maxLength={maxlength}
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
