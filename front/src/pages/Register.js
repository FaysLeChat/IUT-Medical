import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import login from "../assets/img/login.png";

export default function Register(){
    const [person, setPerson] = useState({name: "", surname: "", password: "", email: ""});

    function handleTextChange(e, label) {
        setPerson({...person, [label]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/register", person)).data;
            if (response.id === undefined) {
                alert("Echec de connexion!");
            } else {
                alert("Votre utilisateur a été créé! (ID " + response.id + ")");
                window.location.replace("http://localhost:3000/login");
            }
            setPerson({name: "", surname: "", password: "", email: ""});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="App">
            <main>
                <Container className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Image src={login} alt="Image d'inscription" fluid className="w-50 h-100"/>
                        </Col>
                        <Col md={6}>
                            <h1>Inscription</h1>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="personSurname">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre prénom" value={person.name}
                                                          onChange={e => handleTextChange(e, "name")} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="personName">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre nom" value={person.surname}
                                                          onChange={e => handleTextChange(e, "surname")} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="personEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Entrez votre email" value={person.email}
                                                  onChange={e => handleTextChange(e, "email")} />
                                </Form.Group>

                                <Form.Group controlId="personPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="Entrez votre mot de passe" value={person.password}
                                                  onChange={e => handleTextChange(e, "password")} />
                                </Form.Group>

                                <hr />

                                <Button variant="primary" type="submit" className="w-100 mb-3">
                                    S'inscrire
                                </Button>
                            </Form>
                            <div className="text-center">
                                <a href="/login">Déjà un compte ? Connecte toi !</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
