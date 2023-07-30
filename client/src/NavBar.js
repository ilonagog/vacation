import React from 'react'

// import { Link } from "react-router-dom"



// const NavBar = () => {
//     return (
//         <nav class="navbar navbar-dark bg-primary">
//             <p>Home</p>
//             <Link className='navLink' to="/">Home</Link>
//             <Link className='navLink' to="/places">Places</Link>
//             <Link className='navLink' to="/reviews">Reviews</Link>
//             <Link className='navLink' to="/login">Log In</Link>
//         </nav>
//     )
// }

// export default NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdReorder } from "react-icons/md";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/places">Places</Nav.Link>
                        <Nav.Link href="/reviews">Reviews</Nav.Link>
                        <NavDropdown title={MdReorder} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contact Us
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
