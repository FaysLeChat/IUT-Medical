import {Button, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";

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
            }
            setPerson({name: "", surname: "", password: "", email: ""});
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <div className="App">
            <main>
                <Container>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            <h1 className="person-title">Créer un compte</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="personName">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Nom" value={person.surname}
                                                  onChange={e => handleTextChange(e, "surname")}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="personSurname">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control type="text" placeholder="Prénom" value={person.name}
                                                  onChange={e => handleTextChange(e, "name")}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="personEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" value={person.email}
                                                  onChange={e => handleTextChange(e, "email")}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="personPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="" value={person.password}
                                                  onChange={e => handleTextChange(e, "password")}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    OK
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
}
