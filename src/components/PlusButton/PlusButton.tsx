import { StyledButton } from './PlusButton.style'

interface IPlusButton {
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export const PlusButton: React.FC<IPlusButton> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>+</StyledButton>
}
