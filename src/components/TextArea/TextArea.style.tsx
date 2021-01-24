import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 16px;
  }

  textarea {
    height: 230px;
    width: 400px;
    resize: none;
    padding: 14px 24px;
    background: transparent;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`
