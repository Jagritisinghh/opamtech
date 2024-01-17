
import { FaJava,FaPython,FaAndroid,FaHtml5 } from "react-icons/fa";
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
               
  
             
                
                <div className="certification-and-popular-course-container">
                 <div className="certified-courses-container" >
                    <img  src="./certification.webp" alt="" className="certification-images"/>
                    <div className="popular-course-responsive-container">
                <h2 className="course-category-head">Popular Courses </h2>
                <ul className="list-items">

                    <li className="certified-popular-items">
                    <FaHtml5  className="icons" size={30} /> Web Development
                    </li>
                    <li className="certified-popular-items">
                      <FaAndroid   className="icons" size={30}/>  App Development
                    </li>
                    <li className="certified-popular-items">
                    <FaJava  className="icons" size={30} /> Java
                    </li>
                    <li className="certified-popular-items">
                      <FaPython className="icons" size={30}/>  Machine Learning
                    </li>
                </ul>
                <button className="view-more-button"> View More</button>

                </div>
                </div>
                <div className="certified-courses-container" >
                    <img  src="./certification.webp" alt="" className="certification-images"/>
                    <div className="popular-course-responsive-container">
                <h2 className="course-category-head">Certification Courses </h2>
                <ul className="list-items">

                    <li className="certified-popular-items">
                    <FaHtml5  className="icons" size={30} /> Web Development
                    </li>
                    <li className="certified-popular-items">
                      <FaAndroid   className="icons" size={30}/>  App Development
                    </li>
                    <li className="certified-popular-items">
                    <FaJava  className="icons" size={30} /> Java
                    </li>
                    <li className="certified-popular-items">
                      <FaPython className="icons" size={30}/>  Machine Learning
                    </li>
                </ul>
                <button className="view-more-button"> View More</button>

                </div>
                </div>
                </div>

               

           
            <h1 className="most-popular-title">Most Popular</h1>
            <ul className="container-3">
                <PopularCourseItem/>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Dashboard