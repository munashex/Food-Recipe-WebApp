import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import {useNavigate} from 'react-router-dom'


function Searched() {  

    let {search} = useParams()

    const [searched, setSearced] = React.useState([]) 
    const navigate = useNavigate()

    
    let API_KEY = 'ed3ffe8c668f4e859ec15356893268a4'  

    const getSearched = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`)
        const recipes = await data.json() 
        setSearced(recipes.results)
       }


 React.useEffect(() => {
 getSearched(search)
 }, [search]) 



  return (
    <div className='searchContainer'> 
      {searched && searched.map((item) => {
        return (
          <div key={item.id} className="foodAndTitle" style={{cursor: 'pointer'}}   onClick={() => navigate(`/recipe/${item.id}`)}>
           <img src={item.image} className="searchedImage"/> 
          <h3 style={{textAlign: 'center'}}>{item.title.slice(0, 23)}....</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Searched