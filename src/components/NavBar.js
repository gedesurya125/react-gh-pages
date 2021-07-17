import * as image from '../assets/img/imgLoader'
import {Navbar, Container, Nav} from 'react-bootstrap'

const navLinks = [
  { linkTo: '#about', text: 'About' },
  { linkTo: '#projects', text: 'Projects' },
  { linkTo: '#acheivements', text: 'Acheivements' },
  { linkTo: '#contacts', text: 'Contacts' },
];

const renderNavLinks = navLinks.map((navLink, index) => (
  <Nav.Link key={index} className="nav-link px-3 active" href={navLink.linkTo}>{navLink.text}</Nav.Link>
))
const NavBar = (props) => {
  return (
    <Navbar className="navbar pt-0 pb-0" variant="dark" collapseOnSelect expand="lg" sticky="top">
      <Container fluid className="p-0">
        <Navbar.Brand className="navbar-brand" href="#home"><img src={image.headerIcon} alt="no" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            {renderNavLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;