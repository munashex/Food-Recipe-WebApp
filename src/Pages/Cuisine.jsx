import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import '../App.css'

function Cuisine() { 
  

   const [cuisine, setCuisine] = useState([])
   let {type} = useParams()

    let API_KEY = 'ed3ffe8c668f4e859ec15356893268a4'  

    const getCuisine = async(name) => {
     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`)
     const recipes = await data.json() 
     setCuisine(recipes.results)
    }

   useEffect(() => {
   getCuisine(type)
   }, [type])

  return (
    <div className="grid">
     {cuisine.map((item) => { 
        return (
          <Link to={`/recipe/${item.id}`} key={item.id} style={{textDecoration: 'none', color: 'black'}}>
            <div>
             <img src={item.image} className="CuisineImage"/>
             <h4>{item.title}</h4>
            </div>
            </Link>
        )
     })}
    </div>
  )
}




export default Cuisine