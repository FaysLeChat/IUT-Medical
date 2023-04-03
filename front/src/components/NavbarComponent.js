import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">FullMedical Alchemist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                            <Nav.Link href="#about">Rendez-vous</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link}>Compte</Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
