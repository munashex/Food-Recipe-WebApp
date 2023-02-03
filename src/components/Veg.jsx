import {useEffect, useState} from 'react'
import styled from 'styled-components' 
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'  
import "../App.css"

function Veg() { 

    const [Veg, setVeg] = useState([])

    const getVeg  = async() => { 
        let API_KEY = 'ed3ffe8c668f4e859ec15356893268a4'  

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
            <div>
                <h3>Vegetarian Picks</h3>  
                <Splide options={{gap: '1rem', perPage: 3, arrows: false, gap: 12}}>
                {
                    Veg.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id} className="vegContainer"> 
                            <Link to={`/recipe/${recipe.id}`} style={{textDecoration: 'none', color: 'black'}} className="link" >
                            <div className="card"> 
                               <img  
                               className="vegImage" 
                               src={recipe.image} alt={recipe.title}/> 
                               <p>{recipe.title.slice(0, 23)}...</p>
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



export default Veg