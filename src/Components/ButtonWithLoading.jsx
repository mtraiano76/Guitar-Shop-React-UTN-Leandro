import React from "react"
//import Button from 'react-bootstrap/Button'
import {Button,Spinner} from 'react-bootstrap'

function ButtonWithLoading(props){
<<<<<<< HEAD
    const {variant,type,loading} = props    
    return(
        /* */
        <Button 
            type={type || "submit"} 
            variant={variant || "primary"} 
            disabled={loading} 
=======
    const {variant,type,loading} = props
    return(
        /* */
        <Button 
            type={type || "submit"}
            variant={variant || "primary"}
            disabled={loading}
>>>>>>> eb837fa09b036c5a129574684c3c62165c91d847
        >
            {
                loading &&
                <Spinner animation="border" size="sm" />
            }
            {props.children}
        </Button>
    )
<<<<<<< HEAD
    
=======
>>>>>>> eb837fa09b036c5a129574684c3c62165c91d847
}
export default ButtonWithLoading;
