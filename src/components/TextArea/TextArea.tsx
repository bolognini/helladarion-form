import { Container } from './TextArea.style'

export const TextArea: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Container>
      <label>{label}</label>
      <textarea />
    </Container>
  )
}
