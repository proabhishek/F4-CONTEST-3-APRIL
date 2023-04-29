
import { Link, NavLink} from "react-router-dom";




export const Navbar = () => {
      

       return(
              <nav className="navbar">
                    <div>
                    <h3 style={{color:"white"}}>Shopping Cart</h3>
                    </div>
                    
                   <div className="other">
                        <div> <NavLink to="/">Home page</NavLink></div>
                        <div><NavLink to="/about">MyCart page</NavLink></div>
                   </div>
                   
                            
              </nav>
       )



}



