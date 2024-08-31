import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.jpeg';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="רגל 2 logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto flex-row-reverse" // Aligns the Nav links to the right
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className="mx-3">דף הבית</Nav.Link>
            <Nav.Link href="#Products" className="mx-3">ההמוצרים שלנו</Nav.Link>
            <Nav.Link href="#MyProducts" className="mx-3">ההמוצרים שלי</Nav.Link>
            <Nav.Link href="#About" className="mx-3">אז מי אנחנו</Nav.Link>
            <Nav.Link href="#Contacts" className="mx-3">צרו קשר</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}