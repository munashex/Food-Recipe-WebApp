import styled from 'styled-components' 
import {useState} from 'react' 
import {FaSearch} from 'react-icons/fa'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Search() { 

    const [input, setInput] = useState('')  
    let navigate = useNavigate()

    const SubmitHandler =(e) => {
        e.preventDefault() 
        navigate('/searched/' + input)
    }


  return (
    <form className="Search" onSubmit={SubmitHandler}>
        <input type="text"  
        onChange={(e) => setInput(e.target.value)}
         placeholder="Search"/>
    </form>
  )
}




export default Search