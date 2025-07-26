import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FloatingTopNavBar.css';

function FloatingTopNavBar() {
  return (
    <Navbar className="floating-top-nav-bar justify-content-between rounded">
      <div className="nav-title">Paxetica</div>
      <Nav className="nav-links">
        <Nav.Link as={Link} to="/aesthetic" aria-label="Aesthetic">Aesthetic</Nav.Link>
        <Nav.Link as={Link} to="/flourish" aria-label="Flourish">Flourish</Nav.Link>
        <Nav.Link as={Link} to="/initium" aria-label="Initium">Initium</Nav.Link>
        <Nav.Link as={Link} to="/enzyme" aria-label="Enzyme">Enzyme</Nav.Link>
        <Dropdown align="end">
          <Dropdown.Toggle as="div" id="profile-dropdown" style={{ cursor: 'pointer', background: 'none', border: 'none', boxShadow: 'none', padding: 0 }}>
            <div className="profile-bubble">
              <div className="profile-photo">
                <img src="https://i.pravatar.cc/40" alt="Profile" />
              </div>
              <div className="profile-status" />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/signup">Sign In</Dropdown.Item>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default FloatingTopNavBar;

