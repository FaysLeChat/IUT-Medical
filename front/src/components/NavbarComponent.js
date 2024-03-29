import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {getUserByEmail, isDoctorByEmail} from "../services/userService";

function NavbarComponent(props) {
    let email ;
    const [userInfo, setUserInfo] = useState(null);
    const [isDoctor, setIsDoctor] = useState(null);

    if(props.cookie && props.cookie.amigo) {
        email = props.cookie.amigo.email;
    }

    useEffect(() => {
        const fetchData = async () => {
            if (props.cookie?.amigo?.email) {
                const fetchedUserInfo = await getUserByEmail(email);
                setUserInfo(fetchedUserInfo);
            }
        }
        async function checkDoctorStatus() {
            const isDoctorResult = await isDoctorByEmail(email);
            setIsDoctor(isDoctorResult);
        }
        checkDoctorStatus();
        (async () => {
            await fetchData();
        })();
    }, [email]);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">FullMedical Alchemist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        { email === undefined ? (
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={Nav.Link}><FontAwesomeIcon icon={faUser}/> Invité</Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item as={Link} to="/login">Connexion</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/register">Inscription</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={Nav.Link}><FontAwesomeIcon icon={faUser}/> {email}</Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item as={Link} to="/profile">Profil</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/appointment">Calendrier</Dropdown.Item>
                                    {isDoctor && (
                                        <Dropdown.Item as={Link} to="/profile" disabled="true">Panneau des médecins</Dropdown.Item>
                                    )}
                                    <hr />
                                    <Dropdown.Item onClick={() => props.removeCookie("amigo")}>Se déconnecter</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
