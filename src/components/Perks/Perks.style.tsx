import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const InputList = styled.div`
  height: 320px;
  overflow: auto;
  padding-right: 40px;
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
