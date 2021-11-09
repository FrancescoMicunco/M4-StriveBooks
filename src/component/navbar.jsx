import {Navbar, Container, Nav} from 'react-bootstrap'
const MyNavBar=()=>(
<Navbar bg="dark" variant="dark">
    <Container>
        <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

)

export default MyNavBar