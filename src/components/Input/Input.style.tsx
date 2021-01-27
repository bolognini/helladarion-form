import styled from 'styled-components'

interface IContainerProps {
  size: string
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ size }) => (size === 'small' ? '200px' : '400px')};

  label {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 16px;
  }

  input {
    height: 50px;
    font-size: 18px;
    padding: 14px 24px;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`
