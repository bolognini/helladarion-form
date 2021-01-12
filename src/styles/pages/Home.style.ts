import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  }
`

export const ImageHolder = styled.div`
  display: block;
  position: relative;
  width: 600px;
  height: 380px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 56px 0 48px 0;

  img {
    position: absolute;
    top: -20px;
    left: -20px;
    max-width: 600px;
    border: ${({ theme }) => `6px solid ${theme.colors.primary}`};
  }
`
