import React,{useState} from "react"
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'

const style = {
    card:{ width: '18rem' }
}

function Modelo(props){
    const {data,id} = props
    console.log(data)
    const[comprar,setComprar] = useState('')
    const handleClick = ()=>{
        console.log("Id producto",data.id)
        setComprar("¡Gracias por su compra!")
    }
    return(

<Col xs={12} sm={6} xxl={3}> {/* con esto damos tamaño a las cards*/}
    <Card >
        
            <Card.Img variant="top" src={data.thumbnail} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
         
            </Card.Text>
        <Button as={Link} to={'/producto/'+id} variant="primary">Ver Detalle</Button>
        <Button as={Link} to={'/productos/modificar/'+id} variant="primary">Modificar</Button>

        
        <div>{comprar}</div>
    </Card.Body>
</Card>
</Col>

)
}

export default Modelo

