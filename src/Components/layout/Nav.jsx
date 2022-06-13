import { NavLink } from "react-router-dom";
import "../../Components/layout/styles/Nav.css"

const Nav = (props) => {
    return(
        <nav>
            <div className="holder">
                <ul>
                    
                    <p><NavLink to="/" className={({ isActive}) => isActive ? "activo" : undefined}>Home</NavLink></p>
                    <p><NavLink to="productos" className={({ isActive}) => isActive ? "activo" : undefined}>Productos</NavLink></p>
                    <p><NavLink to="galeria" className={({ isActive}) => isActive ? "activo" : undefined}>Galeria</NavLink></p>
                    <p><NavLink to="contacto" className={({ isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></p>
                    <p><NavLink to="registro" className={({ isActive}) => isActive ? "activo" : undefined}>Registro</NavLink></p>
          
                </ul>

            </div>
        </nav>
        
    );
}
export default Nav;