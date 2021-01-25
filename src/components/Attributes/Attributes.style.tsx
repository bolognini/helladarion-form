import styled from 'styled-components'

interface ContainerProps {
  simple: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ simple }) =>
    simple ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  grid-gap: 48px;

  div {
    grid-template-rows: subgrid;
  }

  ${({ simple }) =>
    simple &&
    `
    & div:nth-child(even) {
      justify-self: start;
    }

    & div:nth-child(odd) {
      justify-self: end;
    }
  `}
`
