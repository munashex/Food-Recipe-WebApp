import {useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom'  
import '../App.css'




function Recipe() {   
    let {id} = useParams()   
    const [details, setDetails]  = useState({})

    let API_KEY = 'ed3ffe8c668f4e859ec15356893268a4'  

    const getDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const result = await data.json() 
        setDetails(result)
    }
    
   useEffect(() => {
   getDetails()
   }, [id])

   //details.title //details.image

  return (
    <div className="recipe_container">
        <div className="recipe_title_img">
            <h2 >{details.title}</h2>
            <img src={details.image} className="recipe_img"/>
        </div> 

      <div className='Info_container'> 
          <h2 style={{fontWeight: 400}}>Recipe</h2>
        <h3  style={{fontWeight: 400, lineHeight: 1.2}} dangerouslySetInnerHTML={{__html: details.instructions}}>

        </h3>
      </div>
        

    </div>
  )
}



export default Recipe