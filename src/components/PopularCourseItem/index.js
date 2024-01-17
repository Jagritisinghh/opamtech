import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa6";
import "./index.css"
const PopularCourseItem=()=>{
    return(
        <>
        <li className="resource-card">
        <img src="./certification.webp" alt=""  className="resources-img"/>
        <h3 className="heading">

                App development
             </h3>
             <div className="course-details-container">
                <p className="duration">12 weeks</p>
                <p className="learners">34519 learners</p>
                <p className="rarings"> 4 <FaStar/> </p>
             </div>

             <button className="know-more-btn">know more</button>

        </li>
        <li className="resource-card item2">
        <img src="./certification.webp" alt=""  className="resources-img"/>
        <h3 className="heading">

                Web development
             </h3>
             <div className="course-details-container">
                <p className="duration">8 weeks</p>
                <p className="learners">34519 learners</p>
                <p className="rarings"> 4 <FaStar/> </p>
             </div>

             <button className="know-more-btn"><Link className="link" to="/coursedetail">know more</Link></button>

        </li>
        <li className="resource-card item2">
        <img src="./certification.webp" alt=""  className="resources-img"/>
        <h3 className="heading">

                Data Structures And Algorithm
             </h3>
             <div className="course-details-container">
                <p className="duration">14 weeks</p>
                <p className="learners">34519 learners</p>
                <p className="rarings"> 4 <FaStar/> </p>
             <button className="know-more-btn">know more</button>
             </div>


        </li>
        </>
    )
}
export default PopularCourseItem