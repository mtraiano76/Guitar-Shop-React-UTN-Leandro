const Header = (props) => {
    return(
        <header>
        <h1>GUITAR SHOP</h1>
        <img src="img/logo.png" width= "100" alt="Guitar Shop"/>
        <nav>

    
            <label for="check" class="bar-btn">
                <i class="fa-solid fa-bars"></i>
            </label>
            <ul class="nav-menu">
                <li><a class="active" href="#">Inicio</a></li>
                <li><a href="home.html" class="nav-enlace">Home</a></li>
                <li><a href="productos.html" class="nav-enlace">Destacados</a></li>
                <li><a href="galeria.html" class="nav-enlace">Galeria</a></li>
                <li><a href="contacto.html" class="nav-enlace">Contacto</a></li>
                <li><a href="formularios_registro.html" class="nav-enlace">Registrate</a></li>
            </ul>
        </nav>
        <div class="banner-text">
            <h2>GUITARS & MORE</h2>
            <h1>GO TO PLAY <span>MUSIC</span></h1>
            <div>
                <a href="home.html" class="button1">EXPLORE</a>
                <a href="productos.html" class="button2">PLAY NOW</a>
            </div>
        </div>

    </header>
    );
}
export default Header;