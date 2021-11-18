import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'





const MyNavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto text-light">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        
        <Link to="/register">
          <div className="nav-link">Register</div>
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavBar