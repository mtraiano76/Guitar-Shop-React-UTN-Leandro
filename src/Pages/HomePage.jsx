import React from "react"
import Modelos from "../Components/Modelos"
import Menu from "../Components/Menu"
import firebase from "../Config/firebase";
function HomePage(){

    console.log(firebase)
    return(
        <div>
               <div className="">
                <Menu />
                <Modelos />
            </div>
        </div>
    )
}

export default HomePage;