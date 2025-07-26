import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FloatingTopNavBar.css';

function FloatingTopNavBar() {
  return (
    <Navbar className="floating-top-nav-bar justify-content-between shadow-sm rounded">
      <div className="nav-title">Paxetica</div>
      <Nav className="nav-links">
        <Nav.Link href="#aesthetic" aria-label="Aesthetic">Aesthetic</Nav.Link>
        <Nav.Link href="#flourish" aria-label="Flourish">Flourish</Nav.Link>
        <Nav.Link href="#vigora" aria-label="Vigora">Vigora</Nav.Link>
        <Nav.Link href="#enzyme" aria-label="Enzyme">Enzyme</Nav.Link>
        <div className="profile-bubble">
            <div className="profile-photo">
            <img src="https://i.pravatar.cc/40" alt="Profile" />
            </div>
            <div className="profile-status" />
        </div>
      </Nav>
      
    </Navbar>
  );
}

export default FloatingTopNavBar;

