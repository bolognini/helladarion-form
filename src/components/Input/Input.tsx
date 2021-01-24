import { Container } from './Input.style'

type Props = {
  label: string
  placeholder: string
  size?: string
}

export const Input: React.FC<Props> = ({ label, placeholder, size }) => {
  return (
    <Container size={size}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </Container>
  )
}
