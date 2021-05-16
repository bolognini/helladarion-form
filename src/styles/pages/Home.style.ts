import styled from 'styled-components'
import { breakpoint } from 'styles/GlobalStyle.style'

export const Container = styled.div`
  display: none;

  ${breakpoint.large} {
    display: grid;
    grid-template-rows: 1fr 1fr 400px 1fr;
    place-items: center;
    width: 960px;
    margin: 0 auto;
    max-height: 100vh;
  }

  button {
    margin-bottom: 40px;
  }

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
  width: 500px;
  height: 315px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 28px 0;

  &:hover {
    img {
      top: -15px;
      left: -15px;
      transition: all 0.2s;
    }
  }

  img {
    position: absolute;
    max-width: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s;
    border: ${({ theme }) => `6px solid ${theme.colors.primary}`};

    &:hover {
      top: -15px;
      left: -15px;
      transition: all 0.2s;
    }
  }
`
