import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import login from "../assets/img/login.png";

export default function Register(){
    const [person, setPerson] = useState({
        name: "",
        surname: "",
        password: "",
        email: "",
        userType: "patient",
        doctorDescription: "",
        medicalOfficeId: "",
        birthdate: "",
        doctorId: ""
    });

    function handleTextChange(e, label) {
        setPerson({...person, [label]: e.target.value})
    }

    function handleRadioChange(e) {
        setPerson({...person, userType: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/register", person)).data;
            if (response.id === undefined) {
                alert("Echec de connexion!");
            } else {
                window.location.replace("http://localhost:3000/login");
            }
            setPerson({
                name: "",
                surname: "",
                password: "",
                email: "",
                userType: "patient",
                doctorDescription: "",
                medicalOfficeId: "",
                birthdate: "",
                doctorId: ""
            });
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
                                            <Form.Control name="surname" type="text" placeholder="Entrez votre prénom" value={person.name}
                                                          onChange={e => handleTextChange(e, "name")} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="personName">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control name="name" type="text" placeholder="Entrez votre nom" value={person.surname}
                                                          onChange={e => handleTextChange(e, "surname")} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="personEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Entrez votre email" value={person.email}
                                                  onChange={e => handleTextChange(e, "email")} />
                                </Form.Group>

                                <Form.Group controlId="personPassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Entrez votre mot de passe" value={person.password}
                                                  onChange={e => handleTextChange(e, "password")} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Type d'utilisateur</Form.Label>
                                    <Form.Check type="radio" label="Patient" name="userType" value="patient" checked={person.userType === "patient"}
                                                onChange={handleRadioChange}/>
                                    <Form.Check type="radio" label="Docteur" name="userType" value="doctor" checked={person.userType === "doctor"}
                                                onChange={handleRadioChange}/>
                                </Form.Group>

                                {person.userType === "doctor" && (
                                    <>
                                        <Form.Group controlId="doctorDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez votre description" value={person.doctorDescription}
                                                          onChange={e => handleTextChange(e, "doctorDescription")} />
                                        </Form.Group>

                                        <Form.Group controlId="medicalOfficeId">
                                            <Form.Label>ID de bureau médical</Form.Label>
                                            <Form.Control type="text" placeholder="Entrez l'ID de votre bureau médical" value={person.medicalOfficeId}
                                                          onChange={e => handleTextChange(e, "medicalOfficeId")} />
                                        </Form.Group>
                                    </>
                                )}

                                {person.userType === "patient" && (
                                    <>
                                        <Form.Group controlId="birthdate">
                                            <Form.Label>Date de naissance</Form.Label>
                                            <Form.Control type="date" value={person.birthdate}
                                                          onChange={e => handleTextChange(e, "birthdate")} />
                                        </Form.Group>

                                        <Form.Group controlId="doctorId">
                                            <Form.Label>ID du docteur</Form.Label>
                                            <Form.Control type="text" value={person.doctorId}
                                                          onChange={e => handleTextChange(e, "doctorId")} />
                                        </Form.Group>
                                    </>
                                )}

                                <Button variant="primary" type="submit">
                                    S'inscrire
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
