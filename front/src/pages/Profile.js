import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const Profile = (props) => {
    const amigo = props.cookie.amigo;
    const email = amigo && amigo.email;
    const name = amigo && amigo.name;
    const surname = amigo && amigo.surname;

    return (
        <div className="App">
            <main>
                { amigo === undefined ? (
                    <div className="App">
                        <main>
                            <div className="error404">
                                <h1>Accès non autorisé</h1>
                                <p>Tu dois te connecter pour accéder à cette page !</p>
                            </div>
                        </main>
                    </div>
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
                                                    src="https://i.ytimg.com/vi/wJE95LbWAkI/maxresdefault.jpg"
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
                        </Row>
                    </Container>
                )}
            </main>
        </div>
    );
};

export default Profile;