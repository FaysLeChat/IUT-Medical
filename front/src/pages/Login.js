import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

export default function Login() {
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
                alert("Token:" + response.token);
            }
            setPerson({password: "", email: ""});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="App">
            <header>
                <NavbarComponent />
            </header>

            <main>
                <Container>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            <h1 className="person-title">Se connecter</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="personEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Adresse email" value={person.email}
                                                  onChange={e => handleTextChange(e, "email")}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="personPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="" value={person.password}
                                                  onChange={e => handleTextChange(e, "password")}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    OK
                                </Button>{"  "}
                                <Button variant="primary" type="button" onClick={() => navigate("/register")}>
                                    Créer un compte
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
}
