import {Link} from "react-router-dom"
import "./index.css"

import { MdOutlinePermIdentity} from "react-icons/md";

const Navbar=()=>{
    return(
        <nav className="navbar-main-container">
            <div className="left-container">
            <Link to="/" className="link"><img src="./opam_tech_logo.jpeg" alt="website-logo" className="nav-logo"/></Link> 
           


            </div>

            <div className="right-container">
            <p className="all-resources-text">All resources</p>
            <button className="login-button"> <Link className="link login" to="/login"><MdOutlinePermIdentity size={25} />Log In</Link></button>
            <button className="sign-up-button"><Link className="link" to="signup">Free Sign Up</Link></button>
            </div>

            

        </nav>
    )
}
export default Navbar