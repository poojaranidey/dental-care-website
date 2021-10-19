import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';





const Header = () => {
    const { user, logOut } = useAuth();
    // Header section 
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dental Clinic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav >

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className="navlink" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="navlink" as={Link} to="/contact">Contact-us</Nav.Link>
                            <Nav.Link className="navlink" as={Link} to="/about">About-us</Nav.Link>
                            {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                            {
                                user.email ?
                                    <button onClick={logOut}>log out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;