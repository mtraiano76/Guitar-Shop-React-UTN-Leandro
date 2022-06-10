import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <div className="holder">
                <ul>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="productos">Productos</Link></p>
                    <p><Link to="galeria">Galeria</Link></p>
                    <p><Link to="contacto">Contacto</Link></p>
                    <p><Link to="registro">Registro</Link></p>
                </ul>

            </div>
        </nav>
        
    );
}
export default Nav;