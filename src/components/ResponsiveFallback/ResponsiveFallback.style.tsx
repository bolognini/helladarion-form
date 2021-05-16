import styled from 'styled-components'
import { breakpoint } from 'styles/GlobalStyle.style'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text};

  img {
    width: 20%;
    padding-bottom: 24px;

    ${breakpoint.medium} {
      width: 10%;
    }
  }

  h2 {
    font-size: 32px;
    padding-bottom: 32px;
  }

  p {
    font-size: 16px;
    padding-bottom: 32px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${breakpoint.medium} {
    padding: 0 80px;
  }

  ${breakpoint.large} {
    display: none;
  }
`
