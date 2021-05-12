import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 16px;
  }

  label {
    display: flex;
    place-content: center;
    height: 100%;
    max-height: 350px;
    width: 400px;
    padding: 14px 24px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`

export const Image = styled.img<{ defaultImage: boolean }>`
  width: ${({ defaultImage }) => defaultImage && '20%'};
  max-width: 100%;
  max-height: 100%;
`
