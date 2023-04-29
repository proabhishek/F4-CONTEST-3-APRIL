
import { Link, NavLink} from "react-router-dom";




export const Navbar = () => {
      

       return(
              <nav className="navbar">
                    <div>
                    <h3 style={{color:"white"}}>Shopping Cart</h3>
                    </div>
                    
                   <div className="other">
                        <div> <Link to="/">Home page</Link></div>
                        <div><Link to="/about">MyCart page</Link></div>
                   </div>
                   
                            
              </nav>
       )



}



