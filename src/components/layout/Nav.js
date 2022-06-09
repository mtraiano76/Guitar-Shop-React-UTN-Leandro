import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="contacto">Contacto</Link></li>
                    <li><Link to="galeria">Galeria</Link></li>
                    <li><Link to="productos">Productos</Link></li>
                    <li><Link to="registro">Registro</Link></li>
                </ul>

            </div>
        </nav>
        
    );
}
export default Nav;