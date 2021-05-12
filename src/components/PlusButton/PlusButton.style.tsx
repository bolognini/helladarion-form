import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 8px;
  right: -90px;
  font-size: 36px;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
