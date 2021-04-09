import styled from 'styled-components'

interface IContainerProps {
  size: string
}
// 250
// 130

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ size }) => {
    switch (size) {
      case 'xsmall':
        return '130px'
      case 'small':
        return '200px'
      case 'medium':
        return '250'
      default:
        return '400px'
    }
  }};

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
