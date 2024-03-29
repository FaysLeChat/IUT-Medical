import {Button, Container, Form, Row, Col, Image} from "react-bootstrap";
import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import login from "../assets/img/login.png";

export default function Login(props) {
    const [person, setPerson] = useState({password: "", email: ""});
    const navigate = useNavigate();

    function handleTextChange(e, label) {
        setPerson({...person, [label]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/login", person)).data;
            if (response.token === undefined) {
                alert("Echec de connexion!");
            } else {
                props.setCookie("amigo", {
                    email: person.email,
                    token: response.token
                }, "/");

                window.location.replace("http://localhost:3000/profile");
            }
            setPerson({password: "", email: ""});
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
                            <Image src={login} alt="Image de connexion" fluid className="w-50 h-100"/>
                        </Col>
                        <Col md={6}>
                            <h1>Connexion</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="personEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Entrez votre email"
                                        value={person.email}
                                        onChange={e => handleTextChange(e, "email")}
                                    />
                                </Form.Group>

                                <Form.Group controlId="personPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Entrez votre mot de passe"
                                        value={person.password}
                                        onChange={e => handleTextChange(e, "password")}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formRememberMe">
                                    <Form.Check
                                        type="checkbox"
                                        label="Se souvenir de moi"
                                    />
                                </Form.Group>

                                <hr />

                                <Button variant="primary" type="submit" className="w-100 mb-3">
                                    Se connecter
                                </Button>
                            </Form>
                            <Button variant="secondary" className="w-100 mb-3" onClick={() => navigate("/register")}>
                                S'inscrire
                            </Button>
                            <div className="text-center">
                                <a href="/#reset-password">Mot de passe oublié ?</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
