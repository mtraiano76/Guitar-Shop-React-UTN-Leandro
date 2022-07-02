import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../Services/productosServices"

function DetallePage() {
    const {id} = useParams()
    console.log("Id",id)
    const [loading,setLoading] = useState(true)
    const [producto,setProducto] = useState({})
    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProductos(id)
                    console.log("response",response)
                    setLoading(false)
                    setProducto(response.data())
                }
                request()
            }catch(e){
                console.log(e)
            }
        },
        [id]
    )
    if(loading){
        return (<div>Cargando ...</div>)
    }else{
        return(
            <div className="">
                <h1>{producto.name}</h1>
                <p>$ {producto.price}</p>
            </div>
        )
    }

}

export default DetallePage