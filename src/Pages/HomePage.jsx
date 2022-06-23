import React from "react"
import Modelos5 from "../Components/Modelos5"
import firebase from "../Config/firebase";
function HomePage(){
    console.log(firebase)
    return(
        <div>
               <div className="">
                <Modelos5 />
            </div>
        </div>
    )
}
export default HomePage;