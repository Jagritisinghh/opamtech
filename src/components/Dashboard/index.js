import Navbar from "../Navbar" 
import ResourceCardItem from "../ResourceCardItem"
import "./index.css"


const Dashboard=()=>{
    return(
        <>
        <Navbar/>
        <div className="dashboard-main-container">
            <div className="container-1">
                <h1 className="title">Your Vision Our Tech-tailored for Succcess</h1>
            </div>
            <ul className="container-2">
                <ResourceCardItem/>
            </ul>
        </div>
        </>
    )
}
export default Dashboard