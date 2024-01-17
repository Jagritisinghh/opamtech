// import {Link} from "react-router-dom"
import { FaStar,FaArrowRight,FaBookOpenReader } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";
import "./index.css"


const popularCourseList=[
   {
     "courseName": "Web Development Bootcamp",
     "duration": "10 weeks",
     "subscribers": 15000,
     "ratings": 4.5
   },
   {
     "courseName": "Machine Learning Fundamentals",
     "duration": "8 weeks",
     "subscribers": 12000,
     "ratings": 4.2
   },
   {
     "courseName": "App Development with React",
     "duration": "12 weeks",
     "subscribers": 18000,
     "ratings": 4.7
   },
   {
     "courseName": "Data Science Masterclass",
     "duration": "14 weeks",
     "subscribers": 20000,
     "ratings": 4.8
   },
   {
     "courseName": "Cybersecurity Essentials",
     "duration": "6 weeks",
     "subscribers": 10000,
     "ratings": 4.0
   },
   {
     "courseName": "DevOps for Beginners",
     "duration": "8 weeks",
     "subscribers": 14000,
     "ratings": 4.4
   }
 ]
 
const PopularCourseItem=()=>{
    return(
        <>
        {popularCourseList.map(eachcourse=>{
         return(

            <li className="resource-card">
          <img src="./certification.webp" alt=""  className="resources-img"/>
          <h3 className="heading">
  
                  {eachcourse.courseName}
               </h3>
               <div className="course-details-container">
                  <p className="items"><FaUserClock className="icon"/>{eachcourse.duration}</p>
                  <p className="items"><FaBookOpenReader className="icon"/>{eachcourse.subscribers} learners</p>
                  <p className="items"> {eachcourse.ratings} <FaStar className="icon"/> </p>
               </div>
  
               <button className="know-more-btn">know more <FaArrowRight/> </button>
  
          </li>
         )
          

        })}
       
        </>
    )
}
export default PopularCourseItem