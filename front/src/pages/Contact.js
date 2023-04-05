import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Contact = () => {
    return (
        <div className="App">
            <main>
                <Container>
                    <Row className="justify-content-md-center mt-5">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Contactez-nous</Card.Title>
                                    <Form>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre nom" />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Entrez votre email" />
                                        </Form.Group>

                                        <Form.Group controlId="formSubject">
                                            <Form.Label>Sujet</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez le sujet" />
                                        </Form.Group>

                                        <Form.Group controlId="formMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Entrez votre message" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Envoyer
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
};

export default Contact;