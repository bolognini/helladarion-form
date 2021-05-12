import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 570px 1fr;
  place-items: center;
  width: 960px;
  margin: 0 auto;

  h1 {
    font-size: 72px;
    font-family: Tormenta, serif;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 40px;
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 480px;
  margin-bottom: 24px;
`
