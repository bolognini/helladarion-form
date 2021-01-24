import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 16px;
  }

  label {
    height: 100%;
    width: 400px;
    padding: 14px 24px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`
