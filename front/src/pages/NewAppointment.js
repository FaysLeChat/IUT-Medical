import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import login from "../assets/img/login.png";

export default function NewAppointment(){
    const [newAppointment, setNewAppointment] = useState({start_time: "", end_time: "", doctor_id: 0, patient_id: 0});

    const handleTextChange = (event, type) => {
        const value = type === 'number' ? Number(event.target.value) : event.target.value;
        setNewAppointment({ ...newAppointment, [event.target.name]: value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = (await axios.post("http://localhost:8000/appointments", newAppointment)).data;
            if (response.id === undefined) {
                alert("Ajout impossible");
            } else {
                window.location.replace("http://localhost:3000/appointment");
            }
            setNewAppointment({start_time: "", end_time: "", doctor_id: 0, patient_id: 0});
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
                            <h1>Prenez rendez-vous</h1>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <label>Date de début</label>
                                    <Col>
                                        <Form.Group controlId="appointmentDate">
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="appointmentTime">
                                            <Form.Control type="time" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <label>Date de fin</label>
                                    <Col>
                                        <Form.Group controlId="appointmentDate">
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="appointmentTime">
                                            <Form.Control type="time" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="appointmentDoctorId">
                                    <Form.Label>Identifiant du docteur</Form.Label>
                                    <Form.Control type="number" name="doctor_id" placeholder="Identifiant du docteur" value={newAppointment.doctor_id} onChange={(e) => handleTextChange(e, 'number')} />
                                </Form.Group>
                                <Form.Group controlId="appointmentPatientId">
                                    <Form.Label>Identifiant du patient</Form.Label>
                                    <Form.Control type="number" name="patient_id" placeholder="Identifiant du patient" value={newAppointment.patient_id} onChange={(e) => handleTextChange(e, 'number')} />
                                </Form.Group>

                                <hr />

                                <Button variant="primary" type="submit" className="w-100 mb-3">
                                    Ajouter le rendez-vous
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
