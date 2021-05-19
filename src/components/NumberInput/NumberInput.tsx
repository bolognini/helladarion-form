/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from './NumberInput.style'
import { useSaveData } from 'hooks/useSaveData'
import { useLocalStorage } from 'hooks/useLocalStorage'

export const NumberInput: React.FC<{
  label: string
  placeholder: string
  id: string
  attributeType: string
  maxlength?: any
}> = ({ label, placeholder, id, attributeType, maxlength }) => {
  const { updateMonsterData } = useSaveData()
  const { saveOnLocalStorage, defaultValue } = useLocalStorage({ id })

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        maxLength={maxlength}
        placeholder={placeholder}
        defaultValue={defaultValue && defaultValue}
        onKeyPress={event => {
          if (
            (event.which !== 8 && event.which !== 0 && event.which < 48) ||
            event.which > 57
          ) {
            event.preventDefault()
          }
        }}
        onKeyUp={event => {
          const value = (event.target as HTMLInputElement).value
          const trimmedValue = (event.target as HTMLInputElement).value.slice(
            0,
            maxlength
          )
          if (value.length > maxlength) {
            ;(event.target as HTMLInputElement).value = trimmedValue
          }
          saveOnLocalStorage({
            value: trimmedValue
          })
          if (attributeType) {
            updateMonsterData({
              type: 'UPDATE_ATTRIBUTES',
              id,
              value: trimmedValue
            })
          } else {
            updateMonsterData({
              type: 'UPDATE_DATA',
              id,
              value
            })
          }
        }}
      />
    </Container>
  )
}
