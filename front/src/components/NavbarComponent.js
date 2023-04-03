import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">FullMedical Alchemist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/rdv"><FontAwesomeIcon icon={faCalendar} /> Rendez-vous</Nav.Link>
                            <Nav.Link as={Link} to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link}><FontAwesomeIcon icon={faUser} /> Compte</Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item as={Link} to="/login">Connexion</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/register">Inscription</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
