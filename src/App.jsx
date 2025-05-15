import {GlobalStyles, MyRoutes, Sidebar} from "./index"
import styled, {ThemeProvider} from "styled-components"
import {Device} from "./styles/breakpoints"
import { useThemeStore } from "./store/ThemeStore"

function App() {
  const {themeStyle} = useThemeStore()
  return (
    <ThemeProvider theme={themeStyle}>
        <Container>
          <GlobalStyles />
          <section className="contentSidebar"><Sidebar/></section>
          <section className="contentMenuambur">menu ambur</section>
          <section className="contentRouters"><MyRoutes/></section>
        </Container>
    </ThemeProvider>  
  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  
  .contentSidebar{
    display: none;
    background-color: rgba(78,45,78,0.5);
  }

  .contentMenuambur{
    position: absolute;
    background-color: rgba(78,45,78,0.5);
  }

  .contentRouters{
    background-color: rgba(78,45,78,0.5);
    grid-column: 1;
    width: 100%;


  }
    @media ${Device.tablet} {
      grid-template-columns: 88px 1fr;
      .contentSidebar{
        display: initial;
      }

      .contentMenuambur{
        position: none;
      }

      .contentRouters{
        grid-column: 2;
      }

    }
  `

export default App
