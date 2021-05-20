import styled from 'styled-components'

interface IProps {
  size?: string
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 16px;
  }

  textarea {
    min-height: ${({ size }) => (size === 'small' ? '184px' : '110px')};
    height: 100%;
    width: 400px;
    resize: none;
    padding: 14px 24px;
    background: transparent;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`
