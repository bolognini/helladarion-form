import styled from 'styled-components'

interface IContainerProps {
  coreAttributes: boolean
}

export const Container = styled.div<IContainerProps>`
  display: grid;
  grid-template-columns: ${({ coreAttributes }) =>
    coreAttributes ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  grid-row-gap: 24px;
  grid-column-gap: 48px;

  div {
    grid-template-rows: subgrid;
  }

  ${({ coreAttributes }) =>
    coreAttributes &&
    `
    & div:nth-child(even) {
      justify-self: start;
    }

    & div:nth-child(odd) {
      justify-self: end;
    }
  `}
`
