import {Link} from "react-router-dom"
import "./index.css"

const LoginPage=()=>{

    // const onCheckPrivacyTerms=()=>{

    // }
    return(
        <div className="signup-page-main-container">
        <div className="sub-container">
            
        <Link to="/" className="="link><img src="./opam_tech_logo.jpeg" alt="website logo" className="website-logo"/></Link> 
                <form className="signup-form-container">
                    <h2 className="form-heading">Login</h2>
                    <input className="signup-input-container" placeholder="Your email"/>

                    <input className="signup-input-container" placeholder="Your password"/>
                    < div className="check-box-container">
          <input
            type="checkbox"
            className="checkbox"
            id="privacy-terms"
            // onChange={onCheckPrivacyTerms}
          />
          <label htmlFor="privacy-terms" className="privacy-terms-text">I agree to this website's privacy policy and terms of services.</label>
        </div>

        <button className="signup-button" type="submit">Login</button>
       <p className="bottom-text">Don't have an account? <Link to="/signup" className="link login">Sign up</Link></p>


                </form>

            </div>

        </div>
    )
}

export default LoginPage