import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  padding: 0 4px;

  button {
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
