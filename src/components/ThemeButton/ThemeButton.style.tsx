import styled from 'styled-components'

interface IProps {
  value: boolean
}

export const Container = styled.div<IProps>`
  position: absolute;
  top: 16px;
  right: 0;
  padding: 0 4px;
  text-align: ${({ value }) => (value ? 'left' : 'right')};

  input {
    display: none;
  }

  label {
    font-size: 24px;
    cursor: pointer;
  }
`
