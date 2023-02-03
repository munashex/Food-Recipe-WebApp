import { Link } from 'react-router-dom' 
import '../App.css'

function Category() {
  return (
    <div className="categoryList">
            <Link to="/cuisine/Italian" style={{textDecoration: 'none'}}> 
            <pre>Italian</pre> 
            </Link>
       

            <Link to="/cuisine/American"  style={{textDecoration: 'none'}}>
            <pre>American</pre>
            </Link>

             <Link to="/cuisine/Thai" style={{textDecoration: 'none'}}>
            <pre>Thai</pre> 
            </Link>

      
              <Link to="/cuisine/Japanese" style={{textDecoration: 'none'}}>
            <pre>Japanese</pre>  
            </Link>
    </div>
  )
}





export default Category