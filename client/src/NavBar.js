import React, { useContext } from 'react'

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
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom'



const NavBar = () => {

    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                logout()
                navigate('/')
            })
    }

    if (loggedIn) {
        return (
            <div>
                <h3>Welcome {user.username}</h3>
                <button onClick={logoutUser}>Logout</button>
                <br />
            </div>
        )

    }
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
                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/contact">
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
