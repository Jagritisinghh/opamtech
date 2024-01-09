import "./index.css"
const ResourceCardItem=()=>{
    return(
        <>
        <li className="resource-card item2">
           
             <h3 className="heading">

                Web devlopment
             </h3>
             <img src="/svg.jpeg" alt="resource"  className="resources-img"/>

        </li>
        <li className="resource-card item1">
        
         <h3 className="heading">

            App Development
         </h3>
         <img src="/svg2.jpeg" alt="resource"  className="resources-img"/>

    </li>
    <li className="resource-card item3">
     <h3 className="heading">

      Programming with Python
     </h3>
     <img src="/svg3.jpeg" alt="resource"  className="resources-img"/>

</li>
        </>
    )
}
export default ResourceCardItem