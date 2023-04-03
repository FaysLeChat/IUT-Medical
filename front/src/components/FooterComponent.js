import Container from 'react-bootstrap/Container';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import dr_amigo from "../assets/img/dr_amigo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

function FooterComponent() {
    return (
        <>
            <footer className="bg-dark text-white py-4 mt-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img className="d-block w-50" src={dr_amigo} alt="dramigo" />
                        </Col>
                        <Col md={4}>
                            <h5>FullMedical Alchemist</h5>
                            <p>
                                l'université SP, 16 Rue de l'Université<br />
                                62307 Lens
                            </p>
                        </Col>
                        <Col md={4}>
                            <h5>Suivez-nous</h5>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                </li>
                                <li className="list-inline-item">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </li>
                                <li className="list-inline-item">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default FooterComponent;
