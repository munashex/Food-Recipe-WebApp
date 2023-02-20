import {useEffect, useState} from 'react' 
import '../App.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'; 

function Popular() { 

    const [popular, setPopular] = useState([])

    const getPopular  = async() => { 
        let API_KEY = 'ed3ffe8c668f4e859ec15356893268a4'  

          const check = localStorage.getItem('popular') 

          if(check) {
            setPopular(JSON.parse(check))
          }else {
            const api = await fetch( 
                `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9` 
                ) 
            const data = await api.json()  
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
          }
      }


     useEffect(() => {
        getPopular()
     }, [])

  return (
    <div className="popularPick"> 
            <div>
                <h3>Popular Picks</h3>  
                <Splide options={{ perPage: 3, arrows: false, gap: 12, pagination:false}}>
                {
                    popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id} className="vegContainer"> 
                            <Link to={`/recipe/${recipe.id}`} style={{textDecoration: 'none', color: 'black'}} className="link">
                            <div className="card"> 
                               <img  src={recipe.image}   
                               className="vegImage" 
                               alt={recipe.title}/> 
                               <p>{recipe.title}</p>
                            </div> 
                            </Link>
                            </SplideSlide>
                        )
                    })
                }
                </Splide>
            </div>
    </div>
  )
}



export default Popular