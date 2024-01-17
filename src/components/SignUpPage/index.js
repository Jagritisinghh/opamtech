import {Link} from "react-router-dom"
import "./index.css"

const SignUpPage=()=>{

    // const onCheckPrivacyTerms=()=>{

    // }
    return(
        <div className="signup-page-main-container">
        <div className="sub-container">
            
           <Link to="/" className="="link><img src="./opam_tech_logo.jpeg" alt="website logo" className="website-logo"/></Link> 
                <form className="signup-form-container">
                    <h2 className="form-heading">Sign Up</h2>
                    <input className="signup-input-container" placeholder="Your email"/>
                    <input className="signup-input-container" placeholder="Your full name"/>

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

        <button className="signup-button" type="submit">Sign Up</button>
       <p className="bottom-text">Already have an account? <Link to="/login" className="link login">Login</Link></p>


                </form>

            </div>

        </div>
    )
}

export default SignUpPage