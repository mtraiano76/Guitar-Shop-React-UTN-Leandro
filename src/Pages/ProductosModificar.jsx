import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import {getByIdProductos,update,deleteProducto} from "../Services/productosServices"
function ProductosModificar(){
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const { register, handleSubmit,setValue, watch, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            await update(id,data)
            console.log(document)
        }catch(e){
            console.log(e)
        }
        
    }
    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProductos(id)
                    console.log("response",response.data())
                    setLoading(false)
                    setValue("name",response.data().name)
                    setValue("price",response.data().price)
                    setValue("description",response.data().description)
                }
                request()
            }catch(e){
                console.log(e)
            }
            
        },
        [id]
    )
    const handleDelete = async ()=>{
        await deleteProducto(id)
    }
    if(loading){
        return (<div>Cargando...</div>)
    }else{
        return(
            <div className="">
                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Nombre" name="name" register={{...register("name", { required: true, minLength:3 })}} />
                    <div>
                        {errors.name?.type==="required" && <span>El campo es obligatorio</span>}
                        {errors.name?.type==="minLength" && <span>Debe introducir al menos 3 caracteres</span>}
                    </div>
                    <Input label="Precio" name="price" register={{...register("price", { required: true})}} />
                    <div>
                        {errors.lastname && <span>El campo es obligatorio</span>}
                    </div>
                    <Input label="Descripcion" type="text" name="description" register={{...register("description", { required: true})}} />
                    <Button type="submit" variant="primary">Guardar</Button>
                </Form>
            </div>
        )
    }
    
} 

export default ProductosModificar