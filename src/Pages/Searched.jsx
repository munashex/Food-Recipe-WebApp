import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom'

function Searched() {  

    let {search} = useParams()

    const [searched, setSearced] = React.useState([])

    
    let API_KEY = '940401677c1c4f04a472a99fab775898'  

    const getSearched = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`)
        const recipes = await data.json() 
        setSearced(recipes.results)
       }


 React.useEffect(() => {
 getSearched(search)
 }, [search])

  return (
    <div>
      <h4 style={{textAlign: 'center', fontWeight: 300}}>Search for {search}</h4>
    <div className='grid'> 
    {searched.map((item) => { 
        return (
            <Link to={`/recipe/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
            <div key={item.id}>
             <img src={item.image} className="CuisineImage"/>
             <h4>{item.title}</h4>
            </div>
            </Link>
        )
     })}
    </div>
    </div>
  )
}

export default Searched