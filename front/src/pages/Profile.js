import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import NotLoggedComponent from "../components/NotLoggedComponent";

const Profile = (props) => {
    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;
    const name = amigo && amigo.name;
    const surname = amigo && amigo.surname;

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
                                        <h3>Profil utilisateur</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={4}>
                                                <img
                                                    src="data:image/png;base64,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"
                                                    alt="avatar"
                                                    className="img-thumbnail"
                                                    style={{ width: "100%" }}
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>
                                                        <strong>Nom :</strong> {name} {surname}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Email :</strong> {email}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Date d'inscription :</strong> dd/mm/aaaa
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Statut :</strong> Patient/Docteur
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <strong>Pays :</strong> France
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
                                        <h3>Informations patient</h3>
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
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <h3>Mes rendez-vous programés</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                Aucun
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