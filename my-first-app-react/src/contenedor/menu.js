
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo_col from "../assent/Logo_col.png"

function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <img src= {Logo_col} alt="logo" style={{padding:10,marginRight: 220}}/>
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