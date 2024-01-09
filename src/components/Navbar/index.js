import {Link} from "react-router-dom"
import "./index.css"

import { MdOutlinePermIdentity} from "react-icons/md";

const Navbar=()=>{
    return(
        <nav className="navbar-main-container">
            <div className="left-container">
            <Link to="/" className="="link><img src="./opamtechlogo.jpeg" alt="website-logo" className="nav-logo"/></Link> 
            <select id="cars" name="Popular Courses" className="filters">
    <option value="Python" selected>Certification Courses</option>
    <option value="Java">Java</option>
    <option value="React JS">React JS</option>
    <option value="HTML">HTML</option>
  </select>
  <select id="cars" name="Certification Courses" className="filters">
  <option value="Python">Python</option>
    <option value="Java">Java</option>
    <option value="React JS">React JS</option>
    <option value="HTML">HTML</option>
  </select>


            </div>

            <div className="right-container">
            <p className="all-resources-text">All resources</p>
            <button className="login-button"> <Link className="to-login-link" to="/login"><MdOutlinePermIdentity size={25} />Log In</Link></button>
            <button className="sign-up-button"><Link className="to-signup-link" to="signup">Free Sign Up</Link></button>
            </div>

            

        </nav>
    )
}
export default Navbar