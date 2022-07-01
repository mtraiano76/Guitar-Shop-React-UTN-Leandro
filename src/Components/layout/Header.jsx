import "../../Components/layout/styles/Header.css"

const Header = (props) => {
    return(
        <header>
            <img src="img/logo.png" width= "100" alt="Guitar Shop"/>
            <h1>GUITAR SHOP</h1>
            <div class="banner-text">
                <h3>GUITARS & MORE</h3>
                <h4>GO TO PLAY <span>MUSIC</span></h4>
            </div>
        </header>
    );
}
export default Header;