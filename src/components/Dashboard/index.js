import Navbar from "../Navbar" 
import PopularCourseItem from "../PopularCourseItem"
import "./index.css"


const Dashboard=()=>{
    return(
        <>
        <Navbar/>
        <div className="dashboard-main-container">
            <div className="container-1">
                <img src="./hero_back.jpg" alt="hero background" className="hero-background"/>
            </div>
            <div className="container-2">
               
  
                <div className="certified-courses-container" >
                    <img  src="./certification.webp" alt="" className="certification-images"/>
                <h2 className="course-category-head">Certification Courses </h2>
                <ul className="list-items">

                    <li className="certified-popular-items">
                        Web Development
                    </li>
                    <li className="certified-popular-items">
                        App Development
                    </li>
                    <li className="certified-popular-items">
                        Machine Learning
                    </li>
                </ul>

                </div>
              

                <div className="certified-courses-container">
                <img  src="./certification.webp" alt="" className="certification-images"/>

                <h2 className="course-category-head">Popular Courses </h2>
                <ul className="list-items">

                <li className="certified-popular-items">
                        Web Development
                    </li>
                    <li className="certified-popular-items">
                        App Development
                    </li>
                    <li className="certified-popular-items">
                        Machine Learning
                    </li>
                
                </ul>
                </div>

            </div>
            <h1 className="most-popular-title">Most Popular</h1>
            <ul className="container-3">
                <PopularCourseItem/>
            </ul>
        </div>
        </>
    )
}
export default Dashboard