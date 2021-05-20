import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
`

export const Detail = styled.div`
  display: flex;
  grid-column-gap: 8px;
`

export const LeftBox = styled.div`
  display: grid;
  grid-template-rows: 90px 90px 1fr;
  grid-row-gap: 8px;
`
