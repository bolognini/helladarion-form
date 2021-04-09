import styled from 'styled-components'

interface IProps {
  url: string
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Vollkorn SC', serif;
  font-weight: 400;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 64px;
  }

  p {
    text-align: left;
    font-size: 24px;
  }
`

export const ImageHolder = styled.div`
  justify-self: end;
  height: 380px;
  width: 340px;
  position: relative;
  background: ${({ theme }) => theme.colors.primary};
`
export const Image = styled.div<IProps>`
  display: block;
  position: absolute;
  width: 344px;
  height: 380px;
  top: -20px;
  left: -20px;
  border: ${({ theme }) => `6px solid ${theme.colors.primary}`};
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
`
