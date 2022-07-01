import React from "react"
import Modelos from "../Components/Modelos"
import firebase from "../Config/firebase";

function IndexPage() {

    console.log(firebase)
    return (
        <div>
            <div className="">
                <Modelos />
            </div>
        </div>
    )
}

export default IndexPage;

