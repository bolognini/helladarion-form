import { StyledButton } from './Button.style'
interface IButton {
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
