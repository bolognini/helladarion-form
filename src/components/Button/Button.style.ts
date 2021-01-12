import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 200px;
  height: 70px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    transition: 0.2s ease-in;
  }
`
