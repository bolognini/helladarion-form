import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  div {
    grid-template-rows: subgrid;
  }

  & div:nth-child(even) {
    justify-self: start;
  }

  & div:nth-child(odd) {
    justify-self: end;
  }
`
