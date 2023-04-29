
import { Link, NavLink} from "react-router-dom";




export const Navbar = () => {
      

       return(
              <nav className="navbar">
                    <div>
                    <h3 style={{color:"white"}}>Shopping Cart</h3>
                    </div>
                    
                   <div className="other">
                        <div> <NavLink to="/F4-CONTEST-3-APRIL">Home page</NavLink></div>
                        <div><NavLink to="/about">MyCart page</NavLink></div>
                   </div>
                   
                            
              </nav>
       )



}



