import ReactPlayer from 'react-player'
import Navbar from "../Navbar"
import "./index.css"
const CourseDetail=()=>{
    return(
        <>
                <Navbar/>
        <div className="course-detail-main-container">
            <div className="course-detail-container-2">
               
                <div className="course-description-container">
                <h1 className="course-heading">
                    Web Developmemt
                </h1>                <p className="course-description">Embark on a transformative journey into the world of web development with our comprehensive Web Development Certification Course. Designed to equip both beginners and aspiring developers with the essential skills, this 8-week program offers a deep dive into the key technologies and methodologies driving today's dynamic web landscape.</p>
                <p className="course-duration">Duration: 8 Weeks</p>
                <p className="course-subscribers">Subscribers: 654356</p>
                <button className="get-the-course-button"> Start training</button>
                </div>
                <div className="video-player-container">
                <ReactPlayer url='https://youtu.be/etZ4jq_YjyM?si=rTn4TUxdV7P1HT-G' />                </div>

            </div>
        </div>
</>
    )

}

export default CourseDetail