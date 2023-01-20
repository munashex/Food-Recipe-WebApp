import {useEffect, useState} from 'react'
import styled from 'styled-components' 
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

function Veg() { 

    const [Veg, setVeg] = useState([])

    const getVeg  = async() => { 
        let API_KEY = '940401677c1c4f04a472a99fab775898'  

          const check = localStorage.getItem('veg') 

          if(check) {
            setVeg(JSON.parse(check))
          }else {
            const api = await fetch( 
                `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=19&tags=vegetarian` 
                ) 
            const data = await api.json()  
            localStorage.setItem("veg", JSON.stringify(data.recipes))
            setVeg(data.recipes)
          }
      }


     useEffect(() => {
        getVeg()
     }, [])

  return (
    <div> 
            <Wrapper>
                <h3>Vegetarian Picks</h3>  
                <Splide options={{perPage: 3, arrows: true, pagination: false, gap: '1rem'}}>
                {
                    Veg.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}> 
                            <Link to={`/recipe/${recipe.id}`} style={{textDecoration: 'none', color: 'black'}}>
                            <Card style={{marginLeft: '19%'}}> 
                               <img src={recipe.image} alt={recipe.title}/> 
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
min-height: 1rem;
overflow: hidden;  


img {
    width: 160%; 
    object-fit: fill
}
`

export default Veg