import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'


const MyNavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto text-light">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/about">
          <div className="nav-link">About</div>
        </Link>
        <Link to="/browse">
          <div className="nav-link">Browse</div>
        </Link>

      </Nav>
    </Container>
  </Navbar>
);

export default MyNavBar