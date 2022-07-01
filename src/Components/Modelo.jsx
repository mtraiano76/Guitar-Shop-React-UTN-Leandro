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

<Col>
<Card style={style.card}>
    <Card.Img variant="top" src={data.thumbnail} />
    <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
            $ {data.price}
        </Card.Text>
        <Button as={Link} to={'/producto'+ data.id} variant="primary">Ver Detalle</Button>
        <Button as={Link} to={'/producto'+ data.id} variant="primary">Comprar</Button>
        
        <div>{comprar}</div>
    </Card.Body>
</Card>
</Col>

)
}

export default Modelo

