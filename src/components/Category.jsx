import {FaPizzaSlice, FaHamburger} from 'react-icons/fa' 
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'  
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <List>
            <SLink to="/cuisine/Italian"> 
            <FaPizzaSlice size={25}/> 
            <pre>Italian</pre> 
            </SLink>
       

            <SLink to="/cuisine/American">
            <FaHamburger size={25}/> 
            <pre>American</pre>
            </SLink>

             <SLink to="/cuisine/Thai">
            <GiNoodles size={25}/> 
            <pre>Thai</pre> 
            </SLink>

      
              <SLink to="/cuisine/Japanese">
            <GiChopsticks size={25}/> 
            <pre>Japanese</pre>  
            </SLink>
            
        
    </List>
  )
}

const List = styled.div` 
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

const SLink = styled(NavLink)` 
display: flex;
flex-direction: column;  
justify-content: center; 
text-decoration: none;
color: black;
border-radius: 50%;
align-items: center; 
padding: 5px; 
margin: 3px;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8)
`

export default Category