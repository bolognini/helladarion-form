import { Container } from './NumberInput.style'

export const NumberInput: React.FC<{
  label: string
  placeholder: string
  id: string
}> = ({ label, placeholder, id }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" placeholder={placeholder} />
    </Container>
  )
}
