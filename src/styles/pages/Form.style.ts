import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
    font-family: Tormenta, serif;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 8px;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    max-width: 600px;
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 480px;
`
