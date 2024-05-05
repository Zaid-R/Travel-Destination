import "./TourDetails.css";
import data from '../../data/db.json'
import { useState } from "react";
import { useParams } from "react-router-dom";
 let whiteSpaceValue = "nowrap";
// let pStyle = {
//             fontSize: "18px",
//             lineHeight: "1.6",
//     }

let buttonTitle = "see more";
function TourDetails() {
    let { id } = useParams();
    function getCityData() { return data.filter(city => city.id == id)[0] }
    const city = getCityData();
    const [isReadMore, setIsReadMore] = useState(false);
   
    
    function switchOption(){
        setIsReadMore(!isReadMore)
        buttonTitle = "see " + (isReadMore?"more":"less");
    }

    return (
        <main>
            <div className="details-div">
                <h1>{city.name}</h1>
                <img src={city.image} />
            </div>
            
            <div className="details-div text">
                <p>{isReadMore?city.info:city.info.slice(0,300)+"..."}<button onClick={switchOption}>{buttonTitle}</button></p>
                
            </div>
            
        </main>
    );
}
export default TourDetails;