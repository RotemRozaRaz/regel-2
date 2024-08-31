import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">רגל 2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">דף הבית</Nav.Link>
          <Nav.Link href="#Products">ההמוצרים שלנו</Nav.Link>
          <Nav.Link href="#MyProducts">ההמוצרים שלי</Nav.Link>
          <Nav.Link href="#About">אז מי אנחנו?</Nav.Link>
          <Nav.Link href="#Contacts">צרו קשר</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}