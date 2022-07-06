import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"


function Home(props) {


    return (
        <div className="contenedor">
            <img src="img/gibson.jpg" alt="Guitar Shop" />
            <div className="d-grid gap-2">
                <Button as={Link} to={'/productos/'}variant="primary" size="lg">PRODUCTOS</Button>

                <Button as={Link} to={'/galeria/'} variant="secondary" size="lg">GALERIA</Button>


             
            </div>

        </div>
    )
}

export default Home