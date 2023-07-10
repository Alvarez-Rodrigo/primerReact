
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Hogar">Hogar</Nav.Link>
            <Nav.Link href="#Jardineria">Jardineria</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  );
}

export default NavBar;