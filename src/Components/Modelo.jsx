import React,{useState} from "react"
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'

const style = {
    card:{ width: '18rem' }
}

function Modelo(props){
    const {data} = props
    console.log(data)
    const[comprar,setComprar] = useState('')
    const handleClick = ()=>{
        console.log("Id producto",data.id)
        setComprar("¡Gracias por su compra!")
    }
    return(

<Col>
<Card style={style.card}>
    <Card.Img variant="top" src={data.thumbnail} />
    <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button as={Link} to={'/producto/'+ data.id} variant="primary">Ver Detalle</Button>
        <Button as={Link} to={'/productos/modificar/'+ data.id} variant="primary">Modificar</Button>

        
        <div>{comprar}</div>
    </Card.Body>
</Card>
</Col>

)
}

export default Modelo

