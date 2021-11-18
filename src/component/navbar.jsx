import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto text-light">
        
        <div></div>
        <div>About</div>
        <div>Browse</div>
        <Link to="registrationForm">
          <div classname="nav-link">Register here</div>
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavBar