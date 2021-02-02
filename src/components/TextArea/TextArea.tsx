import { Container } from './TextArea.style'

export const TextArea: React.FC<{ label: string; size?: string }> = ({
  label,
  size
}) => {
  return (
    <Container size={size}>
      <label>{label}</label>
      <textarea />
    </Container>
  )
}
