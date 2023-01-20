import Pages from "./Pages/Pages"
import Category from "./components/Category"
import {BrowserRouter, Link} from "react-router-dom"
import Search from "./components/Search"
import styled from "styled-components"
import { GiKnifeFork } from "react-icons/gi"

function App() { 
  return (
    <div>
    <BrowserRouter> 
    <Nav>
        <GiKnifeFork size={34}/>
        <Logo to={"/"} style={{marginLeft: 10, color: 'black'}}> Munashe Kitchen</Logo>
      </Nav> 
    <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>  
    </div>
  )
}

const Logo = styled(Link)` 
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'lobster Two, cursive'
`

const Nav = styled.div`  
margin-top: 20px;
display: flex;
justify-content: flex-start; 
align-items: center;
`

export default App
