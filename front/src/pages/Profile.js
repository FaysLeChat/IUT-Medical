import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import DefaultAvatar from '../assets/avatars/default.png';
import {Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Table} from "react-bootstrap";
import NotLoggedComponent from "../components/NotLoggedComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faCalendar,
    faGear,
    faKey,
    faMailForward,
    faTrash,
    faUser,
    faUserDoctor
} from "@fortawesome/free-solid-svg-icons";
import {getUserByEmail, isDoctorByEmail} from "../services/userService";

const Profile = (props) => {
    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;
    const [userInfo, setUserInfo] = useState(null);
    const [isDoctor, setIsDoctor] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const fetchedUserInfo = await getUserByEmail(email);
            setUserInfo(fetchedUserInfo);
        }
        async function checkDoctorStatus() {
            const isDoctorResult = await isDoctorByEmail(email);
            setIsDoctor(isDoctorResult);
        }
        checkDoctorStatus();
        fetchData();
    }, [email]);

    return (
        <div className="App">
            <main>
                { amigo === undefined ? (
                    <NotLoggedComponent />
                ) : (
                    <Container>
                        <Row className="justify-content-center mt-5">
                            <Col md={8}>
                                <Card>
                                    <Card.Header>
                                        <h3><FontAwesomeIcon icon={faUser} /> Profil utilisateur</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={4}>
                                                <img
                                                    src={DefaultAvatar}
                                                    alt="avatar"
                                                    className="img-thumbnail"
                                                    style={{ width: "100%" }}
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <span>
                                                                <strong>Nom :</strong> {userInfo && userInfo.name}
                                                            </span>
                                                            <span>
                                                                <strong>Prénom :</strong> {userInfo && userInfo.surname}
                                                            </span>
                                                        </div>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Email :</strong> {userInfo && userInfo.email}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Date d'inscription :</strong> {userInfo && userInfo.registration_date}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Statut :</strong> {isDoctor?"Docteur":"Patient"}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Pays :</strong> France
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <Button variant="primary" className="rounded-pill mt-3"><FontAwesomeIcon icon={faKey} /> Changer mon mot-de-passe</Button>
                                                        <Button variant="warning" className="rounded-pill mt-3"><FontAwesomeIcon icon={faMailForward} /> Changer mon adresse e-mail</Button>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Header>
                                        <h3><FontAwesomeIcon icon={faUserDoctor} /> Informations patient</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>
                                                        <strong>Numéro de sécurité sociale :</strong> xxxxx
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Docteur généraliste :</strong> Dr. Amigo
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-4">
                                    <Card.Header>
                                        <h3><FontAwesomeIcon icon={faGear} /> Actions</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col className="text-center">
                                                <Button variant="danger" className="rounded-pill mt-3"><FontAwesomeIcon icon={faTrash} /> Supprimer mon compte</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <h3><FontAwesomeIcon icon={faCalendar} /> Mes rendez-vous programés</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover size="sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Heure</th>
                                                            <th>Docteur</th>
                                                            <th>Spécialité</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>01/05/2023</td>
                                                            <td>14:00</td>
                                                            <td>Dr. Amigo</td>
                                                            <td>Cardiologue</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10/05/2023</td>
                                                            <td>10:30</td>
                                                            <td>Dr. Dupont</td>
                                                            <td>Orthopédiste</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )}
            </main>
        </div>
    );
};

export default Profile;