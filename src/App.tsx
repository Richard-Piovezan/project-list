import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true)

  function themeChange() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar themeChange={themeChange} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
