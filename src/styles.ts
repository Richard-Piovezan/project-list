import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
  }

  body {
    background-color: #0101
  }
`
export default GlobalStyle
