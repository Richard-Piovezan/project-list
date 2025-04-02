import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }

  body {
    padding: 80px 0;

    @media (max-width: 768px) {
      padding: 16px 0;
    }
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 166px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`
