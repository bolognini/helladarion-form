import { StyledButton } from './Button.style'
interface IButton {
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void
  secondary?: boolean
}

export const Button: React.FC<IButton> = ({ children, onClick, secondary }) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
