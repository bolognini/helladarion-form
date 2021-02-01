import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const InputList = styled.div`
  height: 400px;
  overflow: auto;
  padding-right: 40px;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-column-gap: 40px;
  margin-bottom: 24px;

  &:last-of-type {
    margin: 0;
  }
`
