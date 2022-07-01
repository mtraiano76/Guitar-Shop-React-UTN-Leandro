import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/index">GUITAR SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home">Home</NavDropdown.Item>
              <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
              <NavDropdown.Item href="/galeria">Galeria</NavDropdown.Item>
              <NavDropdown.Item href="/contacto">Contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/registro">
                Registro
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;