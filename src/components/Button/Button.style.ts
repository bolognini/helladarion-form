import styled from 'styled-components'

interface IButtonProps {
  secondary: boolean
}

export const StyledButton = styled.button<IButtonProps>`
  width: 200px;
  height: 70px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.text : theme.colors.background};
  border: 2px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.text : theme.colors.primary};
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primary};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: ${({ theme, secondary }) =>
      secondary && `2px solid ${theme.colors.primary}`};
    color: ${({ theme, secondary }) =>
      secondary ? theme.colors.primary : theme.colors.text};
    transition: 0.2s ease-in;
  }
`
