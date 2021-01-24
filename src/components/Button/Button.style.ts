import styled from 'styled-components'

interface ButtonProps {
  secondary: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  width: 200px;
  height: 70px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.black};
  border: 2px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.white : theme.colors.primary};
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primary};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: ${({ theme, secondary }) =>
      secondary && `2px solid ${theme.colors.primary}`};
    color: ${({ theme, secondary }) =>
      secondary ? theme.colors.primary : theme.colors.white};
    transition: 0.2s ease-in;
  }
`
