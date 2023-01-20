import {useEffect, useState} from 'react'
import styled from 'styled-components' 
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link 
 } from 'react-router-dom';
function Popular() { 

    const [popular, setPopular] = useState([])

    const getPopular  = async() => { 
        let API_KEY = '940401677c1c4f04a472a99fab775898'  

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
    <div style={{marginTop: -68}}> 
            <Wrapper>
                <h3>Popular Picks</h3>  
                <Splide options={{perPage: 4, arrows: false, pagination: false, gap: '1rem'}}>
                {
                    popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}> 
                            <Link to={`/recipe/${recipe.id}`} style={{textDecoration: 'none', color: 'black'}}>
                            <Card> 
                               <img  src={recipe.image} alt={recipe.title}/> 
                               <p>{recipe.title}</p>
                            </Card> 
                            </Link>
                            </SplideSlide>
                        )
                    })
                }
                </Splide>
            </Wrapper>
    </div>
  )
}

const Wrapper = styled.div` 
margin: 4rem 0rem; 
`

const Card = styled.div`
min-height: 25rem;
overflow: hidden; 

img {
    width: 160%; 
    object-fit: cover
}
`

export default Popular